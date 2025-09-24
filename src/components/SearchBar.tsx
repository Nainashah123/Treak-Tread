import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleClose = () => {
    setSearchQuery('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40">
      {/* Semi-transparent overlay that covers content area (not header) */}
      <div className="absolute top-16 left-0 right-0 bottom-0 bg-[#F2F2F2] opacity-60" />
      
      {/* Search bar positioned below header - full width but reduced height */}
      <div className="relative flex items-center justify-between px-6 py-4 border-b border-black bg-[#F2F2F2] mt-16">
        {/* Search Icon and Input */}
        <div className="flex items-center gap-4 flex-1">
          <Search className="h-6 w-6 text-black" />
          <form onSubmit={handleSearch} className="flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="|Search"
              className="w-full text-lg font-medium bg-transparent border-none outline-none placeholder-black"
              autoFocus
            />
          </form>
        </div>
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-black" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
