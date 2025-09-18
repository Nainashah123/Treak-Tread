import React from 'react';
import ProductCard from '../components/ui/ProductCard';

// Import images
import product1 from '../assets/images/product-1-38b848.png';
import product2 from '../assets/images/product-2-46798b.png';
import product3 from '../assets/images/product-3-5981a9.png';
import product4 from '../assets/images/product-4-76ce2c.png';

export interface Product {
  id: string;
  name: string;
  price: string;
  compareAtPrice?: string;
  image: string;
  badges?: Array<{ label: string; variant: 'purple' | 'red' }>;
  variants?: Array<{ color: string; selected?: boolean }>;
}

interface ProductListGridSectionProps {
  products?: Product[];
  className?: string;
}

// Sample product data based on the Figma design
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Carbon Pulse Blackout',
    price: '$343.99',
    compareAtPrice: '$529.99',
    image: product1,
    badges: [
      { label: 'Best Seller', variant: 'purple' },
      { label: '-20%', variant: 'red' }
    ],
    variants: [
      { color: '#3C3C3C', selected: true },
      { color: '#BDC7D1', selected: false },
      { color: '#F9EB3D', selected: false },
      { color: '#F3EFE9', selected: false }
    ]
  },
  {
    id: '2',
    name: 'Nimbus Glide Icecore',
    price: '$529.99',
    image: product2,
    badges: [
      { label: 'Best Seller', variant: 'purple' }
    ],
    variants: [
      { color: '#C3C6C5', selected: true },
      { color: '#E1E4E3', selected: false }
    ]
  },
  {
    id: '3',
    name: 'Voltstorm Radiance',
    price: '$529.99',
    image: product3,
    badges: [
      { label: 'Best Seller', variant: 'purple' }
    ],
    variants: [
      { color: '#DBD5D0', selected: true },
      { color: '#F92131', selected: false },
      { color: '#F9EB3D', selected: false }
    ]
  },
  {
    id: '4',
    name: 'Lunar Flow Hyperlime',
    price: '$529.99',
    image: product4,
    badges: [
      { label: 'Best Seller', variant: 'purple' }
    ],
    variants: [
      { color: '#F9EB3D', selected: true },
      { color: '#F92131', selected: false }
    ]
  }
];

const ProductListGridSection: React.FC<ProductListGridSectionProps> = ({
  products = sampleProducts,
  className = ''
}) => {
  // Create rows of 4 products each
  const productRows = [];
  for (let i = 0; i < products.length; i += 4) {
    productRows.push(products.slice(i, i + 4));
  }

  return (
    <section className={`w-full ${className}`}>
      {productRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col">
          {/* Top border line */}
          <div className="w-full h-px bg-black"></div>
          
          {/* Products Row */}
          <div className="flex">
            {row.map((product, index) => (
              <React.Fragment key={product.id}>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  compareAtPrice={product.compareAtPrice}
                  badges={product.badges}
                  variants={product.variants}
                  className="flex-1"
                />
                {/* Vertical separator line */}
                {index < row.length - 1 && (
                  <div className="w-px bg-black"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
      
      {/* Final bottom border line */}
      <div className="w-full h-px bg-black"></div>
    </section>
  );
};

export default ProductListGridSection;
