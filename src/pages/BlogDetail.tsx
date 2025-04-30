
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import FooterNavigation from '@/components/FooterNavigation';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Blog tidak ditemukan</h1>
        <Link to="/blog" className="text-construction-blue hover:underline">
          Kembali ke Blog
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
                Kontraktor<span className="text-construction-yellow">Pro</span>
              </Link>
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

      <div className="container mx-auto px-4 py-8">
        <Link to="/blog" className="inline-flex items-center text-construction-blue hover:text-construction-yellow mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Blog
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-72 overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="px-3 py-1 bg-construction-yellow text-construction-gray-dark rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500">{post.date}</span>
            </div>
            
            <h1 className="text-3xl font-bold text-construction-blue mb-4">{post.title}</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">{post.excerpt}</p>
              
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra, nisl a ultrices dignissim, 
                justo nisl sagittis nulla, vel consectetur nisl mauris in sem. Mauris vel mauris nec nunc 
                pharetra finibus. Nulla facilisi. Mauris vel nisl vel velit commodo vestibulum.
              </p>
              
              <h2 className="text-xl font-semibold text-construction-blue mt-8 mb-4">
                Bagaimana Cara Memilih Kontraktor yang Tepat?
              </h2>
              
              <p className="mb-4">
                Sed at justo vel magna vehicula tempor. Donec gravida lacinia ipsum, at blandit risus commodo sed. 
                Cras eget arcu ut orci pellentesque feugiat. Nullam auctor, libero eu pellentesque lobortis, 
                libero sem condimentum elit, nec venenatis dolor massa et metus.
              </p>
              
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Periksa pengalaman dan portofolio proyek sebelumnya</li>
                <li className="mb-2">Pastikan kontraktor memiliki lisensi dan asuransi yang sesuai</li>
                <li className="mb-2">Minta referensi dari klien sebelumnya</li>
                <li className="mb-2">Bandingkan beberapa penawaran harga</li>
                <li className="mb-2">Pastikan detail kontrak jelas dan komprehensif</li>
              </ul>
              
              <p className="mb-4">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                Morbi tincidunt neque odio, ac commodo ipsum faucibus et. Maecenas aliquet elit vel justo 
                hendrerit, vel facilisis nisi vulputate.
              </p>
              
              <div className="my-8 p-4 bg-gray-50 border-l-4 border-construction-blue">
                <p className="italic">
                  "Memilih kontraktor yang tepat adalah investasi jangka panjang untuk keberhasilan proyek Anda. 
                  Jangan ragu untuk menghabiskan waktu dalam proses seleksi ini."
                </p>
              </div>
              
              <p>
                Untuk informasi lebih lanjut tentang layanan kontraktor kami, silakan hubungi tim kami 
                melalui kontak yang tersedia di halaman ini.
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
              <span className="text-sm text-gray-500">{post.readTime} baca</span>
              <div className="flex space-x-4">
                <span className="text-sm text-gray-500">Bagikan:</span>
                <a href="#" className="text-construction-blue hover:text-construction-yellow">Facebook</a>
                <a href="#" className="text-construction-blue hover:text-construction-yellow">Twitter</a>
                <a href="#" className="text-construction-blue hover:text-construction-yellow">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  );
};

export default BlogDetail;
