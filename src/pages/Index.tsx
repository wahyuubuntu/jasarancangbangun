
import React from 'react';
import { Link } from 'react-router-dom';
import FooterNavigation from '@/components/FooterNavigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header with contact info */}
      <header className="sticky top-0 bg-white shadow-md z-40">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-construction-blue">
                Kontraktor<span className="text-construction-yellow">Pro</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 mt-3 md:mt-0">
              <Link to="/" className="font-medium text-construction-blue hover:text-construction-yellow transition-colors">Beranda</Link>
              <a href="#" className="font-medium text-gray-600 hover:text-construction-blue transition-colors">Layanan</a>
              <a href="#" className="font-medium text-gray-600 hover:text-construction-blue transition-colors">Proyek</a>
              <a href="#" className="font-medium text-gray-600 hover:text-construction-blue transition-colors">Tentang Kami</a>
              <a href="#" className="font-medium text-gray-600 hover:text-construction-blue transition-colors">Kontak</a>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 md:mt-0 text-sm">
              <div className="flex items-center">
                <span className="mr-2 text-construction-yellow">📞</span>
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-construction-yellow">✉️</span>
                <span>info@kontraktor-profesional.com</span>
              </div>
            </div>
          </div>
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
