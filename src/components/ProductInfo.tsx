import React, { useState } from 'react';
import Badge from './ui/Badge';
import Button from './ui/Button';
import ProductVariants from './ProductVariants';
import AddToCartModal from './AddToCartModal';

interface ProductColor {
  id: string;
  name: string;
  code: string;
  selected: boolean;
}

interface Product {
  id: string;
  name: string;
  price: number;
  comparePrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  description: string;
  sizes: string[];
  unavailableSizes: string[];
  selectedSize: string;
  colors: ProductColor[];
}

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.selectedSize);
  const [selectedColorId, setSelectedColorId] = useState(
    product.colors.find(color => color.selected)?.id || product.colors[0]?.id
  );
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleAddToCart = () => {
    // Add product to cart logic would go here
    // For now, just open the modal
    setIsCartModalOpen(true);
  };

  const selectedColor = product.colors.find(color => color.id === selectedColorId);

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg key={i} className="w-6 h-6 fill-current text-black" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ));
  };

  return (
    <div className="p-8 space-y-8">
      {/* Product Basic Info */}
      <div className="space-y-4">
        <Badge variant="red" className="inline-flex">
          -{product.discount}%
        </Badge>
        
        <h1 className="text-4xl lg:text-6xl font-medium tracking-tight leading-tight">
          {product.name}
        </h1>
        
        <div className="flex items-center gap-2">
          <div className="flex">
            {renderStars()}
          </div>
          <span className="text-gray-600 text-lg">({product.reviewCount} reviews)</span>
        </div>
        
        <div className="flex items-end gap-2">
          <span className="text-3xl lg:text-5xl font-medium">${product.price}</span>
          <span className="text-2xl lg:text-3xl text-gray-600 line-through pb-1">
            ${product.comparePrice}
          </span>
        </div>
      </div>

      {/* Product Variants */}
      <ProductVariants
        sizes={product.sizes}
        unavailableSizes={product.unavailableSizes}
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
        colors={product.colors}
        selectedColorId={selectedColorId}
        onColorChange={setSelectedColorId}
        selectedColorName={selectedColor?.name || ''}
      />

      {/* Product Description */}
      <p className="text-lg leading-relaxed">
        {product.description}
      </p>

      {/* Add to Cart Section */}
      <div className="space-y-2">
        <Button 
          variant="secondary" 
          size="large" 
          className="w-full justify-center"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <p className="text-lg text-center">Free shipping over $100</p>
      </div>

      {/* Add to Cart Modal */}
      <AddToCartModal 
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
      />
    </div>
  );
};

export default ProductInfo;
