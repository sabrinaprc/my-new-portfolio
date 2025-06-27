import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import Navigation from './Navigation';
import PhotoCarousel from './ui/carousel';

export default function Hero({ onScrollToNext, onSectionChange, currentSection }) {
  return (
    <div className="relative min-h-screen flex flex-col justify-between pt-24 px-6">
      {/* Background layer */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Title only */}
      <div className="w-full max-w-none mx-auto flex flex-col items-center z-20">
        <motion.div
          initial={{ y: 120 }}
          animate={{ y: -110 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <h1 className="scale-120 w-full text-[clamp(3rem,12vw,20rem)] font-extrabold font-inter tracking-tight text-black text-center mb-[-1rem] leading-tight">
            SABRINA PARK
          </h1>
          {/* Navigation with higher z-index and pointer events */}
          <div className="relative z-30 w-full pointer-events-auto">
            <Navigation onSectionChange={onSectionChange} currentSection={currentSection} />
          </div>
        </motion.div>
      </div>
      
      {/* Main content stacked below */}
      <div className="relative z-10 text-center w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: -160 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="mt-20 mb-12">
            <PhotoCarousel images={['/path/to/image1.jpg', '/path/to/image2.jpg']} />
          </div>
          {/* Subtitle */}
          <p className="font-inter font-bold text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            I craft digital experiences that blend beautiful design with powerful functionality. Welcome to my creative universe.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="blue"
              size="lg"
              className="bg-blue-100 hover:bg-blue-300 text-blue-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
              onClick={onScrollToNext}
            >
              Explore My Work
            </Button>
            <button
              className="bg-blue-100 hover:bg-blue-300 text-blue-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Download Resume
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={onScrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-300 flex flex-col items-center z-20"
      >
        <span className="mb-1 text-xs font-medium text-slate-500">Scroll Down</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}