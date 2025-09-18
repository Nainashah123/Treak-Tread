import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = ''
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col">
        {/* Pagination Container */}
        <div className="flex items-center justify-center gap-2 p-6">
          {/* Previous Arrow */}
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Page Numbers */}
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`min-w-[42px] h-[42px] flex items-center justify-center text-2xl font-medium transition-colors ${
                currentPage === page
                  ? 'bg-[#623CEA] text-white'
                  : 'text-black hover:bg-gray-100'
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Arrow */}
          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Bottom border */}
        <div className="h-px bg-black" />
      </div>
    </div>
  );
};

export default Pagination;

