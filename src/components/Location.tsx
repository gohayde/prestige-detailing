import { useEffect, useRef } from 'react';
import { MapPin, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const schedules = [
  { day: 'Thursday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Friday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Sunday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Monday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Wednesday', hours: 'Closed', closed: true },
];

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

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
      if (cardsRef.current.length) {
        gsap.from(cardsRef.current, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current[0],
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
      id="location"
      style={{
        position: 'relative',
        padding: 'var(--space-4xl) 0',
        background: 'var(--color-paper)',
        borderTop: '1px solid var(--color-rule)',
        overflow: 'hidden',
      }}
    >
      {/* Bloom */}
      <div style={{
        position: 'absolute', top: '20%', right: '10%',
        width: '30rem', height: '30rem',
        background: 'var(--color-bloom-1)',
        borderRadius: '50%', filter: 'blur(130px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={headRef} style={{ marginBottom: 'var(--space-3xl)', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-xl)' }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500,
              letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-accent)',
              marginBottom: '0.75rem',
            }}>
              Visit our automotive studio
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3vw + 0.8rem, 3.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.0,
              textTransform: 'uppercase',
              color: 'var(--color-ink)',
              margin: '0 0 1rem',
            }}>
              Location<br />
              <span style={{ color: 'var(--color-accent)' }}>& Hours.</span>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 400,
              lineHeight: 1.65, color: 'var(--color-muted)', maxWidth: '52ch', margin: 0,
            }}>
              Based inside Dubai Investment Park 2. Drop by for honest advice, coffee, or to inspect an active supercar correction project.
            </p>
          </div>

          {/* Right side info block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'flex-end' }}>
            <div style={{
              padding: '1.25rem 1.75rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-rule)',
              background: 'var(--color-paper-2)',
              display: 'flex', flexDirection: 'column', gap: '0.25rem',
              textAlign: 'right',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--color-ink)', lineHeight: 1 }}>DIP 2</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>Dubai Investment Park</span>
            </div>
            <div style={{
              padding: '1.25rem 1.75rem',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-rule)',
              background: 'var(--color-paper-2)',
              display: 'flex', flexDirection: 'column', gap: '0.25rem',
              textAlign: 'right',
            }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--color-accent)', lineHeight: 1 }}>Est. 2018</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-muted)' }}>Serving Dubai</span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch" style={{ alignItems: 'stretch' }}>

          {/* Left: address + hours */}
          <div className="lg:col-span-5 flex flex-col gap-5" style={{ minHeight: 0 }}>

            {/* Address card */}
            <div
              ref={(el) => { if (el) cardsRef.current[0] = el; }}
              style={{
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-rule)',
                background: 'var(--color-paper-2)',
                padding: 'var(--space-xl)',
                display: 'flex', gap: 'var(--space-md)',
              }}
            >
              <div style={{
                width: '2.75rem', height: '2.75rem', borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-rule)',
                background: 'var(--color-paper)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <MapPin style={{ width: '1.125rem', height: '1.125rem', color: 'var(--color-accent)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-accent)',
                  marginBottom: '0.5rem',
                }}>Studio Address</p>
                <p style={{
                  fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', fontWeight: 600,
                  color: 'var(--color-ink)', lineHeight: 1.5, margin: '0 0 0.25rem',
                }}>
                  Prestige Detailing UAE<br />
                  61 Street — Dubai Investment Park Second
                </p>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-muted)',
                  letterSpacing: '0.06em', margin: '0 0 var(--space-md)',
                }}>DIP 2 · Close to Roundabout</p>

                <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-rule-2)' }}>
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 600,
                    letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-muted)',
                    marginBottom: '0.35rem',
                  }}>Telephone</p>
                  <a href="tel:+971555096234" style={{
                    fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', fontWeight: 800,
                    color: 'var(--color-ink)', textDecoration: 'none', letterSpacing: '-0.02em',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                  }}>
                    <Phone style={{ width: '0.875rem', height: '0.875rem', color: 'var(--color-accent)' }} />
                    +971 55 509 6234
                  </a>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div
              ref={(el) => { if (el) cardsRef.current[1] = el; }}
              style={{
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-rule)',
                background: 'var(--color-paper-2)',
                padding: 'var(--space-xl)',
                flex: 1,
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: 'var(--space-lg)',
                paddingBottom: 'var(--space-md)',
                borderBottom: '1px solid var(--color-rule)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-accent)',
                  margin: 0,
                }}>Weekly Studio Hours</p>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.58rem', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'oklch(65% 0.15 145)',
                  background: 'oklch(65% 0.15 145 / 0.08)',
                  border: '1px solid oklch(65% 0.15 145 / 0.3)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                }}>Open Now</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {schedules.map((sched, i) => {
                  const isToday = sched.day === today;
                  return (
                    <div
                      key={i}
                      style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '0.625rem 0',
                        borderBottom: i < schedules.length - 1 ? '1px solid var(--color-rule-2)' : 'none',
                        background: isToday ? 'oklch(85% 0.170 88 / 0.04)' : 'transparent',
                        borderRadius: isToday ? '0.375rem' : 0,
                        paddingLeft: isToday ? '0.5rem' : 0,
                        paddingRight: isToday ? '0.5rem' : 0,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        {isToday && (
                          <span style={{
                            width: '0.4rem', height: '0.4rem', borderRadius: '50%',
                            background: 'var(--color-accent)', flexShrink: 0,
                          }} />
                        )}
                        <span style={{
                          fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)',
                          fontWeight: isToday ? 700 : 400,
                          color: sched.closed ? 'var(--color-muted)' : isToday ? 'var(--color-ink)' : 'var(--color-ink-2)',
                        }}>
                          {sched.day}
                        </span>
                        {isToday && (
                          <span style={{
                            fontFamily: 'var(--font-mono)', fontSize: '0.55rem', fontWeight: 700,
                            letterSpacing: '0.1em', textTransform: 'uppercase',
                            color: 'var(--color-accent)',
                          }}>Today</span>
                        )}
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 500,
                        color: sched.closed ? 'oklch(50% 0.12 25)' : isToday ? 'var(--color-accent)' : 'var(--color-muted)',
                        letterSpacing: '0.04em',
                      }}>
                        {sched.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div
            ref={(el) => { if (el) cardsRef.current[2] = el; }}
            className="lg:col-span-7"
            style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid var(--color-rule)',
              minHeight: '420px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <iframe
              title="Prestige Detailing UAE Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.8339610753374!2d55.19030897603032!3d24.97176317785687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f737892ef89f7%3A0x3f3168db587f711a!2sPrestige%20Detailing%20UAE!5e0!3m2!1sen!2sae!4v1779383904953!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%) brightness(95%)', display: 'block', flex: 1, minHeight: '420px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
