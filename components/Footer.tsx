import Link from 'next/link';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>
              <span style={{
                width: 36, height: 36, borderRadius: 8,
                background: 'var(--gradient-primary)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', fontWeight: 900, color: 'white',
              }}>M</span>
              {' '}MS <span className="gradient-text">Infinix</span>
            </h3>
            <p>
              Building future-ready digital solutions with cutting-edge technology.
              Your trusted partner for AI, web, mobile, and cloud solutions based in Udaipur, Rajasthan.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn" id="social-linkedin">in</a>
              <a href="#" aria-label="Twitter" id="social-twitter">𝕏</a>
              <a href="#" aria-label="GitHub" id="social-github">⌥</a>
              <a href="#" aria-label="Instagram" id="social-instagram">📷</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <Link href="/services">AI & Machine Learning</Link>
            <Link href="/services">Web Development</Link>
            <Link href="/services">Mobile Apps</Link>
            <Link href="/services">Cloud & DevOps</Link>
            <Link href="/services">UI/UX Design</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.8' }}>
              Udaipur, Rajasthan 313001<br />
              India
            </p>
            <a href="mailto:info@msinfinix.com" style={{ marginTop: 8, display: 'inline-block' }}>
              info@msinfinix.com
            </a>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>©️ Copyright 2026 | MS Infinix | All Rights Reserved</p>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
