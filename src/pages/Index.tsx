
import React from 'react';
import FooterNavigation from '@/components/FooterNavigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md z-40 px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-construction-blue">Kontraktor<span className="text-construction-yellow">Pro</span></div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="font-medium text-construction-blue hover:text-construction-yellow transition-colors">Beranda</a>
            <a href="#" className="font-medium text-gray-600 hover:text-construction-blue transition-colors">Layanan</a>
            <a href="#" className="font-medium text-gray-600 hover:text-construction-blue transition-colors">Proyek</a>
            <a href="#" className="font-medium text-gray-600 hover:text-construction-blue transition-colors">Tentang Kami</a>
            <a href="#" className="font-medium text-gray-600 hover:text-construction-blue transition-colors">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  );
};

export default Index;
