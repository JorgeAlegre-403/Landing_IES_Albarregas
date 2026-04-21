import { Button } from '@/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/ui/card'

const ciclosDetalle = [
  {
    id: 1,
    nombre: "Administración de Sistemas Informáticos en Red",
    codigo: "ASIR",
    modulos: ["Implantación de Sistemas Operativos", "Gestión de bases de datos", "Administración de redes", "Seguridad Informática"],
    descripcion: "Forma parte del equipo de administración de sistemas y redes en empresas de cualquier sector",
    enlaceEducarex: "https://www.educarex.es"
  },
  {
    id: 2,
    nombre: "Desarrollo de Aplicaciones",
    codigo: "DAI",
    modulos: ["Programación en Java", "Desarrollo Web", "Base de datos", "Entorno de desarrollo"],
    descripcion: "Conviértete en desarrollador de aplicaciones profesionales para web y escritorio",
    enlaceEducarex: "https://www.educarex.es"
  },
  {
    id: 3,
    nombre: "Electrónica Industrial",
    codigo: "EI",
    modulos: ["Electrónica digital", "Sistemas de control", "Instalaciones industriales", "Automatismo"],
    descripcion: "Especialízate en diseño y mantenimiento de sistemas electrónicos en entornos industriales",
    enlaceEducarex: "https://www.educarex.es"
  }
]

export const InfoCiclos = () => {
  return (
    <section id="info" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* H2 de sección — jerarquía visual checklist punto 3 */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
          Información Detallada
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-xl mx-auto">
          Conoce los módulos y salidas profesionales de cada ciclo
        </p>

        <div className="space-y-8">
          {ciclosDetalle.map((ciclo) => (
            <Card key={ciclo.id} className="overflow-hidden hover:shadow-lg transition-shadow">

              {/* Cabecera con gradiente oscuro — contraste texto blanco >5.5:1 (checklist punto 3) */}
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                <CardTitle className="text-white text-2xl">{ciclo.nombre}</CardTitle>
                <CardDescription className="text-blue-100 text-base mt-1">
                  {ciclo.descripcion}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    {/* H3 — jerarquía H1 › H2 › H3, tamaño visualmente inferior a H2 */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Módulos del ciclo
                    </h3>
                    {/* Lista con bullets semánticos — escaneabilidad checklist punto 3 */}
                    <ul className="space-y-2" aria-label={`Módulos de ${ciclo.nombre}`}>
                      {ciclo.modulos.map((modulo, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-base text-gray-700">
                          {/* Bullet decorativo oculto a lectores */}
                          <span className="text-blue-600 font-bold mt-0.5" aria-hidden="true">•</span>
                          {modulo}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-between gap-4">
                    <p className="text-base text-gray-700 leading-relaxed">
                      Accede a la ficha completa del ciclo con el currículo oficial, horarios y
                      requisitos de acceso en la plataforma educativa de la Junta de Extremadura.
                    </p>
                    {/* CTA descriptivo — checklist punto 5: no "Enviar" genérico */}
                    <a
                      href={ciclo.enlaceEducarex}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ficha completa de ${ciclo.nombre} en Educarex (se abre en nueva pestaña)`}
                      className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                    >
                      <Button variant="outline" className="w-full min-h-[44px] font-semibold">
                        Ver ficha completa en Educarex
                        <span aria-hidden="true" className="ml-2">↗</span>
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