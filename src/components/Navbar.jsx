import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, BookOpen, Star, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenCheckout, onOpenLookInside }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Left Nav Links */}
        <nav className="nav-links">
          <a href="#discoveries" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('discoveries'); }}>
            Discoveries
          </a>
          <a href="#synopsis" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('synopsis'); }}>
            Synopsis
          </a>
          <a href="#revelations" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('revelations'); }}>
            Revelations
          </a>
          <a href="#reviews" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>
            Reviews
          </a>
        </nav>

        {/* Center Logo matching wrco.png */}
        <a href="#" className="brand-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <span>When Rocks Cry Out</span>
        </a>

        {/* Right Nav Links & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <nav className="nav-links">
            <a href="#author" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('author'); }}>
              Author
            </a>
            <a href="#editions" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('editions'); }}>
              Editions
            </a>
            <a href="#faq" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>
              FAQ
            </a>
          </nav>

          {/* Cart Icon Button */}
          <button 
            className="m3-icon-btn m3-icon-btn-light" 
            onClick={onOpenCart}
            aria-label="View Cart"
            style={{ position: 'relative' }}
          >
            <ShoppingBag size={20} color="#FAF8F4" />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '4px',
                right: '4px',
                backgroundColor: 'var(--md-sys-color-secondary)',
                color: '#1a1508',
                fontSize: '0.7rem',
                fontWeight: '700',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Order Book CTA Button */}
          <button 
            className="m3-btn m3-btn-secondary m3-btn-sm"
            onClick={() => scrollToSection('editions')}
            style={{ display: 'none', '@media (min-width: 640px)': { display: 'inline-flex' } }}
          >
            <BookOpen size={16} />
            <span>Order Copy</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="m3-icon-btn m3-icon-btn-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: 'flex', '@media (min-width: 1024px)': { display: 'none' } }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} color="#FFF" /> : <Menu size={24} color="#FFF" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 'var(--header-height)',
          left: 0,
          right: 0,
          background: 'rgba(15, 26, 20, 0.98)',
          backdropFilter: 'blur(16px)',
          padding: '24px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 890,
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <a href="#discoveries" className="nav-link" style={{ fontSize: '1rem' }} onClick={(e) => { e.preventDefault(); scrollToSection('discoveries'); }}>Discoveries</a>
          <a href="#synopsis" className="nav-link" style={{ fontSize: '1rem' }} onClick={(e) => { e.preventDefault(); scrollToSection('synopsis'); }}>Synopsis</a>
          <a href="#revelations" className="nav-link" style={{ fontSize: '1rem' }} onClick={(e) => { e.preventDefault(); scrollToSection('revelations'); }}>The Revelations</a>
          <a href="#reviews" className="nav-link" style={{ fontSize: '1rem' }} onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }}>Reader Reviews</a>
          <a href="#author" className="nav-link" style={{ fontSize: '1rem' }} onClick={(e) => { e.preventDefault(); scrollToSection('author'); }}>Author Horace Butler</a>
          <a href="#editions" className="nav-link" style={{ fontSize: '1rem' }} onClick={(e) => { e.preventDefault(); scrollToSection('editions'); }}>Book Editions & Pricing</a>
          <a href="#faq" className="nav-link" style={{ fontSize: '1rem' }} onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a>
          
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <button className="m3-btn m3-btn-secondary" style={{ flex: 1 }} onClick={() => scrollToSection('editions')}>
              Order Book Now
            </button>
            <button className="m3-btn m3-btn-outlined-light" style={{ flex: 1 }} onClick={() => { setMobileMenuOpen(false); onOpenLookInside(); }}>
              Look Inside
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
