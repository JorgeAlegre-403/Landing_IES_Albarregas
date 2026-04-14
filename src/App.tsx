import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CiclosCarousel } from './components/CiclosCarousel'
import { InfoCiclos } from './components/InfoCiclos'
import { ApartadoExtra } from './components/ApartadoExtra'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="w-full">
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
