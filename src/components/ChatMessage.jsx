import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ message }) => {
  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('es-CO', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatMessageText = (text) => {
    // Convertir markdown básico a HTML
    let formattedText = text
      // Negritas **texto**
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Cursivas *texto*
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Saltos de línea
      .replace(/\n/g, '<br>')
      // Emojis y bullets
      .replace(/•/g, '•')
      // Links básicos (opcional)
      .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');

    return formattedText;
  };

  return (
    <div className={`message ${message.sender}-message ${message.error ? 'error' : ''}`}>
      <div className="message-content">
        <div 
          className="message-text"
          dangerouslySetInnerHTML={{ __html: formatMessageText(message.text) }}
        />
        <div className="message-time">
          {formatTime(message.timestamp)}
          {message.sender === 'user' && (
            <span className="message-status">✓</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
