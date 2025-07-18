'use client'

import Link from 'next/link'
import { useState } from 'react'

const BitterSweetNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/bittersweet" 
            className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-all"
          >
            BitterSweet
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/bittersweet"
              className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-all duration-200"
            >
              About Dabble
            </Link>
            <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-200">
              Get Updates
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500/50 rounded p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link
              href="/bittersweet"
              className="block text-gray-700 hover:text-gray-900 font-medium py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/"
              className="block text-gray-700 hover:text-gray-900 font-medium py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              About Dabble
            </Link>
            <div className="pt-3">
              <button className="w-full bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-200">
                Get Updates
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default BitterSweetNavigation 