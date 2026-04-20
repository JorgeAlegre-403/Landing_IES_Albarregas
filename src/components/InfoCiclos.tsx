import { Button } from '@/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/card'

// Para optimización: si este componente crece significativamente (>50KB),
// considera usar code-splitting con React.lazy():
// export const InfoCiclos = lazy(() => import('./InfoCiclos').then(m => ({ default: m.InfoCiclosContent })))
// Luego envuelve en <Suspense> en el componente padre

const ciclosDetalle = [
  {
    id: 1,
    nombre: "Administración de Sistemas Informáticos en Red",
    codigo: "ASIR",
    modulos: ["Implantación de Sistemas Operativos", "Gestión de bases de datos", "Administración de redes", "Seguridad Informática"],
    descripcion: "Forma parte del equipo de administración de sistemas y redes",
    enlaceEducarex: "https://www.educarex.es"
  },
  {
    id: 2,
    nombre: "Desarrollo de Aplicaciones",
    codigo: "DAI",
    modulos: ["Programación en Java", "Desarrollo Web", "Base de datos", "Entorno de desarrollo"],
    descripcion: "Conviértete en desarrollador de aplicaciones profesionales",
    enlaceEducarex: "https://www.educarex.es"
  },
  {
    id: 3,
    nombre: "Electrónica Industrial",
    codigo: "EI",
    modulos: ["Electrónica digital", "Sistemas de control", "Instalaciones industriales", "Automatismo"],
    descripcion: "Especialízate en sistemas electrónicos industriales",
    enlaceEducarex: "https://www.educarex.es"
  }
]

export const InfoCiclos = () => {
  return (
    <section id="info" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Información Detallada</h2>
        
        <div className="space-y-8">
          {ciclosDetalle.map((ciclo) => (
            <Card key={ciclo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="bg-linear-to-r from-blue-600 to-indigo-700 text-white">
                <CardTitle className="text-white">{ciclo.nombre}</CardTitle>
                <CardDescription className="text-blue-100">{ciclo.descripcion}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Módulos</h4>
                    <ul className="space-y-2">
                      {ciclo.modulos.map((modulo, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-blue-600 font-bold">•</span>
                          <span className="text-gray-700">{modulo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-gray-700 mb-4">
                      Conoce todos los detalles de este ciclo y sus módulos accediendo a la plataforma educativa.
                    </p>
                    <a 
                      href={ciclo.enlaceEducarex} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Ver ${ciclo.nombre} en Educarex - se abre en pestaña nueva`}
                    >
                      <Button variant="outline" className="w-full">
                        Ver en Educarex →
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
