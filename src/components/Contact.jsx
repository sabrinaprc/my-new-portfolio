import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Contact() {
const socialLinks = [
  { icon: Github, href: "https://github.com/sabrinaprc", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sabrina-park12", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sabrinapark710@gmail.com", label: "Email" }
];

  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex justify-center items-center py-8 bg-white"
>
  <div className="w-full mx-4 rounded-3xl bg-slate-900 py-8 px-2 flex flex-col items-center">
    <h2 className="text-5xl md:text-6xl font-extrabold font-inter text-white mb-10">
      Let's Connect!
    </h2>
    <div className="flex gap-8 flex-wrap justify-center">
      {socialLinks.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-20 h-20 bg-blue-200 hover:bg-blue-300 rounded-full flex items-center justify-center text-white transition-all duration-300"
          aria-label={social.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <social.icon className="w-10 h-10" />
        </motion.a>
      ))}
    </div>
  </div>
</motion.div>
  );
}