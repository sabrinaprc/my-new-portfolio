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
const [startBounce, setStartBounce] = useState(false);
const [currentSection, setCurrentSection] = useState('hero');

useEffect(() => {
  const widenDuration = 600;
  const bounceDuration = 1000;
  const totalDuration = widenDuration + bounceDuration + 400; // optional pause

  const bounceTimer = setTimeout(() => {
    setStartBounce(true);
  }, bounceDuration);

  const exitTimer = setTimeout(() => {
    setShowNamePopup(false);
  }, totalDuration);

  return () => {
    clearTimeout(bounceTimer);
    clearTimeout(exitTimer);
  };
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
            initial={{ opacity: 0, scaleX: 1, scaleY: 1 }}
            animate={{
              opacity: [0, 1, 1],
              scaleX: [1, 1, 1.2],
              scaleY: [1, 1, 1.2],
            }}
            transition={{
              opacity: { duration: 0.7, times: [0, 0.3, 1] },
              scaleX: { duration: 1.5, times: [0, 0.5, 1], ease: "easeOut" },
              scaleY: { duration: 1.5, times: [0, 0.5, 1], ease: "easeOut" },
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white origin-center"
          >
            <h1 className="w-full text-[clamp(3rem,12vw,20rem)] font-extrabold font-inter tracking-tight text-black text-center">
              SABRINA PARK
            </h1>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Main Content */}
      {!showNamePopup && (
        <div className="relative">
          {/* <Navigation currentSection={currentSection} onSectionChange={scrollToSection} /> */}
          <div className="relative">
            <section id="hero" className="min-h-screen">
              <Hero
                onScrollToNext={() => scrollToSection('about')}
                currentSection={currentSection}
                onSectionChange={scrollToSection}
              />
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
            
            <section id="contact">
              <Contact />
            </section>
          </div>
        </div>
      )}
      <div className="bg-white font-inter font-bold text-5xl tracking-tight p-8 rounded-xl shadow-lg">
        Developer
        <br />
        <span className="text-black font-bold font-inter">
          in progess. 
        </span>
      </div>
    </div>
  );
}