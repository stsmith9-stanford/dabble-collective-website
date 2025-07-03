'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/what-we-dabble-in', label: 'Philosophy' },
    { href: '/our-collective', label: 'About' },
    { href: '/consulting', label: 'Consulting' },
    { href: '/experiments', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary z-50 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-text-inverse font-800 text-xl uppercase tracking-wide hover:brightness-110 transition-all"
          >
            Dabble Collective
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-inverse font-bold uppercase text-sm tracking-wide hover:brightness-110 transition-all duration-200 py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-inverse focus:outline-none focus:ring-2 focus:ring-text-inverse/50 rounded p-2"
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
          <div className="md:hidden py-4 border-t border-orange-400">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-text-inverse font-bold uppercase text-sm tracking-wide hover:brightness-110 transition-all duration-200 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 