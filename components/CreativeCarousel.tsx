'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Radio, Code, Smartphone, Palette } from 'lucide-react';

const originalCards = [
  { title: 'Content Creation', icon: <PenTool size={20} />, desc: 'Engaging content strategies to elevate your entire digital presence.', image: '/about/content.png' },
  { title: 'Promotion & Growth', icon: <Radio size={20} />, desc: 'Data-driven marketing, SEO, and robust analytics for scaling.', image: '/about/promotion.png' },
  { title: 'Web & App Dev', icon: <Code size={20} />, desc: 'Robust engineering meeting modern creative standards.', image: '/about/webdev.png' },
  { title: 'Graphic Designing', icon: <Smartphone size={20} />, desc: 'Stunning visual interfaces and UX designs that convert out-of-the-box.', image: '/about/graphics.png' },
  { title: 'Branding & Identity', icon: <Palette size={20} />, desc: 'Complete brand experiences, identity systems, and typography.', image: '/about/branding.png' }
];

// Duplicate the array to 10 items to allow invisible wrapping in framer-motion 3D coverflow
const CARDS = [...originalCards, ...originalCards].map((card, i) => ({ ...card, id: i }));

export default function CreativeCarousel() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', perspective: '1200px' }}>
      {CARDS.map((card, i) => {
        const len = CARDS.length; // 10
        let diff = (i - (position % len));
        
        // Wrap diff to range [-5, 4] or [-4, 5]
        if (diff > Math.floor(len / 2)) diff -= len;
        if (diff < -Math.floor(len / 2)) diff += len;

        const isActive = diff === 0;
        const x = diff * 280; // Distance spread
        const scale = isActive ? 1.05 : (1 - Math.abs(diff) * 0.15);
        const zIndex = 10 - Math.abs(diff);
        
        // Hide cards out of view perfectly before they wrap bounds
        const isVisible = Math.abs(diff) <= 2;
        const opacity = isVisible ? 1 : 0; 
        const pointerEvents = isVisible ? 'auto' : 'none';


        return (
          <motion.div
            key={card.id}
            style={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '32px',
              borderRadius: '24px',
              cursor: 'pointer',
              width: '270px',
              height: '360px',
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%), url(${card.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: isActive ? '0 30px 60px rgba(0,0,0,0.3)' : '0 10px 20px rgba(0,0,0,0.15)',
              border: isActive ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.05)',
              pointerEvents,
              boxSizing: 'border-box'
            }}
            animate={{ x, scale, zIndex, opacity }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }} 
            onClick={() => setPosition(position + diff)}
          >
            <div style={{ 
                   marginBottom: 'auto',
                   width: '48px',
                   height: '48px',
                   borderRadius: '12px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   transition: 'background-color 0.5s',
                   backgroundColor: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                   border: isActive ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.1)',
                   color: isActive ? 'white' : 'rgba(255,255,255,0.5)'
                 }}>
              {card.icon}
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', transition: 'color 0.5s', margin: '0 0 12px 0', color: isActive ? 'white' : 'rgba(255,255,255,0.9)' }}>
              {card.title}
            </h3>
            
            <motion.div 
               animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
               style={{ overflow: 'hidden' }}
               transition={{ duration: 0.4 }}
            >
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{card.desc}</p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
