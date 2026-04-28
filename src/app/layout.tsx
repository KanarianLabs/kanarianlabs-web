import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import JsonLd from '@/components/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
  weight: ['400', '500', '600'],
})

const SITE_URL = 'https://kanarianlabs.com'
const SITE_NAME = 'KanarianLabs'
const DEFAULT_TITLE = 'KanarianLabs — Sitios Web, E-commerce y Automatizaciones n8n en Lima'
const DEFAULT_DESCRIPTION = 'Diseño de sitios web, tiendas online y aplicaciones web a medida. Carga rápido, sin plantillas. Entregamos en 15 días. Desde S/350. Lima, Perú.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | KanarianLabs',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'desarrollo web peru',
    'diseño web lima',
    'landing page peru',
    'tienda online peru',
    'ecommerce peru',
    'ecommerce lima',
    'aplicaciones web peru',
    'automatizaciones n8n',
    'n8n peru',
    'automatizar negocio',
    'integración de apis',
    'desarrollo web profesional',
    'agencia web peru',
    'crear pagina web peru',
    'desarrollador web lima',
    'next.js peru',
    'mercado pago integracion',
  ],
  authors: [{ name: 'Miguel Angel Ybañez Esquerre', url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: '/',
    languages: {
      'es-PE': '/',
      'es': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'es_PE',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'KanarianLabs - Desarrollo Web y Automatizaciones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og-image.png'],
    creator: '@kanarianlabs',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  manifest: '/manifest.webmanifest',
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '1024x1024' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0F1419' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1419' },
  ],
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-PE" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="bg-dark-bg text-white antialiased font-sans">
        <a href="#main-content" className="skip-link">Saltar al contenido principal</a>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
