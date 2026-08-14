import React, { useState } from 'react';
import { X, Star, CheckCircle, Send, AlertCircle } from 'lucide-react';
import { submitReviewToFirestore } from '../services/firebase';

export default function ReviewModal({ isOpen, onClose, onReviewSubmitted }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [headline, setHeadline] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Please provide your review feedback.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const res = await submitReviewToFirestore({
        author: name.trim() || 'Reader & History Enthusiast',
        location: location.trim() || 'United States',
        headline: headline.trim() || 'Thought-provoking historical research',
        text: text.trim(),
        rating
      });

      if (res.success) {
        setSuccess(true);
        if (onReviewSubmitted) onReviewSubmitted();
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 2000);
      }
    } catch (err) {
      setError('Failed to submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="m3-scrim" onClick={onClose}>
      <div className="m3-dialog" onClick={(e) => e.stopPropagation()} style={{ padding: '36px 32px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', color: 'var(--md-sys-color-primary)' }}>
              Write a Reader Review
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--md-sys-color-on-surface-variant)', marginTop: '4px' }}>
              Share your thoughts and insights on <em>When Rocks Cry Out</em>.
            </p>
          </div>

          <button className="m3-icon-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {success ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <CheckCircle size={48} color="var(--md-sys-color-success)" style={{ margin: '0 auto 16px auto' }} />
            <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>Review Submitted!</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
              Thank you for contributing to the historical discussion. Your review is now live.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {error && (
              <div style={{
                background: 'var(--md-sys-color-error-container)',
                color: 'var(--md-sys-color-on-error-container)',
                padding: '12px 16px',
                borderRadius: 'var(--md-shape-medium)',
                fontSize: '0.875rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            {/* Star Rating Select */}
            <div className="m3-input-group">
              <label className="m3-label">Overall Rating</label>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: '4px' }}
                  >
                    <Star
                      size={28}
                      fill={(hoverRating || rating) >= star ? '#C89745' : 'none'}
                      color="#C89745"
                    />
                  </button>
                ))}
                <span style={{ fontSize: '0.9rem', fontWeight: '700', marginLeft: '8px', color: '#C89745' }}>
                  {rating} of 5 Stars
                </span>
              </div>
            </div>

            {/* Review Headline */}
            <div className="m3-input-group">
              <label className="m3-label">Review Headline / Summary</label>
              <input
                className="m3-input"
                type="text"
                placeholder="e.g. Exceptional depth of research and biblical insights"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
              />
            </div>

            {/* Review Body */}
            <div className="m3-input-group">
              <label className="m3-label">Your Review <span style={{ color: 'var(--md-sys-color-error)' }}>*</span></label>
              <textarea
                className="m3-textarea"
                placeholder="Write your experience reading this book, what revelations surprised you most, and why you recommend it..."
                rows={4}
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            {/* Name & Location */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="m3-input-group">
                <label className="m3-label">Your Name or Alias</label>
                <input
                  className="m3-input"
                  type="text"
                  placeholder="e.g. Dr. H. Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="m3-input-group">
                <label className="m3-label">City, State or Country</label>
                <input
                  className="m3-input"
                  type="text"
                  placeholder="e.g. Dallas, TX"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
              <button type="button" className="m3-btn m3-btn-outlined" onClick={onClose}>
                Cancel
              </button>

              <button type="submit" className="m3-btn m3-btn-secondary" disabled={submitting}>
                <Send size={16} />
                <span>{submitting ? 'Publishing...' : 'Submit Review'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
