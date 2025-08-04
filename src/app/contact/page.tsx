'use client'

import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <>
      <Navigation />
      <main>
      <Hero 
        title="Let's Build What's Next"
        subtitle="Every breakthrough starts with a conversation. Whether you're facing a complex challenge or exploring new possibilities, we're here to listen, understand, and collaborate."
        showCta={false}
      />

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-text_primary mb-6">Start a Conversation</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tell us about your challenge, vision, or curiosity. We'll respond thoughtfully 
                and explore how our Stanford-rooted methodology might help you discover new possibilities.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-text_primary mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-text_primary mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-text_primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-text_primary mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-text_primary mb-2">
                    What brings you here? *
                  </label>
                  <select
                    id="projectType"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  >
                    <option value="">Select one...</option>
                    <option value="discovery">Discovery & Strategy - Help us understand our users and define the right problem</option>
                    <option value="prototyping">Concept & Prototyping - We have an idea and need to make it tangible</option>
                    <option value="systems">System & Service Design - We're tackling a large-scale, complex challenge</option>
                    <option value="general">General Inquiry - Let's explore what's possible</option>
                    <option value="products">Product Partnership - Interested in our products</option>
                    <option value="other">Other - I'll explain in the message</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-text_primary mb-2">
                    Tell us more *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="What challenge are you facing? What vision are you pursuing? What questions are you exploring? The more context you share, the better we can understand how to help."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-text_primary mb-2">
                    What's your timeline?
                  </label>
                  <select
                    id="timeline"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  >
                    <option value="">Select timeline...</option>
                    <option value="urgent">Urgent - Need to start within 2 weeks</option>
                    <option value="soon">Soon - Within the next month</option>
                    <option value="quarter">This Quarter - Next 2-3 months</option>
                    <option value="planning">Planning Phase - 3-6 months out</option>
                    <option value="exploring">Just Exploring - No specific timeline</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200 focus:ring-2 focus:ring-primary/20"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8">
              <div className="bg-background p-8 rounded-2xl mb-8">
                <h3 className="text-xl font-bold text-text_primary mb-4">Our Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-primary text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text_primary">Listen & Understand</h4>
                      <p className="text-sm text-gray-600">We begin every conversation with curiosity, seeking to understand your unique context and challenges.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-primary text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text_primary">Explore Together</h4>
                      <p className="text-sm text-gray-600">We'll share relevant examples from our work and discuss how our methodology might apply to your situation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-primary text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text_primary">Design Next Steps</h4>
                      <p className="text-sm text-gray-600">If there's mutual interest, we'll collaboratively design an approach that fits your needs and timeline.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-text_primary mb-3">Direct Contact</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-semibold">Email:</span>{' '}
                      <a href="mailto:hello@dabblecollective.com" className="text-primary hover:underline">
                        hello@dabblecollective.com
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Response Time:</span> Within 24 hours
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-text_primary mb-3">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/company/dabblecollective" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://twitter.com/dabblecollective" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent hover:bg-accent/20 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="bg-accent/5 p-6 rounded-xl">
                  <h4 className="font-bold text-text_primary mb-2">What Happens Next?</h4>
                  <p className="text-sm text-gray-600">
                    We'll review your message and respond with thoughtful questions and relevant examples 
                    from our work. If there's potential for collaboration, we'll suggest a brief call to 
                    explore possibilities together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-text_primary mb-4">Based in Innovation</h2>
          <p className="text-gray-600 mb-8">
            Located in the heart of Stanford's design ecosystem, we're connected to the cutting edge 
            of innovation methodology while remaining grounded in real-world application.
          </p>
          <div className="bg-white p-6 rounded-xl inline-block">
            <p className="text-text_primary">
              <span className="font-semibold">Stanford, California</span><br />
              <span className="text-gray-600">Where breakthrough thinking meets practical application</span>
            </p>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
} 