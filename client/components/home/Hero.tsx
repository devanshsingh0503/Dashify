import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-left">
          <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-xs font-bold mb-6 tracking-wider animate-stacked-slide-down">
            ENTERPRISE SECURITY
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black mb-6 animate-stacked-perspective" style={{ animationDelay: '0.1s' }}>
            Advanced <br/>Cybersecurity<br/>Solutions
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mb-8 leading-relaxed font-light animate-parallax-up" style={{ animationDelay: '0.2s' }}>
            Protect your infrastructure with cutting-edge security solutions designed for modern enterprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-stacked-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300 shadow-sm hover:shadow-md text-sm hover-translate-y hover-scale inline-block">
              Get Strategy Call
            </Link>
            <Link href="/services" className="border border-black text-black px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition duration-300 text-sm hover-translate-y hover-scale inline-block">
              Explore Services →
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 border-t border-gray-300 pt-8 animate-stacked-slide-down" style={{ animationDelay: '0.4s' }}>
            <div className="text-left">
              <div className="font-bold text-3xl text-black mb-2 animate-heartbeat">30+</div>
              <div className="text-sm text-gray-600">Clients Protected</div>
            </div>
            <div className="text-left">
              <div className="font-bold text-3xl text-black mb-2 animate-heartbeat" style={{ animationDelay: '0.2s' }}>100%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-left">
              <div className="font-bold text-3xl text-black mb-2 animate-heartbeat" style={{ animationDelay: '0.4s' }}>24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>

        {/* Right Content - Clean Portfolio Showcase */}
        <div className="hidden md:grid grid-cols-2 gap-5 auto-rows-fr">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 group cursor-pointer hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden animate-card-stack" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:animate-rotate-in shadow-sm border border-gray-100 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                📋
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Compliance Audit</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Comprehensive checks ensuring adherence to rigorous global standards.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 group cursor-pointer hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden animate-card-stack" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:animate-bounce-in shadow-sm border border-gray-100 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                🔒
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Zero-Trust</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Continuous verification for all internal and external network requests.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 group cursor-pointer hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden animate-card-stack" style={{ animationDelay: '0.4s' }}>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:animate-flip shadow-sm border border-gray-100 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                ⚖️
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Risk Governance</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Strategic frameworks to identify, assess, and mitigate cyber risks.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 group cursor-pointer hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100 hover:border-gray-200 relative overflow-hidden animate-card-stack" style={{ animationDelay: '0.5s' }}>
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:animate-wobble shadow-sm border border-gray-100 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                🚨
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Threat Hunting</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Proactive 24/7 monitoring and response to neutralize active threats.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}