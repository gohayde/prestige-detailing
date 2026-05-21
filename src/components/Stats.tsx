/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, ShieldCheck } from 'lucide-react';

export default function Stats() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const [playing1, setPlaying1] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [imageSrc, setImageSrc] = useState('/images/maybach.png');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before the container scrolls into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleVideo1 = () => {
    if (videoRef1.current) {
      if (playing1) {
        videoRef1.current.pause();
      } else {
        videoRef1.current.play().catch(() => {});
      }
      setPlaying1(!playing1);
    }
  };

  return (
    <section id="about" style={{ background: 'var(--color-paper)' }} className="relative py-20 overflow-hidden">
      {/* Light glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#FFCA2B]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Split Layout: Minimal Story Text & Layered Media Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Compact Premium Minimalist Text */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-stone-350 pr-4">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--color-muted)', fontWeight: 500 }}>
              The artisans of Prestige
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-display leading-[1.05]">
              PRECISION <br />
              <span className="text-[#FFCA2B]">WITHOUT LIMITS</span>
            </h2>
            <div className="flex flex-col gap-4 text-base sm:text-[17px] leading-relaxed font-sans font-medium" style={{ color: 'var(--color-ink-2)', maxWidth: '68ch' }}>
              <p>
                At Prestige Detailing, we break industry standards with a clinical paint protection laboratory powered by an elite team of world-class female detailing specialists and master artisans. Our specialists bring unparalleled focus and surgical micro-precision to every vehicle.
              </p>
              <p>
                Beginning their careers on day one with advanced clay-bar decontamination and high-intensity paint thickness testing, they master the delicate physical science of paint surface structures. Through technical development, they progress to multi-stage rotary compounding and the intricate art of hand-folding self-healing thermo-elastomer Paint Protection Film (PPF).
              </p>
              <p>
                Their hyper-focused vision and patient dedication ensure perfectly tucked clean edge alignments, seamless seams, and glass-like mirror finishes on Dubai's rarest hypercars.
              </p>
            </div>
          </div>

          {/* Right Column: Large Single Container with Bigger Photo and Overlapping Video */}
          <div
            ref={containerRef}
            className="lg:col-span-7 relative h-[450px] sm:h-[580px] md:h-[640px] w-full mt-8 lg:mt-0"
          >
            
            {/* 1. Large Portrait/Landscape Main Photo (Slightly bigger, filling container with left-shift) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[90%] sm:h-full rounded-2xl overflow-hidden border border-stone-850 shadow-2xl bg-stone-950"
            >
              <img 
                src={imageSrc} 
                alt="Prestige Maybach Detailing Studio" 
                className="w-[108%] h-full object-cover max-w-none -translate-x-[6%]"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={() => {
                  setImageSrc("https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1800&q=80");
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
            </motion.div>
 
            {/* 2. Pristine Overlay Video Container placed gracefully ON top of the photo - TALL PORTRAIT LAYOUT */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onClick={toggleVideo1}
              className="absolute bottom-[-15px] right-[-10px] sm:bottom-[-20px] sm:right-[-15px] w-[44%] sm:w-[38%] h-[75%] sm:h-[82%] rounded-2xl overflow-hidden border-4 border-white bg-stone-950 shadow-[0_25px_50px_rgba(0,0,0,0.9)] cursor-pointer group hover:scale-[1.03] transition-all duration-305 z-20"
            >
              {isInView ? (
                <video
                  ref={videoRef1}
                  src="https://cdn.scentbazaar.co/Hero%20Video%20FInal%201.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover animate-fade-in duration-700"
                />
              ) : (
                <div className="w-full h-full bg-stone-900 animate-pulse" />
              )}
              {/* Playback Overlay Hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div className="p-2.5 rounded-full bg-black/80 border border-white text-white">
                  {playing1 ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Brand visual detail */}
        <div className="mt-12 text-center select-none pointer-events-none opacity-20">
          <span className="text-6xl sm:text-8xl md:text-[8rem] font-sans font-black text-stone-900 uppercase tracking-widest leading-none block">
            PRESTIGE
          </span>
        </div>

      </div>
    </section>
  );
}
