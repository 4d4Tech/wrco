import React from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function Snackbar({ message, type = 'success', onClose }) {
  if (!message) return null;

  return (
    <div className="m3-snackbar">
      {type === 'success' && <CheckCircle size={18} color="var(--md-sys-color-secondary)" />}
      {type === 'error' && <AlertCircle size={18} color="var(--md-sys-color-error)" />}
      {type === 'info' && <Info size={18} color="#FFF" />}

      <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{message}</span>

      <button 
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.7)',
          cursor: 'pointer',
          padding: '2px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
