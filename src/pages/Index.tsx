
import React from 'react';
import { Link } from 'react-router-dom';
import FooterNavigation from '@/components/FooterNavigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import PortfolioSection from '@/components/PortfolioSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header with contact info */}
      <header className="sticky top-0 bg-white shadow-md z-40">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-construction-blue">
                Jasa Rancang<span className="text-construction-yellow">Bangun</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-2 md:mt-0 text-sm">
              <div className="flex items-center">
                <span className="mr-2 text-construction-yellow">📞</span>
                <span>0889 7560 2673</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-construction-yellow">✉️</span>
                <span>-</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  );
};

export default Index;
