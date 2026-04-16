'use client';
import { motion } from 'framer-motion';
import { Scale, Terminal, Cpu, Zap, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
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
            <div className="section-label">Service Agreement</div>
            <h1 className="text-5xl font-black mb-6">Terms of <span className="gradient-text">Service</span></h1>
            <p className="text-xl text-secondary">Operational Protocols | Revision 2026.04</p>
          </header>

          <div className="glass-card p-10 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4 text-neon-blue">
                <Terminal size={24} />
                <h2 className="text-2xl font-bold">1. Service Definition</h2>
              </div>
              <p className="text-secondary leading-relaxed">
                By accessing MS Infinex Tech, you are entering into a professional engagement to utilize our technical infrastructure, 
                engineering expertise, and software solutions. You agree to utilize these resources for lawful technical 
                purposes only and to maintain the integrity of our source code and proprietary architectures.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-neon-blue">
                <Zap size={24} />
                <h2 className="text-2xl font-bold">2. Intellectual Property (IP)</h2>
              </div>
              <p className="text-secondary leading-relaxed">
                Unless otherwise specified in a custom Master Service Agreement (MSA), all core architectural patterns, 
                custom modules, and engineering methodologies developed by MS Infinex Tech remain the intellectual property 
                of MS Infinex Tech. Clients are granted a non-exclusive, perpetual license to use the final compiled software product 
                provided all financial obligations are met.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-neon-blue">
                <Scale size={24} />
                <h2 className="text-2xl font-bold">3. Liability & Performance</h2>
              </div>
              <p className="text-secondary leading-relaxed">
                MS Infinex Tech strives for 99.9% uptime and zero-defect deployments. However, technical environments are subject 
                to external variables. MS Infinex Tech shall not be held liable for indirect, incidental, or consequential damages 
                arising from system downtime caused by third-party cloud outages or catastrophic network failures beyond 
                our immediate control.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-neon-blue">
                <Cpu size={24} />
                <h2 className="text-2xl font-bold">4. Termination of Access</h2>
              </div>
              <p className="text-secondary leading-relaxed">
                Misuse of our APIs, unauthorized penetration testing, or violation of software licensing agreements will result 
                in immediate termination of service access. We reserve the right to revoke system privileges for any account 
                involved in malicious technical activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon-blue">5. Payment Terms</h2>
              <p className="text-secondary mb-4">All payments are processed through secure channels and subject to the following terms:</p>
              <ul className="space-y-2 text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>50% advance payment required for project initiation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Remaining 50% due upon project completion and delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Support contracts billed quarterly in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Late payments subject to 2% monthly interest</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon-blue">6. Confidentiality</h2>
              <p className="text-secondary leading-relaxed">
                Both parties agree to maintain strict confidentiality regarding all technical specifications, business processes, 
                and proprietary information exchanged during the course of our professional engagement. This confidentiality 
                obligation extends beyond project completion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon-blue">7. Service Level Agreement</h2>
              <p className="text-secondary mb-4">Our commitment to service excellence includes:</p>
              <ul className="space-y-2 text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>99.9% uptime guarantee for hosted solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>24-hour response time for critical issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>48-hour resolution for standard support requests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neon-blue mt-1">▸</span>
                  <span>Monthly performance reports and system health monitoring</span>
                </li>
              </ul>
            </section>


            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon-blue">8. Dispute Resolution</h2>
              <div className="p-6 bg-white/5 border-l-4 border-neon-blue rounded-r-lg">
                <p className="text-secondary">
                  <strong className="text-neon-blue">Arbitration Clause:</strong> Any disputes arising from these terms shall be settled through digital 
                  arbitration in accordance with Indian Law, specifically within the jurisdiction of Udaipur, Rajasthan.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon-blue">9. Contact Information</h2>
              <p className="text-secondary leading-relaxed mb-4">
                For any questions regarding these Terms of Service, please contact our legal department:
              </p>
              <div className="p-4 bg-white/5 border-l-4 border-neon-blue rounded-r-lg">
                <p className="text-secondary">
                  <strong className="text-neon-blue">Email:</strong> msinfinex@gmail.com<br />
                  <strong className="text-neon-blue">Phone:</strong> +91 92511 48882<br />
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
