import Link from 'next/link';
import Image from 'next/image';
import { 
  Globe, 
  Send, 
  Terminal, 
  Camera, 
  MapPin, 
  Mail, 
  Phone,
  Infinity
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
              <Image 
                src="/logo.png" 
                alt="MS Infinex Logo" 
                width={120} 
                height={40} 
                className="footer-logo-img" 
              />
            </Link>
            <p>
              Infinity: The Next Generation. <br/>
              Architecting state-of-the-art digital infrastructure through 
              strategic engineering and creative technical excellence.
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
              <Link href="/services/digital-marketing">Digital Marketing</Link>
              <Link href="/services/web-development">Web Development</Link>
              <Link href="/services/app-development">App Development</Link>
              <Link href="/services/ai-solutions">AI Solutions</Link>
              <Link href="/services/graphic-design">Graphic Design</Link>
            </div>
          </div>

          <div className="footer-tech-col">
            <h4>Access Points</h4>
            <div className="footer-tech-links">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={18} style={{ marginTop: 4, color: 'var(--neon-blue)' }} />
                <span>Udaipur, Rajasthan<br />313001, India</span>
              </div>
              <a href="mailto:info@msinfinextech.com" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Mail size={18} style={{ color: 'var(--neon-blue)' }} />
                <span>info@msinfinextech.com</span>
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
            <p>© 2026 <Link href="/" className="hover:text-neon-blue transition-colors">MS INFINEX TECH</Link> // ALL DATA ENCRYPTED</p>
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
