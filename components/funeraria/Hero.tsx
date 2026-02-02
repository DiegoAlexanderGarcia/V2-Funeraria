/* ===========================================
   COMPONENTE: HERO
   Sección principal con mensaje de consuelo
   
   Estructura:
   - Imagen de fondo sutil y respetuosa
   - Frase de consuelo y acompañamiento
   - Subtítulo institucional
   - Botón de contacto rápido
   
   Mejoras posibles:
   - Añadir carrusel de imágenes
   - Implementar video de fondo
   =========================================== */

import { Button } from "@/components/ui/button"
import { Phone, Heart } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
      aria-label="Sección de inicio"
    >
      {/* Fondo con overlay para legibilidad */}
      <div className="absolute inset-0 bg-primary">
        {/* Patrón decorativo sutil */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icono decorativo */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
              <Heart className="w-10 h-10 text-accent" aria-hidden="true" />
            </div>
          </div>

          {/* Frase principal de consuelo */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight animate-fade-in-up text-balance">
            Acompañamos a su familia con{" "}
            <span className="text-accent">respeto</span> y{" "}
            <span className="text-accent">dignidad</span>
          </h1>

          {/* Subtítulo institucional */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up text-pretty">
            En Funeraria La Candelaria, bajo la protección de la Virgen del Carmen, 
            brindamos apoyo espiritual y humano en los momentos más difíciles.
          </p>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 text-lg"
            >
              <a href="#contacto">
                Contáctenos Ahora
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 py-6 text-lg bg-transparent"
            >
              <a href="tel:+573001234567" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Llamar: 300 123 4567
              </a>
            </Button>
          </div>

          {/* Indicador de disponibilidad */}
          <div className="mt-12 flex items-center justify-center gap-2 text-primary-foreground/70 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-subtle" aria-hidden="true" />
            <span className="text-sm">Atención 24 horas, los 7 días de la semana</span>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#quienes-somos" aria-label="Ir a la siguiente sección" className="text-primary-foreground/50 hover:text-accent transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
