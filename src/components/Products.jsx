import React, { useState, useEffect } from 'react';
import { productosDeliciasYCaprichos, obtenerPorCategoria } from '../data/productos';
import Header from './Header';
import './Products.css';

const Products = ({ onNavigate, cartItemsCount = 0, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'todos', name: 'Todos los Productos', icon: '🛍️' },
    { id: 'dulces', name: 'Dulces y Postres', icon: '🧁' },
    { id: 'bebidas', name: 'Bebidas', icon: '☕' },
    { id: 'panaderia', name: 'Panadería', icon: '🥐' },
    { id: 'especiales', name: 'Especiales', icon: '✨' }
  ];

  useEffect(() => {
    loadProducts();
  }, [selectedCategory, searchTerm]);

  const loadProducts = () => {
    let allProducts = [];
    
    if (selectedCategory === 'todos') {
      allProducts = [
        ...productosDeliciasYCaprichos.dulces,
        ...productosDeliciasYCaprichos.bebidas,
        ...productosDeliciasYCaprichos.panaderia,
        ...productosDeliciasYCaprichos.especiales
      ];
    } else {
      allProducts = obtenerPorCategoria(selectedCategory);
    }

    if (searchTerm) {
      allProducts = allProducts.filter(product =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setProducts(allProducts);
  };

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

  const handleAddToCart = (product) => {
    if (onAddToCart) {
      // Agregar con cantidad por defecto de 1
      onAddToCart({
        ...product,
        quantity: 1
      });
      
      // Mostrar feedback visual más elegante
      const notification = document.createElement('div');
      notification.className = 'cart-notification';
      notification.innerHTML = `
        <div class="notification-content">
          <span class="notification-icon">✅</span>
          <span class="notification-text">${product.nombre} agregado al carrito</span>
        </div>
      `;
      
      // Agregar estilos inline para la notificación
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 600;
        animation: slideInRight 0.3s ease-out;
      `;
      
      document.body.appendChild(notification);
      
      // Remover la notificación después de 3 segundos
      setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
          if (document.body.contains(notification)) {
            document.body.removeChild(notification);
          }
        }, 300);
      }, 3000);
    }
  };

  return (
    <div className="products-page">
      <Header onNavigate={onNavigate} currentView="products" cartItemsCount={cartItemsCount} />
      
      <div className="products-header">
        <div className="products-hero">
          <h1>Nuestros Productos</h1>
          <p>Descubre la mejor selección de postres artesanales, bebidas premium y productos gourmet</p>
        </div>

        <div className="products-search">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="categories-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="products-container">
        {products.length === 0 ? (
          <div className="no-products">
            <div className="no-products-icon">😔</div>
            <h3>No se encontraron productos</h3>
            <p>Intenta con otros términos de búsqueda o selecciona otra categoría</p>
          </div>
        ) : (
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div 
                  className="product-image clickable"
                  onClick={() => onNavigate && onNavigate('product-detail', product.id)}
                  title="Ver detalles del producto"
                >
                  <span className="product-emoji">{getCategoryIcon(product.categoria)}</span>
                  <div className="product-category-badge">
                    {product.categoria}
                  </div>
                  {!product.disponible && (
                    <div className="product-unavailable">
                      No Disponible
                    </div>
                  )}
                </div>

                <div className="product-info">
                  <h3 
                    className="product-name clickable"
                    onClick={() => onNavigate && onNavigate('product-detail', product.id)}
                    title="Ver detalles del producto"
                  >
                    {product.nombre}
                  </h3>
                  <p className="product-description">{product.descripcion}</p>
                  
                  <div className="product-details">
                    {product.unidad && (
                      <span className="product-unit">Por {product.unidad}</span>
                    )}
                    {product.porciones && (
                      <span className="product-portions">{product.porciones}</span>
                    )}
                    {product.minimoCompra && (
                      <span className="product-minimum">Mín: {product.minimoCompra} und.</span>
                    )}
                  </div>

                  {product.variedades && (
                    <div className="product-varieties">
                      <strong>Variedades:</strong> {product.variedades.join(', ')}
                    </div>
                  )}

                  {product.sabores && (
                    <div className="product-flavors">
                      <strong>Sabores:</strong> {product.sabores.join(', ')}
                    </div>
                  )}

                  {product.tamaños && (
                    <div className="product-sizes">
                      <strong>Tamaños:</strong> {product.tamaños.join(', ')}
                    </div>
                  )}

                  {product.anticipacion && (
                    <div className="product-notice">
                      ⏰ Requiere {product.anticipacion} de anticipación
                    </div>
                  )}

                  <div className="product-footer">
                    <div className="product-price">
                      <span className="price-amount">{formatPrice(product.precio)}</span>
                      {product.impuestos && (
                        <span className="price-taxes">IGV incluido</span>
                      )}
                    </div>
                    
                    <div className="product-actions">
                      <button 
                        className="btn-detail"
                        onClick={() => onNavigate && onNavigate('product-detail', product.id)}
                        title="Ver detalles del producto"
                      >
                        👁️ Ver Detalles
                      </button>
                      <button 
                        className="btn-chat"
                        onClick={() => window.open('https://www.instagram.com/deliciasycaprichos6/', '_blank')}
                        title="Ver en Instagram"
                      >
                        � Instagram
                      </button>
                      {product.disponible && (
                        <button 
                          className="btn-add-cart"
                          onClick={() => handleAddToCart(product)}
                          title="Agregar al carrito"
                        >
                          🛒 Agregar al carrito
                        </button>
                      )}
                    </div>
                  </div>

                  {product.delivery && (
                    <div className="product-delivery">
                      🚚 Delivery: {formatPrice(product.delivery.precio)} 
                      {product.delivery.gratis && (
                        <span className="delivery-free"> - Gratis en {product.delivery.gratis}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="products-contact">
        <div className="contact-card">
          <h3>¿Necesitas algo especial?</h3>
          <p>Contáctanos para pedidos personalizados o consultas especiales</p>
          <div className="contact-actions">
            <button 
              className="btn btn-primary"
              onClick={() => onNavigate && onNavigate('chat')}
            >
              💬 Chatear con nosotros
            </button>
            <a href="tel:+51934567890" className="btn btn-outline">
              📞 Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
