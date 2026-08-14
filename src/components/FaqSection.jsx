import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/bookData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-padding" id="faq" style={{ backgroundColor: 'var(--md-sys-color-surface-container-low)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
          <span className="m3-badge m3-badge-surface" style={{ marginBottom: '12px' }}>
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </span>

          <h2 className="section-headline-serif" style={{ marginBottom: '16px' }}>
            QUESTIONS & RESEARCH INQUIRIES
          </h2>

          <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '1rem', lineHeight: '1.6' }}>
            Key details regarding the historical sources, academic recognition, editions, and delivery.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="faq-item">
                <button 
                  className="faq-question" 
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      color: 'var(--md-sys-color-primary)'
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
