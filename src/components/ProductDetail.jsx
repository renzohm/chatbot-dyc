import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerProductoPorId, obtenerPorCategoria } from '../data/productos';
import Header from './Header';
import './ProductDetail.css';

const ProductDetail = ({ onNavigate, onBack, onAddToCart, cartItemsCount = 0 }) => {
  const { id } = useParams();
  const productId = parseInt(id);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  
  const product = obtenerProductoPorId(productId);
  
  // Obtener productos relacionados de la misma categoría
  const getRelatedProducts = () => {
    if (!product) return [];
    
    const categoryProducts = obtenerPorCategoria(product.categoria.toLowerCase());
    return categoryProducts
      .filter(p => p.id !== product.id) // Excluir el producto actual
      .slice(0, 3); // Mostrar solo 3 productos relacionados
  };

  const relatedProducts = getRelatedProducts();

  if (!product) {
    return (
      <div className="product-detail-error">
        <div className="error-content">
          <div className="error-icon">😕</div>
          <h2>Producto no encontrado</h2>
          <p>El producto que buscas no está disponible en este momento.</p>
          <button 
            className="btn btn-primary"
            onClick={() => onNavigate && onNavigate('products')}
          >
            Ver Todos los Productos
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return `S/ ${price.toFixed(2)}`;
  };

  const getCategoryIcon = (categoria) => {
    switch (categoria.toLowerCase()) {
      case 'dulces':
      case 'postres':
        return '🧁';
      case 'bebidas':
      case 'bebidas calientes':
      case 'bebidas frías':
        return '☕';
      case 'panadería':
      case 'salados':
        return '🥐';
      case 'especiales':
        return '✨';
      default:
        return '🍽️';
    }
  };

  const handleInstagramContact = () => {
    window.open('https://www.instagram.com/deliciasycaprichos6/', '_blank');
  };

  const handleAddToCart = () => {
    if (onAddToCart && product.disponible) {
      onAddToCart({
        ...product,
        quantity: quantity
      });
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-detail">
      <Header onNavigate={onNavigate} currentView="products" cartItemsCount={cartItemsCount} />
      
      <div className="product-detail-header">
        <div className="breadcrumb">
          <button 
            className="breadcrumb-item"
            onClick={() => onNavigate && onNavigate('home')}
          >
            🏠 Inicio
          </button>
          <span className="breadcrumb-separator">›</span>
          <button 
            className="breadcrumb-item"
            onClick={() => onNavigate && onNavigate('products')}
          >
            🛍️ Productos
          </button>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">
            {product ? product.nombre : 'Producto'}
          </span>
        </div>
      </div>

      <div className="product-detail-container">
        <div className="product-detail-image">
          <div className="product-main-image">
            <span className="product-emoji-large">{getCategoryIcon(product.categoria)}</span>
            <div className="product-category-badge">
              {product.categoria}
            </div>
            {!product.disponible && (
              <div className="product-unavailable-overlay">
                <span>No Disponible</span>
              </div>
            )}
          </div>
        </div>

        <div className="product-detail-info">
          <div className="product-header">
            <h1 className="product-title">{product.nombre}</h1>
            <div className="product-price-section">
              <span className="product-price">{formatPrice(product.precio)}</span>
              {product.unidad && (
                <span className="product-unit">por {product.unidad}</span>
              )}
              {product.porciones && (
                <span className="product-portions">{product.porciones}</span>
              )}
              {product.impuestos && (
                <span className="product-taxes">IGV incluido</span>
              )}
            </div>
          </div>

          <div className="product-description">
            <p>{product.descripcion}</p>
          </div>

          <div className="product-details-grid">
            {product.sabores && (
              <div className="detail-item">
                <h3>🍯 Sabores Disponibles</h3>
                <div className="detail-tags">
                  {product.sabores.map((sabor, index) => (
                    <span key={index} className="detail-tag">{sabor}</span>
                  ))}
                </div>
              </div>
            )}

            {product.variedades && (
              <div className="detail-item">
                <h3>🎯 Variedades</h3>
                <div className="detail-tags">
                  {product.variedades.map((variedad, index) => (
                    <span key={index} className="detail-tag">{variedad}</span>
                  ))}
                </div>
              </div>
            )}

            {product.tamaños && (
              <div className="detail-item">
                <h3>📏 Tamaños</h3>
                <div className="detail-tags">
                  {product.tamaños.map((tamaño, index) => (
                    <span key={index} className="detail-tag">{tamaño}</span>
                  ))}
                </div>
              </div>
            )}

            {product.ingredientes && (
              <div className="detail-item">
                <h3>🥄 Ingredientes</h3>
                <div className="ingredients-list">
                  {product.ingredientes.map((ingrediente, index) => (
                    <span key={index} className="ingredient-item">{ingrediente}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="product-requirements">
            {product.minimoCompra && (
              <div className="requirement-item">
                <span className="requirement-icon">📦</span>
                <span>Compra mínima: {product.minimoCompra} unidades</span>
              </div>
            )}

            {product.anticipacion && (
              <div className="requirement-item">
                <span className="requirement-icon">⏰</span>
                <span>Requiere {product.anticipacion} de anticipación</span>
              </div>
            )}

            {product.empaque && (
              <div className="requirement-item">
                <span className="requirement-icon">🎁</span>
                <span>{product.empaque}</span>
              </div>
            )}

            {product.personalizacion && (
              <div className="requirement-item">
                <span className="requirement-icon">🎨</span>
                <span>Personalización {product.personalizacion}</span>
              </div>
            )}
          </div>

          {product.delivery && (
            <div className="delivery-info">
              <h3>🚚 Información de Delivery</h3>
              <div className="delivery-details">
                <p><strong>Costo:</strong> {formatPrice(product.delivery.precio)}</p>
                {product.delivery.zona && (
                  <p><strong>Zona:</strong> {product.delivery.zona}</p>
                )}
                {product.delivery.gratis && (
                  <p className="delivery-free">
                    <span className="delivery-free-icon">🎉</span>
                    Delivery gratis en {product.delivery.gratis}
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="product-actions">
            <div className="quantity-selector">
              <label>Cantidad:</label>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="action-buttons">
              <button 
                className={`btn btn-primary btn-large ${addedToCart ? 'added' : ''}`}
                onClick={handleAddToCart}
                disabled={!product.disponible}
              >
                <span className="btn-icon">
                  {addedToCart ? '✅' : '�'}
                </span>
                {!product.disponible 
                  ? 'No Disponible' 
                  : addedToCart 
                    ? '¡Agregado!' 
                    : 'Agregar al Carrito'
                }
              </button>
              
              <button 
                className="btn btn-secondary btn-large"
                onClick={handleInstagramContact}
                disabled={!product.disponible}
              >
                <span className="btn-icon">📸</span>
                Ver en Instagram
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="related-products">
        <h3>Otros productos que te pueden interesar</h3>
        {relatedProducts.length > 0 ? (
          <div className="related-grid">
            {relatedProducts.map(relatedProduct => (
              <div 
                key={relatedProduct.id} 
                className="related-product-card"
                onClick={() => onNavigate && onNavigate('product-detail', relatedProduct.id)}
              >
                <div className="related-product-image">
                  <span className="related-product-emoji">
                    {getCategoryIcon(relatedProduct.categoria)}
                  </span>
                </div>
                <div className="related-product-info">
                  <h4>{relatedProduct.nombre}</h4>
                  <p className="related-product-price">
                    {formatPrice(relatedProduct.precio)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="related-placeholder">
            <p>Descubre más productos en nuestra sección completa</p>
            <button 
              className="btn btn-outline"
              onClick={() => onNavigate && onNavigate('products')}
            >
              Ver Todos los Productos
            </button>
          </div>
        )}
      </div>

      <div className="contact-footer">
        <div className="contact-card">
          <h3>¿Tienes alguna pregunta?</h3>
          <p>Nuestro equipo está listo para ayudarte con tu pedido</p>
          <div className="contact-options">
            <button 
              className="contact-option"
              onClick={handleInstagramContact}
            >
              <span className="contact-icon">�</span>
              <span>Instagram</span>
            </button>
            <a href="tel:+51934567890" className="contact-option">
              <span className="contact-icon">📞</span>
              <span>Llamar</span>
            </a>
            <button 
              className="contact-option"
              onClick={() => onNavigate && onNavigate('chat')}
            >
              <span className="contact-icon">🤖</span>
              <span>Chat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
