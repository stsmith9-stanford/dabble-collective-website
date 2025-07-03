import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StagewiseToolbar from '@/components/StagewiseToolbar'

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
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        <StagewiseToolbar 
          theme="auto"
          position="bottom"
          enabled={true}
        />
      </body>
    </html>
  )
} 