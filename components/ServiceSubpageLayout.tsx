'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Phone, Mail, MapPin, MessageCircle, ArrowRight, Clock, 
  ChevronRight, Star, Shield, CheckCircle 
} from 'lucide-react';
import type { ServiceData, SubpageItem } from '@/lib/services-data';

interface ServiceSubpageLayoutProps {
  service: ServiceData;
  subpage: SubpageItem;
  children?: React.ReactNode;
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ServiceSubpageLayout({ service, subpage }: ServiceSubpageLayoutProps) {
  const otherSubpages = service.subpages.filter(sp => sp.slug !== subpage.slug);

  return (
    <div className="subpage-layout">
      {/* ===== HERO BANNER ===== */}
      <section className="subpage-hero" style={{ '--accent': service.color, '--accent-gradient': service.gradient } as React.CSSProperties}>
        <div className="subpage-hero-bg" style={{ background: service.gradient }} />
        <div className="subpage-hero-overlay" />
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7 }}
            className="subpage-hero-content"
          >
            <Link href={`/services/${service.slug}`} className="subpage-breadcrumb">
              <span>{service.title}</span>
              <ChevronRight size={14} />
              <span className="current">{subpage.title}</span>
            </Link>
            <h1 className="subpage-hero-title">{subpage.title}</h1>
            <p className="subpage-hero-tagline">{subpage.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* ===== MAIN CONTENT AREA ===== */}
      <section className="subpage-main">
        <div className="container">
          <div className="subpage-grid">
            
            {/* LEFT: Main Content */}
            <div className="subpage-content">
              
              {/* Description Block */}
              <motion.div className="content-block" {...fadeUp}>
                <p className="content-description">{subpage.description}</p>
              </motion.div>

              {/* Highlights / What We Offer */}
              <motion.div className="content-block" {...fadeUp}>
                <h2 className="content-heading">What We Offer</h2>
                <div className="highlights-grid">
                  {subpage.highlights.map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="highlight-card"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <CheckCircle size={18} className="highlight-icon" style={{ color: service.color }} />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Process Steps */}
              {subpage.steps && subpage.steps.length > 0 && (
                <motion.div className="content-block" {...fadeUp}>
                  <h2 className="content-heading">Our Process</h2>
                  <div className="process-steps">
                    {subpage.steps.map((step, i) => (
                      <motion.div 
                        key={i} 
                        className="process-step"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                      >
                        <div className="step-number" style={{ background: service.gradient }}>{i + 1}</div>
                        <div className="step-content">
                          <h3>{step.title}</h3>
                          <p>{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* FAQs */}
              {subpage.faqs && subpage.faqs.length > 0 && (
                <motion.div className="content-block" {...fadeUp}>
                  <h2 className="content-heading">Frequently Asked Questions</h2>
                  <div className="subpage-faqs">
                    {subpage.faqs.map((faq, i) => (
                      <div key={i} className="subpage-faq-item">
                        <h4>{faq.q}</h4>
                        <p>{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* RIGHT: Sticky Sidebar */}
            <aside className="subpage-sidebar">
              <div className="sidebar-sticky">
                
                {/* Contact Card */}
                <div className="sidebar-card">
                  <h3 className="sidebar-card-title">Get in Touch</h3>
                  <div className="sidebar-contact-list">
                    <a href="tel:+919251148882" className="sidebar-contact-item">
                      <Phone size={16} />
                      <span>+91 92511 48882</span>
                    </a>
                    <a href="https://wa.me/919251148882" target="_blank" rel="noopener noreferrer" className="sidebar-contact-item whatsapp">
                      <MessageCircle size={16} />
                      <span>WhatsApp Us</span>
                    </a>
                    <a href="mailto:info@msinfinex.com" className="sidebar-contact-item">
                      <Mail size={16} />
                      <span>info@msinfinex.com</span>
                    </a>
                    <div className="sidebar-contact-item">
                      <MapPin size={16} />
                      <span>Udaipur, Rajasthan</span>
                    </div>
                  </div>
                </div>

                {/* Quick CTA */}
                <div className="sidebar-card sidebar-cta" style={{ background: service.gradient }}>
                  <h3 style={{ color: 'white', marginBottom: '12px', fontWeight: 800, fontSize: '1.2rem' }}>Ready to Get Started?</h3>
                  <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.5 }}>
                    Get a free consultation for your {subpage.title.toLowerCase()} needs.
                  </p>
                  <Link href="/contact" className="sidebar-cta-btn">
                    Get Free Quote <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Mini Lead Form */}
                <div className="sidebar-card">
                  <h3 className="sidebar-card-title">Quick Enquiry</h3>
                  <form className="sidebar-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Your Name" className="sidebar-input" />
                    <input type="tel" placeholder="Phone / WhatsApp" className="sidebar-input" />
                    <select className="sidebar-input">
                      <option>Select Service</option>
                      {service.subpages.map(sp => (
                        <option key={sp.slug} value={sp.slug}>{sp.title}</option>
                      ))}
                    </select>
                    <button type="submit" className="sidebar-submit-btn" style={{ background: service.gradient }}>
                      Send Enquiry
                    </button>
                  </form>
                </div>

                {/* Other Subpages Navigation */}
                <div className="sidebar-card">
                  <h3 className="sidebar-card-title">More {service.title} Services</h3>
                  <div className="sidebar-nav-list">
                    {otherSubpages.map(sp => (
                      <Link 
                        key={sp.slug} 
                        href={`/services/${service.slug}/${sp.slug}`} 
                        className="sidebar-nav-item"
                      >
                        <span>{sp.title}</span>
                        <ChevronRight size={14} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM MERGED CTA ===== */}
      <section className="subpage-bottom-cta">
        <div className="container">
          <motion.div 
            className="bottom-cta-wrapper"
            style={{ background: service.gradient }}
            {...fadeUp}
          >
            <div className="bottom-cta-content">
              <h2>Grow Your Business in Udaipur with Smart Digital Solutions</h2>
              <p>Partner with MS Infinex Tech to unlock your business&apos;s full digital potential. Let&apos;s build something amazing together.</p>
              <div className="bottom-cta-actions">
                <Link href="/contact" className="bottom-cta-btn primary">
                  Start Your Project <ArrowRight size={18} />
                </Link>
                <a href="https://wa.me/919251148882" target="_blank" rel="noopener noreferrer" className="bottom-cta-btn secondary">
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
              <div className="bottom-cta-trust">
                <div className="trust-item"><Star size={14} /> 4.9/5 Rating</div>
                <div className="trust-item"><Shield size={14} /> 150+ Projects</div>
                <div className="trust-item"><Clock size={14} /> 24hr Response</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
