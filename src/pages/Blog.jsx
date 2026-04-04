import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import "./blog.css";

export default function Blog() {
  const defaultPosts = [
    {
      id: 1,
      title: "My Journey from Bihar to Kolkata — Chasing Tech Dreams",
      text: "Moving from Bihar to Adamas University in Kolkata was one of the biggest decisions of my life. The transition taught me resilience, adaptability, and the value of stepping out of your comfort zone. Every challenge is a lesson in disguise.",
    },
    {
      id: 2,
      title: "Why Full-Stack Development Excites Me",
      text: "There's something magical about building an application from scratch — designing the frontend that users love, crafting the backend logic, and connecting everything with APIs. Full-stack development lets me see the complete picture.",
    },
    {
      id: 3,
      title: "The Power of Hackathons & Learning by Doing",
      text: "Participating in hackathons like the AI Impact Summit Buildathon has taught me more than any textbook. The pressure, the creativity, the collaboration — it's the fastest way to grow as a developer.",
    },
    {
      id: 4,
      title: "Building Paharedaar AI — My Vision for Career Guidance",
      text: "Students in Tier 2/3 colleges often lack proper career guidance. That's why I started building Paharedaar AI — an AI-powered platform that can provide personalized career advice. Technology should democratize opportunities.",
    },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("bk_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("bk_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("bk_blog_voted") || "{}");
    if (votedByUser[id]) return;

    const next = posts.map((p) =>
      p.id === id ? { ...p, [type]: p[type] + 1, userVote: type } : p
    );
    setPosts(next);

    const votes = Object.fromEntries(
      next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }])
    );
    localStorage.setItem("bk_blog_votes", JSON.stringify(votes));
    localStorage.setItem(
      "bk_blog_voted",
      JSON.stringify({ ...votedByUser, [id]: type })
    );
  }

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <motion.h2
        className="blog-title"
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: "'Outfit', sans-serif",
          background: 'linear-gradient(90deg, #00c8ff, #a855f7)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        📝 My Blog
      </motion.h2>
      <p className="blog-sub" style={{ fontFamily: "'Outfit', sans-serif" }}>
        Personal thoughts, experiences, and reflections — feel free to react!
      </p>

      <div className="blog-grid">
        {posts.map((p, idx) => (
          <motion.div
            key={p.id}
            className="blog-post"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 25px rgba(0,200,255,0.12)",
            }}
            style={{
              background: 'rgba(10,10,18,0.8)',
              border: '1px solid rgba(0,200,255,0.1)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <h3 className="post-title" style={{ fontFamily: "'Outfit', sans-serif", color: '#00c8ff' }}>{p.title}</h3>
            <p className="post-text">{p.text}</p>

            <div className="vote-container">
              <motion.button
                onClick={() => vote(p.id, "agree")}
                disabled={!!p.userVote}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle agree ${
                  p.userVote === "agree" ? "active" : ""
                }`}
              >
                <ThumbsUp size={20} />
                <motion.span
                  key={p.agree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.agree}
                </motion.span>
              </motion.button>

              <motion.button
                onClick={() => vote(p.id, "disagree")}
                disabled={!!p.userVote}
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.15 }}
                className={`vote-btn-circle disagree ${
                  p.userVote === "disagree" ? "active" : ""
                }`}
              >
                <ThumbsDown size={20} />
                <motion.span
                  key={p.disagree}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="vote-count"
                >
                  {p.disagree}
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
