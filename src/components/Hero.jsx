import './Hero.css'

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              ¡Los sabores auténticos del 
              <span className="hero-accent"> Perú en cada bocado!</span>
            </h1>
            <p className="hero-subtitle">
              Descubre la magia de la repostería peruana. Desde nuestros tradicionales 
              alfajores hasta innovadoras creaciones con lúcuma y maracuyá. 
              Cada dulce cuenta la historia de nuestra tierra.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => onNavigate && onNavigate('products')}
              >
                🧁 Ver Productos
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => onNavigate && onNavigate('chat')}
              >
                💬 Consultar
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-cake">
              <div className="cake-layer cake-layer-1">🍰</div>
              <div className="cake-layer cake-layer-2">🎂</div>
              <div className="cake-layer cake-layer-3">🧁</div>
            </div>
            <div className="floating-elements">
              <span className="floating-item floating-item-1">🥧</span>
              <span className="floating-item floating-item-2">�</span>
              <span className="floating-item floating-item-3">☕</span>
              <span className="floating-item floating-item-4">🧁</span>
            </div>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">2,500+</div>
            <div className="stat-label">Postres Artesanales</div>
          </div>
          <div className="stat">
            <div className="stat-number">150+</div>
            <div className="stat-label">Familias Felices</div>
          </div>
          <div className="stat">
            <div className="stat-number">🇵🇪</div>
            <div className="stat-label">Sabores Peruanos</div>
          </div>
        </div>
      </div>
      
      <div className="hero-decoration">
        <svg className="wave" viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
