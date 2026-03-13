import './WelcomeScreen.scss';

const suggestions = [
  'Объясни сложную тему простыми словами',
  'Придумай интересную историю',
  'Помоги написать или исправить код',
  'Дай советы по изучению программирования',
];

interface WelcomeScreenProps {
  onSuggestionClick: (suggestion: string) => void;
}

export function WelcomeScreen({ onSuggestionClick }: WelcomeScreenProps) {
  return (
    <div className="welcome-screen">
      <div className="welcome-screen__content">
        <div className="welcome-screen__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
        <h1 className="welcome-screen__title">AI Assistant</h1>
        <p className="welcome-screen__description">
          Ask me anything. I can help you with coding, writing, analysis, and much more.
        </p>
        <div className="welcome-screen__suggestions">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="welcome-screen__suggestion"
              onClick={() => onSuggestionClick(suggestion)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span>{suggestion}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
