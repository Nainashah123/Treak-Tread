import { type FC } from 'react';
import { Link } from 'react-router-dom';

interface NavigationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavigationDropdown: FC<NavigationDropdownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with 50% opacity */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Dropdown Menu - Half height */}
      <div 
        className="fixed top-[60px] left-0 right-0 h-[50vh] bg-[#F2F2F2] border-b border-black z-50 overflow-hidden"
      >
        <div className="flex">
          {/* Left Column - Main Categories */}
          <div className="flex-1 p-4">
            <div className="flex flex-col gap-3">
              <Link 
                to="/shop" 
                className="text-xl font-medium text-black hover:text-[#623CEA] transition-colors"
                onClick={onClose}
              >
                Shop All
              </Link>
              <Link 
                to="/shop/shoes" 
                className="text-xl font-medium text-black hover:text-[#623CEA] transition-colors"
                onClick={onClose}
              >
                Shoes
              </Link>
              <Link 
                to="/shop/apparel" 
                className="text-xl font-medium text-black hover:text-[#623CEA] transition-colors"
                onClick={onClose}
              >
                Apparel
              </Link>
              <Link 
                to="/shop/accessories" 
                className="text-xl font-medium text-black hover:text-[#623CEA] transition-colors"
                onClick={onClose}
              >
                Accessories
              </Link>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-black" />

          {/* Middle Column - Sub Categories */}
          <div className="flex-1 p-4">
            <div className="flex flex-col gap-3">
              <Link 
                to="/shop/women" 
                className="text-xl font-medium text-black hover:text-[#623CEA] transition-colors"
                onClick={onClose}
              >
                Women
              </Link>
              <Link 
                to="/shop/men" 
                className="text-xl font-medium text-black hover:text-[#623CEA] transition-colors"
                onClick={onClose}
              >
                Men
              </Link>
              <Link 
                to="/shop/kids" 
                className="text-xl font-medium text-black hover:text-[#623CEA] transition-colors"
                onClick={onClose}
              >
                Kids
              </Link>
              <Link 
                to="/shop/best-sellers" 
                className="text-xl font-medium text-black hover:text-[#623CEA] transition-colors"
                onClick={onClose}
              >
                Best Sellers
              </Link>
              <Link 
                to="/shop/new-arrivals" 
                className="text-xl font-medium text-black hover:text-[#623CEA] transition-colors"
                onClick={onClose}
              >
                New Arrivals
              </Link>
              <Link 
                to="/shop/latest-drops" 
                className="text-xl font-medium text-black hover:text-[#623CEA] transition-colors"
                onClick={onClose}
              >
                Latest Drops
              </Link>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px bg-black" />

          {/* Right Column - Promo Cards */}
          <div className="flex-1 flex">
            {/* First Promo Card */}
            <div className="flex-1 flex flex-col">
              <div className="h-[200px] bg-cover bg-center overflow-hidden">
                <img 
                  src="/images/nav-promo-1.jpg" 
                  alt="Training partner sneaker"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-px bg-black" />
              <div className="flex items-center gap-4 p-4 flex-1">
                <p className="text-lg font-medium text-black leading-[1.1] tracking-[-4%]">
                  Your new training partner has arrived. Lightweight. Durable. Powerful.
                </p>
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-px bg-black" />

            {/* Second Promo Card */}
            <div className="flex-1 flex flex-col">
              <div className="h-[200px] bg-cover bg-center overflow-hidden">
                <img 
                  src="/images/nav-promo-2.jpg" 
                  alt="Athlete lifestyle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-px bg-black" />
              <div className="flex items-center gap-4 p-4 flex-1">
                <p className="text-lg font-medium text-black leading-[1.1] tracking-[-4%]">
                  Designed for athletes, loved by everyone. The sneakers redefining style.
                </p>
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationDropdown;
