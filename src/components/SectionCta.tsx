/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const WhatsAppIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.35-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const whatsAppMessage = "Hi Ayman! I'd like to book a slot for my vehicle. Can we discuss the best service package?";
const whatsAppLink = `https://wa.me/971555096234?text=${encodeURIComponent(whatsAppMessage)}`;

export default function SectionCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={sectionRef}
      id="cta-booking"
      style={{ position: 'relative', overflow: 'hidden', background: 'var(--color-paper)' }}
    >
      {/* Top seamless blend from previous section */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '12rem',
        background: 'linear-gradient(to bottom, var(--color-paper), transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      {/* Parallax image — bleeds beyond section bounds */}
      <motion.div
        style={{
          position: 'absolute', inset: '-10%',
          y: imageY,
          zIndex: 0,
        }}
      >
        <img
          src="/images/rr.png"
          alt="Prestige Detailing studio"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        {/* Dark base overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'oklch(8% 0.008 88 / 0.72)' }} />
        {/* Cinematic vignette */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, oklch(5% 0.005 88 / 0.65) 100%)',
        }} />
      </motion.div>

      {/* Bottom seamless blend into footer */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '14rem',
        background: 'linear-gradient(to top, var(--color-paper) 20%, transparent)',
        zIndex: 2, pointerEvents: 'none',
      }} />

      {/* Content — left-anchored, not centered, feels editorial not generic */}
      <div
        style={{
          position: 'relative', zIndex: 10,
          maxWidth: '80rem', margin: '0 auto',
          padding: 'clamp(8rem, 16vw, 14rem) clamp(1.5rem, 5vw, 4rem)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Pre-heading */}
          <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '1.5rem',
            }}
          >
            Private bookings only
          </p>

          {/* Main headline */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7vw + 1rem, 6.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'var(--color-ink)',
              margin: '0 0 1.75rem',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            Your car.<br />
            <span style={{ color: 'var(--color-accent)' }}>Protected.</span>
          </h2>

          {/* Body copy */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.875rem, 1.2vw + 0.4rem, 1rem)',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'var(--color-ink-2)',
              maxWidth: '44ch',
              marginBottom: '2.5rem',
            }}
          >
            Book directly with Ayman. No call centres, no forms — a real conversation about what your car needs, and what it will take to get it there.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'center', justifyContent: 'center' }}
          >
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                padding: '0.875rem 2rem',
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
                transition: 'background 350ms cubic-bezier(0.32,0.72,0,1), transform 350ms cubic-bezier(0.32,0.72,0,1)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(90% 0.170 88)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
              }}
            >
              <WhatsAppIcon />
              Book on WhatsApp
            </a>

            <a
              href="tel:0555096234"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.875rem 1.75rem',
                borderRadius: 'var(--radius-full)',
                background: 'transparent',
                border: '1px solid oklch(96% 0.006 88 / 0.25)',
                color: 'var(--color-ink-2)',
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'border-color 300ms ease, color 300ms ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--color-accent)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-ink)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(96% 0.006 88 / 0.25)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-ink-2)';
              }}
            >
              Call directly
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
