import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

interface HeroArticleSectionProps {
  category: string;
  title: string;
  description: string;
  image: string;
  articleId?: number;
  className?: string;
}

const HeroArticleSection: React.FC<HeroArticleSectionProps> = ({
  category,
  title,
  description,
  image,
  articleId = 1,
  className = ''
}) => {
  return (
    <section className={`w-full ${className}`}>
      <div className="flex flex-col">
        {/* Top border */}
        <div className="h-px bg-black" />
        
        {/* Hero Article Row */}
        <div className="flex">
          {/* Vertical line */}
          <div className="w-px bg-black" />
          
          {/* Content */}
          <div className="flex-1 flex">
            <div className="flex-1 p-6 lg:p-24 lg:pr-32 flex flex-col justify-center gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-xl font-medium text-[#969696]">
                  {category}
                </span>
                <h1 className="text-4xl lg:text-6xl leading-[1.1] font-medium text-black tracking-[-4%]">
                  {title}
                </h1>
                <p className="text-xl lg:text-2xl font-medium text-black">
                  {description}
                </p>
              </div>
              
              <Link to={`/journal/article/${articleId}`}>
                <Button variant="secondary" showArrow={true} className="w-fit">
                  Read More
                </Button>
              </Link>
            </div>
            
            {/* Hero Image */}
            <div className="flex-1 h-[960px] bg-gray-100 overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Bottom border */}
        <div className="h-px bg-black" />
      </div>
    </section>
  );
};

export default HeroArticleSection;
