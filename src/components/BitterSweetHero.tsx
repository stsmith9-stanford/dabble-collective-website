'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function BitterSweetHero() {
  return (
          <section className="relative pt-24 sm:pt-20 md:pt-24 lg:pt-28 pb-8 min-h-[30vh] lg:h-[67vh] bg-gradient-to-br from-[#FFF8DC] via-[#FFE59D] to-[#A2D4EC] flex items-center">
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="flex flex-col lg:grid lg:grid-cols-[0.8fr_1.2fr] items-center justify-center gap-12 md:gap-32 lg:gap-12">

            {/* Left Column - Text Content */}
            <motion.div 
              className="text-left max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-bs-heading font-bold leading-[0.75] tracking-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bitter<br />Sweet
            </motion.h1>

            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wider uppercase mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              EXPLORE THE DEPTHS<br />OF EMOTION
            </motion.h2>

            <motion.p 
              className="text-base sm:text-lg md:text-xl text-bs-text-primary leading-relaxed mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              A game that blends reflection and feeling, Bittersweet invite’s you to a journey through the spectrum of human emotions.
            </motion.p>

            <motion.div 
              className="flex"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-[#FFCE7A] hover:brightness-105 text-bs-text-primary font-bold py-3 px-7 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-3 text-base">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
                                  <motion.div
              className="relative w-full h-[250px] md:h-[450px] lg:h-[400px] flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src="/bittersweet-hero.png"
                className="w-full max-w-[320px] md:max-w-[500px] lg:max-w-[750px] object-contain"
                alt="Bittersweet product"
              />
          </motion.div>
        </div>
      </div>
    </section>
  )
}