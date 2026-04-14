import { Button } from '@/ui/button'
import { useState, useEffect } from 'react'

// Importar las fotos del carrusel
import fotoCarrusel1 from '@/assets/Foto-carrusel1.jpg'
import fotoCarrusel2 from '@/assets/Foto-carrusel2.jpg'
import fotoCarrusel3 from '@/assets/Foto-carrusel3.jpg'

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    fotoCarrusel1,
    fotoCarrusel2,
    fotoCarrusel3
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Carrusel slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-20 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up drop-shadow-lg">
          Bienvenido a IES Albarregas
        </h1>

        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-slide-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
          Descubre nuestros ciclos formativos y forma parte de una comunidad educativa en constante evolución
        </p>

        <div className="flex gap-4 justify-center animate-slide-up text-white" style={{ animationDelay: '0.4s' }}>
          <Button
            className='cursor-pointer border-white text-white hover:bg-white/30'
            size="lg"
            onClick={() => document.getElementById('ciclos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Ciclos
          </Button>
          <Button
            className='cursor-pointer border-white text-white hover:bg-white/30'
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contacto
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
