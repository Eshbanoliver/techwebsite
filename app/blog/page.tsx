'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight, 
  Clock, 
  Filter, 
  ChevronRight,
  Send,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { blogPosts, type BlogPost } from '@/lib/blog-data';
import SectionReveal from '@/components/SectionReveal';

const categories = ["All", "Social Media", "AI Solutions", "Branding", "Digital Marketing", "E-Commerce", "App Dev", "Web Dev"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];
  const regularPosts = filteredPosts.filter(p => p.id !== (activeCategory === "All" ? featuredPost.id : null));

  return (
    <>
      {/* 1. HERO / HEADER SECTION */}
      <div className="page-header blog-hero">
        <div className="container">
          <div className="page-header-content">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="section-label">Intelligence Hub</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              Engineering the <span className="gradient-text">Future</span> of Digital
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              Expert perspectives, technical deep-dives, and market-shaping strategies from the MS Infinex engineering team.
            </motion.p>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="blog-hero-glow" />
      </div>

      {/* 2. FILTER & SEARCH BAR */}
      <section className="blog-filter-section">
        <div className="container">
          <div className="filter-wrapper glass-card">
            <div className="categories-list">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search insights..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED POST (Only show when on "All" category and no search) */}
      {activeCategory === "All" && !searchQuery && (
        <section className="section featured-post-section">
          <div className="container">
            <SectionReveal>
              <Link href={`/blog/${featuredPost.id}`} className="featured-post-card premium-card group">
                <div className="featured-image">
                  <img src={featuredPost.image} alt={featuredPost.title} />
                  <div className="image-overlay" />
                </div>
                <div className="featured-content">
                  <div className="post-meta">
                    <span className="post-cat-tag">{featuredPost.category}</span>
                    <span className="post-date"><Calendar size={14} /> {featuredPost.date}</span>
                    <span className="post-read"><Clock size={14} /> {featuredPost.readTime}</span>
                  </div>
                  <h2 className="featured-title">{featuredPost.title}</h2>
                  <p className="featured-excerpt">{featuredPost.excerpt}</p>
                  <div className="post-author-row">
                    <div className="author-info">
                      <div className="author-avatar">{featuredPost.author.avatar}</div>
                      <div className="author-details">
                        <strong>{featuredPost.author.name}</strong>
                        <span>{featuredPost.author.role}</span>
                      </div>
                    </div>
                    <div className="read-more-link">
                      Read Full Insight <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* 4. POST GRID */}
      <section className="section blog-grid-section">
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div className="blog-posts-grid">
              <AnimatePresence mode="popLayout">
                {regularPosts.map((post) => (
                  <motion.div 
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Link href={`/blog/${post.id}`} className="blog-post-card glass-card group">
                      <div className="post-card-image">
                        <img src={post.image} alt={post.title} />
                        <div className="category-overlay">{post.category}</div>
                      </div>
                      <div className="post-card-content">
                        <div className="post-card-meta">
                          <span>{post.date}</span>
                          <span className="dot" />
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="post-card-title">{post.title}</h3>
                        <p className="post-card-excerpt">{post.excerpt}</p>
                        <div className="post-card-footer">
                          <div className="card-author">
                            <span className="card-author-name">By {post.author.name}</span>
                          </div>
                          <div className="card-arrow">
                            <ArrowRight size={18} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="no-results glass-card">
              <Sparkles size={48} className="no-res-icon" />
              <h3>No insights matching your criteria</h3>
              <p>Try adjusting your filters or search query to find relevant engineering perspectives.</p>
              <button className="btn btn-outline" onClick={() => {setActiveCategory("All"); setSearchQuery("");}}>
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. TECH CTA (Imported from About Page) */}
      <section className="section" id="cta">
        <div className="container">
          <SectionReveal>
            <div className="cta-tech-wrapper">
              <div className="cta-tech-grid" />
              <div className="cta-tech-scan" />
              
              <div className="cta-tech-corner corner-tl" />
              <div className="cta-tech-corner corner-tr" />
              <div className="cta-tech-corner corner-bl" />
              <div className="cta-tech-corner corner-br" />

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

      {/* 6. NEWSLETTER CTA */}
      <section className="section newsletter-section">
        <div className="container">
          <SectionReveal>
            <div className="newsletter-wrapper premium-card overflow-hidden relative">
              <div className="newsletter-content relative z-10">
                <h2>Join the <span className="gradient-text">Inner Circle</span></h2>
                <p>Stay ahead of the curve. Get our monthly digest of deep-tech trends, local market insights, and engineering hacks delivered to your inbox.</p>
                
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="newsletter-input-group">
                    <input type="email" placeholder="Enter your business email" required />
                    <button type="submit" className="btn btn-primary newsletter-submit">
                      Subscribe <Send size={18} />
                    </button>
                  </div>
                  <p className="newsletter-trust">No spam. Only high-signal intelligence. Unsubscribe anytime.</p>
                </form>
              </div>
              <div className="newsletter-glow-bg" />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
