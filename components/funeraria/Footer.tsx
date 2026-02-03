/* ===========================================
   COMPONENTE: FOOTER
   Pie de página con información adicional
   
   Estructura:
   - Frase de consuelo
   - Enlaces de navegación
   - Redes sociales
   - Derechos reservados
   
   Mejoras posibles:
   - Añadir newsletter
   - Incluir mapa del sitio completo
   =========================================== */

import { Facebook, Instagram, Heart } from "lucide-react"
import Image from "next/image"

// Enlaces de navegación del footer
const footerLinks = {
  servicios: [
    { label: "Velación", href: "#servicios" },
    { label: "Traslados", href: "#servicios" },
    { label: "Cremación", href: "#servicios" },
    { label: "Asesoría Legal", href: "#servicios" },
  ],
  empresa: [
    { label: "Quiénes Somos", href: "#quienes-somos" },
    { label: "Planes Exequiales", href: "#planes" },
    { label: "Contacto", href: "#contacto" },
  ],
}

// Redes sociales
const socialLinks = [
  { 
    icon: Facebook, 
    label: "Facebook", 
    href: "https://facebook.com/funerarialacandelaria" 
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    href: "https://instagram.com/funerarialacandelaria" 
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Columna: Logo y descripción */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/img/logo-virgen-1.png"
                alt="Logo Funeraria La Candelaria"
                width={56}
                height={56}
                className="w-14 h-14 object-contain flex-shrink-0"
                priority
              />
              <div>
                <span className="font-serif text-xl font-bold text-primary-foreground block">
                  Casa De Funeraria
                </span>
                <span className="font-serif text-sm text-accent">
                  La Candelaria
                </span>
              </div>
            </div>
            
            {/* Frase de consuelo */}
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 italic">
              &ldquo;En los momentos más difíciles, estamos aquí para acompañarle 
              con fe, respeto y dignidad.&rdquo;
            </p>

            {/* Redes sociales */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                  aria-label={`Visitar ${social.label}`}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna: Servicios */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna: Empresa */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna: Contacto */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contacto</h3>
            <address className="not-italic space-y-3 text-sm text-primary-foreground/70">
              <p>Calle 10 #5-23, Centro Histórico</p>
              <p>Bogotá, Colombia</p>
              <p>
                <a href="tel:+573001234567" className="hover:text-accent transition-colors">
                  +57 300 123 4567
                </a>
              </p>
              <p>
                <a 
                  href="mailto:contacto@funerarialacandelaria.com" 
                  className="hover:text-accent transition-colors"
                >
                  contacto@funerarialacandelaria.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Línea divisora */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © {currentYear} Funeraria La Candelaria. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/50 text-sm flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-accent" aria-hidden="true" /> en Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
