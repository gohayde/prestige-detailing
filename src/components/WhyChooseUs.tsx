/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Star, ShieldAlert, Award, Send, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: (
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FFCA2B]/10 border border-[#FFCA2B]/30 text-[#FFCA2B]">
          <Star className="w-6 h-6 fill-current" />
        </div>
      ),
      title: "4.9 Google Rating",
      metric: "★ 4.9 / 5.0",
      sub: "100% VERIFIED",
      description: "Over 100 verified 5-star reviews from Dubai's private supercar collectors, luxury car enthusiasts, and daily drivers who value absolute precision over high-volume speed."
    },
    {
      icon: (
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FFCA2B]/10 border border-[#FFCA2B]/30 text-[#FFCA2B]">
          <ShieldAlert className="w-6 h-6" />
        </div>
      ),
      title: "Honest Expert Advice",
      metric: "100%",
      sub: "HONESTY POLICY",
      description: "We are auto enthusiasts first, salespeople second. If your bumper has pre-existing issues or complex custom angles, we won't sugarcoat it. You receive transparent technical feedback upfront."
    },
    {
      icon: (
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FFCA2B]/10 border border-[#FFCA2B]/30 text-[#FFCA2B]">
          <Award className="w-6 h-6" />
        </div>
      ),
      title: "We Treat It Like Our Own",
      metric: "1-on-1 Care",
      sub: "OWNER SUPERVISED",
      description: "Under the passionate, eagle-eyed direction of Mr. Ayman, our detailing bay operates with surgical standards. Every chemical compound, buffer path, and edge wrap is physically inspected."
    },
    {
      icon: (
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#FFCA2B]/10 border border-[#FFCA2B]/30 text-[#FFCA2B]">
          <Send className="w-6 h-6" />
        </div>
      ),
      title: "WhatsApp Progress Updates",
      metric: "Real-time",
      sub: "FULL TRANSPARENCY",
      description: "Never wonder about the state of your car. Rest or work in our luxury lounge, or receive high-resolution photo and video updates directly on your phone as we complete each stage."
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-28 bg-[#090909] overflow-hidden border-t border-stone-900">
      {/* Visual background details */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FFCA2B]/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-white/[0.02] rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title Group */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-[0.25em] text-[#FFCA2B] uppercase font-bold mb-3 block">
            THE PRESTIGE BENCHMARK
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            WHY DUBAI COLLECTORS <br />
            <span className="text-stone-400">CHOOSE PRESTIGE DETAILING</span>
          </h2>
          <div className="h-1 w-20 bg-[#FFCA2B] mt-6 rounded-full" />
        </div>

        {/* Dynamic Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-3xl bg-black border border-stone-850 p-8 hover:border-[#FFCA2B]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle continuous golden glow lines inside */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFCA2B]/10 to-transparent group-hover:via-[#FFCA2B]/40 transition-all duration-500" />
              
              <div>
                {/* Upper banner of the card */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  {card.icon}
                  <div className="text-right">
                    <span className="text-xl sm:text-2xl font-mono font-black text-[#FFCA2B] block tracking-tight">
                      {card.metric}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-[#FFCA2B]/60 font-black block mt-0.5">
                      {card.sub}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide uppercase mb-3">
                  {card.title}
                </h3>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {card.description}
                </p>
              </div>

              {/* Bottom tag indicator */}
              <div className="flex items-center gap-2 text-stone-600 group-hover:text-[#FFCA2B]/70 transition-colors text-[10px] font-mono tracking-wider font-bold uppercase mt-auto">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Studio Pillar</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small horizontal trust bar */}
        <div className="mt-20 py-8 px-6 sm:px-12 rounded-2xl bg-stone-900/30 border border-stone-850 flex flex-wrap justify-around items-center gap-6 text-center">
          <div>
            <span className="text-2xl font-mono font-black text-white">10k+</span>
            <span className="text-[10px] font-mono tracking-widest text-stone-500 block uppercase mt-0.5">Detailing Hours Completed</span>
          </div>
          <div className="w-px h-8 bg-stone-800 hidden md:block" />
          <div>
            <span className="text-2xl font-mono font-black text-white">100%</span>
            <span className="text-[10px] font-mono tracking-widest text-stone-500 block uppercase mt-0.5">Prestige Finish Guaranteed</span>
          </div>
          <div className="w-px h-8 bg-stone-800 hidden md:block" />
          <div>
            <span className="text-2xl font-mono font-black text-white">DIP 2</span>
            <span className="text-[10px] font-mono tracking-widest text-stone-500 block uppercase mt-0.5">Dubai Investment Park Studio</span>
          </div>
        </div>

      </div>
    </section>
  );
}
