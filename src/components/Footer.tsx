import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-black">
      {/* Newsletter Section */}
      <div className="border-b border-black bg-lime-300 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          <p className="text-xl font-medium">
            Be the first to know about new drops and exclusive offers
          </p>
          
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-3 border border-black text-lg min-w-[300px]"
            />
            
            <button className="px-6 py-3 bg-white border border-black text-lg font-medium hover:bg-gray-50 flex items-center gap-2">
              Subscribe
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            {/* Shop */}
            <div className="flex-1 px-6 py-6">
              <h3 className="font-medium text-gray-600 mb-6 text-2xl">Shop</h3>
              <div className="space-y-4">
                <Link to="/shop" className="block text-xl hover:opacity-70">Shop All</Link>
                <Link to="/women" className="block text-xl hover:opacity-70">Women</Link>
                <Link to="/men" className="block text-xl hover:opacity-70">Men</Link>
                <Link to="/shop?filter=bestsellers" className="block text-xl hover:opacity-70">Best Sellers</Link>
                <Link to="/shop?filter=new" className="block text-xl hover:opacity-70">New Arrivals</Link>
                <Link to="/shop?filter=latest" className="block text-xl hover:opacity-70">Latest Drops</Link>
              </div>
            </div>

            {/* Vertical Divider 1 */}
            <div className="w-px bg-black"></div>

            {/* Info */}
            <div className="flex-1 px-6 py-6">
              <h3 className="font-medium text-gray-600 mb-6 text-2xl">Info</h3>
              <div className="space-y-4">
                <Link to="/journal" className="block text-xl hover:opacity-70">Journal</Link>
                <Link to="/about" className="block text-xl hover:opacity-70">About</Link>
                <Link to="/faq" className="block text-xl hover:opacity-70">FAQ</Link>
                <Link to="/contact" className="block text-xl hover:opacity-70">Contact</Link>
                <Link to="/login" className="block text-xl hover:opacity-70">Log In</Link>
              </div>
            </div>

            {/* Vertical Divider 2 */}
            <div className="w-px bg-black"></div>

            {/* Legal */}
            <div className="flex-1 px-6 py-6">
              <h3 className="font-medium text-gray-600 mb-6 text-2xl">Legal</h3>
              <div className="space-y-4">
                <Link to="/privacy" className="block text-xl hover:opacity-70">Privacy Policy</Link>
                <Link to="/terms" className="block text-xl hover:opacity-70">Terms of Service</Link>
                <Link to="/cookies" className="block text-xl hover:opacity-70">Cookies Settings</Link>
                <Link to="/shipping" className="block text-xl hover:opacity-70">Shipping Policy</Link>
                <Link to="/returns" className="block text-xl hover:opacity-70">Start a Return</Link>
              </div>
            </div>

            {/* Vertical Divider 3 */}
            <div className="w-px bg-black"></div>

            {/* Social */}
            <div className="flex-1 px-6 py-6">
              <h3 className="font-medium text-gray-600 mb-6 text-2xl">Social</h3>
              <div className="space-y-4">
                <a href="#" className="block text-xl hover:opacity-70">Facebook</a>
                <a href="#" className="block text-xl hover:opacity-70">Instagram</a>
                <a href="#" className="block text-xl hover:opacity-70">Threads</a>
                <a href="#" className="block text-xl hover:opacity-70">X (Twitter)</a>
                <a href="#" className="block text-xl hover:opacity-70">TikTok</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-black px-6 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Row with Copyright and Payment Methods */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-base">© Track&Tread 2025</p>
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
          
          {/* Large TRACK&TREAD Logo */}
          <div className="w-full h-[231px] flex items-center justify-center">
            <div className="text-black font-bold text-9xl tracking-tight" style={{ fontSize: 'clamp(4rem, 12vw, 8rem)' }}>
              TRACK&TREAD
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
