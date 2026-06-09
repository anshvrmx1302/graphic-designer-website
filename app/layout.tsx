import type { Metadata } from 'next'
import { Space_Grotesk, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Ansh Verma | Graphic Designer',
  description: 'Creative Graphic Designer specializing in Brand Identity, Visual Design & Digital Experiences',
  generator: 'v0.app',
  icons: {
    icon: 'https://cdn.builder.io/api/v1/image/assets%2F8f01d7a145644d518cc799a3b8e5a749%2F17d666039c3f4f75a804888af12f8c73?format=webp&width=800&height=1200',
    apple: 'https://cdn.builder.io/api/v1/image/assets%2F8f01d7a145644d518cc799a3b8e5a749%2F17d666039c3f4f75a804888af12f8c73?format=webp&width=800&height=1200',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${spaceGrotesk.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
