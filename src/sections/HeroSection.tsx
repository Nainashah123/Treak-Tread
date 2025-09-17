import React from 'react';
import Button from '../components/ui/Button';
import heroBackground from '../assets/images/hero-background-55a7e5.png';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative h-[800px] flex flex-col justify-end bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="flex flex-col gap-6 p-6">
        <h1 className="text-heading-1-mobile md:text-heading-1-desktop leading-[1.1] font-medium text-white max-w-[1400px] tracking-[-4%]">
          Limited Edition Release: Where Style Meets Utility
        </h1>
        
        <Button 
          variant="primary"
          showArrow={true}
          className="w-fit"
        >
          View Collection
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
