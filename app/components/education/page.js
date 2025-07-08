// app/components/education/page.js
'use client'
import React, { useState } from 'react'

import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star, Trophy, BadgeCheck } from 'lucide-react'

export default function Education() {
  const [activeTab, setActiveTab] = useState('formal')

  const formalEducation = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2016 - 2020",
      gpa: "3.8/4.0",
      description: "Specialized in software engineering and artificial intelligence. Completed advanced coursework in algorithms, data structures, and machine learning.",
      achievements: [
        "Graduated Magna Cum Laude",
        "Dean's List for 6 consecutive semesters",
        "Led the Computer Science Student Association",
        "Published research paper on ML algorithms"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Machine Learning",
        "Computer Networks",
        "Operating Systems"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      degree: "High School Diploma",
      school: "Central High School",
      location: "Austin, TX",
      period: "2012 - 2016",
      gpa: "3.9/4.0",
      description: "Focused on STEM subjects with advanced placement courses in mathematics and computer science.",
      achievements: [
        "Valedictorian",
        "National Honor Society Member",
        "Math Olympiad State Champion",
        "Computer Science Club President"
      ],
      coursework: [
        "AP Computer Science",
        "AP Calculus BC",
        "AP Physics C",
        "AP Chemistry",
        "Advanced Mathematics",
        "Technical Writing"
      ],
      color: "from-blue-500 to-cyan-500"
    }
  ]

  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      status: "Active",
      description: "Demonstrated expertise in designing distributed systems on AWS platform",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      status: "Active",
      description: "Certified in building scalable applications on Google Cloud Platform",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      status: "Active",
      description: "Advanced React development patterns and best practices",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 4,
      title: "Node.js Application Development",
      issuer: "Node.js Foundation",
      date: "2022",
      status: "Active",
      description: "Professional Node.js development and deployment strategies",
      color: "from-green-400 to-blue-500"
    }
  ]

  const onlineCourses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      platform: "Udemy",
      instructor: "Colt Steele",
      completion: "100%",
      duration: "65 hours",
      rating: 5,
      skills: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      platform: "Frontend Masters",
      instructor: "Kent C. Dodds",
      completion: "100%",
      duration: "12 hours",
      rating: 5,
      skills: ["React", "Hooks", "Context", "Performance"]
    },
    {
      id: 3,
      title: "System Design Interview",
      platform: "Educative",
      instructor: "Design Gurus",
      completion: "95%",
      duration: "40 hours",
      rating: 4,
      skills: ["System Design", "Scalability", "Architecture", "Microservices"]
    }
  ]

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-purple-500/10 rounded-full mb-4">
            <GraduationCap className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-xl p-1 inline-flex space-x-1">
            {[
              { id: 'formal', label: 'Formal Education', icon: GraduationCap },
              { id: 'certifications', label: 'Certifications', icon: BadgeCheck },
              { id: 'courses', label: 'Online Courses', icon: BookOpen }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Formal Education */}
        {activeTab === 'formal' && (
          <div className="space-y-8">
            {formalEducation.map((edu, index) => (
              <div key={edu.id} className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${edu.color} flex items-center justify-center mb-6`}>
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-purple-400 font-medium mb-4">{edu.school}</p>
                    <div className="space-y-2 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-gray-300 mb-6">{edu.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Trophy className="w-5 h-5 mr-2 text-purple-400" />
                          Achievements
                        </h4>
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                              <p className="text-gray-300 text-sm">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <BookOpen className="w-5 h-5 mr-2 text-purple-400" />
                          Key Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.id} className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center flex-shrink-0`}>
                    <Certificate className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-purple-400 font-medium mb-2">{cert.issuer}</p>
                    <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{cert.date}</span>
                      <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded-full text-xs">
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Online Courses */}
        {activeTab === 'courses' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineCourses.map((course, index) => (
              <div key={course.id} className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < course.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
                <p className="text-purple-400 font-medium mb-1">{course.platform}</p>
                <p className="text-gray-400 text-sm mb-4">by {course.instructor}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-green-400">{course.completion}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: course.completion }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Duration: {course.duration}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Skills Learned</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}