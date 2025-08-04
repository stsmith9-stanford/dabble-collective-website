import Hero from '@/components/Hero'
import CTABanner from '@/components/CTABanner'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const products = [
  {
    id: 'mindful-moments',
    name: 'Mindful Moments',
    tagline: 'Reclaiming focus in a distracted world',
    status: 'Live Product',
    category: 'Wellness Tech',
    challenge: 'Modern professionals struggle to maintain focus and mindfulness amid constant digital interruptions.',
    description: 'A micro-intervention app that delivers personalized mindfulness moments throughout the workday, using AI to detect optimal timing for mental breaks.',
    features: [
      'Context-aware notification system',
      'Personalized mindfulness exercises',
      'Focus pattern analytics',
      'Integration with calendar and productivity tools'
    ],
    impact: {
      users: '50,000+',
      satisfaction: '94%',
      metric: '40% improvement in reported focus levels'
    },
    behindDesign: 'Born from our needfinding research with remote workers, we discovered that traditional mindfulness apps failed because they ignored work context. Through iterative prototyping, we developed an AI system that learns users\' work patterns to deliver perfectly timed interventions.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'TensorFlow', 'Node.js'],
    link: 'https://mindfulmoments.app'
  },
  {
    id: 'systems-mapper',
    name: 'Systems Mapper',
    tagline: 'Visualizing complexity, finding clarity',
    status: 'Beta',
    category: 'Business Tools',
    challenge: 'Organizations struggle to understand and communicate complex systems and their interdependencies.',
    description: 'A collaborative platform for creating interactive systems maps that help teams visualize relationships, identify leverage points, and design interventions.',
    features: [
      'Real-time collaborative mapping',
      'Stakeholder impact analysis',
      'Intervention scenario modeling',
      'Export to presentation formats'
    ],
    impact: {
      users: '1,200+',
      satisfaction: '89%',
      metric: '60% reduction in systems analysis time'
    },
    behindDesign: 'Every consulting project requires systems thinking, but existing tools were either too simple or overwhelmingly complex. We designed this as our internal tool, then realized other organizations faced the same challenge. Built using our own systems perspective methodology.',
    image: '/api/placeholder/600/400',
    technologies: ['D3.js', 'GraphQL', 'PostgreSQL'],
    link: 'https://systemsmapper.co'
  },
  {
    id: 'play-lab',
    name: 'Play Lab',
    tagline: 'Structured creativity for breakthrough thinking',
    status: 'Coming Soon',
    category: 'Innovation Platform',
    challenge: 'Teams want to innovate but lack structured methods for creative exploration and idea development.',
    description: 'A digital platform that guides teams through Stanford\'s design thinking process with interactive exercises, facilitation tools, and progress tracking.',
    features: [
      'Guided design thinking workshops',
      'Virtual ideation spaces',
      'Prototype documentation tools',
      'Progress analytics and insights'
    ],
    impact: {
      users: 'In Development',
      satisfaction: 'TBD',
      metric: 'Pilot testing with 12 organizations'
    },
    behindDesign: 'After facilitating hundreds of workshops, we noticed teams struggled to maintain momentum between sessions. Play Lab digitizes our facilitation expertise, making Stanford design thinking accessible to any team, anywhere.',
    image: '/api/placeholder/600/400',
    technologies: ['Next.js', 'WebRTC', 'Supabase'],
    link: '#'
  },
  {
    id: 'empathy-engine',
    name: 'Empathy Engine',
    tagline: 'AI-powered user research at scale',
    status: 'Research Phase',
    category: 'Research Tools',
    challenge: 'Traditional user research is time-intensive and often misses diverse perspectives, especially from underrepresented communities.',
    description: 'An AI-assisted platform that scales ethnographic research while maintaining the depth and nuance of human insight.',
    features: [
      'Automated interview transcription and analysis',
      'Pattern recognition across user stories',
      'Bias detection in research findings',
      'Diverse participant recruitment network'
    ],
    impact: {
      users: 'Research Phase',
      satisfaction: 'TBD',
      metric: 'Exploring with academic partners'
    },
    behindDesign: 'Our needfinding work revealed that many organizations want deeper user insights but lack resources for comprehensive research. We\'re exploring how AI can augment human empathy without replacing the essential human connection.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'OpenAI', 'React'],
    link: '#'
  }
]

const productCategories = [
  {
    name: 'Wellness Tech',
    description: 'Products that help people reclaim focus and well-being',
    count: 1
  },
  {
    name: 'Business Tools',
    description: 'Platforms that enhance organizational capability',
    count: 1
  },
  {
    name: 'Innovation Platform',
    description: 'Tools that democratize design thinking',
    count: 1
  },
  {
    name: 'Research Tools',
    description: 'Technologies that deepen human understanding',
    count: 1
  }
]

export default function Products() {
  return (
    <>
      <Navigation />
      <main>
      <Hero 
        title="Building What's Next"
        subtitle="Our products are living laboratories for our most ambitious ideas. Each one represents a hypothesis about the future, tested through real-world application and refined through user feedback."
        ctaText="Explore Our Consulting"
        ctaHref="/consulting"
      />

      {/* Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text_primary mb-6">
            Our Innovation Laboratory
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We don't just advise—we build. Our product portfolio showcases our ability to transform 
            insights from consulting work into tangible solutions. Each product serves as a proof 
            of concept for new approaches to complex challenges, feeding back into our consulting methodology.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-primary/5 p-6 rounded-2xl">
              <h3 className="font-bold text-text_primary mb-3">From Consulting to Creation</h3>
              <p className="text-gray-600">
                Patterns we discover across client projects inspire new product ideas. Real-world 
                challenges become innovation opportunities.
              </p>
            </div>
            <div className="bg-accent/5 p-6 rounded-2xl">
              <h3 className="font-bold text-text_primary mb-3">From Products to Practice</h3>
              <p className="text-gray-600">
                Lessons learned from building and scaling products inform our consulting approach, 
                making us better strategic partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-text_primary mb-4">Product Categories</h2>
            <p className="text-gray-600">Four focus areas where we're building the future</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-text_primary mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {category.count} Product{category.count !== 1 ? 's' : ''}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text_primary mb-6">
              Our Product Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From live products serving thousands of users to research explorations 
              pushing the boundaries of possibility.
            </p>
          </div>

          <div className="space-y-20">
            {products.map((product, index) => (
              <div key={product.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Product Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      product.status === 'Live Product' ? 'bg-green-100 text-green-800' :
                      product.status === 'Beta' ? 'bg-blue-100 text-blue-800' :
                      product.status === 'Coming Soon' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {product.status}
                    </span>
                    <span className="text-sm text-gray-500">{product.category}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-text_primary mb-2">{product.name}</h3>
                  <p className="text-xl text-primary font-semibold mb-4">{product.tagline}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-text_primary mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="font-bold text-lg text-text_primary">{product.impact.users}</div>
                      <div className="text-xs text-gray-600">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-text_primary">{product.impact.satisfaction}</div>
                      <div className="text-xs text-gray-600">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-lg text-text_primary">{product.impact.metric.split(' ')[0]}</div>
                      <div className="text-xs text-gray-600">{product.impact.metric.split(' ').slice(1).join(' ')}</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {product.link !== '#' && (
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Try {product.name}
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>

                {/* Behind the Design */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-background p-8 rounded-2xl">
                    <h4 className="text-lg font-bold text-text_primary mb-4">Behind the Design</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">{product.behindDesign}</p>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <p className="text-sm font-semibold text-text_primary mb-1">The Challenge</p>
                      <p className="text-sm text-gray-600">{product.challenge}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Cycle */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text_primary mb-6">
            From Insight to Impact
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Our products don't exist in isolation. They're part of a continuous innovation 
            cycle that strengthens both our consulting practice and our product development.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-text_primary mb-4">Discover Patterns</h3>
              <p className="text-gray-600">
                Consulting work reveals recurring challenges across industries and organizations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔨</span>
              </div>
              <h3 className="text-xl font-bold text-text_primary mb-4">Build Solutions</h3>
              <p className="text-gray-600">
                We prototype and test new approaches through our own product development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-text_primary mb-4">Refine Practice</h3>
              <p className="text-gray-600">
                Lessons from building products inform our consulting methodology and tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner 
        headline="Ready to bring your product vision to life?"
        subtext="Our track record of building successful products makes us the ideal partner for your next innovation challenge. Let's explore what's possible."
        buttonText="Start Building Together"
        buttonHref="/consulting"
      />
      </main>
      <Footer />
    </>
  )
} 