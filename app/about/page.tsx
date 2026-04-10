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
  Workflow,
  Layers,
  Activity,
  Lock,
  Compass
} from 'lucide-react';
import Link from 'next/link';
import ParticleBackground from '@/components/ParticleBackground';
import SectionReveal from '@/components/SectionReveal';
import CreativeCarousel from '@/components/CreativeCarousel';


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


      {/* --- Creative Precision (Infinite Coverflow) --- */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="container px-6 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-black mb-6" style={{ color: 'var(--text-primary)' }}>Creative Precision</h2>
            <p className="text-xl text-secondary">
              We harmonize technical complexity with aesthetic brilliance to build complete brand experiences.
            </p>
          </div>
        </div>
        <CreativeCarousel />
      </section>

      {/* --- Strategic Pillars (Screenshot Clone) --- */}
      <section className="py-24">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black" style={{ color: 'var(--text-primary)' }}>What Truly Sets Us Apart</h2>
          </div>
          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                className={`${pillar.bg} flex-col`}
                style={{ padding: '40px', borderRadius: '30px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="pillar-icon-box">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-6 text-white leading-tight">{pillar.title}</h3>
                <p className="leading-relaxed" style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)' }}>{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us (Interactive Accordion) --- */}
      <section className="py-24" style={{ backgroundColor: 'var(--grid-color)' }}>
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black" style={{ color: 'var(--text-primary)' }}>Why <span className="gradient-text">Choose Us</span></h2>
            <p className="text-secondary mt-6 max-w-2xl mx-auto">We don't just write code; we build resilient, high-performance engines that power modern enterprises.</p>
          </div>
          
          <div className="interactive-accordion">
            <div className="accordion-panel" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200)' }}>
              <div className="accordion-content">
                <div className="accordion-icon"><Cpu size={24} /></div>
                <div className="accordion-title">Deep Tech Focus</div>
                <div className="accordion-desc">Our roots in advanced computational logic allow us to solve problems that typical agencies cannot touch.</div>
              </div>
            </div>
            
            <div className="accordion-panel" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200)' }}>
              <div className="accordion-content">
                <div className="accordion-icon"><Globe size={24} /></div>
                <div className="accordion-title">Global Standards</div>
                <div className="accordion-desc">Operating with Silicon Valley protocols, we deliver world-class infrastructure from the heart of Rajasthan.</div>
              </div>
            </div>
            
            <div className="accordion-panel" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200)' }}>
              <div className="accordion-content">
                <div className="accordion-icon"><Activity size={24} /></div>
                <div className="accordion-title">Zero Latency</div>
                <div className="accordion-desc">Performance is our religion. Every application we deploy is heavily optimized for speed and reliability.</div>
              </div>
            </div>
            
            <div className="accordion-panel" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200)' }}>
              <div className="accordion-content">
                <div className="accordion-icon"><Lock size={24} /></div>
                <div className="accordion-title">Military Security</div>
                <div className="accordion-desc">We implement AES-256 encryption and zero-trust architectures to protect your digital assets unconditionally.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why We Are Different --- */}
      <section className="py-24">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black" style={{ color: 'var(--text-primary)' }}>The <span className="gradient-text">MS Infinex</span> Difference</h2>
            <p className="text-secondary mt-6 max-w-2xl mx-auto">Compare the industry standard with our hyper-optimized approach to digital engineering.</p>
          </div>
          
          <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="diff-card">
              <div className="diff-badge">10x Output</div>
              <div className="flex items-center gap-4 mb-6"><Layers size={32} style={{ color: 'var(--neon-blue)' }} /></div>
              <div className="diff-title">Architecture vs. Assembly</div>
              <div className="diff-text">Most agencies glue plugins together. We engineer custom architectures from the ground up to ensure absolute stability and infinite scalability.</div>
            </div>
            
            <div className="diff-card">
              <div className="diff-badge">AI Native</div>
              <div className="flex items-center gap-4 mb-6"><Compass size={32} style={{ color: 'var(--neon-purple)' }} /></div>
              <div className="diff-title">Proactive Intelligence</div>
              <div className="diff-text">While others build static platforms, we embed neural components natively, turning your application into a self-learning business asset.</div>
            </div>
            
            <div className="diff-card">
              <div className="diff-badge">Guaranteed</div>
              <div className="flex items-center gap-4 mb-6"><Target size={32} style={{ color: 'var(--neon-cyan)' }} /></div>
              <div className="diff-title">Absolute Ownership</div>
              <div className="diff-text">We don't disappear after launch. We offer continuous DevOps support, treating your infrastructure like it's our own.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH CTA ===== */}
      <section className="section" id="cta">
        <div className="container">
          <SectionReveal>
            <div className="cta-tech-wrapper">
              <div className="cta-tech-grid" />
              <div className="cta-tech-scan" />
              
              {/* Corner Decals */}
              <div className="cta-tech-corner corner-tl" />
              <div className="cta-tech-corner corner-tr" />
              <div className="cta-tech-corner corner-bl" />
              <div className="cta-tech-corner corner-br" />

              {/* Technical Data Decals */}
              <div className="cta-tech-status-bars">
                <div className="status-row">
                  <span>Core Logic</span>
                  <div className="status-bar-bg"><div className="status-bar-fill" style={{ animationDelay: '0s' }} /></div>
                </div>
                <div className="status-row">
                  <span>Neural Net</span>
                  <div className="status-bar-bg"><div className="status-bar-fill" style={{ animationDelay: '-1.5s' }} /></div>
                </div>
                <div className="status-row">
                  <span>Sync Status</span>
                  <div className="status-row-text" style={{ color: '#00ff00' }}>[ ACTIVE ]</div>
                </div>
              </div>

              <div className="cta-tech-coordinates">
                SEC_ID: MS_INF_2026 // LOC: UDAIPUR_IN // 24.5854° N, 73.7125° E
              </div>

              <div className="cta-tech-content">
                <h2 className="cta-tech-title">
                  Let&apos;s Build Something <span className="gradient-text">Amazing</span> Together
                </h2>
                <p className="cta-tech-subtitle">
                  Ready to transform your ideas into reality? Our elite technical team is 
                  standing by to engineer your next digital breakthrough.
                </p>
                <div className="cta-tech-buttons">
                  <Link href="/contact" className="btn btn-tech" id="cta-contact">
                    Initialize Project →
                  </Link>
                  <Link href="/contact" className="btn btn-tech btn-tech-secondary" id="cta-quote">
                    Technical Brief
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
