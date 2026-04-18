"use client";

import Link from "next/link";
import { useScrollAnimation, useScrollVisibility } from "@/hooks/useScrollAnimation";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Cyber & Digital Security",
      description: "Comprehensive security solutions for your digital infrastructure and applications.",
      details: [
        "Application Security Testing",
        "Network Penetration Testing",
        "Cloud Security Assessment",
        "API Security Auditing",
        "Vulnerability Management",
        "Threat Intelligence & Monitoring"
      ],
      icon: "🔐"
    },
    {
      id: 2,
      title: "Managed Security Services",
      description: "24/7 monitoring and management of your security infrastructure.",
      details: [
        "Security Operations Center (SOC)",
        "24/7 Threat Monitoring",
        "Incident Response",
        "Patch Management",
        "Vulnerability Assessment",
        "Security Event Correlation"
      ],
      icon: "🛡️"
    },
    {
      id: 3,
      title: "Specialised Cyber Security Services",
      description: "Targeted security services for specific industries and technologies.",
      details: [
        "OT/ICS Security",
        "Medical Device Security",
        "Financial Services Security",
        "Blockchain Security",
        "IoT Security",
        "Critical Infrastructure Protection"
      ],
      icon: "⚙️"
    },
    {
      id: 4,
      title: "Governance Risk and Compliance",
      description: "Help your organization maintain regulatory compliance and risk management.",
      details: [
        "ISO 27001 Implementation",
        "GDPR Compliance",
        "HIPAA Compliance",
        "SOC 2 Certification",
        "Risk Assessment & Management",
        "Policy & Procedure Development"
      ],
      icon: "📋"
    },
    {
      id: 5,
      title: "IT & Digital Transformation",
      description: "Secure your digital transformation journey with modern security practices.",
      details: [
        "Cloud Migration Security",
        "DevSecOps Implementation",
        "Secure Software Development",
        "Architecture Review",
        "Zero Trust Implementation",
        "Containerization Security"
      ],
      icon: "🚀"
    },
    {
      id: 6,
      title: "Standardisation Testing & Quality Certification",
      description: "Quality assurance and certification for security-critical systems.",
      details: [
        "STQC Certification",
        "Common Criteria Testing",
        "FIPS 140-2 Validation",
        "Quality Assurance Testing",
        "Performance Testing",
        "Security Testing Standards"
      ],
      icon: "✅"
    },
    {
      id: 7,
      title: "OT/ICS Security",
      description: "Specialized security for Operational Technology and Industrial Control Systems.",
      details: [
        "SCADA Security Assessment",
        "ICS Network Segmentation",
        "Critical Infrastructure Protection",
        "Process Safety Systems",
        "Legacy System Security",
        "OT/IT Convergence Security"
      ],
      icon: "⚡"
    }
  ];

  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />
      <ServiceHero />
      <ServiceDomains />
      <CTASection />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function ServiceHero() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 px-6 bg-white border-b border-gray-200 overflow-hidden relative">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className={`inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-bold mb-8 transition-all duration-500 ${
          isVisible ? 'opacity-100 animate-stacked-slide-down' : 'opacity-0'
        }`}>
          🛡️ Enterprise Security Solutions
        </div>
        <h1 className={`text-6xl md:text-7xl font-bold mb-6 text-black transition-all duration-500 ${
          isVisible ? 'opacity-100 animate-stacked-perspective' : 'opacity-0'
          }`} style={{ animationDelay: isVisible ? '0.1s' : undefined }}>
          Our <span className="text-gray-700 inline-block">Services</span>
        </h1>
        <p className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-500 ${
          isVisible ? 'opacity-100 animate-parallax-up' : 'opacity-0'
          }`} style={{ animationDelay: isVisible ? '0.2s' : undefined }}>
          Comprehensive cybersecurity solutions designed to protect your organization from evolving threats.
        </p>
      </div>
    </section>
  );
}

function ServicesSection({ services }) {
  const featuredService = services[0];
  const otherServices = services.slice(1);
  const { ref: headerRef, isVisible: headerVisible } = useScrollVisibility();

  const ServiceCard = ({ service, idx, isFeatured }) => {
    const { ref, isVisible } = useScrollVisibility();
    return (
      <div
        ref={ref}
        key={service.id}
        className={`${
          isFeatured
            ? 'md:col-span-2 bg-linear-to-br from-blue-600 to-blue-700'
            : 'bg-white border border-slate-200'
        } text-${isFeatured ? 'white' : 'black'} p-${isFeatured ? '10' : '8'} rounded-${isFeatured ? '2xl' : 'xl'} shadow-${isFeatured ? 'lg' : 'sm'} hover:shadow-lg hover-translate-y transition-all duration-300 ${
          isVisible
            ? 'opacity-100 animate-fade-in-up'
            : 'opacity-0'
        }`}
        style={{ animationDelay: isVisible ? `${0.1 * (idx + 1)}s` : '0s' }}
      >
        <div className="flex items-start gap-6">
          <div className="text-6xl">{service.icon}</div>
          <div className="flex-1">
            <h3 className={`text-${isFeatured ? '3xl' : 'xl'} font-bold mb-4`}>{service.title}</h3>
            <p className={`text-${isFeatured ? 'blue-100' : 'slate-600'} mb-6 text-${isFeatured ? 'lg' : 'base'} leading-relaxed`}>{service.description}</p>
            {isFeatured && (
              <div className="flex gap-4">
                <Link href="/contact" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                  Learn More
                </Link>
                <button className="border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition">
                  Get Quote
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 animate-fade-in-down' : 'opacity-0'
          }`}
        >
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            SERVICES
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Explore our comprehensive<br />service offerings
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We deliver a complete range of cybersecurity solutions designed to protect your organization from evolving threats
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ServiceCard service={featuredService} idx={0} isFeatured={true} />
          {otherServices.slice(0, 2).map((service, idx) => (
            <ServiceCard key={service.id} service={service} idx={idx + 1} isFeatured={false} />
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherServices.slice(2).map((service, idx) => (
            <ServiceCard key={service.id} service={service} idx={idx + 3} isFeatured={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachToSecurity() {
  const capabilities = [
    { icon: "🔍", title: "Risk Management", desc: "Identify and mitigate security risks" },
    { icon: "🎯", title: "Vulnerability Testing", desc: "Penetration testing & assessments" },
    { icon: "🛡️", title: "Managed Security", desc: "24/7 security monitoring services" },
    { icon: "📋", title: "GRC Solutions", desc: "Governance, Risk & Compliance" },
    { icon: "⚠️", title: "Digital Risk Mgmt", desc: "Enterprise risk management" },
    { icon: "🔐", title: "Incident Response", desc: "Swift threat mitigation" }
  ];

  const CapabilityCard = ({ cap, idx }) => {
    const { ref, isVisible } = useScrollVisibility();
    return (
      <div
        ref={ref}
        key={idx}
        className={`bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg hover:border-gray-300 hover-translate-y transition-all duration-300 group cursor-pointer ${
          isVisible ? 'animate-card-stack' : 'opacity-0'
        }`}
        style={{ animationDelay: isVisible ? `${0.08 * (idx + 1)}s` : undefined }}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-xl mb-4 group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-300 shadow-sm">
          <span className="text-3xl text-black group-hover:animate-rotate">{cap.icon}</span>
        </div>
        <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">{cap.title}</h3>
        <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">{cap.desc}</p>
      </div>
    );
  };

  const { ref: headingRef, isVisible: headingVisible } = useScrollVisibility();

  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef}
          className={`flex flex-col md:flex-row justify-between items-center mb-16 transition-opacity duration-500 ${
            headingVisible ? 'opacity-100 animate-stacked-perspective' : 'opacity-0'
          }`}
          style={{ animationDelay: headingVisible ? '0.1s' : undefined }}
        >
          <h2 className="text-5xl font-bold text-black">
            When people
            <span className="inline-block bg-black text-white px-4 py-2 rounded-full mx-3 font-semibold">protect</span>
            with us.
          </h2>
          <Link href="/signup" className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 hover:shadow-lg hover-scale transition-all duration-300 mt-6 md:mt-0 whitespace-nowrap active:scale-95 animate-stacked-slide-down" style={{ animationDelay: '0.15s' }}>
            Let's build something
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => (
            <CapabilityCard key={idx} cap={cap} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceDomains() {
  const domains = [
    {
      title: "Governance & Compliance",
      subtitle: "Regulatory Compliance Management",
      items: [
        "ISO 27001 & ISO 27002 Implementation",
        "NIST Cybersecurity Framework",
        "HITRUST CSF Certification",
        "SOC 1/2/3 & SSAE 18 Audits",
        "PCI-DSS Compliance & Assessment",
        "Regulatory Reporting & Audit Management",
        "Standards & Best Practices Implementation"
      ],
      icon: "📋"
    },
    {
      title: "IT Risk Management",
      subtitle: "Business & Technology Risk Assessment",
      items: [
        "SSAE 18 - SOC 1/2/3 Compliance",
        "SSAP 3402 Implementation",
        "Third Party Security Risk Management",
        "IT Strategy Review & Alignment",
        "IT Strategy & Transformation",
        "IT in Merger & Acquisition",
        "Governance Framework Strategy"
      ],
      icon: "⚠️"
    },
    {
      title: "Data Protection & Privacy",
      subtitle: "International Privacy Regulations",
      items: [
        "General Data Protection Regulation (GDPR)",
        "California Consumer Privacy Act (CCPA)",
        "Digital Personal Data Protection Act (DPDPA)",
        "Brazilian General Data Protection Law (LGPD)",
        "Personal Information Protection Act (PIPEDA)",
        "Singapore Personal Data Protection Act (PDPA)",
        "Health Insurance Portability Act (HIPAA)"
      ],
      icon: "🔐"
    },
    {
      title: "Training & Awareness",
      subtitle: "Compliance & Security Training",
      items: [
        "ISO 27001 ISMS Training",
        "ISO 22301 BCMS Training",
        "ISO 27701 PIMS Training",
        "ISO 27017/27018 Cloud Security",
        "Cybersecurity Awareness Fundamentals",
        "TISAX & GDPR Compliance Training",
        "Phishing Awareness & Response Programs"
      ],
      icon: "🎓"
    }
  ];

  const DomainCard = ({ domain, idx }) => {
    const { ref, isVisible } = useScrollVisibility();
    return (
      <div
        ref={ref}
        key={idx}
        className={`relative group cursor-pointer ${
          isVisible ? 'animate-card-stack' : 'opacity-0'
        }`}
        style={{ animationDelay: isVisible ? `${0.08 * (idx + 1)}s` : '0s' }}
      >
        {/* Card container with enhanced styling */}
        <div className="relative h-full bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-lg group-hover:border-gray-300">

          {/* Header */}
          <div className="relative bg-gray-50 text-black p-8 group-hover:bg-gray-100 transition-all duration-500 border-b border-gray-200">
            <div className="relative flex items-start gap-4 mb-4">
              <div className="shrink-0 text-5xl group-hover:scale-125 group-hover:animate-rotate transition-all duration-500">
                {domain.icon}
              </div>
              <div className="grow">
                <h3 className="text-2xl font-bold group-hover:text-gray-700 transition-colors duration-500">
                  {domain.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500 font-medium">
                  {domain.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 relative z-10">
            <ul className="space-y-4">
              {domain.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className="flex items-start gap-3 group-hover:text-gray-900 transition-all duration-300"
                  style={{
                    transitionDelay: isVisible ? `${0.05 * (itemIdx + 1)}s` : '0s'
                  }}
                >
                  <span className="shrink-0 mt-1 w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold group-hover:scale-125 group-hover:rotate-180 transition-all duration-500">
                    ✓
                  </span>
                  <span className="text-gray-600 group-hover:text-gray-900 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-8 w-full bg-black text-white py-3 px-4 rounded-lg font-bold hover:bg-gray-800 hover-scale transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md">
              <span className="relative z-10">Explore This Domain</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const { ref: headingRef, isVisible: headingVisible } = useScrollVisibility();

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          ref={headingRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headingVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Animated badge */}
          <div className={`inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-gray-200 transition-all duration-500 ${
            headingVisible ? 'animate-stacked-slide-down scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}>
            <span className={`text-lg ${headingVisible ? 'animate-rotate' : ''}`}>🎯</span>
            SPECIALIZED SOLUTIONS FOR YOUR SECURITY NEEDS
          </div>

          {/* Main title with enhanced styling */}
          <h2
            className={`text-6xl md:text-7xl font-black text-black mb-6 leading-tight transition-all duration-700 ${
              headingVisible ? 'animate-stacked-perspective opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: headingVisible ? '0.15s' : undefined }}
          >
            Our Service
            <span className="block text-gray-700">
              Coverage Areas
            </span>
          </h2>

          {/* Subtitle with enhanced text */}
          <p
            className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              headingVisible ? 'animate-parallax-up opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: headingVisible ? '0.25s' : undefined }}
          >
            Discover our comprehensive range of services designed to meet every cybersecurity need.
          </p>

          {/* Decorative line */}
          <div className={`flex items-center justify-center gap-4 mt-8 ${headingVisible ? 'opacity-100 animate-stacked-slide-up' : 'opacity-0'} transition-opacity duration-700`} style={{ animationDelay: headingVisible ? '0.35s' : '0s' }}>
            <div className="h-1 w-12 bg-black rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="h-1 w-12 bg-black rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain, idx) => (
            <DomainCard key={idx} domain={domain} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className={`text-5xl md:text-6xl font-bold mb-6 text-black transition-all duration-500 ${
          isVisible ? 'opacity-100 animate-stacked-perspective' : 'opacity-0'
        }`} style={{ animationDelay: isVisible ? '0.1s' : undefined }}>
          Ready to Secure<br />
          <span className="text-gray-700">Your Organization?</span>
        </h2>
        <p className={`text-lg text-gray-600 mb-10 transition-all duration-500 ${
          isVisible ? 'opacity-100 animate-parallax-up' : 'opacity-0'
        }`} style={{ animationDelay: isVisible ? '0.2s' : '0s' }}>
          Let our experts assess your security posture and recommend tailored solutions designed for your specific needs.
        </p>
        <div className={`flex gap-4 justify-center flex-wrap transition-all duration-500 ${
          isVisible ? 'opacity-100 animate-stacked-slide-up' : 'opacity-0'
        }`} style={{ animationDelay: isVisible ? '0.3s' : '0s' }}>
          <Link href="/contact" className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 hover-scale transition-all duration-300 shadow-sm active:scale-95">
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
}