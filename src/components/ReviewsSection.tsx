import React, { useState } from 'react';
import Button from './ui/Button';
import WriteReviewModal from './WriteReviewModal';

interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  content: string;
  isVerified: boolean;
  images?: string[];
  helpful: number;
  notHelpful: number;
  wouldRecommend: boolean;
}

const ReviewsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sortBy, setSortBy] = useState('Most Recent');
  const [isWriteReviewModalOpen, setIsWriteReviewModalOpen] = useState(false);

  const reviewImages = [
    '/src/assets/images/review-image-1.jpg',
    '/src/assets/images/review-image-2.jpg',
    '/src/assets/images/review-image-3-249012.jpg',
    '/src/assets/images/review-image-4.jpg',
    '/src/assets/images/review-image-5.jpg'
  ];

  const reviews: Review[] = [
    {
      id: '1',
      author: 'Alex Martinez',
      date: 'Aug 23, 2025',
      rating: 5,
      content: 'These sneakers are incredibly light yet supportive. I wear them for both gym workouts and daily walks — no foot fatigue at all.',
      isVerified: true,
      images: ['/src/assets/images/review-image-1.jpg'],
      helpful: 12,
      notHelpful: 0,
      wouldRecommend: true
    },
    {
      id: '2',
      author: 'Sarah Davis',
      date: 'Aug 20, 2025',
      rating: 5,
      content: 'Perfect balance of style and performance. I\'ve received so many compliments, and they\'re just as good for running as they are for casual wear.',
      isVerified: true,
      images: [
        '/src/assets/images/review-image-2.jpg',
        '/src/assets/images/review-image-3-249012.jpg',
        '/src/assets/images/review-image-5.jpg'
      ],
      helpful: 93,
      notHelpful: 0,
      wouldRecommend: true
    },
    {
      id: '3',
      author: 'Jessica Lee',
      date: 'Aug 19, 2025',
      rating: 5,
      content: 'Comfort is top-notch, but I recommend sizing up half a size if you like a roomier fit. Still, one of the best pairs I\'ve owned.',
      isVerified: true,
      images: [
        '/src/assets/images/review-image-4.jpg',
        '/src/assets/images/review-image-3-249012.jpg'
      ],
      helpful: 96,
      notHelpful: 0,
      wouldRecommend: true
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg key={i} className="w-6 h-6 fill-current text-black" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ));
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white py-16">
      {/* Header */}
      <div className="flex justify-between items-center px-6 mb-6">
        <h2 className="text-6xl lg:text-8xl font-medium tracking-tight">Reviews</h2>
        <Button 
          variant="primary" 
          size="large"
          onClick={() => setIsWriteReviewModalOpen(true)}
        >
          Write a Review
        </Button>
      </div>

      {/* Review Images Row */}
      <div className="space-y-0">
        <div className="border-t border-black"></div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-0">
          {reviewImages.map((image, index) => (
            <div key={index} className="aspect-square bg-gray-200 border-r border-black last:border-r-0">
              <img 
                src={image} 
                alt={`Review image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="border-t border-black"></div>
      </div>

      {/* Slider Controls */}
      <div className="flex justify-between items-center px-6 py-6">
        <div className="flex gap-2">
          {Array.from({ length: 4 }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentSlide 
                  ? 'bg-black' 
                  : 'border border-black bg-transparent hover:bg-gray-200'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
        <div className="flex gap-0">
          <button
            onClick={goToPrevious}
            className="w-14 h-14 bg-transparent border border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous reviews"
          >
            <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="w-14 h-14 bg-transparent border border-black border-l-0 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next reviews"
          >
            <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Reviews Summary and Sort */}
      <div className="border-t border-black">
        <div className="flex items-center justify-between p-6 border-b border-black">
          <div className="flex items-center gap-12">
            <div className="text-center p-8">
              <div className="text-3xl lg:text-5xl font-medium">246</div>
              <div className="text-lg lg:text-xl">Total Reviews</div>
            </div>
            <div className="text-center p-8">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl lg:text-5xl font-medium">5.0</span>
                <div className="flex">
                  {renderStars()}
                </div>
              </div>
              <div className="text-lg lg:text-xl">Average Rating</div>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="small"
            onClick={() => setSortBy(sortBy === 'Most Recent' ? 'Highest Rated' : 'Most Recent')}
          >
            Sort by ({sortBy})
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </Button>
        </div>
      </div>

      {/* Individual Reviews */}
      {reviews.map((review) => (
        <div key={review.id} className="border-b border-black">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Review Meta */}
            <div className="lg:col-span-2 p-8 space-y-2 border-r border-black">
              <div className="text-lg lg:text-xl">{review.date}</div>
              <div className="text-lg lg:text-xl font-medium">{review.author}</div>
              <div className="flex items-center gap-1">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-lg lg:text-xl">Verified Buyer</span>
              </div>
            </div>
            
            {/* Review Content */}
            <div className="lg:col-span-8 p-8 space-y-6 border-r border-black">
              <div className="space-y-4">
                <div className="flex">
                  {renderStars()}
                </div>
                <p className="text-xl lg:text-2xl leading-relaxed">{review.content}</p>
              </div>
              
              {review.images && (
                <div className="flex gap-4">
                  {review.images.map((image, index) => (
                    <div key={index} className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-200">
                      <img 
                        src={image} 
                        alt={`Review image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
              
              <p className="text-lg lg:text-xl text-gray-600">
                {review.wouldRecommend ? 'Yes, I would recommend this to a friend' : 'No, I would not recommend this to a friend'}
              </p>
            </div>
            
            {/* Review Actions */}
            <div className="lg:col-span-2 p-8 flex flex-col justify-center gap-2">
              <Button variant="outline" size="small" className="flex items-center gap-2">
                {review.helpful}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>
              </Button>
              <Button variant="outline" size="small" className="flex items-center gap-2">
                {review.notHelpful}
                <svg className="w-5 h-5 rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Show More Button */}
      <div className="border-t border-black pt-6 text-center">
        <Button variant="outline" size="large">
          Show More
        </Button>
      </div>

      {/* Write Review Modal */}
      <WriteReviewModal 
        isOpen={isWriteReviewModalOpen}
        onClose={() => setIsWriteReviewModalOpen(false)}
      />
    </div>
  );
};

export default ReviewsSection;

