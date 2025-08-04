import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const philosophyPillars = [
  {
    id: 'needfinding',
    title: 'Needfinding',
    subtitle: 'The Empathetic Foundation',
    description: 'We begin every project with deep, empathetic research to uncover latent human needs that others miss. This isn\'t just user interviews—it\'s immersive ethnographic work that reveals the gap between what people say and what they actually need.',
    icon: '🔍',
    examples: ['Immersive user observation', 'Ethnographic research', 'Latent need discovery', 'Empathy-driven insights']
  },
  {
    id: 'play',
    title: 'Play',
    subtitle: 'The Engine of Ideation',
    description: 'Structured experimentation and fearless exploration drive breakthrough thinking. We create safe spaces for wild ideas, knowing that the most innovative solutions emerge when constraints are temporarily suspended.',
    icon: '🎲',
    examples: ['Rapid ideation sessions', 'Creative constraints', 'Divergent thinking', 'Experimental prototypes']
  },
  {
    id: 'iteration',
    title: 'Iteration & Prototyping',
    subtitle: 'The Cycle of Refinement',
    description: 'Ideas evolve through rapid cycles of building, testing, and learning. We prototype early and often, moving from low-fidelity concepts to polished solutions through continuous feedback and refinement.',
    icon: '🔄',
    examples: ['Rapid prototyping', 'User feedback loops', 'Iterative design', 'Fail fast, learn faster']
  },
  {
    id: 'systems',
    title: 'Systems Perspective',
    subtitle: 'The Holistic View',
    description: 'Every challenge exists within a complex ecosystem. We map interconnections, understand stakeholder relationships, and design solutions that account for the entire system—not just isolated problems.',
    icon: '🌐',
    examples: ['Systems mapping', 'Stakeholder analysis', 'Ecosystem thinking', 'Holistic solutions']
  }
]

export default function Philosophy() {
  return (
    <>
      <Navigation />
      <main>
      <Hero 
        title="Our Philosophy: Design Thinking in Action"
        subtitle="Rooted in Stanford's proven innovation methodology, our approach transforms complex challenges into elegant solutions through empathy, experimentation, and systems thinking."
        ctaText="See Our Process in Action"
        ctaHref="/consulting"
      />

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text_primary mb-6">
            This Isn't a Checklist—It's Our DNA
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our work is built on Stanford's Design Thinking foundation, refined through years of 
            real-world application. These four pillars don't just guide our process—they define 
            how we think, create, and solve the world's most complex challenges.
          </p>
        </div>
      </section>

      {/* Process Pillars */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {philosophyPillars.map((pillar, index) => (
              <div key={pillar.id} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Icon and Number */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-2xl mr-4">
                      {pillar.icon}
                    </div>
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-text_primary mb-2">{pillar.title}</h3>
                  <h4 className="text-primary font-semibold mb-4">{pillar.subtitle}</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
                  
                  {/* Examples */}
                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-text_primary uppercase tracking-wide">Key Practices</h5>
                    <div className="flex flex-wrap gap-2">
                      {pillar.examples.map((example) => (
                        <span 
                          key={example}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Visualization */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text_primary mb-6">
              How It All Connects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These pillars don't exist in isolation. They form an interconnected methodology 
              where insights from one phase inform and enhance the others, creating a virtuous 
              cycle of innovation.
            </p>
          </div>
          
          {/* Flow Diagram */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {philosophyPillars.map((pillar, index) => (
                <div key={pillar.id} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-3xl mx-auto mb-4 text-white">
                    {pillar.icon}
                  </div>
                  <h4 className="font-bold text-text_primary">{pillar.title}</h4>
                  
                  {/* Arrow */}
                  {index < philosophyPillars.length - 1 && (
                    <div className="hidden md:block absolute top-10 text-accent/30" 
                         style={{ left: `${25 + (index * 25)}%` }}>
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner 
        headline="Ready to experience our methodology?"
        subtext="See how our Stanford-rooted approach can transform your biggest challenges into breakthrough opportunities. Let's start with understanding your unique needs."
        buttonText="Begin with Needfinding"
        buttonHref="/contact"
      />
      </main>
      <Footer />
    </>
  )
} 