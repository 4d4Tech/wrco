import React from 'react';
import { CheckCircle, Package, Truck, Printer, Download, Sparkles, X } from 'lucide-react';

export default function OrderSuccessModal({ isOpen, onClose, orderResult }) {
  if (!isOpen || !orderResult) return null;

  const { orderId, trackingNumber, estimatedDelivery, orderDetails } = orderResult;
  const deliveryFormatted = new Date(estimatedDelivery || Date.now() + 4 * 86400000).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="m3-scrim" onClick={onClose}>
      <div className="m3-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px', padding: '36px 32px' }}>
        {/* Close Button */}
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <button className="m3-icon-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Celebratory Icon */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            backgroundColor: 'rgba(30, 126, 52, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto'
          }}>
            <CheckCircle size={44} color="var(--md-sys-color-success)" />
          </div>

          <span className="m3-badge m3-badge-green" style={{ marginBottom: '8px' }}>
            Payment Authorized & Confirmed
          </span>

          <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '2rem', color: 'var(--md-sys-color-primary)', marginTop: '6px' }}>
            Thank You for Your Order!
          </h3>

          <p style={{ fontSize: '0.9rem', color: 'var(--md-sys-color-on-surface-variant)', marginTop: '6px' }}>
            Your official edition of <em>When Rocks Cry Out</em> is being prepared for expedited dispatch.
          </p>
        </div>

        {/* Order Meta Box */}
        <div style={{
          background: 'var(--md-sys-color-surface-container-low)',
          border: '1px solid var(--md-sys-color-outline-variant)',
          borderRadius: 'var(--md-shape-large)',
          padding: '20px 24px',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)', textTransform: 'uppercase', fontWeight: '700' }}>
                Order Number
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--md-sys-color-primary)', fontFamily: 'monospace', marginTop: '2px' }}>
                {orderId}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)', textTransform: 'uppercase', fontWeight: '700' }}>
                Tracking Code
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--md-sys-color-secondary)', fontFamily: 'monospace', marginTop: '2px' }}>
                {trackingNumber}
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            borderTop: '1px solid var(--md-sys-color-outline-variant)',
            paddingTop: '14px'
          }}>
            <Truck size={20} color="var(--md-sys-color-primary)" />
            <div style={{ fontSize: '0.875rem' }}>
              Estimated Delivery: <strong>{deliveryFormatted}</strong> via USPS Priority Tracked
            </div>
          </div>
        </div>

        {/* Customer & Shipping Summary */}
        {orderDetails && (
          <div style={{ marginBottom: '24px', fontSize: '0.875rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
            <div style={{ fontWeight: '700', color: 'var(--md-sys-color-on-surface)', marginBottom: '4px' }}>
              Shipping to:
            </div>
            <div>{orderDetails.customer.name}</div>
            <div>{orderDetails.customer.address}, {orderDetails.customer.city}, {orderDetails.customer.state} {orderDetails.customer.zip}</div>
            <div style={{ marginTop: '4px', color: 'var(--md-sys-color-primary)', fontWeight: '600' }}>
              Receipt sent to: {orderDetails.customer.email}
            </div>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="m3-btn m3-btn-outlined" onClick={handlePrint} style={{ flex: 1 }}>
            <Printer size={16} />
            <span>Print Receipt</span>
          </button>

          <button className="m3-btn m3-btn-primary" onClick={onClose} style={{ flex: 1 }}>
            <span>Back to Store</span>
          </button>
        </div>
      </div>
    </div>
  );
}
