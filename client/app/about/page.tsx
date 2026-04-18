"use client";

import Link from "next/link";
import { useScrollAnimation, useScrollVisibility } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />
      <AboutHero />
      <Stats />
      <Description />
      <ApproachFlow />
      <MissionVision />



      <DashValue />
      <ClientList />

      <Footer />
    </main>
  );
}

function AboutHero() {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 text-black animate-stacked-perspective" style={{ animationDelay: '0.1s' }}>About Dashify</h1>
        <p className="text-xl text-gray-600 mb-8 font-light animate-parallax-up" style={{ animationDelay: '0.2s' }}>
          Let's secure your digital future, together.
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-stacked-slide-up" style={{ animationDelay: '0.3s' }}>

          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 hover-translate-y hover-scale transition font-medium text-sm">
            Start Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { number: "30+", label: "Clients Protected" },
    { number: "100%", label: "Success Rate" },
    { number: "24 × 7", label: "Hours Support" }
  ];

  const StatCard = ({ stat, idx }) => {
    const { ref, isVisible } = useScrollVisibility();
    return (
      <div
        ref={ref}
        key={idx}
        className={`text-center transition-opacity duration-500 ${
          isVisible ? 'opacity-100 animate-card-stack' : 'opacity-0'
        }`}
        style={{ animationDelay: isVisible ? `${0.1 * (idx + 1)}s` : undefined }}
      >
        <div className="text-5xl font-bold text-black mb-3">{stat.number}</div>
        <div className="text-gray-600">{stat.label}</div>
      </div>
    );
  };

  const { ref: sectionRef } = useScrollVisibility();

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <StatCard key={idx} stat={stat} idx={idx} />
        ))}
      </div>
    </section>
  );
}

function Description() {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-black animate-stacked-perspective" style={{ animationDelay: '0.1s' }}>About Us</h2>
        <p className="text-gray-600 leading-relaxed mb-6 animate-parallax-up" style={{ animationDelay: '0.2s' }}>
          Dashify Service is a company specialized in resolving complex problems related to Information, Cyber security, data governance & protection. IT audit & compliance management for organizations. Dash challenge outdated technology and business outlooks, enhancing their capabilities & effectiveness in cyber security defense, minimizing enterprise and IT risks, managing security operations, and achieving regulatory compliance. We are delivering a new generation of cyber security, purposely, designed to protect your organization from the most advanced cyber attacks. we expertise the
        </p>
      </div>
    </section>
  );
}

function ApproachFlow() {
  const steps = [
    { label: "People", icon: "👥", description: "Expert professionals" },
    { label: "Process", icon: "⚙️", description: "Structured methodology" },
    { label: "Technology", icon: "🔧", description: "Advanced tools" }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-black animate-stacked-perspective" style={{ animationDelay: '0.1s' }}>Our Approach</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-8 animate-stacked-slide-down" style={{ animationDelay: `${0.12 * (idx + 1)}s` }}>
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:animate-rotate-slow transition-all duration-300">{step.icon}</div>
                <h3 className="text-2xl font-bold text-black">{step.label}</h3>
                <p className="text-gray-600 text-sm mt-2">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block text-4xl text-gray-400 font-bold">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  const { ref: ref1, isVisible: visible1 } = useScrollVisibility();
  const { ref: ref2, isVisible: visible2 } = useScrollVisibility();

  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div ref={ref1} className={`bg-gray-50 border border-gray-200 p-8 rounded-lg hover:border-gray-300 hover:shadow-lg hover-translate-y transition ${
            visible1 ? 'opacity-100 animate-stacked-slide-down' : 'opacity-0'
          }`} style={{ animationDelay: visible1 ? '0.1s' : '0s' }}>
            <h3 className="text-2xl font-bold mb-4 text-black">Our Mission</h3>
            <p className="text-gray-600">
              To protect organization from cyber threats through expert knowledge and technology, ensuring your digital infrastructure remains secure and resilient against evolving threats.
            </p>
          </div>
          <div ref={ref2} className={`bg-gray-50 border border-gray-200 p-8 rounded-lg hover:border-gray-300 hover:shadow-lg hover-translate-y transition ${
            visible2 ? 'opacity-100 animate-stacked-slide-up' : 'opacity-0'
          }`} style={{ animationDelay: visible2 ? '0.15s' : '0s' }}>
            <h3 className="text-2xl font-bold mb-4 text-black">Our Goals</h3>
            <p className="text-gray-600">
              Integrity, excellence, and customer focus drive our commitment to delivering a secure digital environment. We strive to empower organizations with the knowledge and tools they need to succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}







function DashValue() {
  const values = [
    {
      icon: "🎯",
      title: "Cyber Expertise",
      desc: "Enabled through Security, Data Protection & Assurance Center of Excellence & having end-to-end capability from Program Build-Operations Transform."
    },
    {
      icon: "🛡️",
      title: "Cyber Security and Assurance Expertise",
      desc: "Team of Consultants with extensive experience of performing governance, risk, and compliance projects for numerous clients across industry verticals."
    },
    {
      icon: "👥",
      title: "Experienced & Skilled Consultants",
      desc: "Dash services has a pool of experienced consultants in executing projects with relevant certifications, strong training, and an onboarding program to continuously train consultants in this area."
    },
    {
      icon: "💼",
      title: "Prior Experience",
      desc: "All the consultants have years of practice experience with multiple client engagements in sectors such as BFSI, pharma, telecom, logistics, and others."
    },
    {
      icon: "✓",
      title: "Compliance Standards",
      desc: "Knowledge and experience with industry-wide compliance requirements enabling quick integration with organization processes."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-6 animate-stacked-perspective" style={{ animationDelay: '0.1s' }}>DASH VALUE</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-parallax-up" style={{ animationDelay: '0.2s' }}>
            Our commitment to delivering excellence across all dimensions of cybersecurity
          </p>
        </div>

        {/* Values Grid - 3 top, 2 bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Top 3 Cards */}
          {values.slice(0, 3).map((value, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 p-8 rounded-lg text-black hover:shadow-md hover-translate-y transition animate-card-stack" style={{ animationDelay: `${0.08 * (idx + 1)}s` }}>
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6">
                <span className="text-3xl">{value.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-center">{value.title}</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom 2 Cards - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-8">
          {values.slice(3).map((value, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 p-8 rounded-lg text-black hover:shadow-md hover-translate-y transition animate-card-stack" style={{ animationDelay: `${0.08 * (idx + 4)}s` }}>
              <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6">
                <span className="text-3xl">{value.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-4 text-center">{value.title}</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientList() {
  const clients = [
    { name: "Sunsure Energy Private Limited", services: "ISMS" },
    { name: "Auto Leak Ignition", services: "Factory Assessment, TISAX" },
    { name: "Aggarwal Metal", services: "QMS, ISMS" },
    { name: "Thomson Digital", services: "Integrated Management System" },
    { name: "MPS", services: "GDPR, ISMS, QMS, BCMS" },
    { name: "Vistra", services: "ISMS" },
    { name: "I-Energizer", services: "Integrated Management System" },
    { name: "Sanoh India", services: "Integrated Management System" },
    { name: "Quick Algo", services: "Security, Quality Audits" },
    { name: "PTGC", services: "ISMS, QMS" },
    { name: "Tagd-AI Power Fulfillment Solution", services: "GDPR, ISMS" },
    { name: "Nagarro", services: "Integrated Management System" },
    { name: "Bonton Cable", services: "Integrated Management System" },
    { name: "Sai Krishna & Associates (Law Firm)", services: "ISMS, QMS" }
  ];

  const ClientCard = ({ client, idx }) => {
    const { ref, isVisible } = useScrollVisibility();
    return (
      <div
        ref={ref}
        key={idx}
        className={`bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg hover:border-gray-300 hover:scale-105 transition-all duration-300 group cursor-pointer ${
          isVisible ? 'opacity-100 animate-card-stack' : 'opacity-0'
        }`}
        style={{ animationDelay: isVisible ? `${0.03 * (idx + 1)}s` : undefined }}
      >
        <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-700 transition-colors duration-300">{client.name}</h3>
        <p className="text-gray-600 font-semibold text-sm group-hover:text-gray-800 transition-colors duration-300">{client.services}</p>
      </div>
    );
  };

  const { ref: titleRef, isVisible: titleVisible } = useScrollVisibility();

  return (
    <section className="py-20 px-6 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-opacity duration-500 ${
            titleVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className={`text-5xl font-bold text-black mb-4 ${
            titleVisible ? 'animate-stacked-perspective' : ''
          }`} style={{ animationDelay: titleVisible ? '0.1s' : undefined }}>Client List</h2>
          <p className={`text-lg text-gray-600 ${
            titleVisible ? 'animate-parallax-up' : ''
          }`} style={{ animationDelay: titleVisible ? '0.2s' : undefined }}>
            Security (ISMS) & Quality (QMS) Audits • GDPR (Privacy) Implementation • Documentation • Process Alignment • Training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client, idx) => (
            <ClientCard key={idx} client={client} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}


