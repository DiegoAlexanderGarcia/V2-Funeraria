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
  title: 'Casa De Funeraria La Candelaria | Servicios Funerarios con Respeto y Dignidad',
  description: 'Casa De Funeraria La Candelaria ofrece servicios funerarios integrales con respeto, dignidad y acompañamiento espiritual. Velación, cremación, traslados y planes exequiales en Colombia.',
  keywords: 'funeraria, servicios funerarios, velación, cremación, traslados, planes exequiales, Colombia, La Candelaria',
  authors: [{ name: 'Casa De Funeraria La Candelaria' }],
  creator: 'Casa De Funeraria La Candelaria',
  publisher: 'Casa De Funeraria La Candelaria',
  robots: 'index, follow',
  verification: {
    google: 'dii81_ywse6JdfxyogIHZNp0VzWCL7N-V39l4bBwd_Y',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://funerarialacandelaria.com',
    siteName: 'Casa De Funeraria La Candelaria',
    title: 'Casa De Funeraria La Candelaria | Servicios Funerarios con Respeto y Dignidad',
    description: 'Servicios funerarios integrales con respeto, dignidad y acompañamiento espiritual.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa De Funeraria La Candelaria',
    description: 'Servicios funerarios integrales con respeto y dignidad.',
  },
    generator: 'DiegoTec',
    icons: {
      icon: '/img/logo-virgen.ico',
      shortcut: '/img/logo-virgen.ico',
      apple: '/img/logo-virgen-1.png',
    },
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
