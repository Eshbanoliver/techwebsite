'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, Layout, Smartphone, Code, Palette, Cloud, TrendingUp, Target, 
  ShieldCheck, Zap, Cpu, Users, Star, ArrowRight, CheckCircle, Mail, Phone, MapPin 
} from 'lucide-react';
import Link from 'next/link';
import SectionReveal from '@/components/SectionReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import FAQAccordion from '@/components/FAQAccordion';

interface ContentSection {
  title: string;
  subtitle?: string;
  content: string;
  items?: string[];
  layout: 'split' | 'full' | 'grid' | 'vibrant';
  image?: string;
}

interface ServiceDetail {
  title: string;
  subtitle: string;
  description: string;
  metaDescription: string;
  icon: React.ReactNode;
  glow: string;
  metrics: { end: number; suffix: string; label: string; icon: React.ReactNode }[];
  whyUs: string[];
  sections: ContentSection[];
  techStack: string[];
  faqs: { question: string; answer: string }[];
}

export default function ServiceDetailClient({ data }: { data: ServiceDetail }) {
  return (
    <main className={`service-detail-page bg-primary ${data.glow} overflow-x-hidden`}>
      {/* ===== HERO ===== */}
      <section className="service-hero min-h-[85vh] flex items-center relative overflow-hidden px-4">
        {/* Anti-Overlap Overlays */}
        <div className="absolute inset-0 bg-black/60 z-0 lg:hidden" />
        
        <div className="technical-decal decal-tl hidden md:block">MS_INF // SYS_LOG: ACTIVE // {new Date().getFullYear()}</div>
        <div className="technical-decal decal-br hidden md:block">COORDS: 24.5712° N, 73.6915° E</div>
        
        <div className="background-grid-animated opacity-40" />
        <div className="data-stream opacity-40" style={{ left: '5%' }} />
        <div className="data-stream opacity-40" style={{ left: '95%', animationDelay: '2s' }} />

        <div className={`hero-glow ${data.glow} opacity-60`} />
        
        <div className="container relative z-10 mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            
            {/* Main Content */}
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[1.1] text-white tracking-tighter text-balance">
                {data.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? 'gradient-text' : ''}>{word} </span>
                ))}
              </h1>
              
              <p className="text-lg md:text-2xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto font-medium text-pretty">
                {data.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center">
                <Link href="/contact" className="btn btn-tech px-12 py-5 text-xl font-black group">
                  Initialize Protocol
                  <motion.span className="ml-2" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                </Link>
              </div>
            </motion.div>

            {/* Right Status Panel */}
          </div>
        </div>
      </section>

      {/* ===== KEY METRICS ===== */}
      <section className="section bg-secondary/5 border-y border-white/5 py-32 relative">
        <div className="absolute inset-0 background-grid-animated opacity-20" />
        <div className="container px-6 relative z-10">
          <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center items-stretch gap-8">
            {data.metrics.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="metric-card-v2 group flex-1 min-w-[280px]"
              >
                <div className="metric-icon-v2">
                   {m.icon}
                </div>
                
                <div className="metric-value-v2">
                   <AnimatedCounter end={m.end} suffix={m.suffix} label="" minimal />
                </div>
                
                <div className="metric-label-v2">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DYNAMIC SECTIONS (DEEP CONTENT) ===== */}
      {data.sections.map((section, idx) => (
        <section 
          key={idx} 
          className={`py-40 relative overflow-hidden ${section.layout === 'vibrant' ? `section-vibrant ${data.glow}` : ''}`}
        >
          <div className="container px-6 relative z-10">
            <SectionReveal>
              {section.layout === 'split' && (
                <div className="grid lg:grid-cols-2 gap-32 items-center">
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <span className="section-label mb-8">{section.subtitle || 'Infrastructure'}</span>
                    <h2 className="text-6xl font-black mb-10 leading-tight text-white tracking-tight">{section.title}</h2>
                    <div className="prose prose-invert prose-xl max-w-none mb-12">
                       <p className="text-secondary leading-relaxed whitespace-pre-line text-balance">{section.content}</p>
                    </div>
                    {section.items && (
                      <div className="grid sm:grid-cols-2 gap-6">
                        {section.items.map((item, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <CheckCircle size={20} className="text-blue-500" />
                            <span className="font-bold text-white text-sm tracking-wide">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <motion.div 
                      className={`content-visual-box ${data.glow}`}
                      whileHover={{ scale: 1.02, rotateY: 5 }}
                      transition={{ type: 'spring', stiffness: 100 }}
                    >
                      {section.image ? (
                        <img src={section.image} alt={section.title} className="rounded-[2.5rem] shadow-3xl object-cover h-[600px] w-full" />
                      ) : (
                        <div className="vibrant-placeholder rounded-[2.5rem] h-[600px] bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center">
                           <Cpu size={160} className="opacity-10" />
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              )}

              {section.layout === 'full' && (
                <div className="max-w-5xl mx-auto text-center">
                  <span className="section-label mx-auto mb-8 font-mono">{section.subtitle || 'Overview'}</span>
                  <h2 className="text-5xl md:text-7xl font-black mb-12 text-white tracking-tighter">{section.title}</h2>
                  <p className="text-xl md:text-2xl text-secondary leading-relaxed whitespace-pre-line text-balance font-medium">
                    {section.content}
                  </p>
                </div>
              )}

              {section.layout === 'vibrant' && (
                <div className={`vibrant-content-bg ${data.glow} p-16 md:p-32 rounded-[5rem] relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/80 pointer-events-none" />
                  <div className="background-grid-animated opacity-20" />
                  
                  <div className="relative z-10 grid lg:grid-cols-3 gap-16 items-center">
                    <div className="lg:col-span-2">
                       <h2 className="text-5xl md:text-6xl font-black mb-8 text-white tracking-tight">{section.title}</h2>
                       <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-bold text-balance">
                         {section.content}
                       </p>
                    </div>
                    <div className="flex flex-col gap-6">
                       {section.items && section.items.map((item, i) => (
                         <motion.div 
                            key={i} 
                            className="px-8 py-6 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 text-white font-black text-xl text-center shadow-2xl"
                            whileHover={{ scale: 1.05, x: 10 }}
                         >
                           {item}
                         </motion.div>
                       ))}
                    </div>
                  </div>
                </div>
              )}

              {section.layout === 'grid' && (
                <div>
                  <div className="text-center mb-24 max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-black mb-8 text-white tracking-tighter">{section.title}</h2>
                    <p className="text-xl md:text-2xl text-secondary font-medium leading-relaxed">{section.subtitle}</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-12">
                    {section.content.split('\n\n').map((para, i) => (
                      <motion.div 
                        key={i} 
                        className="p-12 rounded-[3rem] bg-secondary/5 border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                      >
                        <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black pointer-events-none">0{i+1}</div>
                        <div className="p-5 rounded-2xl bg-blue-600/10 w-fit mb-8 group-hover:bg-blue-600/30 transition-all group-hover:scale-110">
                          <Zap size={32} className="text-blue-400" />
                        </div>
                        <p className="text-xl text-secondary leading-relaxed font-medium relative z-10">{para}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </SectionReveal>
          </div>
        </section>
      ))}

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-40 bg-secondary/10 relative overflow-hidden">
        <div className="container px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <SectionReveal>
                <span className="section-label mb-8">Industrial Execution</span>
                <h2 className="text-5xl md:text-6xl font-black mb-12 text-white tracking-tighter">
                   The Infinex <br/><span className="gradient-text">Engineering Edge</span>
                </h2>
                <div className="why-points space-y-8">
                  {data.whyUs.map((point, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-8 group"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/20 group-hover:border-blue-500/50 transition-all font-mono italic`}>
                         0{i+1}
                      </div>
                      <p className="text-2xl font-bold text-white tracking-tight">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </SectionReveal>
            </div>
            <div className="relative">
              <div className="tech-matrix-box p-16 rounded-[4rem] bg-black/60 border border-white/10 relative overflow-hidden backdrop-blur-3xl shadow-3xl">
                 <div className="absolute inset-0 background-grid-animated opacity-10" />
                 <h3 className="text-4xl font-black mb-12 relative z-10 text-white tracking-tight">Core Integrated Stack</h3>
                 <div className="grid grid-cols-2 gap-6 relative z-10">
                   {data.techStack.map((tech, i) => (
                     <div key={i} className="px-8 py-5 rounded-2xl bg-white/5 border border-white/10 font-black text-secondary hover:text-white hover:border-blue-500/50 transition-all cursor-default text-center text-lg">
                        {tech}
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQS ===== */}
      <section className="py-40 relative">
        <div className="container px-6">
          <SectionReveal>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-32">
                <span className="section-label mx-auto mb-8 font-mono uppercase tracking-[0.5em]">Queries</span>
                <h2 className="text-7xl font-black mb-8 text-white tracking-tighter">Technical <span className="gradient-text">Inquiries</span></h2>
                <p className="text-2xl text-secondary">Expert answers for enterprise decision makers.</p>
              </div>
              <FAQAccordion items={data.faqs} />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-40 border-t border-white/5 relative overflow-hidden">
        <div className="container px-6">
          <SectionReveal>
            <div className={`final-cta-v2 p-20 md:p-32 rounded-[5.5rem] relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent" />
              <div className="background-grid-animated opacity-10" />
              
              <div className="max-w-4xl relative z-10">
                <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] text-white tracking-tighter">
                   Ready to <span className="gradient-text">Architect</span> <br/> Your Breakthrough?
                </h2>
                <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed font-medium">
                   Request a technical deep-dive with our engineering leadership and receive a custom implementation blueprint.
                </p>
                <div className="flex flex-wrap gap-8">
                  <Link href="/contact" className="btn btn-glow-v2 px-16 py-6 text-2xl">Start Transformation</Link>
                  <Link href="/about" className="btn btn-secondary px-16 py-6 text-2xl border-white/10 hover:bg-white/5 transition-all">Mission Briefing <ArrowRight size={28} /></Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
