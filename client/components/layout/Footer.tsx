export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold mb-4 text-lg animate-fade-in-up">Dashify</h3>
            <p className="text-gray-600 text-sm leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
              Enterprise-grade cybersecurity solutions for modern organizations. Protecting your digital future.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover-scale transition duration-300 text-sm font-bold animate-bounce-in" style={{ animationDelay: '0.1s' }}>
                f
              </a>
              <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white hover-scale transition duration-300 text-sm font-bold animate-bounce-in" style={{ animationDelay: '0.15s' }}>
                t
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm animate-fade-in-up" style={{ animationDelay: '0.1s' }}>PRODUCT</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="/" className="hover:text-black hover-translate-y transition duration-300 inline-block animate-fade-in-left" style={{ animationDelay: '0.12s' }}>Home</a></li>
              <li><a href="/services" className="hover:text-black hover-translate-y transition duration-300 inline-block animate-fade-in-left" style={{ animationDelay: '0.14s' }}>Services</a></li>
              <li><a href="/about" className="hover:text-black hover-translate-y transition duration-300 inline-block animate-fade-in-left" style={{ animationDelay: '0.16s' }}>About</a></li>
              <li><a href="#" className="hover:text-black hover-translate-y transition duration-300 inline-block animate-fade-in-left" style={{ animationDelay: '0.18s' }}>Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm animate-fade-in-up" style={{ animationDelay: '0.12s' }}>COMPANY</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="/about" className="hover:text-black hover-translate-y transition duration-300 inline-block animate-fade-in-left" style={{ animationDelay: '0.14s' }}>Team</a></li>
              <li><a href="#" className="hover:text-black hover-translate-y transition duration-300 inline-block animate-fade-in-left" style={{ animationDelay: '0.16s' }}>Blog</a></li>
              <li><a href="#" className="hover:text-black hover-translate-y transition duration-300 inline-block animate-fade-in-left" style={{ animationDelay: '0.18s' }}>Careers</a></li>
              <li><a href="#" className="hover:text-black hover-translate-y transition duration-300 inline-block animate-fade-in-left" style={{ animationDelay: '0.2s' }}>News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-sm animate-fade-in-up" style={{ animationDelay: '0.14s' }}>LEGAL</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-black hover-translate-y transition duration-300 inline-block animate-fade-in-left" style={{ animationDelay: '0.16s' }}>Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black hover-translate-y transition duration-300 inline-block animate-fade-in-left" style={{ animationDelay: '0.18s' }}>Terms of Service</a></li>
              <li><a href="#" className="hover:text-black hover-translate-y transition duration-300 inline-block animate-fade-in-left" style={{ animationDelay: '0.2s' }}>Contact Us</a></li>
              <li><a href="#" className="hover:text-black hover-translate-y transition duration-300 inline-block animate-fade-in-left" style={{ animationDelay: '0.22s' }}>Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>&copy; 2025 Dashify. All rights reserved.</p>
            <p className="mt-4 md:mt-0 animate-fade-in-up" style={{ animationDelay: '0.22s' }}>Designed & Developed with 💜 by Our Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
}