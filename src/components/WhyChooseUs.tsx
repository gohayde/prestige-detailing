/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const pillars = [
  {
    index: '01',
    title: 'Owner on the floor',
    body: 'Mr. Ayman physically inspects every compound pass, film fold, and edge wrap. There is no delegation on quality.',
  },
  {
    index: '02',
    title: 'Honest, always',
    body: 'If your paint has existing damage we cannot fix, we say so before we start — not after. You get a clear picture, every time.',
  },
  {
    index: '03',
    title: 'Lab-grade chemistry',
    body: 'Every product we use is sourced from the world\'s leading manufacturers. We do not compromise on the science behind the shine.',
  },
  {
    index: '04',
    title: 'Live progress on your phone',
    body: 'High-resolution photos and video updates sent directly via WhatsApp as each stage completes. No guessing.',
  },
];

const trustLine = [
  { value: '10,000+', label: 'Detailing hours' },
  { value: '4.9★', label: '100+ Google reviews' },
  { value: 'DIP 2', label: 'Dubai studio' },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      style={{ background: 'var(--color-paper)', borderTop: '1px solid var(--color-rule)' }}
      className="relative overflow-hidden"
    >
      {/* Ambient bloom — kept very subtle */}
      <div
        style={{
          position: 'absolute', top: '40%', left: '35%',
          width: '40rem', height: '40rem',
          background: 'var(--color-bloom-1)',
          borderRadius: '50%', filter: 'blur(140px)', pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Full-bleed asymmetric split — no padding on the grid itself so image bleeds */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">

          {/* Left — studio image, full height, no radius, bleeds to edge */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}
          >
            <img
              src="/images/maybach.png"
              alt="Prestige Detailing studio — precision at work"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            {/* Rightward fade — blends into the text column */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 70%, var(--color-paper) 100%)',
              pointerEvents: 'none',
            }} />
            {/* Bottom fade */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '30%',
              background: 'linear-gradient(to top, var(--color-paper), transparent)',
              pointerEvents: 'none',
            }} />
          </motion.div>

          {/* Right — editorial text column */}
          <div style={{ padding: 'clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 4rem) clamp(3rem, 6vw, 6rem) clamp(1rem, 3vw, 2rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            {/* Section label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'var(--color-muted)', marginBottom: '1.5rem',
              }}
            >
              The Prestige difference
            </motion.p>

            {/* Headline — weight contrast, no uppercase shouting */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3vw + 1rem, 3.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                color: 'var(--color-ink)',
                marginBottom: '3rem',
              }}
            >
              Why Dubai collectors<br />
              trust Prestige.
            </motion.h2>

            {/* Numbered pillars — sparse, editorial, no cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative' }}>
              {/* Vertical rule connecting the numbered items */}
              <div style={{
                position: 'absolute', left: '1.35rem', top: '2rem', bottom: '2rem',
                width: '1px', background: 'var(--color-rule)',
              }} />

              {pillars.map((p, i) => (
                <motion.div
                  key={p.index}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2.75rem 1fr',
                    gap: '0 1.25rem',
                    paddingBottom: i < pillars.length - 1 ? '2rem' : 0,
                    paddingTop: i > 0 ? '2rem' : 0,
                    borderTop: i > 0 ? '1px solid var(--color-rule-2)' : 'none',
                    position: 'relative',
                  }}
                >
                  {/* Index number — acts as the visual node on the line */}
                  <div style={{
                    width: '2.75rem', height: '2.75rem', borderRadius: '50%',
                    border: '1px solid var(--color-rule)',
                    background: 'var(--color-paper)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, zIndex: 1,
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.6875rem',
                      fontWeight: 600, letterSpacing: '0.05em',
                      color: 'var(--color-accent)',
                    }}>
                      {p.index}
                    </span>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      color: 'var(--color-ink)',
                      marginBottom: '0.4rem',
                      letterSpacing: '-0.01em',
                    }}>
                      {p.title}
                    </h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem',
                      fontWeight: 400,
                      lineHeight: 1.65,
                      color: 'var(--color-ink-2)',
                      maxWidth: '46ch',
                    }}>
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom trust bar — full bleed strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            borderTop: '1px solid var(--color-rule)',
            display: 'flex', justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '2rem var(--space-lg)',
            gap: '0',
          }}
        >
          {trustLine.map((item, i) => (
            <div
              key={item.label}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                padding: '1.25rem 4rem',
                borderRight: i < trustLine.length - 1 ? '1px solid var(--color-rule)' : 'none',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--color-ink)',
              }}>
                {item.value}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6875rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
                marginTop: '0.25rem',
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
