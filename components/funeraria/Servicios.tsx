/* ===========================================
    COMPONENTE: SERVICIOS
    Listado de servicios funerarios disponibles
    
    Estructura:
    - Velación
    - Traslados
    - Cremación
    - Asesoría legal
    - Planes exequiales
    
    Cada servicio incluye:
    - Ícono representativo
    - Título
    - Descripción clara
    
    Mejoras posibles:
    - Añadir página de detalle por servicio
    - Incluir galería de instalaciones
   =========================================== */

import { 
  Flower2, 
  Truck, 
  Flame, 
  Scale, 
  FileText,
  ChevronRight
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Definición de los servicios ofrecidos
const servicios = [
  {
    icon: Flower2,
    titulo: "Velación",
    descripcion:
      "Espacios dignos y acogedores para que las familias puedan despedirse de su ser querido en un ambiente de paz y recogimiento. Contamos con salas de velación completamente equipadas.",
    caracteristicas: [
      "Salas climatizadas",
      "Capilla para ceremonias",
      "Servicio de cafetería",
      "Estacionamiento gratuito",
    ],
  },
  {
    icon: Truck,
    titulo: "Traslados",
    descripcion:
      "Servicio de traslado nacional e internacional con la mayor discreción y respeto. Vehículos especializados y personal capacitado para garantizar un transporte digno.",
    caracteristicas: [
      "Traslados locales",
      "Traslados nacionales",
      "Traslados internacionales",
      "Disponibilidad 24/7",
    ],
  },
  {
    icon: Flame,
    titulo: "Cremación",
    descripcion:
      "Servicio de cremación con los más altos estándares de calidad y respeto. Ofrecemos diversas opciones de urnas y ceremonias de despedida personalizadas.",
    caracteristicas: [
      "Crematorio propio",
      "Urnas personalizadas",
      "Ceremonia de despedida",
      "Certificación oficial",
    ],
  },
  {
    icon: Scale,
    titulo: "Asesoría Legal",
    descripcion:
      "Acompañamiento integral en todos los trámites legales necesarios. Nuestro equipo le guiará en el proceso de obtención de documentos y certificados requeridos.",
    caracteristicas: [
      "Certificado de defunción",
      "Trámites de registro civil",
      "Documentación de seguros",
      "Asesoría en herencias",
    ],
  },
  {
    icon: FileText,
    titulo: "Planes Exequiales",
    descripcion:
      "Planes de previsión funeraria adaptados a las necesidades de cada familia. Proteja a los suyos con la tranquilidad de tener todo previsto con anticipación.",
    caracteristicas: [
      "Planes individuales",
      "Planes familiares",
      "Financiación flexible",
      "Cobertura inmediata",
    ],
  },
]

export function Servicios() {
  return (
    <section
      id="servicios"
      className="py-20 md:py-28 bg-background"
      aria-labelledby="servicios-titulo"
    >
      <div className="container mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            Lo que ofrecemos
          </span>
          <h2
            id="servicios-titulo"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6"
          >
            Nuestros Servicios
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" aria-hidden="true" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ofrecemos una gama completa de servicios funerarios para acompañar 
            a su familia con profesionalismo, respeto y calidez humana.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <article
              key={servicio.titulo}
              className="group bg-secondary/50 rounded-lg p-8 hover:bg-secondary transition-all duration-300 hover:shadow-lg border border-transparent hover:border-accent/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icono del servicio */}
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <servicio.icon className="w-8 h-8 text-accent" aria-hidden="true" />
              </div>

              {/* Título del servicio */}
              <h3 className="font-serif text-xl text-foreground mb-4">
                {servicio.titulo}
              </h3>

              {/* Descripción */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {servicio.descripcion}
              </p>

              {/* Características */}
              <ul className="space-y-2 mb-6" aria-label={`Características de ${servicio.titulo}`}>
                {servicio.caracteristicas.map((caracteristica) => (
                  <li
                    key={caracteristica}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" aria-hidden="true" />
                    {caracteristica}
                  </li>
                ))}
              </ul>

              {/* Enlace a más información */}
              <Button
                asChild
                variant="link"
                className="p-0 h-auto text-accent hover:text-accent/80"
              >
                <a href="#contacto" className="flex items-center gap-1">
                  Más información
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </Button>
            </article>
          ))}
        </div>

        {/* CTA de contacto */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            ¿Necesita más información sobre nuestros servicios?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
          >
            <a href="#contacto">Contáctenos</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
