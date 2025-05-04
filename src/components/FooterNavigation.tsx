import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, QrCode } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { QRCodeSVG } from 'qrcode.react';

const FooterNavigation = () => {
  const [qrDialogOpen, setQrDialogOpen] = useState(false);

  return (
    <>
      <footer className="fixed bottom-0 left-0 right-0 bg-construction-blue text-white py-3 px-4 shadow-lg z-50">
        <div className="max-w-screen-lg mx-auto flex justify-around items-center">
          <Link to="/" className="flex flex-col items-center gap-1">
            <Home size={24} className="text-white" />
            <span className="text-xs">Home</span>
          </Link>

          <Link to="/blog" className="flex flex-col items-center gap-1">
            <FileText size={24} className="text-white" />
            <span className="text-xs">Blog</span>
          </Link>

          <button
            onClick={() => setQrDialogOpen(true)}
            className="flex flex-col items-center gap-1 bg-transparent border-none text-white"
          >
            <QrCode size={24} className="text-white" />
            <span className="text-xs">QR Code</span>
          </button>
        </div>
      </footer>

      <Dialog open={qrDialogOpen} onOpenChange={setQrDialogOpen}>
        <DialogContent className="sm:max-w-[425px] flex flex-col items-center">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-construction-blue">
              Scan QR Code
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 bg-white rounded-lg shadow-inner">
            <QRCodeSVG
              value="https://www.jasarancangbangun.com"
              size={200}
              fgColor="#0F4C81"
              level="H"
              includeMargin={true}
            />
          </div>
          <p className="text-sm text-center mt-4 text-gray-500">
            Scan untuk mengunjungi situs kami
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FooterNavigation;
