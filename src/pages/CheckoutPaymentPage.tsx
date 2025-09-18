import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import CheckoutBreadcrumb from '../components/ui/CheckoutBreadcrumb';

interface FormData {
  paymentMethod: 'card' | 'paypal';
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
  nameOnCard: string;
  billingAddress: 'same' | 'different';
  discountCode: string;
}

const CheckoutPaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    paymentMethod: 'card',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    nameOnCard: '',
    billingAddress: 'same',
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
  const shipping = 10.00;
  const tax = 0.00;
  const total = subtotal + shipping + tax;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCompleteOrder = () => {
    // Handle order completion
    console.log('Complete order:', formData);
    navigate('/checkout/processing');
  };

  const handleReturnToShipping = () => {
    // Navigate back to shipping step
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
            <CheckoutBreadcrumb currentStep="payment" />
          </div>

          {/* Order Summary Section */}
          <div className="p-4 border border-[#C8C8C8] mb-10 space-y-4">
            <div className="flex justify-between items-center">
              <div className="w-[100px]">
                <span className="text-base font-medium text-[#969696]">Contact</span>
              </div>
              <div className="flex-1">
                <span className="text-base font-medium text-black">johndoe@example.com</span>
              </div>
              <button className="text-base font-medium text-[#969696] hover:underline">
                Change
              </button>
            </div>
            
            <div className="w-full h-px bg-[#C8C8C8]"></div>
            
            <div className="flex justify-between items-center">
              <div className="w-[100px]">
                <span className="text-base font-medium text-[#969696]">Ship to</span>
              </div>
              <div className="flex-1">
                <span className="text-base font-medium text-black">206 Batran's Street, 39, 2044 Ontario, Ottawa</span>
              </div>
              <button className="text-base font-medium text-[#969696] hover:underline">
                Change
              </button>
            </div>
            
            <div className="w-full h-px bg-[#C8C8C8]"></div>
            
            <div className="flex justify-between items-center">
              <div className="w-[100px]">
                <span className="text-base font-medium text-[#969696]">Method</span>
              </div>
              <div className="flex-1">
                <span className="text-base font-medium text-black">FedEx Ground | $10.00</span>
              </div>
              <button className="text-base font-medium text-[#969696] hover:underline">
                Change
              </button>
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-4 mb-10">
            <div className="space-y-1">
              <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-4%]">Payment</h2>
              <p className="text-base font-medium text-[#969696]">All transactions are secured and encrypted.</p>
            </div>
            
            <div className="space-y-0">
              {/* Credit Card Option */}
              <div className={`border ${formData.paymentMethod === 'card' ? 'border-black' : 'border-[#C8C8C8]'} border-b-0`}>
                <div className="flex items-center gap-4 p-4">
                  <label className="flex items-center gap-2 cursor-pointer flex-1">
                    <div className="relative">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'card'}
                        onChange={() => handleInputChange('paymentMethod', 'card')}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border border-black flex items-center justify-center bg-[#F2F2F2]`}>
                        {formData.paymentMethod === 'card' && (
                          <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                        )}
                      </div>
                    </div>
                    <span className="text-base font-medium">Credit or debit card</span>
                  </label>
                  
                  {/* Payment Method Icons */}
                  <div className="flex gap-1">
                    <div className="w-8 h-[22px] bg-white border border-[#DCDCDC] flex items-center justify-center">
                      <div className="w-6 h-2 bg-[#1434CB] rounded-sm"></div>
                    </div>
                    <div className="w-8 h-[22px] bg-white border border-[#DCDCDC] flex items-center justify-center">
                      <div className="flex gap-px">
                        <div className="w-2 h-2 bg-[#ED0006] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#F9A000] rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-8 h-[22px] bg-[#006FCF] border border-[#DCDCDC] flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AE</span>
                    </div>
                  </div>
                </div>
                
                {formData.paymentMethod === 'card' && (
                  <div className="p-4 space-y-4 border-t border-[#C8C8C8]">
                    {/* Card Number */}
                    <div className="space-y-2">
                      <label className="text-xl font-medium text-[#969696]">Card number</label>
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        className="w-full p-4 border border-[#C8C8C8] text-xl focus:outline-none focus:border-black"
                      />
                    </div>

                    {/* Expiration and Security Code */}
                    <div className="grid grid-cols-2 gap-4 items-end">
                      <div className="space-y-2">
                        <label className="block text-xl font-medium text-[#969696]">Expiration date (MM/YY)</label>
                        <input
                          type="text"
                          value={formData.expirationDate}
                          onChange={(e) => handleInputChange('expirationDate', e.target.value)}
                          className="w-full p-4 border border-[#C8C8C8] text-xl focus:outline-none focus:border-black"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xl font-medium text-[#969696]">Security code</label>
                        <input
                          type="text"
                          value={formData.securityCode}
                          onChange={(e) => handleInputChange('securityCode', e.target.value)}
                          className="w-full p-4 border border-[#C8C8C8] text-xl focus:outline-none focus:border-black"
                        />
                      </div>
                    </div>

                    {/* Name on Card */}
                    <div className="space-y-2">
                      <label className="text-xl font-medium text-[#969696]">Name on card</label>
                      <input
                        type="text"
                        value={formData.nameOnCard}
                        onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                        className="w-full p-4 border border-[#C8C8C8] text-xl focus:outline-none focus:border-black"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* PayPal Option */}
              <div className={`border ${formData.paymentMethod === 'paypal' ? 'border-black' : 'border-[#C8C8C8]'}`}>
                <div className="flex items-center gap-4 p-4">
                  <label className="flex items-center gap-2 cursor-pointer flex-1">
                    <div className="relative">
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={() => handleInputChange('paymentMethod', 'paypal')}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border border-black flex items-center justify-center bg-[#F2F2F2]`}>
                        {formData.paymentMethod === 'paypal' && (
                          <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                        )}
                      </div>
                    </div>
                    <span className="text-base font-medium">PayPal</span>
                  </label>
                  
                  {/* PayPal Icon */}
                  <div className="w-8 h-[22px] bg-white border border-[#DCDCDC] flex items-center justify-center">
                    <div className="flex gap-px">
                      <div className="w-3 h-2 bg-[#253B80]"></div>
                      <div className="w-3 h-2 bg-[#179BD7]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Billing Address Section */}
          <div className="space-y-4 mb-10">
            <div className="space-y-1">
              <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-4%]">Billing Address</h2>
              <p className="text-base font-medium text-[#969696]">Select the address that matches your card or payment method.</p>
            </div>
            
            <div className="space-y-0">
              {/* Same as Shipping */}
              <div className={`flex items-center gap-4 p-4 border ${formData.billingAddress === 'same' ? 'border-black' : 'border-[#C8C8C8]'} border-b-0`}>
                <label className="flex items-center gap-2 cursor-pointer flex-1">
                  <div className="relative">
                    <input
                      type="radio"
                      name="billingAddress"
                      checked={formData.billingAddress === 'same'}
                      onChange={() => handleInputChange('billingAddress', 'same')}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border border-black flex items-center justify-center bg-[#F2F2F2]`}>
                      {formData.billingAddress === 'same' && (
                        <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-base font-medium">Same as shipping address</span>
                </label>
              </div>

              {/* Different Address */}
              <div className={`flex items-center gap-4 p-4 border ${formData.billingAddress === 'different' ? 'border-black' : 'border-[#C8C8C8]'}`}>
                <label className="flex items-center gap-2 cursor-pointer flex-1">
                  <div className="relative">
                    <input
                      type="radio"
                      name="billingAddress"
                      checked={formData.billingAddress === 'different'}
                      onChange={() => handleInputChange('billingAddress', 'different')}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border border-black flex items-center justify-center bg-[#F2F2F2]`}>
                      {formData.billingAddress === 'different' && (
                        <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-base font-medium">Use a different billing address</span>
                </label>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mb-10">
            <button
              onClick={handleReturnToShipping}
              className="text-xl font-medium text-black hover:underline"
            >
              Return to Shipping
            </button>
            <Button
              variant="secondary"
              size="small"
              onClick={handleCompleteOrder}
            >
              Complete Order
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
            <div className="w-full h-px bg-[#C8C8C8]"></div>

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
            <div className="w-full h-px bg-[#C8C8C8]"></div>

            {/* Totals */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-[#969696]">Subtotal</span>
                <span className="text-base font-medium text-black">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-[#969696]">Shipping</span>
                <span className="text-base font-medium text-black">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base font-medium text-[#969696]">Tax</span>
                <span className="text-base font-medium text-black">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-end pt-2">
                <div className="pb-0.5">
                  <span className="text-base font-medium text-black">Total</span>
                </div>
                <span className="text-2xl font-medium text-black">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPaymentPage;
