"use client"

/* ===========================================
   COMPONENTE: BOTÓN FLOTANTE DE WHATSAPP
   Botón de acceso rápido a WhatsApp
   
   Características:
   - Posición fija en esquina inferior derecha
   - Animación sutil de pulso
   - Tooltip al hacer hover
   
   Mejoras posibles:
   - Añadir mensaje predefinido
   - Implementar chat widget
   =========================================== */

import { useState } from "react"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  
  // Número de WhatsApp (reemplazar con el real)
  const whatsappNumber = "573138804425"
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría obtener información sobre los servicios de Funeraria La Candelaria."
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-2 transition-all duration-200 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-foreground text-background text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          ¿Necesita ayuda? Escríbanos
          <div className="absolute bottom-0 right-6 w-2 h-2 bg-foreground transform rotate-45 translate-y-1" aria-hidden="true" />
        </div>
      </div>

      {/* Botón de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-subtle"
        aria-label="Contactar por WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MessageCircle className="w-7 h-7" aria-hidden="true" />
      </a>
    </div>
  )
}
