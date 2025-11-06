import './globals.css'
import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'KanarianLabs - Desarrollo Web Profesional en Perú | Landing Pages desde S/250',
  description: 'Desarrollo web profesional en Lima, Perú. Landing pages, sitios corporativos y tiendas online. Diseño responsive, optimizado y personalizado. 50% OFF lanzamiento. ¡Cotiza ahora!',
  keywords: [
    'desarrollo web peru',
    'diseño web lima',
    'landing page peru',
    'paginas web lima',
    'desarrollo web profesional',
    'diseño web responsive',
    'crear pagina web peru',
    'desarrollador web lima',
    'agencia web peru',
    'sitios web economicos peru'
  ],
  authors: [{ name: 'Miguel Angel Ybañez Esquerre', url: 'https://kanarianlabs.com' }],
  creator: 'KanarianLabs',
  publisher: 'KanarianLabs',
  metadataBase: new URL('https://kanarianlabs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'KanarianLabs - Desarrollo Web Profesional en Perú',
    description: 'Landing pages profesionales desde S/250. Diseño web moderno, responsive y optimizado para tu negocio.',
    url: 'https://kanarianlabs.com',
    siteName: 'KanarianLabs',
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KanarianLabs - Desarrollo Web Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KanarianLabs - Desarrollo Web Profesional en Perú',
    description: 'Landing pages profesionales desde S/250. Diseño web moderno y optimizado.',
    images: ['/og-image.png'],
    creator: '@kanarianlabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-de-verificacion-aqui',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <JsonLd />
      </head>
      <body className="bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}