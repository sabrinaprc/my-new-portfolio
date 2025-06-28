import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from './ui/button';

export default function Projects() {
  const projects = [
  {
    title: "Weatherfy",
    description: "A full-stack web app that generates Spotify playlists based on the current weather. Integrated OpenWeatherMap and Spotify APIs with a FastAPI backend and React frontend.",
    image: "./images/weatherfy.png",
    tech: ["React", "FastAPI", "PostgreSQL", "Spotify API", "OpenWeather API"],
    category: "Web Application"
  },
  {
    title: "Freshventory",
    description: "A fridge inventory tracker that uses computer vision to identify items and suggest recipes. Combines image recognition with a clean UI for practical kitchen use.",
    image: "./images/Freshventory.jpg",
    tech: ["Python", "OpenCV", "Streamlit", "MongoDB"],
    category: "AI + Full Stack"
  },
  {
    title: "Search Engine",
    description: "A custom-built search engine using TF-IDF for ranking and MongoDB for document storage. Built without external libraries like Lucene to demonstrate core IR concepts.",
    image: "./images/search-engine.png",
    tech: ["Python", "MongoDB", "TF-IDF", "Flask"],
    category: "Information Retrieval"
  },
  {
    title: "ChompBot",
    description: "An AI model that classifies food types from images and analyzes nutritional content using TensorFlow. Includes real-time predictions and deployment via AWS.",
    image: "./images/chompbot.jpg",
    tech: ["TensorFlow", "Python", "AWS", "Pandas"],
    category: "Machine Learning"
  }
];


  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold font-inter text-black mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work spanning web applications, mobile apps, and design systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border-none hover:shadow-2xl transition-all duration-500 bg-blue-200 backdrop-blur-sm overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-blue-800 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-blue-100 group-hover:text-blue-700 transition-all duration-300">
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
