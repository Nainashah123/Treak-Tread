import React, { useState } from 'react';
import ProductCard from '../components/ui/ProductCard';
import DiscountModal from '../components/DiscountModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import product images
import product1 from '../assets/images/product-1-38b848.png';
import product2 from '../assets/images/product-2-46798b.png';
import product3 from '../assets/images/product-3-5981a9.png';
import product4 from '../assets/images/product-4-76ce2c.png';
import product5 from '../assets/images/product-5-7d74f7.png';

const BestSellersSection: React.FC = () => {
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      image: product1,
      name: "Carbon Pulse Blackout",
      price: "$343.99",
      compareAtPrice: "$529.99",
      badges: [
        { label: "Best Seller", variant: "purple" as const }
      ],
      hasDiscount: true,
      variants: [
        { color: "#3C3C3C", selected: true },
        { color: "#BDC7D1", selected: false },
        { color: "#F9EB3D", selected: false },
        { color: "#F3EFE9", selected: false }
      ]
    },
    {
      id: 2,
      image: product2,
      name: "Nimbus Glide Icecore",
      price: "$529.99",
      badges: [{ label: "Best Seller", variant: "purple" as const }],
      variants: [
        { color: "#C3C6C5", selected: true },
        { color: "#E1E4E3", selected: false }
      ]
    },
    {
      id: 3,
      image: product3,
      name: "Voltstorm Radiance",
      price: "$529.99",
      badges: [{ label: "Best Seller", variant: "purple" as const }],
      variants: [
        { color: "#DBD5D0", selected: true },
        { color: "#F92131", selected: false },
        { color: "#F9EB3D", selected: false }
      ]
    },
    {
      id: 4,
      image: product4,
      name: "Lunar Flow Hyperlime",
      price: "$529.99",
      badges: [{ label: "Best Seller", variant: "purple" as const }],
      variants: [
        { color: "#F9EB3D", selected: true },
        { color: "#F92131", selected: false }
      ]
    },
    {
      id: 5,
      image: product5,
      name: "Ashtrail Coregrey X",
      price: "$529.99",
      badges: [{ label: "Best Seller", variant: "purple" as const }],
      variants: [
        { color: "#A6A3A4", selected: true },
        { color: "#282929", selected: false },
        { color: "#DFDBD5", selected: false }
      ]
    }
  ];

  return (
    <section className="py-10">
      <div className="px-6">
        <h2 className="text-heading-2-mobile md:text-heading-2-desktop leading-[1.1] font-medium text-black tracking-[-4%] mb-6">
          Best Sellers
        </h2>
      </div>

      <div className="flex flex-col">
        {/* Top border */}
        <div className="h-px bg-black" />
        
        {/* Products Row */}
        <div className="flex flex-col md:flex-row">
          {products.map((product, index) => (
            <React.Fragment key={product.id}>
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                compareAtPrice={product.compareAtPrice}
                badges={product.badges}
                variants={product.variants}
                hasDiscount={product.hasDiscount}
                onClick={product.hasDiscount ? () => setIsDiscountModalOpen(true) : undefined}
              />
              {index < products.length - 1 && (
                <div className="w-px bg-black hidden md:block" />
              )}
              {index < products.length - 1 && (
                <div className="h-px bg-black md:hidden" />
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Bottom border */}
        <div className="h-px bg-black" />
      </div>

      {/* Slider Controls */}
      <div className="flex justify-between items-center px-6 mt-6">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 bg-black rounded-full" />
          <div className="w-2.5 h-2.5 border border-black rounded-full" />
          <div className="w-2.5 h-2.5 border border-black rounded-full" />
          <div className="w-2.5 h-2.5 border border-black rounded-full" />
        </div>
        
        <div className="flex gap-0">
          <button className="w-14 h-14 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-9 h-9 text-black" />
          </button>
          <button className="w-14 h-14 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-9 h-9 text-black" />
          </button>
        </div>
      </div>

      {/* Bottom section border */}
      <div className="h-px bg-black mt-10" />

      {/* Discount Modal */}
      <DiscountModal
        isOpen={isDiscountModalOpen}
        onClose={() => setIsDiscountModalOpen(false)}
      />
    </section>
  );
};

export default BestSellersSection;
