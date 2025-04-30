
import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-construction-blue text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
        
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Informasi Kontak</h3>
          <div className="space-y-5">
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
      </div>
    </section>
  );
};

export default ContactSection;
