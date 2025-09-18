import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import CheckoutBreadcrumb from '../components/ui/CheckoutBreadcrumb';

interface FormData {
  email: string;
  emailUpdates: boolean;
  deliveryMethod: 'ship' | 'pickup';
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  province: string;
  postalCode: string;
  discountCode: string;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    emailUpdates: true,
    deliveryMethod: 'ship',
    country: 'Canada',
    firstName: 'John',
    lastName: 'Doe',
    address: "206 Batran's Street",
    apartment: 'Unit 39',
    city: 'Ottawa',
    province: 'Ontario',
    postalCode: '2044',
    discountCode: ''
  });

  // Mock cart data
  const cartItems = [
    {
      id: '1',
      name: 'Nimbus Glide Icecore',
      price: 343.99,
      color: 'Ice Blue',
      size: '38',
      quantity: 1,
      image: '/src/assets/images/product-main-image.jpg'
    },
    {
      id: '2',
      name: 'Crimson Velocity',
      price: 69.99,
      quantity: 1,
      image: '/src/assets/images/addon-product-image.jpg'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinueToShipping = () => {
    // Handle form submission and navigation to shipping step
    console.log('Continue to shipping:', formData);
    
    // If pickup is selected, navigate to pickup page
    if (formData.deliveryMethod === 'pickup') {
      navigate('/checkout/pickup');
    } else {
      // Navigate to regular shipping page (to be implemented)
      console.log('Navigate to shipping page');
    }
  };

  const handleReturnToCart = () => {
    // Navigate back to cart
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left Content */}
        <div className="flex-1 px-14 py-14 pl-[400px]">
          {/* Logo */}
          <div className="mb-10">
            <div className="w-[250px] h-[30px] bg-black flex items-center justify-center">
              <span className="text-white font-bold text-lg">TRACK&TREAD</span>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="mb-10">
            <CheckoutBreadcrumb currentStep="information" />
          </div>

          {/* Contact Form */}
          <div className="space-y-4 mb-10">
            <div className="flex justify-between items-center">
              <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-4%]">Contact</h2>
              <span className="text-xl font-medium">Have an Account? Log In</span>
            </div>
            
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter an email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full p-4 border border-[#C8C8C8] text-xl placeholder-[#969696] focus:outline-none focus:border-black"
              />
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={formData.emailUpdates}
                  onChange={(e) => handleInputChange('emailUpdates', e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 ${formData.emailUpdates ? 'bg-black' : 'bg-white'} border border-black flex items-center justify-center`}>
                  {formData.emailUpdates && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-base font-medium">Email me with updates and special offers</span>
            </label>
          </div>

          {/* Delivery Methods */}
          <div className="space-y-4 mb-10">
            <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-4%]">Delivery Methods</h2>
            
            <div className="space-y-0">
              {/* Ship Option */}
              <div className={`flex items-center gap-4 p-4 border ${formData.deliveryMethod === 'ship' ? 'border-black' : 'border-[#C8C8C8]'}`}>
                <label className="flex items-center gap-2 cursor-pointer flex-1">
                  <div className="relative">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      checked={formData.deliveryMethod === 'ship'}
                      onChange={() => handleInputChange('deliveryMethod', 'ship')}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border border-black flex items-center justify-center ${formData.deliveryMethod === 'ship' ? 'bg-[#F2F2F2]' : 'bg-[#F2F2F2]'}`}>
                      {formData.deliveryMethod === 'ship' && (
                        <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-base font-medium">Ship</span>
                </label>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8h-3V4H3C1.9,4,1,4.9,1,6v9c0,1.1,0.9,2,2,2h1c0,1.66,1.34,3,3,3s3-1.34,3-3h4c0,1.66,1.34,3,3,3s3-1.34,3-3h1c1.1,0,2-0.9,2-2v-5C23,9.9,22.1,9,21,9L20,8z"/>
                </svg>
              </div>

              {/* Pickup Option */}
              <div className={`flex items-center gap-4 p-4 border-l border-r border-b ${formData.deliveryMethod === 'pickup' ? 'border-black' : 'border-[#C8C8C8]'}`}>
                <label className="flex items-center gap-2 cursor-pointer flex-1">
                  <div className="relative">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      checked={formData.deliveryMethod === 'pickup'}
                      onChange={() => handleInputChange('deliveryMethod', 'pickup')}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border border-black flex items-center justify-center ${formData.deliveryMethod === 'pickup' ? 'bg-[#F2F2F2]' : 'bg-[#F2F2F2]'}`}>
                      {formData.deliveryMethod === 'pickup' && (
                        <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-base font-medium">Pick up</span>
                </label>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2C8.13,2,5,5.13,5,9c0,5.25,7,13,7,13s7-7.75,7-13C19,5.13,15.87,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,11.5,12,11.5z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="space-y-4 mb-10">
            <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-4%]">Shipping Address</h2>
            
            <div className="space-y-4">
              {/* Country */}
              <div className="space-y-2">
                <label className="text-xl font-medium text-[#969696]">Country/region</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full p-4 border border-[#C8C8C8] text-xl focus:outline-none focus:border-black"
                />
              </div>

              {/* First Name and Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xl font-medium text-[#969696]">First name (optional)</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full p-4 border border-[#C8C8C8] text-xl focus:outline-none focus:border-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xl font-medium text-[#969696]">Last name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full p-4 border border-[#C8C8C8] text-xl focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="text-xl font-medium text-[#969696]">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full p-4 border border-[#C8C8C8] text-xl focus:outline-none focus:border-black"
                />
              </div>

              {/* Apartment */}
              <div className="space-y-2">
                <label className="text-xl font-medium text-[#969696]">Apartment, suite, etc. (optional)</label>
                <input
                  type="text"
                  value={formData.apartment}
                  onChange={(e) => handleInputChange('apartment', e.target.value)}
                  className="w-full p-4 border border-[#C8C8C8] text-xl focus:outline-none focus:border-black"
                />
              </div>

              {/* City, Province, Postal Code */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-xl font-medium text-[#969696]">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full p-4 border border-[#C8C8C8] text-xl focus:outline-none focus:border-black"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xl font-medium text-[#969696]">Province</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.province}
                      onChange={(e) => handleInputChange('province', e.target.value)}
                      className="w-full p-4 border border-[#C8C8C8] text-xl focus:outline-none focus:border-black pr-12"
                    />
                    <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xl font-medium text-[#969696]">Postal code</label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    className="w-full p-4 border border-[#C8C8C8] text-xl focus:outline-none focus:border-black"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mb-10">
            <button
              onClick={handleReturnToCart}
              className="text-xl font-medium text-black hover:underline"
            >
              Return to Cart
            </button>
            <Button
              variant="secondary"
              size="small"
              onClick={handleContinueToShipping}
            >
              Continue to Shipping
            </Button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#DCDCDC] mb-6"></div>

          {/* Footer Links */}
          <div className="flex items-center gap-4">
            <span className="text-base font-medium text-black">Return Policy</span>
            <span className="text-base font-medium text-black">Privacy Policy</span>
            <span className="text-base font-medium text-black">Terms of Use</span>
          </div>
        </div>

        {/* Right Summary */}
        <div className="w-[600px] bg-[#F2F2F2] p-14 pr-80">
          <div className="space-y-8">
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gray-200 border border-[#C8C8C8]">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#787878] rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">{item.quantity}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-black">{item.name}</h3>
                  {item.color && (
                    <p className="text-base font-medium text-[#969696]">Color: {item.color}</p>
                  )}
                  {item.size && (
                    <p className="text-base font-medium text-[#969696]">Size: {item.size}</p>
                  )}
                </div>
                <span className="text-base font-medium text-black">${item.price}</span>
              </div>
            ))}

            {/* Divider */}
            <div className="w-full h-px bg-black"></div>

            {/* Discount Code */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Discount code"
                value={formData.discountCode}
                onChange={(e) => handleInputChange('discountCode', e.target.value)}
                className="flex-1 p-4 border border-[#C8C8C8] text-xl placeholder-[#969696] focus:outline-none focus:border-black bg-white"
              />
              <Button variant="secondary" size="small">
                Apply
              </Button>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-black"></div>

            {/* Totals */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-[#969696]">Subtotal</span>
                <span className="text-base font-medium text-black">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-[#969696]">Shipping</span>
                <span className="text-base font-medium text-black">Calculated on next step</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-[#969696]">Tax</span>
                <span className="text-base font-medium text-black">Calculated on next step</span>
              </div>
              <div className="flex justify-between items-end pt-2">
                <div className="pb-0.5">
                  <span className="text-base font-medium text-black">Total</span>
                </div>
                <span className="text-2xl font-medium text-black">${subtotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
