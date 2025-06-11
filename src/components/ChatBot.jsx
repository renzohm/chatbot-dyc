import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import chatbotService from '../services/chatbotService';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll automático al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Inicializar con mensaje de bienvenida
  useEffect(() => {
    const inicializar = async () => {
      // Probar conexión con Gemini
      const conexionExitosa = await chatbotService.probarConexion();
      console.log('Estado de conexión con Gemini:', conexionExitosa);
      
      const bienvenida = chatbotService.obtenerMensajeBienvenida();
      setMessages([{
        id: 1,
        text: bienvenida.message,
        sender: 'bot',
        timestamp: bienvenida.timestamp
      }]);
    };
    
    inicializar();
  }, []);

  const handleSendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    // Agregar mensaje del usuario
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Enviar mensaje al servicio de chatbot
      const historialParaBot = messages.map(msg => ({
        text: msg.text,
        sender: msg.sender
      }));

      const response = await chatbotService.enviarMensaje(messageText, historialParaBot);
      
      // Agregar respuesta del bot
      const botMessage = {
        id: Date.now() + 1,
        text: response.message,
        sender: 'bot',
        timestamp: response.timestamp,
        error: !response.success
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.',
        sender: 'bot',
        timestamp: new Date(),
        error: true
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    const bienvenida = chatbotService.obtenerMensajeBienvenida();
    setMessages([{
      id: 1,
      text: bienvenida.message,
      sender: 'bot',
      timestamp: bienvenida.timestamp
    }]);
  };

  return (
    <div className="chatbot-main-container">
      <div className="chatbot-header">
        <div className="chatbot-title">
          <h3>💬 Chat con nuestro asistente</h3>
          <span className="chatbot-status">✨ En línea</span>
        </div>
        <div className="chatbot-actions">
          <button onClick={clearChat} className="clear-btn" title="Nueva conversación">
            🔄 Nueva conversación
          </button>
        </div>
      </div>

      <div className="chatbot-messages">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="message bot-message loading">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
};

export default ChatBot;
