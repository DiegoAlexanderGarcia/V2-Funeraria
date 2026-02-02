/* ===========================================
   COMPONENTE: QUIÉNES SOMOS
   Sección sobre la historia y valores de la funeraria
   
   Estructura:
   - Historia de la funeraria
   - Misión, visión y valores
   - Enfoque humano y espiritual
   
   Mejoras posibles:
   - Añadir timeline de historia
   - Incluir fotos del equipo
   =========================================== */

import { Heart, Eye, Star, Users } from "lucide-react"

// Definición de los valores institucionales
const valores = [
  {
    icon: Heart,
    titulo: "Misión",
    descripcion:
      "Brindar servicios funerarios integrales con respeto, dignidad y acompañamiento espiritual, apoyando a las familias en sus momentos de duelo con profesionalismo y calidez humana.",
  },
  {
    icon: Eye,
    titulo: "Visión",
    descripcion:
      "Ser reconocidos como la funeraria de mayor confianza en nuestra comunidad, distinguiéndonos por nuestro compromiso con la excelencia, la fe y el servicio humanitario.",
  },
  {
    icon: Star,
    titulo: "Valores",
    descripcion:
      "Respeto, compasión, integridad, profesionalismo y fe son los pilares que guían cada uno de nuestros servicios y la atención que brindamos a las familias.",
  },
]

export function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="py-20 md:py-28 bg-secondary"
      aria-labelledby="quienes-somos-titulo"
    >
      <div className="container mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            Nuestra Historia
          </span>
          <h2
            id="quienes-somos-titulo"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6"
          >
            Quiénes Somos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" aria-hidden="true" />
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Historia */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-accent" aria-hidden="true" />
              <span className="text-accent font-medium uppercase text-sm tracking-wide">
                Más de 30 años de servicio
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
              Una tradición de fe, respeto y acompañamiento familiar
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Funeraria La Candelaria nació hace más de tres décadas con la vocación 
                de servir a las familias de nuestra comunidad en los momentos más 
                difíciles. Bajo la protección de la Virgen del Carmen, símbolo de fe 
                y consuelo, hemos construido una tradición de servicio basada en el 
                respeto, la dignidad y el acompañamiento espiritual.
              </p>
              <p>
                Nuestro equipo está conformado por profesionales comprometidos que 
                entienden la importancia de brindar un servicio humano y cálido. 
                Sabemos que cada familia es única, por eso personalizamos cada 
                servicio para honrar la memoria de su ser querido de manera especial.
              </p>
              <p>
                A lo largo de los años, hemos acompañado a miles de familias, 
                convirtiéndonos en un referente de confianza y excelencia en 
                servicios funerarios en nuestra región.
              </p>
            </div>
          </div>

          {/* Imagen representativa */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-primary/10 relative">
              {/* Imagen decorativa con overlay */}
              <div className="absolute inset-0 bg-primary/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <svg
                      viewBox="0 0 60 60"
                      className="w-16 h-16 text-accent"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <circle cx="30" cy="15" r="9" />
                      <path d="M18 27 C18 27, 21 24, 30 24 C39 24, 42 27, 42 27 L45 57 L15 57 Z" />
                      <path d="M22.5 33 L37.5 33 L36 48 L24 48 Z" opacity="0.3" />
                      {/* Aureola */}
                      <ellipse cx="30" cy="8" rx="12" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                    </svg>
                  </div>
                  <p className="font-serif text-xl text-foreground italic">
                    &ldquo;Bajo la protección de la Virgen del Carmen&rdquo;
                  </p>
                </div>
              </div>
            </div>
            {/* Decoración */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-lg -z-10" aria-hidden="true" />
          </div>
        </div>

        {/* Misión, Visión y Valores */}
        <div className="grid md:grid-cols-3 gap-8">
          {valores.map((valor, index) => (
            <div
              key={valor.titulo}
              className="bg-background p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <valor.icon className="w-7 h-7 text-accent" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-4">{valor.titulo}</h3>
              <p className="text-muted-foreground leading-relaxed">{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
