import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    index: '01',
    title: 'Owner on the floor',
    body: 'Mr. Ayman physically inspects every compound pass, film fold, and edge wrap. There is no delegation on quality.',
  },
  {
    index: '02',
    title: 'Radical transparency',
    body: 'If your paint has existing damage we cannot fix, we say so before we start. You get a clear picture — every time.',
  },
  {
    index: '03',
    title: 'Lab-grade chemistry',
    body: "We source exclusively from the world's leading chemical manufacturers. We do not compromise on the science.",
  },
  {
    index: '04',
    title: 'Live updates on your phone',
    body: 'High-resolution photos and video sent via WhatsApp as each stage completes. Full visibility, start to finish.',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal with clip-path wipe
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
          {
            clipPath: 'inset(0 0% 0 0)', opacity: 1,
            duration: 1.2,
            ease: 'power4.inOut',
            scrollTrigger: { trigger: imageRef.current, start: 'top 80%', once: true },
          }
        );
        // subtle parallax on image scroll
        gsap.to(imageRef.current.querySelector('img'), {
          y: '-6%',
          ease: 'none',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      }

      // Pillars stagger with scale
      if (pillarsRef.current.length) {
        gsap.from(pillarsRef.current, {
          x: 30,
          opacity: 0,
          scale: 0.97,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: pillarsRef.current[0], start: 'top 85%', once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      style={{
        background: 'var(--color-paper)',
        borderTop: '1px solid var(--color-rule)',
        padding: 'clamp(4rem, 8vw, 7rem) 0',
      }}
      className="relative overflow-hidden"
    >
      {/* Ambient bloom */}
      <div style={{
        position: 'absolute', top: '30%', left: '30%',
        width: '36rem', height: '36rem',
        background: 'var(--color-bloom-1)',
        borderRadius: '50%', filter: 'blur(140px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', position: 'relative', zIndex: 1 }}>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — studio image, compact */}
          <div
            ref={imageRef}
            style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-xl)', maxHeight: '500px' }}
          >
            <img
              src="/images/maybach.png"
              alt="Prestige Detailing studio — precision at work"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80';
              }}
            />
            {/* Subtle vignette */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, transparent 60%, oklch(8% 0.008 88 / 0.6) 100%)',
              pointerEvents: 'none',
            }} />
            {/* Badge */}
            <div style={{
              position: 'absolute', bottom: '1.5rem', left: '1.5rem',
              background: 'oklch(8% 0.008 88 / 0.90)',
              border: '1px solid oklch(83% 0.17 88 / 0.35)',
              borderRadius: 'var(--radius-full)',
              padding: '0.5rem 1.125rem',
              backdropFilter: 'blur(16px)',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
            }}>
              <span style={{
                width: '0.4rem', height: '0.4rem', borderRadius: '50%',
                background: 'var(--color-accent)', flexShrink: 0,
                boxShadow: '0 0 6px var(--color-accent)',
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 600,
                letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-ink)',
                whiteSpace: 'nowrap',
              }}>
                Owner-supervised · Every job
              </span>
            </div>
          </div>

          {/* Right — editorial text column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

            {/* Section label */}
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--color-muted)', marginBottom: '1rem',
            }}>
              The Prestige difference
            </p>

            {/* Headline */}
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.85rem, 2.8vw + 0.8rem, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
              color: 'var(--color-ink)',
              marginBottom: '2.5rem',
            }}>
              Why Dubai's finest<br />
              <span style={{ color: 'var(--color-accent)' }}>cars come to us.</span>
            </h2>

            {/* Numbered pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative' }}>

              {pillars.map((p, i) => (
                <div
                  key={p.index}
                  ref={(el) => { if (el) pillarsRef.current[i] = el; }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2.75rem 1fr',
                    gap: '0 1.25rem',
                    paddingBottom: i < pillars.length - 1 ? '1.75rem' : 0,
                    paddingTop: i > 0 ? '1.75rem' : 0,
                    borderTop: i > 0 ? '1px solid var(--color-rule-2)' : 'none',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    width: '2.75rem', height: '2.75rem', borderRadius: '50%',
                    border: `1px solid ${i === 0 ? 'var(--color-accent)' : 'var(--color-rule)'}`,
                    background: i === 0 ? 'oklch(85% 0.170 88 / 0.08)' : 'var(--color-paper)',
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

                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9375rem',
                      fontWeight: 700,
                      color: 'var(--color-ink)',
                      marginBottom: '0.35rem',
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
                      maxWidth: '44ch',
                      margin: 0,
                    }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
