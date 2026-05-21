/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    label: 'Preparation',
    title: 'Deep Clay Decontamination',
    body: 'Extracting embedded brake dust and industrial debris to establish surgical paint alignment.',
  },
  {
    label: 'Correction',
    title: 'Scientific Micro-Polishing',
    body: 'Multi-stage compounding removes deep swirls without hologram tracks.',
  },
  {
    label: 'Armour',
    title: 'Molecular Nano Lock',
    body: 'Sealing with 9H glass-film — locking mirror-slick reflection and deep colour contrast.',
  },
];

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - left) / width) * 100)));
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => { if (e.buttons === 1) move(e.clientX); };
  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => { if (e.touches[0]) move(e.touches[0].clientX); };
  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => move(e.clientX);

  return (
    <section
      id="gallery"
      style={{
        position: 'relative',
        padding: 'var(--space-3xl) 0',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-rule)',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 var(--space-lg)' }}>

        {/* Compact two-column: steps left, slider right — all in one grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-2xl)',
            alignItems: 'center',
          }}
          className="max-lg:grid-cols-1"
        >
          {/* LEFT — Section head + steps stacked compactly */}
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-accent)',
              margin: '0 0 0.375rem',
            }}>
              Verified scientific results
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-s)',
              fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.06,
              textTransform: 'uppercase', color: 'var(--color-ink)',
              margin: '0 0 var(--space-xl)',
              overflowWrap: 'anywhere', minWidth: 0,
            }}>
              The transformation
            </h2>

            {/* Steps — compact, no massive padding */}
            <div style={{ position: 'relative' }}>
              {/* Vertical connector line */}
              <div style={{
                position: 'absolute',
                top: '1.4rem', bottom: '1.4rem',
                left: '1.1rem',
                width: '1px',
                background: 'linear-gradient(to bottom, var(--color-accent), oklch(30% 0.010 45 / 0.3))',
                pointerEvents: 'none',
              }} />

              {steps.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2.4rem 1fr',
                    gap: 'var(--space-md)',
                    alignItems: 'start',
                    padding: 'var(--space-md) 0',
                  }}
                >
                  {/* Circle badge */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '2.4rem', height: '2.4rem',
                    flexShrink: 0, position: 'relative', zIndex: 1,
                  }}>
                    <div style={{
                      width: '2rem', height: '2rem', borderRadius: '50%',
                      border: `1.5px solid ${i === 0 ? 'var(--color-accent)' : 'oklch(30% 0.010 45)'}`,
                      background: i === 0 ? 'oklch(83% 0.170 88 / 0.1)' : 'var(--color-paper)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-outlier)', fontSize: '0.65rem', fontWeight: 700,
                        color: i === 0 ? 'var(--color-accent)' : 'var(--color-muted)',
                        letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <div style={{ paddingTop: '0.25rem' }}>
                    <p style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 600,
                      letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-accent)',
                      margin: '0 0 0.2rem',
                    }}>
                      {s.label}
                    </p>
                    <h4 style={{
                      fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', fontWeight: 700,
                      letterSpacing: '-0.01em', color: 'var(--color-ink)',
                      margin: '0 0 0.25rem',
                    }}>{s.title}</h4>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 350,
                      lineHeight: 1.55, color: 'var(--color-muted)', margin: 0,
                    }}>{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Before/after slider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              ref={containerRef}
              onMouseMove={onMouseMove}
              onTouchMove={onTouchMove}
              onMouseDown={onMouseDown}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                border: '1px solid var(--color-rule)',
                cursor: 'ew-resize',
                userSelect: 'none',
                boxShadow: 'var(--shadow-card)',
                transform: 'translateZ(0)',
                isolation: 'isolate',
              }}
            >
              <img
                src="/images/after.png"
                alt="After professional detailing — mirror finish"
                style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none', borderRadius: 'inherit' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
                clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
                borderRadius: 'inherit',
              }}>
                <img
                  src="/images/BEFORE.png"
                  alt="Before — oxidised paint under Dubai sun"
                  style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none', borderRadius: 'inherit' }}
                  loading="lazy"
                />
              </div>

              {/* Slider line + handle */}
              <div style={{
                position: 'absolute', top: 0, bottom: 0, left: `${pos}%`,
                width: '2px', background: 'var(--color-accent)',
                boxShadow: '0 0 10px oklch(83% 0.17 88 / 0.6)',
                pointerEvents: 'none', zIndex: 10,
              }}>
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '2.25rem', height: '2.25rem', borderRadius: '50%',
                  background: 'var(--color-paper)', border: '2px solid var(--color-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: 'var(--shadow-card)',
                }}>
                  <ArrowLeftRight style={{ width: '0.875rem', height: '0.875rem', color: 'var(--color-accent)' }} />
                </div>
              </div>

              {/* Labels */}
              <div style={{
                position: 'absolute', top: 'var(--space-sm)', left: 'var(--space-sm)',
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--color-ink)', background: 'oklch(13% 0.010 45 / 0.85)',
                padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-rule)',
              }}>Before</div>
              <div style={{
                position: 'absolute', top: 'var(--space-sm)', right: 'var(--space-sm)',
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--color-paper)', background: 'var(--color-accent)',
                padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)',
              }}>After</div>

              {/* Drag hint */}
              <div style={{
                position: 'absolute', bottom: 'var(--space-sm)', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', alignItems: 'center', gap: '0.3rem',
                background: 'oklch(13% 0.010 45 / 0.8)', border: '1px solid var(--color-rule)',
                padding: '0.2rem 0.75rem', borderRadius: 'var(--radius-full)', whiteSpace: 'nowrap',
              }}>
                <ArrowLeftRight style={{ width: '0.625rem', height: '0.625rem', color: 'var(--color-accent)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-2)' }}>
                  Drag to compare
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
