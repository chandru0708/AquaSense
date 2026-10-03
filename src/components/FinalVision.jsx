import React from 'react';
import { 
  Droplets, 
  ArrowUp, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  Award,
  Layers
} from 'lucide-react';

export default function FinalVision() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToDemo = () => {
    const el = document.getElementById('live-demo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="final-vision" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #F5FBFB 0%, #E6FAF6 50%, #F0F9FF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Wave Background SVG */}
      <div className="liquid-wave-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 400" fill="none" style={{ width: '100%', height: '100%', opacity: 0.5 }}>
          <path 
            d="M0,120 C360,240 720,40 1080,180 C1260,250 1380,160 1440,140 L1440,400 L0,400 Z" 
            fill="url(#final-water-grad)" 
          />
          <defs>
            <linearGradient id="final-water-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00B8D9" stopOpacity="0.15" />
              <stop offset="40%" stopColor="#00C9A7" stopOpacity="0.12" />
              <stop offset="70%" stopColor="#A78BFA" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#FF7A6B" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        
        {/* National Jal Jeevan Mission Context Badge */}
        <div 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.45rem 1.1rem',
            borderRadius: '100px',
            background: 'linear-gradient(90deg, #E0FAF5 0%, #EBF8FC 100%)',
            border: '1.5px solid rgba(0, 201, 167, 0.4)',
            color: '#087F8C',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
            letterSpacing: '0.08em',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 15px rgba(0, 184, 217, 0.1)'
          }}
        >
          <Award size={15} color="#00C9A7" />
          SMART INDIA HACKATHON 2026 • PS 26253 • MINISTRY OF JAL SHAKTI
        </div>

        {/* Large Vision Heading */}
        <h2 
          style={{ 
            fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', 
            fontWeight: 800, 
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            color: '#123C45',
            marginBottom: '0.75rem'
          }}
        >
          FROM WATER TESTING
          <br />
          <span 
            style={{
              background: 'linear-gradient(90deg, #00B8D9 0%, #00C9A7 30%, #7AE7C7 50%, #8B5CF6 80%, #FF7A6B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            TO WATER INTELLIGENCE.
          </span>
        </h2>

        {/* Second Line Tagline */}
        <div 
          style={{
            fontSize: 'clamp(1.1rem, 1.6vw, 1.45rem)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 800,
            letterSpacing: '0.12em',
            color: '#087F8C',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}
        >
          SENSE. VALIDATE. RECORD. MONITOR.
        </div>

        {/* Supporting Paragraph */}
        <p 
          style={{
            fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
            color: '#335560',
            maxWidth: '680px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.7
          }}
        >
          AquaSense transforms a simple FRC strip into a field-ready digital monitoring workflow designed for scalable water-quality surveillance under the National Jal Jeevan Mission.
        </p>

        {/* Action CTAs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={scrollToDemo}
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '1rem 2.2rem' }}
          >
            <Activity size={18} />
            <span>RUN LIVE DEMO AGAIN</span>
          </button>

          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ fontSize: '1rem', padding: '1rem 1.8rem' }}
          >
            <ArrowUp size={18} />
            <span>RETURN TO TOP</span>
          </button>
        </div>

      </div>
    </section>
  );
}
