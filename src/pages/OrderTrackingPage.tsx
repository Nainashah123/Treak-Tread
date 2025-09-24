import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import ThankYouDiscountModal from '../components/ThankYouDiscountModal';
import UpsellModal from '../components/UpsellModal';

const OrderTrackingPage: React.FC = () => {
  const navigate = useNavigate();
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [saveInfo, setSaveInfo] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  // Show thank you modal after payment completion
  useEffect(() => {
    // Simulate showing modal after payment is completed
    const timer = setTimeout(() => {
      setShowThankYouModal(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Show upsell modal after thank you modal is closed
  const handleThankYouModalClose = () => {
    setShowThankYouModal(false);
    // Show upsell modal after a short delay
    setTimeout(() => {
      setShowUpsellModal(true);
    }, 1000);
  };

  const handleUpsellShopNow = () => {
    // Handle adding sunglasses to order
    console.log('Adding sunglasses to order');
    // You could navigate to cart or show success message
  };

  // Mock order data
  const orderData = {
    confirmationNumber: 'JFNS7GS4',
    customerName: 'John',
    email: 'johndoe@example.com',
    paymentMethod: 'Visa ****1234',
    shippingAddress: {
      name: 'John Doe',
      street: "206 Batran's Street, 39",
      city: 'Ottawa',
      province: 'Ontario',
      postalCode: '2044',
      country: 'Canada'
    },
    billingAddress: {
      name: 'John Doe',
      street: "206 Batran's Street, 39",
      city: 'Ottawa',
      province: 'Ontario',
      postalCode: '2044',
      country: 'Canada'
    },
    shippingMethod: 'FedEx Ground'
  };

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

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleTrackOrder = () => {
    // Simple tracking alert with order details
    alert(`🚚 Tracking Order #${orderData.confirmationNumber}

📦 Status: Confirmed - Preparing for shipment
📍 Delivering to: ${orderData.shippingAddress.street}, ${orderData.shippingAddress.city}
🚛 Method: ${orderData.shippingMethod}
📅 Expected: 3-5 business days

You'll receive email updates as your order progresses!`);
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

          {/* Confirmation Header */}
          <div className="flex items-center gap-2 mb-10">
            {/* Check Circle Icon */}
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-base font-medium text-[#969696]">Confirmation #{orderData.confirmationNumber}</p>
              <h1 className="text-2xl font-medium leading-[1.1] tracking-[-4%]">Thank You, {orderData.customerName}!</h1>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-10">
            {/* Simple Map Placeholder */}
            <div className="w-[664px] h-[200px] bg-gradient-to-br from-blue-50 to-green-50 relative mb-0 overflow-hidden border border-gray-200 flex items-center justify-center">
              {/* Location Pin */}
              <div className="absolute">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13C19 5.13 15.87 2 12 2z"/>
                </svg>
              </div>
              {/* Map Label */}
              <div className="absolute top-2 left-2 bg-white bg-opacity-90 px-2 py-1 text-xs rounded shadow">
                📍 Ottawa, ON - Delivery Location
              </div>
            </div>
            
            {/* Order Status Card */}
            <div className="border border-t-0 border-[#C8C8C8] p-4 space-y-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-medium leading-[1.1] tracking-[-4%]">Your Order is Confirmed</h2>
                <p className="text-base font-medium text-[#969696]">
                  Preparing for shipment. Return to this page for shipment status updates.
                </p>
              </div>
              
              <Button
                variant="primary"
                size="small"
                onClick={handleTrackOrder}
              >
                Track Order
              </Button>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={emailUpdates}
                    onChange={(e) => setEmailUpdates(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border border-black flex items-center justify-center ${emailUpdates ? 'bg-black' : 'bg-[#F2F2F2]'}`}>
                    {emailUpdates && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-base font-medium">Email me with updates and special offers</span>
              </label>
            </div>
          </div>

          {/* Order Details */}
          <div className="border border-[#C8C8C8] p-4 mb-10 space-y-4">
            <h2 className="text-2xl font-medium leading-[1.1] tracking-[-4%]">Order Details</h2>
            
            {/* Contact and Payment Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-base font-medium text-[#969696]">Contact information</h3>
                <p className="text-base font-medium">{orderData.email}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-[#969696]">Payment method</h3>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-[22px] bg-white border border-[#DCDCDC] flex items-center justify-center">
                    <div className="w-6 h-2 bg-[#1434CB] rounded-sm"></div>
                  </div>
                  <span className="text-base font-medium">{orderData.paymentMethod}</span>
                </div>
              </div>
            </div>
            
            {/* Addresses Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-base font-medium text-[#969696]">Shipping address</h3>
                <div className="space-y-1">
                  <p className="text-base font-medium">{orderData.shippingAddress.name}</p>
                  <p className="text-base font-medium">{orderData.shippingAddress.province}, {orderData.shippingAddress.city}, {orderData.shippingAddress.postalCode}</p>
                  <p className="text-base font-medium">{orderData.shippingAddress.street}</p>
                  <p className="text-base font-medium">{orderData.shippingAddress.country}</p>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-medium text-[#969696]">Billing address</h3>
                <div className="space-y-1">
                  <p className="text-base font-medium">{orderData.billingAddress.name}</p>
                  <p className="text-base font-medium">{orderData.billingAddress.province}, {orderData.billingAddress.city}, {orderData.billingAddress.postalCode}</p>
                  <p className="text-base font-medium">{orderData.billingAddress.street}</p>
                  <p className="text-base font-medium">{orderData.billingAddress.country}</p>
                </div>
              </div>
            </div>
            
            {/* Shipping Method Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="text-base font-medium text-[#969696]">Shipping method</h3>
                <p className="text-base font-medium">{orderData.shippingMethod}</p>
              </div>
              <div></div>
            </div>
            
            <label className="flex items-center gap-2 cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={saveInfo}
                  onChange={(e) => setSaveInfo(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 border border-black flex items-center justify-center ${saveInfo ? 'bg-black' : 'bg-[#F2F2F2]'}`}>
                  {saveInfo && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-base font-medium">Save my information for a faster checkout</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mb-10">
            <button className="text-base font-medium text-black hover:underline">
              Need help? Contact us
            </button>
            <Button
              variant="secondary"
              size="small"
              onClick={handleContinueShopping}
            >
              Continue Shopping
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

      {/* Thank You Discount Modal */}
      <ThankYouDiscountModal
        isOpen={showThankYouModal}
        onClose={handleThankYouModalClose}
        autoCloseDelay={1200000} // 20 minutes
      />

      {/* Upsell Modal */}
      <UpsellModal
        isOpen={showUpsellModal}
        onClose={() => setShowUpsellModal(false)}
        onShopNow={handleUpsellShopNow}
        autoCloseDelay={600000} // 10 minutes
      />
    </div>
  );
};

export default OrderTrackingPage;
