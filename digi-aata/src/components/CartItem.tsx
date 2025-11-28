import React from 'react';
import type { Product } from '../data/products';
import type { CartItem as TCartItem } from '../types';

interface CartItemProps {
  item: TCartItem;
  product: Product;
  onRemove: (productId: string) => void;
  onUpdateQty: (productId: string, qty: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, product, onRemove, onUpdateQty }) => {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-muted last:border-b-0">
      <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
      <div className="flex-grow">
        <h3 className="text-text-primary text-md font-heading">{product.name}</h3>
        <p className="text-muted text-sm">₹{product.price} x {item.qty}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => onUpdateQty(item.id, item.qty - 1)}
            className="bg-gray-200 text-text-primary px-2 py-1 rounded-md hover:bg-gray-300"
          >
            -
          </button>
          <span className="mx-2 text-text-primary">{item.qty}</span>
          <button
            onClick={() => onUpdateQty(item.id, item.qty + 1)}
            className="bg-gray-200 text-text-primary px-2 py-1 rounded-md hover:bg-gray-300"
          >
            +
          </button>
          <button
            onClick={() => onRemove(item.id)}
            className="ml-4 text-red-500 hover:text-red-700 text-sm"
          >
            Remove
          </button>
        </div>
      </div>
      <span className="text-text-primary font-bold">₹{product.price * item.qty}</span>
    </div>
  );
};

export default CartItem;
