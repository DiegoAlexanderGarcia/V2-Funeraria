"use client"

import React from "react"

/* ===========================================
   COMPONENTE: CONTACTO
   Sección de contacto con formulario funcional
   
   Estructura:
   - Información de contacto (teléfono, dirección, email)
   - Formulario con validaciones en JavaScript
   - Mapa de ubicación (placeholder)
   
   Validaciones:
   - Nombre requerido
   - Email válido
   - Teléfono válido (opcional)
   - Mensaje requerido
   
   Mejoras posibles:
   - Integrar con backend real
   - Añadir Google Maps embed
   - Implementar reCAPTCHA
   =========================================== */

import { useState, type FormEvent } from "react"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Información de contacto
const contactInfo = [
  {
    icon: Phone,
    titulo: "Teléfono",
    info: "+57 300 123 4567",
    link: "tel:+573001234567",
  },
  {
    icon: Mail,
    titulo: "Correo Electrónico",
    info: "contacto@funerarialacandelaria.com",
    link: "mailto:contacto@funerarialacandelaria.com",
  },
  {
    icon: MapPin,
    titulo: "Dirección",
    info: "Calle 10 #5-23, Centro Histórico, Bogotá",
    link: "https://maps.google.com",
  },
  {
    icon: Clock,
    titulo: "Horario",
    info: "Atención 24 horas, 7 días a la semana",
    link: null,
  },
]

// Estado inicial del formulario
const initialFormState = {
  nombre: "",
  email: "",
  telefono: "",
  asunto: "",
  mensaje: "",
}

// Tipo para los errores del formulario
type FormErrors = {
  nombre?: string
  email?: string
  telefono?: string
  mensaje?: string
}

export function Contacto() {
  // Estados del formulario
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Función para validar el formulario
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validar nombre (requerido)
    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido"
    }

    // Validar email (requerido y formato válido)
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingrese un correo electrónico válido"
    }

    // Validar teléfono (opcional, pero si se ingresa debe ser válido)
    if (formData.telefono && !/^[0-9\s\-+()]{7,15}$/.test(formData.telefono)) {
      newErrors.telefono = "Ingrese un número de teléfono válido"
    }

    // Validar mensaje (requerido)
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Función para manejar cambios en los campos
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Limpiar error del campo al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulación de envío (reemplazar con API real)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      // Éxito
      setSubmitStatus("success")
      setFormData(initialFormState)
      
      // Resetear estado después de 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contacto"
      className="py-20 md:py-28 bg-secondary"
      aria-labelledby="contacto-titulo"
    >
      <div className="container mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-widest">
            Estamos para ayudarle
          </span>
          <h2
            id="contacto-titulo"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mt-4 mb-6"
          >
            Contáctenos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" aria-hidden="true" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos disponibles las 24 horas para atender sus necesidades. 
            No dude en comunicarse con nosotros.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de contacto */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.titulo} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{item.titulo}</h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-muted-foreground hover:text-accent transition-colors"
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa placeholder */}
            <div className="aspect-video rounded-lg overflow-hidden bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-2" aria-hidden="true" />
                  <p className="text-muted-foreground text-sm">
                    Centro Histórico, Bogotá
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-background p-8 rounded-lg shadow-sm">
            <h3 className="font-serif text-2xl text-foreground mb-6">
              Envíenos un Mensaje
            </h3>

            {/* Mensaje de éxito */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-green-800">¡Mensaje enviado correctamente!</p>
                  <p className="text-sm text-green-700">
                    Nos pondremos en contacto con usted lo antes posible.
                  </p>
                </div>
              </div>
            )}

            {/* Mensaje de error */}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-red-800">Error al enviar el mensaje</p>
                  <p className="text-sm text-red-700">
                    Por favor, intente nuevamente o contáctenos por teléfono.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Campo: Nombre */}
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-foreground">
                  Nombre Completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ingrese su nombre completo"
                  className={errors.nombre ? "border-destructive" : ""}
                  aria-invalid={errors.nombre ? "true" : "false"}
                  aria-describedby={errors.nombre ? "nombre-error" : undefined}
                />
                {errors.nombre && (
                  <p id="nombre-error" className="text-sm text-destructive">
                    {errors.nombre}
                  </p>
                )}
              </div>

              {/* Campos: Email y Teléfono */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Correo Electrónico <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    className={errors.email ? "border-destructive" : ""}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono" className="text-foreground">
                    Teléfono
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="300 123 4567"
                    className={errors.telefono ? "border-destructive" : ""}
                    aria-invalid={errors.telefono ? "true" : "false"}
                    aria-describedby={errors.telefono ? "telefono-error" : undefined}
                  />
                  {errors.telefono && (
                    <p id="telefono-error" className="text-sm text-destructive">
                      {errors.telefono}
                    </p>
                  )}
                </div>
              </div>

              {/* Campo: Asunto */}
              <div className="space-y-2">
                <Label htmlFor="asunto" className="text-foreground">
                  Asunto
                </Label>
                <Input
                  id="asunto"
                  name="asunto"
                  type="text"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarle?"
                />
              </div>

              {/* Campo: Mensaje */}
              <div className="space-y-2">
                <Label htmlFor="mensaje" className="text-foreground">
                  Mensaje <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escriba su mensaje aquí..."
                  rows={5}
                  className={errors.mensaje ? "border-destructive" : ""}
                  aria-invalid={errors.mensaje ? "true" : "false"}
                  aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                />
                {errors.mensaje && (
                  <p id="mensaje-error" className="text-sm text-destructive">
                    {errors.mensaje}
                  </p>
                )}
              </div>

              {/* Botón de envío */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Enviar Mensaje
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
