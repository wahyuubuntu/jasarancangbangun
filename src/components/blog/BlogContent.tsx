
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
      
      
      <div className="my-8 p-4 bg-gray-50 border-l-4 border-construction-blue">
        <p className="italic">
          "Bangun & Renovasi Rumah percayakan pada kami, kami siap membuat sesuai keinginan anda"
        </p>
      </div>
      
      <p>
        Untuk informasi lebih lanjut tentang layanan kami, silakan hubungi tim kami 
        melalui kontak yang tersedia.
      </p>
    </div>
  );
};

export default BlogContent;
