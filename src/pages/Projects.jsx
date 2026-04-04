import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🌐 UrbanPulse Project',
    desc: 'A comprehensive urban data platform that aggregates and visualizes city-level information for smarter urban planning and community insights.',
    tech: ['React', 'Node.js', 'MongoDB', 'API Integration'],
    live: '#',
    code: 'https://github.com/Bigneshkumar/UrbanPulse-Project',
    gradient: 'linear-gradient(135deg, #00c8ff22, #a855f722)',
  },
  {
    title: '🎓 Student Management System',
    desc: 'A Java-based desktop application for managing student records — featuring CRUD operations, MySQL integration, and an intuitive Swing GUI.',
    tech: ['Java', 'MySQL', 'Swing', 'JDBC'],
    live: '#',
    code: 'https://github.com/Bigneshkumar/Student-Management-System',
    gradient: 'linear-gradient(135deg, #a855f722, #f43f5e22)',
  },
  {
    title: '🌤️ Weather Forecast App',
    desc: 'A Python application that fetches real-time weather data using external APIs, featuring a clean Tkinter GUI for intuitive weather monitoring.',
    tech: ['Python', 'Tkinter', 'REST API', 'JSON'],
    live: '#',
    code: 'https://github.com/Bigneshkumar/Weather-Forecast-App',
    gradient: 'linear-gradient(135deg, #00c8ff22, #10b98122)',
  },
  {
    title: '💼 Personal Portfolio',
    desc: 'My personal digital space — featuring interactive 3D particle systems, glassmorphism design, dynamic gradient theming, and a fully responsive layout.',
    tech: ['JavaScript', 'CSS3', 'Vite', 'Motion Animations'],
    live: 'https://bignesh-kumar-portfolio.vercel.app/',
    code: 'https://github.com/Bigneshkumar/Portfolio',
    gradient: 'linear-gradient(135deg, #a855f722, #00c8ff22)',
  },
  {
    title: '🤖 Paharedaar AI',
    desc: 'An AI-powered career platform designed for Tier 2/3 college students — providing personalized career guidance, skill assessment, and job matching.',
    tech: ['Python', 'FastAPI', 'React', 'Google Cloud'],
    live: '#',
    code: 'https://github.com/Bigneshkumar',
    gradient: 'linear-gradient(135deg, #f43f5e22, #a855f722)',
  },
]

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div className="card" style={{ background: 'rgba(10,10,15,0.8)', borderRadius: 16, padding: 30, backdropFilter: 'blur(8px)', border: '1px solid rgba(0,200,255,0.08)' }}>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          style={{
            fontSize: '2rem',
            fontFamily: "'Outfit', sans-serif",
            background: 'linear-gradient(90deg, #00c8ff, #a855f7)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: 8,
          }}
        >
          🚀 Projects
        </motion.h2>
        <p style={{ color: '#aaa', marginBottom: 30, fontFamily: "'Outfit', sans-serif" }}>
          A collection of my major works — blending innovation, code & creativity.
        </p>

        <div className="projects-grid" style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03, y: -8 }}
              viewport={{ once: true }}
              style={{
                background: p.gradient,
                border: '1px solid rgba(0,200,255,0.12)',
                borderRadius: 16,
                padding: 24,
                overflow: 'hidden',
                boxShadow: '0 0 25px rgba(0,200,255,0.06)',
                backdropFilter: 'blur(8px)',
                transition: 'box-shadow 0.3s ease',
              }}
            >
              {/* Project icon header */}
              <div style={{
                width: '100%',
                height: '140px',
                borderRadius: 12,
                background: 'rgba(0,0,0,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 16,
                border: '1px solid rgba(255,255,255,0.05)',
              }}>
                <motion.span
                  style={{ fontSize: 48 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {p.title.split(' ')[0]}
                </motion.span>
              </div>

              <div>
                <h3 style={{ fontSize: 18, color: '#00c8ff', marginBottom: 6, fontFamily: "'Outfit', sans-serif" }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: '#bbb', marginBottom: 12, lineHeight: 1.6 }}>{p.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: 'rgba(0,200,255,0.08)',
                        border: '1px solid rgba(0,200,255,0.15)',
                        padding: '4px 10px',
                        borderRadius: 20,
                        fontSize: 12,
                        color: '#a0d8ff',
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: 'rgba(255,255,255,0.05)',
                      color: '#00c8ff',
                      padding: '6px 14px',
                      borderRadius: 20,
                      fontSize: 13,
                      border: '1px solid rgba(0,200,255,0.15)',
                      textDecoration: 'none',
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>
                  {p.live !== '#' && (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.08 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 5,
                        background: 'linear-gradient(90deg, #00c8ff, #a855f7)',
                        color: '#fff',
                        padding: '6px 14px',
                        borderRadius: 20,
                        fontSize: 13,
                        textDecoration: 'none',
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      <ExternalLink size={14} /> Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
