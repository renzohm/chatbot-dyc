import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-icon">🍰</span>
              <span className="footer-logo-text">
                Delicias <span className="footer-logo-accent">&</span> Caprichos
              </span>
            </div>
            <p className="footer-description">
              Pasteles frescos a la puerta de su casa. Florezca con dulzura y 
              descubra la magia de la pastelería artesanal.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link">
                📧
              </a>
              <a href="#" className="social-link">
                📱
              </a>
              <a href="#" className="social-link">
                🌐
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Productos</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Pasteles de Cumpleaños</a></li>
              <li><a href="#" className="footer-link">Pasteles de Boda</a></li>
              <li><a href="#" className="footer-link">Cupcakes</a></li>
              <li><a href="#" className="footer-link">Postres Especiales</a></li>
              <li><a href="#" className="footer-link">Pasteles Personalizados</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Servicios</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Entrega a Domicilio</a></li>
              <li><a href="#" className="footer-link">Pedidos Personalizados</a></li>
              <li><a href="#" className="footer-link">Asesoría de Sabores</a></li>
              <li><a href="#" className="footer-link">Eventos Especiales</a></li>
              <li><a href="#" className="footer-link">Decoración Premium</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-section-title">Contacto</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:hola@deliciasycaprichos.com" className="contact-link">
                  hola@deliciasycaprichos.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+573001234567" className="contact-link">
                  +57 300 123 4567
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">
                  Bogotá, Colombia
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <span className="contact-text">
                  Lun - Sáb: 8:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2024 Delicias & Caprichos. Todos los derechos reservados.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Términos de Servicio</a>
              <a href="#" className="footer-bottom-link">Política de Privacidad</a>
              <a href="#" className="footer-bottom-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-decoration">
        <div className="decoration-element decoration-1">🍰</div>
        <div className="decoration-element decoration-2">🎂</div>
        <div className="decoration-element decoration-3">🧁</div>
        <div className="decoration-element decoration-4">🍪</div>
      </div>
    </footer>
  )
}

export default Footer
