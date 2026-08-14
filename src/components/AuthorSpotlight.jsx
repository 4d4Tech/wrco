import React from 'react';
import { Award, Compass, MapPin, Search, Feather } from 'lucide-react';
import { AUTHOR_BIO } from '../data/bookData';

export default function AuthorSpotlight() {
  return (
    <section className="section-padding" id="author" style={{ backgroundColor: 'var(--md-sys-color-surface-container-low)', borderTop: '1px solid var(--md-sys-color-outline-variant)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '56px',
          alignItems: 'center'
        }}>
          {/* Author Study / Historical Research Visual */}
          <div>
            <div className="m3-card" style={{
              background: 'linear-gradient(135deg, #101E16 0%, #1A3024 100%)',
              color: '#FAF8F4',
              padding: '40px 32px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(200, 151, 69, 0.2) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Feather size={20} color="#C89745" />
                <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C89745' }}>
                  The Investigator's Journey
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-serif-display)',
                fontSize: '2rem',
                lineHeight: '1.2',
                marginBottom: '16px',
                color: '#FAF8F4'
              }}>
                12 Years of Rigorous Archival & Field Archaeology
              </h3>

              <p style={{ fontSize: '0.92rem', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '32px' }}>
                "The discoveries in this book are not mere speculative conjecture. They are built upon hundreds of cross-referenced 16th-century travelogues, ecclesiastical archives, ancient astronomical tables, and physical geological surveys."
              </p>

              {/* Research Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                paddingTop: '24px'
              }}>
                {AUTHOR_BIO.stats.map((st, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#C89745', fontFamily: 'var(--font-serif-display)' }}>
                      {st.value}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.65)' }}>
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Author Bio Copy */}
          <div>
            <span className="m3-badge m3-badge-green" style={{ marginBottom: '16px' }}>
              About the Author
            </span>

            <h2 style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
              color: 'var(--md-sys-color-primary)',
              lineHeight: '1.15',
              marginBottom: '8px'
            }}>
              Horace Butler
            </h2>

            <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--md-sys-color-secondary)', marginBottom: '24px' }}>
              {AUTHOR_BIO.title} &nbsp;•&nbsp; {AUTHOR_BIO.location}
            </div>

            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: 'var(--md-sys-color-on-surface)',
              marginBottom: '24px'
            }}>
              {AUTHOR_BIO.summary}
            </p>

            <div style={{
              background: 'var(--md-sys-color-surface-bright)',
              padding: '20px 24px',
              borderRadius: 'var(--md-shape-medium)',
              border: '1px solid var(--md-sys-color-outline-variant)',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <Award size={32} color="var(--md-sys-color-secondary)" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--md-sys-color-primary)' }}>
                  #1 Dallas Morning News Regional Nonfiction Bestseller
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
                  Acclaimed across Texas and adopted by collegiate history curriculums nationwide.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
