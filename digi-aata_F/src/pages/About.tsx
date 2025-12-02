import React from 'react';
import { META } from '../data/meta';

const About: React.FC = () => {
  return (
    <div className="container mx-auto py-8 text-text-primary">
      <h1 className="text-4xl font-heading text-center mb-8">About Us</h1>
      <div className="bg-surface rounded-xl shadow-soft-warm p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-heading mb-4">Our Story</h2>
        <p className="mb-4">
          Welcome to digi-aata, your destination for handcrafted toys and unique decor items that spark joy and creativity.
          We believe in the power of play and the beauty of traditional craftsmanship. Our collection is carefully curated
          to bring you products that are not only fun but also enrich the mind and spirit.
        </p>
        <p className="mb-4">
          Each item in our store tells a story, crafted with love and attention to detail by skilled artisans.
          From educational wooden toys that inspire imaginative play to exquisite home decor pieces that add a touch
          of cultural elegance, we strive to offer products that are meaningful and sustainable.
        </p>
        <h2 className="text-2xl font-heading mt-8 mb-4">Contact Information</h2>
        <p className="mb-2"><strong>Phone:</strong> {META.phone}</p>
        <p className="mb-2"><strong>Instagram:</strong> <a href={`https://www.instagram.com/${META.instagram}`} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">{META.instagram}</a></p>
        <p className="mb-2"><strong>Address:</strong> {META.address}</p>
      </div>
    </div>
  );
};

export default About;
