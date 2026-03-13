import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Message } from '../types/chat';
import { askStream, AiServiceError } from '../services/aiService';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string[] | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: uuidv4(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    const assistantMessage: Message = {
      id: uuidv4(),
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      isStreaming: true,
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setIsLoading(true);
    setError(null);

    await askStream(
      { question: content.trim() },
      (chunk) => {
        setMessages((prev) => 
          prev.map((msg, idx) => 
            idx === prev.length - 1 && msg.role === 'assistant'
              ? { ...msg, content: msg.content + chunk }
              : msg
          )
        );
      },
      (err: AiServiceError) => {
        setError(err.errorMessages);
        setMessages((prev) => prev.slice(0, -1));
        setIsLoading(false);
      },
      () => {
        setMessages((prev) => 
          prev.map((msg, idx) => 
            idx === prev.length - 1 && msg.role === 'assistant'
              ? { ...msg, isStreaming: false }
              : msg
          )
        );
        setIsLoading(false);
      }
    );
  }, [isLoading]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    clearError,
  };
}
