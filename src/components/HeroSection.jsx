import React from 'react';
import { BookOpen, Sparkles, Volume2, ShieldCheck, Star, Award, Compass } from 'lucide-react';
import BookViewer3D from './BookViewer3D';
import { BOOK_DETAILS } from '../data/bookData';

export default function HeroSection({ onOpenLookInside, onOpenAudioPlayer, onScrollToEditions }) {
  return (
    <section className="hero-wrapper" id="hero">
      <div className="hero-bg-overlay" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Sub-header Pill */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(200, 151, 69, 0.4)',
            padding: '6px 16px',
            borderRadius: '999px',
            fontSize: '0.8rem',
            color: '#FAF8F4',
            backdropFilter: 'blur(8px)'
          }}>
            <Award size={15} color="#C89745" />
            <span style={{ fontWeight: '700', color: '#C89745' }}>#1 REGIONAL BESTSELLER</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>Dallas Morning News Nonfiction</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="hero-grid">
          {/* Left Column: 3D Interactive Book Object */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <BookViewer3D onOpenLookInside={onOpenLookInside} />
          </div>

          {/* Right Column: Editorial Copy matching wrco.png */}
          <div className="hero-copy-card">
            <h2 className="hero-quote">
              Ready to uncover the earth-shattering secrets hidden for 500 years?
            </h2>

            <p className="hero-desc">
              {BOOK_DETAILS.tagline}
            </p>

            <p style={{
              fontSize: '0.875rem',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.72)',
              marginBottom: '28px'
            }}>
              Pulls you into a real-life deadly chase uncovering the <strong>'Forbidden Histories'</strong> of a 16th-century friar who followed Columbus into the Americas. Uncovered ancient maps show the real ruins of four of the Seven Ancient Wonders of the World.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '36px' }}>
              <button 
                className="m3-btn m3-btn-secondary m3-btn-lg"
                onClick={onScrollToEditions}
                style={{ flex: '1 1 auto', minWidth: '180px' }}
              >
                <BookOpen size={18} />
                <span>Order Your Copy</span>
              </button>

              <button 
                className="m3-btn m3-btn-outlined-light m3-btn-lg"
                onClick={onOpenLookInside}
                style={{ flex: '1 1 auto', minWidth: '160px' }}
              >
                <Sparkles size={18} />
                <span>Look Inside</span>
              </button>

              <button 
                className="m3-btn m3-btn-tonal m3-btn-sm"
                onClick={onOpenAudioPlayer}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#FAF8F4',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <Volume2 size={16} color="#C89745" />
                <span>Listen to Narrated Audio Preview (3 min)</span>
              </button>
            </div>

            {/* Quick Proof Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              paddingTop: '20px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#C89745', marginBottom: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#C89745" color="#C89745" />
                  ))}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                  4.8/5 Verified Reader Rating
                </div>
              </div>

              <div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#FAF8F4' }}>
                  12+ Years
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                  Meticulous Field Research
                </div>
              </div>

              <div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#FAF8F4' }}>
                  Must-Read
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                  Dallas Community Colleges
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Monumental Banner Typography Overlap matching wrco.png */}
      <div className="hero-monumental-banner">
        <h1 className="hero-monumental-title">
          WHEN ROCKS CRY OUT
        </h1>
      </div>
    </section>
  );
}
