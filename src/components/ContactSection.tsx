
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log("Form submitted");
    // You could add toast notification here
  };

  return (
    <section className="py-16 bg-construction-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Informasi Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="mr-3 text-construction-yellow">📍</span>
                <p>Jl. Konstruksi No. 123, Jakarta Selatan, Indonesia</p>
              </div>
              <div className="flex items-start">
                <span className="mr-3 text-construction-yellow">📞</span>
                <p>+62 812 3456 7890</p>
              </div>
              <div className="flex items-start">
                <span className="mr-3 text-construction-yellow">✉️</span>
                <p>info@kontraktor-profesional.com</p>
              </div>
              <div className="flex items-start">
                <span className="mr-3 text-construction-yellow">⏰</span>
                <p>Senin - Jumat: 08:00 - 17:00<br/>Sabtu: 08:00 - 13:00</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Nama Lengkap" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  required
                />
              </div>
              <div>
                <Input 
                  placeholder="Nomor Telepon" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Pesan Anda" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="bg-construction-yellow hover:bg-yellow-500 text-construction-gray-dark">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
