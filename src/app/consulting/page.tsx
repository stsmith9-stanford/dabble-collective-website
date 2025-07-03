import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'

const consultingOfferings = [
  {
    id: 'discovery',
    title: 'Discovery & Strategy',
    subtitle: 'Leveraging Needfinding',
    description: 'For clients who need to understand their users and define the right problem.',
    details: 'We begin with deep, empathetic research to uncover latent needs that traditional market research misses. Through immersive ethnographic work and structured needfinding, we help you discover not just what users say they want, but what they actually need.',
    outcomes: [
      'User insight reports with actionable findings',
      'Problem definition and opportunity mapping',
      'Strategic roadmaps aligned with real user needs',
      'Stakeholder alignment on core challenges'
    ],
    icon: '🔍',
    caseStudy: {
      client: 'Healthcare Tech Startup',
      challenge: 'Struggling to find product-market fit',
      result: 'Discovered unmet need for caregiver support, leading to 300% increase in user engagement'
    }
  },
  {
    id: 'prototyping',
    title: 'Concept & Prototyping',
    subtitle: 'Leveraging Play & Iteration',
    description: 'For clients who have an idea and need to make it tangible and test it.',
    details: 'Through structured experimentation and rapid prototyping cycles, we transform abstract concepts into testable realities. Our play-based ideation sessions generate breakthrough thinking, while our iterative approach ensures solutions evolve through continuous user feedback.',
    outcomes: [
      'Functional prototypes from low to high fidelity',
      'User-tested concepts with validated assumptions',
      'Design specifications and implementation roadmaps',
      'Risk mitigation through early failure identification'
    ],
    icon: '🎲',
    caseStudy: {
      client: 'Fortune 500 Retailer',
      challenge: 'Needed to innovate their customer experience',
      result: 'Prototyped and launched new service model that increased customer satisfaction by 40%'
    }
  },
  {
    id: 'systems',
    title: 'System & Service Design',
    subtitle: 'Leveraging Systems Perspective',
    description: 'For clients tackling large-scale, multi-faceted challenges.',
    details: 'Complex challenges require holistic solutions. We map entire ecosystems, understand stakeholder relationships, and design interventions that account for interconnections and unintended consequences. Our systems thinking ensures sustainable, scalable solutions.',
    outcomes: [
      'Comprehensive systems maps and stakeholder analysis',
      'Multi-touchpoint service design blueprints',
      'Change management strategies for implementation',
      'Scalable frameworks for organizational transformation'
    ],
    icon: '🌐',
    caseStudy: {
      client: 'Global NGO',
      challenge: 'Coordinating relief efforts across multiple countries',
      result: 'Designed integrated platform that improved coordination efficiency by 60%'
    }
  }
]

const caseStudyHighlights = [
  {
    industry: 'FinTech',
    challenge: 'Regulatory compliance while maintaining user experience',
    approach: 'Needfinding + Systems Design',
    impact: '50% reduction in compliance onboarding time'
  },
  {
    industry: 'Education',
    challenge: 'Engaging students in remote learning environments',
    approach: 'Play + Prototyping',
    impact: '85% increase in student engagement scores'
  },
  {
    industry: 'Manufacturing',
    challenge: 'Digitizing legacy operations',
    approach: 'Systems Perspective + Strategy',
    impact: '30% improvement in operational efficiency'
  }
]

export default function Consulting() {
  return (
    <main>
      <Hero 
        title="Transform Challenges into Opportunities"
        subtitle="We partner with forward-thinking organizations to solve complex challenges through Stanford-rooted design methodology. From discovery to implementation, we're your collaborative thinking partners."
        ctaText="Start a Conversation"
        ctaHref="/contact"
      />

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text_primary mb-6">
            How We Partner With You
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every organization faces unique challenges, but they fall into patterns we recognize. 
            Our consulting approach is organized around what you need most: understanding your users, 
            bringing ideas to life, or redesigning complex systems. We meet you where you are and 
            guide you to breakthrough solutions.
          </p>
        </div>
      </section>

      {/* Consulting Offerings */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text_primary mb-6">
              Our Consulting Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Three core capabilities that leverage our Stanford methodology to deliver 
              measurable impact for your organization.
            </p>
          </div>

          <div className="space-y-16">
            {consultingOfferings.map((offering, index) => (
              <div key={offering.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-3xl mr-4">
                      {offering.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text_primary">{offering.title}</h3>
                      <p className="text-primary font-semibold">{offering.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-lg">{offering.description}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{offering.details}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-text_primary mb-3">Key Outcomes:</h4>
                    <ul className="space-y-2">
                      {offering.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-600">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Case Study Card */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-sm text-primary font-semibold uppercase tracking-wide mb-3">
                      Case Study
                    </div>
                    <h4 className="text-xl font-bold text-text_primary mb-4">
                      {offering.caseStudy.client}
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-text_primary">Challenge: </span>
                        <span className="text-gray-600">{offering.caseStudy.challenge}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-text_primary">Result: </span>
                        <span className="text-gray-600">{offering.caseStudy.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text_primary mb-6">
              Impact Across Industries
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our methodology adapts to any sector, delivering measurable results 
              for organizations of all sizes and stages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudyHighlights.map((study, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-sm text-primary font-semibold uppercase tracking-wide mb-3">
                  {study.industry}
                </div>
                <h4 className="font-bold text-text_primary mb-3">
                  {study.challenge}
                </h4>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Approach: </span>
                  {study.approach}
                </div>
                <div className="text-lg font-bold text-accent">
                  {study.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text_primary mb-6">
            Our Collaborative Process
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We don't just deliver solutions—we build your team's capability to innovate. 
            Every engagement includes knowledge transfer and tool-building.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h4 className="font-bold text-text_primary mb-2">Discover</h4>
              <p className="text-gray-600 text-sm">Understand your unique context and challenges</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h4 className="font-bold text-text_primary mb-2">Design</h4>
              <p className="text-gray-600 text-sm">Co-create solutions with your team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h4 className="font-bold text-text_primary mb-2">Deliver</h4>
              <p className="text-gray-600 text-sm">Implement with built-in feedback loops</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                4
              </div>
              <h4 className="font-bold text-text_primary mb-2">Develop</h4>
              <p className="text-gray-600 text-sm">Build your team's ongoing capability</p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner 
        headline="Ready to tackle your biggest challenge?"
        subtext="Every breakthrough starts with a conversation. Let's explore how our Stanford-rooted methodology can transform your challenge into your competitive advantage."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </main>
  )
} 