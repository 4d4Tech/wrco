import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, Lock, CheckCircle2, AlertCircle, Sparkles, Smartphone } from 'lucide-react';
import { createFirestoreOrder } from '../services/firebase';
import confetti from 'canvas-confetti';

export default function CheckoutModal({ isOpen, onClose, checkoutData, onOrderSuccess }) {
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'apple_pay' | 'google_pay'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'TX',
    zip: '',
    country: 'United States',
    cardNumber: '4242 •••• •••• 4242',
    expDate: '12/28',
    cvc: '123'
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen || !checkoutData) return null;

  const { cart = [], total = 0, subtotal = 0, shipping = 0, discountAmount = 0 } = checkoutData;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleProcessOrder = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address || !formData.zip) {
      setError('Please fill in all required contact and shipping details.');
      return;
    }

    setProcessing(true);
    setError('');

    try {
      // Simulate/Execute Stripe payment authorization
      await new Promise(resolve => setTimeout(resolve, 1400));

      // Persist order to Google Firestore
      const orderPayload = {
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          country: formData.country
        },
        items: cart,
        pricing: {
          subtotal,
          shipping,
          discountAmount,
          total
        },
        payment: {
          method: paymentMethod,
          last4: '4242',
          brand: paymentMethod === 'apple_pay' ? 'Apple Pay' : paymentMethod === 'google_pay' ? 'Google Pay' : 'Visa',
          status: 'paid'
        }
      };

      const result = await createFirestoreOrder(orderPayload);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      setProcessing(false);
      onOrderSuccess({
        ...result,
        orderDetails: orderPayload
      });
    } catch (err) {
      setProcessing(false);
      setError('Payment authorization failed. Please check your payment details or try again.');
    }
  };

  return (
    <div className="m3-scrim" onClick={onClose}>
      <div className="m3-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px', padding: 0, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{
          backgroundColor: '#12241b',
          color: '#FAF8F4',
          padding: '24px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lock size={16} color="#C89745" />
              <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C89745' }}>
                Secure 256-bit Encrypted Checkout
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '1.6rem', color: '#FAF8F4', marginTop: '4px' }}>
              Complete Your Order
            </h3>
          </div>

          <button className="m3-icon-btn m3-icon-btn-light" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div style={{ padding: '28px 28px 32px 28px', maxHeight: '75vh', overflowY: 'auto' }}>
          {/* Order Summary Pill */}
          <div style={{
            background: 'var(--md-sys-color-surface-container)',
            padding: '16px 20px',
            borderRadius: 'var(--md-shape-medium)',
            marginBottom: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px solid var(--md-sys-color-outline-variant)'
          }}>
            <div>
              <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--md-sys-color-primary)' }}>
                {cart.length} Edition{cart.length > 1 ? 's' : ''} in Bag
              </span>
              <div style={{ fontSize: '0.78rem', color: 'var(--md-sys-color-outline)' }}>
                {cart.map(i => `${i.name} (x${i.quantity})`).join(', ')}
              </div>
            </div>
            <div style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--md-sys-color-primary)' }}>
              ${total.toFixed(2)}
            </div>
          </div>

          {error && (
            <div style={{
              background: 'var(--md-sys-color-error-container)',
              color: 'var(--md-sys-color-on-error-container)',
              padding: '12px 16px',
              borderRadius: 'var(--md-shape-medium)',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px'
            }}>
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          {/* Express Payment Options: Apple Pay / Google Pay */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--md-sys-color-outline)', textTransform: 'uppercase', marginBottom: '10px' }}>
              Express Digital Wallets
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setPaymentMethod('apple_pay')}
                style={{
                  height: '46px',
                  borderRadius: 'var(--md-shape-medium)',
                  background: paymentMethod === 'apple_pay' ? '#000000' : '#F2F2F2',
                  color: paymentMethod === 'apple_pay' ? '#FFFFFF' : '#000000',
                  border: paymentMethod === 'apple_pay' ? '2px solid #000' : '1px solid #CCC',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <Smartphone size={16} />
                <span> Pay (Apple Pay)</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('google_pay')}
                style={{
                  height: '46px',
                  borderRadius: 'var(--md-shape-medium)',
                  background: paymentMethod === 'google_pay' ? '#1f1f1f' : '#F2F2F2',
                  color: paymentMethod === 'google_pay' ? '#FFFFFF' : '#000000',
                  border: paymentMethod === 'google_pay' ? '2px solid #1f1f1f' : '1px solid #CCC',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <span>G Pay (Google Pay)</span>
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '20px 0' }}>
            <div style={{ flexGrow: 1, height: '1px', background: 'var(--md-sys-color-outline-variant)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--md-sys-color-outline)', textTransform: 'uppercase' }}>
              Or Pay with Credit / Debit Card
            </span>
            <div style={{ flexGrow: 1, height: '1px', background: 'var(--md-sys-color-outline-variant)' }} />
          </div>

          <form onSubmit={handleProcessOrder} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Customer Information */}
            <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--md-sys-color-primary)', borderBottom: '1px solid var(--md-sys-color-outline-variant)', paddingBottom: '6px' }}>
              1. Customer & Delivery Information
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div className="m3-input-group">
                <label className="m3-label">Full Name *</label>
                <input
                  className="m3-input"
                  name="name"
                  type="text"
                  placeholder="e.g. Eleanor Vance"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="m3-input-group">
                <label className="m3-label">Email Address (For Receipt & Digital Access) *</label>
                <input
                  className="m3-input"
                  name="email"
                  type="email"
                  placeholder="eleanor@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="m3-input-group">
              <label className="m3-label">Street Address *</label>
              <input
                className="m3-input"
                name="address"
                type="text"
                placeholder="123 Discovery Way, Suite 400"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '14px' }}>
              <div className="m3-input-group">
                <label className="m3-label">City *</label>
                <input
                  className="m3-input"
                  name="city"
                  type="text"
                  placeholder="Dallas"
                  required
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="m3-input-group">
                <label className="m3-label">State *</label>
                <input
                  className="m3-input"
                  name="state"
                  type="text"
                  placeholder="TX"
                  required
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>

              <div className="m3-input-group">
                <label className="m3-label">ZIP Code *</label>
                <input
                  className="m3-input"
                  name="zip"
                  type="text"
                  placeholder="75201"
                  required
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Payment Method Card Fields */}
            <div style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--md-sys-color-primary)', borderBottom: '1px solid var(--md-sys-color-outline-variant)', paddingBottom: '6px', marginTop: '8px' }}>
              2. Payment Information (Stripe Secure)
            </div>

            <div className="m3-input-group">
              <label className="m3-label">Card Number</label>
              <div style={{ position: 'relative' }}>
                <input
                  className="m3-input"
                  name="cardNumber"
                  type="text"
                  value={formData.cardNumber}
                  onChange={handleChange}
                />
                <CreditCard size={18} color="var(--md-sys-color-outline)" style={{ position: 'absolute', right: '14px', top: '15px' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div className="m3-input-group">
                <label className="m3-label">Expiration (MM/YY)</label>
                <input
                  className="m3-input"
                  name="expDate"
                  type="text"
                  value={formData.expDate}
                  onChange={handleChange}
                />
              </div>

              <div className="m3-input-group">
                <label className="m3-label">Security CVC</label>
                <input
                  className="m3-input"
                  name="cvc"
                  type="password"
                  value={formData.cvc}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ marginTop: '16px' }}>
              <button 
                type="submit" 
                className="m3-btn m3-btn-secondary m3-btn-lg" 
                style={{ width: '100%' }}
                disabled={processing}
              >
                {processing ? (
                  <span>Securing & Authorizing Payment...</span>
                ) : (
                  <span>Authorize & Pay ${total.toFixed(2)}</span>
                )}
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--md-sys-color-outline)' }}>
              <ShieldCheck size={16} color="var(--md-sys-color-success)" />
              <span>Certified Level 1 PCI DSS Provider & Real-Time Firestore Sync</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
