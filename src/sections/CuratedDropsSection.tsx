import React from 'react';
import Button from '../components/ui/Button';

// Import category images
import womenCategory from '../assets/images/women-category.png';
import menCategory from '../assets/images/men-category.png';
import trainingGear from '../assets/images/training-gear.png';

const CuratedDropsSection: React.FC = () => {
  return (
    <section className="py-10">
      <div className="px-6">
        <h2 className="text-heading-2-mobile md:text-heading-2-desktop leading-[1.1] font-medium text-black tracking-[-4%] mb-6">
          Shop Curated Drops
        </h2>
      </div>

      <div className="flex flex-col">
        {/* Top border */}
        <div className="h-px bg-black" />
        
        {/* First Row - Women & Men */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 relative">
            <div className="h-[480px] md:h-[960px] bg-cover bg-center relative overflow-hidden">
              <img 
                src={womenCategory} 
                alt="Shop Women"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="primary" showArrow={true}>
                  Shop Women
                </Button>
              </div>
            </div>
          </div>
          
          <div className="w-px bg-black hidden md:block" />
          <div className="h-px bg-black md:hidden" />
          
          <div className="flex-1 relative">
            <div className="h-[480px] md:h-[960px] bg-cover bg-center relative overflow-hidden">
              <img 
                src={menCategory} 
                alt="Shop Men"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="primary" showArrow={true}>
                  Shop Men
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Middle border */}
        <div className="h-px bg-black" />
        
        {/* Second Row - Training Gear Content */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <div className="h-[480px] md:h-[960px] bg-cover bg-center overflow-hidden">
              <img 
                src={trainingGear} 
                alt="Training Gear"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-px bg-black hidden md:block" />
          <div className="h-px bg-black md:hidden" />
          
          <div className="flex-1 flex items-center">
            <div className="p-6 md:pr-[120px] flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-heading-3-mobile md:text-heading-3-desktop leading-[1.1] font-medium text-black tracking-[-4%]">
                  Built for Every Rep
                </h3>
                <p className="text-xl md:text-2xl font-medium text-black">
                  From warm-ups to max sets, our gear moves with you. Explore essentials designed to handle every grind.
                </p>
              </div>
              
              <Button variant="secondary" showArrow={true} className="w-fit">
                Shop Training Gear
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom border */}
        <div className="h-px bg-black" />
      </div>
    </section>
  );
};

export default CuratedDropsSection;
