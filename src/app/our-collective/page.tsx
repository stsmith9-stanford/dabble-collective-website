import Hero from '@/components/Hero'
import TeamGrid from '@/components/TeamGrid'
import CTABanner from '@/components/CTABanner'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

// Real team data - all 12 members
const teamMembers = [
  {
    id: 'anastasha-gunawan',
    name: 'Anastasha Rachel Gunawan',
    dabbles: 'Data Science & Tech Education',
    bio: 'User-facing engineer and data scientist with "rabid" energy levels who dreams of revolutionizing education and bringing women to financial freedom through tech. Plans to start a rock band and tour someday.',
    image: '/team/headshots/sf-headshot-anastasha-rachel-gunawan-2503040730.jpg.webp'
  },
  {
    id: 'sanzhar-myrzagalym',
    name: 'Sanzhar Myrzagalym',
    dabbles: 'AI Architecture & Entrepreneurship',
    bio: '9 years at Microsoft as IT-architect specializing in Data and AI. Co-founded multiple startups in hardware and AI. Passionate about healthtech, spacetech, and climatetech. Loves building, swimming, and good music.',
    image: '/team/headshots/sf-headshot-sanzhar-myrzagalym-2503040730.jpg.webp'
  },
  {
    id: 'brigid-white',
    name: 'Brigid White',
    dabbles: 'UX Design & Adventure Education',
    bio: 'Adobe and NVIDIA alum turned Title 1 teacher. Action sports enthusiast who finds creative inspiration through movement. Explores intersections of play, education, and community through design.',
    image: '/team/headshots/sf-headshot-brigid-white-2503040730.jpg.webp'
  },
  {
    id: 'rishika-gundi',
    name: 'Rishika Gundi',
    dabbles: 'Medical Device Engineering',
    bio: 'Medical device engineer passionate about improving healthcare access in underserved communities. Spent three years in manufacturing stroke therapy devices. Creates through painting, cooking, writing, and engineering.',
    image: '/team/headshots/sf-headshot-rishika-gundi-2504221700.jpg.webp'
  },
  {
    id: 'kelly-chou',
    name: 'Kelly Chou',
    dabbles: 'Green Chemistry & Sustainable Design',
    bio: 'Green chemist who worked on biodegradable laundry pods and PFAS-free packaging. Researches cultural distrust in science. Thrives in spontaneity through improv theater and swing dancing.',
    image: '/team/headshots/sf-headshot-kelly-chou-2503040730.jpg.webp'
  },
  {
    id: 'diane-rhim',
    name: 'Diane Rhim',
    dabbles: 'Digital Strategy & Wellness Tech',
    bio: 'Digital strategist championing narrative-driven design for social good. E-commerce expert focused on wellness brands. Passionate about green consumerism and personalized nutrition solutions for women.',
    image: '/team/headshots/sf-headshot-diane-rhim-2503040730.jpg.webp'
  },
  {
    id: 'hillary-lodzanyama',
    name: 'Hillary Lodzanyama',
    dabbles: 'Design Education & Healthcare Tech',
    bio: 'Electrical engineer turned design educator and social impact innovator. Champions invention-focused engineering education and global health tech in low-resource settings. Formula 1 and soccer fanatic.',
    image: '/team/headshots/sf-headshot-hillary-lodzanyama-2503040730.jpg.webp'
  },
  {
    id: 'julia-hou',
    name: 'Julia Hou',
    dabbles: 'Food Entrepreneurship & Design',
    bio: 'Food entrepreneur pivoting to design to solve systemic problems. Believes better design creates a better world. Dreams of building a spice exchange for communities and learning to surf.',
    image: '/team/headshots/sf-headshot-julia-hou-2504021700.jpg.webp'
  },
  {
    id: 'maggie-namaganda',
    name: 'Maggie Namaganda',
    dabbles: 'Social Impact & Inclusive Design',
    bio: 'Social impact designer creating accessible tech solutions for underserved communities. Spent four years building inclusive education tech for disabled learners. Loves travel, swimming, and interior design.',
    image: '/team/headshots/sf-headshot-maggie-namaganda-2503040730.jpg.webp'
  },
  {
    id: 'yousef-al-riyami',
    name: 'Yousef Al Riyami',
    dabbles: 'Product Design & Chemical Engineering',
    bio: 'Product enthusiast passionate about beautiful, purposeful physical products. Background in chemical engineering and strategy consulting. Writes poetry and reads about ecology in his free time.',
    image: '/team/headshots/sf-headshot-yousef-al-riyami-2503040730.jpg.webp'
  },
  {
    id: 'shawn-smith',
    name: 'Shawn Smith',
    dabbles: 'Design & Technology',
    bio: 'Designer and technologist exploring how emerging tools help people reclaim focus and joy. Former Red Bull Data Science lead. Designs in extended realities and brews experimental coffee with his Golden Retriever Phoebe.',
    image: '/team/headshots/sf-headshot-shawn-smith-2504221700.jpg.webp'
  },
  {
    id: 'eric-singleton',
    name: 'Eric Singleton',
    dabbles: 'Global Impact & Strategy',
    bio: 'Global Studies and Psychology graduate with philanthropic foundation experience across five continents. Designs innovative programs for climate initiatives and reproductive health. Fluent in multiple languages.',
    image: '/team/headshots/sf-headshot-eric-singleton-2503040730.jpg.webp'
  }
]

const collectiveValues = [
  {
    title: 'Diversity of Thought',
    description: 'We believe that the best solutions come from bringing together different perspectives, backgrounds, and ways of thinking.',
    icon: '🌟'
  },
  {
    title: 'Continuous Learning',
    description: 'We are always experimenting with new technologies, techniques, and creative approaches to stay at the forefront of our fields.',
    icon: '📚'
  },
  {
    title: 'Collaborative Spirit',
    description: 'We work best when we work together. Every project benefits from the collective wisdom and skills of our team.',
    icon: '🤝'
  },
  {
    title: 'Quality Craftsmanship',
    description: 'We take pride in our work and strive for excellence in everything we create, from the smallest detail to the biggest vision.',
    icon: '⚡'
  }
]

export default function About() {
  return (
    <>
      <Navigation />
      <main>
      <Hero 
        title="The Power of 12"
        subtitle="We believe the best innovation happens at the intersection of diverse minds and shared purpose. Meet the curated collective that makes breakthrough thinking possible."
        ctaText="See Our Work"
        ctaHref="/consulting"
      />

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text_primary mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-left">
              <p>
                Dabble was born from a simple yet powerful observation: the most profound breakthroughs 
                emerge when deep strategic thinking dances with fearless experimentation. We exist at 
                the intersection of playful exploration and rigorous intellectual inquiry.
              </p>
              <p>
                Rooted in Stanford's proven innovation methodologies, we've assembled a living system 
                for generating what's next. We're not just a consultancy or a product lab—we're a 
                collective consciousness designed to transform complexity into clarity, challenges into opportunities.
              </p>
              <p>
                Our size is intentional. Twelve brilliant minds, each bringing unique perspectives from 
                engineering to anthropology, data science to poetry. Large enough for diverse expertise, 
                small enough for true collaboration and shared consciousness that larger firms cannot replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TeamGrid 
        members={teamMembers}
        title="Meet Our Collective"
        subtitle="Each member brings a unique lens—from engineering to anthropology—creating powerful synthesis for every challenge."
      />

      {/* Our Approach Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text_primary mb-6">
              Why Our Size Is Our Strength
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In a world of massive consulting firms and isolated freelancers, we've found the sweet spot: 
              deep collaboration, agility, and shared consciousness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-text_primary mb-4">Collective Intelligence</h3>
              <p className="text-gray-600">
                When 12 diverse minds focus on a challenge, we generate insights that no individual or larger, 
                fragmented team could achieve. Our ideas cross-pollinate organically.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-text_primary mb-4">Rapid Adaptation</h3>
              <p className="text-gray-600">
                Small enough to pivot quickly, large enough to handle complex challenges. We move at 
                startup speed with the wisdom of seasoned experts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-text_primary mb-4">Shared Purpose</h3>
              <p className="text-gray-600">
                Every member is deeply invested in our collective success. No bureaucracy, no silos—just 
                passionate minds aligned toward breakthrough solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Cycle Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text_primary mb-6">
            Our Virtuous Innovation Cycle
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We operate a dual model that fuels perpetual innovation. Our consulting work and in-house 
            products create a powerful feedback loop that makes each side stronger.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-primary/5 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-2xl font-bold text-text_primary mb-4">Consulting</h3>
              <p className="text-gray-600">
                Immersing ourselves in the world's most complex business challenges provides 
                real-world insights and keeps us grounded in practical applications.
              </p>
            </div>
            
            <div className="bg-accent/5 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">P</span>
              </div>
              <h3 className="text-2xl font-bold text-text_primary mb-4">Products</h3>
              <p className="text-gray-600">
                Our in-house creations serve as living laboratories for our most ambitious ideas, 
                allowing us to experiment and refine our methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner 
        headline="Ready to experience collective intelligence?"
        subtext="Let's explore how our curated team of 12 experts can bring fresh perspectives and breakthrough solutions to your biggest challenges."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
      </main>
      <Footer />
    </>
  )
} 