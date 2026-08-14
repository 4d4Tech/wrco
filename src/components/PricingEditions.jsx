import React from 'react';
import { Check, ShoppingBag, Zap, Shield, Truck, Sparkles, BookOpen } from 'lucide-react';
import { BOOK_EDITIONS } from '../data/bookData';

export default function PricingEditions({ inventory = {}, onAddToCart, onBuyNow }) {
  return (
    <section className="section-padding" id="editions" style={{ backgroundColor: 'var(--md-sys-color-background)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <span className="m3-badge m3-badge-green" style={{ marginBottom: '12px' }}>
            Official Author Editions
          </span>

          <h2 className="section-headline-serif" style={{ marginBottom: '16px' }}>
            CHOOSE YOUR EDITION
          </h2>

          <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Direct-from-publisher copies. Includes verified archival map inserts, high-contrast typography, and immediate dispatch.
          </p>
        </div>

        {/* Editions Grid */}
        <div className="editions-grid">
          {BOOK_EDITIONS.map((edition) => {
            const stockCount = inventory[edition.editionKey] !== undefined ? inventory[edition.editionKey] : (edition.id === 'collector' ? 9 : 25);
            const isLowStock = stockCount > 0 && stockCount <= 15;

            return (
              <div 
                key={edition.id} 
                className={`m3-card edition-card ${edition.isPopular ? 'popular' : 'm3-card-stone'}`}
                style={{
                  background: edition.isPopular ? 'var(--md-sys-color-surface-bright)' : 'var(--md-sys-color-surface-container-low)'
                }}
              >
                {/* Popular / Feature Badge */}
                {edition.badge && (
                  <div style={{ position: 'absolute', top: '-14px', left: '24px' }}>
                    <span className={`m3-badge ${edition.isPopular ? 'm3-badge-gold' : 'm3-badge-green'}`}>
                      {edition.badge}
                    </span>
                  </div>
                )}

                {/* Card Title & Format */}
                <div style={{ marginTop: '8px', marginBottom: '16px' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif-display)',
                    fontSize: '1.45rem',
                    color: 'var(--md-sys-color-primary)',
                    marginBottom: '6px'
                  }}>
                    {edition.name}
                  </h3>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--md-sys-color-outline)', fontWeight: '600' }}>
                    {edition.format}
                  </div>
                </div>

                {/* Pricing & Stock Status */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--md-sys-color-on-surface)' }}>
                    ${edition.price.toFixed(2)}
                  </span>
                  {edition.originalPrice && (
                    <span style={{ fontSize: '1rem', textDecoration: 'line-through', color: 'var(--md-sys-color-outline)' }}>
                      ${edition.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-success)', fontWeight: '700' }}>
                    Save ${(edition.originalPrice - edition.price).toFixed(2)}
                  </span>
                </div>

                {/* Real-time Firestore stock indicator */}
                <div style={{ marginBottom: '20px' }}>
                  {edition.id === 'digital' ? (
                    <span style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-success)', fontWeight: '600' }}>
                      ⚡ Instant Download via Email
                    </span>
                  ) : isLowStock ? (
                    <span style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-tertiary)', fontWeight: '700' }}>
                      🔥 Only {stockCount} copies left in current print run!
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-success)', fontWeight: '600' }}>
                      ✓ In Stock — Ships within 24 Hours
                    </span>
                  )}
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: '1.55',
                  color: 'var(--md-sys-color-on-surface-variant)',
                  marginBottom: '24px',
                  minHeight: '44px'
                }}>
                  {edition.description}
                </p>

                {/* Features List */}
                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '32px',
                  flexGrow: 1
                }}>
                  {edition.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.84rem' }}>
                      <Check size={16} color="var(--md-sys-color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'var(--md-sys-color-on-surface)' }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button 
                    className={`m3-btn ${edition.isPopular ? 'm3-btn-secondary' : 'm3-btn-primary'}`}
                    onClick={() => onBuyNow(edition)}
                    style={{ width: '100%' }}
                  >
                    <Zap size={16} />
                    <span>Instant Checkout</span>
                  </button>

                  <button 
                    className="m3-btn m3-btn-outlined"
                    onClick={() => onAddToCart(edition)}
                    style={{ width: '100%' }}
                  >
                    <ShoppingBag size={16} />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
          marginTop: '56px',
          padding: '28px 32px',
          background: 'var(--md-sys-color-surface-container)',
          borderRadius: 'var(--md-shape-large)',
          border: '1px solid var(--md-sys-color-outline-variant)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Truck size={24} color="var(--md-sys-color-primary)" />
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>Fast US & Global Shipping</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-on-surface-variant)' }}>Tracked USPS / FedEx priority handling</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Shield size={24} color="var(--md-sys-color-primary)" />
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>100% Authentic Guarantee</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-on-surface-variant)' }}>Direct author-sanctioned original copies</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <Sparkles size={24} color="var(--md-sys-color-secondary)" />
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>Instant Digital Companion</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-on-surface-variant)' }}>Digital access delivered immediately</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
