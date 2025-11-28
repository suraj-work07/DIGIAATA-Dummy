import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/products';
import ProductDetail from '../components/ProductDetail';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const foundProduct = PRODUCTS.find(p => p.id === id);
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return <div className="text-center py-8 text-text-primary">Product not found.</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
