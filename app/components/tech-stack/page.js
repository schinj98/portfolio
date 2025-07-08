// app/components/tech-stack/page.js
'use client'
import React, { useState } from 'react'
import { Code, Database, Server, Palette, Cloud, Shield, Zap, Layers } from 'lucide-react'

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const techCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      description: 'Creating beautiful and interactive user interfaces',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'React', level: 95, description: 'Advanced component architecture and hooks', icon: '⚛️' },
        { name: 'Next.js', level: 90, description: 'Server-side rendering and full-stack development', icon: '🔺' },
        { name: 'Vue.js', level: 85, description: 'Progressive framework for building UIs', icon: '💚' },
        { name: 'TypeScript', level: 88, description: 'Type-safe JavaScript development', icon: '🔷' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework', icon: '🎨' },
        { name: 'Sass/SCSS', level: 85, description: 'CSS preprocessor for maintainable styles', icon: '💅' },
        { name: 'JavaScript (ES6+)', level: 95, description: 'Modern JavaScript features and patterns', icon: '🟨' },
        { name: 'HTML5', level: 98, description: 'Semantic markup and accessibility', icon: '🌐' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Server,
      description: 'Building scalable and secure server-side applications',
      color: 'from-green-500 to-blue-500',
      technologies: [
        { name: 'Node.js', level: 92, description: 'JavaScript runtime for server-side development', icon: '💚' },
        { name: 'Express.js', level: 90, description: 'Fast and minimal web framework', icon: '🚀' },
        { name: 'Python', level: 88, description: 'Versatile programming language', icon: '🐍' },
        { name: 'Django', level: 85, description: 'High-level Python web framework', icon: '🎯' },
        { name: 'GraphQL', level: 82, description: 'Query language for APIs', icon: '🔗' },
        { name: 'REST APIs', level: 95, description: 'RESTful web services design', icon: '🔄' },
        { name: 'Socket.io', level: 78, description: 'Real-time bidirectional communication', icon: '⚡' },
        { name: 'Microservices', level: 80, description: 'Distributed system architecture', icon: '🏗️' }
      ]
    },
    database: {
      title: 'Database & Storage',
      icon: Database,
      description: 'Data management and storage solutions',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'PostgreSQL', level: 88, description: 'Advanced relational database', icon: '🐘' },
        { name: 'MongoDB', level: 85, description: 'NoSQL document database', icon: '🍃' },
        { name: 'Redis', level: 80, description: 'In-memory data structure store', icon: '🔴' },
        { name: 'MySQL', level: 82, description: 'Popular relational database system', icon: '🐬' },
        { name: 'Firebase', level: 75, description: 'Backend-as-a-Service platform', icon: '🔥' },
        { name: 'Supabase', level: 78, description: 'Open source Firebase alternative', icon: '⚡' },
        { name: 'Prisma', level: 80, description: 'Next-generation ORM', icon: '🔺' },
        { name: 'ElasticSearch', level: 70, description: 'Distributed search engine', icon: '🔍' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Deployment, scaling, and infrastructure management',
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'AWS', level: 88, description: 'Amazon Web Services cloud platform', icon: '☁️' },
        { name: 'Docker', level: 85, description: 'Containerization platform', icon: '🐳' },
        { name: 'Kubernetes', level: 75, description: 'Container orchestration', icon: '☸️' },
        { name: 'Vercel', level: 90, description: 'Frontend deployment platform', icon: '▲' },
        { name: 'Netlify', level: 85, description: 'Static site hosting', icon: '🌐' },
        { name: 'GitHub Actions', level: 82, description: 'CI/CD automation', icon: '🔄' },
        { name: 'Terraform', level: 70, description: 'Infrastructure as code', icon: '🏗️' },
        { name: 'Nginx', level: 78, description: 'Web server and reverse proxy', icon: '🔧' }
      ]
    },
    tools: {
      title: 'Tools & Design',
      icon: Palette,
      description: 'Development tools and design software',
      color: 'from-pink-500 to-purple-500',
      technologies: [
        { name: 'Git', level: 95, description: 'Version control system', icon: '🔀' },
        { name: 'VS Code', level: 98, description: 'Preferred code editor', icon: '💻' },
        { name: 'Figma', level: 85, description: 'UI/UX design tool', icon: '🎨' },
        { name: 'Postman', level: 88, description: 'API testing tool', icon: '📮' },
        { name: 'Jest', level: 82, description: 'JavaScript testing framework', icon: '🃏' },
        { name: 'Webpack', level: 80, description: 'Module bundler', icon: '📦' },
        { name: 'ESLint', level: 85, description: 'Code linting tool', icon: '🔍' },
        { name: 'Prettier', level: 90, description: 'Code formatter', icon: '✨' }
      ]
    }
  }

  const currentCategory = techCategories[activeCategory]

  return (
    <section id="tech-stack" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-purple-500/10 rounded-full mb-4">
            <Code className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-2xl p-2 inline-flex flex-wrap gap-2">
            {Object.entries(techCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Content */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${currentCategory.color} mb-4`}>
              <currentCategory.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{currentCategory.title}</h3>
            <p className="text-gray-400">{currentCategory.description}</p>
          </div>

          {/* Technologies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentCategory.technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <h4 className="font-semibold text-white">{tech.name}</h4>
                  </div>
                  <span className="text-purple-400 font-medium">{tech.level}%</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{tech.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Proficiency</span>
                    <span className="text-purple-400">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${currentCategory.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${tech.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { 
              icon: Code, 
              title: 'Frontend', 
              count: techCategories.frontend.technologies.length,
              color: 'from-purple-500 to-pink-500'
            },
            { 
              icon: Server, 
              title: 'Backend', 
              count: techCategories.backend.technologies.length,
              color: 'from-green-500 to-blue-500'
            },
            { 
              icon: Database, 
              title: 'Database', 
              count: techCategories.database.technologies.length,
              color: 'from-blue-500 to-cyan-500'
            },
            { 
              icon: Cloud, 
              title: 'DevOps', 
              count: techCategories.cloud.technologies.length,
              color: 'from-orange-500 to-red-500'
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 glass-effect rounded-xl hover:scale-105 transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${item.color} mb-4`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{item.count}+</div>
              <div className="text-sm text-gray-400">{item.title} Technologies</div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Rust', icon: '🦀', status: 'In Progress' },
              { name: 'Machine Learning', icon: '🤖', status: 'Exploring' },
              { name: 'WebAssembly', icon: '🔧', status: 'Learning' },
              { name: 'Blockchain', icon: '⛓️', status: 'Research' }
            ].map((skill, index) => (
              <div key={index} className="flex items-center space-x-2 glass-effect rounded-full px-4 py-2 hover:scale-105 transition-all duration-300">
                <span className="text-lg">{skill.icon}</span>
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                  {skill.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}