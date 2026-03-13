export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

export interface AiRequestDto {
  question: string;
}

export interface AiFluxResponseDto {
  response: string;
}

export interface ApiError {
  errorMessages: string[];
}
