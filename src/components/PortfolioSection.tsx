
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
    image: "https://scontent.fbdo13-1.fna.fbcdn.net/v/t1.6435-9/41990886_1588955104542688_3191271605573517312_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ngv3e5ldqgUQ7kNvwFNht3t&_nc_oc=AdnAA62gVkAK0ZqaLh6PqL-7-hDk0Osl-rgHW-TX1VC-mFnM8oR3CEkTAsVq1ErNYHA&_nc_zt=23&_nc_ht=scontent.fbdo13-1.fna&_nc_gid=_3hbHPZAFVVnAHryh3K9OQ&oh=00_AfF3_cqucvu4ranOwNuxl2foVeJ_I-2TQdDBvOFuCRv-kA&oe=683E8DCF",
    title: "Proyek Bangun Rumah",
    description: "Pembuatan proyek rumah tinggal, dengan kualitas terbaik kami siap membangun hunian rumah sesuai keinginan anda"
  },
  {
    image: "https://scontent.fbdo13-1.fna.fbcdn.net/v/t39.30808-6/464364411_8044627425642058_7794866639564450217_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=tBviXBbQ43YQ7kNvwGCPNvf&_nc_oc=Adkl0KArqNrskGbHg9PFQISFOflTGe9f5qtOsEozFCj_MBBc6r_5ZPkL0YuPt50jYEs&_nc_zt=23&_nc_ht=scontent.fbdo13-1.fna&_nc_gid=AaWtnruLHJuLvIxhQKfxpg&oh=00_AfFBmeu4Gp-cym_0f7pFR63IiUfROvbS6uBX6Uyh55vnpA&oe=681CCB5E",
    title: "Proyek Bangun Rumah",
    description: "Pembuatan proyek rumah tinggal, dengan kualitas terbaik kami siap membangun hunian rumah sesuai keinginan anda"
  },
  {
    image: "https://scontent.fbdo13-1.fna.fbcdn.net/v/t39.30808-6/464208688_8032709716833829_5356973155736228400_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0pz4gYXVFckQ7kNvwFGgH_t&_nc_oc=AdkKxmtiFMCqEt8zB309cppV4mHDv-K3komrF8kNxB2q0MaQHc6PH5LXqOuc3nfAEIY&_nc_zt=23&_nc_ht=scontent.fbdo13-1.fna&_nc_gid=UXo3o1xzfk26uPsbu-0gGg&oh=00_AfHKGiEnmxQf8NP52xGh8quJKperA8HPL8cd2FIa2Qlvow&oe=681CF952",
    title: "Interior Rumah Sakit",
    description: "Mendesain Interior untuk rumah sakit di Ciremai"
  },
  {
    image: "https://scontent.fbdo13-1.fna.fbcdn.net/v/t39.30808-6/463717848_7996072717164196_2603203389660765498_n.png?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=zc-ReowBWUcQ7kNvwENHKJn&_nc_oc=Adn0ClYTpdBTO4XzSLQgZk4guJzS0j-eJc6lWk0EqeXh-GEH_EI7EnGJnXUVo5Tj6U4&_nc_zt=23&_nc_ht=scontent.fbdo13-1.fna&_nc_gid=9xBMZVn-iFI6qJ-OP7lQBg&oh=00_AfHmsTzivPOROwzA39PzOvmuM4HT7K560tDlv33PTKFRNw&oe=681CD3B8",
    title: "Desain Masjid",
    description: "Tidak hanya rumah kami juga membangun dan merenovasi masjid, desain gratis jika yang akan membangun masjid"
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
            Berikut adalah beberapa proyek yang telah kami selesaikan dengan kualitas terbaik
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
