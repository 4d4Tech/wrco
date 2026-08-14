import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

const REVELATION_ITEMS = [
  {
    title: "16th-Century Friar's Suppressed Travel Journals",
    desc: "Unredacted personal logs of the friar who sailed alongside Columbus, detailing massive pre-existing stone cities and royal Hebraic inscriptions."
  },
  {
    title: "The Coordinates of Egypt's Lost Capital: Memphis",
    desc: "How biblical river descriptions match the American waterways, pinpointing the true geographic ruins of ancient Memphis."
  },
  {
    title: "The Pharaohs' Hidden Burial City in the Americas",
    desc: "Subterranean megalithic chambers and astronomical tomb alignments that explode conventional world history."
  },
  {
    title: "Ruins of King David's Famed Fenced Stronghold",
    desc: "Solving the Old Testament riddles connecting abandoned ancient fortifications thousands of miles from where scholars looked."
  },
  {
    title: "The Real-Life Secret Behind the Ancient Codes",
    desc: "The explosive geopolitical truth that caused ancient historians to deliberately veil these locations in allegory."
  }
];

export default function RevelationsSection({ onScrollToEditions }) {
  return (
    <section className="revelations-section section-padding" id="revelations">
      <div className="container">
        <div className="split-layout-grid">
          {/* Left Column matching wrco.png */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--md-sys-color-primary)',
              lineHeight: 1.1,
              marginBottom: '6px'
            }}>
              THE REVELATIONS
            </h2>

            <p style={{
              fontFamily: 'var(--font-serif-display)',
              fontStyle: 'italic',
              fontSize: '1.5rem',
              color: 'var(--md-sys-color-on-surface-variant)',
              marginBottom: '24px'
            }}>
              Includes
            </p>

            {/* Checklist with horizontal dividers matching wrco.png */}
            <div className="checklist-group">
              {REVELATION_ITEMS.map((item, idx) => (
                <div key={idx} className="checklist-item">
                  <CheckCircle2 className="checklist-icon" />
                  <div className="checklist-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order CTA Button matching wrco.png */}
            <button 
              className="m3-btn m3-btn-primary m3-btn-lg"
              onClick={onScrollToEditions}
              style={{
                backgroundColor: '#173322',
                color: '#FAF8F4',
                padding: '0 36px',
                marginTop: '8px'
              }}
            >
              <span>ORDER YOUR COPY</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Column: High-End Editorial Photography Frame */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="editorial-image-frame" style={{ position: 'relative' }}>
              {/* Stylized Ancient Expedition & Megalithic Ruins Graphic */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(14, 24, 18, 0.4) 0%, rgba(14, 24, 18, 0.92) 100%), radial-gradient(circle at 50% 40%, rgba(200, 151, 69, 0.25) 0%, transparent 70%)',
                zIndex: 1
              }} />

              {/* Procedural Visual Representation of Ancient Stone Ruins & Megaliths */}
              <svg viewBox="0 0 600 750" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                <defs>
                  <linearGradient id="stoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2A4836" />
                    <stop offset="50%" stopColor="#172B20" />
                    <stop offset="100%" stopColor="#0B150F" />
                  </linearGradient>
                  <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F3D18B" />
                    <stop offset="100%" stopColor="#C89745" />
                  </linearGradient>
                </defs>

                <rect width="600" height="750" fill="url(#stoneGrad)" />

                {/* Ancient Stepped Pyramid / Megalith Silhouettes */}
                <path d="M 50 680 L 150 480 L 450 480 L 550 680 Z" fill="#13241A" opacity="0.8" />
                <path d="M 120 480 L 200 340 L 400 340 L 480 480 Z" fill="#1B3325" opacity="0.9" />
                <path d="M 180 340 L 250 220 L 350 220 L 420 340 Z" fill="#244532" />
                <path d="M 240 220 L 290 140 L 310 140 L 360 220 Z" fill="#C89745" opacity="0.6" />

                {/* Sun / Revelation Radiance */}
                <circle cx="300" cy="140" r="45" fill="none" stroke="url(#goldGlow)" strokeWidth="3" opacity="0.8" />
                <circle cx="300" cy="140" r="80" fill="none" stroke="url(#goldGlow)" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />

                {/* Ancient Map Grid Overlay */}
                <line x1="50" y1="100" x2="550" y2="100" stroke="#C89745" strokeWidth="0.5" opacity="0.3" />
                <line x1="50" y1="300" x2="550" y2="300" stroke="#C89745" strokeWidth="0.5" opacity="0.3" />
                <line x1="50" y1="500" x2="550" y2="500" stroke="#C89745" strokeWidth="0.5" opacity="0.3" />
                <line x1="150" y1="50" x2="150" y2="700" stroke="#C89745" strokeWidth="0.5" opacity="0.3" />
                <line x1="300" y1="50" x2="300" y2="700" stroke="#C89745" strokeWidth="0.5" opacity="0.3" />
                <line x1="450" y1="50" x2="450" y2="700" stroke="#C89745" strokeWidth="0.5" opacity="0.3" />
              </svg>

              {/* Floating Overlay Badge on the Image */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                padding: '18px 22px',
                background: 'rgba(15, 26, 20, 0.88)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--md-shape-medium)',
                border: '1px solid rgba(200, 151, 69, 0.4)',
                zIndex: 2,
                color: '#FAF8F4'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Sparkles size={16} color="#C89745" />
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C89745' }}>
                    12+ Years of Archival Evidence
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', lineHeight: '1.45', color: 'rgba(255, 255, 255, 0.85)' }}>
                  "Ties together riddles from the Old Testament with ruins of abandoned cities that are thousands of years old...and thousands of miles away from where we thought those cities would be."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
