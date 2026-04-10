'use client';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-40 pb-20 bg-primary relative overflow-hidden">
      <div className="container relative z-10 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-neon-blue mb-8 hover:gap-4 transition-all">
            <ArrowLeft size={20} /> Back to Terminal
          </Link>

          <header className="mb-12">
            <div className="section-label">Legal Framework</div>
            <h1 className="text-5xl font-black mb-6">Privacy <span className="gradient-text">& Policy</span></h1>
            <p className="text-xl text-secondary">Effective Date: October 2024 | Version 2.4.0_STABLE</p>
          </header>

          <div className="glass-card p-10 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4 text-neon-blue">
                <Shield size={24} />
                <h2 className="text-2xl font-bold">1. Data Encryption & Security</h2>
              </div>
              <p className="text-secondary leading-relaxed">
                At MS Infinix, we treat your data as mission-critical infrastructure. Every byte of information transmitted 
                through our systems is encrypted using AES-256 standards at rest and TLS 1.3 in transit. Our internal 
                protocols follow a "Zero-Trust" architecture, ensuring that client data is only accessible to authorized 
                engineering personnel through multi-factor authentication (MFA).
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-neon-blue">
                <Eye size={24} />
                <h2 className="text-2xl font-bold">2. Information Collection</h2>
              </div>
              <p className="text-secondary leading-relaxed mb-4">
                We only collect data that is strictly necessary for project execution and platform optimization:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
                <li>Professional metadata (Name, Company, Role)</li>
                <li>Technical requirements and project specifications</li>
                <li>System logs for performance monitoring and diagnostic purposes</li>
                <li>Communication history for service continuity</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-neon-blue">
                <Lock size={24} />
                <h2 className="text-2xl font-bold">3. Third-Party Integration</h2>
              </div>
              <p className="text-secondary leading-relaxed">
                We do not sell, trade, or otherwise transfer your data to outside parties. This excludes trusted third parties 
                who assist us in operating our website and conducting our business (e.g., Cloud providers like AWS/GCP), 
                so long as those parties agree to keep this information strictly confidential and compliant with GDPR 
                and CCPA standards.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-neon-blue">
                <FileText size={24} />
                <h2 className="text-2xl font-bold">4. Your Rights (Command & Control)</h2>
              </div>
              <p className="text-secondary leading-relaxed">
                You retain full root access to your personal data. You may request a complete data dump, rectification of 
                inaccuracies, or permanent deletion of your profile from our active directories at any time by contacting 
                our privacy officer at <span className="text-neon-blue">privacy@msinfinix.com</span>.
              </p>
            </section>

            <div className="pt-8 border-t border-white/10 text-center text-muted text-sm italic">
              * This document is a binding technical agreement between MS Infinix and its users. Continuous monitoring 
              is in place to ensure compliance with global data protection laws.
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
