import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Code, Briefcase, Mail, Menu, X } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Navigation({ currentSection, onSectionChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 hidden md:block transition-all duration-300 ${
          scrollY > 100 ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/70'
        } rounded-full px-6 py-3`}
      >
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onSectionChange(item.id)}
              className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                currentSection === item.id 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
              {currentSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-50 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          scale: isOpen ? 1 : 0.95,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 md:hidden bg-black/50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: isOpen ? 0 : -20 }}
          className="absolute top-20 right-6 bg-white rounded-2xl shadow-xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => {
                onSectionChange(item.id);
                setIsOpen(false);
              }}
              className={`w-full justify-start px-6 py-4 rounded-none border-b border-slate-100 last:border-b-0 ${
                currentSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-slate-600'
              }`}
            >
              <item.icon className="w-4 h-4 mr-3" />
              {item.label}
            </Button>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}