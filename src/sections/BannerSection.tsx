import React from 'react';

const BannerSection: React.FC = () => {
  return (
    <section className="bg-[#C5FA1F] border-t border-b border-black py-4">
      <div className="flex items-center justify-center gap-8 overflow-hidden">
        <span className="text-heading-4-mobile md:text-heading-4-desktop font-medium text-black whitespace-nowrap">
          Free shipping on orders over $100
        </span>
        <div className="w-2.5 h-2.5 bg-black rounded-full flex-shrink-0" />
        <span className="text-heading-4-mobile md:text-heading-4-desktop font-medium text-black whitespace-nowrap">
          Free shipping on orders over $100
        </span>
        <div className="w-2.5 h-2.5 bg-black rounded-full flex-shrink-0" />
        <span className="text-heading-4-mobile md:text-heading-4-desktop font-medium text-black whitespace-nowrap">
          Free shipping on orders over $100
        </span>
      </div>
    </section>
  );
};

export default BannerSection;
