// app/components/footer/page.js
'use client'
import React from 'react'
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  ArrowUp,
  Code,
  Coffee,
  ExternalLink,
  Calendar,
  Download
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Tech Stack', href: '#tech-stack' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'Consulting', href: '#' },
      { name: 'Code Review', href: '#' },
      { name: 'Mentoring', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Resume', href: '#', icon: Download },
      { name: 'Portfolio', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Open Source', href: '#', icon: Github },
      { name: 'Newsletter', href: '#' }
    ]
  }

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      color: 'hover:text-gray-400 hover:bg-gray-800/50'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourprofile',
      color: 'hover:text-blue-400 hover:bg-blue-500/10'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com/yourusername',
      color: 'hover:text-sky-400 hover:bg-sky-500/10'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://instagram.com/yourusername',
      color: 'hover:text-pink-400 hover:bg-pink-500/10'
    }
  ]

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Technologies', value: '20+' }
  ]

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/3 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="py-16 border-b border-gray-800/50">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <span className="gradient-text">Your Name</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  Full Stack Developer passionate about creating innovative solutions and bringing ideas to life through code.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a 
                  href="mailto:hello@yourname.com"
                  className="flex items-center text-gray-400 hover:text-purple-400 transition-colors group"
                >
                  <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  hello@yourname.com
                </a>
                <a 
                  href="tel:+15551234567"
                  className="flex items-center text-gray-400 hover:text-purple-400 transition-colors group"
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  +1 (555) 123-4567
                </a>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3" />
                  San Francisco, CA
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:col-span-2">
              {/* Navigation Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Navigation</h4>
                <ul className="space-y-3">
                  {footerLinks.navigation.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 transform duration-200 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-purple-400 transition-colors hover:translate-x-1 transform duration-200 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-12 border-b border-gray-800/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-800/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 max-w-lg mx-auto">
              Subscribe to get notified about new projects, blog posts, and tech insights.
            </p>
          </div>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-700/50 rounded-l-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-4 rounded-r-xl font-semibold hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-yellow-600 mx-2" />
              <span>by Your Name</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm">
                © {currentYear} Your Name. All rights reserved.
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Floating Elements */}
      <div className="absolute bottom-4 left-4 opacity-20">
        <Code className="w-8 h-8 text-purple-500 animate-pulse" />
      </div>
      <div className="absolute top-4 right-4 opacity-20">
        <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping" />
      </div>
    </footer>
  )
}