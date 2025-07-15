// components/AboutSection.jsx
"use client"
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef(null);
  const skillRefs = useRef([]);
  const achievementRefs = useRef([]);

  const skills = {
    languages: ['Java', 'Python', 'SQL', 'JavaScript'],
    frameworks: ['Spring Boot', 'REST APIs', 'Flask', 'MySQL', 'Next.js', 'Tailwind', 'Node.js'],
    tools: ['IntelliJ IDEA', 'VS Code', 'Git/GitHub', 'Maven', 'Postman', 'CI/CD', 'Docker', 'AWS'],
    testing: ['JUnit', 'Unit Testing', 'API Testing']
  };

  const achievements = [
    {
      icon: '🏆',
      title: 'LeetCode Knight',
      description: 'Achieved Knight Badge with Contest Rating of 1857',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: '🥈',
      title: 'Contest Rank 261',
      description: 'Among 27,000+ participants in LeetCode Weekly Contest 451',
      color: 'from-silver-400 to-gray-600'
    },
    {
      icon: '💻',
      title: '550+ Problems',
      description: 'Solved across various coding platforms',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '📊',
      title: '81.6% in TCS NQT',
      description: 'Scored excellent marks in TCS ION NQT exam',
      color: 'from-green-400 to-green-600'
    }
  ];

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

    // Observe main section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe skill sections
    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observe achievements
    achievementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Animation */}
        <div 
          ref={sectionRef}
          id="about-header"
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible['about-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Passionate about building scalable solutions and solving complex problems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Personal Info with Slide-in Animation */}
          <div 
            className={`space-y-6 transition-all duration-1000 transform ${
              isVisible['about-header'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  SJ
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Sachin Jangid</h3>
                  <p className="text-gray-600 dark:text-gray-300">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="prose prose-lg text-gray-600 dark:text-gray-300">
                <p className="leading-relaxed mb-4">
                  Hi! I'm Sachin Jangid, a dedicated software engineering student pursuing dual degrees - 
                  B.Tech in Electronics and Computer Engineering from J.C. Bose University and 
                  B.Sc in Computer Science and Data Analytics from IIT Patna.
                </p>
                <p className="leading-relaxed mb-4">
                  With hands-on experience from my internship at Berrily and a strong foundation in 
                  Data Structures & Algorithms, I specialize in building production-grade applications 
                  using modern technologies.
                </p>
                <p className="leading-relaxed">
                  My passion lies in Full Stack Development and AI, where I combine creativity with 
                  technical expertise to solve real-world problems.
                </p>
              </div>
            </div>
            
            {/* Contact Info with Hover Effects */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:Sachinreal2003@gmail.com" 
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Sachinreal2003@gmail.com
              </a>
              <a 
                href="tel:+919518276536" 
                className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 rounded-lg text-green-600 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91-9518276536
              </a>
            </div>
          </div>

          {/* Right side - Skills with Staggered Animation */}
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div
                key={category}
                ref={(el) => (skillRefs.current[index] = el)}
                id={`skill-${index}`}
                className={`transition-all duration-700 transform ${
                  isVisible[`skill-${index}`] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 capitalize flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full group-hover:w-8 transition-all duration-300"></span>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 cursor-default"
                        style={{ 
                          animationDelay: `${(index * 100) + (skillIndex * 50)}ms`,
                          animation: isVisible[`skill-${index}`] ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements with Card Flip Animation */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient bg-300">
              Achievements & Recognition
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                ref={(el) => (achievementRefs.current[index] = el)}
                id={`achievement-${index}`}
                className={`transition-all duration-700 transform ${
                  isVisible[`achievement-${index}`] ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
                      {achievement.description}
                    </p>
                    <div className={`h-1 w-0 bg-gradient-to-r ${achievement.color} rounded-full mt-4 group-hover:w-full transition-all duration-500`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
      `}</style>
    </section>
  );
};

export default AboutSection;