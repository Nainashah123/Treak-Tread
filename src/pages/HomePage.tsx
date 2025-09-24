import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../sections/HeroSection';
import BannerSection from '../sections/BannerSection';
import BestSellersSection from '../sections/BestSellersSection';
import CuratedDropsSection from '../sections/CuratedDropsSection';
import ShopCategoriesSection from '../sections/ShopCategoriesSection';
import InterestedProductsSection from '../sections/InterestedProductsSection';
import StoriesSection from '../sections/StoriesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import InstagramSection from '../sections/InstagramSection';
import AutoDiscountModal from '../components/AutoDiscountModal';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const HomePage = () => {
  // Auto-trigger modal on scroll
  const { shouldShow: shouldShowModal, reset: resetModal } = useScrollTrigger({
    threshold: 30, // Show when 30% scrolled
    delay: 2000, // 2 seconds delay
    once: true // Only show once per session
  });

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <BannerSection />
      <BestSellersSection />
      <CuratedDropsSection />
      <ShopCategoriesSection />
      <InterestedProductsSection />
      <StoriesSection />
      <TestimonialsSection />
      <InstagramSection />
      <Footer />

      {/* Auto-trigger Discount Modal */}
      <AutoDiscountModal
        isOpen={shouldShowModal}
        onClose={resetModal}
        autoCloseDelay={12000} // 12 seconds auto-close
      />
    </div>
  );
};

export default HomePage;
