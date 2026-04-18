import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";

export default function HomePage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}