import React, { useState } from 'react';
import { Mail, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { subscribeNewsletter } from '../services/firebase';

export default function Footer({ onOpenLookInside }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;

    setSubmitting(true);
    try {
      await subscribeNewsletter(email.trim());
      setSubscribed(true);
    } catch (err) {}
    setSubmitting(false);
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        {/* Top Newsletter & Briefing Bar */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--md-shape-extra-large)',
          padding: '40px 36px',
          marginBottom: '64px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C89745' }}>
              Historical Research Dispatch
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.8rem', color: '#FAF8F4', marginTop: '6px', marginBottom: '8px' }}>
              Receive Exclusive Map Declassifications
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5' }}>
              Join over 24,000 historians and readers receiving Horace Butler's periodic research briefs, newly uncovered coordinates, and upcoming speaking engagements.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C89745', fontWeight: '700' }}>
                <Check size={20} />
                <span>You are subscribed to the Historical Research Dispatch!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px' }}>
                <div style={{ position: 'relative', flexGrow: 1 }}>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      height: '48px',
                      padding: '0 16px 0 44px',
                      borderRadius: 'var(--md-shape-full)',
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#FFF',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                  <Mail size={18} color="rgba(255, 255, 255, 0.5)" style={{ position: 'absolute', left: '16px', top: '15px' }} />
                </div>

                <button 
                  type="submit" 
                  className="m3-btn m3-btn-secondary" 
                  disabled={submitting}
                  style={{ height: '48px', flexShrink: 0 }}
                >
                  <span>{submitting ? '...' : 'Subscribe'}</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '56px'
        }}>
          {/* Col 1: Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-serif-display)',
              fontSize: '1.4rem',
              fontStyle: 'italic',
              color: '#FAF8F4',
              marginBottom: '14px'
            }}>
              When Rocks Cry Out
            </div>
            <p style={{ fontSize: '0.84rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '16px' }}>
              The #1 Dallas Morning News regional nonfiction bestseller by Horace Butler. Uncovering the suppressed 16th-century friar's journals and four ancient wonders in the Americas.
            </p>
            <div style={{ fontSize: '0.75rem', color: '#C89745', fontWeight: '700' }}>
              ISBN-13: 978-0976320404
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FAF8F4', marginBottom: '16px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li><a href="#discoveries" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>The Discoveries</a></li>
              <li><a href="#synopsis" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Book Synopsis</a></li>
              <li><a href="#revelations" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Chapter Highlights</a></li>
              <li><a href="#reviews" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Reader Reviews</a></li>
              <li><a href="#author" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Horace Butler Bio</a></li>
            </ul>
          </div>

          {/* Col 3: Editions */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FAF8F4', marginBottom: '16px' }}>
              Official Editions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li><a href="#editions" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Collector's Hardcover ($44.95)</a></li>
              <li><a href="#editions" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Library Hardcover ($34.95)</a></li>
              <li><a href="#editions" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Trade Paperback ($24.95)</a></li>
              <li><a href="#editions" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Digital Audio + eBook ($19.95)</a></li>
            </ul>
          </div>

          {/* Col 4: Trust & Guarantee */}
          <div>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#FAF8F4', marginBottom: '16px' }}>
              Security & Guarantees
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.7)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="var(--md-sys-color-secondary)" />
                <span>Stripe Encrypted Checkout</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} color="var(--md-sys-color-secondary)" />
                <span>USPS Priority Insured Shipping</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={16} color="var(--md-sys-color-secondary)" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '32px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.5)'
        }}>
          <div>
            © {new Date().getFullYear()} Horace Butler & Visual Heritage Publishers. All rights reserved.
          </div>

          <div>
            The #1 Dallas Morning News Regional Nonfiction Bestseller.
          </div>
        </div>
      </div>
    </footer>
  );
}
