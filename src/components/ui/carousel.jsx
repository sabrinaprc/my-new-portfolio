import { useRef, useEffect } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

export default function PhotoCarousel({ images, visibleCount = 3, speed = 60 }) {
  const containerRef = useRef(null);
  const translateX = useRef(0);
  
  // Create enough duplicates to ensure seamless looping
  const duplicatedImages = [...images, ...images, ...images];
  
  // Calculate the width of one complete set of images
  const imageWidth = 320 + 24; // 80*4 (w-80) + 24px gap
  const oneSetWidth = images.length * imageWidth;

  useAnimationFrame((time, delta) => {
    if (containerRef.current && delta) {
      // Move by speed pixels per second
      translateX.current -= (speed * delta) / 1000;
      
      // Reset position when we've moved one complete set
      if (Math.abs(translateX.current) >= oneSetWidth) {
        translateX.current = 0;
      }
      
      containerRef.current.style.transform = `translateX(${translateX.current}px)`;
    }
  });

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center">
        <div 
          className="overflow-hidden"
          style={{ width: `${visibleCount * imageWidth}px` }}
        >
          <div
            ref={containerRef}
            className="flex gap-6"
            style={{
              width: `${duplicatedImages.length * imageWidth}px`,
            }}
          >
            {duplicatedImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`carousel-${idx % images.length}`}
                className="w-80 h-64 object-cover rounded-xl shadow-lg flex-shrink-0"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}