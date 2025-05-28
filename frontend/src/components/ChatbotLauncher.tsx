'use client';
export default function ChatbotLauncher() {
  return (
    <button
      className="chatbot-launcher"
      title="Chat with our Bot"
      aria-label="Open chatbot"
      onClick={() => window.open('http://localhost:3001', '_blank', 'noopener,noreferrer')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#3936d3"/>
        <path d="M8 13h8M8 16h8M10 10h4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
  );
}

