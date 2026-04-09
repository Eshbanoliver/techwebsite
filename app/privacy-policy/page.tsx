'use client';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage(): React.JSX.Element {
  return (
    <>
      <div className="page-header">
        <div className="page-header-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label">Legal</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Privacy <span className="gradient-text">Policy</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            Last updated: April 2026
          </motion.p>
        </div>
      </div>

      <div className="container">
        <div className="legal-content">
          <p>
            At MS Infinix, we are committed to protecting your privacy and personal data. This Privacy Policy
            outlines how we collect, use, store, and protect information when you visit our website or use our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Personal identification information (name, email address, phone number)</li>
            <li>Business information (company name, project requirements)</li>
            <li>Technical data (IP address, browser type, device information)</li>
            <li>Usage data (pages visited, time spent, navigation patterns)</li>
            <li>Communication data (messages sent through our contact form)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To respond to your inquiries and provide requested services</li>
            <li>To improve our website, products, and services</li>
            <li>To send relevant updates, newsletters, and marketing communications (with your consent)</li>
            <li>To analyze website usage patterns and optimize user experience</li>
            <li>To comply with legal obligations and protect our rights</li>
          </ul>

          <h2>3. Data Protection</h2>
          <p>
            We implement industry-standard security measures to protect your personal data against unauthorized
            access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular
            security audits.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We may use third-party services (analytics, hosting, communication tools) that have their own
            privacy policies. We do not sell, trade, or rent your personal information to third parties.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You can choose to disable cookies
            through your browser settings, though this may affect certain website functionalities.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access and review your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:<br />
            <strong>Email:</strong> info@msinfinix.com<br />
            <strong>Address:</strong> Udaipur, Rajasthan 313001, India
          </p>
        </div>
      </div>
    </>
  );
}
