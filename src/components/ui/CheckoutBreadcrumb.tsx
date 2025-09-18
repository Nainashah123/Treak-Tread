import React from 'react';

interface BreadcrumbStep {
  label: string;
  completed: boolean;
  current: boolean;
}

interface CheckoutBreadcrumbProps {
  currentStep: 'cart' | 'information' | 'shipping' | 'payment';
}

const CheckoutBreadcrumb: React.FC<CheckoutBreadcrumbProps> = ({ currentStep }) => {
  const steps: BreadcrumbStep[] = [
    {
      label: 'Cart',
      completed: currentStep !== 'cart',
      current: currentStep === 'cart'
    },
    {
      label: 'Information', 
      completed: currentStep === 'shipping' || currentStep === 'payment',
      current: currentStep === 'information'
    },
    {
      label: 'Shipping',
      completed: currentStep === 'payment',
      current: currentStep === 'shipping'
    },
    {
      label: 'Payment',
      completed: false,
      current: currentStep === 'payment'
    }
  ];

  return (
    <div className="flex items-center gap-2">
      {steps.map((step, index) => (
        <React.Fragment key={step.label}>
          <span 
            className={`text-base font-medium text-black relative ${
              step.completed ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black' : ''
            }`}
          >
            {step.label}
          </span>
          {index < steps.length - 1 && (
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CheckoutBreadcrumb;
