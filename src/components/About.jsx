import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export default function About() {
  const skills = [
    { icon: Code, title: "Development", desc: "Full-stack development with modern technologies" },
    { icon: Palette, title: "Design", desc: "UI/UX design with attention to detail" },
    { icon: Zap, title: "Performance", desc: "Optimized, fast, and scalable solutions" },
    { icon: Heart, title: "Passion", desc: "Love for creating meaningful experiences" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-blue-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight font-inter">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-blue-900 mb-6 font-inter">
              Crafting Digital Excellence
            </h3>
            <p className="text-lg font-semibold text-blue-800 leading-relaxed mb-6 font-inter">
              I'm a passionate developer and designer who believes that great digital experiences 
              come from the perfect blend of beautiful design and solid code. With years of 
              experience in the field, I specialize in creating websites and applications that 
              not only look stunning but also perform flawlessly.
            </p>
            <p className="text-lg text-blue-800 leading-relaxed font-inter">
              When I'm not coding, you'll find me exploring new design trends, experimenting 
              with emerging technologies, or enjoying a good cup of coffee while sketching 
              new ideas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-blue-900 mb-2 font-inter">{skill.title}</h4>
                    <p className="text-sm text-blue-800 font-inter">{skill.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}