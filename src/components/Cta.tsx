/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CAR_TYPES, SERVICES_DATA } from '../data';
import { Sparkles, Car, Check, Phone, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Cta() {
  const [selectedCarId, setSelectedCarId] = useState(CAR_TYPES[0].id);
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([
    SERVICES_DATA[0].id, // default to Nano coating
  ]);

  const activeCar = CAR_TYPES.find((c) => c.id === selectedCarId) || CAR_TYPES[0];

  const handleToggleService = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((sId) => sId !== id) : [...prev, id]
    );
  };

  // Convert estimate: e.g. "AED 1,800" => 1800
  const parsePrice = (priceStr: string) => {
    const numbers = priceStr.replace(/[^0-9]/g, '');
    return parseInt(numbers, 10) || 0;
  };

  // Calculating total real-time value
  const baseSum = selectedServiceIds.reduce((sum, serviceId) => {
    const service = SERVICES_DATA.find((s) => s.id === serviceId);
    return sum + (service ? parsePrice(service.priceEstimate) : 0);
  }, 0);

  const finalTotal = Math.round(baseSum * activeCar.multiplier);

  // Generate elegant WhatsApp message
  const generateWhatsAppLink = () => {
    const servicesText = selectedServiceIds
      .map((id) => SERVICES_DATA.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join(', ');

    const text = `Hi Ayman! I just configured my car detailing package custom online:\n\n🚙 *Car Class:* ${activeCar.label} (${activeCar.example})\n🛡️ *Selected Services:* ${servicesText}\n💰 *Prestige Estimated Balance:* AED ${finalTotal.toLocaleString()}\n\nI want to schedule my car staycation. What is your earliest appointment ?`;
    
    return `https://wa.me/971555096234?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="configurator"
      style={{
        position: 'relative',
        padding: 'var(--space-4xl) 0',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-rule)',
        background: 'var(--color-paper-2)',
      }}
    >
      {/* Subtle top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
        background: 'linear-gradient(to right, transparent, var(--color-accent), transparent)',
        opacity: 0.3,
      }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 var(--space-lg)', position: 'relative', zIndex: 1 }}>
        
        {/* Title Content */}
        <div style={{ marginBottom: 'var(--space-3xl)' }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: 'var(--space-sm)',
          }}>
            Interactive build spec
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-display-s)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.06,
            textTransform: 'uppercase',
            color: 'var(--color-ink)',
            margin: '0 0 var(--space-md)',
            overflowWrap: 'anywhere',
            minWidth: 0,
          }}>
            Configure your package estimate
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            fontWeight: 350,
            lineHeight: 1.65,
            color: 'var(--color-muted)',
            maxWidth: '60ch',
          }}>
            Customize your dream detailing suite. Select your vehicle class and add protection layers.
            Our logic adjusts prices in real-time based on panel surface area metrics.
          </p>
        </div>

        {/* Dynamic Studio Builder Grid - Step 1 & 2 in column 1, calculator in column 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-8 items-stretch">
          
          {/* Options Panel (Left Side - Stacked Vertically) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', height: '100%', justifyContent: 'space-between' }}>
            
            {/* Step 1: Choose Car Type */}
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-rule)',
                background: 'var(--color-paper)',
                padding: 'var(--space-xl)',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                display: 'block',
                marginBottom: 'var(--space-md)',
              }}>
                STEP 01 // SELECT VEHICLE METRICS
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CAR_TYPES.map((car) => {
                  const isSelected = car.id === selectedCarId;
                  return (
                    <button
                      key={car.id}
                      onClick={() => setSelectedCarId(car.id)}
                      style={{
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: `1px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-rule)'}`,
                        background: isSelected ? 'oklch(83% 0.170 88 / 0.07)' : 'transparent',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '130px',
                        transition: 'border-color var(--dur-micro) var(--ease-out), background var(--dur-micro) var(--ease-out)',
                        boxShadow: isSelected ? 'var(--shadow-glow)' : 'none',
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = 'var(--color-neutral)';
                          e.currentTarget.style.background = 'oklch(22% 0.012 45 / 0.6)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.borderColor = 'var(--color-rule)';
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 'var(--space-md)' }}>
                        <div style={{
                          padding: '0.5rem',
                          borderRadius: 'var(--radius-sm)',
                          border: `1px solid ${isSelected ? 'var(--color-accent)' : 'var(--color-rule)'}`,
                          background: isSelected ? 'var(--color-accent)' : 'var(--color-paper)',
                          color: isSelected ? 'var(--color-paper)' : 'var(--color-muted)',
                        }}>
                          <Car style={{ width: '1.25rem', height: '1.25rem' }} />
                        </div>
                        <span style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          fontWeight: 600,
                          color: isSelected ? 'var(--color-accent)' : 'var(--color-muted)',
                          letterSpacing: '0.05em',
                        }}>
                          x{car.multiplier} Ratio
                        </span>
                      </div>
                      
                      <div>
                        <h4 style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'var(--text-sm)',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: isSelected ? 'var(--color-accent)' : 'var(--color-ink)',
                          margin: 0,
                        }}>{car.label}</h4>
                        <p style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 'var(--text-xs)',
                          color: 'var(--color-muted)',
                          margin: '0.25rem 0 0',
                        }}>{car.example}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose services checkpoints */}
            <div
              style={{
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-rule)',
                background: 'var(--color-paper)',
                padding: 'var(--space-xl)',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                display: 'block',
                marginBottom: 'var(--space-md)',
              }}>
                STEP 02 // CHOOSE PROTECTION MODIFIERS (MULTI-SELECT)
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES_DATA.map((service) => {
                  const isChecked = selectedServiceIds.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      onClick={() => handleToggleService(service.id)}
                      style={{
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: `1px solid ${isChecked ? 'var(--color-accent)' : 'var(--color-rule)'}`,
                        background: isChecked ? 'oklch(83% 0.170 88 / 0.05)' : 'transparent',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-md)',
                        transition: 'border-color var(--dur-micro) var(--ease-out), background var(--dur-micro) var(--ease-out)',
                        boxShadow: isChecked ? 'var(--shadow-glow)' : 'none',
                      }}
                      onMouseEnter={(e) => {
                        if (!isChecked) {
                          e.currentTarget.style.borderColor = 'var(--color-neutral)';
                          e.currentTarget.style.background = 'oklch(22% 0.012 45 / 0.6)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isChecked) {
                          e.currentTarget.style.borderColor = 'var(--color-rule)';
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <div style={{
                        width: '1.125rem',
                        height: '1.125rem',
                        borderRadius: 'var(--radius-sm)',
                        border: `1.5px solid ${isChecked ? 'var(--color-accent)' : 'var(--color-rule)'}`,
                        background: isChecked ? 'var(--color-accent)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-paper)',
                        flexShrink: 0,
                        marginTop: '0.15rem',
                      }}>
                        {isChecked && <Check style={{ width: '0.75rem', height: '0.75rem', strokeWidth: '3' }} />}
                      </div>

                      <div style={{ flex: 1 }}>
                        <h4 style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'var(--text-sm)',
                          fontWeight: 700,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          color: isChecked ? 'var(--color-accent)' : 'var(--color-ink)',
                          margin: 0,
                        }}>
                          {service.title}
                        </h4>
                        <p style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 'var(--text-xs)',
                          lineHeight: 1.5,
                          color: 'var(--color-muted)',
                          margin: '0.25rem 0 0.5rem',
                        }}>
                          {service.description}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.65rem',
                            fontWeight: 650,
                            background: 'oklch(22% 0.012 45 / 0.8)',
                            padding: '0.2rem 0.5rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--color-rule)',
                            color: 'var(--color-accent)',
                          }}>
                            Base: {service.priceEstimate}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Dynamic Summary Bill Board (Right Side) — Double-bezel outer shell */}
          <div className="lg:col-span-1 flex">
            <div
              style={{
                width: '100%',
                padding: '0.375rem',
                borderRadius: 'calc(var(--radius-xl) + 0.375rem)',
                border: '1px solid oklch(30% 0.010 45 / 0.6)',
                background: 'oklch(17% 0.012 45 / 0.4)',
              }}
            >
              <div
                style={{
                  height: '100%',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid oklch(26% 0.010 45)',
                  background: 'var(--color-paper)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 'var(--space-xl)',
                  boxShadow: 'inset 0 1px 1px oklch(100% 0 0 / 0.06)',
                }}
              >
                {/* Premium texture backdrop */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 0,
                  opacity: 0.05,
                  overflow: 'hidden',
                  pointerEvents: 'none',
                  background: 'radial-gradient(ellipse 80% 60% at 50% 100%, var(--color-accent), transparent)',
                }} />

                <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    paddingBottom: 'var(--space-md)',
                    borderBottom: '1px solid var(--color-rule)',
                    marginBottom: 'var(--space-lg)',
                  }}>
                    <Zap style={{ width: '1.125rem', height: '1.125rem', color: 'var(--color-accent)' }} />
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--color-ink)',
                    }}>
                      STUDIO ESTIMATOR //
                    </span>
                  </div>

                  {/* Configuration details audit list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                        VEHICLE MULTIPLIER
                      </span>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '0.25rem' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-ink)' }}>
                          {activeCar.label}
                        </span>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-muted)' }}>
                          x{activeCar.multiplier} Factor
                        </span>
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--color-rule)', paddingTop: 'var(--space-lg)' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-muted)', display: 'block', marginBottom: '0.5rem' }}>
                        SELECTED MODIFIERS
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', maxHeight: '180px', overflowY: 'auto' }}>
                        {selectedServiceIds.length === 0 ? (
                          <span style={{ color: 'oklch(60% 0.150 20)', fontSize: 'var(--text-xs)', fontStyle: 'italic' }}>
                            No modifiers selected. Please choose a protection service.
                          </span>
                        ) : (
                          selectedServiceIds.map((id) => {
                            const service = SERVICES_DATA.find((s) => s.id === id);
                            if (!service) return null;
                            return (
                              <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-ink-2)' }}>
                                  {service.title}
                                </span>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500, color: 'var(--color-accent)', fontVariantNumeric: 'tabular-nums' }}>
                                  {service.priceEstimate}
                                </span>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic total block section */}
                <div style={{ position: 'relative', zIndex: 1, marginTop: 'var(--space-xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--color-rule)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', uppercase: true, color: 'var(--color-ink)' }}>
                      TOTAL ESTIMATE:
                    </span>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        fontFamily: 'var(--font-outlier)',
                        fontSize: 'var(--text-2xl)',
                        fontWeight: 700,
                        color: 'var(--color-accent)',
                        letterSpacing: '-0.02em',
                        fontVariantNumeric: 'tabular-nums',
                        display: 'block',
                      }}>
                        AED {finalTotal.toLocaleString()}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-muted)', display: 'block', marginTop: '0.125rem' }}>
                        Plus Honest Advice Guarantee
                      </span>
                    </div>
                  </div>

                  {/* Secure WhatsApp Booking Trigger */}
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.625rem',
                      padding: '0.875rem 1.5rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'var(--color-accent)', // brand accent yellow
                      border: 'none',
                      color: 'var(--color-paper)', // dark paper text
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-xs)',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      transition: 'background var(--dur-micro) var(--ease-out), transform var(--dur-micro) var(--ease-out)',
                      textAlign: 'center',
                      willChange: 'transform',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(90% 0.170 88)';
                      (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent)';
                      (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
                    }}
                  >
                    <Phone style={{ width: '0.875rem', height: '0.875rem' }} />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  {/* Small disclaimer */}
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', lineHeight: 1.5, color: 'var(--color-muted)', textAlign: 'center' }}>
                    All price estimates are based on basic configurations and our honesty policy. No unexpected final up-charges. Verified supervision by Ayman himself.
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
