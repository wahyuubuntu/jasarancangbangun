
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Blog tidak ditemukan</h1>
      <Link to="/blog" className="text-construction-blue hover:underline">
        Kembali ke Blog
      </Link>
    </div>
  );
};

export default NotFound;
