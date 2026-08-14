import React from 'react';
import { Check, Compass, Landmark, ScrollText } from 'lucide-react';
import { DISCOVERY_PILLARS } from '../data/bookData';

export default function DiscoveryFeatures() {
  return (
    <section className="discoveries-section section-padding" id="discoveries">
      <div className="container">
        {/* Section Heading matching wrco.png */}
        <h2 className="section-headline-serif">
          HOW THE BOOK SHATTERS HISTORY
        </h2>

        {/* 3-Column Discovery Grid matching wrco.png */}
        <div className="three-column-grid">
          {DISCOVERY_PILLARS.map((pillar, idx) => (
            <div key={idx} className="column-item">
              {/* Checkmark Icon matching wrco.png design */}
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                background: 'rgba(23, 51, 34, 0.06)'
              }}>
                <Check className="column-check-icon" style={{ width: '22px', height: '22px', margin: 0 }} />
              </div>

              {/* Title */}
              <h3 className="column-title">
                {pillar.title}
              </h3>

              {/* Subtitle & Description */}
              <p style={{
                fontSize: '0.8125rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--md-sys-color-secondary)',
                marginBottom: '10px'
              }}>
                {pillar.subtitle}
              </p>

              <p className="column-text">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
