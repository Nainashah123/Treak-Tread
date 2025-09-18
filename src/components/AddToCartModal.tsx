import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';

interface CartItem {
  id: string;
  name: string;
  price: number;
  comparePrice?: number;
  image: string;
  color?: string;
  size?: string;
  quantity: number;
}

interface AddToCartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddToCartModal: React.FC<AddToCartModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Nimbus Glide Icecore',
      price: 343.99,
      comparePrice: 529.99,
      image: '/src/assets/images/product-main-image.jpg',
      color: 'Ice Blue',
      quantity: 1
    },
    {
      id: '2', 
      name: 'Crimson Velocity',
      price: 69.99,
      image: '/src/assets/images/addon-product-image.jpg',
      quantity: 1
    }
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isEligibleForFreeShipping = subtotal >= 100;
  const shippingThreshold = 100;
  const progressPercentage = Math.min((subtotal / shippingThreshold) * 100, 100);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Modal - Cart Drawer */}
      <div className="relative ml-auto w-[600px] h-full bg-[#F2F2F2] border-l border-black flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 w-11 h-11 flex items-center justify-center z-10"
        >
          <svg className="w-[12.2px] h-[12.2px]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        {/* Header */}
        <div className="px-6 py-6 border-b border-black">
          <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-4%]">Your Cart ({cartItems.length})</h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Progress Bar Section */}
          <div className="px-6 py-8 space-y-2 border-b border-black">
            <p className="text-base font-medium">
              {isEligibleForFreeShipping 
                ? "You're getting free shipping!" 
                : `You're $${(shippingThreshold - subtotal).toFixed(2)} away from free shipping`
              }
            </p>
            <div className="relative">
              <div className="w-full h-1.5 bg-[#DCDCDC] -mb-2"></div>
              <div 
                className={`h-1.5 ${isEligibleForFreeShipping ? 'bg-[#1CCA00]' : 'bg-black'}`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart Message */
            <div className="flex-1 flex items-center justify-center py-24">
              <p className="text-xl font-medium">Your cart is empty</p>
            </div>
          ) : (
            /* Cart Items */
            <div className="space-y-0">
              {cartItems.map((item, index) => (
                <div key={item.id} className={`border-b border-black ${index === cartItems.length - 1 ? '' : ''}`}>
                  <div className="flex p-4">
                    {/* Product Image */}
                    <div className="w-[150px] h-[150px] bg-gray-200 mr-4 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Vertical Line */}
                    <div className="w-px bg-black mr-4 flex-shrink-0"></div>
                    
                    {/* Product Info */}
                    <div className="flex-1 flex justify-between">
                      {/* Left Content */}
                      <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                          <h3 className="text-base font-medium">{item.name}</h3>
                          {item.color && (
                            <div className="flex items-center gap-1">
                              <div className="w-4 h-4 rounded-full bg-[#CAE1E4] border border-black"></div>
                              <span className="text-base font-medium">{item.color}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-[34px] h-[34px] flex items-center justify-center opacity-50 hover:opacity-100"
                          >
                            <svg className="w-[9.75px] h-[1.13px]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 13H5v-2h14v2z"/>
                            </svg>
                          </button>
                          <div className="w-[42px] h-[34px] flex items-center justify-center border-l border-r border-black">
                            <span className="text-base font-medium">{item.quantity}</span>
                          </div>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-[34px] h-[34px] flex items-center justify-center hover:opacity-75"
                          >
                            <svg className="w-[12.75px] h-[12.75px]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                      {/* Right Content */}
                      <div className="flex flex-col justify-between items-end h-[118px]">
                        <div className="text-right space-y-1">
                          <div className="text-base font-medium">${item.price}</div>
                          {item.comparePrice && (
                            <div className="text-base text-[#969696] line-through">${item.comparePrice}</div>
                          )}
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="w-[22px] h-[22px] flex items-center justify-center hover:opacity-75"
                        >
                          <svg className="w-[13.75px] h-[15.48px]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-6 border-t border-black space-y-2">
          {cartItems.length > 0 && (
            <>
              {/* Total */}
              <div className="flex justify-between items-end mb-4">
                <div className="flex items-center">
                  <span className="text-xl font-medium">Estimated Total</span>
                </div>
                <span className="text-[32px] font-medium leading-[1.1] tracking-[-4%]">${subtotal.toFixed(2)}</span>
              </div>
              
              {/* Checkout Button */}
              <Button
                variant="secondary"
                size="small"
                className="w-full justify-center mb-2"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
              
              {/* Terms */}
              <p className="text-xs font-medium text-[#969696] text-center">
                By checking out, you agree to our Terms of Use and Privacy Policy.
              </p>
            </>
          )}
          
          {/* Continue Shopping */}
          <Button
            variant={cartItems.length > 0 ? "primary" : "secondary"}
            size="small"
            className="w-full justify-center"
            onClick={onClose}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartModal;
