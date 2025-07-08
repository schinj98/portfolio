// app/components/projects/page.js
'use client'
import React, { useState } from 'react'
import { FolderOpen, ExternalLink, Github, Star, Calendar, Code, Eye, Heart, Filter } from 'lucide-react'

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies and optimized for performance.',
      category: 'fullstack',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: ['Payment Integration', 'Real-time Inventory', 'Admin Dashboard', 'Mobile Responsive'],
      github: 'https://github.com/johndoe/ecommerce',
      demo: 'https://ecommerce-demo.com',
      status: 'completed',
      likes: 234,
      views: 1500,
      date: '2024',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization and scheduling features.',
      category: 'frontend',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Chart.js', 'Tailwind CSS', 'REST API'],
      features: ['Real-time Analytics', 'Post Scheduling', 'Dark Mode', 'Responsive Design'],
      github: 'https://github.com/johndoe/social-dashboard',
      demo: 'https://social-dashboard-demo.com',
      status: 'completed',
      likes: 156,
      views: 980,
      date: '2023',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, real-time updates, and team collaboration features.',
      category: 'backend',
      image: '/api/placeholder/600/400',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'JWT'],
      features: ['REST API', 'WebSocket Support', 'Authentication', 'Team Collaboration'],
      github: 'https://github.com/johndoe/task-api',
      demo: 'https://task-api-docs.com',
      status: 'completed',
      likes: 89,
      views: 650,
      date: '2023',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and personalized recommendations.',
      category: 'mobile',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Weather API', 'Maps', 'Redux'],
      features: ['Location Services', 'Weather Forecast', 'Interactive Maps', 'Push Notifications'],
      github: 'https://github.com/johndoe/weather-app',
      demo: 'https://weather-app-demo.com',
      status: 'completed',
      likes: 312,
      views: 2100,
      date: '2024',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot with natural language processing, context awareness, and multi-language support.',
      category: 'ai',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'NLP', 'Docker', 'FastAPI'],
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language', 'ML Integration'],
      github: 'https://github.com/johndoe/ai-chatbot',
      demo: 'https://ai-chatbot-demo.com',
      status: 'in-progress',
      likes: 445,
      views: 3200,
      date: '2024',
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations, dark mode, and responsive design.',
      category: 'frontend',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      features: ['Smooth Animations', 'Dark Mode', 'SEO Optimized', 'Fast Loading'],
      github: 'https://github.com/johndoe/portfolio',
      demo: 'https://johndoe.dev',
      status: 'completed',
      likes: 178,
      views: 1200,
      date: '2024',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length }
  ]

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-purple-500/10 rounded-full mb-4">
            <FolderOpen className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work and the technologies I'm passionate about
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-2xl p-2 inline-flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                <span>{filter.label}</span>
                <span className="ml-2 text-xs bg-white/10 px-2 py-1 rounded-full">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-effect rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className={`w-full h-48 bg-gradient-to-br ${project.color} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-4 text-white/80">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{project.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{project.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-500/10 text-gray-400 rounded-full text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 2).map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25">
            View All Projects
          </button>
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Projects', value: projects.length, icon: Code },
            { label: 'Completed', value: projects.filter(p => p.status === 'completed').length, icon: Star },
            { label: 'Total Likes', value: projects.reduce((acc, p) => acc + p.likes, 0), icon: Heart },
            { label: 'Total Views', value: projects.reduce((acc, p) => acc + p.views, 0), icon: Eye }
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