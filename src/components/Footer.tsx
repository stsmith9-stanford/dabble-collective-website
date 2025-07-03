import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/what-we-dabble-in', label: 'What We Dabble In' },
    { href: '/our-collective', label: 'Our Collective' },
    { href: '/experiments', label: 'Experiments' },
    { href: '/contact', label: 'Contact' },
  ]

  const socialLinks = [
    { href: '#', label: 'Twitter', icon: 'twitter' },
    { href: '#', label: 'Instagram', icon: 'instagram' },
    { href: '#', label: 'LinkedIn', icon: 'linkedin' },
    { href: '#', label: 'GitHub', icon: 'github' },
  ]

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        )
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.478 2C3.109 2 2 3.109 2 4.478v11.043C2 16.891 3.109 18 4.478 18h11.043C16.891 18 18 16.891 18 15.522V4.478C18 3.109 16.891 2 15.522 2H4.478zM10 7a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0zm10.5-3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd" />
          </svg>
        )
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
          </svg>
        )
      case 'github':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <footer className="bg-text-primary text-text-inverse">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-12 border-b border-text-inverse/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="text-2xl font-800 uppercase tracking-wide hover:text-primary transition-colors">
                Dabble Collective
              </Link>
              <p className="mt-4 text-text-inverse/70 text-sm leading-relaxed">
                A collective of creators who dabble in various fields, bringing diverse perspectives and skills together.
              </p>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2">
              <h3 className="font-semibold uppercase tracking-wide mb-4">Navigation</h3>
              <div className="grid grid-cols-2 gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-text-inverse/70 hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social & Contact */}
            <div>
              <h3 className="font-semibold uppercase tracking-wide mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-text-inverse/70 hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
              <p className="text-text-inverse/70 text-sm">
                hello@dabblecollective.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-text-inverse/60">
          <p>
            © {new Date().getFullYear()} Dabble Collective. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 