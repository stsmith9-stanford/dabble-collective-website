import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dabble Collective',
  description: 'A collective of creators who dabble in various fields',
  keywords: ['collective', 'creativity', 'design', 'development', 'experiments'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
} 