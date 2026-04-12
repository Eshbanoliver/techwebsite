'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { allServices } from '@/lib/services-data';
import { 
  ChevronDown, 
  TrendingUp, 
  Share2, 
  Megaphone, 
  Globe, 
  Smartphone, 
  Paintbrush, 
  Brain, 
  ShoppingCart,
  ArrowRight,
  Infinity,
  X
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={20} />,
  Share2: <Share2 size={20} />,
  Megaphone: <Megaphone size={20} />,
  Globe: <Globe size={20} />,
  Smartphone: <Smartphone size={20} />,
  Paintbrush: <Paintbrush size={20} />,
  Brain: <Brain size={20} />,
  ShoppingCart: <ShoppingCart size={20} />,
};

interface NavLink {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar(): React.JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 200);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar">
        <div className="navbar-inner">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="navbar-logo" id="logo-link">
              <Image 
                src="/logo.png" 
                alt="MS Infinex Logo" 
                width={120} 
                height={40} 
                className="nav-logo-img" 
                priority
              />
            </Link>
          </motion.div>

          <div className="navbar-links">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className={link.hasDropdown ? 'nav-item-has-dropdown' : ''}
                onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
                onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
              >
                <div className="nav-link-wrapper">
                  <Link
                    href={link.href}
                    className={`${pathname === link.href ? 'active' : ''} ${link.hasDropdown ? 'with-icon' : ''}`}
                    id={`nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={14} className={`dropdown-chevron ${megaMenuOpen ? 'rotated' : ''}`} />}
                  </Link>

                  {link.hasDropdown && (
                    <AnimatePresence>
                      {megaMenuOpen && (
                        <motion.div
                          className="mega-menu-bubble-wrapper"
                          initial={{ opacity: 0, scale: 0.95, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <div className="mega-menu-bubble">
                            <div className="mega-menu-grid">
                              {allServices.map((svc) => (
                                <Link 
                                  key={svc.slug} 
                                  href={`/services/${svc.slug}`}
                                  className="mega-menu-item"
                                >
                                  <div className="svc-icon-bubble" style={{ background: `${svc.color}15`, color: svc.color }}>
                                    {iconMap[svc.icon]}
                                  </div>
                                  <div className="svc-info">
                                    <span className="svc-title">{svc.title}</span>
                                    <span className="svc-tagline">{svc.tagline.split(' ').slice(0, 3).join(' ')}...</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mega-menu-footer">
                              <Link href="/services" className="view-all-svc">
                                View All Services <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="navbar-cta"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ThemeToggle />
            <Link href="/contact" className="btn btn-primary" id="nav-cta">
              Get Started
            </Link>
          </motion.div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: -20, x: "-50%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            id="mobile-menu"
          >
            <div className="mobile-menu-header">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={100} 
                height={35} 
                className="mobile-logo-img" 
              />
              <button className="mobile-close-btn" onClick={() => setMobileOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="mobile-menu-scroll">
              {navLinks.map((link, i) => (
                <div key={link.href} className="mobile-nav-item-wrapper">
                  <div className="mobile-nav-link-row">
                    <Link
                      href={link.href}
                      className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
                      onClick={() => !link.hasDropdown && setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <button 
                        className={`mobile-dropdown-toggle ${megaMenuOpen ? 'active' : ''}`}
                        onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                      >
                        <ChevronDown size={20} />
                      </button>
                    )}
                  </div>

                  {link.hasDropdown && (
                    <motion.div 
                      className="mobile-dropdown-container"
                      initial={false}
                      animate={{ height: megaMenuOpen ? 'auto' : 0, opacity: megaMenuOpen ? 1 : 0 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="mobile-dropdown-links">
                        {allServices.map(svc => (
                          <Link 
                            key={svc.slug} 
                            href={`/services/${svc.slug}`} 
                            className="mobile-dropdown-sublink"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="svc-dot" style={{ backgroundColor: svc.color }}></span>
                            {svc.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <div className="mobile-theme-box">
                <span>Interface Theme</span>
                <ThemeToggle />
              </div>
              <Link href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
