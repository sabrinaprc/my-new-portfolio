import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Hero({ onScrollToNext }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 text-center w-full">
        <motion.div
          initial={{  y: 50 }}
          animate={{  y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100 mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">Available for work</span>
          </div>
        </motion.div>

        {/* This is the matched title */}
        <div className="w-full max-w-5xl mx-auto px-4">
          <motion.h1
            // Remove fade-in by not animating opacity
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
              scale-x-120
            "
          >
            SABRINA PARK
          </motion.h1>
        </div>

        <motion.p
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-inter font-bold text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          I craft digital experiences that blend beautiful design with
          powerful functionality. Welcome to my creative universe.
        </motion.p>

        <motion.div
          initial={{ y: 30 }}
          animate={{y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
            onClick={onScrollToNext}
          >
            Explore My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
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