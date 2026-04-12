'use client';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  ShieldCheck,
  Zap,
  Code,
  Workflow,
  Layers,
  Activity,
  Lock,
  Compass,
  Users,
  Handshake,
  Search,
  PenTool,
  RefreshCw,
  Rocket,
  Target,
  Eye,
  Cpu,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import ParticleBackground from '@/components/ParticleBackground';
import SectionReveal from '@/components/SectionReveal';
import TechCTA from '@/components/TechCTA';
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

const values = [
  { icon: <ShieldCheck size={32} />, title: 'Quality Assurance', desc: 'Only precision-engineered solutions from trusted technical frameworks.', className: 'bg-vibrant-pink' },
  { icon: <Users size={32} />, title: 'Client Satisfaction', desc: 'Your operational success is our topmost technical priority.', className: 'bg-vibrant-blue' },
  { icon: <Target size={32} />, title: 'Honest Pricing', desc: 'Transparent and competitive world-class development value.', className: 'bg-vibrant-orange' },
  { icon: <Code size={32} />, title: 'Reliable Products', desc: 'Durable software architectures built to last for decades.', className: 'bg-vibrant-green' },
  { icon: <Cpu size={32} />, title: 'Professional Service', desc: 'Expert support from experienced technological professionals.', className: 'bg-vibrant-indigo' },
  { icon: <Handshake size={32} />, title: 'Long-Term Trust', desc: 'Building lasting technical relationships since our establishment.', className: 'bg-vibrant-red' },
];

const processSteps = [
  {
    title: "Discovery & Strategy",
    desc: "We analyze your business goals and user needs to build a solid technical foundation.",
    icon: <Search size={28} />,
    step: "01",
    accent: "accent-cyan"
  },
  {
    title: "System Architecture",
    desc: "Defining high-performance tech stacks and scalable cloud infrastructures for long-term stability.",
    icon: <PenTool size={28} />,
    step: "02",
    accent: "accent-blue"
  },
  {
    title: "Agile Engineering",
    desc: "Rapid development cycles with high-quality code and continuous stakeholder feedback loops.",
    icon: <Code size={28} />,
    step: "03",
    accent: "accent-purple"
  },
  {
    title: "Quality Assurance",
    desc: "Comprehensive automated and manual testing ensure zero-defect software and top-tier security.",
    icon: <ShieldCheck size={28} />,
    step: "04",
    accent: "accent-pink"
  },
  {
    title: "Deployment & Ops",
    desc: "Seamless release through automated CI/CD pipelines to a highly-available production cloud.",
    icon: <Rocket size={28} />,
    step: "05",
    accent: "accent-orange"
  },
  {
    title: "Evolution & Growth",
    desc: "Post-launch monitoring and feature roadmaps to keep your platform at the cutting edge.",
    icon: <RefreshCw size={28} />,
    step: "06",
    accent: "accent-green"
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary">
      {/* --- Atmospheric Hero --- */}
      <section className="about-hero relative overflow-hidden flex items-center justify-center min-h-screen">
        <ParticleBackground />
        <div className="grid-bg" />
        <div className="container relative z-10 px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-center"
          >
            <div className="section-label mb-8">Institutional Profile</div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Engineering the <span className="gradient-text">Future</span> <br/> From Udaipur
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
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
                <div className="text-4xl font-black text-black mb-1">98%+</div>
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

      {/* ===== MISSION & VISION (MIGRATED) ===== */}
      <section className="section mv-section overflow-hidden py-32" id="mission-vision">
        <div className="mv-container container">
          <SectionReveal>
            <div className="section-header text-center mb-20">
              <span className="section-label">Our Strategic Evolution</span>
              <h2 className="text-6xl font-black mb-8">
                Mission & <span className="gradient-text">Vision</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="mv-cards-wrapper">
            <div className="mv-visual-bridge" />
            
            <div className="mv-cards-grid">
              <motion.div 
                className="mv-card-creative designer-card glow-cyan mission-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="mv-badge bg-blue-500/10 text-blue-400">Operational Mission</div>
                <div className="service-icon-box">
                  <Target size={36} className="text-blue-500" />
                </div>
                <h3 className="text-3xl font-black mb-6">Accelerating Innovation</h3>
                <p className="text-lg text-secondary leading-relaxed mb-8">
                  To bridge the technical gap for businesses worldwide by delivering 
                  precision-engineered solutions. We empower growth through code 
                  integrity, architectural stability, and a client-centric engineering culture.
                </p>
                <div className="mv-card-footer-meta">
                  <div className="status-indicator">
                    <span className="dot pulsed bg-green-500" /> 
                    <span className="text-xs font-mono opacity-50">Live Operations</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="mv-card-creative designer-card glow-purple vision-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <div className="mv-badge bg-purple-500/10 text-purple-400">Future Vision</div>
                <div className="service-icon-box">
                  <Search size={36} className="text-purple-500" />
                </div>
                <h3 className="text-3xl font-black mb-6">Planetary Excellence</h3>
                <p className="text-lg text-secondary leading-relaxed mb-8">
                  To be the global benchmark for creative technical problem-solving. 
                  We envision a future where high-performance technology is accessible, 
                  ethical, and seamlessly integrated into every human success story.
                </p>
                <div className="mv-card-footer-meta">
                  <div className="status-indicator">
                    <span className="dot pulsed bg-blue-500" />
                    <span className="text-xs font-mono opacity-50">2030 Roadmap</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES (MIGRATED) --- */}
      <section className="section py-32" id="values">
        <div className="container px-6">
          <SectionReveal>
            <div className="section-header text-center mb-20">
              <span className="section-label">What Drives Us</span>
              <h2 className="text-6xl font-black mb-8">
                Our Core <span className="gradient-text">Values</span>
              </h2>
              <p className="section-subtitle text-xl text-secondary max-w-2xl mx-auto">
                The principles that guide every decision, every line of code, and every client interaction.
              </p>
            </div>
          </SectionReveal>
          <div className="values-grid-vibrant">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className={`value-card-vibrant ${v.className} group`}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="value-icon-box">
                  {v.icon}
                </div>
                <h3 className="value-card-title">{v.title}</h3>
                <p className="value-card-desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WORKING PROCESS (MIGRATED) --- */}
      <section className="process-section py-32 bg-secondary/5" id="process">
        <div className="container px-6">
          <SectionReveal>
            <div className="section-header text-center mb-20">
              <span className="section-label">Engineering Workflow</span>
              <h2 className="text-6xl font-black mb-8">
                Our Working <span className="gradient-text">Process</span>
              </h2>
              <p className="section-subtitle text-xl text-secondary max-w-2xl mx-auto">
                A systematic, high-performance approach to turning complex ideas into 
                market-ready digital products.
              </p>
            </div>
          </SectionReveal>

          <div className="process-grid">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className={`process-card ${step.accent} group`}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="process-step-num font-mono">{step.step}</div>
                <div className="process-icon-box">
                  {step.icon}
                </div>
                <div className="process-card-content">
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>
                </div>
                <div className="process-phase-label font-mono">Phase_{step.step}</div>
              </motion.div>
            ))}
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

      {/* ===== TECH CTA (Modularized) ===== */}
      <TechCTA />
    </main>
  );
}
