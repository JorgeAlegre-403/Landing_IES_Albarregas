import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CiclosCarousel } from './components/CiclosCarousel'
import { InfoCiclos } from './components/InfoCiclos'
import { ApartadoExtra } from './components/ApartadoExtra'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="w-full">
      <a
        href="#ciclos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
                   focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white
                   focus:rounded-md focus:font-semibold focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      <Navbar />
      <Hero />
      <CiclosCarousel />
      <InfoCiclos />
      <ApartadoExtra />
      <Footer />
    </div>
  )
}

export default App