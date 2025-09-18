import React from 'react';

interface SizeSelectorProps {
  sizes: string[];
  selectedSizes: string[];
  onSizeChange: (size: string) => void;
  className?: string;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSizes,
  onSizeChange,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {sizes.map((size) => {
        const isSelected = selectedSizes.includes(size);
        
        return (
          <button
            key={size}
            onClick={() => onSizeChange(size)}
            className={`
              flex items-center justify-center px-8 py-4 min-w-[133px] h-auto
              border border-[#C8C8C8] text-xl font-medium leading-[1.1]
              transition-colors duration-200 cursor-pointer
              ${isSelected 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-black border-[#C8C8C8] hover:border-black'
              }
            `}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
};

export default SizeSelector;
