// components/ProjectsSection.jsx
"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isVisible, setIsVisible] = useState({});
  const projectRefs = useRef([]);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Automated WireGuard VPN Platform',
      description: 'Built scalable distributed system on AWS EC2 to auto-generate VPN configs using Java (Spring Boot)',
      longDescription: 'A production-grade VPN platform handling 100+ concurrent users with <200ms response time. Implemented secure API handling using JWT and MySQL in a microservice architecture.',
      image: '/projects/vpn-platform.jpg',
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      icon: '🔐',
      category: 'backend',
      technologies: ['Java', 'Spring Boot', 'AWS EC2', 'MySQL', 'JWT', 'JUnit', 'Mockito'],
      features: [
        'Auto-generated VPN configurations',
        'Fault-tolerant microservice architecture',
        '100+ concurrent users support',
        '<200ms response time',
        'Comprehensive unit testing'
      ],
      metrics: {
        users: '100+',
        uptime: '99.9%',
        response: '<200ms'
      },
      github: 'https://github.com/yourusername/vpn-platform',
      live: null,
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'ArcadeTrack – Real-Time GCP Arcade Tracker',
      description: 'Built frontend using Next.js + Tailwind CSS, achieving 100% Lighthouse performance score',
      longDescription: 'A real-time dashboard processing 10,000+ Arcade profiles with <300ms latency. Implemented profile URL parsing & localStorage caching, reducing redundant API calls by 80%.',
      image: '/projects/arcade-track.jpg',
      gradient: 'from-violet-500 via-purple-500 to-pink-500',
      icon: '🎮',
      category: 'fullstack',
      technologies: ['Next.js', 'Tailwind CSS', 'Flask', 'Gunicorn', 'Vercel'],
      features: [
        '100% Lighthouse performance score',
        'Real-time data processing',
        '10,000+ profiles handled',
        '80% reduction in API calls',
        '99.9% uptime reliability'
      ],
      metrics: {
        performance: '100%',
        profiles: '10K+',
        optimization: '80%'
      },
      github: 'https://github.com/yourusername/arcade-track',
      live: 'https://arcade-track.vercel.app',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Berrily - Software Development Internship',
      description: 'Developed production-grade modules with focus on user authentication and secure APIs',
      longDescription: 'During my internship at Berrily, I implemented key backend functionalities using Java and optimized DB queries in MySQL. Also created responsive front-end using React and Next.js.',
      image: '/projects/berrily.jpg',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      icon: '💼',
      category: 'fullstack',
      technologies: ['Java', 'React', 'Next.js', 'MySQL', 'REST APIs', 'JavaScript'],
      features: [
        'Production-grade modules',
        'Secure user authentication',
        'Optimized database queries',
        'Responsive frontend design',
        'Advanced DSA implementation'
      ],
      metrics: {
        modules: '15+',
        apis: '20+',
        coverage: '95%'
      },
      github: null,
      live: null,
      status: 'Completed'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: '💡' },
    { id: 'fullstack', label: 'Full Stack', icon: '🚀' },
    { id: 'backend', label: 'Backend', icon: '⚙️' }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div 
          ref={sectionRef}
          id="projects-header"
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible['projects-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300">
                Featured Projects
              </span>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my best work and technical expertise through real-world applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-700 ${
          isVisible['projects-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              <span className="cursor-pointer flex items-center gap-2">
                <span className="text-xl">{filter.icon}</span>
                {filter.label}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 perspective-1000">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              id={`project-${project.id}`}
              className={`group relative transition-all duration-700 transform ${
                isVisible[`project-${project.id}`] ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-full transform-gpu transition-all duration-500 hover:scale-[1.02] preserve-3d">
                {/* Background Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Main Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden h-full flex flex-col">
                  {/* Project Header/Preview */}
                  <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0 bg-grid-pattern animate-slide"></div>
                    </div>
                    
                    {/* Project Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-7xl transform group-hover:scale-110 transition-transform duration-500">
                        {project.icon}
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
                        project.status === 'Live' 
                          ? 'bg-green-500/80 text-white' 
                          : project.status === 'In Progress'
                          ? 'bg-yellow-500/80 text-white'
                          : 'bg-gray-500/80 text-white'
                      }`}>
                        <span className="flex items-center gap-1">
                          <span className={`w-2 h-2 rounded-full ${
                            project.status === 'Live' ? 'bg-white animate-pulse' : 'bg-white/50'
                          }`}></span>
                          {project.status}
                        </span>
                      </span>
                    </div>

                    {/* Metrics Overlay (shown on hover) */}
                    <div className={`absolute inset-x-0 bottom-0 bg-black/70 backdrop-blur-md p-4 transform transition-all duration-500 ${
                      hoveredProject === project.id ? 'translate-y-0' : 'translate-y-full'
                    }`}>
                      <div className="flex justify-around text-white">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold">{value}</div>
                            <div className="text-xs opacity-80 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium transform"
                        style={{
                          animationName: 'popIn',
                          animationDuration: '0.5s',
                          animationTimingFunction: 'ease-out',
                          animationFillMode: 'forwards',
                          animationDelay: `${(index * 150) + (techIndex * 50)}ms`
                        }}
                      >
                        {tech}
                      </span>
                                          
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Features (shown on hover) */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      hoveredProject === project.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 group/btn relative overflow-hidden"
                        >
                          <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span className="relative z-10 font-medium">Code</span>
                          </div>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 group/btn relative overflow-hidden"
                        >
                          <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02]">
                          <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span className="relative z-10 font-medium">Live Demo</span>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className={`text-center mt-16 transition-all duration-1000 ${
          isVisible['projects-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a
            href="https://github.com/schinj98"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">View All Projects</span>
            <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-gradient {
          background-size: 300%;
          animation: gradient 5s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .bg-300 {
          background-size: 300%;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: slide 20s linear infinite;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;