import { useState, useEffect } from 'react'
import { Button } from '@/ui/button'
import fotoCarrusel1 from '@/assets/Foto-carrusel1.jpg'
import fotoCarrusel2 from '@/assets/Foto-carrusel2.jpg'
import fotoCarrusel3 from '@/assets/Foto-carrusel3.jpg'

const slides = [
  { src: fotoCarrusel1, alt: 'Alumnos trabajando en el laboratorio de informática del IES Albarregas' },
  { src: fotoCarrusel2, alt: 'Instalaciones y aulas modernas del IES Albarregas en Mérida' },
  { src: fotoCarrusel3, alt: 'Estudiantes en prácticas de electrónica e industria' },
]

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      aria-roledescription="carrusel"
      aria-label="Imágenes del centro educativo"
    >
      {/* Anuncio de cambio de diapositiva para lectores de pantalla */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {`Imagen ${currentSlide + 1} de ${slides.length}: ${slides[currentSlide].alt}`}
      </div>

      {/* Fondo con carrusel */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            width={1920}
            height={1080}
            aria-hidden={index !== currentSlide}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        {/* Overlay con mayor opacidad para mejor contraste del texto — checklist punto 3 */}
        <div className="absolute inset-0 bg-black/55 z-10" aria-hidden="true" />
      </div>

      {/* Contenido principal */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-20 animate-fade-in">
        {/* H1 — jerarquía visual punto 3 */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up drop-shadow-lg leading-tight">
          Bienvenido a IES Albarregas
        </h1>

        <p
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-up drop-shadow-md leading-relaxed"
          style={{ animationDelay: '0.2s' }}
        >
          Descubre nuestros ciclos formativos y forma parte de una comunidad educativa en constante evolución
        </p>

        {/* CTAs descriptivos — checklist punto 5: botones con acción clara, no "Enviar" genérico */}
        <div
          className="flex flex-wrap gap-4 justify-center animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <Button
            size="lg"
            className="min-h-[48px] px-8 bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-400
                       focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent
                       transition-all duration-200 font-semibold shadow-lg"
            onClick={() => document.getElementById('ciclos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Ciclos Formativos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-h-[48px] px-8 border-2 border-white text-white bg-white/10 hover:bg-white/25
                       focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent
                       transition-all duration-200 font-semibold"
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contactar con el Centro
          </Button>
        </div>
      </div>

      {/* Controles del carrusel — checklist punto 1: feedback visual de estado */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20"
        role="tablist"
        aria-label="Controles del carrusel"
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Ir a imagen ${index + 1}: ${slide.alt}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-white min-w-[12px]
              ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-3 hover:bg-white/75'}`}
          />
        ))}
      </div>

      {/* Indicador de scroll — principio de proximidad: agrupa señal visual con contenido */}
      <div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 animate-bounce"
        aria-hidden="true"
      >
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}