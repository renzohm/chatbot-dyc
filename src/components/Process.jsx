import './Process.css'

const Process = ({ onNavigate }) => {
  const steps = [
    {
      number: "1",
      title: "Elige tus productos",
      description: "Explora nuestro catálogo de postres artesanales peruanos y selecciona tus favoritos.",
      icon: "🧁",
      color: "#667eea"
    },
    {
      number: "2", 
      title: "Consulta con nuestro chatbot",
      description: "Usa nuestro asistente virtual para resolver dudas, personalizar tu pedido y obtener recomendaciones.",
      icon: "🤖",
      color: "#667eea"
    },
    {
      number: "3",
      title: "Confirma tu pedido",
      description: "Te ayudamos a confirmar todos los detalles: sabores, cantidad, fecha de entrega y pago.",
      icon: "✅",
      color: "#e53e3e"
    },
    {
      number: "4",
      title: "Disfruta",
      description: "Recibe tus dulces frescos con delivery gratuito o recógelos en nuestra tienda.",
      icon: "🎉",
      color: "#38a169"
    }
  ]

  return (
    <section className="process">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">
            ¿Cómo hacer tu pedido?
          </h2>
          <p className="process-subtitle">
            Es muy fácil disfrutar de nuestros postres peruanos. Solo sigue estos 
            cuatro simples pasos y tendrás los sabores del Perú en tu mesa.
          </p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={step.number} className="step-card">
              <div className="step-connector" style={{ backgroundColor: step.color }}>
                {index < steps.length - 1 && <div className="connector-line"></div>}
              </div>
              
              <div className="step-content">
                <div className="step-icon" style={{ backgroundColor: step.color }}>
                  <span className="step-emoji">{step.icon}</span>
                  <div className="step-number">{step.number}</div>
                </div>
                
                <div className="step-info">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
              
              <div className="step-animation">
                <div className="pulse-ring" style={{ borderColor: step.color }}></div>
                <div className="pulse-ring pulse-ring-delay" style={{ borderColor: step.color }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="process-actions">
          <button 
            className="btn btn-primary-process"
            onClick={() => onNavigate && onNavigate('products')}
          >
            🧁 Ver Productos
          </button>
          <button 
            className="btn btn-secondary-process"
            onClick={() => onNavigate && onNavigate('chat')}
          >
            💬 Consultar Ahora
          </button>
        </div>
      </div>
    </section>
  )
}

export default Process
