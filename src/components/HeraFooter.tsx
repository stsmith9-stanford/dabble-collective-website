import Link from 'next/link'

const HeraFooter = () => {
  return (
    <footer className="bg-white border-t border-pink-200/50 relative z-40">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Hera Brand */}
          <div>
            <Link href="/hera" className="text-2xl font-bold text-gray-900 hover:text-pink-400 transition-all">
              Hera
            </Link>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Women's health, reimagined. Built by women at Stanford, backed by science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/hera" className="block text-gray-600 hover:text-pink-400 transition-colors text-sm">
                Home
              </Link>
              <Link href="/" className="block text-gray-600 hover:text-pink-400 transition-colors text-sm">
                About Dabble Collective
              </Link>
              <Link href="#waitlist" className="block text-gray-600 hover:text-pink-400 transition-colors text-sm">
                Join Waitlist
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-600 text-sm">
                Questions about Hera?
              </p>
              <p className="text-gray-600 text-sm">
                hello@hera.health
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-pink-200/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Hera. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-pink-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-pink-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default HeraFooter