import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MessageSquarePlus, Filter, ThumbsUp } from 'lucide-react';

export default function ReviewCarousel({ reviews = [], onOpenReviewModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterRating, setFilterRating] = useState('all');
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [likesMap, setLikesMap] = useState({});

  // Filter reviews
  const filteredReviews = reviews.filter(rev => {
    if (filterRating === 'all') return true;
    return rev.rating === Number(filterRating);
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, filteredReviews.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, filteredReviews.length - 1)) % Math.max(1, filteredReviews.length - 1));
  };

  const handleLike = (id) => {
    setLikesMap(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  return (
    <section className="reviews-section section-padding" id="reviews" style={{ backgroundColor: 'var(--md-sys-color-surface-container-low)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: '#C89745',
            marginBottom: '12px'
          }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#C89745" color="#C89745" />
            ))}
            <span style={{ fontWeight: '700', color: 'var(--md-sys-color-on-surface)', marginLeft: '6px' }}>4.8 / 5.0 Global Rating</span>
          </div>

          <h2 className="section-headline-serif" style={{ marginBottom: '16px' }}>
            WHAT READERS ARE SAYING
          </h2>

          <p style={{ maxWidth: '620px', color: 'var(--md-sys-color-on-surface-variant)', fontSize: '1rem', lineHeight: '1.6' }}>
            Real reviews and testimonials from historians, academics, and readers whose understanding of world history was transformed by <em>When Rocks Cry Out</em>.
          </p>

          {/* Controls Bar: View Mode, Filter Chips, Write Review */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '32px',
            gap: '16px'
          }}>
            {/* Filter Chips */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--md-sys-color-outline)', textTransform: 'uppercase' }}>Filter:</span>
              <button 
                className={`m3-chip ${filterRating === 'all' ? 'active' : ''}`}
                onClick={() => setFilterRating('all')}
              >
                All Reviews ({reviews.length})
              </button>
              <button 
                className={`m3-chip ${filterRating === '5' ? 'active' : ''}`}
                onClick={() => setFilterRating('5')}
              >
                ★ 5 Stars
              </button>
              <button 
                className={`m3-chip ${filterRating === '4' ? 'active' : ''}`}
                onClick={() => setFilterRating('4')}
              >
                ★ 4 Stars
              </button>
            </div>

            {/* View Mode & Write Button */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{
                background: 'var(--md-sys-color-surface-bright)',
                padding: '4px',
                borderRadius: 'var(--md-shape-full)',
                display: 'flex',
                border: '1px solid var(--md-sys-color-outline-variant)'
              }}>
                <button
                  onClick={() => setViewMode('carousel')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--md-shape-full)',
                    background: viewMode === 'carousel' ? 'var(--md-sys-color-primary)' : 'transparent',
                    color: viewMode === 'carousel' ? '#FFF' : 'var(--md-sys-color-on-surface)',
                    border: 'none',
                    fontSize: '0.8125rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Carousel
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--md-shape-full)',
                    background: viewMode === 'grid' ? 'var(--md-sys-color-primary)' : 'transparent',
                    color: viewMode === 'grid' ? '#FFF' : 'var(--md-sys-color-on-surface)',
                    border: 'none',
                    fontSize: '0.8125rem',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Grid View
                </button>
              </div>

              <button className="m3-btn m3-btn-secondary m3-btn-sm" onClick={onOpenReviewModal}>
                <MessageSquarePlus size={16} />
                <span>Write a Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* --- CAROUSEL VIEW --- */}
        {viewMode === 'carousel' && (
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}>
              {filteredReviews.slice(currentIndex, currentIndex + 3).map((review) => (
                <div key={review.id} className="m3-card review-card" style={{ background: 'var(--md-sys-color-surface-bright)' }}>
                  <div>
                    {/* Stars & Verified Badge */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <div className="star-row">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={15} fill="#C89745" color="#C89745" />
                        ))}
                      </div>

                      {review.verifiedPurchase && (
                        <span style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.72rem',
                          color: 'var(--md-sys-color-success)',
                          fontWeight: '700'
                        }}>
                          <CheckCircle2 size={13} />
                          <span>Verified Reader</span>
                        </span>
                      )}
                    </div>

                    {/* Headline */}
                    <h3 className="review-headline">
                      "{review.headline || 'Impactful and eye-opening read'}"
                    </h3>

                    {/* Text */}
                    <p className="review-body">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Reviewer Meta */}
                  <div className="reviewer-meta">
                    <div>
                      <div style={{ fontWeight: '700', color: 'var(--md-sys-color-on-surface)' }}>
                        {review.author}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)' }}>
                        {review.location || 'United States'}
                      </div>
                    </div>

                    <button 
                      onClick={() => handleLike(review.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.8rem',
                        color: 'var(--md-sys-color-outline)',
                        cursor: 'pointer'
                      }}
                    >
                      <ThumbsUp size={14} />
                      <span>{likesMap[review.id] || (review.likes || 0)}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '36px' }}>
              <button 
                className="m3-icon-btn" 
                onClick={prevSlide}
                style={{ background: 'var(--md-sys-color-surface-bright)', border: '1px solid var(--md-sys-color-outline-variant)' }}
                aria-label="Previous Reviews"
              >
                <ChevronLeft size={20} />
              </button>

              <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--md-sys-color-outline)' }}>
                {Math.min(currentIndex + 1, filteredReviews.length)} – {Math.min(currentIndex + 3, filteredReviews.length)} of {filteredReviews.length}
              </span>

              <button 
                className="m3-icon-btn" 
                onClick={nextSlide}
                style={{ background: 'var(--md-sys-color-surface-bright)', border: '1px solid var(--md-sys-color-outline-variant)' }}
                aria-label="Next Reviews"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* --- GRID VIEW (All Top 10 Reviews) --- */}
        {viewMode === 'grid' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {filteredReviews.map((review) => (
              <div key={review.id} className="m3-card review-card" style={{ background: 'var(--md-sys-color-surface-bright)' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div className="star-row">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={15} fill="#C89745" color="#C89745" />
                      ))}
                    </div>

                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '0.72rem',
                      color: 'var(--md-sys-color-success)',
                      fontWeight: '700'
                    }}>
                      <CheckCircle2 size={13} />
                      <span>Verified Reader</span>
                    </span>
                  </div>

                  <h3 className="review-headline">
                    "{review.headline || 'Profound research'}"
                  </h3>

                  <p className="review-body">
                    "{review.text}"
                  </p>
                </div>

                <div className="reviewer-meta">
                  <div>
                    <div style={{ fontWeight: '700', color: 'var(--md-sys-color-on-surface)' }}>
                      {review.author}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)' }}>
                      {review.location || 'United States'}
                    </div>
                  </div>

                  <button 
                    onClick={() => handleLike(review.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8rem',
                      color: 'var(--md-sys-color-outline)',
                      cursor: 'pointer'
                    }}
                  >
                    <ThumbsUp size={14} />
                    <span>{likesMap[review.id] || (review.likes || 0)}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
