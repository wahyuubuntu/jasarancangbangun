
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import FooterNavigation from '@/components/FooterNavigation';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import Header from '@/components/blog/Header';
import BlogContent from '@/components/blog/BlogContent';
import SocialShare from '@/components/blog/SocialShare';
import NotFound from '@/components/blog/NotFound';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === Number(id));
  
  if (!post) {
    return <NotFound />;
  }
  
  const shareUrl = window.location.href;
  
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header with contact info */}
      <Header />

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
            
            {/* Blog content component */}
            <BlogContent post={post} />
            
            {/* Social sharing component */}
            <SocialShare 
              title={post.title}
              url={shareUrl}
              readTime={post.readTime}
            />
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  );
};

export default BlogDetail;
