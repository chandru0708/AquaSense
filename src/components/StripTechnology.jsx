import React, { useState } from 'react';
import { 
  FlaskConical, 
  Droplet, 
  QrCode, 
  CheckCircle2, 
  Layers, 
  AlertCircle,
  Sparkles,
  Info
} from 'lucide-react';

export default function StripTechnology() {
  const [reactionLevel, setReactionLevel] = useState('medium'); // 'low', 'medium', 'high'
  const [dropletActive, setDropletActive] = useState(false);

  const levelConfigs = {
    low: {
      ppm: "0.08 ppm",
      color: "#FDE68A", // yellow
      status: "LOW / BELOW TARGET",
      description: "Insufficient chlorine protection; micro-biologically vulnerable"
    },
    medium: {
      ppm: "0.42 ppm",
      color: "#F59E0B", // orange
      status: "OPTIMAL DRINKING LEVEL",
      description: "Standard potable target complying with BIS 10500 residual guidelines"
    },
    high: {
      ppm: "1.65 ppm",
      color: "#FF7A6B", // coral
      status: "ELEVATED POST-DOSING",
      description: "Safe for distribution network buffer, indicates recent primary chlorination"
    }
  };

  const handleSimulateDrop = () => {
    setDropletActive(true);
    setTimeout(() => {
      setDropletActive(false);
    }, 1800);
  };

  return (
    <section 
      id="strip" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #FFFDF8 0%, #FFFFFF 50%, #FFF9F5 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div 
            className="section-label"
            style={{ 
              background: '#FEF3C7', 
              color: '#B45309', 
              border: '1px solid #FDE68A' 
            }}
          >
            <FlaskConical size={14} color="#D97706" />
            SECTION 04 • STRIP TECHNOLOGY
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            THE AQUASENSE STRIP
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A precision-engineered biochemical interface featuring multi-zone spatial separation, embedded optical normalization, and digital batch traceability.
          </p>
        </div>

        {/* Laboratory Strip Workbench */}
        <div 
          className="sci-card"
          style={{
            background: '#FFFFFF',
            border: '1.5px solid rgba(255, 184, 107, 0.35)',
            boxShadow: '0 16px 40px rgba(255, 184, 107, 0.12)',
            padding: '2.5rem',
            marginBottom: '3rem',
            position: 'relative'
          }}
        >
          {/* Top Bar of Workbench */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#C2410C' }}>
                MICRO-FLUIDIC REACTION SIMULATOR
              </span>
              <div style={{ fontSize: '0.85rem', color: '#64748B' }}>
                Interactive Zone Examination &amp; Reaction Kinetics
              </div>
            </div>

            {/* Chlorine Level Selector Buttons */}
            <div style={{ display: 'flex', gap: '0.5rem', background: '#F8FAFC', padding: '0.35rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
              <button
                onClick={() => setReactionLevel('low')}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                  border: 'none',
                  background: reactionLevel === 'low' ? '#FDE68A' : 'transparent',
                  color: '#92400E',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer'
                }}
              >
                LOW FRC (0.08 ppm)
              </button>
              <button
                onClick={() => setReactionLevel('medium')}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                  border: 'none',
                  background: reactionLevel === 'medium' ? '#F59E0B' : 'transparent',
                  color: reactionLevel === 'medium' ? '#FFFFFF' : '#92400E',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer'
                }}
              >
                OPTIMAL (0.42 ppm)
              </button>
              <button
                onClick={() => setReactionLevel('high')}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '6px',
                  border: 'none',
                  background: reactionLevel === 'high' ? '#FF7A6B' : 'transparent',
                  color: reactionLevel === 'high' ? '#FFFFFF' : '#92400E',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer'
                }}
              >
                HIGH FRC (1.65 ppm)
              </button>
            </div>
          </div>

          {/* LARGE ENLARGED TEST STRIP DIAGRAM */}
          <div 
            style={{
              background: 'linear-gradient(180deg, #FBFDFD 0%, #F5FBFB 100%)',
              border: '2px solid rgba(0, 184, 217, 0.25)',
              borderRadius: '20px',
              padding: '2.5rem 1.5rem',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '2rem'
            }}
          >
            {/* The Strip Body */}
            <div 
              style={{
                maxWidth: '820px',
                margin: '0 auto',
                background: '#FFFFFF',
                borderRadius: '14px',
                border: '2px solid #CBD5E1',
                boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                padding: '1.25rem 2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '1.5rem',
                alignItems: 'center',
                position: 'relative'
              }}
            >
              {/* Sample Zone */}
              <div style={{ textAlign: 'center', position: 'relative' }}>
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: '#E0F8FC',
                    border: '2px dashed #00B8D9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.75rem auto',
                    position: 'relative'
                  }}
                >
                  <Droplet 
                    size={28} 
                    color="#00B8D9" 
                    style={{
                      transform: dropletActive ? 'translateY(12px) scale(1.2)' : 'none',
                      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }} 
                  />
                </div>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#0088A3' }}>
                  SAMPLE ZONE
                </div>
                <div style={{ fontSize: '0.65rem', color: '#64748B' }}>15μL Capillary Pad</div>
              </div>

              {/* Reaction Zone (Animated color) */}
              <div style={{ textAlign: 'center' }}>
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: levelConfigs[reactionLevel].color,
                    border: '2px solid #EA580C',
                    boxShadow: `0 0 20px ${levelConfigs[reactionLevel].color}80`,
                    margin: '0 auto 0.75rem auto',
                    transition: 'all 0.6s ease'
                  }}
                />
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#C2410C' }}>
                  REACTION ZONE
                </div>
                <div style={{ fontSize: '0.65rem', color: '#EA580C', fontWeight: 700 }}>
                  {levelConfigs[reactionLevel].ppm}
                </div>
              </div>

              {/* Control Zone */}
              <div style={{ textAlign: 'center' }}>
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: '#7AE7C7',
                    border: '2px solid #059669',
                    boxShadow: '0 0 15px rgba(122, 231, 199, 0.5)',
                    margin: '0 auto 0.75rem auto'
                  }}
                />
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#047857' }}>
                  CONTROL ZONE
                </div>
                <div style={{ fontSize: '0.65rem', color: '#059669', fontWeight: 600 }}>Active Hydration OK</div>
              </div>

              {/* Optical Reference */}
              <div style={{ textAlign: 'center' }}>
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: '#A78BFA',
                    border: '2px solid #7C3AED',
                    boxShadow: '0 0 15px rgba(167, 139, 250, 0.5)',
                    margin: '0 auto 0.75rem auto'
                  }}
                />
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#6D28D9' }}>
                  OPTICAL REFERENCE
                </div>
                <div style={{ fontSize: '0.65rem', color: '#7C3AED', fontWeight: 600 }}>White Balance Baseline</div>
              </div>

            </div>

            {/* Droplet Simulation Trigger */}
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button
                onClick={handleSimulateDrop}
                className="btn-secondary"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
              >
                <Droplet size={16} color="#00B8D9" />
                SIMULATE WATER SAMPLE INGESTION
              </button>
            </div>
          </div>

          {/* Batch Identity & Chemical Disclaimer Card */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            
            {/* Digital Batch Metadata Card */}
            <div 
              style={{
                background: '#F8FAFC',
                borderRadius: '14px',
                padding: '1.25rem 1.5rem',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem'
              }}
            >
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1.5px solid #CBD5E1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#123C45',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                <QrCode size={38} />
              </div>

              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                <div style={{ color: '#087F8C', fontWeight: 800, marginBottom: '2px' }}>
                  DIGITAL STRIP PASSPORT
                </div>
                <div style={{ color: '#1E293B' }}><strong>BATCH ID:</strong> AS26-001</div>
                <div style={{ color: '#1E293B' }}><strong>CALIBRATION ID:</strong> CAL-014</div>
                <div style={{ color: '#059669' }}><strong>EXPIRY:</strong> 12/2027 (VALID)</div>
              </div>
            </div>

            {/* Scientific Credibility Notice */}
            <div 
              style={{
                background: '#FFFBEB',
                borderRadius: '14px',
                padding: '1.25rem 1.5rem',
                border: '1px solid #FCD34D',
                display: 'flex',
                gap: '0.85rem',
                alignItems: 'flex-start'
              }}
            >
              <Info size={20} color="#D97706" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.8rem', color: '#92400E', lineHeight: 1.55 }}>
                <strong>Scientific Validation Note:</strong> The strip is intended to provide a low-cost field interface for FRC measurement. Final reagent formulation, response curve, shelf life and 0.1 ppm performance require laboratory validation.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
