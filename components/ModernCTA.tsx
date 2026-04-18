'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ModernCTA() {
  return (
    <div className="modern-cta-section">
      <div className="container">
        <motion.div 
          className="modern-cta-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Concentric Rings Background */}
          <div className="cta-rings-container">
            <div className="cta-ring ring-1"></div>
            <div className="cta-ring ring-2"></div>
            <div className="cta-ring ring-3"></div>
            <div className="cta-ring ring-4"></div>
            <div className="cta-ring ring-5"></div>
          </div>

          <div className="cta-content">
            <h2 className="cta-title">Let&apos;s Get In Touch.</h2>
            <p className="cta-description">
              Expert digital solutions for your business. Whether it&apos;s a complex web app, 
              strategic marketing, or AI automation – we&apos;re here to help you scale.
            </p>
            
            <div className="cta-actions">
              <Link href="/contact" className="pill-btn">
                <span>Book a discovery call</span>
                <div className="pill-dot"></div>
              </Link>
              <Link href="/contact" className="pill-btn">
                <span>Get a free audit</span>
                <div className="pill-dot"></div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
