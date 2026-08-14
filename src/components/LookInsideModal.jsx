import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen, Bookmark, Sparkles } from 'lucide-react';
import { EXCERPT_PREVIEW } from '../data/bookData';

export default function LookInsideModal({ isOpen, onClose, onOrderClick }) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  if (!isOpen) return null;

  const currentExcerpt = EXCERPT_PREVIEW[currentPageIndex];

  const handleNext = () => {
    setCurrentPageIndex((prev) => (prev + 1) % EXCERPT_PREVIEW.length);
  };

  const handlePrev = () => {
    setCurrentPageIndex((prev) => (prev - 1 + EXCERPT_PREVIEW.length) % EXCERPT_PREVIEW.length);
  };

  return (
    <div className="m3-scrim" onClick={onClose}>
      <div 
        className="m3-dialog" 
        onClick={(e) => e.stopPropagation()} 
        style={{
          maxWidth: '720px',
          backgroundColor: '#F7F4EE',
          border: '1px solid var(--md-sys-color-outline-variant)',
          boxShadow: 'var(--md-sys-elevation-5)'
        }}
      >
        {/* Top App Bar inside modal */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 28px',
          borderBottom: '1px solid var(--md-sys-color-outline-variant)',
          backgroundColor: 'var(--md-sys-color-surface-container-high)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpen size={20} color="var(--md-sys-color-primary)" />
            <div>
              <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--md-sys-color-primary)' }}>
                Look Inside: When Rocks Cry Out
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)', marginLeft: '8px' }}>
                by Horace Butler
              </span>
            </div>
          </div>

          <button className="m3-icon-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Parchment Reader Body */}
        <div style={{
          padding: '36px 36px 28px 36px',
          backgroundColor: '#FAF8F4',
          minHeight: '340px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            {/* Page Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span className="m3-badge m3-badge-green" style={{ fontSize: '0.7rem' }}>
                {currentExcerpt.page}
              </span>
              <span style={{
                fontFamily: 'var(--font-serif-display)',
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: 'var(--md-sys-color-secondary)'
              }}>
                Archival Excerpt
              </span>
            </div>

            {/* Chapter Heading */}
            <h3 style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: '1.75rem',
              color: 'var(--md-sys-color-primary)',
              marginBottom: '18px'
            }}>
              {currentExcerpt.heading}
            </h3>

            {/* Book Body Copy */}
            <div style={{
              fontFamily: 'var(--font-serif-body)',
              fontSize: '1.1rem',
              lineHeight: '1.85',
              color: '#262626',
              whiteSpace: 'pre-line',
              textAlign: 'justify'
            }}>
              {currentExcerpt.content}
            </div>
          </div>

          {/* Page Indicators & Nav Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '36px',
            paddingTop: '20px',
            borderTop: '1px solid var(--md-sys-color-outline-variant)'
          }}>
            <button 
              className="m3-btn m3-btn-tonal m3-btn-sm" 
              onClick={handlePrev}
              disabled={currentPageIndex === 0}
              style={{ opacity: currentPageIndex === 0 ? 0.4 : 1 }}
            >
              <ChevronLeft size={16} />
              <span>Previous Section</span>
            </button>

            <div style={{ display: 'flex', gap: '6px' }}>
              {EXCERPT_PREVIEW.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: i === currentPageIndex ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '999px',
                    backgroundColor: i === currentPageIndex ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-outline-variant)',
                    transition: 'all 0.2s ease'
                  }}
                />
              ))}
            </div>

            <button 
              className="m3-btn m3-btn-tonal m3-btn-sm" 
              onClick={handleNext}
              disabled={currentPageIndex === EXCERPT_PREVIEW.length - 1}
              style={{ opacity: currentPageIndex === EXCERPT_PREVIEW.length - 1 ? 0.4 : 1 }}
            >
              <span>Next Section</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Footer with Purchase Callout */}
        <div style={{
          padding: '16px 28px',
          backgroundColor: 'var(--md-sys-color-surface-container-high)',
          borderTop: '1px solid var(--md-sys-color-outline-variant)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
            Enjoying the sample? Read all 336 unabridged pages with full-color maps.
          </span>

          <button 
            className="m3-btn m3-btn-secondary m3-btn-sm"
            onClick={() => {
              onClose();
              if (onOrderClick) onOrderClick();
            }}
          >
            <span>Order Full Edition</span>
          </button>
        </div>
      </div>
    </div>
  );
}
