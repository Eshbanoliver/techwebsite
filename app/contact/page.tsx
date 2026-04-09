'use client';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage(): React.JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <div className="page-header">
        <div className="page-header-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label">Contact Us</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Let&apos;s Start a <span className="gradient-text">Conversation</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s make it happen.
          </motion.p>
        </div>
      </div>

      <section className="section" id="contact-form-section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="contact-grid">
            <SectionReveal>
              <div className="glass-card" style={{ padding: '40px 36px' }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, marginBottom: 8, fontSize: '1.5rem' }}>
                  Send Us a Message
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: 28 }}>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: '14px 20px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: 'var(--radius-md)',
                      color: '#10b981',
                      marginBottom: 20,
                      fontSize: '0.95rem',
                      fontWeight: 500,
                    }}
                  >
                    ✓ Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input type="text" id="contact-name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input type="email" id="contact-email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input type="tel" id="contact-phone" name="phone" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Your Message</label>
                    <textarea id="contact-message" name="message" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} required />
                  </div>
                  <button type="submit" className="btn btn-glow" id="contact-submit" style={{ width: '100%' }}>
                    Send Message →
                  </button>
                </form>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="contact-info-cards">
                <div className="contact-info-card glass-card">
                  <div className="info-icon">📍</div>
                  <div>
                    <h4>Our Office</h4>
                    <p>Udaipur, Rajasthan 313001<br />India</p>
                  </div>
                </div>
                <div className="contact-info-card glass-card">
                  <div className="info-icon">📧</div>
                  <div>
                    <h4>Email Us</h4>
                    <p>info@msinfinix.com<br />support@msinfinix.com</p>
                  </div>
                </div>
                <div className="contact-info-card glass-card">
                  <div className="info-icon">📞</div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 98765 43210<br />Mon - Sat, 9AM - 7PM IST</p>
                  </div>
                </div>
                <div className="contact-info-card glass-card">
                  <div className="info-icon">💬</div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>+91 98765 43210<br />Quick responses guaranteed</p>
                  </div>
                </div>
                <div className="map-container">
                  <div className="map-placeholder">
                    <div className="map-icon">🗺️</div>
                    <p>Udaipur, Rajasthan 313001</p>
                    <p style={{ fontSize: '0.8rem', marginTop: 4 }}>Google Maps Integration</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </>
  );
}
