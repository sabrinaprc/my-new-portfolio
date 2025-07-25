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
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full bg-transparent"
      >
        <div className="w-full max-w-none mx-auto flex items-center justify-between px-1 py-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onSectionChange(item.id)}
              className={`px-4 py-2 rounded-none font-inter font-medium text-black bg-transparent transition-all duration-200 ${
                currentSection === item.id
                  ? 'underline underline-offset-8'
                  : 'hover:bg-slate-100'
              }`}
            >
              {item.label}
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
        className="fixed inset-0 z-40 md:hidden bg-black/30 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: isOpen ? 0 : -20 }}
          className="absolute top-0 left-0 w-full bg-transparent border-b border-slate-200"
          onClick={e => e.stopPropagation()}
        >
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => {
                onSectionChange(item.id);
                setIsOpen(false);
              }}
              className={`w-full justify-center px-6 py-4 rounded-none font-inter font-medium text-black bg-transparent border-b border-slate-100 last:border-b-0 ${
                currentSection === item.id ? 'underline underline-offset-8' : 'hover:bg-slate-100'
              }`}
            >
              {item.label}
            </Button>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}