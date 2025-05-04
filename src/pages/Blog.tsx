
import React from 'react';
import { Link } from 'react-router-dom';
import FooterNavigation from '@/components/FooterNavigation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header with contact info */}
      <header className="sticky top-0 bg-white shadow-md z-40">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center py-4 px-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-construction-blue">
                Jasa Rancang <span className="text-construction-yellow"> Bangun</span>
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

      {/* Hero section for blog */}
      <div className="bg-construction-blue text-white py-12 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog & Artikel</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Informasi terbaru, tips, dan ide seputar konstruksi, renovasi, dan desain bangunan
          </p>
        </div>
      </div>

      {/* Blog content */}
      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-construction-yellow text-construction-gray-dark hover:bg-yellow-500">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="text-xl text-construction-blue">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <Link to={`/blog/${post.id}`} className="text-construction-blue hover:text-construction-yellow font-medium">
                  Baca selengkapnya
                </Link>
                <span className="text-sm text-gray-500">{post.readTime} baca</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  );
};

export default Blog;
