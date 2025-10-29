import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KanarianLabs - Desarrollo Web Profesional en Perú',
  description: 'Landing pages profesionales y modernas para emprendimientos peruanos. Diseño web personalizado, responsive y optimizado. Desde S/250.',
  keywords: 'desarrollo web, landing page, diseño web peru, paginas web lima, desarrollo web profesional',
  authors: [{ name: 'Miguel Angel Ybañez Esquerre' }],
  openGraph: {
    title: 'KanarianLabs - Desarrollo Web Profesional',
    description: 'Transformamos ideas en presencia digital profesional',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}