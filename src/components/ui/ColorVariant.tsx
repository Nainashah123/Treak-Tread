import React from 'react';

interface ColorVariantProps {
  color: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ColorVariant: React.FC<ColorVariantProps> = ({
  color,
  isSelected = false,
  onClick,
  className = ''
}) => {
  const baseClasses = 'w-[42px] h-[42px] rounded-full p-2 cursor-pointer transition-all duration-200';
  const borderClasses = isSelected ? 'border-2 border-black' : 'border border-gray-300';

  return (
    <button
      className={`${baseClasses} ${borderClasses} ${className}`}
      onClick={onClick}
      style={{ backgroundColor: color }}
      aria-label={`Select ${color} variant`}
    />
  );
};

interface ColorVariantsProps {
  colors: string[];
  selectedColor?: string;
  onColorSelect?: (color: string) => void;
  className?: string;
}

export const ColorVariants: React.FC<ColorVariantsProps> = ({
  colors,
  selectedColor,
  onColorSelect,
  className = ''
}) => {
  return (
    <div className={`flex items-center gap-0 ${className}`}>
      {colors.map((color, index) => (
        <ColorVariant
          key={index}
          color={color}
          isSelected={selectedColor === color}
          onClick={() => onColorSelect?.(color)}
        />
      ))}
    </div>
  );
};
