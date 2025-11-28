import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = Infinity,
}) => {
  const handleDecrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= min && value <= max) {
      onQuantityChange(value);
    } else if (e.target.value === '') {
      onQuantityChange(min); // Or some other default behavior for empty input
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="bg-gray-200 text-text-primary px-3 py-1 rounded-md hover:bg-gray-300 disabled:opacity-50"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        className="w-16 text-center border rounded-md p-1"
        min={min}
        max={max}
      />
      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="bg-gray-200 text-text-primary px-3 py-1 rounded-md hover:bg-gray-300 disabled:opacity-50"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
