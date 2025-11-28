import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { PRODUCTS } from '../data/products';

const Products: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-heading text-center text-text-primary mb-8">Our Products</h1>
      <ProductGrid products={PRODUCTS} />
    </div>
  );
};

export default Products;
