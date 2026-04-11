'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    image: '/hero/1.png',
    title: 'Building <span class="gradient-text">Future-Ready</span> Digital Solutions',
    desc: 'Transforming businesses with advanced AI, web, and mobile engineering from the heart of Udaipur.',
  },
  {
    image: '/hero/2.png',
    title: 'Precision <span class="gradient-text">AI & ML</span> Systems',
    desc: 'Intelligent automation and predictive analytics designed for global scalability.',
  },
  {
    image: '/hero/3.png',
    title: 'Elegant <span class="gradient-text">Web & Mobile</span> Experiences',
    desc: 'Crafting stunning, high-performance interfaces that captivate and convert.',
  },
  {
    image: '/hero/4.png',
    title: 'Secure <span class="gradient-text">Cloud & DevOps</span>',
    desc: 'Reliable, scalable, and optimized infrastructure for modern enterprises.',
  },
];

export default function HeroSlider(): React.JSX.Element {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="hero-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <div 
            className="hero-image" 
            style={{ backgroundImage: `url(${slides[current].image})` }} 
          />
          <div className="hero-overlay" />
          
          <div className="hero-content container">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="badge-dot" />
              Trusted Tech Partner Since 2020
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              dangerouslySetInnerHTML={{ __html: slides[current].title }}
            />

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {slides[current].desc}
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link href="/contact" className="btn btn-glow">
                Get Started →
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`hero-dot ${current === i ? 'active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .hero-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          filter: brightness(0.5);
          transition: transform 12s linear;
          transform: scale(1.05);
        }
        .hero-slide[style*="opacity: 1"] .hero-image {
          transform: scale(1.1);
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent 0%, var(--bg-primary) 100%);
          opacity: 0.8;
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 24px; 
          max-width: 1100px !important;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.08); /* More subtle */
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--neon-blue);
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 32px; /* More space below badge */
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        .badge-dot {
          width: 8px;
          height: 8px;
          background: var(--neon-blue);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--neon-blue);
          animation: badge-pulse 2s infinite;
        }
        @keyframes badge-pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(1.8rem, 7vw, 4.2rem); /* Slightly reduced for better fit */
          font-weight: 950;
          line-height: 1.05;
          margin-bottom: 24px;
          color: var(--text-primary);
          text-shadow: 0 10px 30px rgba(0,0,0,0.5);
          letter-spacing: -3px;
          text-align: center;
        }
        .hero-description {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          color: var(--text-secondary);
          margin: 0 auto 48px; /* More space below description */
          max-width: 750px;
          line-height: 1.5;
          opacity: 0.9;
          font-weight: 500;
          text-align: center;
        }
        .hero-buttons {
          display: flex;
          gap: 24px; /* More gap between buttons */
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        .hero-buttons .btn {
          padding: 16px 40px; /* Larger buttons for hero */
          font-size: 1.05rem;
          min-width: 200px;
        }
        .hero-dots {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }
        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 1px;
          background: var(--text-muted);
          border: none;
          cursor: pointer;
          transition: all 0.4s var(--transition-base);
          padding: 0;
          opacity: 0.5;
        }
        .hero-dot.active {
          width: 28px;
          background: var(--neon-cyan);
          opacity: 1;
          box-shadow: 0 0 12px var(--neon-cyan);
        }
        [data-theme='light'] .hero-image {
          filter: brightness(1);
          opacity: 0.55;
        }
        [data-theme='light'] .hero-overlay {
          background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, var(--bg-primary) 100%);
          opacity: 0.85;
        }
        [data-theme='light'] .hero-title {
          color: #0f172a;
          text-shadow: none;
        }
        [data-theme='light'] .hero-description {
          color: #1e293b;
          opacity: 1;
        }
        [data-theme='light'] .hero-badge {
          background: rgba(0, 198, 255, 0.12);
          border-color: rgba(0, 198, 255, 0.3);
          color: #0369a1;
          box-shadow: 0 2px 10px rgba(0, 198, 255, 0.1);
        }
        @media (max-width: 768px) {
          .hero-content {
            padding-top: 120px; /* Still generous for mobile */
          }
          .hero-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </div>
  );
}
