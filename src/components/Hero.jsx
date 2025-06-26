import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import Navigation from './Navigation';

export default function Hero({ onScrollToNext, onSectionChange, currentSection }) {
  return (
    <div className="relative min-h-screen flex items-start justify-center pt-24 px-6">
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 text-center w-full">
        {/* Title */}
        <div className="w-full max-w-none mx-auto mb--10 flex items-center scale-120">
          <motion.h1
            initial={{ y: 130 }}
            animate={{ y: -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full text-[clamp(3rem,12vw,20rem)] font-extrabold font-inter tracking-tight text-black text-center mb-4"
          >
            SABRINA PARK
          </motion.h1>
        </div>

        {/* Navigation bar */}
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: -160, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <Navigation onSectionChange={onSectionChange} currentSection={currentSection} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-inter font-bold text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          I craft digital experiences that blend beautiful design with
          powerful functionality. Welcome to my creative universe.
        </motion.p>

        {/* Buttons */}
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
            className="bg-blue-100 hover:bg-blue-300 text-blue-900 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={onScrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-300 flex flex-col items-center"
      >
        <span className="mb-1 text-xs font-medium text-slate-500">Scroll Down</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}
