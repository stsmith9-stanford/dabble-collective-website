'use client'

import { useEffect } from 'react'

interface StagewiseToolbarProps {
  apiKey?: string
  theme?: 'light' | 'dark' | 'auto'
  position?: 'top' | 'bottom' | 'left' | 'right'
  enabled?: boolean
}

export default function StagewiseToolbar({ 
  apiKey = process.env.NEXT_PUBLIC_STAGEWISE_API_KEY,
  theme = 'auto',
  position = 'bottom',
  enabled = true 
}: StagewiseToolbarProps) {
  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    // Initialize Stagewise toolbar
    const initializeStagewise = async () => {
      try {
        // Load Stagewise script
        const script = document.createElement('script')
        script.src = 'https://cdn.stagewise.ai/toolbar/latest/stagewise-toolbar.js'
        script.async = true
        
        script.onload = () => {
          // Initialize the toolbar once script is loaded
          if (window.Stagewise) {
            window.Stagewise.init({
              apiKey: apiKey || 'demo', // Use demo key if no API key provided
              theme,
              position,
              autoStart: true,
              features: {
                aiEdit: true,
                suggestions: true,
                collaboration: true,
                analytics: false // Disable analytics for privacy
              },
              ui: {
                minimizable: true,
                draggable: true,
                showTooltips: true
              }
            })
          }
        }

        script.onerror = () => {
          console.warn('Failed to load Stagewise toolbar')
        }

        document.head.appendChild(script)

        // Cleanup function
        return () => {
          if (document.head.contains(script)) {
            document.head.removeChild(script)
          }
        }
      } catch (error) {
        console.error('Error initializing Stagewise toolbar:', error)
      }
    }

    initializeStagewise()
  }, [apiKey, theme, position, enabled])

  // Add CSS for toolbar styling
  useEffect(() => {
    if (!enabled) return

    const style = document.createElement('style')
    style.textContent = `
      .stagewise-toolbar {
        z-index: 9999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      
      .stagewise-toolbar-minimized {
        opacity: 0.7;
        transition: opacity 0.2s ease;
      }
      
      .stagewise-toolbar-minimized:hover {
        opacity: 1;
      }

      /* Integration with your site's theme */
      .stagewise-toolbar[data-theme="auto"] {
        --sw-bg: rgb(255 255 255 / 0.95);
        --sw-border: rgb(229 231 235);
        --sw-text: rgb(17 24 39);
        --sw-accent: rgb(59 130 246);
      }

      @media (prefers-color-scheme: dark) {
        .stagewise-toolbar[data-theme="auto"] {
          --sw-bg: rgb(17 24 39 / 0.95);
          --sw-border: rgb(55 65 81);
          --sw-text: rgb(243 244 246);
          --sw-accent: rgb(99 102 241);
        }
      }
    `
    
    document.head.appendChild(style)

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [enabled])

  // This component doesn't render anything visible directly
  // The toolbar is injected by the Stagewise script
  return null
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Stagewise?: {
      init: (config: any) => void
      show: () => void
      hide: () => void
      toggle: () => void
    }
  }
} 