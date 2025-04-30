
import React from 'react';
import FooterNavigation from '@/components/FooterNavigation';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 1,
    title: "Tips Memilih Kontraktor Terpercaya untuk Proyek Anda",
    excerpt: "Memilih kontraktor yang tepat adalah langkah penting dalam kesuksesan proyek konstruksi. Artikel ini membahas beberapa tips penting yang perlu dipertimbangkan saat memilih kontraktor.",
    date: "12 April 2025",
    category: "Tips & Saran",
    readTime: "5 menit",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=870"
  },
  {
    id: 2,
    title: "Tren Desain Rumah Modern 2025 di Indonesia",
    excerpt: "Ketahui tren desain rumah terbaru yang populer di Indonesia tahun ini, dari konsep minimalis hingga sentuhan tradisional modern yang menarik.",
    date: "28 Maret 2025",
    category: "Desain",
    readTime: "8 menit",
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1170"
  },
  {
    id: 3,
    title: "Material Konstruksi Ramah Lingkungan untuk Bangunan Berkelanjutan",
    excerpt: "Eksplorasi berbagai pilihan material konstruksi ramah lingkungan yang dapat digunakan untuk membangun proyek yang lebih berkelanjutan dan hemat energi.",
    date: "15 Maret 2025",
    category: "Material",
    readTime: "6 menit",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1974"
  },
  {
    id: 4,
    title: "Cara Mengelola Anggaran Proyek Renovasi dengan Efektif",
    excerpt: "Panduan praktis untuk mengelola anggaran proyek renovasi rumah agar tetap dalam batas dan menghindari pengeluaran tak terduga.",
    date: "2 Maret 2025",
    category: "Manajemen",
    readTime: "7 menit",
    image: "https://images.unsplash.com/photo-1628254095259-cd352547a0af?q=80&w=1170"
  },
  {
    id: 5,
    title: "Inspirasi Desain Interior untuk Ruang Terbatas",
    excerpt: "Ide-ide kreatif untuk memaksimalkan ruang terbatas dengan desain interior yang fungsional namun tetap estetis dan nyaman.",
    date: "18 Februari 2025",
    category: "Interior",
    readTime: "5 menit",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1227"
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md z-40 px-4 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-construction-blue">Kontraktor<span className="text-construction-yellow">Pro</span></div>
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
                <a href="#" className="text-construction-blue hover:text-construction-yellow font-medium">
                  Baca selengkapnya
                </a>
                <span className="text-sm text-gray-500">{post.readTime} baca</span>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 bg-construction-gray-light p-8 rounded-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-construction-blue">Dapatkan Update Terbaru</h3>
            <p className="mb-6 text-gray-600">
              Berlangganan newsletter kami untuk mendapatkan artikel terbaru dan tips konstruksi langsung ke email Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Alamat email Anda" 
                className="flex-grow"
              />
              <Button className="bg-construction-blue hover:bg-blue-700 text-white">
                Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <FooterNavigation />
    </div>
  );
};

export default Blog;
