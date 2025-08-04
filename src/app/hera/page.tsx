import HeraNavigation from '@/components/HeraNavigation'
import HeraFooter from '@/components/HeraFooter'

export default function HeraPage() {

  const features = [
    {
      icon: "🌀",
      title: "Cycle-Aware Tracking",
      description: "From follicular to luteal, Hera adjusts your training and nutrition guidance to match your biology."
    },
    {
      icon: "📊", 
      title: "Dynamic Insights",
      description: "Get personalized, real-time recommendations powered by the latest research in women's health."
    },
    {
      icon: "💪",
      title: "Strong. Not Standard.",
      description: "Most health apps were built for men — Hera is built for you."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <HeraNavigation />
      <div className="max-w-4xl mx-auto pt-28 pb-12 px-6">
        
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hera: Women's Health,{' '}
            <span className="text-pink-400">Reimagined</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your body isn't static — your health app shouldn't be either.
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Hera adapts to your monthly cycle, helping you train, eat, and recover better — based on real science, not outdated assumptions.
          </p>
          
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center space-x-2 text-sm text-gray-400 bg-gray-50 px-4 py-2 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Built by Women at Stanford</span>
            </div>
          </div>
          
          <a
            href="#waitlist"
            className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-200 transform hover:scale-105"
          >
            Join the Waitlist
          </a>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Hera?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-pink-50 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 md:p-12 text-center">
            <blockquote className="text-2xl md:text-3xl text-gray-800 font-light italic mb-4 leading-relaxed">
              "Finally — an app that <em className="font-medium">feels</em> like it gets me. I've never felt more in tune with my body."
            </blockquote>
            <cite className="text-gray-500 text-lg">
              — Beta tester, age 34
            </cite>
          </div>
        </section>

        {/* Call to Action Section */}
        <section 
          id="waitlist"
          className="bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built by women at Stanford, backed by science.
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hera is currently in private beta. Be the first to know when we launch.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              />
              <button className="bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 transform hover:scale-105">
                Get Early Access
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Join 2,000+ women on the waitlist. No spam, ever.
            </p>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-500">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Cycle-Aware Training</h4>
              <p>Work with your body, not against it.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Dynamic Nutrition</h4>
              <p>Protein targets. Carb cycling. Recovery timing — Hera does the math for you.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Rooted in Research</h4>
              <p>Our advisory board includes scientists, OBGYNs, and registered dietitians.</p>
            </div>
          </div>
        </section>

      </div>
      <HeraFooter />
    </div>
  )
}