import ChatBot from './components/ChatBot'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1>🍰 Delicias y Caprichos</h1>
        <p>Asistente Virtual</p>
      </div>
      
      <main className="app-main">
        <ChatBot />
      </main>
    </div>
  )
}

export default App
