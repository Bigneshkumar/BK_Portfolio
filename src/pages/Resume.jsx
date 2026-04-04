import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section className="container" style={{ padding: "60px 0", position: 'relative', zIndex: 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "rgba(10,10,15,0.8)",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 30px rgba(0, 200, 255, 0.08)",
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(0,200,255,0.08)',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 28,
            background: 'linear-gradient(90deg, #00c8ff, #a855f7)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: 12,
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25, fontFamily: "'Outfit', sans-serif" }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(0,200,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
            border: '1px solid rgba(0,200,255,0.08)',
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00c8ff", marginBottom: 4, fontFamily: "'Outfit', sans-serif" }}>
              👨‍💻 BIGNESH KUMAR
            </h3>
            <p style={{ marginTop: 10, fontSize: 15, color: "#ccc" }}>
              1st Year B.Tech — CSE | Adamas University, Kolkata
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Kolkata, West Bengal (Originally from Bihar)
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ bigneshkumar@gmail.com
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, rgba(0,200,255,0.1), rgba(168,85,247,0.05))",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(0,200,255,0.1)",
              maxWidth: 560,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00c8ff", fontFamily: "'Outfit', sans-serif" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Motivated Computer Science student at Adamas University with a focus on 
              AI and Web Development. Hands-on experience in building deployed projects, 
              APIs, and responsive web applications. Currently pursuing a frontend 
              development internship at Cognifyz Technologies.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 40,
            border: "1px solid rgba(0,200,255,0.08)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(0,200,255,0.02)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00c8ff", marginBottom: 12, fontFamily: "'Outfit', sans-serif" }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>
              <strong>B.Tech in Computer Science Engineering</strong> — Adamas University,
              Barasat, Kolkata (2025–2029) <br />
              <span style={{ color: "#aaa" }}>Currently Pursuing</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board (PCM) — R.K. High School Jarang</strong> (BSEB) <br />
              <span style={{ color: "#aaa" }}>Percentage: 62%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board — Mount Litera Zee School</strong> (Muzaffarpur, CBSE) <br />
              <span style={{ color: "#aaa" }}>Percentage: 73%</span>
            </li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00c8ff", marginBottom: 12, fontFamily: "'Outfit', sans-serif" }}>💼 Experience</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>🏢 <strong>Front-end Development Intern</strong> — Cognifyz Technologies (March 2026 – Present)</li>
            <li>📊 <strong>GenAI Powered Data Analytics</strong> — Tata iQ, Forage (March 2026)</li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00c8ff", marginBottom: 12, fontFamily: "'Outfit', sans-serif" }}>🚀 Projects</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li>1️⃣ UrbanPulse — Urban Data Platform</li>
            <li>2️⃣ Student Management System (Java + MySQL)</li>
            <li>3️⃣ Weather Forecast App (Python + Tkinter)</li>
            <li>4️⃣ Personal Portfolio (React + Framer Motion)</li>
            <li>5️⃣ Paharedaar AI — Career Guidance Platform</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ marginTop: 40 }}
        >
          <h4 style={{ fontSize: 20, color: "#00c8ff", marginBottom: 12, fontFamily: "'Outfit', sans-serif" }}>⚙️ Skills</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              "Java", "Python", "C", "JavaScript", "TypeScript",
              "React", "Next.js", "Node.js", "Express.js",
              "Flask", "FastAPI", "HTML5", "CSS3",
              "MySQL", "MongoDB", "Git", "GitHub",
              "Google Cloud", "AWS", "Firebase",
              "Vercel", "Cloudflare",
              "Problem Solving", "Teamwork", "Creativity",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, background: "rgba(0,200,255,0.2)" }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  padding: "6px 14px",
                  borderRadius: 20,
                  fontSize: 13,
                  color: "#ccc",
                  border: '1px solid rgba(0,200,255,0.1)',
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Profile Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/Bigneshkumar" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/bignesh-kumar-201558376" },
            { name: "🌐 Portfolio", link: "https://bignesh-kumar-portfolio.vercel.app/" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00c8ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
