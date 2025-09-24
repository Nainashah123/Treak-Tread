import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

interface ThankYouDiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  autoCloseDelay?: number; // in milliseconds
}

const ThankYouDiscountModal: React.FC<ThankYouDiscountModalProps> = ({ 
  isOpen, 
  onClose, 
  autoCloseDelay = 1200000 // 20 minutes default
}) => {
  const [timeLeft, setTimeLeft] = useState(20); // 20 minutes in minutes

  useEffect(() => {
    if (!isOpen) return;

    // Reset timer when modal opens
    setTimeLeft(20);

    // Auto-close timer (20 minutes)
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [isOpen, onClose]);

  const handleTakeAdvantage = () => {
    // Handle taking advantage of the discount
    console.log('Taking advantage of 20% discount');
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
      <div className="relative bg-[#F2F2F2] border border-black w-[660px] p-12 flex flex-col items-center gap-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-0 w-11 h-11 flex items-center justify-center z-10"
        >
          <svg className="w-[12.2px] h-[12.2px]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        {/* Gift Box Icon */}
        <div className="w-12 h-12 flex items-center justify-center">
          <svg 
            className="w-10 h-10 text-black" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect x="3" y="8" width="18" height="12" rx="2" ry="2"/>
            <path d="M12 8V2"/>
            <path d="M8 2h8"/>
            <path d="M7 8h10"/>
            <path d="M12 8v12"/>
            <path d="M8 12h8"/>
          </svg>
        </div>

        {/* Header + Text */}
        <div className="flex flex-col items-center gap-2 w-full">
          <h2 className="text-4xl font-medium text-black text-center leading-[1.1] tracking-[-4%]">
            Enjoy 20% off all items for the next{' '}
            <span className="text-blue-500">{timeLeft} minutes!</span>
          </h2>
          <p className="text-base font-medium text-black text-center leading-[1.1]">
            Thank you for your purchase! As a token of our appreciation, we're offering you an exclusive 20% discount on everything. Hurry, this deal expires soon!
          </p>
        </div>

        {/* Button */}
        <Button
          variant="primary"
          size="small"
          className="w-full"
          onClick={handleTakeAdvantage}
        >
          Take Advantage Now
        </Button>
      </div>
    </div>
  );
};

export default ThankYouDiscountModal;
