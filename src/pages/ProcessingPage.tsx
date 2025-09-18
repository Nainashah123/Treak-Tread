import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProcessingPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate processing time and redirect after 3 seconds
    const timer = setTimeout(() => {
      // Redirect to order tracking page
      console.log('Order processed successfully');
      navigate('/order/tracking');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center gap-6">
      {/* Spinner */}
      <div className="relative">
        <div className="w-20 h-20 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
      </div>

      {/* Text Content */}
      <div className="w-[400px] text-center space-y-1">
        <h1 className="text-xl font-medium text-black">
          Your order's being processed
        </h1>
        <p className="text-base font-medium text-[#969696] text-center">
          If you're not automatically redirected, refresh this page
        </p>
      </div>
    </div>
  );
};

export default ProcessingPage;
