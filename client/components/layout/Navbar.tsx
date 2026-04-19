"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-6 z-50 px-4 w-full flex justify-center pointer-events-none">
      <nav className="pointer-events-auto flex w-full max-w-6xl justify-between items-center px-6 md:px-8 py-3.5 bg-gradient-to-b from-gray-800/90 to-black/95 backdrop-blur-xl border border-gray-700/60 border-t-gray-500/50 shadow-[0_20px_40px_-8px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(0,0,0,0.4)] rounded-full navbar-3d transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-10px_rgba(0,0,0,1),inset_0_2px_4px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(0,0,0,0.4)]" style={{ perspective: '1200px' }}>
        {/* Dashify Logo - Links to Home */}
        <Link href="/" className="text-2xl md:text-3xl font-bold font-mono tracking-wider text-white hover:text-gray-300 transition-all duration-300 logo-3d drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]" style={{ transformStyle: 'preserve-3d' }}>
          Dashify
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 pointer-events-auto"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full px-4 md:hidden pointer-events-none">
            <div className="pointer-events-auto flex flex-col gap-4 p-6 bg-gradient-to-b from-gray-800/95 to-black/98 backdrop-blur-2xl border border-gray-700/60 shadow-2xl rounded-3xl animate-in fade-in slide-in-from-top-4 duration-300">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-gray-300 transition-colors py-2 border-b border-white/5">
                Home
              </Link>
              <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-gray-300 transition-colors py-2 border-b border-white/5">
                Services
              </Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-gray-300 transition-colors py-2 border-b border-white/5">
                About
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-white hover:text-gray-300 transition-colors py-2">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}