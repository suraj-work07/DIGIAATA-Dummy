import React from 'react';

interface PriceBadgeProps {
  price: number;
  currency?: string;
}

const PriceBadge: React.FC<PriceBadgeProps> = ({ price, currency = '₹' }) => {
  return (
    <span className="bg-price-badge text-white px-3 py-1 rounded-full text-sm font-bold">
      {currency}{price}
    </span>
  );
};

export default PriceBadge;
