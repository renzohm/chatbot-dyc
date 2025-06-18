import React from 'react';
import './OrderConfirmation.css';

const OrderConfirmation = ({ orderData, onNavigate }) => {
  const formatPrice = (price) => {
    return `S/ ${price.toFixed(2)}`;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('es-PE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getEstimatedDelivery = () => {
    const now = new Date();
    const deliveryTime = new Date(now.getTime() + (45 * 60 * 1000)); // 45 minutos
    return deliveryTime.toLocaleDateString('es-PE', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleWhatsAppContact = () => {
    const message = `¡Hola! Mi pedido #${orderData.orderId} ha sido confirmado. ¿Podrían darme el estado de mi orden?`;
    const phoneNumber = '51934567890';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="order-confirmation">
      <div className="confirmation-container">
        <div className="confirmation-header">
          <div className="success-animation">
            <div className="success-checkmark">
              <div className="check-icon">
                <span className="check-line check-tip"></span>
                <span className="check-line check-long"></span>
              </div>
            </div>
          </div>
          
          <h1>¡Pedido Confirmado! 🎉</h1>
          <p className="confirmation-message">
            Tu pedido ha sido procesado exitosamente y pronto estará en camino.
          </p>
        </div>

        <div className="order-details-card">
          <div className="order-info">
            <h2>Detalles del Pedido</h2>
            
            <div className="order-summary">
              <div className="order-id">
                <span className="label">Número de Pedido:</span>
                <span className="value">{orderData.orderId}</span>
              </div>
              
              <div className="order-date">
                <span className="label">Fecha del Pedido:</span>
                <span className="value">{formatDate(Date.now())}</span>
              </div>
              
              <div className="estimated-delivery">
                <span className="label">Entrega Estimada:</span>
                <span className="value highlighted">🚚 {getEstimatedDelivery()}</span>
              </div>
            </div>
          </div>

          <div className="customer-info">
            <h3>Información del Cliente</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">👤 Nombre:</span>
                <span className="info-value">{orderData.customer.name}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📧 Email:</span>
                <span className="info-value">{orderData.customer.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">📱 Teléfono:</span>
                <span className="info-value">{orderData.customer.phone}</span>
              </div>
            </div>
          </div>

          <div className="delivery-info">
            <h3>Dirección de Entrega</h3>
            <div className="address-card">
              <div className="address-icon">🏠</div>
              <div className="address-details">
                <p><strong>{orderData.address.street}</strong></p>
                <p>{orderData.address.district}</p>
                {orderData.address.reference && (
                  <p className="reference">Referencia: {orderData.address.reference}</p>
                )}
              </div>
            </div>
          </div>

          <div className="order-items">
            <h3>Productos Pedidos</h3>
            <div className="items-list">
              {orderData.items.map(item => (
                <div key={item.id} className="order-item">
                  <div className="item-image">
                    <span className="item-emoji">🧁</span>
                  </div>
                  <div className="item-details">
                    <h4>{item.nombre}</h4>
                    <p className="item-description">{item.descripcion}</p>
                  </div>
                  <div className="item-quantity">
                    x{item.quantity}
                  </div>
                  <div className="item-price">
                    {formatPrice(item.precio * item.quantity)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="payment-summary">
            <h3>Resumen de Pago</h3>
            <div className="payment-details">
              <div className="payment-line">
                <span>Subtotal</span>
                <span>{formatPrice(orderData.total - 5.00)}</span>
              </div>
              <div className="payment-line">
                <span>Delivery</span>
                <span>S/ 5.00</span>
              </div>
              <div className="payment-line total">
                <span>Total Pagado</span>
                <span>{formatPrice(orderData.total)}</span>
              </div>
              <div className="payment-method">
                <span className="method-label">Método de Pago:</span>
                <span className="method-value">
                  {orderData.paymentMethod === 'card' ? '💳 Tarjeta' : '📱 Yape'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="next-steps">
          <h3>¿Qué sigue ahora?</h3>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">👨‍🍳</div>
              <h4>Preparación</h4>
              <p>Nuestro equipo comenzará a preparar tu pedido de inmediato</p>
            </div>
            <div className="step-card">
              <div className="step-icon">📦</div>
              <h4>Empaquetado</h4>
              <p>Empaquetaremos cuidadosamente tus productos</p>
            </div>
            <div className="step-card">
              <div className="step-icon">🚚</div>
              <h4>Entrega</h4>
              <p>Nuestro repartidor llevará tu pedido hasta tu puerta</p>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button 
            className="btn btn-primary"
            onClick={handleWhatsAppContact}
          >
            <span className="btn-icon">💬</span>
            Contactar por WhatsApp
          </button>
          
          <button 
            className="btn btn-secondary"
            onClick={() => onNavigate('products')}
          >
            <span className="btn-icon">🛍️</span>
            Seguir Comprando
          </button>
          
          <button 
            className="btn btn-outline"
            onClick={() => onNavigate('home')}
          >
            <span className="btn-icon">🏠</span>
            Volver al Inicio
          </button>
        </div>

        <div className="support-info">
          <div className="support-card">
            <h4>¿Necesitas ayuda?</h4>
            <p>Nuestro equipo de atención al cliente está disponible para ayudarte</p>
            <div className="support-options">
              <a href="tel:+51934567890" className="support-option">
                <span className="support-icon">📞</span>
                <span>Llamar</span>
              </a>
              <button 
                className="support-option"
                onClick={handleWhatsAppContact}
              >
                <span className="support-icon">💬</span>
                <span>WhatsApp</span>
              </button>
              <button 
                className="support-option"
                onClick={() => onNavigate('chat')}
              >
                <span className="support-icon">🤖</span>
                <span>Chat Bot</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
