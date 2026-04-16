'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage(): React.JSX.Element {
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
            <div className="section-label">Data Protection</div>
            <h1 className="text-5xl font-black mb-6">Privacy <span className="gradient-text">Policy</span></h1>
            <p className="text-xl text-secondary">Security Protocols | Revision 2026.04</p>
          </header>

          <div className="glass-card p-10 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4 text-neon-blue">
                <ShieldCheck size={24} />
                <h2 className="text-2xl font-bold">Data Protection Overview</h2>
              </div>
              <p className="text-secondary leading-relaxed">
                At MS Infinix, we are committed to protecting your privacy and personal data. This Privacy Policy
                outlines how we collect, use, store, and protect information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon-blue">1. Information We Collect</h2>
              <p className="text-secondary mb-4">We may collect the following types of information:</p>
              <ul className="space-y-2 text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Personal identification information (name, email address, phone number)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Business information (company name, project requirements)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Technical data (IP address, browser type, device information)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Usage data (pages visited, time spent, navigation patterns)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Communication data (messages sent through our contact form)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon-blue">2. How We Use Your Information</h2>
              <p className="text-secondary mb-4">We use the collected information for the following purposes:</p>
              <ul className="space-y-2 text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>To respond to your inquiries and provide requested services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>To improve our website, products, and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>To send relevant updates, newsletters, and marketing communications (with your consent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>To analyze website usage patterns and optimize user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>To comply with legal obligations and protect our rights</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon-blue">3. Data Protection</h2>
              <p className="text-secondary leading-relaxed">
                We implement industry-standard security measures to protect your personal data against unauthorized
                access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular
                security audits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon-blue">4. Third-Party Services</h2>
              <p className="text-secondary leading-relaxed">
                We may use third-party services (analytics, hosting, communication tools) that have their own
                privacy policies. We do not sell, trade, or rent your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon-blue">5. Cookies</h2>
              <p className="text-secondary leading-relaxed">
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies
                through your browser settings, though this may affect certain website functionalities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon-blue">6. Your Rights</h2>
              <p className="text-secondary mb-4">You have the right to:</p>
              <ul className="space-y-2 text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Access and review your personal data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Request correction or deletion of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Opt out of marketing communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Request data portability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Withdraw consent at any time</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon-blue">7. Contact Us</h2>
              <p className="text-secondary leading-relaxed">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 border-l-4 border-neon-blue rounded-r-lg">
                <p className="text-secondary">
                  <strong className="text-neon-blue">Email:</strong> msinfinex@gmail.com<br />
                  <strong className="text-neon-blue">Address:</strong> Udaipur, Rajasthan 313001, India
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
