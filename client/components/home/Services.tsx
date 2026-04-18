'use client';

import { useScrollAnimation, useScrollVisibility } from '@/hooks/useScrollAnimation';

const services = [
  {
    title: "Penetration Testing",
    category: "Security Testing",
    desc: "Simulate real-world attacks to find critical vulnerabilities before attackers do.",
    includes: ["Automated Scanning", "Manual Testing", "Detailed Reports"],
    icon: "🔍"
  },
  {
    title: "Cloud Security",
    category: "Cloud Services",
    desc: "Secure and audit your AWS, Azure & GCP environments with advanced protection.",
    includes: ["Cloud Audit", "Access Control", "Monitoring"],
    icon: "☁️"
  },
  {
    title: "Threat Monitoring",
    category: "Monitoring",
    desc: "24/7 AI-powered threat detection and response with our security operations center.",
    includes: ["24/7 Monitoring", "Alert System", "Quick Response"],
    icon: "🛡️"
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollVisibility();

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg hover:border-gray-300 transition duration-300 flex flex-col group hover-translate-y ${
        isVisible ? 'animate-card-stack' : 'opacity-0'
      }`}
      style={{ 
        animationDelay: isVisible ? `${0.08 * index}s` : undefined,
        animation: isVisible ? undefined : 'none'
      }}
    >
      {/* Header with gradient background */}
      <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-32 relative overflow-hidden group-hover:shadow-lg transition border-b border-gray-300">
        <div className="absolute inset-0 opacity-30">
          <div className="text-6xl absolute top-2 right-4 group-hover:animate-rotate transition-all duration-300">{service.icon}</div>
        </div>
        <div className="relative z-10 p-6">
          <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
            {service.category}
          </div>
          <h3 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300">{service.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.desc}</p>

        <div className="mb-6 flex-grow">
          <h4 className="font-semibold text-gray-800 text-sm mb-3">What's Included:</h4>
          <ul className="space-y-2">
            {service.includes.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200 animate-fade-in-left" style={{ animationDelay: `${0.05 * idx}s` }}>
                <span className="w-1.5 h-1.5 bg-black rounded-full group-hover:animate-pulse transition-all duration-300"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 hover:shadow-md hover-translate-y hover-scale transition-all duration-300 active:scale-95 border border-black">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollVisibility();

  return (
    <section id="services" className="px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headingVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className={`text-5xl font-bold text-black mb-4 ${
            headingVisible ? 'animate-stacked-perspective' : 'opacity-0'
          }`} style={{ animationDelay: headingVisible ? '0.1s' : '0s' }}>
            Our <span className="text-gray-700">Services</span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto font-light ${
              headingVisible ? 'animate-parallax-up' : 'opacity-0'
            }`}
            style={{ animationDelay: headingVisible ? '0.2s' : '0s' }}
          >
            Comprehensive cybersecurity solutions designed for enterprises
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
