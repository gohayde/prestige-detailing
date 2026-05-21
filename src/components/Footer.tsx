/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Mail } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

// Crisp genuine SVG path for the actual WhatsApp brand logo
const WhatsAppIcon = ({ className = "w-4.5 h-4.5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.35-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer({ onNavClick }: FooterProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    onNavClick(id);
  };

  return (
    <footer 
      id="footer" 
      className="relative bg-black pt-20 pb-12 font-sans text-stone-400"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main upper footer 1-row, 4-column balanced grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-stone-900/60">
          
          {/* Column 1: Logo & Brand Information */}
          <div className="flex flex-col gap-6">
            <button
              onClick={(e) => handleLinkClick(e, 'hero')}
              className="flex items-center cursor-pointer focus:outline-none w-fit self-start"
            >
              <img src="/images/Logo.png" alt="Prestige Detailing" style={{ height: '2.75rem', width: 'auto', objectFit: 'contain', filter: 'brightness(1.1)' }} />
            </button>
 
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm font-sans font-medium">
              Leading Dubai's automotive aesthetic craft from our bespoke vehicle care studio in DIP 2.
            </p>
 
            {/* Social Icons: Outlined rounded-square tiles with yellow hover action */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://facebook.com/prestigedetailing.uae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-black border border-stone-800 text-stone-400 hover:text-black hover:bg-[#FFCA2B] hover:border-[#FFCA2B] hover:scale-105 transition-all duration-300 rounded-[14px]"
                title="Facebook"
              >
                <svg className="w-[1.125rem] h-[1.125rem] fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/prestigedetailing.uae"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-black border border-stone-800 text-stone-400 hover:text-black hover:bg-[#FFCA2B] hover:border-[#FFCA2B] hover:scale-105 transition-all duration-300 rounded-[14px]"
                title="Instagram"
              >
                <svg className="w-[1.125rem] h-[1.125rem] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://wa.me/971555096234"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-black border border-stone-800 text-stone-400 hover:text-black hover:bg-[#FFCA2B] hover:border-[#FFCA2B] hover:scale-105 transition-all duration-300 rounded-[14px]"
                title="WhatsApp"
              >
                <WhatsAppIcon className="w-4.5 h-4.5 text-current" />
              </a>
            </div>
          </div>
 
          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black tracking-[0.15em] text-white uppercase font-sans">QUICK LINKS</h4>
            <div className="flex flex-col gap-3 text-xs">
              <button onClick={(e) => handleLinkClick(e, 'hero')} className="hover:text-[#FFCA2B] transition-colors text-left font-semibold cursor-pointer">Home</button>
              <button onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-[#FFCA2B] transition-colors text-left font-semibold cursor-pointer">About us</button>
              <button onClick={(e) => handleLinkClick(e, 'location')} className="hover:text-[#FFCA2B] transition-colors text-left font-semibold cursor-pointer">Contact</button>
              <button onClick={(e) => handleLinkClick(e, 'reviews')} className="hover:text-[#FFCA2B] transition-colors text-left font-semibold cursor-pointer">Reviews</button>
              <button onClick={(e) => handleLinkClick(e, 'configurator')} className="hover:text-[#FFCA2B] transition-colors text-left font-semibold cursor-pointer">Price Calculator</button>
            </div>
          </div>
 
          {/* Column 3: Services Catalog */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black tracking-[0.15em] text-white uppercase font-sans">SERVICES</h4>
            <div className="flex flex-col gap-2.5 text-xs text-stone-400 font-semibold">
              <button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-[#FFCA2B] transition-colors text-left cursor-pointer">Paint Protection Film</button>
              <button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-[#FFCA2B] transition-colors text-left cursor-pointer">Ceramic Coating</button>
              <button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-[#FFCA2B] transition-colors text-left cursor-pointer">Car Detailing Dubai</button>
              <button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-[#FFCA2B] transition-colors text-left cursor-pointer">Interior Detailing</button>
              <button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-[#FFCA2B] transition-colors text-left cursor-pointer">Exterior Detailing</button>
              <button onClick={(e) => handleLinkClick(e, 'services')} className="hover:text-[#FFCA2B] transition-colors text-left cursor-pointer">Car Polishing Dubai</button>
            </div>
          </div>
 
          {/* Column 4: Private Channels / Assistance */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black tracking-[0.15em] text-white uppercase font-sans">CAN WE HELP?</h4>
            <div className="flex flex-col gap-3.5 text-xs text-stone-400 font-semibold font-sans">
              <a
                href="https://wa.me/971555096234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#FFCA2B] transition-colors cursor-pointer group"
                title="Chat with WhatsApp Support"
              >
                <WhatsAppIcon className="w-4 h-4 text-stone-400 shrink-0" />
                <span>WhatsApp</span>
              </a>

              <a
                href="mailto:info@prestigedetailing.ae"
                className="flex items-center gap-2.5 hover:text-[#FFCA2B] transition-colors cursor-pointer group"
                title="Email Prestige Detailing"
              >
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <span>Email Us</span>
              </a>

              <a
                href="https://maps.google.com/?q=Prestige+Detailing+Dubai+Investment+Park+Second"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#FFCA2B] transition-colors cursor-pointer group"
                title="Get Maps Location Directions"
              >
                <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
 
        </div>

        {/* Lower footer copyright info: just the 2026 copyright text in the middle */}
        <div className="pt-8 flex flex-col items-center gap-4 text-center border-t border-stone-900/40">
          <p className="text-[11px] text-stone-550 font-mono tracking-widest uppercase">
            &copy; 2026 Prestige Detailing UAE. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
