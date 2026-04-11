'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionReveal from './SectionReveal';

export default function TechCTA() {
  return (
    <section className="section" id="cta">
      <div className="container">
        <SectionReveal>
          <div className="cta-tech-wrapper">
            <div className="cta-tech-grid" />
            <div className="cta-tech-scan" />
            
            <div className="cta-tech-corner corner-tl" />
            <div className="cta-tech-corner corner-tr" />
            <div className="cta-tech-corner corner-bl" />
            <div className="cta-tech-corner corner-br" />

            <div className="cta-tech-status-bars">
              <div className="status-row">
                <span>Core Logic</span>
                <div className="status-bar-bg"><div className="status-bar-fill" style={{ animationDelay: '0s' }} /></div>
              </div>
              <div className="status-row">
                <span>Neural Net</span>
                <div className="status-bar-bg"><div className="status-bar-fill" style={{ animationDelay: '-1.5s' }} /></div>
              </div>
              <div className="status-row">
                <span>Sync Status</span>
                <div className="status-row-text" style={{ color: '#00ff00' }}>[ ACTIVE ]</div>
              </div>
            </div>

            <div className="cta-tech-coordinates">
              SEC_ID: MS_INF_2026 // LOC: UDAIPUR_IN // 24.5854° N, 73.7125° E
            </div>

            <div className="cta-tech-content">
              <h2 className="cta-tech-title">
                Let&apos;s Build Something <span className="gradient-text">Amazing</span> Together
              </h2>
              <p className="cta-tech-subtitle">
                Ready to transform your ideas into reality? Our elite technical team is 
                standing by to engineer your next digital breakthrough.
              </p>
              <div className="cta-tech-buttons">
                <Link href="/contact" className="btn btn-tech" id="cta-contact">
                  Initialize Project →
                </Link>
                <Link href="/contact" className="btn btn-tech btn-tech-secondary" id="cta-quote">
                  Technical Brief
                </Link>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
