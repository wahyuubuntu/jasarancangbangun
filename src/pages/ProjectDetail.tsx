import React from 'react';
import { useParams, Link } from 'react-router-dom';
import FooterNavigation from '@/components/FooterNavigation';
import { portfolioItems } from '@/components/PortfolioSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectIndex = Number(id);
  const project = portfolioItems[projectIndex];
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Proyek tidak ditemukan</h1>
        <Link to="/projects" className="text-construction-blue hover:underline">
          Kembali ke Daftar Proyek
        </Link>
      </div>
    );
  }

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
        <Link to="/projects" className="inline-flex items-center text-construction-blue hover:text-construction-yellow mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Daftar Proyek
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-72 md:h-96 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <h1 className="text-3xl font-bold text-construction-blue mb-4">{project.title}</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">{project.description}</p>
              
              <h2 className="text-xl font-semibold text-construction-blue mt-8 mb-4">
                Detail Proyek
              </h2>
              
              <p className="mb-4">
                Proyek ini merupakan salah satu kebanggaan kami dalam memberikan layanan konstruksi
                berkualitas tinggi. Dengan pendekatan yang profesional dan perhatian terhadap detail,
                kami berhasil menyelesaikan proyek ini sesuai dengan timeline dan memenuhi ekspektasi klien.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Lokasi</h3>
                  <p>Jakarta, Indonesia</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Durasi Proyek</h3>
                  <p>12 bulan</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Jenis Konstruksi</h3>
                  <p>Komersial</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h3 className="font-semibold mb-2">Status</h3>
                  <p>Selesai</p>
                </div>
              </div>
              
              <p className="mb-4">
                Semua material yang digunakan dalam proyek ini dipilih dengan teliti untuk memastikan
                kualitas, daya tahan, dan efisiensi energi yang optimal.
              </p>
              
              <div className="my-8 p-4 bg-gray-50 border-l-4 border-construction-blue">
                <p className="italic">
                  "Kepuasan klien adalah prioritas utama kami. Kami bangga dapat menghadirkan hasil
                  yang melampaui ekspektasi mereka."
                </p>
              </div>
            </div>

            {/* Tombol Konsultasi WhatsApp */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href="https://wa.me/6288975602673?text=Halo%20saya%20ingin%20konsultasi%20tentang%20proyek%20serupa."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-construction-blue hover:bg-construction-yellow text-white transition-colors">
                  Konsultasi Proyek Serupa
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <FooterNavigation />
    </div>
  );
};

export default ProjectDetail;
