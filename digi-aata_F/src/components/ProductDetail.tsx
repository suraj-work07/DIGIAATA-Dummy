import { useState } from 'react';
import { useCart } from '../context/CartContext';
import type { Product } from '../types.d.ts';
import QuantitySelector from './QuantitySelector';
import PriceBadge from './PriceBadge';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(String(product.id), quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="bg-surface rounded-xl shadow-soft-warm p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img src={product.image_url} alt={product.name} className="w-full max-w-sm h-auto object-cover rounded-lg shadow-soft-warm" />
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-heading text-text-primary mb-4">{product.name}</h2>
          <div className="mb-4">
            <PriceBadge price={product.price} />
          </div>
          <p className="text-text-primary mb-4 leading-relaxed">{product.description}</p>
          <p className="text-muted text-sm mb-6">Age: {product.age_group}</p>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-text-primary font-bold">Quantity:</span>
            <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
          </div>
          
          <button 
            onClick={handleAddToCart}
            className={`w-full px-6 py-3 rounded-lg text-white text-lg font-bold transition-colors duration-300 ${added ? 'bg-accent-green' : 'bg-accent-blue hover:bg-opacity-90'}`}
            disabled={added}
          >
            {added ? 'Added to Cart!' : `Add ${quantity} to Cart`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
