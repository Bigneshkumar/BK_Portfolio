import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CERTS = {
  tech: [
    {
      title: "Tata — GenAI Powered Data Analytics",
      org: "Forage (Tata iQ)",
      date: "2026",
      description: "Completed a job simulation focused on generative AI-powered data analytics, covering data processing, analysis visualization, and AI-driven insights.",
      gradient: "linear-gradient(135deg, #00c8ff22, #a855f722)",
    },
    {
      title: "AI Impact Summit Buildathon",
      org: "HCL GUVI",
      date: "2026",
      description: "Participated in the AI Impact Summit Buildathon organized by HCL GUVI, building AI-powered solutions for real-world challenges.",
      gradient: "linear-gradient(135deg, #a855f722, #f43f5e22)",
    },
    {
      title: "Front-end Development Internship",
      org: "Cognifyz Technologies",
      date: "2026",
      description: "Hands-on internship building responsive UI components, integrating APIs, and working with modern front-end frameworks.",
      gradient: "linear-gradient(135deg, #10b98122, #00c8ff22)",
    },
  ],
  other: [
    {
      title: "Google Cloud Skills Boost",
      org: "Google Cloud",
      date: "2025",
      description: "Completed learning pathways on Google Cloud Platform covering core infrastructure, data analytics, and machine learning services.",
      gradient: "linear-gradient(135deg, #f59e0b22, #00c8ff22)",
    },
    {
      title: "GitHub Foundations",
      org: "GitHub",
      date: "2025",
      description: "Learned version control best practices, collaboration workflows, and open source contribution patterns on GitHub.",
      gradient: "linear-gradient(135deg, #00c8ff22, #a855f722)",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0", position: 'relative', zIndex: 1 }}>
      <div style={{ background: "rgba(10,10,15,0.8)", borderRadius: 16, padding: 30, backdropFilter: 'blur(8px)', border: '1px solid rgba(0,200,255,0.08)' }}>
        <h2 style={{
          fontSize: "2rem",
          fontFamily: "'Outfit', sans-serif",
          background: 'linear-gradient(90deg, #00c8ff, #a855f7)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          marginBottom: 4,
        }}>
          Certificates 🏅
        </h2>
        <p style={{ color: "#aaa", fontFamily: "'Outfit', sans-serif" }}>
          Explore my certifications — technical & others.
        </p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <motion.button
              key={t}
              onClick={() => setTab(t)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "8px 20px",
                borderRadius: 20,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "linear-gradient(90deg, #00c8ff, #a855f7)" : "rgba(255,255,255,0.05)",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              {t === "tech" ? "Technical" : "Others"}
            </motion.button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(0, 200, 255, 0.2)",
                  y: -5,
                }}
                style={{
                  background: c.gradient,
                  borderRadius: 16,
                  padding: 24,
                  color: "#fff",
                  border: "1px solid rgba(0,200,255,0.1)",
                  backdropFilter: 'blur(8px)',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedCert(c)}
              >
                {/* Certificate Icon */}
                <div style={{
                  width: '100%',
                  height: 120,
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
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  >
                    🏆
                  </motion.span>
                </div>

                <strong style={{ fontSize: 17, fontFamily: "'Outfit', sans-serif", color: '#00c8ff' }}>{c.title}</strong>
                <div style={{ fontSize: 13, color: "#bbb", marginTop: 4, fontFamily: "'Outfit', sans-serif" }}>
                  {c.org} • {c.date}
                </div>
                <p style={{ fontSize: 14, color: '#999', marginTop: 10, lineHeight: 1.6 }}>
                  {c.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.85)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              backdropFilter: 'blur(8px)',
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                maxWidth: "500px",
                width: '90%',
                background: 'rgba(15,15,25,0.95)',
                borderRadius: 20,
                padding: 40,
                border: '1px solid rgba(0,200,255,0.2)',
                boxShadow: '0 0 50px rgba(0,200,255,0.15)',
                textAlign: 'center',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.span
                style={{ fontSize: 64, display: 'block', marginBottom: 20 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🏆
              </motion.span>
              <h3 style={{ color: '#00c8ff', fontSize: 22, marginBottom: 8, fontFamily: "'Outfit', sans-serif" }}>
                {selectedCert.title}
              </h3>
              <p style={{ color: '#aaa', marginBottom: 12 }}>{selectedCert.org} • {selectedCert.date}</p>
              <p style={{ color: '#ccc', lineHeight: 1.7 }}>{selectedCert.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCert(null)}
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
    </section>
  );
}
