import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-black">
      {/* Newsletter Section */}
      <div className="border-b border-black bg-lime-300 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-xl font-medium">
            Be the first to know about new drops and exclusive offers
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-3 border border-black text-lg min-w-[300px]"
            />
            <button className="px-6 py-3 bg-white border border-black text-lg font-medium hover:bg-gray-50">
              Subscribe →
            </button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Shop */}
          <div>
            <h3 className="font-semibold text-gray-600 mb-4">Shop</h3>
            <div className="space-y-3">
              <Link to="/shop" className="block text-xl hover:opacity-70">Shop All</Link>
              <Link to="/women" className="block text-xl hover:opacity-70">Women</Link>
              <Link to="/men" className="block text-xl hover:opacity-70">Men</Link>
              <Link to="/shop?filter=bestsellers" className="block text-xl hover:opacity-70">Best Sellers</Link>
              <Link to="/shop?filter=new" className="block text-xl hover:opacity-70">New Arrivals</Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-gray-600 mb-4">Info</h3>
            <div className="space-y-3">
              <Link to="/journal" className="block text-xl hover:opacity-70">Journal</Link>
              <Link to="/about" className="block text-xl hover:opacity-70">About</Link>
              <Link to="/faq" className="block text-xl hover:opacity-70">FAQ</Link>
              <Link to="/contact" className="block text-xl hover:opacity-70">Contact</Link>
              <Link to="/login" className="block text-xl hover:opacity-70">Log In</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-600 mb-4">Legal</h3>
            <div className="space-y-3">
              <Link to="/privacy" className="block text-xl hover:opacity-70">Privacy Policy</Link>
              <Link to="/terms" className="block text-xl hover:opacity-70">Terms of Service</Link>
              <Link to="/cookies" className="block text-xl hover:opacity-70">Cookies Settings</Link>
              <Link to="/shipping" className="block text-xl hover:opacity-70">Shipping Policy</Link>
              <Link to="/returns" className="block text-xl hover:opacity-70">Start a Return</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-600 mb-4">Social</h3>
            <div className="space-y-3">
              <a href="#" className="block text-xl hover:opacity-70">Facebook</a>
              <a href="#" className="block text-xl hover:opacity-70">Instagram</a>
              <a href="#" className="block text-xl hover:opacity-70">Threads</a>
              <a href="#" className="block text-xl hover:opacity-70">X (Twitter)</a>
              <a href="#" className="block text-xl hover:opacity-70">TikTok</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-black px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© Track&Tread 2025</p>
          <div className="flex items-center gap-1">
            {/* Payment Icons Placeholder */}
            <div className="flex gap-1">
              {['Visa', 'MC', 'Amex', 'Discover', 'Apple Pay', 'PayPal', 'Shop Pay'].map((payment) => (
                <div key={payment} className="w-11 h-7 bg-white border border-gray-300 rounded flex items-center justify-center text-xs">
                  {payment.slice(0, 4)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
