import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';

const ErrorPage: React.FC = () => {
  // Sample best sellers data
  const bestSellers = [
    {
      id: 1,
      name: 'Carbon Pulse Blackout',
      price: '$343.99',
      compareAtPrice: '$529.99',
      image: '/images/product-2-carbon-38b848.jpg',
      badges: [
        { label: 'Best Seller', variant: 'purple' as const },
        { label: '-20%', variant: 'red' as const }
      ],
      variants: [
        { color: '#3C3C3C', selected: true },
        { color: '#BDC7D1', selected: false },
        { color: '#F9EB3D', selected: false },
        { color: '#F3EFE9', selected: false }
      ]
    },
    {
      id: 2,
      name: 'Nimbus Glide Icecore',
      price: '$529.99',
      image: '/images/product-1-nimbus-46798b.jpg',
      badges: [
        { label: 'Best Seller', variant: 'purple' as const }
      ],
      variants: [
        { color: '#C3C6C5', selected: true },
        { color: '#E1E4E3', selected: false }
      ]
    },
    {
      id: 3,
      name: 'Voltstorm Radiance',
      price: '$529.99',
      image: '/images/product-3-voltstorm-5981a9.jpg',
      badges: [
        { label: 'Best Seller', variant: 'purple' as const }
      ],
      variants: [
        { color: '#DBD5D0', selected: true },
        { color: '#F92131', selected: false },
        { color: '#F9EB3D', selected: false }
      ]
    },
    {
      id: 4,
      name: 'Lunar Flow Hyperlime',
      price: '$529.99',
      image: '/images/product-4-lunar-76ce2c.jpg',
      badges: [
        { label: 'Best Seller', variant: 'purple' as const }
      ],
      variants: [
        { color: '#F9EB3D', selected: true },
        { color: '#E1E4E3', selected: false }
      ]
    },
    {
      id: 5,
      name: 'Ashtrail Coregrey X',
      price: '$529.99',
      image: '/images/product-5-ashtrail-7d74f7.jpg',
      badges: [
        { label: 'Best Seller', variant: 'purple' as const }
      ],
      variants: [
        { color: '#A6A3A4', selected: true },
        { color: '#282929', selected: false },
        { color: '#DFDBD5', selected: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Header />
      
      {/* Error Section */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-8">
            {/* Error Text */}
            <div className="flex flex-col gap-4 max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-medium leading-tight tracking-tight text-black">
                Page Not Found
              </h1>
              <p className="text-xl md:text-2xl font-medium leading-tight text-black">
                It looks like the page you're looking for doesn't exist. Don't worry, we've got plenty of other great things for you to explore. Check out our best sellers or get back to homepage.
              </p>
            </div>
            
            {/* Back to Homepage Button */}
            <div className="flex justify-start">
              <Link to="/">
                <Button 
                  variant="primary" 
                  size="large"
                  className="bg-black text-white border border-gray-200 px-8 py-6 text-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Back to Homepage
                  <svg 
                    className="w-6 h-6 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M7 17L17 7M17 7H7M17 7V17" 
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-6">
            {/* Section Header */}
            <div className="px-6">
              <h2 className="text-6xl md:text-8xl font-medium leading-tight tracking-tight text-black">
                Best Sellers
              </h2>
            </div>
            
            {/* Products Grid */}
            <div className="flex flex-col">
              {/* Top Border */}
              <div className="w-full h-px bg-black"></div>
              
              {/* Products Row */}
              <div className="flex">
                {bestSellers.map((product, index) => (
                  <React.Fragment key={product.id}>
                    <ProductCard
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      compareAtPrice={product.compareAtPrice}
                      badges={product.badges}
                      variants={product.variants}
                      className="relative"
                    />
                    {/* Vertical Divider */}
                    {index < bestSellers.length - 1 && (
                      <div className="absolute right-0 top-0 w-px h-full bg-black"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              {/* Bottom Border */}
              <div className="w-full h-px bg-black"></div>
            </div>
            
            {/* View All Button */}
            <div className="flex justify-center py-6">
              <button className="text-lg font-medium text-black hover:text-gray-600 transition-colors">
                View all
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ErrorPage;
