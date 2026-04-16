'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight, CheckCircle, MessageCircle } from 'lucide-react';

interface SubpagePreview {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  highlightCount: number;
}

interface ServiceMainProps {
  service: {
    slug: string;
    title: string;
    tagline: string;
    description: string;
    icon: string;
    color: string;
    gradient: string;
    image: string;
    subpages: SubpagePreview[];
  };
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ServiceMainClient({ service }: ServiceMainProps) {
  return (
    <div className="service-main-page">
      {/* ===== HERO ===== */}
      <section className="svc-main-hero" style={{ '--accent': service.color, '--accent-gradient': service.gradient } as React.CSSProperties}>
        <div className="svc-main-hero-bg" style={{ background: service.gradient }} />
        <div className="svc-main-hero-overlay" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="svc-main-hero-content"
          >
            <Link href="/services" className="svc-main-breadcrumb">
              ← All Services
            </Link>
            <h1 className="svc-main-hero-title">{service.title}</h1>
            <p className="svc-main-hero-tagline">{service.tagline}</p>
            <p className="svc-main-hero-desc">{service.description}</p>
            <div className="svc-main-hero-actions">
              <Link href="/contact" className="btn-svc primary" style={{ background: 'white', color: service.color }}>
                Get Started <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/919251148882" target="_blank" rel="noopener noreferrer" className="btn-svc secondary">
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SUBPAGES GRID ===== */}
      <section className="svc-main-subpages">
        <div className="container">
          <motion.div className="section-header" {...fadeUp}>
            <span className="section-label" style={{ color: service.color, borderColor: `${service.color}33`, background: `${service.color}11` }}>
              Our {service.title} Services
            </span>
            <h2 className="section-title">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="section-subtitle">
              Explore our specialized {service.title.toLowerCase()} services designed for Udaipur businesses.
            </p>
          </motion.div>

          <div className="svc-subpage-grid">
            {service.subpages.map((sp, i) => (
              <motion.div
                key={sp.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link href={`/services/${service.slug}/${sp.slug}`} className="svc-subpage-card">
                  <div className="svc-subpage-card-accent" style={{ background: service.gradient }} />
                  <div className="svc-subpage-card-body">
                    <div className="svc-subpage-card-num" style={{ color: service.color }}>0{i + 1}</div>
                    <h3 className="svc-subpage-card-title">{sp.title}</h3>
                    <p className="svc-subpage-card-desc">{sp.tagline}</p>
                    <div className="svc-subpage-card-meta">
                      <span>{sp.highlightCount} features</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="svc-main-why section">
        <div className="container">
          <motion.div className="section-header" {...fadeUp}>
            <h2 className="section-title">
              Why Choose <span className="gradient-text">MS Infinex</span>
            </h2>
            <p className="section-subtitle">
              We deliver results, not just services. Here&apos;s what makes us different.
            </p>
          </motion.div>
          <div className="svc-why-grid">
            {[
              { title: 'Udaipur-Focused', desc: 'We understand the local market, audience, and business landscape of Udaipur intimately.' },
              { title: 'Result-Driven', desc: 'Every strategy is tied to measurable KPIs. No fluff, just real business growth.' },
              { title: 'Affordable Pricing', desc: 'Premium quality services at prices designed for Udaipur businesses. No hidden costs.' },
              { title: 'Quick Support', desc: '24-hour response time. Reach us via WhatsApp, call, email, or walk into our office.' },
              { title: 'Modern Approach', desc: 'We use the latest tools, AI, and trends. Your business gets cutting-edge solutions.' },
              { title: 'Proven Results', desc: '150+ projects delivered. 80+ happy clients. 4.9-star Google rating.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="svc-why-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <CheckCircle size={20} style={{ color: service.color, flexShrink: 0 }} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="subpage-bottom-cta">
        <div className="container">
          <motion.div
            className="bottom-cta-wrapper"
            style={{ background: service.gradient }}
            {...fadeUp}
          >
            <div className="bottom-cta-content">
              <h2>Ready to Transform Your {service.title} Game?</h2>
              <p>Get a free consultation and custom strategy tailored for your Udaipur business. No commitment required.</p>
              <div className="bottom-cta-actions">
                <Link href="/contact" className="bottom-cta-btn primary">
                  Get Free Consultation <ArrowRight size={18} />
                </Link>
                <a href="tel:+919251148882" className="bottom-cta-btn secondary">
                  📞 Call Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
