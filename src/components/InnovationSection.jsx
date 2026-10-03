import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Scan, 
  Cpu, 
  WifiOff, 
  Compass, 
  Sliders, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  RefreshCw,
  QrCode,
  MapPin,
  Clock,
  UserCheck
} from 'lucide-react';
import { FRC_CONCENTRATION_LEVELS } from '../data/mockData';

export default function InnovationSection() {
  const [selectedPpmIdx, setSelectedPpmIdx] = useState(2); // default 0.10 ppm target
  const [activeZone, setActiveZone] = useState('reaction'); // reaction, control, reference
  const [offlineState, setOfflineState] = useState('offline'); // 'offline' or 'synced'

  const currentLevel = FRC_CONCENTRATION_LEVELS[selectedPpmIdx];

  return (
    <section 
      id="innovations" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F5FBFB 50%, #FFFFFF 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div 
            className="section-label"
            style={{ 
              background: 'linear-gradient(90deg, #FFF9EB 0%, #EDE9FE 100%)', 
              color: '#4338CA', 
              border: '1px solid #DDD6FE' 
            }}
          >
            <Sparkles size={14} color="#8B5CF6" />
            SECTION 03 • KEY INNOVATIONS
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            WHY AQUASENSE IS DIFFERENT
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Six interconnected engineering breakthroughs spanning chemical substrate design, embedded optics, edge computer vision, and offline data structures.
          </p>
        </div>

        {/* 6 Visually Distinct Modules */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>
          
          {/* ============================================================
              INNOVATION 01: 0.1 PPM TARGET FRC STRIP
              Colors: Yellow + Orange + Coral
             ============================================================ */}
          <div 
            className="sci-card"
            style={{
              padding: '2.25rem',
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FFFDF9 100%)',
              border: '1.5px solid rgba(255, 184, 107, 0.35)',
              borderTop: '5px solid #FF7A6B'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="badge" style={{ background: '#FFF0EE', color: '#EA580C', border: '1px solid #FED7AA' }}>
                INNOVATION 01 • CHEMISTRY TARGET
              </span>
              <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>
                0.1 PPM SENSITIVITY
              </span>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#123C45', marginBottom: '0.65rem' }}>
              0.1 PPM TARGET FRC STRIP
            </h3>

            <p style={{ fontSize: '0.92rem', color: '#4B6E76', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              AquaSense is designed around strip chemistry and calibration targeting FRC sensitivity down to <strong>0.1 ppm</strong> to detect depleted chlorination before microbiological risk surfaces.
            </p>

            {/* Interactive Concentration Scale Slider */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(255, 184, 107, 0.3)',
                padding: '1.25rem',
                marginBottom: '1rem',
                boxShadow: '0 4px 15px rgba(255, 184, 107, 0.1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#9A3412' }}>
                  CONCENTRATION SCALE
                </span>
                <span 
                  style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    background: currentLevel.hex,
                    border: '1px solid #EA580C',
                    color: '#9A3412'
                  }}
                >
                  {currentLevel.label}
                </span>
              </div>

              {/* Color Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '4px', height: '36px', borderRadius: '8px', overflow: 'hidden', marginBottom: '1rem' }}>
                {FRC_CONCENTRATION_LEVELS.map((lvl, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedPpmIdx(idx)}
                    style={{
                      backgroundColor: lvl.hex,
                      cursor: 'pointer',
                      border: selectedPpmIdx === idx ? '3px solid #123C45' : '1px solid rgba(0,0,0,0.1)',
                      borderRadius: '4px',
                      transform: selectedPpmIdx === idx ? 'scale(1.08)' : 'none',
                      transition: 'all 0.2s ease',
                      position: 'relative'
                    }}
                    title={`${lvl.label} - ${lvl.status}`}
                  />
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#64748B', marginBottom: '0.85rem' }}>
                <span>0.00 ppm</span>
                <span style={{ color: '#EA580C', fontWeight: 800 }}>TARGET: 0.10 ppm</span>
                <span>2.00 ppm</span>
              </div>

              <div style={{ background: '#FFF7ED', padding: '0.65rem 0.85rem', borderRadius: '8px', border: '1px solid #FFEDD5', fontSize: '0.78rem', color: '#9A3412' }}>
                <strong>{currentLevel.status}:</strong> {currentLevel.note}
              </div>
            </div>

            <div className="simulated-pill" style={{ color: '#EA580C', borderColor: '#FDBA74' }}>
              TARGET PERFORMANCE — REQUIRES EXPERIMENTAL VALIDATION
            </div>
          </div>

          {/* ============================================================
              INNOVATION 02: MULTI-ZONE SELF-CHECKING STRIP
              Colors: Coral + Green + Lavender
             ============================================================ */}
          <div 
            className="sci-card"
            style={{
              padding: '2.25rem',
              background: 'linear-gradient(160deg, #FFFFFF 0%, #F5FBF9 100%)',
              border: '1.5px solid rgba(0, 201, 167, 0.35)',
              borderTop: '5px solid #00C9A7'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="badge" style={{ background: '#E0FAF5', color: '#047857', border: '1px solid #A7F3D0' }}>
                INNOVATION 02 • MULTI-ZONE STRIP
              </span>
              <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>
                TRIPLE REDUNDANCY
              </span>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#123C45', marginBottom: '0.65rem' }}>
              MULTI-ZONE SELF-CHECKING STRIP
            </h3>

            <p style={{ fontSize: '0.92rem', color: '#4B6E76', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Unlike single-pad strips that fail silently, AquaSense implements three distinct biochemical and optical zones on every single strip.
            </p>

            {/* Interactive Strip Visualizer with 3 clickable zones */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1.5px solid #CBD5E1',
                padding: '1.25rem',
                marginBottom: '1.2rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', justifyContent: 'center' }}>
                
                {/* ZONE A: FRC Reaction */}
                <div
                  onClick={() => setActiveZone('reaction')}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.75rem 0.5rem',
                    borderRadius: '10px',
                    border: activeZone === 'reaction' ? '2.5px solid #EA580C' : '1px solid #FED7AA',
                    background: activeZone === 'reaction' ? '#FFF7ED' : '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#FF7A6B', margin: '0 auto 0.4rem auto', boxShadow: '0 0 10px #FF7A6B' }} />
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#EA580C', display: 'block' }}>
                    ZONE A
                  </span>
                  <span style={{ fontSize: '0.65rem', color: '#64748B' }}>FRC Reaction</span>
                </div>

                {/* ZONE B: Control Zone */}
                <div
                  onClick={() => setActiveZone('control')}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.75rem 0.5rem',
                    borderRadius: '10px',
                    border: activeZone === 'control' ? '2.5px solid #059669' : '1px solid #A7F3D0',
                    background: activeZone === 'control' ? '#ECFDF5' : '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#7AE7C7', margin: '0 auto 0.4rem auto', boxShadow: '0 0 10px #7AE7C7' }} />
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#047857', display: 'block' }}>
                    ZONE B
                  </span>
                  <span style={{ fontSize: '0.65rem', color: '#64748B' }}>Control Pad</span>
                </div>

                {/* ZONE C: Optical Reference */}
                <div
                  onClick={() => setActiveZone('reference')}
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '0.75rem 0.5rem',
                    borderRadius: '10px',
                    border: activeZone === 'reference' ? '2.5px solid #7C3AED' : '1px solid #DDD6FE',
                    background: activeZone === 'reference' ? '#F5F3FF' : '#FFFFFF',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#A78BFA', margin: '0 auto 0.4rem auto', boxShadow: '0 0 10px #A78BFA' }} />
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#6D28D9', display: 'block' }}>
                    ZONE C
                  </span>
                  <span style={{ fontSize: '0.65rem', color: '#64748B' }}>Optical Ref</span>
                </div>

              </div>

              {/* Zone detail text */}
              <div style={{ marginTop: '1rem', padding: '0.75rem', borderRadius: '8px', background: '#F8FAFC', border: '1px solid #E2E8F0', fontSize: '0.8rem', color: '#334E58' }}>
                {activeZone === 'reaction' && (
                  <span><strong>Zone A (Reaction):</strong> Chemically responds to free residual chlorine in the sample, developing graduated coloration from pale yellow to coral.</span>
                )}
                {activeZone === 'control' && (
                  <span><strong>Zone B (Control):</strong> "The control zone helps determine whether the test reaction is valid." Changes only when adequate sample volume and rehydration occur.</span>
                )}
                {activeZone === 'reference' && (
                  <span><strong>Zone C (Optical Reference):</strong> "The optical reference helps normalize measurement variation caused by device and illumination differences."</span>
                )}
              </div>
            </div>

            <div className="simulated-pill">
              PATENTABLE STRIP ARCHITECTURE • TRIPLE-CHECK VERIFICATION
            </div>
          </div>

          {/* ============================================================
              INNOVATION 03: CONTROLLED OPTICAL READER
              Colors: Aqua + Sky + Turquoise
             ============================================================ */}
          <div 
            className="sci-card"
            style={{
              padding: '2.25rem',
              background: 'linear-gradient(160deg, #FFFFFF 0%, #F0FBFD 100%)',
              border: '1.5px solid rgba(0, 184, 217, 0.35)',
              borderTop: '5px solid #00B8D9'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="badge" style={{ background: '#E0F8FC', color: '#0088A3', border: '1px solid #BAEEF8' }}>
                INNOVATION 03 • EMBEDDED OPTICS
              </span>
              <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>
                HARDWARE RIG
              </span>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#123C45', marginBottom: '0.65rem' }}>
              CONTROLLED OPTICAL READER
            </h3>

            <p style={{ fontSize: '0.92rem', color: '#4B6E76', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Removes environmental lighting variance through an enclosed, light-tight chamber with fixed geometry, constant-current LED, and precision spectral sensing.
            </p>

            {/* Hardware Cross-Section Elements */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid rgba(0, 184, 217, 0.25)',
                padding: '1.25rem',
                marginBottom: '1.2rem'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                <div style={{ padding: '0.5rem', background: '#F0F9FF', borderRadius: '6px', border: '1px solid #BAE6FD' }}>
                  <span style={{ color: '#0284C7', fontWeight: 700 }}>ESP32-S3</span>
                  <div style={{ fontSize: '0.68rem', color: '#475569' }}>BLE 5.0 master & ADC bus</div>
                </div>
                <div style={{ padding: '0.5rem', background: '#ECFEFF', borderRadius: '6px', border: '1px solid #A5F3FC' }}>
                  <span style={{ color: '#0891B2', fontWeight: 700 }}>TCS34725</span>
                  <div style={{ fontSize: '0.68rem', color: '#475569' }}>16-bit RGBC colorimetry</div>
                </div>
                <div style={{ padding: '0.5rem', background: '#F0FDF4', borderRadius: '6px', border: '1px solid #BBF7D0' }}>
                  <span style={{ color: '#16A34A', fontWeight: 700 }}>BH1750</span>
                  <div style={{ fontSize: '0.68rem', color: '#475569' }}>Ambient light rejection check</div>
                </div>
                <div style={{ padding: '0.5rem', background: '#FEFCE8', borderRadius: '6px', border: '1px solid #FEF08A' }}>
                  <span style={{ color: '#CA8A04', fontWeight: 700 }}>BME280</span>
                  <div style={{ fontSize: '0.68rem', color: '#475569' }}>Thermal reaction compensation</div>
                </div>
              </div>

              {/* Light Path diagram mini */}
              <div style={{ marginTop: '0.85rem', padding: '0.5rem', background: '#F8FAFC', borderRadius: '6px', textAlign: 'center', fontSize: '0.68rem', color: '#64748B', fontFamily: 'var(--font-mono)' }}>
                <span>LED [5000K]</span> → <span>DIFFUSER</span> → <span>STRIP SURFACE</span> → <span>TCS34725</span>
              </div>
            </div>

            <div className="simulated-pill">
              REPEATABLE OPTICAL GEOMETRY • ZERO EXTERNAL GLARE
            </div>
          </div>

          {/* ============================================================
              INNOVATION 04: SMARTPHONE-ASSISTED AI / CV
              Colors: Lavender + Purple + Aqua
             ============================================================ */}
          <div 
            className="sci-card"
            style={{
              padding: '2.25rem',
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FAF8FF 100%)',
              border: '1.5px solid rgba(139, 92, 246, 0.35)',
              borderTop: '5px solid #8B5CF6'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="badge" style={{ background: '#EDE9FE', color: '#6D28D9', border: '1px solid #DDD6FE' }}>
                INNOVATION 04 • EDGE CV
              </span>
              <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>
                NO GENERATIVE AI
              </span>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#123C45', marginBottom: '0.65rem' }}>
              SMARTPHONE-ASSISTED AI / CV
            </h3>

            <p style={{ fontSize: '0.92rem', color: '#4B6E76', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Lightweight computer vision and machine-learning inference algorithms designed to run fully on-device on low-cost smartphones without internet access.
            </p>

            {/* Edge CV Pipeline Stepper */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #DDD6FE',
                padding: '1rem',
                marginBottom: '1.2rem'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6D28D9' }}>
                  <span style={{ background: '#EDE9FE', padding: '0.15rem 0.4rem', borderRadius: '4px', fontWeight: 700 }}>1</span>
                  <span>CAMERA / BLE SENSOR INGESTION</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6D28D9' }}>
                  <span style={{ background: '#EDE9FE', padding: '0.15rem 0.4rem', borderRadius: '4px', fontWeight: 700 }}>2</span>
                  <span>STRIP DETECTION &amp; ROI EXTRACTION</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6D28D9' }}>
                  <span style={{ background: '#EDE9FE', padding: '0.15rem 0.4rem', borderRadius: '4px', fontWeight: 700 }}>3</span>
                  <span>COLOR &amp; REFERENCE NORMALIZATION</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6D28D9' }}>
                  <span style={{ background: '#EDE9FE', padding: '0.15rem 0.4rem', borderRadius: '4px', fontWeight: 700 }}>4</span>
                  <span>POLYNOMIAL / ML REGRESSION TO FRC PPM</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#047857', fontWeight: 700 }}>
                  <span style={{ background: '#D1FAE5', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>5</span>
                  <span>CONFIDENCE SCORING (94%)</span>
                </div>
              </div>
            </div>

            <div className="simulated-pill">
              LIGHTWEIGHT COMPUTER VISION &amp; MACHINE LEARNING INFERENCE
            </div>
          </div>

          {/* ============================================================
              INNOVATION 05: OFFLINE-FIRST MONITORING
              Colors: Yellow + Orange + Aqua + Green
             ============================================================ */}
          <div 
            className="sci-card"
            style={{
              padding: '2.25rem',
              background: 'linear-gradient(160deg, #FFFFFF 0%, #FFFDF5 100%)',
              border: '1.5px solid rgba(245, 158, 11, 0.35)',
              borderTop: '5px solid #F59E0B'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="badge" style={{ background: '#FEF3C7', color: '#B45309', border: '1px solid #FDE68A' }}>
                INNOVATION 05 • ARCHITECTURE
              </span>
              <button
                onClick={() => setOfflineState(offlineState === 'offline' ? 'synced' : 'offline')}
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  background: '#FFFFFF',
                  border: '1px solid #CBD5E1',
                  borderRadius: '4px',
                  padding: '0.2rem 0.5rem',
                  cursor: 'pointer',
                  fontWeight: 700,
                  color: '#475569'
                }}
              >
                TOGGLE STATE: {offlineState.toUpperCase()}
              </button>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#123C45', marginBottom: '0.65rem' }}>
              OFFLINE-FIRST MONITORING
            </h3>

            <p style={{ fontSize: '0.92rem', color: '#4B6E76', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Designed explicitly for remote Indian villages where connectivity cannot be assumed. The test operates seamlessly and queues data locally.
            </p>

            {/* Offline Flow Graphic */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #FDE68A',
                padding: '1.25rem',
                marginBottom: '1.2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
                <span style={{ color: '#B45309', fontWeight: 700 }}>PHONE LOCAL DB</span>
                <span style={{ color: offlineState === 'offline' ? '#EA580C' : '#059669', fontWeight: 800 }}>
                  {offlineState === 'offline' ? '3 PACKETS QUEUED' : '0 PENDING • ALL SYNCED'}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', background: '#F8FAFC', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: offlineState === 'offline' ? '#F59E0B' : '#10B981' }} />
                <span style={{ fontSize: '0.72rem', color: '#334E58', fontFamily: 'var(--font-mono)' }}>
                  {offlineState === 'offline' 
                    ? "Cellular unavailable: Storing encrypted telemetry in SQLite" 
                    : "Wi-Fi restored: Uplink payload dispatched to central cloud"}
                </span>
              </div>
            </div>

            <div className="simulated-pill">
              ZERO TEST INTERRUPTION • RELIABLE RURAL WORKFLOW
            </div>
          </div>

          {/* ============================================================
              INNOVATION 06: SOURCE-LEVEL WATER INTELLIGENCE
              Colors: Green + Aqua + Sky Blue
             ============================================================ */}
          <div 
            className="sci-card"
            style={{
              padding: '2.25rem',
              background: 'linear-gradient(160deg, #FFFFFF 0%, #F0FDF4 100%)',
              border: '1.5px solid rgba(16, 185, 129, 0.35)',
              borderTop: '5px solid #10B981'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="badge" style={{ background: '#D1FAE5', color: '#047857', border: '1px solid #A7F3D0' }}>
                INNOVATION 06 • WATER INTELLIGENCE
              </span>
              <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>
                DIGITAL TRACEABILITY
              </span>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#123C45', marginBottom: '0.65rem' }}>
              SOURCE-LEVEL WATER INTELLIGENCE
            </h3>

            <p style={{ fontSize: '0.92rem', color: '#4B6E76', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              The system creates a digital monitoring history for individual water sources by fusing QR identity with geolocated chlorine trajectories.
            </p>

            {/* Metadata Fusion Box */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #A7F3D0',
                padding: '1.25rem',
                marginBottom: '1.2rem'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#047857' }}>
                  <QrCode size={13} />
                  <span>QR SOURCE ID: WS-014</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#047857' }}>
                  <Clock size={13} />
                  <span>OCT 03, 15:45 IST</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#047857' }}>
                  <MapPin size={13} />
                  <span>19.0760 N, 72.8777 E</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#047857' }}>
                  <UserCheck size={13} />
                  <span>WORKER: FW-802</span>
                </div>
              </div>

              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px dashed #A7F3D0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>
                  SOURCE HISTORY → TREND
                </span>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#059669' }}>
                  STABLE SAFE RESIDUAL
                </span>
              </div>
            </div>

            <div className="simulated-pill">
              TRACEABLE SURVEILLANCE • AUTOMATIC AUDIT RECORD
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
