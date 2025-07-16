import Hero from '@/components/Hero'
import TeamGrid from '@/components/TeamGrid'
import CTABanner from '@/components/CTABanner'
import TiltedCard from '@/components/TiltedCard'

// Real team data - showing first 3 members on home page
const featuredTeamMembers = [
  {
    id: 'anastasha-gunawan',
    name: 'Anastasha Rachel Gunawan',
    dabbles: 'Data Science & Tech Education',
    bio: 'User-facing engineer and data scientist with "rabid" energy levels who dreams of revolutionizing education.',
    image: '/team/headshots/sf-headshot-anastasha-rachel-gunawan-2503040730.jpg.webp'
  },
  {
    id: 'sanzhar-myrzagalym',
    name: 'Sanzhar Myrzagalym',
    dabbles: 'AI Architecture & Entrepreneurship',
    bio: '9 years at Microsoft specializing in Data and AI. Co-founded multiple startups in hardware and AI.',
    image: '/team/headshots/sf-headshot-sanzhar-myrzagalym-2503040730.jpg.webp'
  },
  {
    id: 'brigid-white',
    name: 'Brigid White',
    dabbles: 'UX Design & Adventure Education',
    bio: 'Adobe and NVIDIA alum turned educator. Finds creative inspiration through action sports and movement.',
    image: '/team/headshots/sf-headshot-brigid-white-2503040730.jpg.webp'
  },
]

export default function Home() {
  return (
    <main>
      <Hero 
        title="Designing What's Next. Playfully. Rigorously."
        subtitle="We exist at the intersection of playful exploration and rigorous intellectual inquiry. As a systems-oriented design studio, we deconstruct complex challenges and build elegant, human-centered solutions rooted in Stanford's proven innovation methodologies."
        ctaText="How We Dabble"
        ctaHref="/philosophy"
      />
      
      {/* Three Core Pillars Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text_primary mb-4">The Dabble Difference</h2>
            <p className="text-lg text-text_primary max-w-3xl mx-auto">
              Our approach isn't a checklist—it's the DNA of how we think and create. 
              Three core pillars define our unique value proposition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TiltedCard 
              number="1"
              title="Stanford-Rooted Methodology"
              description="Our work is built on Stanford's Design Thinking foundation. We begin with empathetic Needfinding, explore through structured Play, and refine through rapid Prototyping and Iteration."
              bgColor="bg-primary"
            />
            
            <TiltedCard 
              number="2"
              title="Cohesive Multi-disciplinary Team"
              description="Dabble is a curated team of 12 experts. Our size is our strength—enabling deep collaboration, agility, and shared consciousness that larger firms cannot replicate."
              bgColor="bg-accent"
            />
            
            <TiltedCard 
              number="3"
              title="Virtuous Innovation Cycle"
              description="We operate a dual model: consulting work immerses us in complex challenges, while our in-house products serve as living laboratories for our most ambitious ideas."
              bgColor="bg-primary"
            />
          </div>
        </div>
      </section>

      {/* Demo Section for New TiltedCard Implementation */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text_primary mb-4">Enhanced Card Demo</h2>
            <p className="text-lg text-text_primary max-w-3xl mx-auto">
              Example of the new TiltedCard implementation with image support.
            </p>
          </div>
          
          <div className="flex justify-center">
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  Kendrick Lamar - GNX
                </p>
              }
            />
          </div>
        </div>
      </section>

      <TeamGrid 
        members={featuredTeamMembers}
        title="Meet Our Collective"
        subtitle="12 brilliant minds, curated for impact. Each member brings a unique lens—from engineering to anthropology—creating powerful synthesis for every challenge."
      />

      <CTABanner 
        headline="Ready to build what's next?"
        subtext="Let's explore how our Stanford-rooted methodology and collaborative approach can transform your biggest challenges into breakthrough solutions."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </main>
  )
} 