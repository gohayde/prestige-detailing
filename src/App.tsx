/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Stats from './components/Stats';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Reviews from './components/Reviews';
import WhyChooseUs from './components/WhyChooseUs';
import Location from './components/Location';
import Faq from './components/Faq';
import Cta from './components/Cta';
import SectionCta from './components/SectionCta';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll handler to target section
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    // Adjust offset slightly for floating header
    const yOffset = -90; 
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  // Listen to scrolling to update active header indicator state
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'gallery', 'reviews', 'why-choose-us', 'configurator', 'faq', 'location'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // threshold offset
      
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        
        const top = el.offsetTop;
        const height = el.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white select-none selection:bg-[#FFCA2B] selection:text-black scroll-smooth">
      {/* 1. Glassmorphism Top Header Navigation */}
      <Header onNavClick={handleScrollToSection} activeSection={activeSection} />

      {/* 2. Interactive Backdrop 3D Hero */}
      <Hero onLearnMoreClick={handleScrollToSection} />

      {/* Transitional Stats Highlights with solid black background and double soft shadows */}
      <StatsBar />

      {/* 3. Stats & Bento Why-Detail features */}
      <Stats />

      {/* 4. Custom services catalog */}
      <Services />

      {/* 5. Swipe comparisons */}
      <BeforeAfter />

      {/* 6. Glowing custom Reviews carousel */}
      <Reviews />

      {/* Trust factors and Why Select Prestige Detailing */}
      <WhyChooseUs />

      {/* 7. Interactive Spec configurator */}
      <Cta />

      {/* 8. Accordions FAQs list */}
      <Faq />

      {/* 9. Direct Dial maps and scheduling hours */}
      <Location />

      {/* Modern atmospheric dark CTA Section before Footer */}
      <SectionCta />

      {/* 10. Styled Bottom Signature Footer */}
      <Footer onNavClick={handleScrollToSection} />
    </div>
  );
}
