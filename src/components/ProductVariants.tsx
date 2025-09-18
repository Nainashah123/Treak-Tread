import React from 'react';
import { ColorVariant } from './ui/ColorVariant';

interface ProductColor {
  id: string;
  name: string;
  code: string;
  selected: boolean;
}

interface ProductVariantsProps {
  sizes: string[];
  unavailableSizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
  colors: ProductColor[];
  selectedColorId: string;
  onColorChange: (colorId: string) => void;
  selectedColorName: string;
}

const ProductVariants: React.FC<ProductVariantsProps> = ({
  sizes,
  unavailableSizes,
  selectedSize,
  onSizeChange,
  colors,
  selectedColorId,
  onColorChange,
  selectedColorName
}) => {
  return (
    <div className="space-y-8">
      {/* Size Selection */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-lg">Size:</span>
          <span className="text-lg font-medium">{selectedSize}</span>
        </div>
        
        <div className="flex gap-0 max-w-sm">
          {sizes.map((size) => {
            const isSelected = selectedSize === size;
            const isUnavailable = unavailableSizes.includes(size);
            
            return (
              <button
                key={size}
                onClick={() => !isUnavailable && onSizeChange(size)}
                disabled={isUnavailable}
                className={`
                  relative flex items-center justify-center px-8 py-4 min-w-[87px] h-[54px]
                  border border-gray-300 text-lg font-medium leading-tight
                  transition-all duration-200
                  ${isSelected 
                    ? 'bg-black text-white border-black' 
                    : isUnavailable
                      ? 'bg-white text-gray-400 border-gray-300 cursor-not-allowed'
                      : 'bg-white text-black border-gray-300 hover:border-black cursor-pointer'
                  }
                  ${sizes.indexOf(size) === 0 ? '' : 'border-l-0'}
                `}
              >
                {size}
                {isUnavailable && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-px bg-gray-400 rotate-12 transform"></div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Selection */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-lg">Color:</span>
          <span className="text-lg font-medium">{selectedColorName}</span>
        </div>
        
        <div className="flex gap-0">
          {colors.map((color) => (
            <ColorVariant
              key={color.id}
              color={color.code}
              isSelected={selectedColorId === color.id}
              onClick={() => onColorChange(color.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductVariants;
