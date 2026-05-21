import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState('/images/maybach.png');
  const sectionRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textColRef.current) {
        gsap.from(textColRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: { trigger: textColRef.current, start: 'top 80%', once: true },
        });
      }
      if (containerRef.current) {
        gsap.from(containerRef.current, {
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
          duration: 1.1,
          ease: 'power4.inOut',
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%', once: true },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (playing) videoRef.current.pause();
      else videoRef.current.play().catch(() => {});
      setPlaying(!playing);
    }
  };

  return (
    <section ref={sectionRef} id="about" style={{ background: 'var(--color-paper)' }} className="relative overflow-hidden">
      {/* Subtle ambient bloom */}
      <div style={{
        position: 'absolute', top: '30%', left: '10%',
        width: '30rem', height: '30rem',
        background: 'var(--color-bloom-1)',
        borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '640px' }}>

          {/* Left — editorial text column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              padding: 'clamp(3.5rem, 7vw, 6rem) clamp(2rem, 5vw, 4rem)',
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
              borderRight: '1px solid var(--color-rule)',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--color-muted)', marginBottom: '1.5rem',
            }}>
              The artisans of Prestige
            </p>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 4vw + 0.5rem, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.06,
              textTransform: 'uppercase',
              color: 'var(--color-ink)',
              margin: '0 0 2rem',
            }}>
              Precision<br />
              <span style={{ color: 'var(--color-accent)' }}>without limits.</span>
            </h2>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.875rem, 1.2vw + 0.3rem, 1rem)',
              fontWeight: 400,
              lineHeight: 1.75,
              color: 'var(--color-ink-2)',
              maxWidth: '52ch',
              marginBottom: '2.5rem',
            }}>
              At Prestige Detailing, we operate a clinical paint protection studio inside Dubai Investment Park 2. Every vehicle receives advanced clay-bar decontamination, paint thickness mapping, multi-stage rotary compounding, and hand-folded self-healing PPF — all personally supervised by Mr. Ayman from intake to delivery.
            </p>

            {/* Pull quote */}
            <blockquote style={{
              borderLeft: '2px solid var(--color-accent)',
              paddingLeft: '1.25rem',
              margin: 0,
            }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(0.9rem, 1.2vw + 0.3rem, 1.05rem)',
                fontWeight: 600,
                fontStyle: 'italic',
                lineHeight: 1.55,
                color: 'var(--color-ink)',
                margin: '0 0 0.5rem',
              }}>
                "I physically inspect every compound pass, film fold, and edge wrap. There is no delegation on quality."
              </p>
              <cite style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                fontStyle: 'normal',
              }}>
                — Mr. Ayman, Owner &amp; Head Detailer
              </cite>
            </blockquote>
          </motion.div>

          {/* Right — video fully visible, no overflow crop */}
          <div
            ref={containerRef}
            className="relative w-full mt-8 lg:mt-0"
            style={{ display: 'flex', alignItems: 'stretch', minHeight: 'clamp(300px, 36vw, 480px)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={toggleVideo}
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
              style={{ background: 'oklch(5% 0.005 88)', flex: 1 }}
            >
              {isInView ? (
                <video
                  ref={videoRef}
                  src="https://cdn.scentbazaar.co/Hero%20Video%20FInal%201.mp4"
                  autoPlay loop muted playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div className="w-full h-full bg-stone-900 animate-pulse" />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div className="p-2.5 rounded-full bg-black/80 border border-white text-white">
                  {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
