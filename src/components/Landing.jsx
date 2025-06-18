import Header from './Header'
import Hero from './Hero'
import FeaturedProducts from './FeaturedProducts'
import Process from './Process'
import Footer from './Footer'
import './Landing.css'

const Landing = ({ onNavigate }) => {
  return (
    <div className="landing">
      <Header onNavigate={onNavigate} currentView="home" />
      <Hero onNavigate={onNavigate} />
      <FeaturedProducts onNavigate={onNavigate} />
      <Process onNavigate={onNavigate} />
      <Footer />
    </div>
  )
}

export default Landing
