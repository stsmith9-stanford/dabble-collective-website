import React from 'react'

interface CTABannerProps {
  headline: string
  subtext?: string
  buttonText?: string
  buttonHref?: string
  onButtonClick?: () => void
}

const CTABanner: React.FC<CTABannerProps> = ({ 
  headline, 
  subtext, 
  buttonText = "Get Started", 
  buttonHref,
  onButtonClick 
}) => {
  return (
    <section className="bg-primary section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="heading-style text-3xl md:text-4xl lg:text-5xl text-text-inverse mb-6 leading-tight">
            {headline}
          </h2>
          
          {/* Subtext */}
          {subtext && (
            <p className="text-text-inverse/90 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              {subtext}
            </p>
          )}
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {buttonHref ? (
              <a
                href={buttonHref}
                className="btn-secondary inline-flex items-center justify-center"
                aria-label={buttonText}
              >
                {buttonText}
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
            ) : (
              <button
                onClick={onButtonClick}
                className="btn-secondary inline-flex items-center justify-center"
                aria-label={buttonText}
              >
                {buttonText}
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
              </button>
            )}
          </div>
          
          {/* Additional visual elements */}
          <div className="flex justify-center items-center mt-12 space-x-8 opacity-30">
            <div className="w-2 h-2 bg-text-inverse rounded-full"></div>
            <div className="w-16 h-0.5 bg-text-inverse"></div>
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <div className="w-16 h-0.5 bg-text-inverse"></div>
            <div className="w-2 h-2 bg-text-inverse rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner 