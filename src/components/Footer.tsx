import { useState } from 'react'
import { Button } from '@/ui/button'

type FormFields = {
  nombre: string
  email: string
  mensaje: string
}

type FormErrors = Partial<Record<keyof FormFields, string>>

// Checklist punto 4: validación en tiempo real + mensajes de error humanos
const validate = (fields: FormFields): FormErrors => {
  const errors: FormErrors = {}

  if (!fields.nombre.trim()) {
    errors.nombre = 'El nombre es obligatorio'
  }

  if (!fields.email.trim()) {
    errors.email = 'El correo electrónico es obligatorio'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    // Checklist punto 4: mensaje humano, no "Error 0X24"
    errors.email = 'El correo debe tener el formato usuario@dominio.es'
  }

  if (!fields.mensaje.trim()) {
    errors.mensaje = 'Escribe tu mensaje antes de enviar'
  } else if (fields.mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
  }

  return errors
}

export const Footer = () => {
  const [fields, setFields] = useState<FormFields>({ nombre: '', email: '', mensaje: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    const updated = { ...fields, [name]: value }
    setFields(updated)

    // Checklist punto 4: validación en tiempo real (mientras escribe, tras haber tocado el campo)
    if (touched[name as keyof FormFields]) {
      setErrors(validate(updated))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate(fields))
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    const allTouched = { nombre: true, email: true, mensaje: true }
    setTouched(allTouched)
    const errs = validate(fields)
    setErrors(errs)

    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setFields({ nombre: '', email: '', mensaje: '' })
      setTouched({})
    }
  }

  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Columna 1: Info del centro */}
          <div>
            {/* H2 semántico en el footer — jerarquía checklist punto 3 */}
            <h2 className="text-xl font-bold text-white mb-4">IES Albarregas</h2>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              Centro de Formación Profesional comprometido con la excelencia educativa en Mérida, Extremadura.
            </p>
          </div>

          {/* Columna 2: Datos de contacto */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Contacto directo</h2>
            <address className="not-italic space-y-3 text-gray-300 text-base">
              <p>📍 Mérida, Badajoz, España</p>
              <p>
                <a
                  href="mailto:info@iesalbarregas.es"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                >
                  ✉️ info@iesalbarregas.es
                </a>
              </p>
              <p>
                <a
                  href="tel:+34924000000"
                  className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                >
                  📞 +34 924 XX XX XX
                </a>
              </p>
            </address>

            <h2 className="text-lg font-semibold text-white mt-6 mb-3">Enlaces rápidos</h2>
            <ul className="space-y-2 text-base">
              {[
                { href: '#ciclos', label: 'Ciclos Formativos' },
                { href: '#info', label: 'Información' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-300 hover:text-white transition-colors
                               focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.educarex.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Plataforma Educarex (se abre en nueva pestaña)"
                  className="text-gray-300 hover:text-white transition-colors
                             focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                >
                  Plataforma Educarex <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Formulario de contacto */}
          {/* Checklist puntos 4 y 5: labels visibles, validación real, CTA descriptivo */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Envíanos un mensaje</h2>

            {submitted ? (
              /* Checklist punto 1: feedback del sistema al usuario */
              <div
                role="alert"
                className="bg-green-800/50 border border-green-500 rounded-lg p-4 text-green-200"
              >
                <p className="font-semibold mb-1">✓ Mensaje enviado correctamente</p>
                <p className="text-sm">Nos pondremos en contacto contigo en breve.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-sm underline hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Checklist punto 5: labels FUERA del input (no desaparecen al escribir) */}

                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Nombre completo <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={fields.nombre}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                    aria-describedby={errors.nombre ? 'error-nombre' : undefined}
                    aria-invalid={!!errors.nombre}
                    className={`w-full px-3 py-2.5 rounded-md bg-gray-800 text-white text-base
                                border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400
                                ${errors.nombre && touched.nombre
                                  ? 'border-red-400 focus:ring-red-400'
                                  : 'border-gray-600 hover:border-gray-400'}`}
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && touched.nombre && (
                    <p id="error-nombre" role="alert" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <span aria-hidden="true">⚠</span> {errors.nombre}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Correo electrónico <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={fields.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                    aria-describedby={errors.email ? 'error-email' : undefined}
                    aria-invalid={!!errors.email}
                    className={`w-full px-3 py-2.5 rounded-md bg-gray-800 text-white text-base
                                border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400
                                ${errors.email && touched.email
                                  ? 'border-red-400 focus:ring-red-400'
                                  : 'border-gray-600 hover:border-gray-400'}`}
                    placeholder="tu@correo.es"
                  />
                  {errors.email && touched.email && (
                    <p id="error-email" role="alert" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <span aria-hidden="true">⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-200 mb-1"
                  >
                    Mensaje <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    value={fields.mensaje}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-describedby={errors.mensaje ? 'error-mensaje' : undefined}
                    aria-invalid={!!errors.mensaje}
                    className={`w-full px-3 py-2.5 rounded-md bg-gray-800 text-white text-base
                                border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400
                                resize-none
                                ${errors.mensaje && touched.mensaje
                                  ? 'border-red-400 focus:ring-red-400'
                                  : 'border-gray-600 hover:border-gray-400'}`}
                    placeholder="Escribe tu consulta aquí..."
                  />
                  {errors.mensaje && touched.mensaje && (
                    <p id="error-mensaje" role="alert" className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <span aria-hidden="true">⚠</span> {errors.mensaje}
                    </p>
                  )}
                </div>

                {/* Checklist punto 5: CTA descriptivo, no "Enviar" genérico */}
                <Button
                  onClick={handleSubmit}
                  className="w-full min-h-[48px] bg-blue-600 hover:bg-blue-700 text-white
                             font-semibold text-base transition-colors
                             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Enviar mensaje al centro
                </Button>
              </div>
            )}
          </div>

        </div>

        {/* Pie con redes sociales */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-gray-400 text-center md:text-left">
              © 2025 IES Albarregas. Todos los derechos reservados.
            </p>
            <nav aria-label="Redes sociales del centro">
              <ul className="flex gap-4">
                {[
                  { href: '#', label: 'Facebook de IES Albarregas' },
                  { href: '#', label: 'Twitter de IES Albarregas' },
                  { href: '#', label: 'Instagram de IES Albarregas' },
                ].map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="text-gray-400 hover:text-white transition-colors text-base
                                 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                    >
                      {label.split(' ')[0]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

      </div>
    </footer>
  )
}