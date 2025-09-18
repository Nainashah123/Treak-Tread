import React from 'react';
import Badge from './Badge';

interface ColorVariant {
  color: string;
  selected?: boolean;
}

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  compareAtPrice?: string;
  badges?: Array<{ label: string; variant: 'purple' | 'red' }>;
  variants?: ColorVariant[];
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  compareAtPrice,
  badges = [],
  variants = [],
  className = '',
}) => {
  return (
    <div className={`flex-1 ${className}`}>
      {/* Product Image */}
      <div className="relative h-[450px] bg-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain"
        />
        {/* Badges */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {badges.map((badge, index) => (
            <Badge key={index} variant={badge.variant}>
              {badge.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-medium text-black">{name}</h3>
          
          {/* Color Variants */}
          {variants.length > 0 && (
            <div className="flex gap-0">
              {variants.map((variant, index) => (
                <div
                  key={index}
                  className={`w-[42px] h-[42px] p-2 flex items-center justify-center ${
                    variant.selected ? 'border border-black' : ''
                  }`}
                >
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: variant.color }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Price */}
        <div className="flex items-end gap-2">
          <span className="text-3xl font-medium text-black">{price}</span>
          {compareAtPrice && (
            <div className="pb-1">
              <span className="text-2xl font-medium text-[#969696] line-through">
                {compareAtPrice}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
