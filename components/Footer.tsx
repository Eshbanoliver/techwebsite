import Link from 'next/link';
import { 
  Globe, 
  Send, 
  Terminal, 
  Camera, 
  MapPin, 
  Mail, 
  Phone,
  Cpu,
  ShieldCheck
} from 'lucide-react';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="footer-tech" id="footer">
      <div className="footer-tech-grid" />
      <div className="footer-tech-scan" />
      <div className="footer-tech-circuit" />
      <div className="footer-tech-particles" />
      
      <div className="container relative z-10">
        <div className="footer-main-grid">
          <div className="footer-tech-col footer-tech-brand">
            <Link href="/" className="footer-logo-link">
              <h3>
                <span style={{
                  width: 36, height: 36, borderRadius: 6,
                  background: 'var(--gradient-primary)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', fontWeight: 900, color: 'white',
                  boxShadow: '0 0 15px rgba(0, 198, 255, 0.3)'
                }}>M</span>
                {' '}MS <span className="gradient-text">Infinix</span>
              </h3>
            </Link>
            <p>
              Architecting the next generation of digital infrastructure through 
              strategic engineering and creative technical excellence. 
              Udaipur&apos;s leading high-performance tech studio.
            </p>
            <div className="footer-tech-social">
              <a href="#" className="social-tech-btn" aria-label="LinkedIn">
                <Globe size={18} />
              </a>
              <a href="#" className="social-tech-btn" aria-label="Twitter">
                <Send size={18} />
              </a>
              <a href="#" className="social-tech-btn" aria-label="GitHub">
                <Terminal size={18} />
              </a>
              <a href="#" className="social-tech-btn" aria-label="Instagram">
                <Camera size={18} />
              </a>
            </div>
          </div>

          <div className="footer-tech-col">
            <h4>Directory</h4>
            <div className="footer-tech-links">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Our Solutions</Link>
              <Link href="/faq">Help Center</Link>
              <Link href="/blog">Our Blog</Link>
              <Link href="/contact">Get in Touch</Link>
            </div>
          </div>

          <div className="footer-tech-col">
            <h4>Capabilities</h4>
            <div className="footer-tech-links">
              <Link href="/services/ai-ml">AI & Neural Networks</Link>
              <Link href="/services/web-development">Advanced Web Systems</Link>
              <Link href="/services/mobile-apps">Mobile Infrastructure</Link>
              <Link href="/services/cloud-devops">Cloud Architecture</Link>
              <Link href="/services/ui-ux-design">Visual Engineering</Link>
            </div>
          </div>

          <div className="footer-tech-col">
            <h4>Access Points</h4>
            <div className="footer-tech-links">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={18} style={{ marginTop: 4, color: 'var(--neon-blue)' }} />
                <span>Udaipur, Rajasthan<br />313001, India</span>
              </div>
              <a href="mailto:info@msinfinix.com" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Mail size={18} style={{ color: 'var(--neon-blue)' }} />
                <span>info@msinfinix.com</span>
              </a>
              <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Phone size={18} style={{ color: 'var(--neon-blue)' }} />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-tech-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <p>© 2026 MS INFINIX // ALL DATA ENCRYPTED</p>
            <div className="footer-status-pill">
              <span className="footer-status-dot" />
              <span>SYSTEM ONLINE</span>
            </div>
          </div>
          <div className="footer-tech-coordinates">
            24.5854° N, 73.7125° E // VER: 1.0.4
          </div>
           <div style={{ display: 'flex', gap: 24 }}>
            <Link href="/privacy" style={{ opacity: 0.6 }}>Privacy & Policy</Link>
            <Link href="/terms" style={{ opacity: 0.6 }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
