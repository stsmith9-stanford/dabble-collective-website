import Link from 'next/link'

const HeraNavigation = () => {

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-pink-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/hera" 
            className="text-2xl font-bold text-gray-900 hover:text-pink-400 transition-all"
          >
            Hera
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/hera"
              className="text-gray-700 hover:text-pink-400 font-medium transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-pink-400 font-medium transition-all duration-200"
            >
              About Dabble
            </Link>
            <button className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full transition-all duration-200">
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button - Simplified for now */}
          <div className="md:hidden">
            <button className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full text-sm transition-all duration-200">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeraNavigation