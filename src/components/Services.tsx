/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { SERVICES_DATA } from '../data';
import { Service } from '../types';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Bespoke Custom SVG Icon 1: Nano-Ceramic Protection (Molecular Hex-Shield)
const CeramicShieldIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Shield Outer Outline */}
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#FFCA2B" strokeWidth="2" />
    {/* Microscopic Molecular Hexagon Grid inside Shield */}
    <path d="M12 6L15.5 8V12L12 14L8.5 12V8L12 6Z" stroke="currentColor" />
    <path d="M12 14V19" stroke="currentColor" />
    <path d="M8.5 8L5 6" stroke="currentColor" />
    <path d="M15.5 8L19 6" stroke="currentColor" />
    <path d="M8.5 12L5 14" stroke="currentColor" />
    <path d="M15.5 12L19 14" stroke="currentColor" />
    {/* Orbit Atom Dots */}
    <circle cx="12" cy="10" r="1.5" fill="#FFCA2B" />
    <circle cx="5" cy="6" r="1" fill="#FFCA2B" />
    <circle cx="19" cy="6" r="1" fill="#FFCA2B" />
    <circle cx="5" cy="14" r="1" fill="currentColor" />
    <circle cx="19" cy="14" r="1" fill="currentColor" />
  </svg>
);

// Bespoke Custom SVG Icon 2: Self-Healing PPF (Multi-Layer Polyurethane Shell)
const PPFPlatesIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Stacked Surface Plate 3: Substrate Paint */}
    <path d="M4 17L12 20L20 17" stroke="rgba(255,202,43,0.3)" />
    {/* Stacked Surface Plate 2: Adhesive Base */}
    <path d="M4 13L12 16L20 13" stroke="currentColor" strokeWidth="1" />
    {/* Stacked Surface Plate 1: Polyurethane Self-Healing Top Coat */}
    <polygon points="12,5 20,8 12,11 4,8" stroke="#FFCA2B" strokeWidth="2" fill="rgba(255,202,43,0.15)" />
    {/* Regenerative/Self-healing heat-loop curvy arrows on top of the film */}
    <path d="M9 7.5L10.5 8.5L12 7.5L13.5 8.5" stroke="#FFCA2B" />
    {/* Twin Micro Sparkles */}
    <path d="M6 4.5L7 3.5L8 4.5L7 5.5Z" fill="currentColor" stroke="none" />
    <path d="M16 3L16.5 2L17 3L16.5 4Z" fill="#FFCA2B" stroke="none" />
  </svg>
);

// Bespoke Custom SVG Icon 3: Multi-Stage Paint Correction (Dual-Action Orbital Rotary Buffer and Flat-reflection line)
const PaintCorrectionIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Concentric Dual-Action Orbital rings */}
    <circle cx="12" cy="10" r="8" stroke="rgba(255,202,43,0.2)" strokeDasharray="3 3" />
    <circle cx="12" cy="10" r="6" stroke="#FFCA2B" strokeWidth="1.5" />
    <circle cx="10" cy="11" r="3" stroke="currentColor" strokeDasharray="2 1" />
    {/* Rotary Buffer Core Head and Handle outline */}
    <rect x="9" y="8" width="6" height="4" rx="1" fill="currentColor" style={{ opacity: 0.15 }} />
    <path d="M7 10H17" stroke="currentColor" strokeWidth="2" />
    {/* Flat Mirror Polish representation line at the bottom */}
    <path d="M3 18C4.5 18 5.5 19 7 19H21" stroke="currentColor" strokeWidth="1.5" />
    {/* Laser measurement pointer aiming at the flat finish */}
    <line x1="12" y1="10" x2="16" y2="18" stroke="#FFCA2B" strokeDasharray="2 2" />
    <circle cx="16" cy="18" r="1.5" fill="#FFCA2B" />
  </svg>
);

// Bespoke Custom SVG Icon 4: Luxury Cabin Deep Clean & Magic (Supercar Bucket Seat & Breath lines)
const LuxuryCabinIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Stylized high-performance bucket racing seat outline */}
    <path d="M12 3H10C8.9 3 8 3.9 8 5V7C8 8.1 8.9 9 10 9H12C13.1 9 14 8.1 14 7V5C14 3.9 13.1 3 12 3Z" stroke="currentColor" />
    <path d="M7 10V14C7 15.5 8 16.5 9.5 16.5H12.5C14 16.5 15 15.5 15 14V10" stroke="currentColor" />
    <path d="M6 14C6 17.5 8.5 21 12 21C15.5 21 18 17.5 18 14" stroke="currentColor" strokeWidth="2" />
    {/* Stitching ventilation slits */}
    <line x1="10" y1="12" x2="10" y2="15" stroke="#FFCA2B" strokeWidth="1" />
    <line x1="12" y1="12" x2="12" y2="15" stroke="currentColor" strokeWidth="1" />
    <line x1="14" y1="12" x2="14" y2="15" stroke="#FFCA2B" strokeWidth="1" />
    {/* Magic Fresh sweeping curves */}
    <path d="M4 8C5.5 7.5 7 8 8.5 8.5" stroke="#FFCA2B" strokeWidth="1" />
    <path d="M16 6C17.5 5.5 19 6 20.5 6.5" stroke="#FFCA2B" strokeWidth="1" />
  </svg>
);

// Bespoke Custom SVG Icon 5: Exceptional Flood & Damage Restoration (Active Moisture-Extract & Rescue Waves)
const MoistureRescueIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Droplet Outline being vacuum-extracted */}
    <path d="M12 21C15.5 21 17.5 18 17.5 14C17.5 10 12 4 12 4C12 4 6.5 10 6.5 14C6.5 18 8.5 21 12 21Z" stroke="currentColor" strokeWidth="1" />
    {/* Upward rising suction chevron lights */}
    <path d="M12 18V8" stroke="#FFCA2B" strokeWidth="2" strokeDasharray="3 2" />
    <path d="M9 11L12 8L15 11" stroke="#FFCA2B" strokeWidth="2" />
    {/* Decontamination Pulse / Active Heartbeat Signal overlapping recovery */}
    <path d="M3 14H6.5L8 11L10 17L11.5 12L12.5 14H21" stroke="currentColor" strokeWidth="1.5" />
    {/* Micro liquid collection nodes */}
    <circle cx="12" cy="14" r="2" fill="#FFCA2B" stroke="none" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-4.5 h-4.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.35-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  // Map icon strings directly to custom beautifully designed SVG components
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Shield': return <CeramicShieldIcon className={className} />;
      case 'Sparkles': return <PPFPlatesIcon className={className} />;
      case 'Cpu': return <PaintCorrectionIcon className={className} />;
      case 'Layers': return <LuxuryCabinIcon className={className} />;
      case 'Activity': return <MoistureRescueIcon className={className} />;
      default: return <CeramicShieldIcon className={className} />;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      {/* Decorative ceiling gold laser lights like high-end detailing garages */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFCA2B] to-transparent opacity-40" />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFCA2B]/10 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Extreme light sweep in high-end studio */}
      <div className="absolute top-1/4 right-0 w-80 h-96 bg-white/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header content with luxury tone */}
        <div className="text-center md:text-left md:flex justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#FFCA2B] uppercase block mb-3">
              PRECISION MECHANICAL PROTECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              STUDIO SERVICES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-400 via-white to-stone-500">
                & SPECIFICATION SHEETS
              </span>
            </h2>
          </div>
          <p className="text-stone-400 text-xs sm:text-sm max-w-md mt-4 md:mt-0 font-sans leading-relaxed text-left">
            We operate utilizing laboratory-grade products from the world's leading chemical manufacturers. Select a service to inspect its rigorous specifications and estimated costs.
          </p>
        </div>

        {/* Dynamic Split Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Beautifully interactive horizontal/vertical listing selector */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase font-bold mb-1 pl-2">
              SELECT SERVICE PACK
            </span>
            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`group w-full rounded-2xl p-5 border text-left flex items-center justify-between transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-br from-stone-900 to-black border-[#FFCA2B] shadow-[0_10px_30px_rgba(255,202,43,0.08)] scale-[1.02]'
                      : 'bg-stone-900/40 border-stone-800/80 hover:bg-stone-900/90 hover:border-stone-700/80 hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-center gap-4 pl-2">
                    <div>
                      <h3 className={`text-sm font-bold tracking-wide uppercase transition-colors ${
                        isSelected ? 'text-[#FFCA2B]' : 'text-stone-300 group-hover:text-white'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-stone-500 text-[11px] font-mono mt-0.5 group-hover:text-stone-400 transition-colors">
                        Estimated from {service.priceEstimate}
                      </p>
                    </div>
                  </div>
                  <div className={`p-1.5 rounded-full border transition-all ${
                    isSelected
                      ? 'bg-[#FFCA2B]/10 border-[#FFCA2B] text-[#FFCA2B]'
                      : 'bg-transparent border-transparent text-stone-600 group-hover:text-white'
                  }`}>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Immersive dynamic service specifications board */}
          <div className="lg:col-span-7 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-3xl bg-stone-900 border border-stone-800 p-8 md:p-10 flex flex-col justify-between overflow-hidden relative shadow-2xl"
              >
                {/* Visual Glass background thumbnail reflection */}
                <div className="absolute inset-0 z-0 opacity-15 overflow-hidden">
                  <img
                    src={selectedService.bgImage}
                    alt={selectedService.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-[0.1] scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900" />
                </div>

                {/* Sub-Header info */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start gap-4 mb-6 pb-6 border-b border-stone-800/60">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#FFCA2B] uppercase font-bold">
                        SERVICE SPEC SHEET //
                      </span>
                      <h3 className="text-xl md:text-3xl font-black text-white mt-1 uppercase tracking-tight">
                        {selectedService.title}
                      </h3>
                    </div>
                    {selectedService.stats && (
                      <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFCA2B] text-[10px] font-bold tracking-widest font-mono uppercase">
                        {selectedService.stats}
                      </span>
                    )}
                  </div>

                  <p className="text-stone-300 text-xs md:text-sm leading-relaxed mb-8">
                    {selectedService.description}
                  </p>

                  {/* Scientific benefits checkmarks */}
                  <div className="flex flex-col gap-3.5 mb-10">
                    <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase font-bold">
                      INCLUDED BENCHMARKS:
                    </span>
                    {selectedService.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#FFCA2B] shrink-0 mt-0.5" />
                        <span className="text-stone-300 text-xs leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Estimate Box */}
                <div className="relative z-10 pt-6 border-t border-stone-800/60 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-stone-500 uppercase font-bold">
                      ESTIMATED BASE VALUE:
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl md:text-3xl font-black text-[#FFCA2B] font-mono">
                        {selectedService.priceEstimate}
                      </span>
                      <span className="text-[10px] text-stone-500 font-mono">/ basic package</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/971555096234?text=${encodeURIComponent(`Hi Ayman! I would love to book the "${selectedService.title}" service package for my car (Estimated at ${selectedService.priceEstimate}). Can we chat about scheduling?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FFCA2B] text-black hover:bg-yellow-450 hover:scale-[1.02] font-black text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-[0_10px_30px_rgba(255,202,43,0.15)] whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-4.5 h-4.5 shrink-0" />
                    <span>Book via WhatsApp</span>
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
