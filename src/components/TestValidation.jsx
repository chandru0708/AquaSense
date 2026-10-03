import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Sliders, 
  Clock, 
  Focus, 
  Sun, 
  Layers, 
  Thermometer, 
  CalendarX,
  RefreshCw
} from 'lucide-react';

export default function TestValidation() {
  const [activeScenario, setActiveScenario] = useState('valid'); // 'valid', 'review', 'invalid'

  const scenarios = {
    valid: {
      status: "VALID TEST",
      level: "green",
      badgeColor: "#10B981",
      bgColor: "#ECFDF5",
      borderColor: "#A7F3D0",
      description: "All 8 sanity checks pass nominal thresholds. FRC concentration result is recorded to local storage.",
      reason: "ALL QUALITY CHECKS SATISFIED",
      checks: [
        { label: "CONTROL ZONE", status: "PASS", detail: "Zone B rehydration confirmed", pass: true },
        { label: "REACTION TIME", status: "PASS", detail: "25s incubation compliant", pass: true },
        { label: "STRIP ORIENTATION", status: "PASS", detail: "Correct mechanical seating", pass: true },
        { label: "IMAGE SHARPNESS", status: "PASS", detail: "Laplacian variance > 250", pass: true },
        { label: "EXPOSURE BALANCE", status: "PASS", detail: "Clear channel within 400-900 lux", pass: true },
        { label: "REFERENCE MATCH", status: "PASS", detail: "White balance delta < 1.5%", pass: true },
        { label: "BATCH VALIDITY", status: "PASS", detail: "Batch AS26-001 active", pass: true },
        { label: "TEMPERATURE RANGE", status: "PASS", detail: "26.4°C within 10-40°C spec", pass: true }
      ]
    },
    review: {
      status: "REPEAT / REVIEW",
      level: "yellow",
      badgeColor: "#F59E0B",
      bgColor: "#FEF3C7",
      borderColor: "#FDE68A",
      description: "Minor ambient light or timing variance detected. System prompts technician to re-check chamber seal.",
      reason: "SLIGHT AMBIENT DRIFT / TIME DELAY (+8s)",
      checks: [
        { label: "CONTROL ZONE", status: "PASS", detail: "Zone B rehydration confirmed", pass: true },
        { label: "REACTION TIME", status: "WARN", detail: "Read at 33s (exceeded +8s)", pass: 'warn' },
        { label: "STRIP ORIENTATION", status: "PASS", detail: "Correct mechanical seating", pass: true },
        { label: "IMAGE SHARPNESS", status: "PASS", detail: "Laplacian variance 190 (acceptable)", pass: true },
        { label: "EXPOSURE BALANCE", status: "WARN", detail: "Minor stray ambient light detected", pass: 'warn' },
        { label: "REFERENCE MATCH", status: "PASS", detail: "White balance delta 2.1%", pass: true },
        { label: "BATCH VALIDITY", status: "PASS", detail: "Batch AS26-001 active", pass: true },
        { label: "TEMPERATURE RANGE", status: "PASS", detail: "26.4°C within 10-40°C spec", pass: true }
      ]
    },
    invalid: {
      status: "INVALID TEST",
      level: "coral",
      badgeColor: "#FF7A6B",
      bgColor: "#FFF0EE",
      borderColor: "#FFCDD2",
      description: "Severe QA anomaly detected. Result is rejected to prevent false water safety declaration.",
      reason: "CONTROL PAD FAILED / STRIP MISALIGNED",
      checks: [
        { label: "CONTROL ZONE", status: "FAIL", detail: "Zone B failed to develop (insufficient wetting)", pass: false },
        { label: "REACTION TIME", status: "FAIL", detail: "Aborted early at 08s", pass: false },
        { label: "STRIP ORIENTATION", status: "FAIL", detail: "Strip tilted 15° off-axis", pass: false },
        { label: "IMAGE SHARPNESS", status: "PASS", detail: "Sharpness nominal", pass: true },
        { label: "EXPOSURE BALANCE", status: "PASS", detail: "Chamber sealed", pass: true },
        { label: "REFERENCE MATCH", status: "FAIL", detail: "Tile occluded by water droplet", pass: false },
        { label: "BATCH VALIDITY", status: "PASS", detail: "Batch AS26-001 active", pass: true },
        { label: "TEMPERATURE RANGE", status: "PASS", detail: "26.4°C within spec", pass: true }
      ]
    }
  };

  const current = scenarios[activeScenario];

  return (
    <section 
      id="validation" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #FAF8FF 0%, #FFFFFF 50%, #F5FBFB 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div 
            className="section-label"
            style={{ 
              background: '#D1FAE5', 
              color: '#047857', 
              border: '1px solid #A7F3D0' 
            }}
          >
            <ShieldCheck size={14} color="#10B981" />
            SECTION 09 • QUALITY ASSURANCE
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            NOT EVERY IMAGE IS A VALID TEST
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            To prevent fatal false negatives in drinking water, AquaSense will refuse to report a chlorine number unless all 8 biochemical and optical integrity criteria pass.
          </p>
        </div>

        {/* Interactive Scenario Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveScenario('valid')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: '10px',
              border: activeScenario === 'valid' ? '2px solid #10B981' : '1px solid #CBD5E1',
              background: activeScenario === 'valid' ? '#ECFDF5' : '#FFFFFF',
              color: activeScenario === 'valid' ? '#047857' : '#475569',
              fontWeight: 800,
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: activeScenario === 'valid' ? '0 4px 14px rgba(16, 185, 129, 0.2)' : 'none'
            }}
          >
            <CheckCircle2 size={16} color="#10B981" />
            SCENARIO 1: VALID TEST (GREEN)
          </button>

          <button
            onClick={() => setActiveScenario('review')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: '10px',
              border: activeScenario === 'review' ? '2px solid #F59E0B' : '1px solid #CBD5E1',
              background: activeScenario === 'review' ? '#FEF3C7' : '#FFFFFF',
              color: activeScenario === 'review' ? '#B45309' : '#475569',
              fontWeight: 800,
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: activeScenario === 'review' ? '0 4px 14px rgba(245, 158, 11, 0.2)' : 'none'
            }}
          >
            <AlertTriangle size={16} color="#F59E0B" />
            SCENARIO 2: REPEAT / REVIEW (YELLOW)
          </button>

          <button
            onClick={() => setActiveScenario('invalid')}
            style={{
              padding: '0.65rem 1.4rem',
              borderRadius: '10px',
              border: activeScenario === 'invalid' ? '2px solid #FF7A6B' : '1px solid #CBD5E1',
              background: activeScenario === 'invalid' ? '#FFF0EE' : '#FFFFFF',
              color: activeScenario === 'invalid' ? '#DC2626' : '#475569',
              fontWeight: 800,
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: activeScenario === 'invalid' ? '0 4px 14px rgba(255, 122, 107, 0.2)' : 'none'
            }}
          >
            <XCircle size={16} color="#FF7A6B" />
            SCENARIO 3: INVALID TEST (CORAL)
          </button>
        </div>

        {/* Validation Matrix Dashboard */}
        <div 
          className="sci-card"
          style={{
            padding: '2.5rem',
            background: '#FFFFFF',
            border: `2px solid ${current.borderColor}`,
            boxShadow: `0 16px 45px ${current.badgeColor}15`
          }}
        >
          {/* Status Header Banner */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.25rem 1.5rem',
              borderRadius: '14px',
              background: current.bgColor,
              border: `1.5px solid ${current.borderColor}`,
              marginBottom: '2rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: current.badgeColor }}>
                VALIDATION ENGINE STATUS
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#123C45' }}>
                ● {current.status}
              </h3>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#4B6E76', display: 'block' }}>
                PRIMARY DIAGNOSTIC VERDICT:
              </span>
              <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: current.badgeColor }}>
                {current.reason}
              </span>
            </div>
          </div>

          {/* 8 Check Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
            {current.checks.map((check, idx) => {
              const isPass = check.pass === true;
              const isWarn = check.pass === 'warn';
              const badgeBg = isPass ? '#ECFDF5' : isWarn ? '#FEF3C7' : '#FEE2E2';
              const badgeText = isPass ? '#059669' : isWarn ? '#D97706' : '#DC2626';
              const badgeBorder = isPass ? '#A7F3D0' : isWarn ? '#FDE68A' : '#FECACA';

              return (
                <div 
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1.5px solid #E2E8F0',
                    padding: '1rem 1.1rem',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#123C45' }}>
                      {check.label}
                    </span>
                    <span 
                      style={{
                        fontSize: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 800,
                        padding: '0.15rem 0.45rem',
                        borderRadius: '4px',
                        background: badgeBg,
                        color: badgeText,
                        border: `1px solid ${badgeBorder}`
                      }}
                    >
                      {check.status}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                    {check.detail}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Descriptive Summary */}
          <div style={{ padding: '1rem 1.25rem', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: current.badgeColor }} />
            <span style={{ fontSize: '0.85rem', color: '#334E58' }}>
              <strong>System Policy:</strong> {current.description}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
