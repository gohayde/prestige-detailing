/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function StatsBar() {
  const stats = [
    { value: '100+', label: '5-Star Reviews' },
    { value: '9H', label: 'Coating Grade' },
    { value: 'Owner', label: 'Supervised' },
    { value: 'DIP 2', label: 'Dubai Studio' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 25,
        background: 'var(--color-paper)',
        padding: '2.5rem 0',
        borderTop: '1px solid var(--color-rule)',
        borderBottom: '1px solid var(--color-rule)',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 var(--space-lg)' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                flex: '1 1 180px',
                padding: '0.25rem 1rem',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 800,
                color: 'var(--color-accent)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                marginBottom: '0.35rem',
              }}>
                {item.value}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
              }}>
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
