import React, { useState } from 'react';
import { 
  QrCode, 
  Layers, 
  FileCheck2, 
  Sliders, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

export default function BatchCalibration() {
  const [profileLoaded, setProfileLoaded] = useState(true);

  const calibrationSteps = [
    { num: "01", title: "SCAN QR", desc: "Scan 2D matrix on foil strip pouch packaging", color: "#8B5CF6" },
    { num: "02", title: "LOAD PROFILE", desc: "Retrieve batch-specific 4th-order polynomial coefficients", color: "#00B8D9" },
    { num: "03", title: "TEST STRIP", desc: "Optical sensor reads raw uncalibrated reflectance signal", color: "#FFD166" },
    { num: "04", title: "APPLY PROFILE", desc: "Transform raw colorimetry through lot calibration curve", color: "#00C9A7" },
    { num: "05", title: "RESULT", desc: "Output true standardized FRC concentration", color: "#10B981" }
  ];

  return (
    <section 
      id="calibration" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #F5FBFB 0%, #FFFFFF 50%, #FAF8FF 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div 
            className="section-label"
            style={{ 
              background: '#EDE9FE', 
              color: '#6D28D9', 
              border: '1px solid #DDD6FE' 
            }}
          >
            <QrCode size={14} color="#8B5CF6" />
            SECTION 12 • LOT CALIBRATION
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            EVERY STRIP BATCH HAS A DIGITAL IDENTITY
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            "Batch-specific calibration profiles can help account for manufacturing variation."
          </p>
        </div>

        {/* Calibration Main Card */}
        <div 
          className="sci-card"
          style={{
            padding: '2.5rem',
            background: '#FFFFFF',
            border: '1.5px solid rgba(139, 92, 246, 0.25)',
            boxShadow: '0 16px 45px rgba(139, 92, 246, 0.08)',
            marginBottom: '2rem'
          }}
        >
          {/* Top Digital Identity Dossier */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
            
            <div style={{ background: '#FAF8FF', padding: '1.25rem', borderRadius: '12px', border: '1px solid #DDD6FE' }}>
              <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#6D28D9', fontWeight: 700 }}>
                BATCH IDENTIFIER
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#123C45' }}>
                AS26-001
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                Manufacturing Lot #01 • 5,000 units
              </div>
            </div>

            <div style={{ background: '#E0F8FC', padding: '1.25rem', borderRadius: '12px', border: '1px solid #BAEEF8' }}>
              <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#0088A3', fontWeight: 700 }}>
                CALIBRATION CURVE ID
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#087F8C' }}>
                CAL-014
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                Polynomial Fit: R² = 0.992
              </div>
            </div>

            <div style={{ background: '#ECFDF5', padding: '1.25rem', borderRadius: '12px', border: '1px solid #A7F3D0' }}>
              <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#047857', fontWeight: 700 }}>
                SHELF-LIFE STATUS
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#059669' }}>
                VALID (12/2027)
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                Unopened pouch seal intact
              </div>
            </div>

            <div style={{ background: '#FFFBEB', padding: '1.25rem', borderRadius: '12px', border: '1px solid #FCD34D' }}>
              <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#B45309', fontWeight: 700 }}>
                REFERENCE PROFILE
              </div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#B45309' }}>
                ACTIVE / LOADED
              </div>
              <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                Auto-fetched via offline cache
              </div>
            </div>

          </div>

          {/* Stepper Pipeline */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#123C45', marginBottom: '1rem' }}>
              CALIBRATION EXECUTION SEQUENCE
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1rem' }}>
              {calibrationSteps.map((step, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1.5px solid #E2E8F0',
                    borderTop: `4px solid ${step.color}`,
                    padding: '1rem',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                  }}
                >
                  <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: step.color }}>
                    STEP {step.num}
                  </span>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#123C45', margin: '0.25rem 0' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.72rem', color: '#64748B', lineHeight: 1.4 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Honest Credibility Guardrail */}
          <div 
            style={{
              background: '#FFFBEB',
              borderRadius: '12px',
              padding: '1rem 1.25rem',
              border: '1px solid #FCD34D',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <Info size={18} color="#D97706" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.8rem', color: '#92400E' }}>
              <strong>Engineering Integrity Notice:</strong> Batch profiles compensate for minor chemical dye deposition differences during manufacturing; however, proper dry storage and sealed packaging remain essential to avoid reagent degradation.
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
