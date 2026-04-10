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
  Code,
  Workflow
} from 'lucide-react';
import Link from 'next/link';
import ParticleBackground from '@/components/ParticleBackground';


const pillars = [
  { 
    icon: <Target size={24} />, 
    title: 'Business-First Engineering', 
    desc: 'We design technology solutions aligned with your business objectives, ensuring every feature delivers real impact — not just functionality.',
    bg: 'pillar-card-1'
  },
  { 
    icon: <Zap size={24} />, 
    title: 'End-to-End Delivery Ownership', 
    desc: 'From discovery and architecture to deployment and optimization, we take complete responsibility for outcomes.',
    bg: 'pillar-card-2'
  },
  { 
    icon: <Workflow size={24} />, 
    title: 'Proven Execution Excellence', 
    desc: 'Our structured processes, experienced teams, and delivery discipline ensure predictable timelines and consistent quality.',
    bg: 'pillar-card-3'
  },
  { 
    icon: <Cpu size={24} />, 
    title: 'Scalable by Design', 
    desc: 'We build systems that grow with your business — flexible, future-ready, and adaptable to evolving needs.',
    bg: 'pillar-card-4'
  },
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
              MS Infinex Tech is a high-performance technology studio dedicated to bridging the gap 
              between complex engineering and human-centric design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Studio Overview --- */}
      <section className="py-32 relative">
        <div className="container px-6">
          <div className="studio-bento">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="studio-main-text flex-col"
            >
              <div className="section-label mb-8">Studio Culture</div>
              <h2 className="text-6xl font-black leading-tight mb-8">
                Where <span className="gradient-text">Creativity</span> <br/> 
                Meets Computational Power
              </h2>
              <p className="text-xl text-secondary leading-relaxed mb-12 max-w-2xl" style={{ margin: '0 0 48px 0' }}>
                Founded in 2020, MS Infinex Tech has evolved from a specialized code workshop into a 
                multidisciplinary technology powerhouse. Our studio in Udaipur serves as a 
                crucible for innovation, where we combine deep technical expertise with 
                unconventional creative strategies.
              </p>
              
              <div className="flex-row gap-8" style={{ display: 'flex' }}>
                <div className="tech-decal">
                  // SYS_LOG: 0x44FF2<br/>
                  // CORE_TEMP: 42C<br/>
                  // STATUS: OPERATIONAL
                </div>
                <div className="tech-decal">
                  // NODE_V: 20.11.0<br/>
                  // FRAMEWORK: NEXT_14<br/>
                  // LOC: 24.58 N / 73.71 E
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="studio-visual-block"
            >
              {/* Floating Stat Cards */}
              <motion.div 
                className="floating-stat-card stat-1"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="glossy-shine" />
                <div className="text-4xl font-black text-black mb-1">350+</div>
                <div className="text-xs uppercase tracking-widest text-black">Global Deployments</div>
              </motion.div>

              <motion.div 
                className="floating-stat-card stat-2"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="glossy-shine" />
                <div className="text-4xl font-black text-black mb-1">98%</div>
                <div className="text-xs uppercase tracking-widest text-black">Client Satisfaction</div>
              </motion.div>

              <div className="about-studio-image shadow-glow" style={{ height: '550px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img src="/about/studio.png" alt="MS Infinex Tech Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Mission & Vision (High Impact) --- */}
      <section className="py-24" style={{ background: 'linear-gradient(to bottom, var(--bg-primary), #050505)' }}>
        <div className="container px-6">
          <div className="mv-card-container">
            <motion.div 
              className="mv-vibrant-card liquid-glass shadow-glow"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="glossy-shine" />
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" className="bg-image" alt="Mission" />
              <div className="overlay" />
              <div className="content">
                <div className="icon-shield liquid-glass"><Target size={40} /></div>
                <h3 className="mv-title">Mission</h3>
                <p className="mv-desc">Accelerating global digital evolution through the deployment of unyielding, secure, and hyper-scalable architectural ecosystems.</p>
              </div>
            </motion.div>

            <motion.div 
              className="mv-vibrant-card liquid-glass shadow-glow"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glossy-shine" />
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2340" className="bg-image" alt="Vision" />
              <div className="overlay" />
              <div className="content">
                <div className="icon-shield liquid-glass"><Eye size={40} /></div>
                <h3 className="mv-title">Vision</h3>
                <p className="mv-desc">Defining the autonomous horizon of industrial intelligence via decentralized neural networks and next-gen computational logic.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* --- Strategic Pillars (Screenshot Clone) --- */}
      <section className="py-24" style={{ background: 'linear-gradient(to top, var(--bg-primary), #080808)' }}>
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white">What Truly Sets Us Apart</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                className={`liquid-glass ${pillar.bg} flex-col`}
                style={{ padding: '40px', borderRadius: '30px', border: 'none' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="glossy-shine" />
                <div className="pillar-icon-box">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-6 text-white leading-tight">{pillar.title}</h3>
                <p className="text-secondary leading-relaxed" style={{ fontSize: '0.95rem' }}>{pillar.desc}</p>
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
