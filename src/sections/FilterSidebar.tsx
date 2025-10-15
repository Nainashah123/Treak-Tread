import React from 'react';
import RadioButton from '../components/ui/RadioButton';
import Checkbox from '../components/ui/Checkbox';
import SizeSelector from '../components/ui/SizeSelector';

export interface FilterState {
  sortBy: string;
  shopFor: string[];
  shoeSize: string[];
  apparelSize: string[];
  activity: string[];
}

interface FilterSidebarProps {
  isOpen: boolean;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onClose: () => void;
  className?: string;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  isOpen,
  filters,
  onFiltersChange,
  onClose,
  className = ''
}) => {
  if (!isOpen) return null;

  const handleSortByChange = (value: string) => {
    onFiltersChange({ ...filters, sortBy: value });
  };

  const handleShopForChange = (value: string) => {
    const currentValues = filters.shopFor;
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    onFiltersChange({ ...filters, shopFor: newValues });
  };

  const handleShoeSizeChange = (size: string) => {
    const currentSizes = filters.shoeSize;
    const newSizes = currentSizes.includes(size)
      ? currentSizes.filter(s => s !== size)
      : [...currentSizes, size];
    onFiltersChange({ ...filters, shoeSize: newSizes });
  };

  const handleApparelSizeChange = (size: string) => {
    const currentSizes = filters.apparelSize;
    const newSizes = currentSizes.includes(size)
      ? currentSizes.filter(s => s !== size)
      : [...currentSizes, size];
    onFiltersChange({ ...filters, apparelSize: newSizes });
  };

  const handleActivityChange = (activity: string) => {
    const currentActivities = filters.activity;
    const newActivities = currentActivities.includes(activity)
      ? currentActivities.filter(a => a !== activity)
      : [...currentActivities, activity];
    onFiltersChange({ ...filters, activity: newActivities });
  };

  const shoeSizes = ['36', '37', '38', '39', '40', '41', '42', '43', '44'];
  const apparelSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const activities = [
    'Running', 'Gym & Training', 'Walking', 'Hiking', 
    'Basketball', 'Skateboarding', 'CrossFit', 'Cycling', 
    'Casual', 'Trail Running'
  ];

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Filter sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[481px] bg-[#F2F2F2] border-l border-b border-black z-50 overflow-y-auto ${className}`}>
        <div className="p-6 space-y-12">
        {/* Sort By Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-medium text-black leading-[1.1]">Sort by</h3>
          <div className="space-y-4">
            <RadioButton
              id="featured"
              name="sortBy"
              value="featured"
              label="Featured"
              checked={filters.sortBy === 'featured'}
              onChange={handleSortByChange}
            />
            <RadioButton
              id="best-sellers"
              name="sortBy"
              value="best-sellers"
              label="Best Sellers"
              checked={filters.sortBy === 'best-sellers'}
              onChange={handleSortByChange}
            />
            <RadioButton
              id="price-low-high"
              name="sortBy"
              value="price-low-high"
              label="Price: Low to High"
              checked={filters.sortBy === 'price-low-high'}
              onChange={handleSortByChange}
            />
            <RadioButton
              id="price-high-low"
              name="sortBy"
              value="price-high-low"
              label="Price: High to Low"
              checked={filters.sortBy === 'price-high-low'}
              onChange={handleSortByChange}
            />
          </div>
        </div>

        {/* Shop For Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-medium text-black leading-[1.1]">Shop for</h3>
          <div className="space-y-4">
            <Checkbox
              label="Women"
              checked={filters.shopFor.includes('women')}
              onChange={() => handleShopForChange('women')}
            />
            <Checkbox
              label="Men"
              checked={filters.shopFor.includes('men')}
              onChange={() => handleShopForChange('men')}
            />
            <Checkbox
              label="Kids"
              checked={filters.shopFor.includes('kids')}
              onChange={() => handleShopForChange('kids')}
            />
          </div>
        </div>

        {/* Shoe Size Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-medium text-black leading-[1.1]">Shoe Size</h3>
          <SizeSelector
            sizes={shoeSizes}
            selectedSizes={filters.shoeSize}
            onSizeChange={handleShoeSizeChange}
          />
        </div>

        {/* Apparel Size Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-medium text-black leading-[1.1]">Apparel's Size</h3>
          <SizeSelector
            sizes={apparelSizes}
            selectedSizes={filters.apparelSize}
            onSizeChange={handleApparelSizeChange}
          />
        </div>

        {/* Activity Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-medium text-black leading-[1.1]">Activity</h3>
          <div className="space-y-4">
            {activities.map((activity) => (
              <Checkbox
                key={activity}
                label={activity}
                checked={filters.activity.includes(activity.toLowerCase().replace(/\s+/g, '-'))}
                onChange={() => handleActivityChange(activity.toLowerCase().replace(/\s+/g, '-'))}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FilterSidebar;
