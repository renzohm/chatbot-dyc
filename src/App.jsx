import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import ChatBot from './components/ChatBot'
import Landing from './components/Landing'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import OrderConfirmation from './components/OrderConfirmation'
import './App.css'

function AppContent() {
  const [selectedProductId, setSelectedProductId] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [orderData, setOrderData] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (view, productId = null) => {
    if (productId) {
      setSelectedProductId(productId)
    }
    
    switch (view) {
      case 'home':
        navigate('/')
        break
      case 'chat':
        navigate('/chatbot-dyc')
        break
      case 'products':
        navigate('/products')
        break
      case 'product-detail':
        navigate(`/product/${productId}`)
        break
      case 'cart':
        navigate('/cart')
        break
      case 'checkout':
        navigate('/checkout')
        break
      case 'order-confirmation':
        navigate('/order-confirmation')
        break
      case 'about':
        navigate('/about')
        break
      case 'contact':
        navigate('/contact')
        break
      default:
        navigate('/')
    }
  }

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: product.quantity }];
      }
    });
  }

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }

  const handleRemoveFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }

  const handleCheckout = () => {
    handleNavigate('checkout');
  }

  const handlePaymentComplete = (orderInfo) => {
    setOrderData(orderInfo);
    setCartItems([]); // Limpiar carrito
    handleNavigate('order-confirmation');
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={<Landing onNavigate={handleNavigate} cartItemsCount={cartItems.length} />} 
      />
      <Route 
        path="/chatbot-dyc" 
        element={
          <div className="app">
            <div className="app-header">
              <h1>🍰 Delicias y Caprichos</h1>
              <p>Asistente Virtual</p>
              <button 
                className="back-button"
                onClick={() => handleNavigate('home')}
              >
                ← Volver al Inicio
              </button>
            </div>
            
            <main className="app-main">
              <ChatBot />
            </main>
          </div>
        } 
      />
      <Route 
        path="/products" 
        element={<Products 
          onNavigate={handleNavigate} 
          cartItemsCount={cartItems.length} 
          onAddToCart={handleAddToCart}
        />} 
      />
      <Route 
        path="/product/:id" 
        element={
          <ProductDetail 
            onNavigate={handleNavigate}
            onBack={() => handleNavigate('products')}
            onAddToCart={handleAddToCart}
            cartItemsCount={cartItems.length}
          />
        } 
      />
      <Route 
        path="/cart" 
        element={
          <Cart
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onNavigate={handleNavigate}
            onCheckout={handleCheckout}
          />
        } 
      />
      <Route 
        path="/checkout" 
        element={
          <Checkout
            cartItems={cartItems}
            onNavigate={handleNavigate}
            onPaymentComplete={handlePaymentComplete}
          />
        } 
      />
      <Route 
        path="/order-confirmation" 
        element={
          <OrderConfirmation
            orderData={orderData}
            onNavigate={handleNavigate}
          />
        } 
      />
      <Route 
        path="/about" 
        element={
          <div className="coming-soon">
            <div className="coming-soon-content">
              <h1>👥 Sobre Nosotros</h1>
              <p>Próximamente...</p>
              <button 
                className="back-button"
                onClick={() => handleNavigate('home')}
              >
                ← Volver al Inicio
              </button>
            </div>
          </div>
        } 
      />
      <Route 
        path="/contact" 
        element={
          <div className="coming-soon">
            <div className="coming-soon-content">
              <h1>📧 Contacto</h1>
              <p>Próximamente...</p>
              <button 
                className="back-button"
                onClick={() => handleNavigate('home')}
              >
                ← Volver al Inicio
              </button>
            </div>
          </div>
        } 
      />
    </Routes>
  )
}

function App() {
  // Para manejo de base path en producción
  const basename = import.meta.env.PROD ? '/chatbot-dyc' : '';
  
  return (
    <Router basename={basename}>
      <AppContent />
    </Router>
  )
}

export default App
