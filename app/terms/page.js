'use client';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <>
      <div className="page-header">
        <div className="page-header-content">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-label">Legal</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Terms of <span className="gradient-text">Service</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            Last updated: April 2026
          </motion.p>
        </div>
      </div>

      <div className="container">
        <div className="legal-content">
          <p>
            Welcome to MS Infinix. By accessing and using our website and services, you agree to be bound
            by the following terms and conditions. Please read them carefully.
          </p>

          <h2>1. Services</h2>
          <p>
            MS Infinix provides technology consulting, software development, web and mobile development,
            UI/UX design, AI/ML solutions, cloud services, and digital marketing. The scope, timeline,
            and deliverables of each project are defined in individual service agreements.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and code, is the property of
            MS Infinix unless otherwise stated. Client-specific deliverables are transferred upon full
            payment as outlined in the project agreement.
          </p>

          <h2>3. Client Responsibilities</h2>
          <ul>
            <li>Provide accurate and complete project requirements</li>
            <li>Respond to communications and review deliverables in a timely manner</li>
            <li>Provide necessary access to systems, content, and resources</li>
            <li>Make payments according to the agreed schedule</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <p>
            Payment terms are defined in individual project agreements. Typically, a deposit is required
            before project commencement, with remaining payments due at agreed milestones. Late payments
            may result in project delays or suspension.
          </p>

          <h2>5. Confidentiality</h2>
          <p>
            Both parties agree to maintain the confidentiality of proprietary information shared during
            the course of the project. We take data security seriously and implement appropriate measures
            to protect your information.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            MS Infinix shall not be liable for any indirect, incidental, or consequential damages arising
            from the use of our services. Our total liability shall not exceed the total fees paid by the
            client for the specific project.
          </p>

          <h2>7. Termination</h2>
          <p>
            Either party may terminate a project agreement with written notice as specified in the
            individual agreement. Upon termination, the client is responsible for payment of work
            completed up to the termination date.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall be subject to the
            exclusive jurisdiction of the courts in Udaipur, Rajasthan.
          </p>

          <h2>9. Contact</h2>
          <p>
            For questions about these terms, please contact us at:<br />
            <strong>Email:</strong> info@msinfinix.com<br />
            <strong>Address:</strong> Udaipur, Rajasthan 313001, India
          </p>
        </div>
      </div>
    </>
  );
}
