import { useState, useEffect, useRef } from 'react';
import { SERVICES_DATA } from '../data';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.35-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);
  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headRef.current) {
        gsap.fromTo(headRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: headRef.current, start: 'top 90%', once: true },
          }
        );
      }
      if (listRef.current) {
        gsap.fromTo(listRef.current.children,
          { x: -24, opacity: 0 },
          {
            x: 0, opacity: 1,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: { trigger: listRef.current, start: 'top 90%', once: true },
          }
        );
      }
      if (panelRef.current) {
        gsap.fromTo(panelRef.current,
          { x: 30, opacity: 0 },
          {
            x: 0, opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: panelRef.current, start: 'top 90%', once: true },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" style={{ background: 'var(--color-paper-2)' }} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-[1px]" style={{ background: 'var(--color-rule)' }} />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full filter blur-[100px] pointer-events-none" style={{ background: 'var(--color-bloom-1)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <div ref={headRef} className="text-center md:text-left md:flex justify-between items-end mb-20 gap-8">
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-muted)', fontWeight: 500, display: 'block', marginBottom: '0.75rem' }}>
              Precision mechanical protection
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--color-ink)', lineHeight: 1.05 }}>
              Studio Services<br />
              <span style={{ color: 'var(--color-ink-2)', fontWeight: 500 }}>& Specification Sheets</span>
            </h2>
          </div>
          <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', maxWidth: '38ch', lineHeight: 1.7, marginTop: '1rem' }}>
            Laboratory-grade products from the world's leading chemical manufacturers. Select a service to inspect its specifications.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Left — numbered service selector */}
          <div ref={listRef} className="lg:col-span-5 flex flex-col gap-0" style={{ border: '1px solid var(--color-rule)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            {SERVICES_DATA.map((service, idx) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className="group w-full text-left flex items-center justify-between transition-all duration-200 cursor-pointer"
                  style={{
                    padding: '1.25rem 1.5rem',
                    background: isSelected ? 'var(--color-paper-3)' : 'transparent',
                    borderBottom: idx < SERVICES_DATA.length - 1 ? '1px solid var(--color-rule)' : 'none',
                    borderLeft: isSelected ? '2px solid var(--color-accent)' : '2px solid transparent',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    {/* Numbered index */}
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      color: isSelected ? 'var(--color-accent)' : 'var(--color-muted)',
                      flexShrink: 0,
                      width: '1.5rem',
                    }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'var(--text-sm)',
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                        textTransform: 'uppercase',
                        color: isSelected ? 'var(--color-ink)' : 'var(--color-ink-2)',
                        marginBottom: '0.2rem',
                      }}>
                        {service.title}
                      </h3>
                      <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'var(--color-muted)',
                      }}>
                        From {service.priceEstimate}
                      </p>
                    </div>
                  </div>
                  <ChevronRight style={{
                    width: '0.875rem', height: '0.875rem',
                    color: isSelected ? 'var(--color-accent)' : 'var(--color-rule)',
                    flexShrink: 0,
                    transition: 'color 200ms ease',
                  }} />
                </button>
              );
            })}
          </div>

          {/* Right — spec panel */}
          <div ref={panelRef} className="lg:col-span-7 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col"
                style={{
                  background: 'var(--color-paper)',
                  border: '1px solid var(--color-rule)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                }}
              >
                {/* Spec panel header */}
                <div style={{
                  padding: '2rem 2.5rem',
                  borderBottom: '1px solid var(--color-rule)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem',
                }}>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.625rem',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: 'var(--color-muted)', fontWeight: 500,
                      display: 'block', marginBottom: '0.5rem',
                    }}>
                      Spec sheet · {String(SERVICES_DATA.findIndex(s => s.id === selectedService.id) + 1).padStart(2, '0')} of {String(SERVICES_DATA.length).padStart(2, '0')}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ink)',
                      margin: 0,
                    }}>
                      {selectedService.title}
                    </h3>
                  </div>
                  {selectedService.stats && (
                    <span style={{
                      padding: '0.375rem 0.875rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--color-rule)',
                      color: 'var(--color-accent)',
                      fontSize: '0.625rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}>
                      {selectedService.stats}
                    </span>
                  )}
                </div>

                {/* Description + benefits */}
                <div style={{ padding: '2rem 2.5rem', flex: 1 }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    lineHeight: 1.75,
                    color: 'var(--color-ink-2)',
                    marginBottom: '1.75rem',
                    maxWidth: '58ch',
                  }}>
                    {selectedService.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.625rem',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: 'var(--color-muted)', fontWeight: 500,
                    }}>
                      Included:
                    </span>
                    {selectedService.benefits.map((benefit, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <CheckCircle2 style={{ width: '0.875rem', height: '0.875rem', flexShrink: 0, marginTop: '0.15rem', color: 'var(--color-accent)' }} />
                        <span style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 'var(--text-xs)',
                          lineHeight: 1.65,
                          color: 'var(--color-ink-2)',
                        }}>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price + CTA */}
                <div style={{
                  padding: '1.5rem 2.5rem',
                  borderTop: '1px solid var(--color-rule)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: '1.5rem', flexWrap: 'wrap',
                  background: 'var(--color-paper-2)',
                }}>
                  <div>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.625rem',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: 'var(--color-muted)', fontWeight: 500,
                      display: 'block', marginBottom: '0.35rem',
                    }}>
                      Base estimate
                    </span>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: 'var(--color-accent)',
                      }}>
                        {selectedService.priceEstimate}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)' }}>
                        / base config
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/971555096234?text=${encodeURIComponent(`Hi Ayman! I'd like to book "${selectedService.title}" (from ${selectedService.priceEstimate}). Can we chat about scheduling?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.625rem',
                      padding: '0.75rem 1.5rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--color-accent)',
                      color: 'var(--color-paper)',
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      boxShadow: 'var(--shadow-glow)',
                    }}
                  >
                    <WhatsAppIcon />
                    Book via WhatsApp
                  </a>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
