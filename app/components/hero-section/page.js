'use client'
import React, { useState, useEffect } from 'react'
import { ChevronDown, Github, Linkedin, Mail, MapPin, Coffee, Code2, Zap } from 'lucide-react'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Problem Solver",
    "Tech Enthusiast"
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(roleInterval)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
        
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div 
        className="fixed w-6 h-6 bg-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <div className="relative mx-auto mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1 animate-float">
            <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
              <Code2 size={48} className="text-purple-400" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>

          <div className="h-16 flex items-center justify-center mb-6">
            <p className="text-xl md:text-3xl text-gray-300 font-light">
              I'm a{' '}
              <span className="text-purple-400 font-semibold transition-all duration-500">
                {roles[currentRole]}
              </span>
            </p>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span>Available for work</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that make a difference. 
            I combine technical expertise with creative vision to build applications that users love.
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            <a href="#" className="group text-gray-300 hover:text-purple-400 transition-all duration-300">
              <div className="p-3 rounded-full bg-gray-800/50 group-hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-110">
                <Github size={24} />
              </div>
            </a>
            <a href="#" className="group text-gray-300 hover:text-purple-400 transition-all duration-300">
              <div className="p-3 rounded-full bg-gray-800/50 group-hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-110">
                <Linkedin size={24} />
              </div>
            </a>
            <a href="#" className="group text-gray-300 hover:text-purple-400 transition-all duration-300">
              <div className="p-3 rounded-full bg-gray-800/50 group-hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-110">
                <Mail size={24} />
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="flex items-center">
                <Zap size={20} className="mr-2" />
                View My Work
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center">
                <Coffee size={20} className="mr-2" />
                Let's Talk
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-400">Scroll down</span>
          <ChevronDown size={24} className="text-purple-400" />
        </div>
      </div>
    </section>
  )
}