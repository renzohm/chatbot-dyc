import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cartItems, onNavigate, onPaymentComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Datos personales
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Dirección de entrega
    address: '',
    district: '',
    reference: '',
    
    // Datos de pago
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    
    // Método de pago
    paymentMethod: 'card'
  });

  const [errors, setErrors] = useState({});

  const formatPrice = (price) => {
    return `S/ ${price.toFixed(2)}`;
  };

  const getTotalPrice = () => {
    const subtotal = cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0);
    return subtotal + 5.00; // Incluye delivery
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'El nombre es requerido';
      if (!formData.lastName.trim()) newErrors.lastName = 'El apellido es requerido';
      if (!formData.email.trim()) newErrors.email = 'El email es requerido';
      if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
      if (!formData.address.trim()) newErrors.address = 'La dirección es requerida';
      if (!formData.district.trim()) newErrors.district = 'El distrito es requerido';
    }
    
    if (step === 2 && formData.paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'El número de tarjeta es requerido';
      if (!formData.cardName.trim()) newErrors.cardName = 'El nombre en la tarjeta es requerido';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'La fecha de vencimiento es requerida';
      if (!formData.cvv.trim()) newErrors.cvv = 'El CVV es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(2)) {
      // Simular procesamiento de pago
      onPaymentComplete({
        orderId: 'ORD-' + Date.now(),
        customer: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone
        },
        address: {
          street: formData.address,
          district: formData.district,
          reference: formData.reference
        },
        total: getTotalPrice(),
        items: cartItems,
        paymentMethod: formData.paymentMethod
      });
    }
  };

  const renderPersonalInfo = () => (
    <div className="checkout-step">
      <h2>📋 Información Personal y Entrega</h2>
      
      <div className="form-section">
        <h3>Datos Personales</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>
          
          <div className="form-group">
            <label>Apellido *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label>Teléfono *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <h3>Dirección de Entrega</h3>
        <div className="form-group">
          <label>Dirección *</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={errors.address ? 'error' : ''}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Distrito *</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              className={errors.district ? 'error' : ''}
            >
              <option value="">Seleccionar distrito</option>
              <option value="Miraflores">Miraflores</option>
              <option value="San Isidro">San Isidro</option>
              <option value="Barranco">Barranco</option>
              <option value="Surco">Surco</option>
              <option value="La Molina">La Molina</option>
              <option value="San Borja">San Borja</option>
              <option value="Pueblo Libre">Pueblo Libre</option>
              <option value="Magdalena">Magdalena</option>
            </select>
            {errors.district && <span className="error-message">{errors.district}</span>}
          </div>
          
          <div className="form-group">
            <label>Referencia</label>
            <input
              type="text"
              name="reference"
              value={formData.reference}
              onChange={handleInputChange}
              placeholder="Ej: Frente al parque, casa azul..."
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderPaymentInfo = () => (
    <div className="checkout-step">
      <h2>💳 Información de Pago</h2>
      
      <div className="payment-methods">
        <div className="payment-method">
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            value="card"
            checked={formData.paymentMethod === 'card'}
            onChange={handleInputChange}
          />
          <label htmlFor="card">
            <span className="payment-icon">💳</span>
            Tarjeta de Crédito/Débito
          </label>
        </div>
        
        <div className="payment-method">
          <input
            type="radio"
            id="yape"
            name="paymentMethod"
            value="yape"
            checked={formData.paymentMethod === 'yape'}
            onChange={handleInputChange}
          />
          <label htmlFor="yape">
            <span className="payment-icon">📱</span>
            Yape
          </label>
        </div>
      </div>
      
      {formData.paymentMethod === 'card' && (
        <div className="card-form">
          <div className="form-group">
            <label>Número de Tarjeta *</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              className={errors.cardNumber ? 'error' : ''}
            />
            {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
          </div>
          
          <div className="form-group">
            <label>Nombre en la Tarjeta *</label>
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleInputChange}
              placeholder="Como aparece en la tarjeta"
              className={errors.cardName ? 'error' : ''}
            />
            {errors.cardName && <span className="error-message">{errors.cardName}</span>}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Fecha de Vencimiento *</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/AA"
                className={errors.expiryDate ? 'error' : ''}
              />
              {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
            </div>
            
            <div className="form-group">
              <label>CVV *</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                className={errors.cvv ? 'error' : ''}
              />
              {errors.cvv && <span className="error-message">{errors.cvv}</span>}
            </div>
          </div>
        </div>
      )}
      
      {formData.paymentMethod === 'yape' && (
        <div className="yape-info">
          <div className="yape-instructions">
            <h4>Instrucciones para pagar con Yape:</h4>
            <ol>
              <li>Abre tu aplicación Yape</li>
              <li>Escanea el código QR que aparecerá</li>
              <li>Confirma el pago por {formatPrice(getTotalPrice())}</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="checkout">
      <div className="checkout-header">
        <button 
          className="back-btn"
          onClick={() => onNavigate('cart')}
        >
          ← Volver al Carrito
        </button>
        <h1>🛒 Finalizar Compra</h1>
      </div>

      <div className="checkout-container">
        <div className="checkout-steps">
          <div className="step-indicator">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
              <span>1</span>
              <label>Datos Personales</label>
            </div>
            <div className="step-line"></div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
              <span>2</span>
              <label>Pago</label>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {currentStep === 1 && renderPersonalInfo()}
            {currentStep === 2 && renderPaymentInfo()}

            <div className="checkout-actions">
              {currentStep > 1 && (
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={handlePreviousStep}
                >
                  ← Anterior
                </button>
              )}
              
              {currentStep < 2 ? (
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={handleNextStep}
                >
                  Siguiente →
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                >
                  Confirmar Pedido {formatPrice(getTotalPrice())}
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="order-summary">
          <div className="summary-card">
            <h3>Resumen del Pedido</h3>
            
            <div className="order-items">
              {cartItems.map(item => (
                <div key={item.id} className="order-item">
                  <span className="item-name">{item.nombre}</span>
                  <span className="item-quantity">x{item.quantity}</span>
                  <span className="item-price">{formatPrice(item.precio * item.quantity)}</span>
                </div>
              ))}
            </div>
            
            <div className="order-totals">
              <div className="total-line">
                <span>Subtotal</span>
                <span>{formatPrice(cartItems.reduce((total, item) => total + (item.precio * item.quantity), 0))}</span>
              </div>
              <div className="total-line">
                <span>Delivery</span>
                <span>S/ 5.00</span>
              </div>
              <div className="total-line final-total">
                <span>Total</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
