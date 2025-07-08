// app/components/experience/page.js
'use client'
import React, { useState } from 'react'
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight, Building, Award } from 'lucide-react'

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState(0)

  const experiences = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2023 - Present",
      type: "Full-time",
      description: "Leading a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Architected microservices handling 100K+ daily users.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led migration from monolith to microservices architecture",
        "Mentored 3 junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL", "Redis"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "InnovateTech",
      location: "New York, NY",
      period: "2021 - 2023",
      type: "Full-time",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.",
      achievements: [
        "Built 15+ responsive web applications from scratch",
        "Integrated third-party APIs and payment systems",
        "Improved code coverage to 85% through comprehensive testing",
        "Reduced loading times by 50% through performance optimization"
      ],
      technologies: ["React", "Vue.js", "Python", "Django", "MongoDB", "AWS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "WebDesign Studio",
      location: "Austin, TX",
      period: "2020 - 2021",
      type: "Full-time",
      description: "Focused on creating pixel-perfect, responsive user interfaces. Worked closely with designers to implement creative solutions and enhance user experience.",
      achievements: [
        "Converted 20+ Figma designs to responsive web pages",
        "Implemented modern CSS animations and transitions",
        "Collaborated with UX team to improve user engagement by 30%",
        "Maintained 99.9% cross-browser compatibility"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Sass", "Figma"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Junior Developer",
      company: "StartupHub",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      description: "Started my professional journey working on various startup projects. Gained experience in rapid prototyping and agile development methodologies.",
      achievements: [
        "Developed 5+ MVP applications for different startups",
        "Learned and adapted to new technologies quickly",
        "Participated in agile development processes",
        "Contributed to open-source projects"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-purple-500/10 rounded-full mb-4">
            <Briefcase className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey and the amazing companies I've worked with
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company List */}
          <div className="lg:col-span-2">
            <div className="space-y-2">
              {experiences.map((exp, index) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedJob(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    selectedJob === index
                      ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 shadow-lg shadow-purple-500/10'
                      : 'bg-gray-900/50 hover:bg-gray-800/50 border border-gray-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`} />
                      <div>
                        <h3 className="font-semibold text-white">{exp.company}</h3>
                        <p className="text-sm text-gray-400">{exp.title}</p>
                      </div>
                    </div>
                    <ChevronRight 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        selectedJob === index ? 'rotate-90 text-purple-400' : 'text-gray-500'
                      }`} 
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Job Details */}
          <div className="lg:col-span-3">
            <div className="glass-effect rounded-2xl p-8 h-full">
              <div className="space-y-6">
                {/* Job Header */}
                <div className="border-b border-gray-700/50 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {experiences[selectedJob].title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Building className="w-4 h-4" />
                          <span>{experiences[selectedJob].company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experiences[selectedJob].location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-purple-400 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{experiences[selectedJob].period}</span>
                      </div>
                      <span className="text-sm text-gray-500">{experiences[selectedJob].type}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {experiences[selectedJob].description}
                  </p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-purple-400" />
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    {experiences[selectedJob].achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[selectedJob].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "5+", icon: Calendar },
            { label: "Projects Completed", value: "50+", icon: Briefcase },
            { label: "Companies Worked", value: "4", icon: Building },
            { label: "Technologies", value: "20+", icon: Award }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 glass-effect rounded-xl hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}