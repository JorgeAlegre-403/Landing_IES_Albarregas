import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card'

export const ApartadoExtra = () => {

  return (
    <section id="extra" className="py-20 px-4 bg-linear-to-br from-blue-50 via-purple-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Campus Virtual</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Plataforma E-Learning</h3>
                <p className="text-gray-600">Accede a nuestro campus virtual con recursos educativos disponibles 24/7</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Comunidad Estudiantil</h3>
                <p className="text-gray-600">Conecta con otros estudiantes, forma grupos de trabajo y colabora en proyectos</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Prácticas Empresariales</h3>
                <p className="text-gray-600">Realiza prácticas en empresas reales y gana experiencia profesional</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl">¿Por qué elegir IES Albarregas?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-4">⭐</span>
                  <span className="text-gray-700">Profesorado altamente cualificado y en contacto con la industria</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-4">📚</span>
                  <span className="text-gray-700">Instalaciones modernas y equipadas con tecnología actual</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-4">🌐</span>
                  <span className="text-gray-700">Oportunidades para participar en proyectos internacionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-4">💼</span>
                  <span className="text-gray-700">Alta empleabilidad de nuestros graduados</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
