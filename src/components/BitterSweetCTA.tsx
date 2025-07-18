'use client'

import { motion } from 'framer-motion'

export default function BitterSweetCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-bs-gradient-start via-bs-accent to-bs-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-bs-gradient-end/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-7xl font-bs-heading font-bold text-bs-text-primary mb-8 leading-tight">
            Let's Build More
            <br />
            <span className="text-bs-text-secondary">Reflective Spaces</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-bs-text-secondary font-bs-body max-w-4xl mx-auto leading-relaxed mb-12">
            BitterSweet is more than a game—it's a tool for understanding the invisible systems 
            that shape women's lives. Help us bring this experience to your community, organization, 
            or classroom.
          </p>

          <motion.div 
            className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="w-full lg:w-auto bg-bs-text-primary hover:bg-bs-text-secondary text-white font-bold py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg">
              Bring BitterSweet to Your Organization
            </button>
            <button className="w-full lg:w-auto border-3 border-bs-text-primary text-bs-text-primary hover:bg-bs-text-primary hover:text-white font-bold py-5 px-12 rounded-full transition-all duration-300 text-lg">
              Subscribe for Updates
            </button>
          </motion.div>
        </motion.div>

        {/* Collaboration Opportunities */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: "🏢",
              title: "Workplace Workshops",
              description: "Help teams understand mental load, decision fatigue, and systemic pressures in professional environments",
              accent: "from-purple-400 to-pink-400"
            },
            {
              icon: "🎓",
              title: "Educational Partnerships",
              description: "Bring BitterSweet to universities, research institutions, and educational programs exploring gender studies",
              accent: "from-blue-400 to-cyan-400"
            },
            {
              icon: "💡",
              title: "Research Collaboration",
              description: "Partner with us to study the impact of reflective gaming on empathy and systemic understanding",
              accent: "from-green-400 to-teal-400"
            }
          ].map((opportunity, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${opportunity.accent} text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-bs-heading font-bold text-bs-text-primary mb-4">
                  {opportunity.title}
                </h3>
                <p className="text-bs-text-secondary font-bs-body leading-relaxed">
                  {opportunity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* From Stanford to the World */}
        <motion.div 
          className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-4xl font-bs-heading font-bold text-bs-text-primary mb-6">
            From Stanford to the World
          </h3>
          
          <p className="text-lg text-bs-text-secondary font-bs-body mb-8 max-w-3xl mx-auto leading-relaxed">
            Born as a concept product at Stanford d.school and designed by MS Design graduate students, 
            BitterSweet is now exploring workshops, licensing, and distribution partnerships. 
            We're building a movement of reflective spaces that help people understand the systems we navigate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-xl font-bs-heading font-bold text-bs-text-primary mb-2">Our Mission</h4>
              <p className="text-bs-text-secondary">Create tools that make invisible systems visible and foster empathy through experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-bs-heading font-bold text-bs-text-primary mb-2">Our Vision</h4>
              <p className="text-bs-text-secondary">A world where reflective gaming helps us understand and improve the systems we live in</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-4xl font-bs-heading font-bold text-bs-text-primary mb-6">
            Let's Collaborate
          </h3>
          
          <p className="text-lg text-bs-text-secondary font-bs-body mb-8 max-w-2xl mx-auto">
            Whether you're interested in workshops, partnerships, or just want to learn more about 
            our approach to reflective gaming, we'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {[
              {
                icon: "📧",
                label: "Email Us",
                value: "hello@dabbleloft.com",
                action: "mailto:hello@dabbleloft.com"
              },
              {
                icon: "🤝",
                label: "Partnership Inquiries",
                value: "partnerships@dabbleloft.com",
                action: "mailto:partnerships@dabbleloft.com"
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.action}
                className="block p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/30 group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <div className="text-sm text-bs-text-secondary font-bs-body mb-1">
                  {contact.label}
                </div>
                <div className="text-bs-text-primary font-semibold">
                  {contact.value}
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-sm text-bs-text-secondary font-bs-body">
            <p>A reflective experience by <span className="font-semibold">Dabble Collective</span></p>
            <p className="mt-2">Stanford d.school • MS Design Program • Building empathy through play</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-bs-text-primary rounded-full"
        />
      </div>
      
      <div className="absolute bottom-10 right-10 opacity-20">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-2 border-bs-text-secondary rounded-full"
        />
      </div>
    </section>
  )
} 