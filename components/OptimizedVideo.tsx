// components/OptimizedVideo.tsx
'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

interface OptimizedVideoProps {
  videoId: string; // YouTube video ID or Vimeo video ID
  provider?: 'youtube' | 'vimeo';
  title: string;
  thumbnail?: string; // Optional custom thumbnail URL
  className?: string;
}

export default function OptimizedVideo({ 
  videoId, 
  provider = 'youtube', 
  title,
  thumbnail,
  className = ''
}: OptimizedVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate thumbnail URL automatically
  const defaultThumbnail = provider === 'youtube' 
    ? `https://img.youtube.com/vi/-34hSeAdBA0/maxresdefault.jpg`
    : `https://vumbnail.com/-34hSeAdBA0.jpg`;

  // Generate embed URL
  const embedUrl = provider === 'youtube'
    ? `https://www.youtube-nocookie.com/embed/-34hSeAdBA0?autoplay=1&rel=0`
    : `https://player.vimeo.com/video/-34hSeAdBA0?autoplay=1`;

  return (
    <div className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl ${className}`}>
      {!isLoaded ? (
        // Thumbnail with Play Button (No iframe loaded yet - saves bandwidth!)
        <button
          onClick={() => setIsLoaded(true)}
          className="absolute inset-0 w-full h-full group cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          {/* Video Thumbnail */}
          <img
            src={thumbnail || defaultThumbnail}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all"></div>
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all shadow-xl">
              <Play className="w-10 h-10 text-blue-600 ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Duration badge (optional) */}
          <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm font-medium">
            ▶ HD
          </div>
        </button>
      ) : (
        // Video iframe loads ONLY when user clicks (performance optimization!)
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      )}
    </div>
  );
}