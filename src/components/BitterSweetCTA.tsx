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
            Your BitterSweet
            <br />
            <span className="text-bs-text-secondary">Journey Begins</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-bs-text-secondary font-bs-body max-w-3xl mx-auto leading-relaxed mb-12">
            Don't just experience life—embrace its beautiful contradictions. 
            Join the exclusive community of those who understand that true harmony 
            comes from perfect balance.
          </p>

          <motion.div 
            className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button className="w-full lg:w-auto bg-bs-text-primary hover:bg-bs-text-secondary text-white font-bold py-5 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg">
              Order Your BitterSweet
            </button>
            <button className="w-full lg:w-auto border-3 border-bs-text-primary text-bs-text-primary hover:bg-bs-text-primary hover:text-white font-bold py-5 px-12 rounded-full transition-all duration-300 text-lg">
              Request Custom Quote
            </button>
          </motion.div>
        </motion.div>

        {/* Social Proof & Features */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: "⭐",
              title: "5-Star Reviews",
              description: "Join 500+ satisfied customers who've discovered the perfect balance",
              accent: "from-yellow-400 to-orange-400"
            },
            {
              icon: "🚚",
              title: "Free Shipping",
              description: "Complimentary worldwide delivery on all BitterSweet orders",
              accent: "from-blue-400 to-purple-400"
            },
            {
              icon: "🛡️",
              title: "Lifetime Guarantee",
              description: "Your satisfaction is our commitment. Forever and always.",
              accent: "from-green-400 to-blue-400"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${feature.accent} text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bs-heading font-bold text-bs-text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-bs-text-secondary font-bs-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-4xl font-bs-heading font-bold text-bs-text-primary mb-6">
            Have Questions?
          </h3>
          
          <p className="text-lg text-bs-text-secondary font-bs-body mb-8 max-w-2xl mx-auto">
            Our BitterSweet specialists are here to help you find the perfect balance. 
            Reach out and let's craft your ideal experience together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                icon: "📧",
                label: "Email Us",
                value: "hello@dabbleloft.com",
                action: "mailto:hello@dabbleloft.com"
              },
              {
                icon: "📱",
                label: "Call Us",
                value: "+1 (555) 123-4567",
                action: "tel:+15551234567"
              },
              {
                icon: "💬",
                label: "Live Chat",
                value: "Available 24/7",
                action: "#"
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
            <p>Made with ❤️ by <span className="font-semibold">Dabble Collective</span></p>
            <p className="mt-2">© 2024 BitterSweet. All rights reserved.</p>
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