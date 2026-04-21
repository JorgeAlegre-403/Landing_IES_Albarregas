import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card'

const features = [
  {
    gradientClass: "bg-gradient-to-br from-blue-500 to-blue-700",
    title: "Plataforma E-Learning",
    description: "Accede a recursos educativos, tareas y materiales disponibles las 24 horas desde cualquier dispositivo.",
  },
  {
    gradientClass: "bg-gradient-to-br from-purple-500 to-purple-700",
    title: "Comunidad Estudiantil",
    description: "Conecta con compañeros, forma grupos de trabajo y colabora en proyectos en equipo.",
  },
  {
    gradientClass: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    title: "Prácticas en Empresa",
    description: "Realiza el módulo de FCT en empresas reales del sector y gana experiencia profesional antes de titularte.",
  },
]

const razones = [
  "Profesorado altamente cualificado con contacto directo con la industria",
  "Instalaciones modernas equipadas con tecnología actual",
  "Oportunidades para participar en proyectos internacionales Erasmus+",
  "Alta empleabilidad: más del 85% de nuestros graduados trabaja en su sector",
]

export const ApartadoExtra = () => {
  return (
    <section
      id="extra"
      className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50"
    >
      <div className="max-w-4xl mx-auto">

        {/* H2 de sección */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-3">
          Campus Virtual
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-lg mx-auto">
          Herramientas y recursos para complementar tu formación presencial
        </p>

        {/* Principio de proximidad: icono y título agrupados, separados del texto */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map(({ gradientClass, title, description }) => (
            <Card key={title} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                {/* Elemento decorativo — aria-hidden (no aporta información) */}
                <div
                  className={`w-14 h-14 ${gradientClass} rounded-xl mx-auto mb-4 shadow-md`}
                  aria-hidden="true"
                />
                {/* H3 — jerarquía visual */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                {/* Texto cuerpo ≥16px (base = 1rem = 16px) */}
                <p className="text-base text-gray-700 leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Principio de alineación: lista de razones alineada a la izquierda con texto */}
        <Card className="bg-white border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">
              ¿Por qué elegir IES Albarregas?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {razones.map((razon) => (
                <li key={razon} className="flex items-start gap-4">
                  {/* Bullet con color de marca — principio de jerarquía: destaca lo positivo */}
                  <div
                    className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-base text-gray-700 leading-relaxed">{razon}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

      </div>
    </section>
  )
}