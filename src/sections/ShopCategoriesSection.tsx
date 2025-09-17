import React from 'react';
import Button from '../components/ui/Button';

// Import category images
import shoesCategory from '../assets/images/shoes-category.png';
import apparelCategory from '../assets/images/apparel-category.png';
import accessoriesCategory from '../assets/images/accessories-category.png';

const ShopCategoriesSection: React.FC = () => {
  const categories = [
    {
      id: 1,
      image: shoesCategory,
      title: "Shoes",
      alt: "Shop Shoes"
    },
    {
      id: 2,
      image: apparelCategory,
      title: "Apparel",
      alt: "Shop Apparel"
    },
    {
      id: 3,
      image: accessoriesCategory,
      title: "Accessories",
      alt: "Shop Accessories"
    }
  ];

  return (
    <section className="py-10">
      <div className="px-6">
        <h2 className="text-[96px] leading-[1.1] font-medium text-black tracking-[-4%] mb-6">
          Shop by Category
        </h2>
      </div>

      <div className="flex flex-col">
        {/* Top border */}
        <div className="h-px bg-black" />
        
        {/* Categories Row */}
        <div className="flex">
          {categories.map((category, index) => (
            <React.Fragment key={category.id}>
              <div className="flex-1 relative">
                <div className="h-[640px] bg-cover bg-center relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button variant="primary" showArrow={true}>
                      {category.title}
                    </Button>
                  </div>
                </div>
              </div>
              {index < categories.length - 1 && (
                <div className="w-px bg-black" />
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Bottom border */}
        <div className="h-px bg-black" />
      </div>
    </section>
  );
};

export default ShopCategoriesSection;
