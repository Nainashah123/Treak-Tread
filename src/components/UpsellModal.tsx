import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShopNow: () => void;
  autoCloseDelay?: number; // in milliseconds
}

const UpsellModal: React.FC<UpsellModalProps> = ({ 
  isOpen, 
  onClose, 
  onShopNow,
  autoCloseDelay = 600000 // 10 minutes default
}) => {
  const [timeLeft, setTimeLeft] = useState(9); // 9 minutes
  const [secondsLeft, setSecondsLeft] = useState(59); // 59 seconds
  const [selectedColor, setSelectedColor] = useState('red');

  const colors = [
    { name: 'red', value: '#EE2B1C', selected: selectedColor === 'red' },
    { name: 'blue', value: '#284CB7', selected: selectedColor === 'blue' },
    { name: 'black', value: '#000000', selected: selectedColor === 'black' }
  ];

  useEffect(() => {
    if (!isOpen) return;

    // Reset timer when modal opens
    const totalSeconds = autoCloseDelay / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    setTimeLeft(minutes);
    setSecondsLeft(seconds);

    // Countdown timer
    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          setTimeLeft(prevTime => {
            if (prevTime <= 1) {
              onClose();
              return 0;
            }
            return prevTime - 1;
          });
          return 59;
        }
        return prev - 1;
      });
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, [isOpen, onClose, autoCloseDelay]);

  const handleShopNow = () => {
    console.log('Adding sunglasses to order:', selectedColor);
    onShopNow();
    onClose();
  };

  const handleDecline = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[#F2F2F2] border border-black w-[1200px] h-[660px] flex">
        {/* Product Image */}
        <div className="w-[600px] h-[660px] relative overflow-hidden">
          <img 
            src="/images/upsell-sunglasses-modal.png" 
            alt="Sunglasses"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Vertical Line */}
        <div className="w-px bg-black"></div>

        {/* Content */}
        <div className="flex-1 p-10 flex flex-col justify-center gap-6">
          {/* Header + Text */}
          <div className="space-y-2">
            <h2 className="text-4xl font-medium text-black leading-[1.1] tracking-[-4%]">
              Limited-Time Offer
            </h2>
            <p className="text-base font-medium text-black leading-[1.1]">
              Add this customer-favourite to your order. Hurry-up, your special offer ends in {timeLeft}:{secondsLeft.toString().padStart(2, '0')}
            </p>
          </div>

          {/* Color Selection */}
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <span className="text-xl font-medium text-[#969696]">Color:</span>
              <span className="text-xl font-medium text-black capitalize">{selectedColor}</span>
            </div>
            
            <div className="flex gap-0">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-[42px] h-[42px] p-2 flex items-center justify-center ${
                    color.selected ? 'border border-black' : ''
                  }`}
                >
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: color.value }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <Button
              variant="primary"
              size="small"
              className="w-full"
              onClick={handleShopNow}
            >
              Shop Now - $49.99 <span className="line-through">$69.99</span>
            </Button>
            <Button
              variant="secondary"
              size="small"
              className="w-full"
              onClick={handleDecline}
            >
              Decline Offer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsellModal;



