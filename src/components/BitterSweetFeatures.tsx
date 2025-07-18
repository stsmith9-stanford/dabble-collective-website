'use client'

import { motion } from 'framer-motion'

export default function BitterSweetFeatures() {
  const experienceCards = [
    {
      number: "1",
      title: "Pick a Card",
      description: "Draw from a deck of evocative cards",
      imageSrc: "/bs-left-card.png"
    },
    {
      number: "2",
      title: "Choose your path",
      description: "Decide what you value",
      imageSrc: "/bs-middle-card.png"
    },
    {
      number: "3",
      title: "Gain Insight",
      description: "Feel and reflect",
      imageSrc: "/bs-right-card.png"
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#FFF8DC] to-[#FFE59D] relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#A2D4EC]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#FFCE7A]/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            The Experience
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Encounter prompts that challenge and comfort, uncovering the bitter-sweet nuances of your inner world.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {experienceCards.map((card, index) => (
            <motion.div
              key={index}
              className="rounded-[1.5rem] h-[460px] w-full shadow-xl text-gray-900 flex flex-col justify-between cursor-pointer transition-all duration-300 transform-gpu relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                transformStyle: "preserve-3d"
              }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-[1.5rem]"
                style={{
                  backgroundImage: `url('${card.imageSrc}')`
                }}
              />
              
              {/* Content Overlay */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div className="text-6xl font-bold text-gray-900/30">{card.number}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{card.title}</h3>
                  <p className="text-lg text-gray-800">{card.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 