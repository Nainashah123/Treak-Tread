import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Instagram images
import instagram1 from '../assets/images/instagram-1.png';
import instagram2 from '../assets/images/instagram-2-6e2546.png';
import instagram3 from '../assets/images/instagram-3.png';
import instagram4 from '../assets/images/instagram-4.png';

const InstagramSection: React.FC = () => {
  const instagramImages = [
    {
      id: 1,
      image: instagram1,
      alt: "Instagram post 1"
    },
    {
      id: 2,
      image: instagram2,
      alt: "Instagram post 2"
    },
    {
      id: 3,
      image: instagram3,
      alt: "Instagram post 3"
    },
    {
      id: 4,
      image: instagram4,
      alt: "Instagram post 4"
    }
  ];

  return (
    <section className="py-10">
      <div className="px-6 flex flex-col gap-2">
        <h2 className="text-[96px] leading-[1.1] font-medium text-black tracking-[-4%]">
          Follow Us on Instagram
        </h2>
        <p className="text-3xl leading-[1.1] font-medium text-[#969696] tracking-[-4%]">
          @track&tread
        </p>
      </div>

      <div className="flex flex-col mt-6">
        {/* Top border */}
        <div className="h-px bg-black" />
        
        {/* Instagram Images Row */}
        <div className="flex">
          {instagramImages.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="flex-1">
                <div className="h-[480px] bg-cover bg-center overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {index < instagramImages.length - 1 && (
                <div className="w-px bg-black" />
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Bottom border */}
        <div className="h-px bg-black" />
      </div>

      {/* Slider Controls */}
      <div className="flex justify-between items-center px-6 mt-6">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 bg-black rounded-full" />
          <div className="w-2.5 h-2.5 border border-black rounded-full" />
          <div className="w-2.5 h-2.5 border border-black rounded-full" />
          <div className="w-2.5 h-2.5 border border-black rounded-full" />
        </div>
        
        <div className="flex gap-0">
          <button className="w-14 h-14 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-9 h-9 text-black" />
          </button>
          <button className="w-14 h-14 flex items-center justify-center hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-9 h-9 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
