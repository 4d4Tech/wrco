import React from 'react';
import { BookOpen, GraduationCap, FileText, CheckCircle } from 'lucide-react';
import { BOOK_DETAILS } from '../data/bookData';

export default function SynopsisSection({ onOpenLookInside }) {
  return (
    <section className="section-padding" id="synopsis" style={{ backgroundColor: 'var(--md-sys-color-background)' }}>
      <div className="container">
        <div style={{ maxWidth: '880px', margin: '0 auto', textAlign: 'center' }}>
          {/* Header Pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <span className="m3-badge m3-badge-green">
              <GraduationCap size={14} />
              <span>Academic & Historical Breakthrough</span>
            </span>
          </div>

          <h2 className="section-headline-serif" style={{ marginBottom: '28px' }}>
            AN EXPLOSIVE INVESTIGATION 500 YEARS IN THE MAKING
          </h2>

          {/* Academic Accolade Quote Callout */}
          <div style={{
            background: 'var(--md-sys-color-surface-container-low)',
            borderLeft: '4px solid var(--md-sys-color-secondary)',
            padding: '24px 32px',
            borderRadius: '0 var(--md-shape-large) var(--md-shape-large) 0',
            textAlign: 'left',
            marginBottom: '40px'
          }}>
            <p style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: '1.25rem',
              fontStyle: 'italic',
              color: 'var(--md-sys-color-primary)',
              lineHeight: 1.4,
              marginBottom: '8px'
            }}>
              "Listed by the Dallas Community Colleges as a 'must read,' this book ties together riddles from the Old Testament with ruins of abandoned cities that are thousands of years old..."
            </p>
            <span style={{ fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--md-sys-color-on-surface-variant)' }}>
              — Dallas Community College Curriculum Recommendation
            </span>
          </div>

          {/* Full Synopsis Paragraphs from instructions.md */}
          <div style={{
            textAlign: 'left',
            fontSize: '1.05rem',
            lineHeight: '1.8',
            color: 'var(--md-sys-color-on-surface)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            <p>
              Gripping from its opening page, <em className="font-serif-body">When Rocks Cry Out</em> pulls you into a real-life deadly chase that uncovers the <strong>'Forbidden Histories'</strong> of a 16th-century friar who followed Columbus into the Americas. Uncovered ancient maps and writings show the real ruins of four of the Seven Ancient Wonders of the World that were thought to have vanished from the earth. The secrets hidden within those Wonders explode the very foundations of what we thought we knew about the world and where we had come from.
            </p>

            <p>
              Often reading like a page-turning novel, this could be one of the most important books written in the last 500 years. From the discovery of Egypt's lost ancient capital, <strong>Memphis</strong>, to a stunning hidden burial city built by the Pharaohs, to the secret ruins of <strong>King David's famed city</strong>, this book moves past recent promises about 'codes' and brings you to the real-life secret that was the explosive reason for the creation of the codes.
            </p>
          </div>

          {/* Key Specs Card Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginTop: '48px',
            textAlign: 'left'
          }}>
            <div className="m3-card m3-card-stone" style={{ padding: '18px 20px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)', textTransform: 'uppercase', fontWeight: '700' }}>Author</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--md-sys-color-primary)', marginTop: '4px' }}>Horace Butler</div>
            </div>

            <div className="m3-card m3-card-stone" style={{ padding: '18px 20px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)', textTransform: 'uppercase', fontWeight: '700' }}>Pages & Format</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--md-sys-color-primary)', marginTop: '4px' }}>336 Pages / Maps</div>
            </div>

            <div className="m3-card m3-card-stone" style={{ padding: '18px 20px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)', textTransform: 'uppercase', fontWeight: '700' }}>Bestseller Status</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--md-sys-color-primary)', marginTop: '4px' }}>#1 Regional Bestseller</div>
            </div>

            <div className="m3-card m3-card-stone" style={{ padding: '18px 20px' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)', textTransform: 'uppercase', fontWeight: '700' }}>Verified Reviews</div>
              <div style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--md-sys-color-primary)', marginTop: '4px' }}>4.8 / 5.0 Stars</div>
            </div>
          </div>

          <div style={{ marginTop: '36px' }}>
            <button className="m3-btn m3-btn-outlined" onClick={onOpenLookInside}>
              <FileText size={18} />
              <span>Read Excerpt & Chapter 1 Preview</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
