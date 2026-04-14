import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card'
import { Badge } from '@/ui/badge'

const ciclos = [
  {
    id: 1,
    nombre: "Administración de Sistemas Informáticos en Red",
    codigo: "ASIR",
    imagen: "🖥️"
  },
  {
    id: 2,
    nombre: "Desarrollo de Aplicaciones Informáticas",
    codigo: "DAI",
    imagen: "💻"
  },
  {
    id: 3,
    nombre: "Electrónica Industrial",
    codigo: "EI",
    imagen: "⚡"
  },
  {
    id: 4,
    nombre: "Electricidad y Automatismo",
    codigo: "EA",
    imagen: "🔌"
  },
  {
    id: 5,
    nombre: "Mecanizado de Precisión",
    codigo: "MP",
    imagen: "⚙️"
  },
  {
    id: 6,
    nombre: "Comercio Internacional",
    codigo: "CI",
    imagen: "🌍"
  }
]

export const CiclosCarousel = () => {
  return (
    <section id="ciclos" className="py-20 px-4 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nuestros Ciclos Formativos</h2>
          <p className="text-gray-600 text-lg">Elige el camino que mejor se adapte a ti</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ciclos.map((ciclo) => (
            <Card key={ciclo.id} className="ciclo-card hover:shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="text-5xl mb-4">{ciclo.imagen}</div>
                <CardTitle>{ciclo.nombre}</CardTitle>
                <Badge variant="secondary" className="w-fit">{ciclo.codigo}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Accede a todos los detalles de este ciclo y sus módulos
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
