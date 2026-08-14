import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart = [], onUpdateQuantity, onRemoveItem, onProceedToCheckout, onBrowseEditions }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const shipping = subtotal > 50 || cart.every(i => i.id === 'digital') || cart.length === 0 ? 0 : 4.95;
  const total = Math.max(0, subtotal - discountAmount + shipping);
  const freeShippingThreshold = 50;
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const applyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'BESTSELLER' || code === 'WRCO10' || code === 'HISTORIAN') {
      setDiscountPercent(10);
      setPromoSuccess('Promo applied: 10% discount!');
      setPromoError('');
    } else if (code === 'FREESHIP') {
      setDiscountPercent(0);
      setPromoSuccess('Free priority shipping unlocked!');
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try BESTSELLER');
      setPromoSuccess('');
    }
  };

  return (
    <div className="m3-scrim" onClick={onClose}>
      <div className="m3-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid var(--md-sys-color-outline-variant)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} color="var(--md-sys-color-primary)" />
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.4rem', color: 'var(--md-sys-color-primary)' }}>
              Your Bag ({cart.reduce((c, i) => c + i.quantity, 0)})
            </h3>
          </div>

          <button className="m3-icon-btn" onClick={onClose} aria-label="Close Bag">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{
          padding: '14px 24px',
          backgroundColor: 'var(--md-sys-color-surface-container)',
          borderBottom: '1px solid var(--md-sys-color-outline-variant)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontWeight: '600', marginBottom: '6px' }}>
            <span>
              {subtotal >= freeShippingThreshold ? '🎉 You have unlocked Free US Shipping!' : `Add $${(freeShippingThreshold - subtotal).toFixed(2)} for Free Shipping`}
            </span>
            <span>{Math.round(freeShippingProgress)}%</span>
          </div>

          <div style={{ height: '6px', backgroundColor: 'var(--md-sys-color-surface-variant)', borderRadius: '999px', overflow: 'hidden' }}>
            <div style={{ width: `${freeShippingProgress}%`, height: '100%', backgroundColor: 'var(--md-sys-color-primary)', transition: 'width 0.3s ease' }} />
          </div>
        </div>

        {/* Cart Item List */}
        <div style={{ flexGrow: 1, overflowY: 'auto', padding: '24px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <ShoppingBag size={48} color="var(--md-sys-color-outline)" style={{ margin: '0 auto 16px auto', opacity: 0.5 }} />
              <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '8px' }}>Your bag is empty</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '24px' }}>
                Select an official edition of <em>When Rocks Cry Out</em> to begin your order.
              </p>
              <button className="m3-btn m3-btn-primary" onClick={() => { onClose(); onBrowseEditions(); }}>
                Browse Editions
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cart.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    paddingBottom: '20px',
                    borderBottom: '1px solid var(--md-sys-color-outline-variant)'
                  }}
                >
                  {/* Book Thumbnail */}
                  <div style={{
                    width: '64px',
                    height: '92px',
                    borderRadius: 'var(--md-shape-small)',
                    overflow: 'hidden',
                    border: '1px solid rgba(200, 151, 69, 0.4)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    flexShrink: 0,
                    backgroundColor: '#000'
                  }}>
                    <img 
                      src="/book-cover.png" 
                      alt={item.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>

                  {/* Item Details */}
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--md-sys-color-primary)', lineHeight: '1.2' }}>
                        {item.name}
                      </h4>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        style={{ background: 'none', border: 'none', color: 'var(--md-sys-color-outline)', cursor: 'pointer', padding: '2px' }}
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div style={{ fontSize: '0.78rem', color: 'var(--md-sys-color-outline)', margin: '4px 0 10px 0' }}>
                      {item.format}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      {/* Quantity Selector */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'var(--md-sys-color-surface-container)',
                        borderRadius: 'var(--md-shape-full)',
                        padding: '2px 8px'
                      }}>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '4px' }}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', minWidth: '16px', textAlign: 'center' }}>
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '4px' }}
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <span style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--md-sys-color-on-surface)' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Promo Code Form */}
              <form onSubmit={applyPromo} style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                <input
                  type="text"
                  placeholder="Promo Code (e.g. BESTSELLER)"
                  className="m3-input"
                  style={{ height: '40px', fontSize: '0.84rem' }}
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button type="submit" className="m3-btn m3-btn-tonal m3-btn-sm" style={{ height: '40px', flexShrink: 0 }}>
                  Apply
                </button>
              </form>
              {promoSuccess && <div style={{ fontSize: '0.78rem', color: 'var(--md-sys-color-success)', fontWeight: '600' }}>{promoSuccess}</div>}
              {promoError && <div style={{ fontSize: '0.78rem', color: 'var(--md-sys-color-error)', fontWeight: '600' }}>{promoError}</div>}
            </div>
          )}
        </div>

        {/* Drawer Footer & Checkout Button */}
        {cart.length > 0 && (
          <div style={{
            padding: '24px',
            backgroundColor: 'var(--md-sys-color-surface-container-low)',
            borderTop: '1px solid var(--md-sys-color-outline-variant)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {discountPercent > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--md-sys-color-success)', fontWeight: '600' }}>
                  <span>Discount ({discountPercent}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
                <span>Shipping</span>
                <span>{shipping === 0 ? <strong style={{ color: 'var(--md-sys-color-success)' }}>FREE</strong> : `$${shipping.toFixed(2)}`}</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.25rem',
                fontWeight: '800',
                color: 'var(--md-sys-color-primary)',
                borderTop: '1px solid var(--md-sys-color-outline-variant)',
                paddingTop: '12px',
                marginTop: '4px'
              }}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              className="m3-btn m3-btn-secondary m3-btn-lg"
              onClick={() => {
                onClose();
                onProceedToCheckout({ cart, subtotal, discountAmount, shipping, total });
              }}
              style={{ width: '100%' }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginTop: '14px', fontSize: '0.75rem', color: 'var(--md-sys-color-outline)' }}>
              <ShieldCheck size={14} color="var(--md-sys-color-success)" />
              <span>256-Bit SSL Encrypted & Stripe Secured</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
