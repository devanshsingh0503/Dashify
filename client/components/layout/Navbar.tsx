"use client";

import Link from "next/link";

export default function Navbar() {

  return (
    <div className="sticky top-6 z-50 px-4 w-full flex justify-center pointer-events-none">
      <nav className="pointer-events-auto flex w-full max-w-6xl justify-between items-center px-8 py-3.5 bg-gradient-to-b from-gray-800/90 to-black/95 backdrop-blur-xl border border-gray-700/60 border-t-gray-500/50 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)] rounded-full navbar-3d transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,1),inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4)]" style={{ perspective: '1200px' }}>
        {/* Dashify Logo - Links to Home */}
        <Link href="/" className="text-3xl font-bold font-mono tracking-wider text-white hover:text-gray-300 transition-all duration-300 logo-3d drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" style={{ transformStyle: 'preserve-3d' }}>
          Dashify
        </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-10 text-base font-medium text-white">
        <Link href="/" className="nav-link-3d relative group" style={{ perspective: '1000px' }}>
          <span className="inline-block transition-all duration-300 group-hover:text-gray-300">
            Home
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/services" className="nav-link-3d relative group" style={{ perspective: '1000px' }}>
          <span className="inline-block transition-all duration-300 group-hover:text-gray-300">
            Services
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/about" className="nav-link-3d relative group" style={{ perspective: '1000px' }}>
          <span className="inline-block transition-all duration-300 group-hover:text-gray-300">
            About
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/contact" className="nav-link-3d relative group" style={{ perspective: '1000px' }}>
          <span className="inline-block transition-all duration-300 group-hover:text-gray-300">
            Contact
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>


      </nav>
    </div>
  );
}