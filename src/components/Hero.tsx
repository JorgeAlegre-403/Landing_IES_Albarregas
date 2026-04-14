import { Button } from '@/ui/button'

export const Hero = () => {

  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 pt-20 relative"
    >
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
          Bienvenido a IES Albarregas
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Descubre nuestros ciclos formativos y forma parte de una comunidad educativa en constante evolución
        </p>
        
        <div className="flex gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg"
            onClick={() => document.getElementById('ciclos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Ciclos
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contacto
          </Button>
        </div>
      </div>

      {/* Decoración de fondo con animación */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>
    </section>
  )
}
