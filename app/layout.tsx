import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css' 

/* ===========================================
    CONFIGURACIÓN DE FUENTES
    - Playfair Display: Títulos elegantes
    - Roboto: Texto legible y moderno
   =========================================== */

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

/* ===========================================
    METADATOS SEO OPTIMIZADOS
   =========================================== */

export const metadata: Metadata = {
  title: 'Funeraria La Candelaria | Servicios Funerarios con Respeto y Dignidad',
  description: 'Funeraria La Candelaria ofrece servicios funerarios integrales con respeto, dignidad y acompañamiento espiritual. Velación, cremación, traslados y planes exequiales en Colombia.',
  keywords: 'funeraria, servicios funerarios, velación, cremación, traslados, planes exequiales, Colombia, La Candelaria',
  authors: [{ name: 'Funeraria La Candelaria' }],
  creator: 'Funeraria La Candelaria',
  publisher: 'Funeraria La Candelaria',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://funerarialacandelaria.com',
    siteName: 'Funeraria La Candelaria',
    title: 'Funeraria La Candelaria | Servicios Funerarios con Respeto y Dignidad',
    description: 'Servicios funerarios integrales con respeto, dignidad y acompañamiento espiritual.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Funeraria La Candelaria',
    description: 'Servicios funerarios integrales con respeto y dignidad.',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B2C4D',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${roboto.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
