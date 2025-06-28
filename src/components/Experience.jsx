import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Undergraduate Research Assistant – BiasLab",
      company: "University of California, Irvine",
      location: "Irvine, CA",
      period: "Present",
      description: "Conducting AI/ML research this summer. More to come soon!",
      achievements: [ "tba"
      ]
    },
    {
      title: "Deep Learning Researcher",
      company: "Universidad Carlos III de Madrid (UC3M)",
      location: "Madrid, Spain",
      period: "Summer 2024",
      description: "Researched evolutionary computation and neural networks for low-radiation imaging under Prof. Francisco Javier García Blas. Built neural models using PyTorch and TensorFlow for animal X-ray generation.",
      achievements: [
        "Independently led implementation of imaging models",
        "Reported weekly findings to international research team",
        "Enhanced X-ray reconstruction with reduced radiation"
      ]
    },
    {
      title: "Learning Assistant – Lower Division Python Programming",
      company: "University of California, Irvine",
      location: "Irvine, CA",
      period: "2023 – 2024",
      description: "Supported instruction for Python programming course. Guided students through debugging, coding assignments, and programming concepts in labs and office hours.",
      achievements: [
        "Mentored 100+ students across multiple quarters",
        "Led code walkthroughs and peer-learning sessions",
        "Collaborated with professors and TAs to improve curriculum"
      ]
    },
    {
      title: "Brand Ambassador/Sales Associate",
      company: "Aerie",
      location: "Vancouver, BC",
      period: "2022 – 2023",
      description: "Represented Aerie’s body positivity brand mission. Engaged with customers in a retail setting to promote and sell the company's clothing, accessories, and ensured store upkeep.",
      achievements: [
        "Increased campus engagement through events",
        "Managed personal and team brand outreach",
        "Promoted brand values across multiple platforms"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 font-inter">
            Experience (so far...)
          </h2>
          <p className="text-xl text-blue-800 max-w-2xl mx-auto font-inter font-semibold">
            My journey across research, teaching, and creative development.
          </p>
        </div>
        <div className="relative pl-12">
          {/* Timeline line */}
          <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-100 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 -translate-x-10 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full border-2 border-white shadow-md hidden md:block" />
                
                <div className="md:ml-12 border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-blue-50/70 backdrop-blur-sm rounded-lg">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-blue-900 mb-1 font-inter">{exp.title}</h3>
                        <div className="flex items-center text-blue-700 font-medium">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-blue-500">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-blue-800 leading-relaxed mb-4 font-inter">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <span key={i} className="text-sm bg-blue-100 text-blue-900 px-3 py-1 rounded-full font-inter">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
