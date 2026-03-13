import { ChatContainer } from './components/ChatContainer/ChatContainer';
import { Toast } from './components/Toast/Toast';
import { useChat } from './hooks/useChat';
import './styles/globals.scss';

function App() {
  const { messages, isLoading, error, sendMessage, clearMessages, clearError } = useChat();

  return (
    <>
      <div className="app-background">
        <div className="app-background__blob app-background__blob--1" />
        <div className="app-background__blob app-background__blob--2" />
        <div className="app-background__blob app-background__blob--3" />
      </div>
      <div className="app">
        <ChatContainer
          messages={messages}
          isLoading={isLoading}
          onSend={sendMessage}
          onClear={clearMessages}
        />
      </div>
      {error && <Toast messages={error} onClose={clearError} />}
    </>
  );
}

export default App;
