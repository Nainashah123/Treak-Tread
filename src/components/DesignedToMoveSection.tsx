import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
  image: string;
}

const DesignedToMoveSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      title: 'Engineered for a Secure Fit, Built for Zero Distractions',
      description: 'Anatomically shaped toe and adaptive lacing ensure all-day comfort with no pressure points.',
      image: '/src/assets/images/feature-image-1.jpg'
    },
    {
      title: 'Soft Landings, Explosive Takeoffs',
      description: 'Dual-density CloudTec® sole delivers cushioned support and energy return in every stride.',
      image: '/src/assets/images/feature-image-2.jpg'
    },
    {
      title: 'Engineered for Everyday Speed',
      description: 'Lightweight heel structure with high-grip rubber keeps you stable — even when you pick up the pace.',
      image: '/src/assets/images/feature-image-3.jpg'
    }
  ];

  return (
    <div className="bg-white">
      {/* Marquee Banner */}
      <div className="bg-lime-400 border-t border-b border-black overflow-hidden">
        <div className="flex items-center py-4 animate-marquee whitespace-nowrap">
          <span className="text-black text-2xl font-medium mx-8">Free shipping on orders over $100</span>
          <span className="w-2 h-2 bg-black rounded-full mx-8"></span>
          <span className="text-black text-2xl font-medium mx-8">Free shipping on orders over $100</span>
          <span className="w-2 h-2 bg-black rounded-full mx-8"></span>
          <span className="text-black text-2xl font-medium mx-8">Free shipping on orders over $100</span>
          <span className="w-2 h-2 bg-black rounded-full mx-8"></span>
          <span className="text-black text-2xl font-medium mx-8">Free shipping on orders over $100</span>
          <span className="w-2 h-2 bg-black rounded-full mx-8"></span>
          <span className="text-black text-2xl font-medium mx-8">Free shipping on orders over $100</span>
          <span className="w-2 h-2 bg-black rounded-full mx-8"></span>
          <span className="text-black text-2xl font-medium mx-8">Free shipping on orders over $100</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="py-16">
        <div className="px-6 mb-6">
          <h2 className="text-6xl lg:text-8xl font-medium tracking-tight">
            Designed to Move
          </h2>
        </div>
        
        {/* Features Grid */}
        <div className="space-y-0">
          {/* Top border */}
          <div className="border-t border-black"></div>
          
          {/* Images Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {features.map((feature, index) => (
              <div key={`image-${index}`} className="aspect-[4/3] bg-gray-200 relative border-r border-black last:border-r-0">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Middle border */}
          <div className="border-t border-black"></div>
          
          {/* Content Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {features.map((feature, index) => (
              <div key={`content-${index}`} className="p-6 space-y-6 min-h-[300px] border-r border-black last:border-r-0">
                <h3 className="text-2xl lg:text-3xl font-medium leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg lg:text-xl leading-relaxed text-gray-800">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Bottom border */}
          <div className="border-t border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default DesignedToMoveSection;
