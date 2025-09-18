import React from 'react';
import Button from './Button';

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  category,
  title,
  description,
  className = ''
}) => {
  return (
    <div className={`flex-1 ${className}`}>
      {/* Article Image */}
      <div className="h-[640px] bg-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Info */}
      <div className="p-6 flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-medium text-[#969696]">
            {category}
          </span>
          <h3 className="text-5xl leading-[1.1] font-medium text-black tracking-[-4%]">
            {title}
          </h3>
          <p className="text-2xl font-medium text-black">
            {description}
          </p>
        </div>
        
        <Button variant="secondary" showArrow={true} className="w-fit">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default ArticleCard;

