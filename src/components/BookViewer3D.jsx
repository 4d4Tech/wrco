import React, { useState, useRef } from 'react';
import { Eye, Award } from 'lucide-react';

export default function BookViewer3D({ onOpenLookInside }) {
  const [rotation, setRotation] = useState({ x: 6, y: -16 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Smooth angle mapping
    const rotateY = (x / (rect.width / 2)) * 24 - 10;
    const rotateX = -(y / (rect.height / 2)) * 18 + 4;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 6, y: -16 });
  };

  return (
    <div 
      ref={containerRef}
      className="book-3d-scene"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ userSelect: 'none' }}
    >
      <div 
        className="book-3d"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.05 : 1})`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s var(--md-motion-standard)',
        }}
        onClick={onOpenLookInside}
        title="Click to Look Inside the Book"
      >
        {/* Spine */}
        <div className="book-spine">
          <span className="book-spine-text">WHEN ROCKS CRY OUT &nbsp;•&nbsp; HORACE BUTLER</span>
        </div>

        {/* Page Edges Depth */}
        <div className="book-pages-side" />

        {/* Front Cover with the authentic book-cover.png design */}
        <div className="book-front-cover" style={{ padding: 0, backgroundColor: '#000000' }}>
          <img 
            src="/book-cover.png" 
            alt="When Rocks Cry Out by Horace Butler"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />

          {/* Realistic light gloss overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(105deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 25%, transparent 45%, rgba(0,0,0,0.3) 100%)',
            pointerEvents: 'none'
          }} />

          {/* Left spine depth shadow */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '18px',
            background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, transparent 100%)',
            pointerEvents: 'none'
          }} />
        </div>
      </div>

      {/* Floating Action Badge to Look Inside */}
      <button 
        className="m3-btn m3-btn-tonal m3-btn-sm"
        onClick={onOpenLookInside}
        style={{
          position: 'absolute',
          bottom: '-12px',
          background: 'rgba(255, 255, 255, 0.95)',
          color: 'var(--md-sys-color-primary)',
          fontWeight: '700',
          boxShadow: 'var(--md-sys-elevation-3)',
          zIndex: 10
        }}
      >
        <Eye size={15} />
        <span>Click to Look Inside</span>
      </button>
    </div>
  );
}
