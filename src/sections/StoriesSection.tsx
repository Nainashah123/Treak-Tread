import React from 'react';
import Button from '../components/ui/Button';

// Import article images
import article1 from '../assets/images/article-1.png';
import article2 from '../assets/images/article-2.png';
import article3 from '../assets/images/article-3-401e31.png';

const StoriesSection: React.FC = () => {
  const articles = [
    {
      id: 1,
      image: article1,
      title: "A Sneaker Designed for the Long Run",
      description: "We break down the technology behind our newest long-distance trainer.",
      alt: "Long distance running sneaker"
    },
    {
      id: 2,
      image: article2,
      title: "Why Rest Days Boost Performance",
      description: "Discover why doing nothing is sometimes the most productive thing for your body.",
      alt: "Rest and recovery"
    },
    {
      id: 3,
      image: article3,
      title: "Fueling Up: What to Eat Before You Train",
      description: "The right foods to boost energy, enhance focus, and sustain stamina.",
      alt: "Pre-workout nutrition"
    }
  ];

  return (
    <section className="py-10">
      <div className="px-6">
        <h2 className="text-[96px] leading-[1.1] font-medium text-black tracking-[-4%] mb-6">
          Stories that Move
        </h2>
      </div>

      <div className="flex flex-col">
        {/* Top border */}
        <div className="h-px bg-black" />
        
        {/* Articles Images Row */}
        <div className="flex">
          {articles.map((article, index) => (
            <React.Fragment key={article.id}>
              <div className="flex-1">
                <div className="h-[640px] bg-cover bg-center overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {index < articles.length - 1 && (
                <div className="w-px bg-black" />
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Middle border */}
        <div className="h-px bg-black" />
        
        {/* Articles Info Row */}
        <div className="flex">
          {articles.map((article, index) => (
            <React.Fragment key={`info-${article.id}`}>
              <div className="flex-1 p-6 flex flex-col justify-center gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-5xl leading-[1.1] font-medium text-black tracking-[-4%]">
                    {article.title}
                  </h3>
                  <p className="text-2xl font-medium text-black">
                    {article.description}
                  </p>
                </div>
                
                <Button variant="secondary" showArrow={true} className="w-fit">
                  Read More
                </Button>
              </div>
              {index < articles.length - 1 && (
                <div className="w-px bg-black" />
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Bottom border */}
        <div className="h-px bg-black" />
      </div>
    </section>
  );
};

export default StoriesSection;
