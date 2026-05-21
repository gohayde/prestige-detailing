/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { FAQ_DATA } from '../data';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);
  const toggle = (id: string) => setOpenId((p) => (p === id ? null : id));

  return (
    <section
      id="faq"
      style={{
        position: 'relative',
        padding: 'var(--space-4xl) 0',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-rule)',
      }}
    >
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 var(--space-lg)', position: 'relative', zIndex: 1 }}>

        {/* Section head */}
        <div style={{ marginBottom: 'var(--space-3xl)' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500,
            letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-accent)',
            marginBottom: 'var(--space-sm)',
          }}>
            Technical reference
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-s)',
            fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.06,
            textTransform: 'uppercase', color: 'var(--color-ink)', margin: '0 0 var(--space-md)',
            overflowWrap: 'anywhere', minWidth: 0,
          }}>
            Frequently asked
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 350,
            lineHeight: 1.65, color: 'var(--color-muted)',
          }}>
            Granular facts on molecular nano bonds, film thicknesses, and paint recovery metrics.
          </p>
        </div>

        {/* Accordion list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
          {FAQ_DATA.map((faq) => {
            const open = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  borderRadius: 'var(--radius-lg)',
                  border: `1px solid ${open ? 'oklch(83% 0.17 88 / 0.35)' : 'var(--color-rule)'}`,
                  background: open ? 'var(--color-paper-2)' : 'transparent',
                  overflow: 'hidden',
                  transition: `border-color var(--dur-short) var(--ease-out), background var(--dur-short) var(--ease-out)`,
                }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: 'var(--space-lg) var(--space-xl)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: 'var(--space-lg)',
                    background: 'none', border: 'none', cursor: 'pointer',
                  }}
                  aria-expanded={open}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: open ? 700 : 500,
                    letterSpacing: '0.02em',
                    lineHeight: 1.4,
                    color: open ? 'var(--color-ink)' : 'var(--color-ink-2)',
                    margin: 0,
                    transition: `color var(--dur-micro) var(--ease-out)`,
                    textAlign: 'left',
                  }}>
                    {faq.question}
                  </h3>
                  <div style={{
                    flexShrink: 0,
                    width: '1.5rem', height: '1.5rem',
                    borderRadius: '50%',
                    border: `1px solid ${open ? 'var(--color-accent)' : 'var(--color-rule)'}`,
                    background: open ? 'var(--color-accent)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: open ? 'var(--color-paper)' : 'var(--color-muted)',
                    transform: open ? 'rotate(180deg)' : 'none',
                    transition: `transform var(--dur-short) var(--ease-out), background var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out)`,
                  }}>
                    <ChevronDown style={{ width: '0.875rem', height: '0.875rem' }} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        padding: '0 var(--space-xl) var(--space-xl)',
                        borderTop: '1px solid var(--color-rule)',
                        paddingTop: 'var(--space-lg)',
                      }}>
                        <p style={{
                          fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 350,
                          lineHeight: 1.7, color: 'var(--color-ink-2)', margin: '0 0 var(--space-md)',
                          maxWidth: '65ch',
                        }}>
                          {faq.answer}
                        </p>
                        <a
                          href="https://wa.me/971555096234"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                            fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 600,
                            letterSpacing: '0.1em', textTransform: 'uppercase',
                            color: 'var(--color-accent)', textDecoration: 'none',
                            transition: `opacity var(--dur-micro) var(--ease-out)`,
                          }}
                          onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.75'}
                          onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}
                        >
                          WhatsApp Us
                          <ArrowUpRight style={{ width: '0.75rem', height: '0.75rem' }} />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
