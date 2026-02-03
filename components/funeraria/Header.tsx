"use client"

/* ===========================================
   COMPONENTE: HEADER
   Encabezado con navegación fija y menú responsive
   
   Estructura:
   - Logo con símbolo de la Virgen del Carmen
   - Nombre de la funeraria
   - Menú de navegación (desktop y móvil)
   
   Mejoras posibles:
   - Añadir animación de aparición del menú móvil
   - Implementar indicador de sección activa
   =========================================== */

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

// Definición de los enlaces de navegación
const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  // Estado para controlar el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Estado para detectar scroll y cambiar estilo del header
  const [isScrolled, setIsScrolled] = useState(false)

  // Efecto para detectar el scroll y aplicar estilos
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Función para cerrar menú al hacer clic en un enlace
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-primary shadow-lg"
        : "bg-primary/95"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo y nombre de la funeraria */}
          <a href="#inicio" className="flex items-center gap-3 group">
            {/* Icono representativo de la Virgen del Carmen */}
            
              <Image
                src="/img/logo-virgen-removebg-preview.png"
                alt="Ícono de la Virgen del Carmen"
                width={48}
                height={48}
                priority
                className="w-12 h-12 object-contain"   // Cambio de w-8 h-8 a w-12 h-12
              />
            
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold text-primary-foreground leading-tight">
                Casa De Funeraria
              </span>
              <span className="font-serif text-sm md:text-base text-accent font-medium">
                La Candelaria
              </span>
            </div>
          </a>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/90 hover:text-accent transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botón de llamada rápida (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+573138804425"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">313 880 4425</span>
            </a>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
            >
              <a href="#contacto">Contactar</a>
            </Button>
          </div>

          {/* Botón menú móvil */}
          <button
            type="button"
            className="lg:hidden p-2 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        <nav
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 pb-6" : "max-h-0"
            }`}
          aria-label="Navegación móvil"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-primary-foreground/90 hover:text-accent transition-colors py-2 text-base font-medium border-b border-primary-foreground/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+573001234567"
              className="flex items-center gap-2 text-accent py-2"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">313 880 4425</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
