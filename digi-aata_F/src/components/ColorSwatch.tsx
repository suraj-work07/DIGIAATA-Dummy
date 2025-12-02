import React from 'react';

interface ColorSwatchProps {
  color: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: (color: string) => void;
  isSelected?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
};

const ColorSwatch: React.FC<ColorSwatchProps> = ({
  color,
  size = 'md',
  onClick,
  isSelected = false,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(color);
    }
  };

  return (
    <div
      className={`rounded-full cursor-pointer border-2 ${sizeClasses[size]} ${
        isSelected ? 'border-accent-blue' : 'border-transparent'
      }`}
      style={{ backgroundColor: color }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-pressed={isSelected}
    ></div>
  );
};

export default ColorSwatch;
