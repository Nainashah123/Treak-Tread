import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import InputField from '../components/ui/InputField';
import FullWidthButton from '../components/ui/FullWidthButton';
import Header from '../components/Header';

// Validation schema
const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email address is required'),
});

const ForgotPasswordPage = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    try {
      // Validate form data
      await forgotPasswordSchema.validate(formData, { abortEarly: false });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setIsSubmitted(true);
      
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        error.inner.forEach((err) => {
          if (err.path) {
            validationErrors[err.path] = err.message;
          }
        });
        setErrors(validationErrors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Clear form data on page refresh and auto-focus
  React.useEffect(() => {
    // Clear any existing form data on mount (handles page refresh)
    setFormData({
      email: '',
    });
    setErrors({});
    
    // Clear any auto-filled values
    setTimeout(() => {
      const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
      
      if (emailInput && emailInput.value) {
        emailInput.value = '';
        emailInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
      
      // Auto-focus on email field
      if (emailInput) {
        emailInput.focus();
      }
    }, 100);
  }, []);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-light">
        {/* Header */}
        <header className="border-b border-black bg-gray-light">
          <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <div className="h-6 w-6"></div>
            </div>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="text-xl font-semibold">Track & Tread</div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/shop" 
                className={`text-xl font-medium hover:opacity-70 ${
                  location.pathname === '/shop' || 
                  location.pathname === '/men' || 
                  location.pathname === '/women' ||
                  location.pathname === '/product-list' ||
                  location.pathname.startsWith('/product/') ? 'text-purple-brand' : 'text-black'
                }`}
                style={location.pathname === '/shop' || 
                       location.pathname === '/men' || 
                       location.pathname === '/women' ||
                       location.pathname === '/product-list' ||
                       location.pathname.startsWith('/product/') ? { color: '#623CEA' } : {}}
              >
                Shop
              </Link>
              <Link 
                to="/journal" 
                className={`text-xl font-medium hover:opacity-70 ${
                  location.pathname === '/journal' ? 'text-purple-brand' : 'text-black'
                }`}
                style={location.pathname === '/journal' ? { color: '#623CEA' } : {}}
              >
                Journal
              </Link>
              <Link 
                to="/about" 
                className={`text-xl font-medium hover:opacity-70 ${
                  location.pathname === '/about' ? 'text-purple-brand' : 'text-black'
                }`}
                style={location.pathname === '/about' ? { color: '#623CEA' } : {}}
              >
                About
              </Link>
              <Link 
                to="/search" 
                className={`text-xl font-medium hover:opacity-70 ${
                  location.pathname === '/search' ? 'text-purple-brand' : 'text-black'
                }`}
                style={location.pathname === '/search' ? { color: '#623CEA' } : {}}
              >
                Search
              </Link>
              <Link 
                to="/login" 
                className={`text-xl font-medium hover:opacity-70 ${
                  location.pathname === '/login' ? 'text-purple-brand' : 'text-black'
                }`}
                style={location.pathname === '/login' ? { color: '#623CEA' } : {}}
              >
                Log In
              </Link>
              <Link 
                to="/cart" 
                className={`text-xl font-medium hover:opacity-70 ${
                  location.pathname === '/cart' ? 'text-purple-brand' : 'text-black'
                }`}
                style={location.pathname === '/cart' ? { color: '#623CEA' } : {}}
              >
                Cart (0)
              </Link>
            </div>

            {/* Mobile Right Side */}
            <div className="md:hidden flex items-center space-x-4">
              <Link to="/search">
                <div 
                  className={`h-5 w-5 ${
                    location.pathname === '/search' ? 'text-purple-brand' : 'text-black'
                  }`}
                  style={location.pathname === '/search' ? { color: '#623CEA' } : {}}
                />
              </Link>
              <Link 
                to="/cart" 
                className={`text-sm ${
                  location.pathname === '/cart' ? 'text-purple-brand' : 'text-black'
                }`}
                style={location.pathname === '/cart' ? { color: '#623CEA' } : {}}
              >
                Cart (0)
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-32">
          <div className="w-full max-w-md">
            {/* Success Message */}
            <div className="text-center">
              <h1 className="text-heading-4-desktop text-black mb-2">
                Check Your Email
              </h1>
              <p className="text-body-medium text-black mb-8">
                We've sent a password reset link to {formData.email}
              </p>
              
              <Link to="/login" className="w-full">
                <FullWidthButton
                  type="button"
                  variant="primary"
                  size="small"
                >
                  Back to Login
                </FullWidthButton>
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-black bg-gray-light">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col gap-8">
              {/* Links Row */}
              <div className="flex">
                {/* Shop Column */}
                <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                  <h3 className="text-heading-6-desktop font-medium text-gray-medium">Shop</h3>
                  <div className="flex flex-col gap-4">
                    <Link to="/shop" className="text-body-xl text-black hover:opacity-70">Shop All</Link>
                    <Link to="/women" className="text-body-xl text-black hover:opacity-70">Women</Link>
                    <Link to="/men" className="text-body-xl text-black hover:opacity-70">Men</Link>
                    <Link to="/best-sellers" className="text-body-xl text-black hover:opacity-70">Best Sellers</Link>
                    <Link to="/new-arrivals" className="text-body-xl text-black hover:opacity-70">New Arrivals</Link>
                    <Link to="/latest-drops" className="text-body-xl text-black hover:opacity-70">Latest Drops</Link>
                  </div>
                </div>

                {/* Vertical Line */}
                <div className="w-px bg-black self-stretch"></div>

                {/* Info Column */}
                <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                  <h3 className="text-heading-6-desktop font-medium text-gray-medium">Info</h3>
                  <div className="flex flex-col gap-4">
                    <Link to="/journal" className="text-body-xl text-black hover:opacity-70">Journal</Link>
                    <Link to="/about" className="text-body-xl text-black hover:opacity-70">About</Link>
                    <Link to="/faq" className="text-body-xl text-black hover:opacity-70">FAQ</Link>
                    <Link to="/contact" className="text-body-xl text-black hover:opacity-70">Contact</Link>
                    <Link to="/login" className="text-body-xl text-black hover:opacity-70">Log In</Link>
                  </div>
                </div>

                {/* Vertical Line */}
                <div className="w-px bg-black self-stretch"></div>

                {/* Legal Column */}
                <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                  <h3 className="text-heading-6-desktop font-medium text-gray-medium">Legal</h3>
                  <div className="flex flex-col gap-4">
                    <Link to="/privacy" className="text-body-xl text-black hover:opacity-70">Privacy Policy</Link>
                    <Link to="/terms" className="text-body-xl text-black hover:opacity-70">Terms of Service</Link>
                    <Link to="/cookies" className="text-body-xl text-black hover:opacity-70">Cookies Settings</Link>
                    <Link to="/shipping" className="text-body-xl text-black hover:opacity-70">Shipping Policy</Link>
                    <Link to="/returns" className="text-body-xl text-black hover:opacity-70">Start a Return</Link>
                  </div>
                </div>

                {/* Vertical Line */}
                <div className="w-px bg-black self-stretch"></div>

                {/* Social Column */}
                <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                  <h3 className="text-heading-6-desktop font-medium text-gray-medium">Social</h3>
                  <div className="flex flex-col gap-4">
                    <Link to="/facebook" className="text-body-xl text-black hover:opacity-70">Facebook</Link>
                    <Link to="/instagram" className="text-body-xl text-black hover:opacity-70">Instagram</Link>
                    <Link to="/threads" className="text-body-xl text-black hover:opacity-70">Threads</Link>
                    <Link to="/twitter" className="text-body-xl text-black hover:opacity-70">X (Twitter)</Link>
                    <Link to="/tiktok" className="text-body-xl text-black hover:opacity-70">TikTok</Link>
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="flex flex-col gap-8 pt-8">
                <div className="flex justify-between items-center px-6">
                  <p className="text-body-medium text-gray-600">© Track&Tread 2025</p>
                  
                  {/* Large Brand Logo - centered */}
                  <div className="flex-1 flex justify-center">
                    <Link to="/" className="text-6xl md:text-7xl font-bold text-black tracking-tight">
                      TRACK&TREAD
                    </Link>
                  </div>
                  
                  <div className="flex gap-2">
                    {/* Payment methods - matching Figma design */}
                    <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                    <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                    <div className="w-8 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">AMEX</div>
                    <div className="w-8 h-6 bg-gray-800 rounded text-white text-xs flex items-center justify-center font-bold">SP</div>
                    <div className="w-8 h-6 bg-gray-800 rounded text-white text-xs flex items-center justify-center font-bold">AP</div>
                    <div className="w-8 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">GP</div>
                    <div className="w-8 h-6 bg-yellow-500 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
                    <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-light">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-32">
        <div className="w-full max-w-md">
          {/* Header Text */}
          <div className="text-center mb-8">
            <h1 className="text-heading-4-desktop text-black mb-2">
              Forgot Your Password?
            </h1>
            <p className="text-body-medium text-black">
              Enter your email address to receive a password reset link.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full">
            {/* Email Field */}
            <div className="w-full mb-8">
              <InputField
                label="Email address"
                placeholder="Enter your email address"
                type="email"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Button */}
            <div className="w-full">
              <FullWidthButton
                type="submit"
                variant="primary"
                size="small"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </FullWidthButton>
            </div>
          </form>

          {/* Back to Login Link */}
          <div className="text-center mt-6">
            <p className="text-body-medium text-black">
              Remember your password?{' '}
              <Link to="/login" className="text-purple-brand hover:opacity-70 transition-opacity" style={{ color: '#623CEA' }}>
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black bg-gray-light">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col gap-8">
            {/* Links Row */}
            <div className="flex">
              {/* Shop Column */}
              <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                <h3 className="text-heading-6-desktop font-medium text-gray-medium">Shop</h3>
                <div className="flex flex-col gap-4">
                  <Link to="/shop" className="text-body-xl text-black hover:opacity-70">Shop All</Link>
                  <Link to="/women" className="text-body-xl text-black hover:opacity-70">Women</Link>
                  <Link to="/men" className="text-body-xl text-black hover:opacity-70">Men</Link>
                  <Link to="/best-sellers" className="text-body-xl text-black hover:opacity-70">Best Sellers</Link>
                  <Link to="/new-arrivals" className="text-body-xl text-black hover:opacity-70">New Arrivals</Link>
                  <Link to="/latest-drops" className="text-body-xl text-black hover:opacity-70">Latest Drops</Link>
                </div>
              </div>

              {/* Vertical Line */}
              <div className="w-px bg-black self-stretch"></div>

              {/* Info Column */}
              <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                <h3 className="text-heading-6-desktop font-medium text-gray-medium">Info</h3>
                <div className="flex flex-col gap-4">
                  <Link to="/journal" className="text-body-xl text-black hover:opacity-70">Journal</Link>
                  <Link to="/about" className="text-body-xl text-black hover:opacity-70">About</Link>
                  <Link to="/faq" className="text-body-xl text-black hover:opacity-70">FAQ</Link>
                  <Link to="/contact" className="text-body-xl text-black hover:opacity-70">Contact</Link>
                  <Link to="/login" className="text-body-xl text-black hover:opacity-70">Log In</Link>
                </div>
              </div>

              {/* Vertical Line */}
              <div className="w-px bg-black self-stretch"></div>

              {/* Legal Column */}
              <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                <h3 className="text-heading-6-desktop font-medium text-gray-medium">Legal</h3>
                <div className="flex flex-col gap-4">
                  <Link to="/privacy" className="text-body-xl text-black hover:opacity-70">Privacy Policy</Link>
                  <Link to="/terms" className="text-body-xl text-black hover:opacity-70">Terms of Service</Link>
                  <Link to="/cookies" className="text-body-xl text-black hover:opacity-70">Cookies Settings</Link>
                  <Link to="/shipping" className="text-body-xl text-black hover:opacity-70">Shipping Policy</Link>
                  <Link to="/returns" className="text-body-xl text-black hover:opacity-70">Start a Return</Link>
                </div>
              </div>

              {/* Vertical Line */}
              <div className="w-px bg-black self-stretch"></div>

              {/* Social Column */}
              <div className="flex-1 flex flex-col gap-6 px-6 py-6">
                <h3 className="text-heading-6-desktop font-medium text-gray-medium">Social</h3>
                <div className="flex flex-col gap-4">
                  <Link to="/facebook" className="text-body-xl text-black hover:opacity-70">Facebook</Link>
                  <Link to="/instagram" className="text-body-xl text-black hover:opacity-70">Instagram</Link>
                  <Link to="/threads" className="text-body-xl text-black hover:opacity-70">Threads</Link>
                  <Link to="/twitter" className="text-body-xl text-black hover:opacity-70">X (Twitter)</Link>
                  <Link to="/tiktok" className="text-body-xl text-black hover:opacity-70">TikTok</Link>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col gap-8 pt-8">
              <div className="flex justify-between items-center px-6">
                <p className="text-body-medium text-gray-600">© Track&Tread 2025</p>
                
                {/* Large Brand Logo - centered */}
                <div className="flex-1 flex justify-center">
                  <Link to="/" className="text-6xl md:text-7xl font-bold text-black tracking-tight">
                    TRACK&TREAD
                  </Link>
                </div>
                
                <div className="flex gap-2">
                  {/* Payment methods - matching Figma design */}
                  <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                  <div className="w-8 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                  <div className="w-8 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">AMEX</div>
                  <div className="w-8 h-6 bg-gray-800 rounded text-white text-xs flex items-center justify-center font-bold">SP</div>
                  <div className="w-8 h-6 bg-gray-800 rounded text-white text-xs flex items-center justify-center font-bold">AP</div>
                  <div className="w-8 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">GP</div>
                  <div className="w-8 h-6 bg-yellow-500 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
                  <div className="w-8 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ForgotPasswordPage;
