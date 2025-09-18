import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductImageGallery from '../components/ProductImageGallery';
import ProductInfo from '../components/ProductInfo';
import AddonProduct from '../components/AddonProduct';
import DesignedToMoveSection from '../components/DesignedToMoveSection';
import VideoSection from '../components/VideoSection';
import YouMayBeInterestedSection from '../components/YouMayBeInterestedSection';
import ReviewsSection from '../components/ReviewsSection';

const ProductDetailsPage: React.FC = () => {
  // Mock product data based on Figma design
  const productData = {
    id: '1',
    name: 'Nimbus Glide Icecore',
    price: 343.99,
    comparePrice: 529.99,
    discount: 20,
    rating: 5.0,
    reviewCount: 210,
    description: 'The Nimbus Glide Icecore blends sleek design with lightweight construction for a smoother, faster stride. Featuring advanced midsole cushioning and breathable upper mesh, these shoes are ideal for running, training, or everyday wear. The colorway adds a fresh, minimal look to your active rotation.',
    images: [
      {
        id: '1',
        src: '/src/assets/images/product-main-image.jpg',
        alt: 'Nimbus Glide Icecore - Main View'
      },
      {
        id: '2',
        src: '/src/assets/images/product-main-image.jpg',
        alt: 'Nimbus Glide Icecore - Side View'
      },
      {
        id: '3',
        src: '/src/assets/images/product-main-image.jpg',
        alt: 'Nimbus Glide Icecore - Back View'
      },
      {
        id: '4',
        src: '/src/assets/images/product-main-image.jpg',
        alt: 'Nimbus Glide Icecore - Detail View'
      }
    ],
    sizes: ['36', '37', '38', '39'],
    unavailableSizes: ['36'],
    selectedSize: '38',
    colors: [
      { id: 'ice-blue', name: 'Ice Blue', code: '#CAE1E4', selected: true },
      { id: 'coral', name: 'Coral', code: '#FF5F6B', selected: false },
      { id: 'lime', name: 'Lime', code: '#F9EB3D', selected: false }
    ]
  };

  const addonProductData = {
    name: 'Crimson Velocity',
    price: 69.99,
    image: '/src/assets/images/addon-product-image.jpg'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Main Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Product Images */}
        <ProductImageGallery images={productData.images} />
        
        {/* Product Info */}
        <div className="bg-white border-t lg:border-t-0 lg:border-l border-black">
          <ProductInfo product={productData} />
          <AddonProduct product={addonProductData} />
        </div>
      </div>

      {/* Designed to Move Section */}
      <DesignedToMoveSection />

      {/* Video Section */}
      <VideoSection />

      {/* You May Be Interested In Section */}
      <YouMayBeInterestedSection />

      {/* Reviews Section */}
      <ReviewsSection />

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
