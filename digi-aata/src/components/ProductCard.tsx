import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { Product } from '../data/products';
import PriceBadge from './PriceBadge';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product.id, 1);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="bg-surface rounded-xl shadow-lg border border-gray-200 p-4 flex flex-col text-center transition-transform transform hover:scale-105">
      <Link to={`/product/${product.id}`} className="flex-grow">
        <img src={product.image} alt={product.shortDescription} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-lg font-heading text-text-primary mb-2">{product.name}</h3>
        <p className="text-muted text-sm mb-2 flex-grow">{product.shortDescription}</p>
      </Link>
      <div className="flex items-center justify-between w-full mt-4">
        <PriceBadge price={product.price} />
        <button 
          onClick={handleAddToCart}
          className={`px-4 py-2 rounded-lg text-white transition-colors duration-300 ${added ? 'bg-green-500' : 'bg-accent hover:bg-opacity-90'}`}
          disabled={added}
        >
          {added ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
