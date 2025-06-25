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
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extralight text-slate-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-light text-slate-900 mb-6">
              Crafting Digital Excellence
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              I'm a passionate developer and designer who believes that great digital experiences 
              come from the perfect blend of beautiful design and solid code. With years of 
              experience in the field, I specialize in creating websites and applications that 
              not only look stunning but also perform flawlessly.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
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
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">{skill.title}</h4>
                    <p className="text-sm text-slate-600">{skill.desc}</p>
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