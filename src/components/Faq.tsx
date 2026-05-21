import { useState, useEffect, useRef } from 'react';
import { FAQ_DATA } from '../data';
import { Plus, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);
  const toggle = (id: string) => setOpenId((p) => (p === id ? null : id));

  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headRef.current) {
        gsap.from(headRef.current.children, {
          y: 20,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headRef.current,
            start: 'top 85%',
            once: true,
          },
        });
      }

      if (itemsRef.current.length) {
        gsap.from(itemsRef.current, {
          y: 18,
          opacity: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: itemsRef.current[0],
            start: 'top 88%',
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      style={{
        position: 'relative',
        padding: 'var(--space-4xl) 0',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-rule)',
        background: 'var(--color-paper-2)',
      }}
    >
      {/* Ambient bloom */}
      <div style={{
        position: 'absolute', top: '10%', right: '5%',
        width: '32rem', height: '32rem',
        background: 'var(--color-bloom-1)',
        borderRadius: '50%', filter: 'blur(130px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 var(--space-lg)', position: 'relative', zIndex: 1 }}>

        {/* Two-col header: label+title left, description right */}
        <div
          ref={headRef}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-2xl)',
            alignItems: 'end',
            marginBottom: 'var(--space-3xl)',
          }}
          className="max-md:grid-cols-1"
        >
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-accent)',
              marginBottom: 'var(--space-sm)',
            }}>
              Technical reference
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3vw + 0.8rem, 3.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.0,
              textTransform: 'uppercase',
              color: 'var(--color-ink)',
              margin: 0,
            }}>
              Frequently<br />
              <span style={{ color: 'var(--color-accent)' }}>asked.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 'var(--space-sm)' }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 350,
              lineHeight: 1.65, color: 'var(--color-muted)', margin: 0,
            }}>
              Granular answers on film thicknesses, ceramic nano bonds, paint recovery, and what to expect from your first visit.
            </p>
            <a
              href="https://wa.me/971555096234"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
                fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--color-accent)', textDecoration: 'none',
                width: 'fit-content',
              }}
            >
              Ask via WhatsApp <ArrowUpRight style={{ width: '0.75rem', height: '0.75rem' }} />
            </a>
          </div>
        </div>

        {/* Accordion list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {FAQ_DATA.map((faq, i) => {
            const open = openId === faq.id;
            return (
              <div
                key={faq.id}
                ref={(el) => { if (el) itemsRef.current[i] = el; }}
                style={{
                  borderTop: i === 0 ? '1px solid var(--color-rule)' : 'none',
                  borderBottom: '1px solid var(--color-rule)',
                  background: open ? 'oklch(12% 0.009 88 / 0.5)' : 'transparent',
                  transition: 'background 250ms ease',
                }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: 'var(--space-md) 0',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: 'var(--space-lg)',
                    background: 'none', border: 'none', cursor: 'pointer',
                  }}
                  aria-expanded={open}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700,
                      letterSpacing: '0.1em', color: open ? 'var(--color-accent)' : 'var(--color-muted)',
                      flexShrink: 0, minWidth: '2rem',
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.875rem, 1.2vw + 0.3rem, 1rem)',
                      fontWeight: open ? 700 : 500,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.35,
                      color: open ? 'var(--color-ink)' : 'var(--color-ink-2)',
                      margin: 0,
                      transition: 'color 200ms ease',
                      textAlign: 'left',
                    }}>
                      {faq.question}
                    </h3>
                  </div>
                  <div style={{
                    flexShrink: 0,
                    width: '1.75rem', height: '1.75rem',
                    borderRadius: '50%',
                    border: `1px solid ${open ? 'var(--color-accent)' : 'var(--color-rule)'}`,
                    background: open ? 'var(--color-accent)' : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: open ? 'var(--color-paper)' : 'var(--color-muted)',
                    transform: open ? 'rotate(45deg)' : 'none',
                    transition: 'transform 280ms cubic-bezier(0.16,1,0.3,1), background 200ms ease, border-color 200ms ease',
                  }}>
                    <Plus style={{ width: '0.875rem', height: '0.875rem' }} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{
                        paddingLeft: 'calc(2rem + var(--space-md))',
                        paddingBottom: 'var(--space-lg)',
                      }}>
                        <p style={{
                          fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 350,
                          lineHeight: 1.75, color: 'var(--color-ink-2)', margin: 0,
                          maxWidth: '60ch',
                        }}>
                          {faq.answer}
                        </p>
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
