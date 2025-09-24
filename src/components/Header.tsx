import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';
import SearchBar from './SearchBar';
import NavigationDropdown from './NavigationDropdown';

const Header = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  
  // Helper function to check if a link is active
  const isActive = (path: string) => {
    if (path === '/shop') {
      // Shop is active for /shop, /men, /women, /product-list, etc.
      return location.pathname === '/shop' || 
             location.pathname === '/men' || 
             location.pathname === '/women' ||
             location.pathname === '/product-list' ||
             location.pathname.startsWith('/product/');
    }
    return location.pathname === path;
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const handleSearch = (query: string) => {
    // Navigate to search page with query
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  };

  const handleShopClick = () => {
    // Simple toggle
    setIsShopDropdownOpen(!isShopDropdownOpen);
  };

  return (
    <header className="border-b border-black bg-white relative z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Menu className="h-6 w-6" />
        </div>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="text-xl font-semibold">Track & Tread</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div 
            className="relative"
          >
            <button
              onClick={handleShopClick}
              className={`text-xl font-medium hover:opacity-70 ${
                isActive('/shop') || isShopDropdownOpen ? 'text-purple-brand' : 'text-black'
              }`}
              style={(isActive('/shop') || isShopDropdownOpen) ? { color: '#623CEA' } : {}}
            >
              Shop
            </button>
          </div>
          <Link 
            to="/journal" 
            className={`text-xl font-medium hover:opacity-70 ${
              isActive('/journal') ? 'text-purple-brand' : 'text-black'
            }`}
            style={isActive('/journal') ? { color: '#623CEA' } : {}}
          >
            Journal
          </Link>
          <Link 
            to="/about" 
            className={`text-xl font-medium hover:opacity-70 ${
              isActive('/about') ? 'text-purple-brand' : 'text-black'
            }`}
            style={isActive('/about') ? { color: '#623CEA' } : {}}
          >
            About
          </Link>
          <button 
            onClick={handleSearchClick}
            className={`text-xl font-medium hover:opacity-70 ${
              isActive('/search') ? 'text-purple-brand' : 'text-black'
            }`}
            style={isActive('/search') ? { color: '#623CEA' } : {}}
          >
            Search
          </button>
          <Link 
            to="/account" 
            className={`text-xl font-medium hover:opacity-70 ${
              isActive('/account') ? 'text-purple-brand' : 'text-black'
            }`}
            style={isActive('/account') ? { color: '#623CEA' } : {}}
          >
            Account
          </Link>
          <Link 
            to="/cart" 
            className={`text-xl font-medium hover:opacity-70 ${
              isActive('/cart') ? 'text-purple-brand' : 'text-black'
            }`}
            style={isActive('/cart') ? { color: '#623CEA' } : {}}
          >
            Cart (0)
          </Link>
        </div>

        {/* Mobile Right Side */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={handleSearchClick}>
            <Search 
              className={`h-5 w-5 ${
                isActive('/search') ? 'text-purple-brand' : 'text-black'
              }`}
              style={isActive('/search') ? { color: '#623CEA' } : {}}
            />
          </button>
          <Link 
            to="/cart" 
            className={`text-sm ${
              isActive('/cart') ? 'text-purple-brand' : 'text-black'
            }`}
            style={isActive('/cart') ? { color: '#623CEA' } : {}}
          >
            Cart (0)
          </Link>
        </div>
      </nav>
      
      {/* Search Bar Overlay */}
      <SearchBar 
        isOpen={isSearchOpen} 
        onClose={handleSearchClose} 
        onSearch={handleSearch} 
      />

      {/* Navigation Dropdown */}
      <NavigationDropdown 
        isOpen={isShopDropdownOpen} 
        onClose={() => setIsShopDropdownOpen(false)} 
      />
    </header>
  );
};

export default Header;
