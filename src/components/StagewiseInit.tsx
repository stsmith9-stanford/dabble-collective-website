'use client'

import { useEffect } from 'react'

export default function StagewiseInit() {
  useEffect(() => {
    // Only initialize in development mode
    if (process.env.NODE_ENV !== 'development') {
      return
    }

    const initStagewise = async () => {
      try {
        // Dynamic import to ensure this only runs on client side
        const { initToolbar } = await import('@stagewise/toolbar')
        
        // Initialize the toolbar with basic configuration
        initToolbar({
          plugins: [], // Start with basic functionality
        })
        
        console.log('Stagewise toolbar initialized successfully')
      } catch (error) {
        console.warn('Failed to initialize stagewise toolbar:', error)
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initStagewise, 100)
    
    return () => clearTimeout(timer)
  }, [])

  // This component doesn't render anything visible
  return null
} 