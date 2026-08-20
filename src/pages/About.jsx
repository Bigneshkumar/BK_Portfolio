import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap, FaBriefcase } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        color: "white",
        padding: "3rem 1rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* --- About Me + Education Section --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.03)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 30px rgba(0,200,255,0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0,200,255,0.08)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, #00c8ff, #a855f7)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I'm <strong style={{ color: "#00c8ff" }}>Bignesh Kumar</strong> — an aspiring{" "}
          <strong>AI Engineer</strong> and{" "}
          <strong>Full-Stack Developer</strong> currently pursuing B.Tech in 
          Computer Science Engineering at <strong>Adamas University, Kolkata</strong>.
          I'm passionate about building intelligent systems, crafting beautiful web 
          experiences, and exploring the intersection of AI and real-world solutions.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
          Originally from <strong>Bihar</strong>, I moved to Kolkata to pursue my dream 
          of becoming a tech innovator. Beyond coding, I enjoy exploring new technologies, 
          contributing to open-source projects, and participating in hackathons. My goal is 
          to build solutions that not only perform — but also <strong style={{ color: "#a855f7" }}>inspire</strong>.
        </p>

        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", marginTop: "1rem" }}>
          Currently interning as a <strong>Front-end Development Intern at Cognifyz Technologies</strong>,
          where I build responsive UI components and integrate external APIs. I also completed 
          the <strong>GenAI Powered Data Analytics</strong> job simulation at Tata iQ via Forage.
        </p>

        {/* --- Experience Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background: "linear-gradient(90deg, #00c8ff, #a855f7)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Experience
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,200,255,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(0,200,255,0.1)",
                boxShadow: "0 0 15px rgba(0,200,255,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaBriefcase size={36} color="#00c8ff" />
              <div>
                <h4 style={{ color: "#00c8ff", marginBottom: "0.4rem", fontSize: "1.25rem" }}>
                  Front-end Development Intern
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem" }}>
                  <strong>Cognifyz Technologies</strong>
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  March 2026 – Present | Building responsive UIs & integrating APIs
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(168,85,247,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(168,85,247,0.1)",
                boxShadow: "0 0 15px rgba(168,85,247,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaBriefcase size={36} color="#a855f7" />
              <div>
                <h4 style={{ color: "#a855f7", marginBottom: "0.4rem", fontSize: "1.25rem" }}>
                  GenAI Powered Data Analytics — Tata iQ
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "0.2rem" }}>
                  <strong>Forage Job Simulation</strong>
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Completed March 2026
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background: "linear-gradient(90deg, #00c8ff, #a855f7)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,200,255,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(0,200,255,0.1)",
                boxShadow: "0 0 15px rgba(0,200,255,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="#00c8ff" />
              <div>
                <h4
                  style={{
                    color: "#00c8ff",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  B.Tech in Computer Science Engineering
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Adamas University</strong> — Barasat, Kolkata
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  2nd Year (Pursuing) | Batch: 2025–2029
                </p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(168,85,247,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(168,85,247,0.1)",
                boxShadow: "0 0 15px rgba(168,85,247,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={38} color="#a855f7" />
              <div>
                <h4
                  style={{
                    color: "#a855f7",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Higher Secondary Education (12th Grade — PCM)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>R.K. High School Jarang</strong> — BSEB
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Percentage: 62%
                </p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,200,255,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(0,200,255,0.1)",
                boxShadow: "0 0 15px rgba(0,200,255,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaSchool size={36} color="#00c8ff" />
              <div>
                <h4
                  style={{
                    color: "#00c8ff",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary Education (10th Grade)
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Mount Litera Zee School</strong> — Muzaffarpur, CBSE
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Percentage: 73%
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
