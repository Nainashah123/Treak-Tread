import React, { useState } from 'react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Here you would typically handle actual video play/pause functionality
    console.log(isPlaying ? 'Pausing video' : 'Playing video');
  };

  return (
    <div 
      className="h-[800px] bg-cover bg-center relative flex items-center justify-center border-b border-black"
      style={{ 
        backgroundImage: 'url(/src/assets/images/video-background.jpg)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
      }}
    >
      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="w-16 h-16 bg-gray-100 border border-black rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          // Pause Icon - two vertical bars
          <div className="flex gap-1">
            <div className="w-1.5 h-4 bg-black"></div>
            <div className="w-1.5 h-4 bg-black"></div>
          </div>
        ) : (
          // Play Icon - triangle pointing right
          <svg 
            className="w-6 h-6 ml-0.5" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default VideoSection;
