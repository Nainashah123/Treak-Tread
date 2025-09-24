import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';

const ServerErrorPage: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Header />
      
      {/* Error Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center gap-8">
            {/* Error Message */}
            <div className="flex flex-col gap-6 max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-medium leading-tight tracking-tight text-black">
                Something Went Wrong
              </h1>
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-black max-w-2xl mx-auto">
                We're experiencing some technical issues on our end. Our team is working hard to fix this. Please try refreshing the page or come back later. We apologize for the inconvenience.
              </p>
            </div>
            
            {/* Refresh Button */}
            <div className="flex justify-center">
              <Button 
                variant="primary" 
                size="large"
                onClick={handleRefresh}
                className="bg-black text-white border border-gray-200 px-8 py-6 text-xl font-medium hover:bg-gray-800 transition-colors"
              >
                <svg 
                  className="w-6 h-6 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                  />
                </svg>
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServerErrorPage;

