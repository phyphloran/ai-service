import type { AiRequestDto, ApiError } from '../types/chat';

const API_BASE_URL = 'http://localhost:8080/api/v1/ai';

export class AiServiceError extends Error {
  constructor(public errorMessages: string[]) {
    super(errorMessages.join(', '));
    this.name = 'AiServiceError';
  }
}

export async function askStream(
  request: AiRequestDto,
  onChunk: (chunk: string) => void,
  onError: (error: AiServiceError) => void,
  onComplete: () => void
): Promise<void> {
  try {
    const response = await fetch(`${API_BASE_URL}/ask-stream`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const errorData: ApiError = await response.json();
      onError(new AiServiceError(errorData.errorMessages || ['An unknown error occurred']));
      return;
    }

    const reader = response.body?.getReader();
    if (!reader) {
      onError(new AiServiceError(['Failed to initialize stream reader']));
      return;
    }

    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      
      if (done) {
        onComplete();
        break;
      }

      buffer += decoder.decode(value, { stream: true });
      
      // SSE format: "data: <content>\n\n"
      const lines = buffer.split('\n');
      buffer = '';
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Keep incomplete lines in buffer for next iteration
        if (i === lines.length - 1 && !line.endsWith('\n') && line !== '') {
          buffer = line;
          continue;
        }
        
        // Skip empty lines
        if (line.trim() === '') {
          continue;
        }
        
        // Parse SSE data lines
        if (line.startsWith('data:')) {
          const content = line.slice(5); // Remove "data:" prefix
          if (content && content !== '[DONE]') {
            onChunk(content);
          }
        }
      }
    }
  } catch (error) {
    if (error instanceof AiServiceError) {
      onError(error);
    } else {
      onError(new AiServiceError(['Network error. Please check your connection.']));
    }
  }
}
