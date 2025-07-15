// components/HeroSection.jsx
"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';


const HeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const [floatingParticles, setFloatingParticles] = useState([]);


  const roles = [
    'Full Stack Developer',
    'Software Engineer',
    'Problem Solver',
    'IIT Patna Student',
    'AI Enthusiast'
  ];

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };
    const particles = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${10 + Math.random() * 20}s`
    }));
    setFloatingParticles(particles);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Set loaded state for animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const stats = [
    { number: '550+', label: 'Problems Solved', icon: '💻', color: 'from-blue-500 to-cyan-500' },
    { number: '1857', label: 'LeetCode Rating', icon: '🏆', color: 'from-purple-500 to-pink-500' },
    { number: '3', label: 'Major Projects', icon: '🚀', color: 'from-orange-500 to-red-500' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/schinj98' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/schinj98/' },
    { name: 'LeetCode', icon: 'leetcode', url: 'https://leetcode.com/schinjangid' },
    { name: 'Email', icon: 'email', url: 'mailto:schinj98@gmail.com' }
  ];

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Dynamic gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-pink-100/20 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20"></div>
        
        {/* Animated orbs with parallax */}
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`
          }}
        ></div>
        <div 
          className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -50}px)`
          }}
        ></div>
        <div 
          className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
          }}
        ></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* ✅ Hydration-safe Floating Particles */}
      {isLoaded && (
        <div className="absolute inset-0">
          {floatingParticles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/20 rounded-full animate-float"
              style={particle}
            />
          ))}
        </div>
      )}


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Animated avatar/logo */}
          <div className={`mb-8 transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl transform hover:scale-110 transition-transform duration-300">
                SJ
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-75 animate-pulse"></div>
            </div>
          </div>
          
          {/* Greeting with wave animation */}
          <p className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 transition-all duration-700 delay-100 ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            <span className="inline-block animate-wave">👋</span> Hello, I'm
          </p>
          
          {/* Name with enhanced gradient */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-200 ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300 relative">
              Sachin Jangid
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-30 blur-xl"></span>
            </span>
          </h1>
          
          {/* Enhanced typing effect */}
          <div className={`h-16 mb-8 transition-all duration-700 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            <p className="text-2xl md:text-4xl text-gray-700 dark:text-gray-200">
              I'm a{' '}
              <span className="relative">
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold">
                  {text}
                </span>
                <span className="animate-blink text-blue-600">|</span>
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg"></span>
              </span>
            </p>
          </div>
          
          {/* Enhanced description */}
          <p className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 transition-all duration-700 delay-400 ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            Pursuing <span className="font-semibold text-blue-600">B.Tech at J.C. Bose University</span> & 
            <span className="font-semibold text-purple-600"> B.Sc at IIT Patna</span> | 
            Building scalable solutions with modern technologies | 
            <span className="font-semibold text-pink-600"> LeetCode Knight</span> with 1857 rating
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-500 ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}>
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient bg-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            
            {/* <a
              href="/files/resume.pdf"
              download
              className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Download Resume
                <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </a> */}
          </div>
          
          {/* Enhanced Stats with counters */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-700 ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

                    {/* Social Links */}
                    <div className={`flex justify-center gap-4 transition-all duration-700 delay-700 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${800 + index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors">
                  {social.icon === 'github' && (
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )}
                  {social.icon === 'linkedin' && (
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )}
                  {social.icon === 'leetcode' && (
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                    </svg>
                  )}
                  {social.icon === 'email' && (
                    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-50 animate-pulse"></div>
          <div className="relative bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg animate-bounce">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          20%, 60% {
            transform: rotate(-25deg);
          }
          40%, 80% {
            transform: rotate(10deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(20px);
          }
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

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-gradient {
          background-size: 300%;
          animation: gradient 5s ease infinite;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-300 {
          background-size: 300%;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
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

export default HeroSection;