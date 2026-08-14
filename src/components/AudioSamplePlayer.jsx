import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, Sparkles, Headphones } from 'lucide-react';

export default function AudioSamplePlayer({ isOpen, onClose, onOrderAudio }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(15);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="m3-scrim" onClick={onClose}>
      <div 
        className="m3-dialog" 
        onClick={(e) => e.stopPropagation()} 
        style={{
          maxWidth: '520px',
          background: 'linear-gradient(180deg, #15251C 0%, #0C1610 100%)',
          color: '#FAF8F4',
          padding: '32px 28px',
          border: '1px solid rgba(200, 151, 69, 0.35)'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Headphones size={18} color="#C89745" />
            <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C89745' }}>
              Dramatic Audiobook Preview
            </span>
          </div>

          <button className="m3-icon-btn m3-icon-btn-light" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Audiobook Album Track Art */}
        <div style={{ textAlign: 'center', margin: '16px 0 28px 0' }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: 'var(--md-shape-large)',
            background: 'linear-gradient(135deg, #244933 0%, #112117 100%)',
            border: '2px solid rgba(200, 151, 69, 0.4)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            margin: '0 auto 20px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Headphones size={44} color="#C89745" />
          </div>

          <h3 style={{
            fontFamily: 'var(--font-serif-display)',
            fontSize: '1.4rem',
            marginBottom: '4px',
            color: '#FAF8F4'
          }}>
            Chapter 1: The Friar's Forbidden Trail
          </h3>

          <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>
            Narrated from Horace Butler's <em>When Rocks Cry Out</em>
          </div>
        </div>

        {/* Simulated Waveform Visualizer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          height: '48px',
          marginBottom: '20px'
        }}>
          {[...Array(36)].map((_, i) => {
            const isActive = (i / 36) * 100 <= progress;
            const barHeight = isPlaying 
              ? Math.max(12, Math.sin(i * 0.5 + Date.now() * 0.005) * 36 + 12)
              : [16, 24, 38, 20, 44, 28, 14, 32, 48, 22, 18, 36, 42, 26, 16, 30, 44, 20, 36, 24, 18, 40, 32, 16, 28, 38, 20, 14, 30, 42, 24, 16, 32, 20, 14, 24][i % 36];

            return (
              <div
                key={i}
                style={{
                  width: '3px',
                  height: `${barHeight}px`,
                  backgroundColor: isActive ? '#C89745' : 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '999px',
                  transition: 'height 0.15s ease, background-color 0.15s ease'
                }}
              />
            );
          })}
        </div>

        {/* Progress Bar & Timestamps */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '999px',
            overflow: 'hidden',
            cursor: 'pointer'
          }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: '#C89745',
              transition: 'width 0.2s linear'
            }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', marginTop: '8px' }}>
            <span>0:{String(Math.floor(progress * 1.8)).padStart(2, '0')}</span>
            <span>3:00</span>
          </div>
        </div>

        {/* Playback Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '28px' }}>
          <button 
            className="m3-icon-btn m3-icon-btn-light" 
            onClick={() => setProgress(0)}
            title="Restart Sample"
          >
            <RotateCcw size={18} />
          </button>

          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#C89745',
              color: '#12241b',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(200, 151, 69, 0.4)',
              transition: 'transform 0.15s ease'
            }}
          >
            {isPlaying ? <Pause size={24} fill="#12241b" /> : <Play size={24} fill="#12241b" style={{ marginLeft: '3px' }} />}
          </button>

          <button 
            className="m3-icon-btn m3-icon-btn-light" 
            onClick={() => setMuted(!muted)}
            title={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>

        {/* CTA to get complete audiobook */}
        <button 
          className="m3-btn m3-btn-secondary"
          onClick={() => {
            onClose();
            if (onOrderAudio) onOrderAudio();
          }}
          style={{ width: '100%' }}
        >
          <span>Get Full 9-Hour Unabridged Audio Edition</span>
        </button>
      </div>
    </div>
  );
}
