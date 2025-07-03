import React from 'react'

interface TeamMember {
  id: string
  name: string
  dabbles: string
  image?: string
  bio?: string
}

interface TeamGridProps {
  members: TeamMember[]
  title?: string
  subtitle?: string
}

const TeamGrid: React.FC<TeamGridProps> = ({ members, title = "Our Collective", subtitle }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {title && (
          <div className="text-center mb-16">
            <h2 className="heading-style text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
              {title}
            </h2>
            <p className="text-text-primary/70 text-lg max-w-2xl mx-auto">
              {subtitle || "Meet the diverse group of creators who make up our collective"}
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div 
              key={member.id}
              className="group text-center p-6 rounded-2xl hover:bg-white/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-6 w-32 h-32">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-full">
                        <span className="text-2xl font-bold text-text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Decorative ring on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/0 group-hover:border-accent/30 transition-all duration-300"></div>
              </div>
              
              {/* Name */}
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              
              {/* Dabbles in */}
              <p className="text-text-primary/70 font-medium mb-3">
                Dabbles in <span className="text-primary font-semibold">{member.dabbles}</span>
              </p>
              
              {/* Bio */}
              {member.bio && (
                <p className="text-text-primary/60 text-sm leading-relaxed">
                  {member.bio}
                </p>
              )}
              
              {/* Hover indicator */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty state */}
        {members.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">No team members yet</h3>
            <p className="text-text-primary/60">Check back soon to meet our collective!</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default TeamGrid 