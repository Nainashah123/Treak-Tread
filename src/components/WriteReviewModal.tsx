import React, { useState } from 'react';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WriteReviewModal: React.FC<WriteReviewModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('Great for training sessions. Grip is solid, and they handle quick lateral movements well. Only wish there were more color options.');
  const [name, setName] = useState('Kelly Marshall');
  const [wouldRecommend, setWouldRecommend] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log({
      rating,
      review,
      name,
      wouldRecommend,
      uploadedImage
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gray-100 border border-black w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 bg-gray-100 border border-black flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-center px-8 py-8 border-b border-black">
          <h2 className="text-5xl font-medium tracking-tight">Write a Review</h2>
        </div>

        {/* Form */}
        <div className="px-8 py-8 space-y-6">
          {/* Score */}
          <div className="space-y-2">
            <label className="block text-xl font-medium">Score*</label>
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setRating(i + 1)}
                  className="w-8 h-8 focus:outline-none"
                >
                  <svg 
                    className={`w-full h-full ${i < rating ? 'text-black' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Review */}
          <div className="space-y-2">
            <label className="block text-xl font-medium">Review*</label>
            <div className="border border-black p-4 min-h-[200px]">
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="w-full h-full bg-transparent resize-none outline-none text-xl"
                placeholder="Great for training sessions. Grip is solid, and they handle quick lateral movements well. Only wish there were more color options."
              />
            </div>
          </div>

          {/* Add an Image */}
          <div className="space-y-2">
            <label className="block text-xl font-medium">Add an Image</label>
            
            <div className="space-y-4">
              {uploadedImage && (
                <div className="flex gap-2">
                  <div className="w-36 h-36 bg-gray-200 border border-black">
                    <img 
                      src={uploadedImage} 
                      alt="Uploaded review" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setUploadedImage(null)}
                      className="w-14 h-14 bg-white border border-black flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                      </svg>
                    </button>
                    <label className="w-14 h-14 bg-white border border-black flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                      </svg>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              )}
              
              <label className="inline-flex items-center gap-3 px-6 py-4 bg-white border border-black hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-xl font-medium">Upload</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l5-5 5 5H7z"/>
                </svg>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Your Name */}
          <div className="space-y-2">
            <label className="block text-xl font-medium">Your Name*</label>
            <div className="border border-black p-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent outline-none text-xl"
                placeholder="Kelly Marshall"
              />
            </div>
          </div>

          {/* Bottom Line */}
          <div className="space-y-4">
            <label className="block text-xl font-medium">Bottom Line</label>
            <div className="space-y-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="recommend"
                    checked={wouldRecommend === true}
                    onChange={() => setWouldRecommend(true)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border border-black flex items-center justify-center ${wouldRecommend === true ? 'bg-white' : 'bg-gray-100'}`}>
                    {wouldRecommend === true && (
                      <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                    )}
                  </div>
                </div>
                <span className="text-lg">Yes, I would recommend this to a friend</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="radio"
                    name="recommend"
                    checked={wouldRecommend === false}
                    onChange={() => setWouldRecommend(false)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border border-black flex items-center justify-center ${wouldRecommend === false ? 'bg-white' : 'bg-gray-100'}`}>
                    {wouldRecommend === false && (
                      <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
                    )}
                  </div>
                </div>
                <span className="text-lg">No, I would not recommend this to a friend</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-8">
          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white text-xl font-medium py-4 px-6 border border-black hover:bg-gray-900 transition-colors"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default WriteReviewModal;
