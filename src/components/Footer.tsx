import { Button } from '@/ui/button'

export const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">IES Albarregas</h3>
            <p className="text-gray-400 mb-4">
              Centro de Formación Profesional comprometido con la excelencia educativa
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <span>Badajoz, España</span>
              </li>
              <li className="flex items-center">
                <span>info@iesalbarregas.es</span>
              </li>
              <li className="flex items-center">
                <span>+34 924 XX XX XX</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#ciclos" className="text-gray-400 hover:text-white transition">
                  Ciclos Formativos
                </a>
              </li>
              <li>
                <a href="#info" className="text-gray-400 hover:text-white transition">
                  Información
                </a>
              </li>
              <li>
                <a href="https://www.educarex.es" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  Plataforma Educativa
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2024 IES Albarregas. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
