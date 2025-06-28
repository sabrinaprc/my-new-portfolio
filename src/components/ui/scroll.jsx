import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ScrollIndicators({ onClick }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100); // adjust threshold as needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const indicatorVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <>
      {/* Left Indicator */}
      <motion.div
        initial="visible"
        animate={visible ? 'visible' : 'hidden'}
        variants={indicatorVariants}
        transition={{ duration: 0.5 }}
        className="fixed bottom-8 left-8 z-50"
      >
        <button
          onClick={onClick}
          className="text-slate-400 hover:text-slate-600 transition-colors duration-300 flex flex-col items-center"
        >
          <span className="mb-1 text-xs font-medium text-slate-500">Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>

      {/* Right Indicator */}
      <motion.div
        initial="visible"
        animate={visible ? 'visible' : 'hidden'}
        variants={indicatorVariants}
        transition={{ duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <button
          onClick={onClick}
          className="text-slate-400 hover:text-slate-600 transition-colors duration-300 flex flex-col items-center"
        >
          <span className="mb-1 text-xs font-medium text-slate-500">Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>
    </>
  );
}
