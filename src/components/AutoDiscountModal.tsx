import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import InputField from './ui/InputField';

interface AutoDiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  autoCloseDelay?: number; // in milliseconds
}

const AutoDiscountModal: React.FC<AutoDiscountModalProps> = ({ 
  isOpen, 
  onClose, 
  autoCloseDelay = 10000 // 10 seconds default
}) => {
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(autoCloseDelay / 1000);

  useEffect(() => {
    if (!isOpen) return;

    // Reset timer when modal opens
    setTimeLeft(autoCloseDelay / 1000);

    // Auto-close timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onClose, autoCloseDelay]);

  const handleClaimDiscount = () => {
    // Handle discount claim logic here
    console.log('Claiming 20% off with email:', email);
    onClose();
  };

  const handleMaybeNextTime = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with tone overlay */}
      <div 
        className="absolute inset-0 bg-black/20" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#F2F2F2] border border-black w-[1200px] h-[660px] flex">
        {/* Product Image */}
        <div className="w-[600px] h-[660px] relative overflow-hidden">
          <img 
            src="/images/modal-shoe-image-477a7b.png" 
            alt="Product"
            className="w-full h-full object-cover object-center"
            style={{
              objectPosition: 'center center',
              transform: 'scale(1.1)' // Slight zoom to fill better
            }}
          />
        </div>

        {/* Vertical Line */}
        <div className="w-px bg-black"></div>

        {/* Content */}
        <div className="flex-1 p-10 flex flex-col justify-center gap-6">
          {/* Header + Text */}
          <div className="space-y-2">
            <h2 className="text-4xl font-medium text-black">Get 20% Off</h2>
            <p className="text-base font-medium text-black">
              Subscribe with your email to receive 20% off your first purchase.
            </p>
          </div>

          {/* Input Field */}
          <div className="space-y-2">
            <InputField
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button
              variant="primary"
              size="small"
              className="flex-1"
              onClick={handleClaimDiscount}
            >
              Claim 20% Off
            </Button>
            <Button
              variant="secondary"
              size="small"
              className="flex-1"
              onClick={handleMaybeNextTime}
            >
              Maybe Next Time
            </Button>
          </div>

          {/* Auto-close indicator */}
          <div className="text-center text-sm text-gray-600">
            This offer will close in {timeLeft} seconds
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 w-11 h-11 flex items-center justify-center z-10"
        >
          <svg className="w-[12.2px] h-[12.2px]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AutoDiscountModal;
