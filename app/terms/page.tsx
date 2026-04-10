'use client';
import { motion } from 'framer-motion';
import { Scale, Terminal, Cpu, Zap, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-primary relative overflow-hidden">
      <div className="grid-bg" />
      
      <div className="container relative z-10">
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
            <p className="text-xl text-secondary">Operational Protocols | Revision 2024.11</p>
          </header>

          <div className="glass-card p-10 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4 text-neon-blue">
                <Terminal size={24} />
                <h2 className="text-2xl font-bold">1. Service Definition</h2>
              </div>
              <p className="text-secondary leading-relaxed">
                By accessing MS Infinix, you are entering into a professional engagement to utilize our technical infrastructure, 
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
                custom modules, and engineering methodologies developed by MS Infinix remain the intellectual property 
                of MS Infinix. Clients are granted a non-exclusive, perpetual license to use the final compiled software product 
                provided all financial obligations are met.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-neon-blue">
                <Scale size={24} />
                <h2 className="text-2xl font-bold">3. Liability & Performance</h2>
              </div>
              <p className="text-secondary leading-relaxed">
                MS Infinix strives for 99.9% uptime and zero-defect deployments. However, technical environments are subject 
                to external variables. MS Infinix shall not be held liable for indirect, incidental, or consequential damages 
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

            <div className="p-6 bg-white/5 border-l-4 border-neon-blue rounded-r-lg">
              <p className="text-sm text-secondary">
                <strong>Arbitration Clause:</strong> Any disputes arising from these terms shall be settled through digital 
                arbitration in accordance with Indian Law, specifically within the jurisdiction of Udaipur, Rajasthan.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
