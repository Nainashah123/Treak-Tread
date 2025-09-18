import React, { useState } from 'react';
import Button from '../components/ui/Button';

interface Tab {
  id: string;
  label: string;
}

interface ProductListTabsSectionProps {
  tabs?: Tab[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  onShowFilters?: () => void;
  showFilters?: boolean;
  appliedFiltersCount?: number;
  className?: string;
}

const ProductListTabsSection: React.FC<ProductListTabsSectionProps> = ({
  tabs = [
    { id: 'shop-all', label: 'Shop All' },
    { id: 'shoes', label: 'Shoes' },
    { id: 'apparel', label: 'Apparel' },
    { id: 'accessories', label: 'Accessories' }
  ],
  activeTab = 'shop-all',
  onTabChange,
  onShowFilters,
  showFilters = false,
  appliedFiltersCount = 0,
  className = ''
}) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <section className={`w-full ${className}`}>
      {/* Top border line */}
      <div className="w-full h-px bg-black"></div>
      
      {/* Tabs and Filter Container */}
      <div className="flex justify-between items-center gap-6 px-6 py-6">
        {/* Tabs */}
        <div className="flex items-center gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`text-2xl font-medium leading-[1.1] transition-colors duration-200 ${
                currentTab === tab.id
                  ? 'text-black'
                  : 'text-black hover:text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Show/Hide Filters Button */}
        <Button
          variant="outline"
          size="small"
          onClick={onShowFilters}
          className="flex items-center gap-2 px-6 py-4 border border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
        >
          <span className="text-xl font-medium">
            {showFilters ? `Hide Filters${appliedFiltersCount > 0 ? ` (${appliedFiltersCount})` : ''}` : 'Show Filters'}
          </span>
          {/* Chevron Icon */}
          <svg 
            width="22" 
            height="22" 
            viewBox="0 0 22 22" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`}
          >
            <path 
              d="M5.82 7.65L11 12.83L16.18 7.65L17.59 9.06L11 15.65L4.41 9.06L5.82 7.65Z" 
              fill="currentColor"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default ProductListTabsSection;
