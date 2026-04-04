import React from 'react'
import { motion } from 'framer-motion'
import "../CSS/Home.css"
import '../index.css' 

// 🖼️ Asset paths (from public directory)
const githubLogo = '/github.png'
const linkedinLogo = '/linkedin.png'
const gmailLogo = '/gmail.png'
const whatsappLogo = '/whatsapp.png'
const instagramLogo = '/insta.png'

export default function Home() {
  const professions = [
    'AI Enthusiast',
    'Full-Stack Developer',
    'IoT Explorer',
    'Open Source Contributor',
    'Problem Solver',
  ]

  const quickLinks = [
    { img: githubLogo, title: 'GitHub', link: 'https://github.com/Bigneshkumar' },
    { img: linkedinLogo, title: 'LinkedIn', link: 'https://www.linkedin.com/in/bignesh-kumar-201558376' },
    { img: gmailLogo, title: 'Email', link: 'mailto:bigneshkumar@gmail.com' },
    { img: whatsappLogo, title: 'WhatsApp', link: 'https://wa.me/+919142881131' },
    { img: instagramLogo, title: 'Instagram', link: '#' },
  ]

  return (
    <section className="home-section">
      {/* Typing Effect Styles */}
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
          @keyframes float3d { 
            0%, 100% { transform: translateY(0) rotateX(0deg); }
            50% { transform: translateY(-15px) rotateX(5deg); }
          }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo with 3D effect */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="photo-ring"
          />
          <motion.div
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="photo-ring photo-ring-2"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="photo-frame"
          >
            <div className="photo-placeholder">
              <motion.img
                src="/bk_profile.jpg"
                alt="Bignesh Kumar"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="profile-photo"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I'm{' '}
            <motion.span
              animate={{ backgroundPositionX: ['0%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="home-name"
            >
              Bignesh Kumar
            </motion.span>
          </h1>

          {/* Typing Animated Text */}
          <p className="typing-effect">
            Aspiring AI Engineer | Full-Stack Developer | CSE @ Adamas University
          </p>

          {/* Profession Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, background: 'linear-gradient(90deg, #00c8ff, #a855f7)' }} transition={{ type: 'spring', stiffness: 200 }} className="profession-tag">
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: '📍 Location', value: 'Kolkata, West Bengal' },
              { label: '💼 Expertise', value: 'AI/ML, Full-Stack Dev' },
              { label: '📧 Contact', value: 'bigneshkumar@gmail.com' },
            ].map((info, i) => (
              <motion.div key={i} whileHover={{ y: -4, scale: 1.05 }} transition={{ type: 'spring', stiffness: 250 }} className="info-card">
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Counter */}
      <motion.div 
        className="stats-strip"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {[
          { num: '5+', label: 'Projects Built' },
          { num: '10+', label: 'Skills Mastered' },
          { num: '2+', label: 'Certifications' },
          { num: '1st', label: 'Year B.Tech CSE' },
        ].map((s, i) => (
          <motion.div 
            key={i} 
            className="stat-item"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{ filter: 'drop-shadow(0 0 15px #00c8ff) brightness(1.2)' }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
