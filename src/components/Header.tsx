import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b border-black bg-gray-100">
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
          <Link to="/shop" className="text-xl font-medium hover:opacity-70">
            Shop
          </Link>
          <Link to="/journal" className="text-xl font-medium hover:opacity-70">
            Journal
          </Link>
          <Link to="/about" className="text-xl font-medium hover:opacity-70">
            About
          </Link>
          <Link to="/search" className="text-xl font-medium hover:opacity-70">
            Search
          </Link>
          <Link to="/login" className="text-xl font-medium hover:opacity-70">
            Log In
          </Link>
          <Link to="/cart" className="text-xl font-medium hover:opacity-70">
            Cart (0)
          </Link>
        </div>

        {/* Mobile Right Side */}
        <div className="md:hidden flex items-center space-x-4">
          <Link to="/search">
            <Search className="h-5 w-5" />
          </Link>
          <Link to="/cart" className="text-sm">
            Cart (0)
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
