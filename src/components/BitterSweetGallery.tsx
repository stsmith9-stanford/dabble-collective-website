'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import TiltedCard from './TiltedCard'

export default function BitterSweetGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/bittersweet/card-yellow-orange-blue rotated.png",
      alt: "BitterSweet Card - Pick a Card",
      title: "Pick a Card",
      description: "Draw from a deck of evocative cards",
      number: "1"
    },
    {
      src: "/bittersweet/card-red-orange-purple.png", 
      alt: "BitterSweet Card - Choose your path",
      title: "Choose a path",
      description: "Decide what you value and what you want to change",
      number: "2"
    },
    {
      src: "/bittersweet/card-yellow-orange-blue.png",
      alt: "BitterSweet Card - Gain Insight", 
      title: "Gain Insight",
      description: "Feel the weight and reflect on your choices",
      number: "3"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }



  return (
    <section className="py-24 bg-gradient-to-b from-white to-bs-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-bs-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-bs-gradient-end/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-16 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-bs-heading font-bold text-bs-text-primary mb-6">
            Three Simple 
            <span className="text-bs-text-secondary"> Steps</span>
          </h2>
          <p className="text-xl text-bs-text-secondary font-bs-body max-w-2xl mx-auto leading-relaxed">
            Experience the BitterSweet process through our thoughtfully designed card system.
            Each step guides you toward deeper understanding and meaningful insights.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedImage(index)}
            >
              <TiltedCard
                imageSrc={image.src}
                altText={image.alt}
                captionText={image.title}
                containerHeight="260px"
                containerWidth="100%"
                imageHeight="260px"
                imageWidth="100%"
                rotateAmplitude={14}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="p-2 h-full flex flex-col justify-between">
                    <div className="text-6xl font-bold text-black mb-4">
                      {image.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2">
                        {image.title}
                      </h3>
                      <p className="text-black/90 text-lg">
                        {image.description}
                      </p>
                    </div>
                  </div>
                }
              />
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Modal for enlarged image */}
      {selectedImage !== null && (
        <motion.div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={800}
              height={800}
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
            <button 
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-sm transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
} 