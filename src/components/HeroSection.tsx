import React from 'react'; 
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-construction-blue text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1200')] bg-cover bg-center opacity-20"></div>
      <div className="relative container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Kontraktor Profesional</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Membangun masa depan dengan kualitas dan keahlian terbaik. Kami menyediakan layanan konstruksi lengkap untuk kebutuhan Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            className="bg-construction-yellow hover:bg-yellow-500 text-construction-gray-dark font-medium px-6 py-2 flex items-center gap-2"
          >
            <a
              href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20konstruksi%20Anda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare size={20} />
              Hubungi Kami
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
