
import React from 'react';
import { Facebook, Twitter, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface SocialShareProps {
  title: string;
  url: string;
  readTime: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ title, url, readTime }) => {
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    toast({
      title: "Dibagikan ke Facebook",
      description: "Artikel telah dibagikan ke timeline Facebook Anda",
    });
  };
  
  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
    toast({
      title: "Dibagikan ke Twitter",
      description: "Artikel telah dibagikan ke Twitter Anda",
    });
  };
  
  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
    toast({
      title: "Dibagikan ke WhatsApp",
      description: "Artikel telah dibuka di WhatsApp Anda",
    });
  };
  
  const shareViaNavigator = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url
        });
        toast({
          title: "Berhasil Dibagikan",
          description: "Artikel telah dibagikan",
        });
      } else {
        // Fallback for browsers that don't support navigator.share
        toast({
          title: "Browser Tidak Mendukung",
          description: "Fitur berbagi tidak didukung oleh browser Anda. Silakan gunakan tombol media sosial lainnya.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm text-gray-500">{readTime} baca</span>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">Bagikan:</span>
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={shareToFacebook} 
            className="rounded-full hover:bg-blue-50 hover:text-blue-600"
          >
            <Facebook size={18} />
            <span className="sr-only">Share to Facebook</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={shareToTwitter} 
            className="rounded-full hover:bg-blue-50 hover:text-sky-500"
          >
            <Twitter size={18} />
            <span className="sr-only">Share to Twitter</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={shareToWhatsApp} 
            className="rounded-full hover:bg-green-50 hover:text-green-500"
          >
            <Share size={18} />
            <span className="sr-only">Share to WhatsApp</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={shareViaNavigator} 
            className="rounded-full hover:bg-gray-50"
          >
            <Share size={18} />
            <span className="sr-only">Share via...</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
