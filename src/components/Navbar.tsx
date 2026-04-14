import { useState } from 'react'
import { Button } from '@/ui/button'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          IES Albarregas
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className={`
          ${isOpen ? 'block' : 'hidden'} md:flex gap-8
          absolute md:static top-14 left-0 right-0 md:top-auto
          flex-col md:flex-row bg-white md:bg-transparent p-4 md:p-0
          shadow-md md:shadow-none
        `}>
          <li>
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600 transition">
              Inicio
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('ciclos')} className="text-gray-700 hover:text-blue-600 transition">
              Ciclos
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('info')} className="text-gray-700 hover:text-blue-600 transition">
              Información
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('extra')} className="text-gray-700 hover:text-blue-600 transition">
              Más
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('footer')} className="text-gray-700 hover:text-blue-600 transition">
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
