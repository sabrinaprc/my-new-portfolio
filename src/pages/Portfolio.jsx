import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Code, Briefcase, User, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

export default function Portfolio() {
  const [showNamePopup, setShowNamePopup] = useState(true);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNamePopup(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Name Popup */}
        <AnimatePresence>
        {showNamePopup && (
            <motion.div
            key="popup"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            >
            <motion.div
              initial={{ scaleX: 0.5, scaleY: 0.5, opacity: 0 }}
              animate={{ scaleX: .8, scaleY: .8, opacity: 1 }}
              exit={{
                scaleX: 1.3,
                scaleY: 1.2,
                opacity: 1,
                y: [0, 0, "-100%"], // Pause, then move up
              }}
              transition={{
                scaleX: { duration: 0.6, ease: "easeOut" },
                scaleY: { duration: 0.6, ease: "easeOut" },
                opacity: { delay: 0.2, duration: 0.4 },
                y: { delay: 0.4, duration: 0.6, times: [0, 0.5, 1] }, // Pause, then slide up
              }}
              className="text-center origin-center"
            >
                <h1 className="text-8xl md:text-[10rem] font-inter font-bold text-black tracking-tight">
                  Sabrina Park
                </h1>
            </motion.div>
            </motion.div>
        )}
        </AnimatePresence>


      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showNamePopup ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <Navigation currentSection={currentSection} onSectionChange={scrollToSection} />
        
        <div className="relative">
          <section id="hero" className="min-h-screen">
            <Hero onScrollToNext={() => scrollToSection('about')} />
          </section>
          
          <section id="about" className="min-h-screen">
            <About />
          </section>
          
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>
          
          <section id="experience" className="min-h-screen">
            <Experience />
          </section>
          
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </div>
      </motion.div>
      <div className="bg-white font-inter font-bold text-8xl tracking-tight p-8 rounded-xl shadow-lg">
        Creative
        <br />
        <span className="text-black font-bold font-inter">
          Developer
        </span>
      </div>
    </div>
  );
}