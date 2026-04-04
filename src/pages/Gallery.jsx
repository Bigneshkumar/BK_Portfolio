import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "../CSS/Gallery.css";

// Gallery uses text-based cards instead of images since we don't have Bignesh's personal photos yet
const GALLERY_ITEMS = {
  achievements: [
    {
      id: 1,
      emoji: "🏆",
      title: "AI Impact Summit Buildathon",
      caption: "Participated in HCL GUVI's AI Impact Summit Buildathon — building AI solutions for real-world problems.",
      color: "#00c8ff",
    },
    {
      id: 2,
      emoji: "💼",
      title: "Cognifyz Technologies Internship",
      caption: "Started my Front-end Development internship at Cognifyz Technologies — building responsive UIs.",
      color: "#a855f7",
    },
    {
      id: 3,
      emoji: "📊",
      title: "Tata iQ — GenAI Data Analytics",
      caption: "Completed the GenAI Powered Data Analytics simulation at Tata iQ via Forage.",
      color: "#10b981",
    },
  ],
  projects: [
    {
      id: 1,
      emoji: "🌐",
      title: "UrbanPulse Project",
      caption: "Built a comprehensive urban data platform for smarter city planning and community insights.",
      color: "#f59e0b",
    },
    {
      id: 2,
      emoji: "🎓",
      title: "Student Management System",
      caption: "Java-based application with MySQL integration for managing student records efficiently.",
      color: "#00c8ff",
    },
    {
      id: 3,
      emoji: "🤖",
      title: "Paharedaar AI Platform",
      caption: "AI-powered career guidance platform designed for Tier 2/3 college students.",
      color: "#a855f7",
    },
  ],
  journey: [
    {
      id: 1,
      emoji: "🚀",
      title: "Bihar to Kolkata",
      caption: "Moved from Bihar to Kolkata to pursue B.Tech CSE at Adamas University — a life-changing decision.",
      color: "#f43f5e",
    },
    {
      id: 2,
      emoji: "💻",
      title: "First Line of Code",
      caption: "Started my coding journey with C and Java. The spark of logic ignited a lifelong passion.",
      color: "#00c8ff",
    },
    {
      id: 3,
      emoji: "🌟",
      title: "The Dream",
      caption: "Building a startup from college — IoT, AI, and software combined to solve real-world problems in India.",
      color: "#a855f7",
    },
  ],
};

const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4 } },
};

export default function Gallery() {
  const [tab, setTab] = useState("achievements");
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      style={{ position: 'relative', zIndex: 1 }}
    >
      <motion.h2 
        className="gallery-title" 
        variants={childVariants}
        style={{
          fontFamily: "'Outfit', sans-serif",
          background: 'linear-gradient(90deg, #00c8ff, #a855f7)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Gallery
      </motion.h2>

      {/* Tabs */}
      <motion.div className="tab-buttons" variants={childVariants}>
        {["achievements", "projects", "journey"].map((type) => (
          <motion.button
            key={type}
            className={`tab ${tab === type ? "active" : ""}`}
            onClick={() => setTab(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              background: tab === type ? 'linear-gradient(90deg, #00c8ff, #a855f7)' : 'rgba(255,255,255,0.05)',
              border: 'none',
              color: '#fff',
              padding: '8px 20px',
              borderRadius: 20,
              cursor: 'pointer',
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="post-feed"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
            marginTop: 30,
          }}
        >
          {GALLERY_ITEMS[tab].map((item) => (
            <motion.div
              key={item.id}
              variants={childVariants}
              whileHover={{ y: -8, boxShadow: `0 0 30px ${item.color}22` }}
              onClick={() => setSelectedItem(item)}
              style={{
                background: 'rgba(10,10,18,0.8)',
                borderRadius: 16,
                padding: 28,
                border: `1px solid ${item.color}22`,
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
              }}
            >
              <motion.div
                style={{
                  width: '100%',
                  height: 140,
                  borderRadius: 12,
                  background: `${item.color}11`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                  border: `1px solid ${item.color}22`,
                }}
              >
                <motion.span
                  style={{ fontSize: 56 }}
                  animate={{ y: [0, -10, 0], rotateZ: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {item.emoji}
                </motion.span>
              </motion.div>
              <h3 style={{ color: item.color, fontSize: 18, marginBottom: 8, fontFamily: "'Outfit', sans-serif" }}>
                {item.title}
              </h3>
              <p style={{ color: '#bbb', fontSize: 14, lineHeight: 1.6 }}>
                {item.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedItem(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              backdropFilter: 'blur(8px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: 500,
                width: '90%',
                background: 'rgba(15,15,25,0.95)',
                borderRadius: 20,
                padding: 40,
                textAlign: 'center',
                border: `1px solid ${selectedItem.color}33`,
                boxShadow: `0 0 50px ${selectedItem.color}22`,
              }}
            >
              <motion.span
                style={{ fontSize: 72, display: 'block', marginBottom: 20 }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {selectedItem.emoji}
              </motion.span>
              <h3 style={{ color: selectedItem.color, fontSize: 24, marginBottom: 12, fontFamily: "'Outfit', sans-serif" }}>
                {selectedItem.title}
              </h3>
              <p style={{ color: '#ccc', lineHeight: 1.7, fontSize: 16 }}>
                {selectedItem.caption}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedItem(null)}
                style={{
                  marginTop: 24,
                  padding: '10px 30px',
                  borderRadius: 20,
                  border: 'none',
                  background: 'linear-gradient(90deg, #00c8ff, #a855f7)',
                  color: '#fff',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
