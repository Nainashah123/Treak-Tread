import React, { useState } from 'react';
import Badge from './ui/Badge';
import { ColorVariant } from './ui/ColorVariant';

interface Product {
  id: string;
  name: string;
  price: string;
  comparePrice?: string;
  image: string;
  badge?: { label: string; variant: 'red' | 'purple' };
  colors: Array<{ id: string; code: string; selected: boolean }>;
}

const YouMayBeInterestedSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products: Product[] = [
    {
      id: '1',
      name: 'Nimbus Glide Icecore',
      price: '$529.99',
      image: '/src/assets/images/related-product-1-46798b.jpg',
      colors: [
        { id: 'gray', code: '#C3C6C5', selected: true },
        { id: 'light-gray', code: '#E1E4E3', selected: false }
      ]
    },
    {
      id: '2',
      name: 'Carbon Pulse Blackout',
      price: '$343.99',
      comparePrice: '$529.99',
      image: '/src/assets/images/related-product-2-38b848.jpg',
      badge: { label: '-20%', variant: 'red' },
      colors: [
        { id: 'black', code: '#3C3C3C', selected: true },
        { id: 'blue', code: '#BDC7D1', selected: false },
        { id: 'yellow', code: '#F9EB3D', selected: false },
        { id: 'beige', code: '#F3EFE9', selected: false }
      ]
    },
    {
      id: '3',
      name: 'Voltstorm Radiance',
      price: '$529.99',
      image: '/src/assets/images/related-product-3-5981a9.jpg',
      colors: [
        { id: 'beige', code: '#DBD5D0', selected: true },
        { id: 'red', code: '#F92131', selected: false },
        { id: 'yellow', code: '#F9EB3D', selected: false }
      ]
    },
    {
      id: '4',
      name: 'Lunar Flow Hyperlime',
      price: '$529.99',
      image: '/src/assets/images/related-product-4-76ce2c.jpg',
      colors: [
        { id: 'yellow', code: '#F9EB3D', selected: true },
        { id: 'red', code: '#F92131', selected: false }
      ]
    }
  ];

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white py-16">
      {/* Header */}
      <div className="px-6 mb-6">
        <h2 className="text-6xl lg:text-8xl font-medium tracking-tight">
          You May Be Interested In
        </h2>
      </div>

      {/* Products Grid */}
      <div className="space-y-0">
        {/* Top border */}
        <div className="border-t border-black"></div>
        
        {/* Images Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          {products.map((product) => (
            <div key={`image-${product.id}`} className="aspect-[4/3] bg-gray-200 relative border-r border-black last:border-r-0">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <Badge 
                  variant={product.badge.variant} 
                  className="absolute top-2 right-2"
                >
                  {product.badge.label}
                </Badge>
              )}
            </div>
          ))}
        </div>
        
        {/* Middle border */}
        <div className="border-t border-black"></div>
        
        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
          {products.map((product) => (
            <div key={`content-${product.id}`} className="p-6 space-y-6 border-r border-black last:border-r-0">
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-medium">
                  {product.name}
                </h3>
                <div className="flex gap-0">
                  {product.colors.map((color) => (
                    <ColorVariant
                      key={color.id}
                      color={color.code}
                      isSelected={color.selected}
                      onClick={() => {}}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-end gap-2">
                <span className="text-2xl lg:text-3xl font-medium">{product.price}</span>
                {product.comparePrice && (
                  <span className="text-lg lg:text-xl text-gray-600 line-through pb-1">
                    {product.comparePrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom border */}
        <div className="border-t border-black"></div>
      </div>

      {/* Slider Controls */}
      <div className="flex justify-between items-center px-6 mt-6">
        <div className="flex gap-2">
          {Array.from({ length: 4 }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentSlide 
                  ? 'bg-black' 
                  : 'border border-black bg-transparent hover:bg-gray-200'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
        <div className="flex gap-0">
          <button
            onClick={goToPrevious}
            className="w-14 h-14 bg-transparent border border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous products"
          >
            <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="w-14 h-14 bg-transparent border border-black border-l-0 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next products"
          >
            <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Final bottom border */}
      <div className="border-t border-black mt-6"></div>
    </div>
  );
};

export default YouMayBeInterestedSection;

