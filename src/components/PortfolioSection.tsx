
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Image } from 'lucide-react';

// Define the portfolio items with image URLs, titles and descriptions
const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    title: "Proyek Konstruksi Taman",
    description: "Renovasi dan pembangunan taman publik di area kota dengan fitur lansekap modern."
  },
  {
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    title: "Gedung Perkantoran Modern",
    description: "Pembangunan gedung perkantoran 12 lantai dengan arsitektur modern dan efisiensi energi."
  },
  {
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    title: "Jembatan Penghubung",
    description: "Konstruksi jembatan beton penghubung antar wilayah dengan panjang 250 meter."
  },
  {
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    title: "Komplek Perumahan",
    description: "Pengembangan komplek perumahan dengan 150 unit rumah dan fasilitas lengkap."
  },
  {
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    title: "Renovasi Bangunan Bersejarah",
    description: "Restorasi dan renovasi bangunan bersejarah dengan mempertahankan nilai arsitektur asli."
  }
];

export { portfolioItems };

const PortfolioSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-construction-blue mb-4">Portfolio Proyek</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berikut adalah beberapa proyek konstruksi yang telah kami selesaikan dengan kualitas terbaik
            dan kepuasan pelanggan yang maksimal.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {portfolioItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/1">
                  <Card className="border overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <AspectRatio ratio={16/9}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                          <p className="text-sm md:text-base">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white border-none text-construction-blue" />
            <CarouselNext className="absolute -right-12 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white border-none text-construction-blue" />
          </Carousel>

          <div className="flex justify-center mt-8">
            <Link to="/projects">
              <Button className="bg-construction-blue hover:bg-construction-yellow text-white transition-colors flex items-center gap-2">
                <Image className="h-4 w-4" />
                Lihat Semua Proyek
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
