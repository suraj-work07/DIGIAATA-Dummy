import React from 'react';
import { META } from '../data/meta';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-primary text-surface p-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} digi-aata. All rights reserved.</p>
        <div className="mt-4">
          <p>Phone: {META.phone}</p>
          <p>Instagram: <a href={`https://www.instagram.com/${META.instagram}`} target="_blank" rel="noopener noreferrer" className="text-surface hover:text-muted">{META.instagram}</a></p>
          <p>Address: {META.address}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
