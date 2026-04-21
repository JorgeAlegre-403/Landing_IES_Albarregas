import { useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'

const NAV_ITEMS = [
  { id: 'hero',   label: 'Inicio' },
  { id: 'ciclos', label: 'Ciclos' },
  { id: 'info',   label: 'Información' },
  { id: 'extra',  label: 'Campus Virtual' },
  { id: 'footer', label: 'Contacto' },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  // Checklist punto 1: visibilidad del estado — el usuario sabe en qué sección está
  const activeSection = useActiveSection(NAV_ITEMS.map((i) => i.id))

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav
      role="navigation"
      aria-label="Navegación principal"
      className="fixed top-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Checklist punto 2: logotipo con enlace al inicio */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}
          className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors
                     focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="IES Albarregas — volver al inicio"
        >
          IES Albarregas
        </a>

        {/* Zona táctil mínima 44px — checklist punto 6 */}
        <button
          className="md:hidden w-11 h-11 flex items-center justify-center rounded
                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {isOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>

        <ul
          id="main-menu"
          role="list"
          className={`
            ${isOpen ? 'block' : 'hidden'} md:flex gap-1
            absolute md:static top-[60px] left-0 right-0 md:top-auto
            flex-col md:flex-row bg-white md:bg-transparent p-4 md:p-0
            shadow-md md:shadow-none
          `}
        >
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id
            return (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`
                    relative px-3 py-2 rounded-md text-sm font-medium transition-colors
                    min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${isActive
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-gray-50'
                    }
                  `}
                >
                  {label}
                  {/* Indicador subrayado de sección activa */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}