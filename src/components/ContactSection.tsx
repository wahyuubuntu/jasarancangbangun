
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
              <p>Jl. Sultan Ageng Tirtayasa No.8 Cempaka, Kec Talun, cirebon, Indonesia, 45171</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-construction-yellow">📞</span>
              <p>0889 7560 2673</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-construction-yellow">✉️</span>
              <p>-</p>
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
