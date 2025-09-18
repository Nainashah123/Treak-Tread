import React, { useState } from 'react';

interface ProductImage {
  id: string;
  src: string;
  alt: string;
}

interface ProductImageGalleryProps {
  images: ProductImage[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative bg-white border-r border-black">
      <div className="aspect-square relative overflow-hidden">
        {/* Main Image */}
        <img 
          src={images[currentImageIndex]?.src} 
          alt={images[currentImageIndex]?.alt}
          className="w-full h-full object-cover"
        />
        
        {/* Slider Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          {/* Dots Navigation */}
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentImageIndex 
                    ? 'bg-black' 
                    : 'border border-black bg-transparent hover:bg-gray-200'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrow Navigation */}
          <div className="flex gap-0">
            <button
              onClick={goToPrevious}
              className="w-14 h-14 bg-transparent border border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-14 h-14 bg-transparent border border-black border-l-0 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
