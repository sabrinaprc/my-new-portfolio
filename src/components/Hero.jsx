import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import Navigation from './Navigation';
import PhotoCarousel from './ui/carousel';
import ScrollIndicators from './ui/scroll';

export default function Hero({ onScrollToNext, onSectionChange, currentSection }) {
  return (
    <div className="relative min-h-screen flex flex-col justify-between pt-24 px-6">
      {/* Background layer */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Title only */}
      <div className="w-full max-w-none mx-auto flex flex-col items-center z-20">
        <motion.div
          initial={{ y: 160 }}
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
          <div className="mt-15 mb-5">
            <PhotoCarousel images={['./images/image1.JPG', './images/image2.JPG', './images/image3.JPG']} />
          </div>
          {/* Subtitle */}
          <p className="font-inter font-bold text-lg md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Hello! Welcome to my portfolio. Please take a look around and explore my work :)
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
            <a
              href="/Sabrina Park - Resume copy.docx.pdf"
              download
              className="bg-blue-100 hover:bg-blue-300 text-blue-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 text-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicators onClick={onScrollToNext} />
    </div>
  );
}