
import React from 'react';
import { Link } from 'react-router-dom';
import FooterNavigation from '@/components/FooterNavigation';
import { portfolioItems } from '@/components/PortfolioSection';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header with contact info */}
      <header className="sticky top-0 bg-white shadow-md z-40">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-construction-blue">
                Jasa Rancang <span className="text-construction-yellow">Bangun</span>
              </Link>
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

      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-construction-blue hover:text-construction-yellow mb-6 inline-block">
          &larr; Kembali ke Beranda
        </Link>
        
        <h1 className="text-3xl font-bold mb-8 text-construction-blue">Semua Proyek</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden h-full">
              <CardContent className="p-0">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </AspectRatio>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <FooterNavigation />
    </div>
  );
};

export default Projects;
