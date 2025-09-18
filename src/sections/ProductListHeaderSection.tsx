import React from 'react';

interface ProductListHeaderSectionProps {
  title?: string;
  className?: string;
}

const ProductListHeaderSection: React.FC<ProductListHeaderSectionProps> = ({
  title = "Shop All",
  className = ''
}) => {
  return (
    <section className={`w-full ${className}`}>
      <div className="flex flex-col px-6">
        <h1 className="text-[96px] font-medium text-black leading-[1.1] tracking-[-0.04em]">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default ProductListHeaderSection;
