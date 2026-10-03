import React, { useState, useEffect } from 'react';
import { 
  Scan, 
  Sun, 
  Thermometer, 
  Cpu, 
  Eye, 
  Activity, 
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function OpticalReader() {
  const [beamActive, setBeamActive] = useState(true);
  const [simTemp, setSimTemp] = useState(26.4);
  const [rgbVals, setRgbVals] = useState({ r: 242, g: 158, b: 64, c: 840 });

  // Subtle telemetry jitter for authentic feel
  useEffect(() => {
    const interval = setInterval(() => {
      setSimTemp(prev => +(26.3 + Math.random() * 0.25).toFixed(1));
      setRgbVals({
        r: Math.floor(240 + Math.random() * 5),
        g: Math.floor(156 + Math.random() * 5),
        b: Math.floor(62 + Math.random() * 4),
        c: Math.floor(835 + Math.random() * 12)
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="optical" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #F0FAF7 0%, #FFFFFF 50%, #F5FBFB 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div 
            className="section-label"
            style={{ 
              background: '#E0F8FC', 
              color: '#0088A3', 
              border: '1px solid #BAEEF8' 
            }}
          >
            <Scan size={14} color="#00B8D9" />
            SECTION 05 • OPTICAL READER
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            CONTROLLED OPTICAL MEASUREMENT
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Eliminating ambient lighting dependencies with a closed-loop optical chamber, 5000K regulated emission, and 16-bit RGBC spectral acquisition.
          </p>
        </div>

        {/* Optical Chamber Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          
          {/* LEFT: Pseudo-3D Scientific Instrument Visualizer */}
          <div 
            className="sci-card"
            style={{
              padding: '2.5rem',
              background: 'linear-gradient(145deg, #FFFFFF 0%, #F2FBFD 100%)',
              border: '2px solid rgba(0, 184, 217, 0.3)',
              boxShadow: '0 20px 50px rgba(0, 184, 217, 0.15)',
              position: 'relative'
            }}
          >
            {/* Instrument Status Top Banner */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="telemetry-dot online" />
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#123C45' }}>
                  AQUASENSE / OPTICAL-RIG-01
                </span>
              </div>
              <button
                onClick={() => setBeamActive(!beamActive)}
                style={{
                  background: beamActive ? '#E0FAF5' : '#F1F5F9',
                  border: '1px solid rgba(0, 201, 167, 0.3)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  color: beamActive ? '#047857' : '#64748B',
                  cursor: 'pointer',
                  fontWeight: 700
                }}
              >
                {beamActive ? 'BEAM: ACTIVE' : 'BEAM: PAUSED'}
              </button>
            </div>

            {/* Chamber Graphic Container */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1.5px solid #CBD5E1',
                padding: '2rem 1.5rem',
                position: 'relative',
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.03)'
              }}
            >
              {/* Top: Constant Current 5000K LED */}
              <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#FFFBEB',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '8px',
                    border: '1px solid #FCD34D'
                  }}
                >
                  <Sun size={16} color="#D97706" />
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#92400E' }}>
                    CONSTANT-CURRENT 5000K LED
                  </span>
                </div>
              </div>

              {/* Diffuser Disk */}
              <div style={{ textAlign: 'center', margin: '0.4rem 0' }}>
                <div 
                  style={{
                    width: '65%',
                    height: '8px',
                    margin: '0 auto',
                    background: 'linear-gradient(90deg, #BAE6FD 0%, #E0F2FE 50%, #BAE6FD 100%)',
                    borderRadius: '4px',
                    border: '1px solid #7DD3FC'
                  }}
                />
                <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: '#0284C7' }}>
                  LAMBERTIAN PTFE DIFFUSER
                </span>
              </div>

              {/* Moving Optical Beam Graphic */}
              <div 
                style={{
                  height: '60px',
                  width: '55%',
                  margin: '0 auto',
                  background: beamActive ? 'linear-gradient(180deg, rgba(254, 240, 138, 0.4) 0%, rgba(0, 184, 217, 0.25) 100%)' : 'transparent',
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)',
                  position: 'relative',
                  transition: 'opacity 0.3s ease'
                }}
              >
                {beamActive && (
                  <div 
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: '#00B8D9',
                      boxShadow: '0 0 10px #00B8D9',
                      animation: 'beamScan 2s infinite ease-in-out'
                    }}
                  />
                )}
              </div>

              {/* Strip Fixture Slot */}
              <div 
                style={{
                  background: '#F1F5F9',
                  borderRadius: '10px',
                  border: '1.5px solid #94A3B8',
                  padding: '0.65rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
              >
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#475569', fontWeight: 700 }}>
                  STRIP FIXTURE
                </span>

                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '4px', background: '#A78BFA' }} title="Reference" />
                  <div style={{ width: '22px', height: '22px', borderRadius: '4px', background: '#7AE7C7' }} title="Control" />
                  <div style={{ width: '26px', height: '22px', borderRadius: '4px', background: '#F59E0B', boxShadow: '0 0 10px #F59E0B' }} title="FRC Reaction" />
                </div>
              </div>

              {/* TCS34725 Sensor at Bottom */}
              <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#E0F8FC',
                    padding: '0.45rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #BAEEF8'
                  }}
                >
                  <Eye size={16} color="#0088A3" />
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#007C92' }}>
                    TCS34725 RGBC COLOR SENSOR (16-BIT ADC)
                  </span>
                </div>
              </div>

            </div>

            {/* Optical Signal Flow Breadcrumb */}
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#4B6E76', flexWrap: 'wrap' }}>
              <span style={{ color: '#D97706', fontWeight: 700 }}>LIGHT</span>
              <ArrowRight size={12} />
              <span style={{ color: '#EA580C', fontWeight: 700 }}>REACTION ZONE</span>
              <ArrowRight size={12} />
              <span style={{ color: '#0088A3', fontWeight: 700 }}>COLOR RESPONSE</span>
              <ArrowRight size={12} />
              <span style={{ color: '#7C3AED', fontWeight: 700 }}>SENSOR</span>
              <ArrowRight size={12} />
              <span style={{ color: '#059669', fontWeight: 700 }}>DIGITAL SIGNAL</span>
            </div>

          </div>

          {/* RIGHT: Live Simulated Telemetry Dashboard */}
          <div>
            <div style={{ display: 'inline-block', marginBottom: '0.85rem' }}>
              <span className="badge" style={{ background: '#E0FAF5', color: '#087F8C', border: '1px solid #A7F3D0' }}>
                LIVE INSTRUMENT TELEMETRY
              </span>
            </div>

            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#123C45', marginBottom: '1rem' }}>
              REAL-TIME OPTICAL FEEDBACK
            </h3>

            <p style={{ fontSize: '0.95rem', color: '#4B6E76', lineHeight: 1.65, marginBottom: '1.75rem' }}>
              Constant feedback from environmental and photometric sensors ensures that every reading meets stringent signal-to-noise criteria before processing.
            </p>

            {/* Telemetry Indicator Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              
              {/* Light Stability */}
              <div className="sci-card" style={{ padding: '1.1rem', background: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <Sun size={16} color="#059669" />
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 700 }}>
                    EMISSION LIGHT
                  </span>
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#059669', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span className="telemetry-dot online" />
                  STABLE
                </div>
                <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>
                  0.02% drift / 1000h
                </div>
              </div>

              {/* Temperature */}
              <div className="sci-card" style={{ padding: '1.1rem', background: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <Thermometer size={16} color="#D97706" />
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 700 }}>
                    TEMPERATURE
                  </span>
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#B45309' }}>
                  {simTemp}°C
                </div>
                <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>
                  BME280 compensated
                </div>
              </div>

              {/* Sensor */}
              <div className="sci-card" style={{ padding: '1.1rem', background: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <Eye size={16} color="#0891B2" />
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 700 }}>
                    COLOR SENSOR
                  </span>
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0088A3' }}>
                  TCS34725
                </div>
                <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>
                  R:{rgbVals.r} G:{rgbVals.g} B:{rgbVals.b}
                </div>
              </div>

              {/* Ambient check */}
              <div className="sci-card" style={{ padding: '1.1rem', background: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                  <Zap size={16} color="#7C3AED" />
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#64748B', fontWeight: 700 }}>
                    CONTROLLER
                  </span>
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#7C3AED' }}>
                  ESP32-S3
                </div>
                <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#94A3B8' }}>
                  BLE 5.0 GATT online
                </div>
              </div>

            </div>

            <div className="simulated-pill">
              SIMULATED TELEMETRY STREAM • REAL-TIME HARDWARE TEST BENCH
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
