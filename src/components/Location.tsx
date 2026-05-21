/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  const schedules = [
    { day: 'Thursday', hours: '9:00 AM – 8:00 PM', active: true },
    { day: 'Friday', hours: '9:00 AM – 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 8:00 PM' },
    { day: 'Sunday', hours: '9:00 AM – 8:00 PM' },
    { day: 'Monday', hours: '9:00 AM – 8:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM – 8:00 PM' },
    { day: 'Wednesday', hours: 'Closed', closed: true },
  ];

  return (
    <section id="location" className="relative py-28 bg-[#070707] overflow-hidden border-t border-stone-900">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-stone-900/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Group */}
        <div className="text-center md:text-left mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#FFCA2B] uppercase block mb-3">
            VISIT OUR AUTOMOTIVE STUDIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            LOCATION & HOURS
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm max-w-xl mt-3 font-sans leading-relaxed text-left">
            Prestige Detailing is based inside the prestigious Dubai Investment Park (DIP) Second. Drop by for honest advice, coffee, or to inspect active supercar correction projects.
          </p>
        </div>

        {/* Studio Info & Interactive Iframe Map split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Detailed address, Direct Dial CTA, WhatsApp chat buttons, hours schedule */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="rounded-3xl bg-stone-900/40 border border-stone-850 p-8 flex flex-col gap-6">
              
              <div className="flex gap-4">
                <div className="p-3.5 rounded-2xl bg-black border border-stone-800 text-[#FFCA2B] shrink-0 h-fit">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold font-mono tracking-widest text-[#FFCA2B] uppercase">STUDIO ADDRESS</h4>
                  <p className="text-white text-sm font-semibold mt-1 leading-relaxed">
                    Prestige Detailing UAE <br />
                    61 Street - 2 2/4 - Dubai Investment Park Second - Dubai
                  </p>
                  <p className="text-stone-550 text-xs mt-1 font-mono">DIP 2 Close to Roundabout</p>

                  <div className="mt-5 pt-4 border-t border-stone-850/60">
                    <h4 className="text-[10px] font-bold font-mono tracking-widest text-stone-500 uppercase">TELEPHONE</h4>
                    <a 
                      href="tel:+971555096234" 
                      className="text-white text-base font-black hover:text-[#FFCA2B] transition-colors mt-0.5 inline-block"
                    >
                      +971 55 509 6234
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Timings card schedule list */}
            <div className="rounded-3xl bg-stone-900 border border-stone-800 p-8 flex flex-col gap-4 font-sans">
              <h4 className="text-[#FFCA2B] font-mono text-xs font-bold uppercase tracking-wider mb-2">WEEKLY STUDIO HOURS</h4>
              <div className="flex flex-col gap-2.5">
                {schedules.map((sched, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-between items-center py-1 border-b border-stone-850/40 text-xs ${
                      sched.active ? 'text-white font-bold' : sched.closed ? 'text-stone-600' : 'text-stone-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{sched.day}</span>
                      {sched.active && (
                        <span className="text-[9px] bg-emerald-600/10 border border-emerald-500/30 text-emerald-500 px-1.5 py-0.5 rounded uppercase font-bold font-mono animate-pulse">
                          Today
                        </span>
                      )}
                    </div>
                    <span className={sched.closed ? 'text-red-500/70 font-mono' : 'font-mono'}>{sched.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right panel: High quality interactive Google Maps embed with a glass overlay border */}
          <div className="lg:col-span-7 flex rounded-3xl overflow-hidden border border-stone-800 shadow-2xl min-h-[350px] md:min-h-[450px]">
            <iframe
              title="Prestige Detailing UAE Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.8339610753374!2d55.19030897603032!3d24.97176317785687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f737892ef89f7%3A0x3f3168db587f711a!2sPrestige%20Detailing%20UAE!5e0!3m2!1sen!2sae!4v1779383904953!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%) brightness(95%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full block"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
