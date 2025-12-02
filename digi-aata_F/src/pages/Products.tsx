import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid';
import type { Product } from '../types.d.ts';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-heading text-center text-text-primary mb-8">Our Products</h1>
      {loading && <p className="text-center">Loading products...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {!loading && !error && <ProductGrid products={products} />}
    </div>
  );
};

export default Products;
