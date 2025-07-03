import React from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  showCta?: boolean
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  ctaText = "See what we're building", 
  ctaHref = "#", 
  showCta = true 
}) => {
  return (
    <section className="relative bg-primary section-padding mt-16 overflow-hidden">
      {/* Geometric circles - positioned to enhance, not block content */}
      {/* Large blue circle - positioned behind content, won't block text */}
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-accent rounded-full translate-x-1/2 -translate-y-1/4 opacity-90"></div>
      
      {/* Cream circle - positioned at bottom edge, extends below section */}
      <div className="absolute right-8 bottom-0 w-[280px] h-[280px] bg-background rounded-full translate-y-1/2 opacity-95"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            <h1 className="heading-style text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-text-inverse mb-6 leading-tight">
              {title}
            </h1>
            
            {subtitle && (
              <p className="text-text-inverse/90 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                {subtitle}
              </p>
            )}
            
            {showCta && (
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={ctaHref}
                  className="btn-secondary inline-flex items-center justify-center"
                  aria-label={ctaText}
                >
                  {ctaText}
                  <svg 
                    className="ml-2 w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>
          
          {/* Right Column - Empty to let circles show through */}
          <div className="relative hidden lg:block">
            {/* Empty space for geometric circles */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 