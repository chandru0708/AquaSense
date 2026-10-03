import React, { useState, useEffect } from 'react';
import { Droplets, Activity, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'problem', label: '01 PROBLEM' },
    { id: 'solution', label: '02 SOLUTION' },
    { id: 'innovations', label: '03 INNOVATIONS' },
    { id: 'strip', label: '04 TECHNOLOGY' },
    { id: 'workflow', label: '05 WORKFLOW' },
    { id: 'ai', label: '06 AI' },
    { id: 'monitoring', label: '07 MONITORING' },
    { id: 'prototype', label: '08 PROTOTYPE' },
    { id: 'impact', label: '09 IMPACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
      setScrolled(currentScroll > 40);

      // Simple active section detection
      const sections = ['hero', ...navLinks.map(l => l.id), 'live-demo'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
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
    <>
      {/* Top Scroll Progress Bar */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3.5px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00B8D9 0%, #00C9A7 50%, #FFD166 80%, #FF7A6B 100%)',
          zIndex: 1001,
          transition: 'width 0.1s ease-out'
        }}
      />

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(247, 251, 250, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: scrolled ? '1px solid rgba(0, 184, 217, 0.15)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(18, 60, 69, 0.05)' : 'none',
          padding: scrolled ? '0.75rem 0' : '1.1rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo & Sub-label */}
          <div 
            onClick={() => scrollToSection('hero')}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}
          >
            <div 
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00B8D9 0%, #00C9A7 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                boxShadow: '0 4px 14px rgba(0, 184, 217, 0.3)'
              }}
            >
              <Droplets size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#123C45' }}>
                  AquaSense
                </span>
                <span 
                  style={{ 
                    fontSize: '0.62rem', 
                    padding: '0.15rem 0.45rem', 
                    borderRadius: '4px', 
                    backgroundColor: 'rgba(0, 184, 217, 0.12)', 
                    color: '#087F8C', 
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  PS 26253
                </span>
              </div>
              <div 
                style={{ 
                  fontSize: '0.65rem', 
                  fontFamily: 'var(--font-mono)', 
                  letterSpacing: '0.12em', 
                  color: '#4B6E76', 
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}
              >
                FIELD WATER INTELLIGENCE
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div 
            style={{ 
              display: 'none', 
              alignItems: 'center', 
              gap: '1.25rem',
              '@media (min-width: 1024px)': { display: 'flex' }
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0.4rem 0.6rem',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: isActive ? 700 : 600,
                    letterSpacing: '0.05em',
                    color: isActive ? '#00B8D9' : '#334E58',
                    cursor: 'pointer',
                    borderRadius: '6px',
                    backgroundColor: isActive ? 'rgba(0, 184, 217, 0.08)' : 'transparent',
                    transition: 'all 0.2s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.target.style.color = '#00B8D9';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.target.style.color = '#334E58';
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Status Badge & Live Demo CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '999px',
                background: '#E6FAF6',
                border: '1px solid rgba(0, 201, 167, 0.35)',
                color: '#087F8C',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}
            >
              <span className="telemetry-dot online" />
              SYSTEM ONLINE
            </div>

            <button
              onClick={() => scrollToSection('live-demo')}
              className="btn-primary"
              style={{ 
                padding: '0.5rem 1.1rem', 
                fontSize: '0.78rem',
                borderRadius: '8px',
                display: 'none',
                '@media (min-width: 768px)': { display: 'inline-flex' }
              }}
              id="nav-live-demo-btn"
            >
              <Activity size={14} />
              LIVE DEMO
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(18, 60, 69, 0.15)',
                borderRadius: '8px',
                padding: '0.45rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#123C45'
              }}
              className="mobile-toggle"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            style={{
              padding: '1.25rem 1.5rem',
              backgroundColor: '#FFFFFF',
              borderTop: '1px solid rgba(0, 184, 217, 0.15)',
              boxShadow: '0 12px 28px rgba(18, 60, 69, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem'
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  padding: '0.6rem 0.5rem',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  color: activeSection === link.id ? '#00B8D9' : '#123C45',
                  cursor: 'pointer',
                  borderBottom: '1px solid rgba(18, 60, 69, 0.05)'
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('live-demo')}
              className="btn-primary"
              style={{ marginTop: '0.75rem', width: '100%', padding: '0.75rem' }}
            >
              <Activity size={16} />
              RUN LIVE FIELD DEMO
            </button>
          </div>
        )}
      </nav>

      {/* Responsive CSS helper for navbar */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (min-width: 768px) {
          #nav-live-demo-btn { display: inline-flex !important; }
        }
      `}</style>
    </>
  );
}
