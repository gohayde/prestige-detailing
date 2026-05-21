/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onLearnMoreClick: (sectionId: string) => void;
}

export default function Hero({ onLearnMoreClick }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.82]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen flex flex-col justify-end overflow-hidden bg-black"
    >
      {/* Full-bleed video canvas — parallax */}
      <motion.div style={{ position: 'absolute', inset: '-20%', zIndex: 0, y: videoY }}>
        <video
          src="https://cdn.scentbazaar.co/Hero%20Video%20FInal.mp4"
          autoPlay loop muted playsInline
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            opacity: 1,
            transition: `opacity 1.2s var(--ease-out)`,
          }}
        />

        {/* Layered overlay: darken + vignette + bottom fade */}
        <motion.div style={{ position: 'absolute', inset: 0, background: 'oklch(13% 0.010 45)', opacity: overlayOpacity }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 45%, oklch(13% 0.010 45 / 0.75) 100%)' }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '22vh',
          background: 'linear-gradient(to bottom, transparent, var(--color-paper))',
        }} />
        {/* Horizontal scan line — adds cinematic CRT feel */}
        <div className="hero-scan-line" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }} />
      </motion.div>

      {/* Content — anchored to bottom, parallax upward on scroll */}
      <motion.div style={{ position: 'relative', zIndex: 10, maxWidth: '72rem', margin: '0 auto', padding: 'clamp(6rem, 14vw, 13rem) var(--space-lg) clamp(1.5rem, 3vw, 2.5rem)', width: '100%', y: contentY }}>

        {/* Hero headline — ≤50 chars, split into two lines at full --text-display */}
        <div style={{ overflow: 'hidden', marginBottom: 'var(--space-lg)' }}>
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.75rem, 5vw + 1rem, 5.25rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.04,
              color: 'var(--color-ink)',
              textTransform: 'uppercase',
              margin: 0,
              overflowWrap: 'anywhere',
              minWidth: 0,
            }}
          >
            PPF. Ceramic.<br />
            <span style={{ color: 'var(--color-accent)' }}>Perfection.</span>

          </motion.h1>
        </div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(var(--text-sm), 1.5vw + 0.4rem, var(--text-base))',
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'var(--color-ink-2)',
            maxWidth: '42ch',
            marginBottom: 'var(--space-xl)',
          }}
        >
          Precision paint protection for Dubai's finest vehicles. PPF, 9H ceramic coating,
          and paint correction — personally supervised by Mr. Ayman from start to finish.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', alignItems: 'center', marginBottom: 'var(--space-3xl)' }}
        >
          {/* Primary CTA — button-in-button nested icon architecture */}
          <a
            href="https://wa.me/971555096234"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
              padding: '0.75rem 1.75rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--color-accent)',
              color: 'var(--color-paper)',
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: 'var(--shadow-glow)',
              whiteSpace: 'nowrap',
            }}
          >
            Book Now
          </a>

          <button
            onClick={() => onLearnMoreClick('services')}
            className="btn-ghost"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
              padding: '0.75rem 0.75rem 0.75rem 1.5rem',
              borderRadius: 'var(--radius-full)',
              background: 'transparent',
              border: '1px solid var(--color-rule)',
              color: 'var(--color-ink-2)',
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-xs)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            Explore Services
            <span style={{
              width: '2rem', height: '2rem', borderRadius: '50%',
              border: '1px solid var(--color-rule)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <ArrowRight style={{ width: '0.75rem', height: '0.75rem' }} />
            </span>
          </button>
         </motion.div>
      </motion.div>
    </section>
  );
}
