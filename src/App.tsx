import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import GallerySection from './components/sections/GallerySection'
import InstagramSection from './components/sections/InstagramSection'
import ShopSection from './components/sections/ShopSection'
import ContactSection from './components/sections/ContactSection'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <InstagramSection />
        <ShopSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
