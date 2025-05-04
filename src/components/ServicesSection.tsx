
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: 'Bangun dan Renovasi Rumah',
    description: 'Bangun dan Renovasi Rumah Anda menjadi impian dengan layanan profesional kami',
    icon: '🏠'
  },
  {
    title: 'Membangun Toko',
    description: 'Membangun toko untuk usaha anda dengan standar kualitas terbaik',
    icon: '🏪'
  },
  {
    title: 'Desain Arsitektur',
    description: 'Tim arsitek kami siap menciptakan desain modern sesuai kebutuhan Anda',
    icon: '📐'
  },
  {
    title: 'Interior & Eksterior',
    description: 'Solusi lengkap untuk memperindah tampilan dalam dan luar bangunan Anda',
    icon: '🎨'
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-construction-gray-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-construction-blue">Layanan Kami</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle className="text-xl text-construction-blue">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-construction-gray-dark">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
