import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from './ui/button';

export default function Projects() {
  const projects = [
    {
      title: "Weatherfy (Currently in development)",
      description: "A full-stack web app that recommends Spotify playlists based on real-time weather data. Built with React, FastAPI, and PostgreSQL, Weatherfy uses the Spotify and OpenWeatherMap APIs to generate mood-based playlists. Deployed using AWS EC2 and Docker (public access coming soon).",
      image: "./images/weatherfy.png",
      tech: ["React", "FastAPI", "PostgreSQL", "Spotify API", "OpenWeather API", "AWS and Docker coming soon"],
      category: "Web Application",
      link: "https://github.com/sabrinaprc/Weatherfy"
    },
    {
      title: "Freshventory",
      description: "A smart fridge inventory app that uses AI-powered image recognition to detect ingredients from a fridge photo and suggest recipes. Built with React Native, Firebase, and Roboflow, it helps users reduce food waste and simplify meal planning—perfect for busy students and households.",
      image: "./images/Freshventory.jpg",
      tech: ["React Native", "Firebase", "Roboflow", "Spoonacular API"],
      category: "AI + Full Stack",
      link: "https://devpost.com/software/freshventory"
    },
    {
      title: "Search Engine",
      description: "A custom-built search engine using TF-IDF for ranking and MongoDB for document storage. Built without external libraries like Lucene to demonstrate core IR concepts.",
      image: "./images/search-engine.png",
      tech: ["Python", "MongoDB", "TF-IDF", "Flask"],
      category: "Information Retrieval",
      link: "https://github.com/sabrinaprc/Search-Engine-Updated"
    },
    {
      title: "ChompBot",
      description: "An AI-powered restaurant assistant that helps users find food spots using natural language. Built with ChatterBot and Yelp API, it interprets your preferences—like cuisine, location, and vibe—and responds with curated options and menus. Designed as a friendly, chat-based tool to cut through the noise of endless low-rated listings.",
      image: "./images/chompbot.jpg",
      tech: ["Python", "Yelp API", "ChatterBot", "Tkinter"],
      category: "Conversational AI",
      link: "https://devpost.com/software/chompbot"
    },
  ];

  const dataScienceProjects = [
    {
      title: "IMDb Sentiment Classifier",
      description: "A machine learning project that classifies IMDb movie reviews as positive or negative using logistic regression, k-NN, and a feedforward neural network. Compared classifier performance using accuracy, F1-score, and ROC curves.",
      image: "./images/imdb.png",
      tech: ["Python", "Scikit-learn", "PyTorch", "Matplotlib"],
      category: "Data Science",
      link: "https://github.com/sabrinaprc/IMDB-Analysis-178-Project",
      report: "https://docs.google.com/document/d/118_3pZLQmgtcgkDfPkbb6UXK5USpbEJjaZ032zW_Woc/edit?usp=sharing"
    },
    {
      title: "Student Performance Analysis",
      description: "Analyzed student academic and behavioral data to uncover patterns affecting final exam performance. Applied logistic regression and correlation analysis to identify predictors like attendance, study time, and parental education.",
      image: "./images/studentperformance.png",
      tech: ["Python", "Pandas", "Seaborn", "Scikit-learn"],
      category: "Data Science",
      link: "https://github.com/sabrinaprc/School-Analysis"
    },
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
            A showcase of my recent work spanning web applications, machine learning, and creative tools.
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant="ghost"
                      className="w-full flex items-center justify-center gap-2 bg-white/40 hover:bg-white/70 text-blue-800 hover:text-blue-900 transition-all duration-300 rounded-lg py-3 font-semibold"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Data Science Projects Section */}
        <h3 className="text-3xl font-bold text-left text-blue-900 mt-20 mb-6">Data Science Projects</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {dataScienceProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border-none hover:shadow-2xl transition-all duration-500 bg-blue-100 backdrop-blur-sm overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant="ghost"
                      className="w-full flex items-center justify-center gap-2 bg-white/40 hover:bg-white/70 text-blue-800 hover:text-blue-900 transition-all duration-300 rounded-lg py-3 font-semibold"
                    >
                      View Project
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </a>
                  
                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center mt-2 text-blue-700 hover:text-blue-900 font-medium transition-all duration-300"
                    >
                      Read Report →
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
