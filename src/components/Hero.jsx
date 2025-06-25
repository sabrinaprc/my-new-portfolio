import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Hero({ onScrollToNext }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 text-center w-full">

        {/* Title: NO fade, only slide up */}
        <div className="w-full max-w-5xl mx-auto px-4">
          <motion.h1
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="
              font-inter font-extrabold 
              text-9xl 
              tracking-tight 
              text-black 
              text-center 
              leading-none 
              w-full
              scale-120
            "
          >
            SABRINA PARK
          </motion.h1>
        </div>

        {/* Fade in the subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-inter font-bold text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          I craft digital experiences that blend beautiful design with
          powerful functionality. Welcome to my creative universe.
        </motion.p>

        {/* Fade in the buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="blue"
            size="lg"
            className="px-8 py-4 rounded-full"
            onClick={onScrollToNext}
          >
            Explore My Work
          </Button>
          <button
            variant="outline"
            size="lg"
            className="bg-blue-100 hover:bg-blue-300 text-blue-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </button>
        </motion.div>
      </div>

      {/* Fade in the scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={onScrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-300 flex flex-col items-center"
      >
        <span className="mb-1 text-xs font-medium text-slate-500">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}