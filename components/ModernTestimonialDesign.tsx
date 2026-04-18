'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  highlight: string;
  bgColor: string;
  accentColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "MS Infinex transformed our vision into a stunning digital platform. Their expertise in AI and web development is truly world-class. I worked with them for a brief time, and am extremely impressed with their design and technical direction across all mediums.",
    highlight: "extremely impressed",
    author: "Ernest Hemingway",
    role: "Marketing Director",
    company: "Global Tech",
    avatar: "https://i.pravatar.cc/150?u=ernest",
    bgColor: "#f5f5dc", // Beige-ish
    accentColor: "#1a237e" // Navy
  },
  {
    id: 2,
    quote: "The team delivered our mobile app ahead of schedule with exceptional quality. Their attention to detail and modern tech stack made all the difference. We are beyond satisfied with the results and the professional approach they maintained throughout.",
    highlight: "beyond satisfied",
    author: "Mackie Clonts",
    role: "Project Manager",
    company: "CareRev",
    avatar: "https://i.pravatar.cc/150?u=mackie",
    bgColor: "#e8f5e9", // Light green
    accentColor: "#2e7d32"
  },
  {
    id: 3,
    quote: "Outstanding cloud & DevOps solutions that reduced our infrastructure costs by 40%. Their UI/UX design work is absolutely phenomenal. They redesigned our entire platform and our customer satisfaction scores went through the roof.",
    highlight: "absolutely phenomenal",
    author: "Marcus Lee",
    role: "UX Lead",
    company: "DesignHub",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    bgColor: "#fce4ec", // Light pink
    accentColor: "#c2185b"
  },
  {
    id: 4,
    quote: "Their digital marketing strategies helped us achieve 5x ROI within just 3 months. Their data-driven approach and creative solutions are unmatched in the industry today. Truly a game-changer for our business expansion.",
    highlight: "game-changer",
    author: "Sarah Jenkins",
    role: "CEO",
    company: "GrowthWave",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    bgColor: "#e3f2fd", // Light blue
    accentColor: "#1565c0"
  }
];

export default function ModernTestimonialDesign() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Helper to get relative position
  const getPos = (i: number) => {
    const len = testimonials.length;
    let diff = i - index;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
  };

  return (
    <div className="modern-testimonial-section">
      <div className="modern-testimonial-carousel">
        <div className="modern-testimonial-header">
          <div className="navigation-controls">
            <button onClick={prev} className="nav-btn" aria-label="Previous">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="nav-btn" aria-label="Next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {testimonials.map((item, i) => {
          const pos = getPos(i);
          const isActive = pos === 0;
          
          return (
            <motion.div
              key={item.id}
              className={`modern-testimonial-card ${isActive ? 'active' : ''}`}
              initial={false}
              animate={{
                x: pos * 350, 
                scale: isActive ? 1 : 0.8,
                opacity: Math.abs(pos) > 1 ? 0 : 1 - Math.abs(pos) * 0.6,
                zIndex: isActive ? 10 : 5 - Math.abs(pos),
                rotateY: pos * 10,
                filter: isActive ? 'blur(0px)' : 'blur(8px)',
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25
              }}
              style={{
                backgroundColor: item.bgColor,
                color: item.accentColor,
              } as any}
            >
              <div className="card-content-wrapper">
                <div className="card-top">
                  <Quote 
                    size={48} 
                    fill="currentColor" 
                    stroke="none" 
                    className="quote-icon" 
                  />
                </div>

                <div className="card-body">
                  <p className="testimonial-quote">
                    &ldquo;{item.quote.split(item.highlight).map((part, index, array) => (
                      <span key={index}>
                        {part}
                        {index < array.length - 1 && (
                          <span className="highlight-text" style={{ backgroundColor: 'rgba(212, 225, 87, 0.6)' }}>
                            {item.highlight}
                          </span>
                        )}
                      </span>
                    ))}&rdquo;
                  </p>
                </div>

                <div className="card-footer">
                  <div className="author-info">
                    <div className="avatar-wrapper">
                      <img src={item.avatar} alt={item.author} className="author-avatar" />
                      <div className="verified-badge">
                        <CheckCircle2 size={16} fill="#4caf50" color="#fff" strokeWidth={1} />
                      </div>
                    </div>
                    <div className="author-details">
                      <h4 className="author-name">{item.author}</h4>
                      <p className="author-role">{item.role} , {item.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
