import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // Import CSS-a za animacije

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Staff from './components/Staff'
import Prices from './components/Prices'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews' 
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <div className="page bg-black text-white min-h-screen font-sans">
      <Navbar />
      <main className="page-main overflow-hidden">
        <Hero />
        <About />
        <Prices />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App