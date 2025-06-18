import React from 'react';
import './Cart.css';

const Cart = ({ items, onUpdateQuantity, onRemoveItem, onNavigate, onCheckout }) => {
  const formatPrice = (price) => {
    return `S/ ${price.toFixed(2)}`;
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.precio * item.quantity), 0);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-header">
          <button 
            className="back-btn"
            onClick={() => onNavigate('products')}
          >
            ← Volver a Productos
          </button>
          <h1>🛒 Carrito de Compras</h1>
        </div>
        
        <div className="empty-content">
          <div className="empty-icon">🛒</div>
          <h2>Tu carrito está vacío</h2>
          <p>Explora nuestros deliciosos productos y agrégalos a tu carrito</p>
          <button 
            className="btn btn-primary"
            onClick={() => onNavigate('products')}
          >
            Ver Productos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <button 
          className="back-btn"
          onClick={() => onNavigate('products')}
        >
          ← Seguir Comprando
        </button>
        <h1>🛒 Carrito de Compras ({getTotalItems()} productos)</h1>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {items.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <span className="product-emoji">🧁</span>
              </div>
              
              <div className="cart-item-info">
                <h3>{item.nombre}</h3>
                <p className="cart-item-description">{item.descripcion}</p>
                <div className="cart-item-price">
                  {formatPrice(item.precio)} c/u
                </div>
              </div>
              
              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveItem(item.id)}
                >
                  🗑️
                </button>
              </div>
              
              <div className="cart-item-total">
                {formatPrice(item.precio * item.quantity)}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h3>Resumen del Pedido</h3>
            
            <div className="summary-line">
              <span>Subtotal ({getTotalItems()} productos)</span>
              <span>{formatPrice(getTotalPrice())}</span>
            </div>
            
            <div className="summary-line">
              <span>Delivery</span>
              <span>S/ 5.00</span>
            </div>
            
            <div className="summary-line total">
              <span>Total</span>
              <span>{formatPrice(getTotalPrice() + 5.00)}</span>
            </div>
            
            <button 
              className="btn btn-primary btn-large checkout-btn"
              onClick={onCheckout}
            >
              Proceder al Pago 💳
            </button>
            
            <div className="payment-methods">
              <p>Métodos de pago aceptados:</p>
              <div className="payment-icons">
                <span>💳</span>
                <span>📱</span>
                <span>🏦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
