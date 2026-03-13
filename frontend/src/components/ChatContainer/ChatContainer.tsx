import { useRef, useEffect } from 'react';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { ChatInput } from '../ChatInput/ChatInput';
import { WelcomeScreen } from '../WelcomeScreen/WelcomeScreen';
import type { Message } from '../../types/chat';
import './ChatContainer.scss';

interface ChatContainerProps {
  messages: Message[];
  isLoading: boolean;
  onSend: (message: string) => void;
  onClear: () => void;
}

export function ChatContainer({ messages, isLoading, onSend, onClear }: ChatContainerProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <header className="chat-container__header">
        <div className="chat-container__logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span>Elexium</span>
        </div>
        {messages.length > 0 && (
          <button className="chat-container__clear" onClick={onClear}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            <span>Clear chat</span>
          </button>
        )}
      </header>

      <div className="chat-container__content">
        {messages.length === 0 ? (
          <WelcomeScreen onSuggestionClick={onSend} />
        ) : (
          <div className="chat-container__messages">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}

        <ChatInput onSend={onSend} isLoading={isLoading} />
      </div>
    </div>
  );
}
