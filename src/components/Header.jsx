import { useState } from 'react'
import './Header.css'

const Header = ({ onNavigate, currentView, cartItemsCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: 'home', label: 'Inicio', icon: '🏠' },
    { id: 'products', label: 'Productos', icon: '🧁' },
    { id: 'about', label: 'Nosotros', icon: '👥' },
    { id: 'chat', label: 'Asistente', icon: '💬' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuClick = (viewId) => {
    onNavigate(viewId)
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <span className="logo-icon">🍰</span>
          <span className="logo-text">
            Delicias <span className="logo-accent">&</span> Caprichos
          </span>
        </div>

        <nav className={`header-nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {menuItems.map(item => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${currentView === item.id ? 'nav-link-active' : ''}`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button 
            className="cart-btn"
            onClick={() => onNavigate('cart')}
            title="Ver carrito"
          >
            🛒
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </button>
          
          <button 
            className="instagram-btn"
            onClick={() => window.open('https://www.instagram.com/deliciasycaprichos6/', '_blank')}
            title="Síguenos en Instagram"
          >
            � Instagram
          </button>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'menu-toggle-active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
