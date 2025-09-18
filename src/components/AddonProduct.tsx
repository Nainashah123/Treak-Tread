import React from 'react';
import Button from './ui/Button';

interface AddonProductData {
  name: string;
  price: number;
  image: string;
}

interface AddonProductProps {
  product: AddonProductData;
}

const AddonProduct: React.FC<AddonProductProps> = ({ product }) => {
  return (
    <div className="border-t border-black">
      <div className="p-8 space-y-6">
        {/* Header with Lines */}
        <div className="flex items-center">
          <div className="flex-1 h-px bg-black"></div>
          <div className="px-8">
            <h3 className="text-2xl lg:text-3xl font-medium">Add-on</h3>
          </div>
          <div className="flex-1 h-px bg-black"></div>
        </div>
        
        {/* Product Card */}
        <div className="flex items-center gap-0">
          {/* Product Image */}
          <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gray-200 flex-shrink-0">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Vertical Line */}
          <div className="w-px h-32 lg:h-40 bg-black flex-shrink-0"></div>
          
          {/* Product Info */}
          <div className="flex-1 p-6 space-y-6">
            <div className="flex justify-between items-start">
              <h4 className="text-xl lg:text-2xl font-medium flex-1 pr-4">
                {product.name}
              </h4>
              <span className="text-2xl lg:text-3xl font-medium">
                ${product.price}
              </span>
            </div>
            
            <Button variant="outline" size="small" className="w-full">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddonProduct;
