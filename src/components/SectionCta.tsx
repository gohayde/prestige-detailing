/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function SectionCta() {
  const [isHovered, setIsHovered] = useState(false);

  // Elegant WhatsApp link for scheduling
  const whatsAppMessage = "Hi Ayman! I'd love to speak with you regarding a premium staycation slot for my vehicle. Let's discuss automotive detailing and ceramic correction.";
  const whatsAppLink = `https://wa.me/971555096234?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <section 
      id="cta-booking" 
      className="relative py-28 md:py-36 bg-black overflow-hidden flex flex-col justify-center items-center"
    >
      
      {/* 1. Seamless Atmospheric Background with rr.png */}
      <div className="absolute inset-0 w-full h-full z-0 select-none overflow-hidden">
        
        {/* The premium Range Rover SUV with hexagon lights and checkerboard floor specified by the user */}
        <img 
          src="/images/rr.png" 
          alt="Prestige SUV Range Rover Detailing Cabin" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center brightness-[0.72] contrast-[1.05] transition-transform duration-1000 scale-102"
        />

        {/* Seamless Gradients: Solid black fade at the top from the Location section, and dark fade at the bottom to transition smoothly to the footer */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-[1] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/80 to-transparent z-[1] pointer-events-none" />
        
        {/* Subtle warming brand color ambient bloom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFCA2B]/5 rounded-full filter blur-[120px] pointer-events-none z-[1]" />
      </div>

      {/* 2. Way More Minimal, High-Contrast Text Content Block */}
      <div className="relative max-w-3xl mx-auto px-6 w-full z-10 text-center flex flex-col items-center">
        
        {/* Minimal Subtitle */}
        <motion.span 
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs font-mono font-bold tracking-[0.3em] text-[#FFCA2B] uppercase block mb-3.5"
        >
          PRIVATE BOOKINGS ONLY
        </motion.span>

        {/* Minimal High-Contrast Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)]"
        >
          THE UNCOMPROMISING <br />
          <span className="text-[#FFCA2B]">STANDARD OF DETAIL</span>
        </motion.h2>

        {/* Minimal Supporting Description */}
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-stone-300 text-xs sm:text-sm max-w-md mt-4 leading-relaxed font-sans font-medium [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]"
        >
          Your vehicle deserves absolute structural aesthetics, shielded against severe Dubai-heat oxidation under the direction of Mr. Ayman.
        </motion.p>

        {/* Minimal booking CTA Button (using our pure gold brand color) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8"
        >
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FFCA2B] text-black hover:bg-yellow-400 font-black text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(255,202,43,0.25)] transition-all duration-300 active:scale-95 group overflow-hidden"
          >
            <span>Book a visit today</span>
          </a>
        </motion.div>

      </div>

    </section>
  );
}
