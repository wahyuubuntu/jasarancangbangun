
import React from 'react';
import { BlogPost } from '@/types/blog';

interface BlogContentProps {
  post: BlogPost;
}

const BlogContent: React.FC<BlogContentProps> = ({ post }) => {
  return (
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
  );
};

export default BlogContent;
