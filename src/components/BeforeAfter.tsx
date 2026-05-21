import { useState, useRef, MouseEvent, TouchEvent, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    label: 'Preparation',
    title: 'Deep Clay Decontamination',
    body: 'Extracting embedded brake dust and industrial debris to establish surgical paint alignment.',
    stat: '99%',
    statLabel: 'contaminants removed',
  },
  {
    label: 'Correction',
    title: 'Scientific Micro-Polishing',
    body: 'Multi-stage compounding removes deep swirls without hologram tracks.',
    stat: '95%',
    statLabel: 'swirl reduction',
  },
  {
    label: 'Armour',
    title: 'Molecular Nano Lock',
    body: 'Sealing with 9H glass-film — locking mirror-slick reflection and deep colour contrast.',
    stat: '9H',
    statLabel: 'hardness rating',
  },
];

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);
  const headRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - left) / width) * 100)));
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => { if (e.buttons === 1) move(e.clientX); };
  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => { if (e.touches[0]) move(e.touches[0].clientX); };
  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => move(e.clientX);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headRef.current) {
        gsap.from(headRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: { trigger: headRef.current, start: 'top 85%', once: true },
        });
      }

      if (stepsRef.current.length) {
        gsap.from(stepsRef.current, {
          x: -30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: { trigger: stepsRef.current[0], start: 'top 88%', once: true },
        });
      }

      if (sliderRef.current) {
        gsap.fromTo(sliderRef.current,
          { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
          {
            clipPath: 'inset(0 0 0% 0)', opacity: 1,
            duration: 1.1,
            ease: 'power4.inOut',
            scrollTrigger: { trigger: sliderRef.current, start: 'top 85%', once: true },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      style={{
        position: 'relative',
        padding: 'var(--space-4xl) 0',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-rule)',
        background: 'var(--color-paper)',
      }}
    >
      {/* Ambient bloom */}
      <div style={{
        position: 'absolute', bottom: '20%', left: '5%',
        width: '28rem', height: '28rem',
        background: 'var(--color-bloom-1)',
        borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 var(--space-lg)', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-3xl)',
            alignItems: 'center',
          }}
          className="max-lg:grid-cols-1"
        >
          {/* LEFT — Section head + steps */}
          <div>
            <div ref={headRef}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500,
                letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-accent)',
                margin: '0 0 0.5rem',
              }}>
                Verified scientific results
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3vw + 0.8rem, 3.25rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.0,
                textTransform: 'uppercase',
                color: 'var(--color-ink)',
                margin: '0 0 var(--space-2xl)',
              }}>
                The<br />
                <span style={{ color: 'var(--color-accent)' }}>transformation.</span>
              </h2>
            </div>

            {/* Steps */}
            <div style={{ position: 'relative' }}>
              {/* Vertical connector */}
              <div style={{
                position: 'absolute',
                top: '1.4rem', bottom: '1.4rem',
                left: '1.1rem',
                width: '1px',
                background: 'linear-gradient(to bottom, var(--color-accent), oklch(30% 0.010 45 / 0.25))',
                pointerEvents: 'none',
              }} />

              {steps.map((s, i) => (
                <div
                  key={s.label}
                  ref={(el) => { if (el) stepsRef.current[i] = el; }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2.4rem 1fr',
                    gap: 'var(--space-md)',
                    alignItems: 'start',
                    padding: i > 0 ? 'var(--space-lg) 0 0' : '0 0 var(--space-lg)',
                    borderTop: i > 0 ? '1px solid var(--color-rule-2)' : 'none',
                    paddingBottom: i < steps.length - 1 ? 'var(--space-lg)' : 0,
                  }}
                >
                  {/* Circle badge */}
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '2.4rem', height: '2.4rem',
                    flexShrink: 0, position: 'relative', zIndex: 1,
                  }}>
                    <div style={{
                      width: '2.2rem', height: '2.2rem', borderRadius: '50%',
                      border: `1.5px solid ${i === 0 ? 'var(--color-accent)' : 'oklch(30% 0.010 45)'}`,
                      background: i === 0 ? 'oklch(83% 0.170 88 / 0.1)' : 'var(--color-paper)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700,
                        color: i === 0 ? 'var(--color-accent)' : 'var(--color-muted)',
                        letterSpacing: '-0.04em',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
                    <div style={{ flex: 1 }}>
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
                        margin: '0 0 0.3rem',
                      }}>{s.title}</h4>
                      <p style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 350,
                        lineHeight: 1.6, color: 'var(--color-muted)', margin: 0,
                      }}>{s.body}</p>
                    </div>

                    {/* Stat badge */}
                    <div style={{
                      flexShrink: 0,
                      textAlign: 'right',
                      borderLeft: '1px solid var(--color-rule-2)',
                      paddingLeft: 'var(--space-md)',
                    }}>
                      <div style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.04em',
                        color: 'var(--color-accent)',
                        lineHeight: 1,
                      }}>{s.stat}</div>
                      <div style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.58rem', fontWeight: 500,
                        letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted)',
                        marginTop: '0.2rem', whiteSpace: 'nowrap',
                      }}>{s.statLabel}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Before/after slider */}
          <div ref={sliderRef} style={{ display: 'flex', alignItems: 'stretch' }}>
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
                width: '100%',
                aspectRatio: '4/3',
              }}
            >
              <img
                src="/images/after.png"
                alt="After professional detailing — mirror finish"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none', borderRadius: 'inherit' }}
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
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none', borderRadius: 'inherit' }}
                  loading="lazy"
                />
              </div>

              {/* Slider line + handle */}
              <div style={{
                position: 'absolute', top: 0, bottom: 0, left: `${pos}%`,
                width: '2px', background: 'var(--color-accent)',
                boxShadow: '0 0 12px oklch(83% 0.17 88 / 0.7)',
                pointerEvents: 'none', zIndex: 10,
              }}>
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                  background: 'var(--color-paper)', border: '2px solid var(--color-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 20px oklch(0% 0 0 / 0.5)',
                }}>
                  <ArrowLeftRight style={{ width: '0.875rem', height: '0.875rem', color: 'var(--color-accent)' }} />
                </div>
              </div>

              {/* Labels */}
              <div style={{
                position: 'absolute', top: 'var(--space-sm)', left: 'var(--space-sm)',
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--color-ink)', background: 'oklch(13% 0.010 45 / 0.88)',
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
                background: 'oklch(13% 0.010 45 / 0.85)', border: '1px solid var(--color-rule)',
                padding: '0.2rem 0.75rem', borderRadius: 'var(--radius-full)', whiteSpace: 'nowrap',
              }}>
                <ArrowLeftRight style={{ width: '0.625rem', height: '0.625rem', color: 'var(--color-accent)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-2)' }}>
                  Drag to compare
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
