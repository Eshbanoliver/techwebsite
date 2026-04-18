'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight,
  Share2, 
  MessageCircle,
  Link2
} from 'lucide-react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog-data';

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <div className="blog-post-detail">
      {/* 1. HERO HEADER */}
      <section className="post-detail-hero">
        <div className="container relative z-10">
          <Link href="/blog" className="back-to-blog">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <motion.div 
            className="post-header-content"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="post-category-badge">{post.category}</div>
            <h1 className="post-detail-title">{post.title}</h1>
            <div className="post-detail-meta">
              <div className="detail-author">
                <div className="author-avatar-sm">{post.author.avatar}</div>
                <div className="author-info-sm">
                  <strong>{post.author.name}</strong>
                  <span>{post.author.role}</span>
                </div>
              </div>
              <div className="meta-divider" />
              <div className="meta-item-detail">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="meta-item-detail">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED IMAGE */}
      <section className="post-detail-media">
        <div className="container relative z-10">
          <motion.div 
            className="detail-featured-image-wrapper"
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={post.image} alt={post.title} className="detail-featured-image" />
          </motion.div>
        </div>
      </section>

      {/* 3. POST CONTENT & SIDEBAR */}
      <section className="post-detail-main">
        <div className="container relative z-10">
          <div className="post-detail-grid">
            {/* CONTENT */}
            <article className="post-article-content">
              <p className="lead-text">{post.excerpt}</p>
              
              <div className="article-body">
                <h2>The Technological Landscape</h2>
                <p>
                  In the rapidly evolving digital ecosystem of Udaipur, the intersection of specialized 
                  technical expertise and local market understanding has never been more critical. 
                  As a leading tech firm, we observe daily how the right architectural decisions 
                  can transform a standard business operation into a high-performance digital engine.
                </p>
                
                <blockquote>
                  "Innovation is not about adding more features; it's about engineering solutions 
                  that solve real-world problems with maximum efficiency and minimum friction."
                </blockquote>

                <h3>Key Strategic Breakthroughs</h3>
                <p>
                  When we approach projects at MS Infinex, our engineering team prioritizes 
                  scalability and security above all. Whether it's a social media engagement 
                  strategy or a complex AI-driven automation workflow, the underlying 
                  infrastructure must be capable of handling exponential growth without 
                  compromising on user experience.
                </p>

                <ul>
                  <li><strong>Data Integration:</strong> Seamlessly connecting disparate systems for a unified business view.</li>
                  <li><strong>Performance Optimization:</strong> Reducing latency and improving response times across all touchpoints.</li>
                  <li><strong>Future-Proofing:</strong> Leveraging modular designs that adapt to emerging technologies.</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  As we look toward the future of technology in 2025 and beyond, 
                  staying informed through expert-led insights is your best defense against 
                  obsolescence. This analysis represents just one facet of the deep-tech 
                  consultation we provide to our enterprise partners.
                </p>
              </div>

              {/* POST FOOTER */}
              <div className="post-article-footer">
                <div className="share-box">
                  <span>Share Insight</span>
                  <div className="share-links">
                    <button title="Copy Link"><Link2 size={18} /></button>
                    <button title="Share on WhatsApp"><MessageCircle size={18} /></button>
                    <button title="More Options"><Share2 size={18} /></button>
                  </div>
                </div>
              </div>
            </article>

            {/* SIDEBAR */}
            <aside className="post-detail-sidebar">
              <div className="sidebar-sticky">
                {/* Related CTA */}
                <div className="detail-sidebar-card tech-cta-card">
                  <h3>Build Your Vision</h3>
                  <p>Inpsired by this technical insight? Let's discuss how we can apply these strategies to your project.</p>
                  <Link href="/contact" className="sidebar-cta-link">
                    Start Consultation <ArrowRight size={16} />
                  </Link>
                </div>


                {/* Support */}
                <div className="detail-sidebar-card support-card-sm">
                  <div className="support-icon"><MessageCircle size={24} /></div>
                  <div className="support-text">
                    <strong>Need Technical Guidance?</strong>
                    <p>Contact our expert team directly at info@msinfinex.com</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

    </div>
  );
}
