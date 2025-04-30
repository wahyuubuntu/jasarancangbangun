
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Pemilik Rumah',
    content: 'Sangat puas dengan hasil renovasi rumah saya. Tim kontraktor bekerja secara profesional dan hasil akhirnya melampaui ekspektasi.',
    avatar: '👨‍💼'
  },
  {
    name: 'Siti Rahma',
    role: 'Pengusaha',
    content: 'Proyek pembangunan toko saya selesai tepat waktu dan sesuai anggaran. Kualitas konstruksi sangat baik dan tahan lama.',
    avatar: '👩‍💼'
  },
  {
    name: 'Hendro Wijaya',
    role: 'Manajer Properti',
    content: 'Kami telah bekerjasama dalam berbagai proyek dan selalu puas dengan profesionalisme dan kualitas kerja yang diberikan.',
    avatar: '👨‍🔧'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-construction-blue">Testimoni Klien</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md border-l-4 border-construction-yellow">
              <CardContent className="pt-6">
                <div className="mb-4 text-4xl">{testimonial.avatar}</div>
                <blockquote className="mb-4 italic text-gray-600">"{testimonial.content}"</blockquote>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
