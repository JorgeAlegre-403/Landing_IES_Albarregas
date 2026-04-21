import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card'
import { Badge } from '@/ui/badge'

const ciclos = [
  { id: 1, nombre: "Administración de Sistemas Informáticos en Red", codigo: "ASIR",
    descripcion: "Gestiona servidores, redes y seguridad informática en empresas" },
  { id: 2, nombre: "Desarrollo de Aplicaciones Informáticas", codigo: "DAI",
    descripcion: "Crea aplicaciones web y móviles con tecnologías actuales" },
  { id: 3, nombre: "Electrónica Industrial", codigo: "EI",
    descripcion: "Diseña y mantiene sistemas electrónicos en entornos industriales" },
  { id: 4, nombre: "Electricidad y Automatismo", codigo: "EA",
    descripcion: "Instala y programa sistemas eléctricos y automatizados" },
  { id: 5, nombre: "Mecanizado de Precisión", codigo: "MP",
    descripcion: "Opera maquinaria de precisión para fabricación industrial" },
  { id: 6, nombre: "Comercio Internacional", codigo: "CI",
    descripcion: "Gestiona operaciones de importación, exportación y logística" },
]

export const CiclosCarousel = () => {
  const handleCardActivate = (ciclo: typeof ciclos[0]) => {
    document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleKeyDown = (e: React.KeyboardEvent, ciclo: typeof ciclos[0]) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCardActivate(ciclo)
    }
  }

  return (
    <section id="ciclos" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">

        {/* Jerarquía visual: H2 de sección — checklist punto 3 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Nuestros Ciclos Formativos
          </h2>
          {/* Subtítulo más pequeño y con menos peso — principio de jerarquía */}
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Elige el camino profesional que mejor se adapte a tus intereses
          </p>
        </div>

        {/* Principio de alineación: grid uniforme, mismo espaciado entre tarjetas */}
        <ul role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ciclos.map((ciclo) => (
            <li key={ciclo.id}>
              <Card
                role="button"
                tabIndex={0}
                aria-label={`Ver información sobre ${ciclo.nombre}`}
                onClick={() => handleCardActivate(ciclo)}
                onKeyDown={(e) => handleKeyDown(e, ciclo)}
                className="h-full cursor-pointer transition-all duration-300
                           hover:shadow-lg hover:-translate-y-1
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <CardHeader className="pb-3">
                  {/* Badge primero — principio de proximidad: código cerca del nombre */}
                  <Badge
                    variant="secondary"
                    className="w-fit mb-2 text-xs font-bold tracking-wide"
                    aria-label={`Código: ${ciclo.codigo}`}
                  >
                    {ciclo.codigo}
                  </Badge>
                  {/* H3 dentro de la jerarquía H1 > H2 > H3 */}
                  <CardTitle className="text-lg leading-snug text-gray-900">
                    {ciclo.nombre}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Descripción breve — escaneabilidad (checklist punto 3) */}
                  <p className="text-base text-gray-600 leading-relaxed">
                    {ciclo.descripcion}
                  </p>
                  {/* CTA implícito con flecha — checklist punto 5 */}
                  <p className="mt-3 text-sm font-medium text-blue-600 flex items-center gap-1">
                    Ver detalles
                    <span aria-hidden="true">→</span>
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}