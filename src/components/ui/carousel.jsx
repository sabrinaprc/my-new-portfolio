import { useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

export default function PhotoCarousel({ images, visibleCount = 3, speed = 60 }) {
  // Duplicate images for seamless looping
  const allImages = [...images, ...images];
  const containerRef = useRef(null);

  // Animation state
  useAnimationFrame((t) => {
    if (containerRef.current) {
      // Move left by speed px per second
      const x = -((t / 1000) * speed) % (containerRef.current.scrollWidth / 2);
      containerRef.current.style.transform = `translateX(${x}px)`;
    }
  });

  return (
    <div className="w-full overflow-hidden flex justify-center mb-8">
      <div
        ref={containerRef}
        className="flex gap-6"
        style={{
          width: `calc(${visibleCount} * 22rem)`, // Adjust 22rem to your image width
        }}
      >
        {allImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`carousel-${idx}`}
            className="w-80 h-64 object-cover rounded-xl shadow-lg"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}
