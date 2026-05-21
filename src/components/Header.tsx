/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

const navLinks = [
  { id: 'about',        label: 'Studio' },
  { id: 'services',     label: 'Services' },
  { id: 'gallery',      label: 'Gallery' },
  { id: 'reviews',      label: 'Reviews' },
  { id: 'why-choose-us',label: 'Why Us' },
  { id: 'configurator', label: 'Estimate' },
  { id: 'faq',          label: 'FAQ' },
  { id: 'location',     label: 'Location' },
];

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    onNavClick(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* N5 Floating pill — atmospheric: blur backdrop, fixed above the canvas */}
      <header
        style={{
          position: 'fixed',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(96%, 72rem)',
          zIndex: 'var(--z-nav)',
          transition: `background var(--dur-long) var(--ease-out),
                       border-color var(--dur-long) var(--ease-out),
                       box-shadow var(--dur-long) var(--ease-out)`,
          borderRadius: 'var(--radius-full)',
          background: scrolled
            ? 'oklch(13% 0.010 45 / 0.97)'
            : 'oklch(13% 0.010 45 / 0.55)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: scrolled
            ? '1px solid oklch(30% 0.010 45)'
            : '1px solid oklch(22% 0.010 45 / 0.5)',
          boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
          padding: '0.625rem 1.25rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>

          {/* Wordmark */}
          <button
            onClick={() => handleClick('hero')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem', display: 'flex', alignItems: 'center' }}
            aria-label="Prestige Detailing — home"
          >
            <img src="/images/Logo.png" alt="Prestige Detailing" style={{ height: '3rem', width: 'auto', objectFit: 'contain', maxWidth: '10rem', filter: 'brightness(1.1) contrast(1.05)' }} />
          </button>

          {/* Desktop nav links — center, hidden below md */}
          <nav
            aria-label="Main navigation"
            style={{ display: 'flex', alignItems: 'center', gap: '0.125rem', flex: 1, justifyContent: 'center' }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleClick(link.id)}
                  className={isActive ? undefined : 'nav-pill'}
                  style={{
                    padding: '0.375rem 0.875rem',
                    borderRadius: 'var(--radius-full)',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xs)',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    background: isActive ? 'var(--color-accent)' : 'transparent',
                    color: isActive ? 'var(--color-paper)' : 'var(--color-ink-2)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTAs — hidden below md */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="hidden md:flex">
            <a
              href="tel:0555096234"
              className="btn-ghost"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.375rem',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--color-rule)',
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-ink-2)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <Phone style={{ width: '0.75rem', height: '0.75rem', color: 'var(--color-accent)' }} />
              Call
            </a>
            <a
              href="tel:0555096234"
              className="btn-header-book"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.375rem',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: 'var(--color-accent)',
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xs)',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--color-paper)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger — morphing lines to X */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '0.375rem', color: 'var(--color-ink-2)',
              width: '2rem', height: '2rem',
              position: 'relative',
            }}
            className="flex md:hidden items-center justify-center"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <svg viewBox="0 0 20 20" fill="none" style={{ width: '1.25rem', height: '1.25rem', overflow: 'visible' }}>
              <line
                x1="3" y1="6" x2="17" y2="6"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                style={{
                  transformOrigin: '10px 6px',
                  transition: 'transform 380ms cubic-bezier(0.32,0.72,0,1)',
                  transform: mobileOpen ? 'rotate(45deg) translateY(4px)' : 'none',
                }}
              />
              <line
                x1="3" y1="14" x2="17" y2="14"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                style={{
                  transformOrigin: '10px 14px',
                  transition: 'transform 380ms cubic-bezier(0.32,0.72,0,1)',
                  transform: mobileOpen ? 'rotate(-45deg) translateY(-4px)' : 'none',
                }}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay — detached from the pill */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', inset: 0,
              zIndex: 'calc(var(--z-nav) - 1)' as any,
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              background: 'oklch(10% 0.012 45 / 0.92)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center',
              padding: 'var(--space-3xl) var(--space-lg)',
            }}
            className="md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <div
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-xs)', width: '100%', maxWidth: '22rem' }}
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.06 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleClick(link.id)}
                    style={{
                      width: '100%', textAlign: 'center',
                      padding: '1rem 1.5rem',
                      borderRadius: 'var(--radius-full)',
                      border: `1px solid ${isActive ? 'var(--color-accent)' : 'oklch(30% 0.010 45)'}`,
                      cursor: 'pointer',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: isActive ? 700 : 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      background: isActive ? 'var(--color-accent)' : 'transparent',
                      color: isActive ? 'var(--color-paper)' : 'var(--color-ink-2)',
                      transition: `background 200ms cubic-bezier(0.32,0.72,0,1), color 200ms cubic-bezier(0.32,0.72,0,1)`,
                    }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.06 + navLinks.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginTop: 'var(--space-lg)', paddingTop: 'var(--space-lg)', borderTop: '1px solid oklch(30% 0.010 45)' }}
              >
                <a
                  href="tel:0555096234"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.875rem', borderRadius: 'var(--radius-full)',
                    border: '1px solid oklch(30% 0.010 45)',
                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)',
                    fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'var(--color-ink)', textDecoration: 'none',
                  }}
                >
                  <Phone style={{ width: '0.875rem', height: '0.875rem', color: 'var(--color-accent)' }} />
                  Call 055 509 6234
                </a>
                <a
                  href="tel:0555096234"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.875rem', borderRadius: 'var(--radius-full)',
                    border: 'none', background: 'var(--color-accent)',
                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)',
                    fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: 'var(--color-paper)', textDecoration: 'none',
                  }}
                >
                  Book Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
