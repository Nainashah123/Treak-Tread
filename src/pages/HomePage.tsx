import React from 'react';
import HeroSection from '../sections/HeroSection';
import BannerSection from '../sections/BannerSection';
import BestSellersSection from '../sections/BestSellersSection';
import CuratedDropsSection from '../sections/CuratedDropsSection';
import ShopCategoriesSection from '../sections/ShopCategoriesSection';
import InterestedProductsSection from '../sections/InterestedProductsSection';
import StoriesSection from '../sections/StoriesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import InstagramSection from '../sections/InstagramSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BannerSection />
      <BestSellersSection />
      <CuratedDropsSection />
      <ShopCategoriesSection />
      <InterestedProductsSection />
      <StoriesSection />
      <TestimonialsSection />
      <InstagramSection />
    </div>
  );
};

export default HomePage;
