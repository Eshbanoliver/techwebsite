'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionReveal from '@/components/SectionReveal';

const timeline = [
  { year: '2020', title: 'Founded', desc: 'MS Infinix was born in Udaipur with a vision to deliver world-class tech solutions.' },
  { year: '2021', title: 'First 25 Clients', desc: 'Expanded our team and delivered projects across web, mobile, and cloud domains.' },
  { year: '2022', title: 'AI Division Launch', desc: 'Launched our dedicated AI & ML division, building intelligent automation solutions.' },
  { year: '2023', title: '100+ Projects', desc: 'Crossed the 100-project milestone with clients spanning India and international markets.' },
  { year: '2024', title: 'Global Expansion', desc: 'Began serving clients in the US, UK, and Middle East with enterprise-grade solutions.' },
  { year: '2025', title: 'Innovation Hub', desc: 'Established our R&D lab focusing on emerging technologies and next-gen digital products.' },
];

const techStack = [
  { icon: '⚛️', name: 'React' },
  { icon: '▲', name: 'Next.js' },
  { icon: '🟢', name: 'Node.js' },
  { icon: '🐍', name: 'Python' },
  { icon: '🧠', name: 'TensorFlow' },
  { icon: '📱', name: 'Flutter' },
  { icon: '⚡', name: 'React Native' },
  { icon: '☁️', name: 'AWS' },
  { icon: '🔷', name: 'Azure' },
  { icon: '🐳', name: 'Docker' },
  { icon: '☸️', name: 'Kubernetes' },
  { icon: '🍃', name: 'MongoDB' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🔥', name: 'Firebase' },
  { icon: '🎨', name: 'Figma' },
  { icon: '📊', name: 'Power BI' },
];

const teamValues = [
  { icon: '🎯', title: 'Purpose-Driven', desc: 'Every project we take on has a clear purpose and measurable outcomes.' },
  { icon: '🔬', title: 'Research-First', desc: 'We invest time in understanding the problem before jumping to solutions.' },
  { icon: '🤝', title: 'Collaborative', desc: 'We work as an extension of your team, not just a vendor.' },
  { icon: '📈', title: 'Growth-Oriented', desc: 'We build solutions that scale with your business ambitions.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">About Us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            The Story Behind <span className="gradient-text">MS Infinix</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Innovation meets excellence — learn how we&apos;re shaping the future of digital technology from the heart of Rajasthan.
          </motion.p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="section" id="company-overview">
        <div className="container">
          <SectionReveal>
            <div className="about-content">
              <div className="about-text">
                <h2>
                  Pioneering <span className="gradient-text">Digital Excellence</span>
                </h2>
                <p>
                  MS Infinix was founded in 2020 in the heart of Udaipur, Rajasthan, with a singular mission:
                  to bridge the gap between innovative ideas and exceptional digital products. What started as
                  a small team of passionate developers has grown into a full-service tech company serving
                  clients across the globe.
                </p>
                <p>
                  We believe that technology should be an enabler, not a barrier. Our team of expert engineers,
                  designers, and strategists work collaboratively to deliver solutions that are not only
                  technically sound but also beautifully designed and user-friendly.
                </p>
                <p>
                  From AI-powered automation to stunning web experiences, from robust mobile apps to scalable
                  cloud infrastructure — we are your one-stop partner for all things digital. Our commitment
                  to quality, innovation, and client success sets us apart.
                </p>
                <div style={{ marginTop: 32 }}>
                  <Link href="/contact" className="btn btn-primary" id="about-contact-cta">
                    Work With Us →
                  </Link>
                </div>
              </div>
              <div className="about-image-placeholder">
                <span style={{ position: 'relative', zIndex: 1, fontSize: '5rem' }}>💡</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" id="about-mv">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Our Purpose</span>
              <h2 className="section-title">
                Mission & <span className="gradient-text">Vision</span>
              </h2>
            </div>
          </SectionReveal>
          <div className="mv-grid">
            <motion.div
              className="mv-card glass-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses of all sizes with top-tier technology solutions that drive meaningful growth,
                enhance operational efficiency, and create unforgettable digital experiences. We are committed to
                turning complex challenges into elegant solutions through innovation, expertise, and a relentless
                pursuit of quality.
              </p>
            </motion.div>
            <motion.div
              className="mv-card glass-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="mv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be recognized as a global leader in digital transformation, known for our innovative approach,
                exceptional quality, and unwavering commitment to client success. We envision a world where
                technology unlocks limitless possibilities for every business, and MS Infinix stands at the
                forefront of making that vision a reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="section" id="our-journey">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Our Journey</span>
              <h2 className="section-title">
                The Path We&apos;ve <span className="gradient-text">Traveled</span>
              </h2>
              <p className="section-subtitle">
                From a small startup to a trusted global tech partner — here&apos;s our story.
              </p>
            </div>
          </SectionReveal>
          <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card"
                style={{ padding: '28px 32px', display: 'flex', gap: 24, alignItems: 'flex-start' }}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div style={{
                  minWidth: 60, height: 60, borderRadius: 'var(--radius-md)',
                  background: 'var(--gradient-primary)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: '0.9rem', flexShrink: 0,
                }}>
                  {item.year}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: 6 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section" id="team-values">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Our Approach</span>
              <h2 className="section-title">
                How We <span className="gradient-text">Work</span>
              </h2>
            </div>
          </SectionReveal>
          <div className="metrics-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {teamValues.map((v, i) => (
              <motion.div
                key={i}
                className="glass-card"
                style={{ padding: '36px 28px', textAlign: 'center' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section" id="tech-stack">
        <div className="container">
          <SectionReveal>
            <div className="section-header">
              <span className="section-label">Technologies</span>
              <h2 className="section-title">
                Our <span className="gradient-text">Tech Stack</span>
              </h2>
              <p className="section-subtitle">
                We leverage the most modern and powerful technologies to build exceptional digital products.
              </p>
            </div>
          </SectionReveal>
          <div className="tech-stack-grid">
            {techStack.map((t, i) => (
              <motion.div
                key={i}
                className="tech-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <div className="tech-icon">{t.icon}</div>
                <span>{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" id="about-cta">
        <div className="container">
          <SectionReveal>
            <div className="cta-section glass-card" style={{ padding: '80px 40px', borderRadius: 'var(--radius-xl)' }}>
              <div className="cta-bg" />
              <div className="cta-content">
                <h2>Ready to Start Your <span className="gradient-text">Project</span>?</h2>
                <p>Let&apos;s turn your vision into a digital masterpiece. Get in touch today.</p>
                <div className="cta-buttons">
                  <Link href="/contact" className="btn btn-glow" id="about-cta-btn">
                    Contact Us →
                  </Link>
                  <Link href="/services" className="btn btn-secondary" id="about-services-btn">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
