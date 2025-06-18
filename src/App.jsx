import { useState } from 'react'
import ChatBot from './components/ChatBot'
import Landing from './components/Landing'
import Products from './components/Products'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')

  const handleNavigate = (view) => {
    setCurrentView(view)
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <Landing onNavigate={handleNavigate} />
      case 'chat':
        return (
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
        )
      case 'products':
        return <Products onNavigate={handleNavigate} />
      case 'about':
        return (
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
        )
      case 'contact':
        return (
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
        )
      default:
        return <Landing onNavigate={handleNavigate} />
    }
  }

  return renderCurrentView()
}

export default App
