import { useState } from 'react';
import { CAR_TYPES, SERVICES_DATA } from '../data';
import { Car, Check, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Cta() {
  const [selectedCarId, setSelectedCarId] = useState(CAR_TYPES[0].id);
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([SERVICES_DATA[0].id]);

  const activeCar = CAR_TYPES.find((c) => c.id === selectedCarId) || CAR_TYPES[0];

  const handleToggle = (id: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const parsePrice = (s: string) => parseInt(s.replace(/[^0-9]/g, ''), 10) || 0;

  const baseSum = selectedServiceIds.reduce((sum, id) => {
    const svc = SERVICES_DATA.find((s) => s.id === id);
    return sum + (svc ? parsePrice(svc.priceEstimate) : 0);
  }, 0);

  const total = Math.round(baseSum * activeCar.multiplier);

  const waLink = () => {
    const names = selectedServiceIds
      .map((id) => SERVICES_DATA.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join(', ');
    const text = `Hi Ayman! I just built my detailing package online:\n\n🚙 Car: ${activeCar.label} (${activeCar.example})\n🛡️ Services: ${names}\n💰 Estimated: AED ${total.toLocaleString()}\n\nWhat's your earliest available slot?`;
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
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 var(--space-lg)', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div style={{ marginBottom: 'var(--space-3xl)' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-display)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            textTransform: 'uppercase',
            color: 'var(--color-ink)',
            margin: '0 0 var(--space-md)',
            overflowWrap: 'anywhere',
            minWidth: 0,
          }}>
            Build your<br />estimate.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            fontWeight: 350,
            lineHeight: 1.7,
            color: 'var(--color-muted)',
            maxWidth: '56ch',
          }}>
            Select your vehicle class and services. Our estimator adjusts pricing in
            real-time based on panel surface area. No hidden charges — ever.
          </p>
        </div>

        {/* Builder grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 'var(--space-xl)', alignItems: 'stretch' }}
          className="max-lg:grid-cols-1"
        >

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>

            {/* Car type */}
            <div style={{
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-rule)',
              background: 'var(--color-paper)',
              padding: 'var(--space-xl)',
            }}>
              <p style={{
                fontFamily: 'var(--font-outlier)',
                fontSize: 'var(--text-xs)', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--color-muted)',
                margin: '0 0 var(--space-md)',
              }}>
                Step 1 — Select vehicle class
              </p>
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-sm)' }}
                className="max-sm:grid-cols-1"
              >
                {CAR_TYPES.map((car) => {
                  const active = car.id === selectedCarId;
                  return (
                    <button
                      key={car.id}
                      onClick={() => setSelectedCarId(car.id)}
                      style={{
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: `1px solid ${active ? 'var(--color-accent)' : 'var(--color-rule)'}`,
                        background: active ? 'var(--color-paper-2)' : 'transparent',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-sm)',
                        transition: 'border-color var(--dur-micro) var(--ease-out), background var(--dur-micro) var(--ease-out)',
                      }}
                      onMouseEnter={(e) => {
                        if (!active) {
                          e.currentTarget.style.borderColor = 'var(--color-rule-2)';
                          e.currentTarget.style.background = 'var(--color-paper-2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!active) {
                          e.currentTarget.style.borderColor = 'var(--color-rule)';
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Car style={{ width: '1.125rem', height: '1.125rem', color: active ? 'var(--color-accent)' : 'var(--color-muted)' }} />
                        <span style={{
                          fontFamily: 'var(--font-outlier)',
                          fontSize: '0.65rem', fontWeight: 600,
                          color: active ? 'var(--color-accent)' : 'var(--color-muted)',
                          letterSpacing: '0.06em',
                          fontVariantNumeric: 'tabular-nums',
                        }}>
                          ×{car.multiplier}
                        </span>
                      </div>
                      <div>
                        <div style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'var(--text-sm)', fontWeight: 700,
                          textTransform: 'uppercase',
                          color: active ? 'var(--color-accent)' : 'var(--color-ink)',
                          letterSpacing: '-0.01em',
                        }}>{car.label}</div>
                        <div style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 'var(--text-xs)',
                          color: 'var(--color-muted)',
                          marginTop: '0.2rem',
                          lineHeight: 1.4,
                        }}>{car.example}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div style={{
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-rule)',
              background: 'var(--color-paper)',
              padding: 'var(--space-xl)',
            }}>
              <p style={{
                fontFamily: 'var(--font-outlier)',
                fontSize: 'var(--text-xs)', fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--color-muted)',
                margin: '0 0 var(--space-md)',
              }}>
                Step 2 — Choose services (multi-select)
              </p>
              <div
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-sm)' }}
                className="max-sm:grid-cols-1"
              >
                {SERVICES_DATA.map((svc) => {
                  const checked = selectedServiceIds.includes(svc.id);
                  return (
                    <button
                      key={svc.id}
                      onClick={() => handleToggle(svc.id)}
                      style={{
                        padding: 'var(--space-md)',
                        borderRadius: 'var(--radius-lg)',
                        border: `1px solid ${checked ? 'var(--color-accent)' : 'var(--color-rule)'}`,
                        background: checked ? 'var(--color-paper-2)' : 'transparent',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--space-sm)',
                        transition: 'border-color var(--dur-micro) var(--ease-out), background var(--dur-micro) var(--ease-out)',
                      }}
                      onMouseEnter={(e) => {
                        if (!checked) {
                          e.currentTarget.style.borderColor = 'var(--color-rule-2)';
                          e.currentTarget.style.background = 'var(--color-paper-2)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!checked) {
                          e.currentTarget.style.borderColor = 'var(--color-rule)';
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      {/* Checkbox */}
                      <div style={{
                        width: '1.125rem', height: '1.125rem',
                        borderRadius: 'var(--radius-sm)',
                        border: `1.5px solid ${checked ? 'var(--color-accent)' : 'var(--color-rule-2)'}`,
                        background: checked ? 'var(--color-accent)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, marginTop: '0.125rem',
                        transition: 'background var(--dur-micro) var(--ease-out), border-color var(--dur-micro) var(--ease-out)',
                      }}>
                        {checked && <Check style={{ width: '0.75rem', height: '0.75rem', color: 'var(--color-accent-ink)', strokeWidth: 3 }} />}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'var(--text-xs)', fontWeight: 700,
                          textTransform: 'uppercase', letterSpacing: '0.02em',
                          color: checked ? 'var(--color-accent)' : 'var(--color-ink)',
                          marginBottom: '0.25rem',
                        }}>{svc.title}</div>
                        <div style={{
                          fontFamily: 'var(--font-outlier)',
                          fontSize: '0.65rem', fontWeight: 600,
                          color: 'var(--color-muted)',
                          fontVariantNumeric: 'tabular-nums',
                        }}>From {svc.priceEstimate}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Estimator panel */}
          <div style={{ display: 'flex' }}>
            <div style={{
              width: '100%',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-rule)',
              background: 'var(--color-paper)',
              padding: 'var(--space-xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Subtle bloom inside panel */}
              <div style={{
                position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                width: '16rem', height: '8rem',
                background: 'radial-gradient(ellipse, var(--color-bloom) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontFamily: 'var(--font-outlier)',
                  fontSize: 'var(--text-xs)', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--color-ink)',
                  paddingBottom: 'var(--space-md)',
                  borderBottom: '1px solid var(--color-rule)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  Studio Estimator
                </div>

                {/* Selected services list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
                  <div style={{
                    fontFamily: 'var(--font-outlier)',
                    fontSize: '0.65rem', fontWeight: 600,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--color-muted)', marginBottom: '0.25rem',
                  }}>
                    Vehicle: {activeCar.label} ×{activeCar.multiplier}
                  </div>
                  {selectedServiceIds.length === 0 ? (
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-muted)', fontStyle: 'italic', fontFamily: 'var(--font-body)' }}>
                      No services selected yet.
                    </span>
                  ) : (
                    <AnimatePresence>
                      {selectedServiceIds.map((id) => {
                        const svc = SERVICES_DATA.find((s) => s.id === id);
                        if (!svc) return null;
                        return (
                          <motion.div
                            key={id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            style={{
                              display: 'flex', justifyContent: 'space-between',
                              alignItems: 'baseline', overflow: 'hidden',
                            }}
                          >
                            <span style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: 'var(--text-xs)', fontWeight: 600,
                              textTransform: 'uppercase',
                              color: 'var(--color-ink-2)',
                            }}>{svc.title}</span>
                            <span style={{
                              fontFamily: 'var(--font-outlier)',
                              fontSize: 'var(--text-xs)',
                              color: 'var(--color-accent)',
                              fontVariantNumeric: 'tabular-nums',
                              flexShrink: 0, marginLeft: 'var(--space-sm)',
                            }}>{svc.priceEstimate}</span>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  )}
                </div>
              </div>

              {/* Total + CTA */}
              <div style={{
                position: 'relative', zIndex: 1,
                paddingTop: 'var(--space-lg)',
                borderTop: '1px solid var(--color-rule)',
                display: 'flex', flexDirection: 'column', gap: 'var(--space-md)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <span style={{
                    fontFamily: 'var(--font-outlier)',
                    fontSize: 'var(--text-xs)', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--color-ink)',
                  }}>Total estimate</span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: 'var(--font-outlier)',
                      fontSize: 'var(--text-3xl)',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      AED {total.toLocaleString()}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-outlier)',
                      fontSize: 'var(--text-xs)', color: 'var(--color-muted)',
                      marginTop: '0.2rem',
                    }}>+ honest advice guarantee</div>
                  </div>
                </div>

                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.875rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--color-accent)',
                    color: 'var(--color-accent-ink)',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xs)', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    textDecoration: 'none',
                    transition: 'background var(--dur-short) var(--ease-out), transform var(--dur-short) var(--ease-out)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-ink)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--color-accent)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Phone style={{ width: '0.875rem', height: '0.875rem', flexShrink: 0 }} />
                  Book via WhatsApp
                </a>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem', lineHeight: 1.5,
                  color: 'var(--color-muted)', textAlign: 'center', margin: 0,
                }}>
                  Estimate based on basic configuration. No unexpected up-charges.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

