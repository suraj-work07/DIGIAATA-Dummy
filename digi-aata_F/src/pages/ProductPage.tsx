import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Product } from '../types.d.ts';
import ProductDetail from '../components/ProductDetail';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const response = await fetch(`http://localhost:8000/products/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch product');
          }
          const data: Product = await response.json();
          setProduct(data);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('An unknown error occurred');
          }
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8 text-text-primary">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

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
