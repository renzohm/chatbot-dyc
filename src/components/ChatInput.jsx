import React, { useState, useRef } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const quickQuestions = [
    "¿Qué postres tienen disponibles?",
    "¿Cuáles son sus horarios?",
    "¿Hacen tortas personalizadas?",
    "¿Tienen servicio a domicilio?"
  ];

  const handleQuickQuestion = (question) => {
    if (!disabled) {
      onSendMessage(question);
    }
  };

  return (
    <div className="chat-input-container">
      {/* Preguntas rápidas */}
      <div className="quick-questions">
        {quickQuestions.map((question, index) => (
          <button
            key={index}
            className="quick-question-btn"
            onClick={() => handleQuickQuestion(question)}
            disabled={disabled}
          >
            {question}
          </button>
        ))}
      </div>

      {/* Input principal */}
      <form onSubmit={handleSubmit} className="chat-input-form">
        <div className="input-wrapper">
          <textarea
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu mensaje... (Enter para enviar)"
            disabled={disabled}
            rows="1"
            className="chat-input"
          />
          <button
            type="submit"
            disabled={disabled || !message.trim()}
            className="send-button"
          >
            {disabled ? '⏳' : '➤'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
