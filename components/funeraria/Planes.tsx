/* ===========================================
   COMPONENTE: PLANES
   Tabla comparativa de planes exequiales
   
   Estructura:
   - Tres planes: Básico, Familiar, Premium
   - Características de cada plan
   - Llamado a la acción
   
   Mejoras posibles:
   - Añadir toggle mensual/anual
   - Implementar modal de detalle
   - Agregar calculadora de cuotas
   =========================================== */

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Definición de los planes exequiales
const planes = [
  {
    nombre: "Plan Básico",
    descripcion: "Cobertura esencial para un individuo",
    precio: "45.000",
    periodo: "/mes",
    destacado: false,
    caracteristicas: [
      { incluido: true, texto: "Servicio de velación (12 horas)" },
      { incluido: true, texto: "Traslado local" },
      { incluido: true, texto: "Ataúd estándar" },
      { incluido: true, texto: "Trámites legales básicos" },
      { incluido: false, texto: "Cremación" },
      { incluido: false, texto: "Traslados nacionales" },
      { incluido: false, texto: "Cobertura familiar" },
    ],
  },
  {
    nombre: "Plan Familiar",
    descripcion: "Protección completa para toda la familia",
    precio: "85.000",
    periodo: "/mes",
    destacado: true,
    caracteristicas: [
      { incluido: true, texto: "Servicio de velación (24 horas)" },
      { incluido: true, texto: "Traslado local y nacional" },
      { incluido: true, texto: "Ataúd premium" },
      { incluido: true, texto: "Trámites legales completos" },
      { incluido: true, texto: "Opción de cremación" },
      { incluido: true, texto: "Cobertura para 5 personas" },
      { incluido: false, texto: "Traslados internacionales" },
    ],
  },
  {
    nombre: "Plan Premium",
    descripcion: "La máxima cobertura y tranquilidad",
    precio: "150.000",
    periodo: "/mes",
    destacado: false,
    caracteristicas: [
      { incluido: true, texto: "Servicio de velación ilimitado" },
      { incluido: true, texto: "Traslados sin límite geográfico" },
      { incluido: true, texto: "Ataúd o urna de lujo" },
      { incluido: true, texto: "Asesoría legal integral" },
      { incluido: true, texto: "Cremación incluida" },
      { incluido: true, texto: "Cobertura familiar ilimitada" },
      { incluido: true, texto: "Asistencia internacional" },
    ],
  },
]

export function Planes() {
  return (
    <section
      id="planes"
      className="relative py-20 md:py-28"
      aria-labelledby="planes-titulo"
    >
      <Image
        src="/img/hero.jpg"
        alt="Fondo decorativo para la sección de planes"
        fill
        className="object-cover object-center brightness-75"
        priority
      />
      <div className="absolute inset-0 bg-primary/60" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            Previsión Funeraria
          </span>
          <h2
            id="planes-titulo"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary-foreground mt-4 mb-6"
          >
            Planes Exequiales
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" aria-hidden="true" />
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Proteja a su familia con nuestros planes de previsión funeraria. 
            Elija el plan que mejor se adapte a sus necesidades.
          </p>
        </div>

        {/* Grid de planes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {planes.map((plan) => (
            <article
              key={plan.nombre}
              className={`rounded-lg p-8 relative ${
                plan.destacado
                  ? "bg-accent text-accent-foreground ring-4 ring-accent/50 scale-105"
                  : "bg-primary-foreground text-foreground"
              }`}
            >
              {/* Etiqueta de destacado */}
              {plan.destacado && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" aria-hidden="true" />
                    Más Popular
                  </span>
                </div>
              )}

              {/* Nombre del plan */}
              <h3 className="font-serif text-2xl mb-2">{plan.nombre}</h3>
              <p className={`text-sm mb-6 ${plan.destacado ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                {plan.descripcion}
              </p>

              {/* Precio */}
              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.precio}</span>
                <span className={`text-sm ${plan.destacado ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                  {plan.periodo}
                </span>
              </div>

              {/* Características */}
              <ul className="space-y-4 mb-8" aria-label={`Características del ${plan.nombre}`}>
                {plan.caracteristicas.map((caracteristica) => (
                  <li
                    key={caracteristica.texto}
                    className={`flex items-start gap-3 text-sm ${
                      !caracteristica.incluido && !plan.destacado
                        ? "text-muted-foreground/50"
                        : ""
                    } ${
                      !caracteristica.incluido && plan.destacado
                        ? "text-accent-foreground/50"
                        : ""
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        caracteristica.incluido
                          ? plan.destacado
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-accent-foreground"
                          : "bg-muted"
                      }`}
                      aria-hidden="true"
                    >
                      {caracteristica.incluido && <Check className="w-3 h-3" />}
                    </span>
                    <span>{caracteristica.texto}</span>
                  </li>
                ))}
              </ul>

              {/* Botón de acción */}
              <Button
                asChild
                className={`w-full ${
                  plan.destacado
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-accent hover:bg-accent/90 text-accent-foreground"
                }`}
                size="lg"
              >
                <a href="#contacto">Solicitar Información</a>
              </Button>
            </article>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="mt-12 text-center">
          <p className="text-primary-foreground/70 text-sm max-w-2xl mx-auto">
            * Los precios son referenciales y pueden variar según las condiciones específicas. 
            Contáctenos para una cotización personalizada sin compromiso.
          </p>
        </div>
      </div>
    </section>
  )
}
