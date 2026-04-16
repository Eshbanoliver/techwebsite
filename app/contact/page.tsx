'use client';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  Send,
  CheckCircle2,
  Clock,
  Globe,
  Users,
  Share2
} from 'lucide-react';
import SectionReveal from '@/components/SectionReveal';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function ContactPage(): React.JSX.Element {
  const [formData, setFormData] = useState<ContactFormData>({ 
    name: '', 
    email: '', 
    phone: '', 
    service: '',
    message: '' 
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      <div className="page-header contact-hero">
        <div className="container">
          <div className="page-header-content">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="section-label">Get in Touch</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              Ready to <span className="gradient-text">Elevate</span> Your Brand?
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              Whether you&apos;re a local Udaipur startup or an established enterprise, our team is ready to engineer your digital success.
            </motion.p>
          </div>
        </div>
        
        {/* Decorative elements for 'eye-catchy' look */}
        <div className="contact-glow-1" />
        <div className="contact-glow-2" />
      </div>

      <section className="section contact-main">
        <div className="container">
          <div className="contact-wrapper-grid premium-layout">
            <div className="contact-info-panel">
              <SectionReveal>
                <div className="contact-info-section">
                  <h2 className="info-panel-title">Let&apos;s talk about <br />your <span className="gradient-text">Future</span></h2>
                  <p className="info-panel-desc">
                    Pick a service, share your goals, and we&apos;ll get back to you with a strategy that works.
                  </p>

                  <div className="info-items-vibrant">
                    <div className="vibrant-info-card glass-card">
                      <div className="v-card-icon"><Mail size={24} /></div>
                      <div className="v-card-text">
                        <span>Email us at</span>
                        <strong>msinfinex@gmail.com</strong>
                      </div>
                    </div>
                    
                    <div className="vibrant-info-card glass-card">
                      <div className="v-card-icon"><MessageCircle size={24} /></div>
                      <div className="v-card-text">
                        <span>WhatsApp Quick Chat</span>
                        <strong>+91 92511 48882</strong>
                      </div>
                    </div>

                    <div className="vibrant-info-card glass-card">
                      <div className="v-card-icon"><Phone size={24} /></div>
                      <div className="v-card-text">
                        <span>Direct Call Line</span>
                        <strong>+91 92511 48882</strong>
                      </div>
                    </div>
                  </div>

                  <div className="social-links-vibrant">
                    <h4>Connect with us</h4>
                    <div className="vibrant-social-flex">
                      <a href="#" className="v-social-btn"><Users size={20} /></a>
                      <a href="#" className="v-social-btn"><Globe size={20} /></a>
                      <a href="#" className="v-social-btn"><Share2 size={20} /></a>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>

            <div className="contact-form-panel">
              <SectionReveal delay={0.2}>
                <div className="contact-form-card premium-card">
                  <div className="card-top-accent" />
                  {submitted ? (
                    <motion.div 
                      className="form-success-state"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="success-icon-box">
                        <CheckCircle2 size={64} className="neon-success" />
                      </div>
                      <h3>Strategic Input Received!</h3>
                      <p>Your vision has reached our experts. Expect a response tailored to your business goals within 12-24 hours.</p>
                      <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                        Send Another Concept
                      </button>
                    </motion.div>
                  ) : (
                    <form className="contact-form-body" onSubmit={handleSubmit}>
                      <div className="form-head">
                        <h3>Project Inquiry</h3>
                        <p>Fill in the details to start your transformation</p>
                      </div>

                      <div className="form-row">
                        <div className="form-field">
                          <label>Your Name</label>
                          <input 
                            type="text" 
                            name="name" 
                            placeholder="e.g. Rahul Sharma" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                          />
                        </div>
                        <div className="form-field">
                          <label>Work Email</label>
                          <input 
                            type="email" 
                            name="email" 
                            placeholder="rahul@business.com" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-field">
                          <label>WhatsApp / Phone</label>
                          <input 
                            type="tel" 
                            name="phone" 
                            placeholder="+91 00000 00000" 
                            value={formData.phone} 
                            onChange={handleChange} 
                            required 
                          />
                        </div>
                        <div className="form-field">
                          <label>Goal / Service</label>
                          <select name="service" value={formData.service} onChange={handleChange} required>
                            <option value="">Select Priority</option>
                            <option value="digital-marketing">Rank Higher (SEO)</option>
                            <option value="social-media">Viral Growth (Social)</option>
                            <option value="paid-ads">Instants Leads (Ads)</option>
                            <option value="web-dev">New Website</option>
                            <option value="app-dev">Custom App</option>
                            <option value="graphic-design">Brand Design</option>
                            <option value="ai-solutions">AI Automation</option>
                            <option value="ecommerce">E-Com Sales</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-field full-width">
                        <label>Message / Project Vision</label>
                        <textarea 
                          name="message" 
                          placeholder="Briefly describe your requirements or the problem you're solving..." 
                          value={formData.message} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>

                      <button type="submit" className={`btn btn-glow submit-btn ${loading ? 'loading' : ''}`} disabled={loading}>
                        {loading ? 'Processing...' : 'Initiate Project Strategy'}
                        {!loading && <Send size={18} />}
                      </button>

                      <p className="form-disclaimer">
                        Protected by bank-grade security and your <Link href="/privacy">Privacy First</Link> policy.
                      </p>
                    </form>
                  )}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
