/* ===========================================
    PÁGINA PRINCIPAL: FUNERARIA LA CANDELARIA
    
    Estructura del sitio:
    1. Header - Navegación fija
    2. Hero - Sección de bienvenida con mensaje de consuelo
    3. Quiénes Somos - Historia, misión, visión y valores
    4. Servicios - Catálogo de servicios funerarios
    5. Planes - Tabla comparativa de planes exequiales
    6. Contacto - Formulario y datos de contacto
    7. Footer - Información adicional y redes sociales
    8. WhatsApp Button - Botón flotante de contacto rápido
    
    Instrucciones para modificar:
    - Textos: Editar en cada componente correspondiente
    - Colores: Modificar variables en globals.css
    - Agregar secciones: Crear nuevo componente e importar aquí
    
    Mejoras posibles:
    - Añadir galería de instalaciones
    - Implementar testimonios de familias
    - Agregar blog con artículos de apoyo
   =========================================== */

import { Header } from "@/components/funeraria/Header"
import { Hero } from "@/components/funeraria/Hero"
import { QuienesSomos } from "@/components/funeraria/QuienesSomos"
import { Servicios } from "@/components/funeraria/Servicios"
import { Planes } from "@/components/funeraria/Planes"
import { Contacto } from "@/components/funeraria/Contacto"
import { Footer } from "@/components/funeraria/Footer"
import { WhatsAppButton } from "@/components/funeraria/WhatsAppButton"

export default function HomePage() {
  return (
    <>
      {/* Navegación principal */}
      <Header />
      
      {/* Contenido principal */}
      <main>
        {/* Sección de inicio con mensaje de bienvenida */}
        <Hero />
        
        {/* Información sobre la funeraria */}
        <QuienesSomos />
        
        {/* Catálogo de servicios */}
        <Servicios />
        
        {/* Planes exequiales comparativos */}
        <Planes />
        
        {/* Formulario y datos de contacto */}
        <Contacto />
      </main>
      
      {/* Pie de página */}
      <Footer />
      
      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />
    </>
  )
}
