import React from 'react';
import Button from './ui/Button';

const ErrorTestButton: React.FC = () => {
  const triggerServerError = () => {
    // Simulate a server error by throwing an error
    throw new Error('Simulated server error for testing');
  };

  const triggerNetworkError = () => {
    // Simulate a network error
    const error = new Error('Network error');
    (error as any).code = 'NETWORK_ERROR';
    throw error;
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      <Button
        variant="secondary"
        size="small"
        onClick={triggerServerError}
        className="bg-red-500 text-white hover:bg-red-600"
      >
        Test Server Error
      </Button>
      <Button
        variant="secondary"
        size="small"
        onClick={triggerNetworkError}
        className="bg-orange-500 text-white hover:bg-orange-600"
      >
        Test Network Error
      </Button>
    </div>
  );
};

export default ErrorTestButton;

