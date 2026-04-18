"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="text-center py-24 bg-white px-6 relative overflow-hidden border-t border-gray-200">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold mb-6 text-black animate-stacked-perspective" style={{ animationDelay: '0.1s' }}>
          Ready to Secure Your Organization?
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto font-light animate-parallax-up" style={{ animationDelay: '0.2s' }}>
          Join thousands of enterprises protecting their digital assets with our advanced security solutions and expert consulting.
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-stacked-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 hover-translate-y hover-scale transition shadow-sm hover:shadow-md inline-block"
          >
            Get A Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}