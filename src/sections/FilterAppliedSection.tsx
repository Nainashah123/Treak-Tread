import React from 'react';
import Button from '../components/ui/Button';

interface FilterTag {
  id: string;
  label: string;
  value: string;
  type: 'sortBy' | 'shopFor' | 'shoeSize' | 'apparelSize' | 'activity';
}

interface FilterAppliedSectionProps {
  appliedFilters: FilterTag[];
  onRemoveFilter: (filterId: string, filterType: string, value: string) => void;
  onClearAll: () => void;
  className?: string;
}

const FilterAppliedSection: React.FC<FilterAppliedSectionProps> = ({
  appliedFilters,
  onRemoveFilter,
  onClearAll,
  className = ''
}) => {
  if (appliedFilters.length === 0) return null;

  return (
    <div className={`flex items-center justify-between gap-4 px-6 py-4 ${className}`}>
      {/* Applied Filter Tags */}
      <div className="flex items-center gap-4 flex-wrap">
        {appliedFilters.map((filter) => (
          <Button
            key={filter.id}
            variant="outline"
            size="small"
            onClick={() => onRemoveFilter(filter.id, filter.type, filter.value)}
            className="flex items-center gap-2 px-6 py-4 bg-white border border-black text-black hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-xl font-medium leading-[1.1]">
              {filter.label}
            </span>
            {/* Close Icon */}
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current"
            >
              <path 
                d="M6.4 18.6537L5.34625 17.5999L10.9463 11.9999L5.34625 6.39994L6.4 5.34619L12 10.9462L17.6 5.34619L18.6538 6.39994L13.0538 11.9999L18.6538 17.5999L17.6 18.6537L12 13.0537L6.4 18.6537Z" 
                fill="currentColor"
              />
            </svg>
          </Button>
        ))}
      </div>

      {/* Clear All Button */}
      <button
        onClick={onClearAll}
        className="text-xl font-medium leading-[1.1] text-black hover:text-gray-600 transition-colors duration-200"
      >
        Clear All
      </button>
    </div>
  );
};

export default FilterAppliedSection;
