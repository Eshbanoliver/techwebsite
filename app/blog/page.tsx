'use client';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, BookOpen } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Edge AI: Transforming Industrial Automation in 2025",
    excerpt: "Discover how shifting AI processing from the cloud to the edge is reducing latency by 80% and revolutionizing real-time diagnostics in manufacturing.",
    author: "Eng. Aryan Sharma",
    date: "Oct 24, 2024",
    tag: "Artificial Intelligence",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Clean Code vs. Fast Delivery: The Engineering Dilemma",
    excerpt: "Technical debt is a silent killer of scaling startups. We explore how to balance the 'move fast' mentality with architectural integrity.",
    author: "Pratiksha Mehta",
    date: "Oct 18, 2024",
    tag: "Engineering Culture",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Modernizing Legacy Systems: A Blueprint for Digital Transformation",
    excerpt: "Replacing monolithic architectures with microservices without losing a single day of uptime. Lessons learned from our late-night deployment marathons.",
    author: "Vikram Rajawat",
    date: "Oct 05, 2024",
    tag: "System Design",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    readTime: "12 min read"
  },
  {
    id: 4,
    title: "The Future of Web3 in Enterprise: Beyond the Hype",
    excerpt: "How blockchain-based supply chain tracking is solving multi-billion dollar logistics problems for our global partners.",
    author: "Neha Singhal",
    date: "Sep 28, 2024",
    tag: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    readTime: "10 min read"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-primary relative overflow-hidden">
      <div className="grid-bg" />
      
      <div className="container relative z-10">
        <header className="max-w-3xl mb-16">
          <div className="section-label">Knowledge Hub</div>
          <h1 className="text-6xl font-black mb-6">Engineering <span className="gradient-text">Insights</span></h1>
          <p className="text-xl text-secondary">
            Human-written perspectives on the intersection of deep-tech engineering and 
            business strategy. No AI-hallucinations, just pure architectural experience.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {blogPosts.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-neon-blue uppercase tracking-widest">
                    {post.tag}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-muted text-sm mb-4">
                  <div className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</div>
                  <div className="flex items-center gap-1.5"><BookOpen size={14} /> {post.readTime}</div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 group-hover:text-neon-blue transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-secondary leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center font-bold text-white">
                      {post.author[0]}
                    </div>
                    <span className="text-sm font-semibold">{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.id}`} className="text-neon-blue font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    Read Report <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
