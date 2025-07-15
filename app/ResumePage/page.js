// pages/resume.jsx or app/resume/page.jsx

"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/component/Navbar';

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    setAnimateSkills(true);
  }, []);

  // Timeline data combining education and experience
  const timeline = [
    {
      year: '2025',
      type: 'experience',
      title: 'Software Developer Intern',
      organization: 'Berrily',
      location: 'Mumbai, Maharashtra',
      duration: 'April - June 2025',
      highlights: [
        'Mastered Advanced DSA (Graphs, DP, Segment Trees)',
        'Built production-grade authentication modules',
        'Optimized MySQL queries for better performance',
        'Created responsive UI with React & Next.js'
      ],
      icon: '💼',
      color: 'from-green-400 to-blue-500'
    },
    {
      year: '2024',
      type: 'education',
      title: 'B.Sc - CS & Data Analytics',
      organization: 'IIT Patna',
      location: 'Online/Hybrid',
      duration: '2024 - 2026',
      highlights: ['CGPA: 7.8', 'Data Science Focus', 'Machine Learning'],
      icon: '🎓',
      color: 'from-purple-400 to-pink-500'
    },
    {
      year: '2022',
      type: 'education',
      title: 'B.Tech - ECE',
      organization: 'J.C. Bose University',
      location: 'Faridabad, Haryana',
      duration: '2022 - 2026',
      highlights: ['CGPA: 7.6', 'Electronics & Computer Engineering'],
      icon: '🏫',
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  // Skills with proficiency levels
  const skillCategories = [
    {
      category: 'Languages',
      icon: '💻',
      skills: [
        { name: 'Java', level: 95, projects: 2 },
        { name: 'Python', level: 85, projects: 1 },
        { name: 'JavaScript', level: 90, projects: 2 },
        { name: 'SQL', level: 80, projects: 2 }
      ]
    },
    {
      category: 'Frameworks',
      icon: '🚀',
      skills: [
        { name: 'Spring Boot', level: 90, projects: 1 },
        { name: 'Next.js', level: 92, projects: 2 },
        { name: 'React', level: 88, projects: 2 },
        { name: 'Flask', level: 85, projects: 1 }
      ]
    },
    {
      category: 'Tools & Cloud',
      icon: '🛠️',
      skills: [
        { name: 'AWS EC2', level: 85, projects: 1 },
        { name: 'Docker', level: 80, projects: 1 },
        { name: 'Git/GitHub', level: 95, projects: 3 },
        { name: 'MySQL', level: 88, projects: 2 }
      ]
    }
  ];

  // Project cards with visual elements
  const projects = [
    {
      title: 'Automated WireGuard VPN Platform',
      status: 'Active',
      description: 'Enterprise-grade VPN solution with auto-configuration',
      metrics: [
        { label: 'Users', value: '100+', icon: '👥' },
        { label: 'Response Time', value: '<200ms', icon: '⚡' },
        { label: 'Uptime', value: '99.9%', icon: '✅' }
      ],
      techStack: ['Java', 'Spring Boot', 'AWS EC2', 'MySQL', 'JWT', 'JUnit'],
      features: [
        'Microservice Architecture',
        'Fault Tolerance',
        'Auto-scaling',
        'Secure APIs'
      ],
      github: 'https://github.com/sachinjangid/vpn-platform'
    },
    {
      title: 'ArcadeTrack - GCP Tracker',
      status: 'Live',
      description: 'Real-time tracking dashboard for Google Cloud Arcade',
      metrics: [
        { label: 'Profiles', value: '10K+', icon: '📊' },
        { label: 'Performance', value: '100/100', icon: '🎯' },
        { label: 'API Optimization', value: '80%', icon: '📈' }
      ],
      techStack: ['Next.js', 'Tailwind CSS', 'Flask', 'Vercel'],
      features: [
        'Real-time Updates',
        'Caching Strategy',
        'Error Handling',
        'Responsive Design'
      ],
      github: 'https://github.com/sachinjangid/arcade-track'
    }
  ];

  // Achievements with visual badges
  const achievements = [
    {
      title: 'LeetCode Knight',
      value: '1814',
      subtitle: 'Contest Rating',
      icon: '👑',
      color: 'from-yellow-400 to-orange-500',
      certificate: true
    },
    {
      title: 'Contest Rank',
      value: '#261',
      subtitle: 'Out of 27,000+',
      icon: '🏆',
      color: 'from-purple-400 to-pink-500',
      certificate: true
    },
    {
      title: 'Problems Solved',
      value: '550+',
      subtitle: 'Across platforms',
      icon: '💪',
      color: 'from-blue-400 to-cyan-500',
      platforms: ['LeetCode', 'CodeChef', 'GeeksforGeeks']
    },
    {
      title: 'TCS NQT Score',
      value: '81.6%',
      subtitle: 'Professional Exam',
      icon: '📊',
      color: 'from-green-400 to-teal-500',
      certificate: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header Section */}
      <Navbar />
      <header className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
              Sachin Jangid
            </h1>
            <p className="text-xl md:text-2xl animate-fade-in-delay">
              Full Stack Developer | IIT Patna Student | Problem Solver
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm md:text-base">
              <a href="tel:+919518276536" className="flex items-center gap-2 hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-9518276536
              </a>
              <a href="mailto:Sachinreal2003@gmail.com" className="flex items-center gap-2 hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Sachinreal2003@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Faridabad, Haryana
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="/Sachin_Jangid_Resume.pdf"
                download
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105"
              >
                📄 Download Resume
              </a>
              <Link
                href="/#contact"
                className="border-2 border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all"
              >
                💬 Let's Connect
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 1440 60" fill="none">
          <path d="M0 60L80 52.5C160 45 320 30 480 22.5C640 15 800 15 960 22.5C1120 30 1280 45 1360 52.5L1440 60V60H1360C1280 60 1120 60 960 60C800 60 640 60 480 60C320 60 160 60 80 60H0V60Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </header>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Current CGPA', value: '7.8', subtext: 'IIT Patna', icon: '🎯' },
            { label: 'LeetCode Rating', value: '1814', subtext: 'Knight Badge', icon: '👑' },
            { label: 'Projects Built', value: '3+', subtext: 'Production Ready', icon: '🚀' },
            { label: 'DSA Problems', value: '550+', subtext: 'Solved', icon: '💡' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-all"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-full shadow-lg p-1 flex gap-2">
            {['timeline', 'skills', 'projects', 'achievements'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 cursor-pointer rounded-full font-medium transition-all capitalize hover:text-transparent hover:bg-clip-text 
                hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 
                transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-start mb-12 animate-fade-in-up">
                    {/* Timeline dot */}
                    <div className={`absolute left-8 w-4 h-4 bg-white border-4 border-blue-600 rounded-full -translate-x-1/2 z-10`}></div>
                    
                    {/* Content */}
                    <div className="ml-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow w-full">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                            {item.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-medium">{item.organization}</p>
                          <p className="text-sm text-gray-500">{item.location} • {item.duration}</p>
                        </div>
                        <div className={`text-4xl p-3 rounded-lg bg-gradient-to-r ${item.color} text-white`}>
                          {item.icon}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {skill.projects} projects
                          </span>
                        </div>
                        <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ${
                              animateSkills ? 'animate-skill-fill' : 'w-0'
                            }`}
                            style={{ width: animateSkills ? `${skill.level}%` : '0%' }}
                          >
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-white font-bold">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  {/* Project Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        project.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-white/90">{project.description}</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-700/50">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl mb-1">{metric.icon}</div>
                        <div className="text-lg font-bold text-gray-800 dark:text-gray-100">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="p-6">
                    <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 w-full py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-4xl text-white`}>
                    {achievement.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {achievement.title}
                  </h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {achievement.value}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {achievement.subtitle}
                  </p>
                  {achievement.certificate && (
                    <span className="inline-flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Certificate Available
                    </span>
                  )}
                  {achievement.platforms && (
                    <div className="mt-2 flex flex-wrap gap-1 justify-center">
                      {achievement.platforms.map((platform) => (
                        <span key={platform} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          {platform}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Social Links Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Connect & Explore
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/schinj98/', color: 'from-blue-600 to-blue-700' },
              { name: 'GitHub', icon: '🐙', url: 'https://github.com/schinj98', color: 'from-gray-700 to-gray-900' },
              { name: 'LeetCode', icon: '🏆', url: 'https://leetcode.com/schinjangid', color: 'from-yellow-500 to-orange-500' },
              { name: 'CodeChef', icon: '👨‍🍳', url: 'https://www.codechef.com/users/schinj98', color: 'from-amber-600 to-amber-700' },
              { name: 'GeeksforGeeks', icon: '💚', url: '#https://www.geeksforgeeks.org/user/schni_jangid/', color: 'from-green-600 to-green-700' }
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${platform.color} text-white rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105`}
              >
                <span className="text-xl">{platform.icon}</span>
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8">
            I'm passionate about creating innovative solutions and always excited to take on new challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Hire Me
            </Link>
            <a
              href="mailto:schinj98@gmail.com"
              className="border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;