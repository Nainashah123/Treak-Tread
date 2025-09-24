import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductListHeaderSection from '../sections/ProductListHeaderSection';
import ProductListTabsSection from '../sections/ProductListTabsSection';
import ProductListGridSection, { type Product } from '../sections/ProductListGridSection';
import FilterSidebar, { type FilterState } from '../sections/FilterSidebar';
import FilterAppliedSection from '../sections/FilterAppliedSection';
import AutoDiscountModal from '../components/AutoDiscountModal';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

// Import images
import product1 from '../assets/images/product-1-38b848.png';
import product2 from '../assets/images/product-2-46798b.png';
import product3 from '../assets/images/product-3-5981a9.png';
import product4 from '../assets/images/product-4-76ce2c.png';

// Sample product data matching the Figma design
const allProducts: Product[] = [
  // Row 1
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
  },
  // Row 2 (duplicate for demo)
  {
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
  },
  // Row 3 (duplicate for demo)
  {
    id: '9',
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
    id: '10',
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
    id: '11',
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
    id: '12',
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

interface FilterTag {
  id: string;
  label: string;
  value: string;
  type: 'sortBy' | 'shopFor' | 'shoeSize' | 'apparelSize' | 'activity';
}

// Helper function to generate applied filter tags
const generateAppliedFilters = (filters: FilterState): FilterTag[] => {
  const appliedFilters: FilterTag[] = [];

  // Sort by filter (only show if not "featured")
  if (filters.sortBy !== 'featured') {
    const sortLabels: { [key: string]: string } = {
      'best-sellers': 'Best Sellers',
      'price-low-high': 'Price: Low to High',
      'price-high-low': 'Price: High to Low'
    };
    appliedFilters.push({
      id: `sortBy-${filters.sortBy}`,
      label: sortLabels[filters.sortBy] || filters.sortBy,
      value: filters.sortBy,
      type: 'sortBy'
    });
  }

  // Shop for filters
  filters.shopFor.forEach(value => {
    appliedFilters.push({
      id: `shopFor-${value}`,
      label: value.charAt(0).toUpperCase() + value.slice(1),
      value,
      type: 'shopFor'
    });
  });

  // Shoe size filters
  filters.shoeSize.forEach(size => {
    appliedFilters.push({
      id: `shoeSize-${size}`,
      label: `Size ${size}`,
      value: size,
      type: 'shoeSize'
    });
  });

  // Apparel size filters
  filters.apparelSize.forEach(size => {
    appliedFilters.push({
      id: `apparelSize-${size}`,
      label: `Size ${size}`,
      value: size,
      type: 'apparelSize'
    });
  });

  // Activity filters
  filters.activity.forEach(activity => {
    const label = activity.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    appliedFilters.push({
      id: `activity-${activity}`,
      label,
      value: activity,
      type: 'activity'
    });
  });

  return appliedFilters;
};

const ProductListPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('shop-all');
  const [products] = useState<Product[]>(allProducts);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    sortBy: 'best-sellers',
    shopFor: ['men'],
    shoeSize: [],
    apparelSize: [],
    activity: []
  });

  // Auto-trigger modal on scroll
  const { shouldShow: shouldShowModal, reset: resetModal } = useScrollTrigger({
    threshold: 25, // Show when 25% scrolled
    delay: 3000, // 3 seconds delay
    once: true // Only show once per session
  });

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    // Here you would typically filter products based on the selected tab
    console.log('Tab changed to:', tabId);
  };

  const handleShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleRemoveFilter = (_filterId: string, filterType: string, value: string) => {
    const newFilters = { ...filters };
    
    switch (filterType) {
      case 'sortBy':
        newFilters.sortBy = 'featured';
        break;
      case 'shopFor':
        newFilters.shopFor = newFilters.shopFor.filter(item => item !== value);
        break;
      case 'shoeSize':
        newFilters.shoeSize = newFilters.shoeSize.filter(item => item !== value);
        break;
      case 'apparelSize':
        newFilters.apparelSize = newFilters.apparelSize.filter(item => item !== value);
        break;
      case 'activity':
        newFilters.activity = newFilters.activity.filter(item => item !== value);
        break;
    }
    
    setFilters(newFilters);
  };

  const handleClearAllFilters = () => {
    setFilters({
      sortBy: 'featured',
      shopFor: [],
      shoeSize: [],
      apparelSize: [],
      activity: []
    });
  };

  // Filter and sort products based on current filters
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Apply category filter based on active tab
    if (activeTab !== 'shop-all') {
      // In a real app, you would filter by category
      // For now, we'll just return all products
    }

    // Apply sort filter
    switch (filters.sortBy) {
      case 'best-sellers':
        // In a real app, you would sort by best sellers
        break;
      case 'price-low-high':
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('$', ''));
          const priceB = parseFloat(b.price.replace('$', ''));
          return priceA - priceB;
        });
        break;
      case 'price-high-low':
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.price.replace('$', ''));
          const priceB = parseFloat(b.price.replace('$', ''));
          return priceB - priceA;
        });
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    // Apply other filters (shopFor, sizes, activity) would go here
    // For now, we'll just return the sorted products

    return filtered;
  }, [products, filters, activeTab]);

  // Generate applied filter tags
  const appliedFilters = useMemo(() => generateAppliedFilters(filters), [filters]);

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Header />
      
      <main className="w-full relative">
        {/* Page Header */}
        <ProductListHeaderSection 
          title="Shop All" 
          className="py-10"
        />

        {/* Products Container */}
        <div className="w-full">
          {/* Tabs and Filter Section */}
          <ProductListTabsSection
            activeTab={activeTab}
            onTabChange={handleTabChange}
            onShowFilters={handleShowFilters}
            showFilters={showFilters}
            appliedFiltersCount={appliedFilters.length}
          />

          {/* Applied Filters Section */}
          <FilterAppliedSection
            appliedFilters={appliedFilters}
            onRemoveFilter={handleRemoveFilter}
            onClearAll={handleClearAllFilters}
          />

          {/* Product Grid */}
          <ProductListGridSection
            products={filteredProducts}
          />
        </div>

        {/* Filter Sidebar */}
        <FilterSidebar
          isOpen={showFilters}
          filters={filters}
          onFiltersChange={handleFiltersChange}
          onClose={() => setShowFilters(false)}
        />
      </main>

      <Footer />

      {/* Auto-trigger Discount Modal */}
      <AutoDiscountModal
        isOpen={shouldShowModal}
        onClose={resetModal}
        autoCloseDelay={15000} // 15 seconds auto-close
      />
    </div>
  );
};

export default ProductListPage;
