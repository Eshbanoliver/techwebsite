'use client';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Globe, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Code
} from 'lucide-react';
import Link from 'next/link';
import ParticleBackground from '@/components/ParticleBackground';

const timeline = [
  { year: '2020', title: 'Genesis in Udaipur', desc: 'MS Infinix was founded with a mission to bring silicon-valley engineering to the heart of Rajasthan.' },
  { year: '2022', title: 'Neural Expansion', desc: 'Inception of our AI R&D division, focusing on large-scale machine learning and neural architectures.' },
  { year: '2023', title: 'Global Benchmarks', desc: 'Successfully delivered 150+ high-performance systems for clients across North America and Europe.' },
  { year: '2025', title: 'Next-Gen Infrastructure', desc: 'Launching our digital transformation framework, setting new standards for cloud and edge computing.' },
];

const pillars = [
  { icon: <ShieldCheck size={32} />, title: 'Unyielding Quality', desc: 'Our engineering protocols follow strict ISO and agile standards for zero-latency products.' },
  { icon: <Zap size={32} />, title: 'Rapid Deployment', desc: 'Utilizing automated CI/CD pipelines to bring your ideas to market at lightning speeds.' },
  { icon: <Cpu size={32} />, title: 'Neural Synergy', desc: 'Deep integration of AI in every layer of development to optimize user experience.' },
  { icon: <Globe size={32} />, title: 'Borderless Vision', desc: 'Operating from Udaipur, impacting the world. A global mindset in everything we build.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary">
      {/* --- Atmospheric Hero --- */}
      <section className="about-hero relative overflow-hidden">
        <ParticleBackground />
        <div className="grid-bg" />
        <div className="container relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl text-center"
          >
            <div className="section-label mb-8">Institutional Profile</div>
            <h1 className="text-7xl font-black mb-8 leading-tight">
              Engineering the <span className="gradient-text">Future</span> <br/> From Udaipur
            </h1>
            <p className="text-xl text-secondary max-w-2xl leading-relaxed">
              MS Infinix is a high-performance technology studio dedicated to bridging the gap 
              between complex engineering and human-centric design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Studio Overview --- */}
      <section className="py-24 relative">
        <div className="container px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex-col"
            >
              <div className="section-label mb-8">Studio Culture</div>
              <h2 className="text-5xl font-bold leading-tight mb-8">
                Where <span className="gradient-text">Creativity</span> Meets Computational Power
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-12">
                Founded in 2020, MS Infinix has evolved from a specialized code workshop into a 
                multidisciplinary technology powerhouse. Our studio in Udaipur serves as a 
                crucible for innovation, where we combine deep technical expertise with 
                unconventional creative strategies.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 glass-card" style={{ borderLeft: '4px solid var(--neon-blue)' }}>
                  <div className="text-4xl font-black text-white mb-2">350+</div>
                  <div className="text-sm text-muted uppercase tracking-widest">Deployments</div>
                </div>
                <div className="p-6 glass-card" style={{ borderLeft: '4px solid var(--neon-blue)' }}>
                  <div className="text-4xl font-black text-white mb-2">98%</div>
                  <div className="text-sm text-muted uppercase tracking-widest">Client Retention</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="about-studio-image"
            >
              <img src="/about/studio.png" alt="MS Infinix Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Mission & Vision (Large Format) --- */}
      <section className="py-24" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div 
              className="industry-card"
              style={{ minHeight: '500px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="industry-bg">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" alt="Mission" />
              </div>
              <div className="industry-bg-overlay" />
              <div className="industry-card-content">
                <div className="industry-icon-wrapper"><Target size={32} /></div>
                <h3 className="text-4xl font-black mb-4">Our Mission</h3>
                <p className="text-lg">To accelerate global digital transformation by delivering robust, secure, and infinitely scalable software ecosystems.</p>
              </div>
            </motion.div>

            <motion.div 
              className="industry-card"
              style={{ minHeight: '500px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="industry-bg">
                <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Vision" />
              </div>
              <div className="industry-bg-overlay" />
              <div className="industry-card-content">
                <div className="industry-icon-wrapper"><Eye size={32} /></div>
                <h3 className="text-4xl font-black mb-4">Our Vision</h3>
                <p className="text-lg">To define the next era of industrial intelligence through decentralized, neural, and highly autonomous technical architectures.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- System Log Timeline --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-6">
          <div className="max-w-4xl">
            <div className="section-label mb-16">Operational Milestones</div>
            <div className="timeline-log">
              {timeline.map((item, i) => (
                <motion.div 
                  key={i}
                  className="timeline-entry"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="timeline-year">{item.year}</span>
                  <div className="glass-card" style={{ padding: '32px' }}>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Strategic Pillars --- */}
      <section className="py-24" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
        <div className="container px-6">
          <div className="text-center mb-16">
            <div className="section-label mb-8">Our Core DNA</div>
            <h2 className="text-5xl font-black">Foundational <span className="gradient-text">Principles</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                className="glass-card flex-col"
                style={{ padding: '40px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-neon-blue mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-muted leading-relaxed" style={{ fontSize: '0.9rem' }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-32">
        <div className="container px-6">
          <div className="glass-card text-center relative overflow-hidden" style={{ padding: '80px 40px', background: 'linear-gradient(to bottom right, #000, #050510)', border: 'none' }}>
            <div className="absolute inset-0 opacity-10" style={{ pointerEvents: 'none' }}>
              <Code size={400} style={{ position: 'absolute', bottom: '-80px', right: '-80px', transform: 'rotate(12deg)' }} />
            </div>
            <div className="relative z-10">
              <h2 className="text-6xl font-black mb-8">Let&apos;s Build the <span className="gradient-text">Exceptional</span></h2>
              <p className="text-xl text-secondary mb-12 max-w-2xl">
                Join our list of global partners and transform your technical landscape with Udaipur&apos;s most intensive tech studio.
              </p>
              <div className="flex-row justify-center gap-8 items-center" style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary" style={{ padding: '16px 48px', fontSize: '1.125rem' }}>Initiate Protocol →</Link>
                <Link href="/services" className="btn" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', padding: '16px 48px', fontSize: '1.125rem' }}>Architecture Specs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
