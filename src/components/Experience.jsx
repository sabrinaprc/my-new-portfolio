import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers. Implemented microservices architecture that improved system performance by 40%.",
      achievements: ["Led team of 5 developers", "Reduced load time by 60%", "Launched 3 major products"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Digital Agency",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces. Specialized in React and modern JavaScript frameworks.",
      achievements: ["Built 15+ client websites", "Improved user engagement by 35%", "Established design system"]
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2018 - 2020",
      description: "Contributed to full-stack development projects and gained experience in agile development methodologies. Worked with diverse technologies and learned rapid prototyping.",
      achievements: ["Deployed 10+ features", "Learned 5 new technologies", "Reduced bug reports by 25%"]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extralight text-slate-900 mb-6">
            Experience
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My professional journey building digital experiences across various industries.
          </p>
        </div>
        <div className="relative pl-12">
          {/* Timeline line */}
          <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-transparent hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative"
              >
                {/* Timeline dot - Fixed positioning */}
                <div className="absolute left-6 top-8 -translate-x-10 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white shadow-md hidden md:block" />
                
                <div className="md:ml-12 border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-lg">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-900 mb-1">{exp.title}</h3>
                        <div className="flex items-center text-blue-600 font-medium">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-slate-500">
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
                    
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <span key={i} className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
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