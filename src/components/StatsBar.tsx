import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const signals = [
  { value: '4.9', label: 'Google Rating' },
  { value: '100+', label: '5-Star Reviews' },
  { value: '10,000+', label: 'Detailing Hours' },
  { value: 'DIP 2', label: 'Dubai Studio' },
  { value: 'Owner-supervised', label: 'Every Job' },
];

export default function StatsBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (itemsRef.current.length) {
        gsap.from(itemsRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: barRef.current,
            start: 'top 92%',
            once: true,
          },
        });
        // subtle highlight sweep on each item
        itemsRef.current.forEach((el) => {
          gsap.fromTo(el,
            { backgroundImage: 'linear-gradient(90deg, transparent 0%, transparent 100%)' },
            {
              backgroundImage: 'linear-gradient(90deg, oklch(85% 0.17 88 / 0.04) 0%, transparent 100%)',
              duration: 0.5,
              scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            }
          );
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        position: 'relative',
        zIndex: 25,
        background: 'var(--color-paper)',
        borderTop: '1px solid var(--color-rule)',
        borderBottom: '1px solid var(--color-rule)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 var(--space-lg)' }}>
        <div style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>
          {signals.map((item, i) => (
            <div
              key={item.label}
              ref={(el) => { if (el) itemsRef.current[i] = el; }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '1.75rem 2.5rem',
                borderRight: i < signals.length - 1 ? '1px solid var(--color-rule)' : 'none',
                flex: '1 1 0',
                minWidth: '10rem',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--color-ink)',
                lineHeight: 1,
                marginBottom: '0.3rem',
              }}>
                {item.value}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
