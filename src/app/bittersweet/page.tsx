import { Metadata } from 'next'
import BitterSweetHero from '@/components/BitterSweetHero'
import BitterSweetGallery from '@/components/BitterSweetGallery'
import BitterSweetCTA from '@/components/BitterSweetCTA'

export const metadata: Metadata = {
  title: 'BitterSweet - Premium Artisan Product | Dabble Collective',
  description: 'Discover BitterSweet, a carefully crafted artisan product that brings together contrasting flavors and experiences.',
  keywords: ['BitterSweet', 'artisan', 'premium', 'handcrafted', 'Dabble Collective'],
}

export default function BitterSweetPage() {
  return (
    <div className="min-h-screen">
      <BitterSweetHero />
      <BitterSweetGallery />
      <BitterSweetCTA />
    </div>
  )
} 