import React, { useState, useEffect } from 'react';
import { 
  Droplet, 
  Scan, 
  Smartphone, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  Play, 
  Sparkles,
  WifiOff,
  Thermometer,
  Sun
} from 'lucide-react';
import { SYSTEM_INFO } from '../data/mockData';

export default function Hero() {
  const [animStage, setAnimStage] = useState(0); // 0: Sample, 1: React, 2: Scan, 3: Phone Analysis, 4: Result
  const [stripPpm, setStripPpm] = useState(0.42);

  // Auto-cycle through testing sequence smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimStage((prev) => (prev + 1) % 5);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const getStripColor = (stage) => {
    switch(stage) {
      case 0: return '#FDF8E4'; // Pale yellow (unreacted)
      case 1: return '#FDE68A'; // Developing reaction
      case 2: return '#FBBF24'; // Active reaction color
      case 3: return '#F59E0B'; // Deepening orange
      case 4: return '#FF7A6B'; // Stabilized coral-orange (0.42 ppm)
      default: return '#FBBF24';
    }
  };

  const stageLabels = [
    { title: "WATER SAMPLE", desc: "Target water collected into optical vial", icon: Droplet, color: "#00B8D9" },
    { title: "STRIP REACTION", desc: "FRC reagents react; zone changes pale yellow → coral", icon: Layers, color: "#FFB86B" },
    { title: "OPTICAL SCAN", desc: "TCS34725 RGBC sensor & stabilized 5000K beam", icon: Scan, color: "#00C9A7" },
    { title: "PHONE ANALYSIS", desc: "Lightweight computer vision reference normalization", icon: Smartphone, color: "#8B5CF6" },
    { title: "FRC RESULT", desc: "0.42 ppm estimated with 94% confidence check", icon: CheckCircle2, color: "#10B981" }
  ];

  return (
    <section 
      id="hero" 
      style={{
        position: 'relative',
        paddingTop: '8.5rem',
        paddingBottom: '5.5rem',
        background: 'linear-gradient(180deg, #F0FBFD 0%, #F7FBFA 60%, #FFFFFF 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Dynamic Water Wave & Microscopic Bubble SVG Background */}
      <div className="liquid-wave-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 600" fill="none" style={{ width: '100%', height: '100%', minHeight: '600px', opacity: 0.65 }}>
          <path 
            d="M0,160 C320,300 480,80 800,200 C1120,320 1280,120 1440,180 L1440,0 L0,0 Z" 
            fill="url(#hero-water-grad-1)" 
          />
          <path 
            d="M0,220 C360,100 600,320 920,180 C1240,40 1360,260 1440,220 L1440,0 L0,0 Z" 
            fill="url(#hero-water-grad-2)" 
            opacity="0.5" 
          />
          <defs>
            <linearGradient id="hero-water-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00B8D9" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#7AE7C7" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="hero-water-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00C9A7" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#FFD166" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Subtle microscopic bubbles */}
          <circle cx="120" cy="180" r="14" fill="#00B8D9" fillOpacity="0.08" />
          <circle cx="280" cy="340" r="22" fill="#7AE7C7" fillOpacity="0.09" />
          <circle cx="680" cy="120" r="18" fill="#3AAED8" fillOpacity="0.07" />
          <circle cx="1180" cy="240" r="26" fill="#00C9A7" fillOpacity="0.08" />
          <circle cx="1340" cy="110" r="16" fill="#FFB86B" fillOpacity="0.08" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* LEFT SIDE: Storytelling, Badges, Heading, CTAs */}
          <div>
            
            {/* Small Official Hackathon Label */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.4rem 0.95rem',
                borderRadius: '100px',
                background: 'linear-gradient(90deg, #E0FAF5 0%, #EBF8FC 100%)',
                border: '1px solid rgba(0, 201, 167, 0.35)',
                color: '#087F8C',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                marginBottom: '1.25rem',
                boxShadow: '0 2px 8px rgba(0, 184, 217, 0.08)'
              }}
            >
              <Sparkles size={14} color="#00C9A7" />
              SMART INDIA HACKATHON 2026 • PS 26253
            </div>

            {/* Large Heading */}
            <h1 
              style={{ 
                fontSize: 'clamp(2.5rem, 4.8vw, 4.2rem)', 
                fontWeight: 800, 
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: '#123C45',
                marginBottom: '0.6rem'
              }}
            >
              KNOW YOUR WATER.
              <br />
              <span 
                style={{
                  background: 'linear-gradient(110deg, #00B8D9 0%, #00C9A7 45%, #10B981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                BEFORE YOU DRINK IT.
              </span>
            </h1>

            {/* Supporting Text */}
            <p 
              style={{ 
                fontSize: 'clamp(1rem, 1.25vw, 1.15rem)', 
                color: '#335560', 
                lineHeight: 1.65, 
                maxWidth: '600px',
                marginBottom: '1.75rem' 
              }}
            >
              AquaSense is a field-ready strip-based Free Residual Chlorine monitoring system designed around <strong style={{ color: '#087F8C' }}>0.1 ppm sensitivity</strong>, controlled optical measurement, smartphone-assisted analysis, and offline-first water-source monitoring.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.2rem' }}>
              <a 
                href="#problem" 
                className="btn-primary"
                style={{ fontSize: '1rem', padding: '0.95rem 2rem' }}
              >
                <span>EXPLORE AQUASENSE</span>
                <ArrowRight size={18} />
              </a>

              <a 
                href="#live-demo" 
                className="btn-secondary"
                style={{ fontSize: '1rem', padding: '0.95rem 1.8rem' }}
              >
                <Play size={16} fill="#087F8C" />
                <span>RUN LIVE DEMO</span>
              </a>
            </div>

            {/* Technical Badges in Multi-Color Palette */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
              <div 
                className="badge" 
                style={{ background: '#FFF9EB', color: '#B45309', border: '1px solid #FDE68A' }}
              >
                <span className="telemetry-dot warning" />
                TARGET 0.1 PPM FRC
              </div>

              <div 
                className="badge" 
                style={{ background: '#E0F8FC', color: '#007C92', border: '1px solid #BAEEF8' }}
              >
                <Scan size={12} />
                OPTICAL READING
              </div>

              <div 
                className="badge" 
                style={{ background: '#EDE9FE', color: '#6D28D9', border: '1px solid #DDD6FE' }}
              >
                <Cpu size={12} />
                EDGE ANALYSIS
              </div>

              <div 
                className="badge" 
                style={{ background: '#EFFDF9', color: '#047857', border: '1px solid #A7F3D0' }}
              >
                <WifiOff size={12} />
                OFFLINE-FIRST
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Highly Detailed AquaSense Hardware & Strip Testing Visualization */}
          <div style={{ position: 'relative' }}>
            
            {/* Visual Testing Enclosure Container */}
            <div 
              className="sci-card"
              style={{
                background: 'linear-gradient(145deg, #FFFFFF 0%, #F5FBFB 100%)',
                padding: '2rem 1.75rem',
                border: '1.5px solid rgba(0, 184, 217, 0.28)',
                boxShadow: '0 20px 45px rgba(0, 184, 217, 0.14)',
                position: 'relative'
              }}
            >
              {/* Top Header of the Scientific Chamber Visualizer */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(18, 60, 69, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00C9A7', boxShadow: '0 0 8px #00C9A7' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#123C45', letterSpacing: '0.08em' }}>
                    OPTICAL CHAMBER [TCS34725 + ESP32-S3]
                  </span>
                </div>
                <span className="simulated-pill">SIMULATED INSTRUMENT</span>
              </div>

              {/* Central Chamber Cross-Section Graphic */}
              <div 
                style={{
                  background: 'linear-gradient(180deg, #F8FDFF 0%, #EEF9FA 100%)',
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 184, 217, 0.2)',
                  padding: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '270px'
                }}
              >
                {/* 5000K Calibrated LED Emitter at Top */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}>
                  <div 
                    style={{
                      background: '#FFFBEB',
                      border: '1.5px solid #FCD34D',
                      borderRadius: '8px',
                      padding: '0.35rem 0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 2px 10px rgba(251, 191, 36, 0.2)'
                    }}
                  >
                    <Sun size={15} color="#D97706" />
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#92400E' }}>
                      CONTROLLED 5000K LED + PTFE DIFFUSER
                    </span>
                  </div>

                  {/* Optical Light Beam traveling downwards */}
                  <div 
                    style={{
                      width: '65%',
                      height: '36px',
                      background: 'linear-gradient(180deg, rgba(253, 230, 138, 0.45) 0%, rgba(0, 184, 217, 0.2) 100%)',
                      clipPath: 'polygon(25% 0%, 75% 0%, 95% 100%, 5% 100%)',
                      position: 'relative',
                      margin: '0.2rem 0'
                    }}
                  >
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: '#00B8D9',
                        boxShadow: '0 0 10px #00B8D9',
                        animation: 'beamScan 2.4s infinite ease-in-out'
                      }}
                    />
                  </div>
                </div>

                {/* THE MULTI-ZONE FRC TEST STRIP (HORIZONTAL IN FIXTURE) */}
                <div 
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #CBD5E1',
                    borderRadius: '8px',
                    padding: '0.65rem 1rem',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 2
                  }}
                >
                  <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#64748B' }}>
                    AQUASENSE STRIP #AS26
                  </div>

                  {/* Strip Pads */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    
                    {/* Zone C: Optical Reference */}
                    <div style={{ textAlign: 'center' }}>
                      <div 
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '4px',
                          background: '#A78BFA',
                          border: '1px solid #7C3AED',
                          boxShadow: '0 0 6px rgba(167, 139, 250, 0.4)'
                        }}
                      />
                      <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: '#6D28D9', display: 'block', marginTop: '2px' }}>
                        REF
                      </span>
                    </div>

                    {/* Zone B: Control Pad */}
                    <div style={{ textAlign: 'center' }}>
                      <div 
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '4px',
                          background: '#7AE7C7',
                          border: '1px solid #059669',
                          boxShadow: '0 0 6px rgba(122, 231, 199, 0.4)'
                        }}
                      />
                      <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: '#047857', display: 'block', marginTop: '2px' }}>
                        CTRL
                      </span>
                    </div>

                    {/* Zone A: FRC Reaction Zone (ANIMATES COLOR!) */}
                    <div style={{ textAlign: 'center' }}>
                      <div 
                        style={{
                          width: '32px',
                          height: '26px',
                          borderRadius: '4px',
                          background: getStripColor(animStage),
                          border: '1.5px solid #EA580C',
                          boxShadow: `0 0 12px ${getStripColor(animStage)}`,
                          transition: 'background-color 0.8s ease, box-shadow 0.8s ease'
                        }}
                      />
                      <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#C2410C', display: 'block', marginTop: '2px' }}>
                        FRC
                      </span>
                    </div>

                  </div>
                </div>

                {/* Bottom Sensors (TCS34725 + BME280 + BH1750 + ESP32) */}
                <div style={{ marginTop: '1.25rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
                  <div style={{ background: '#FFFFFF', padding: '0.5rem', borderRadius: '8px', border: '1px solid #BAEEF8', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: '#087F8C', fontWeight: 600 }}>SENSOR</div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0088A3' }}>TCS34725</div>
                    <div style={{ fontSize: '0.58rem', color: '#10B981', fontFamily: 'var(--font-mono)' }}>RGBC 16-BIT</div>
                  </div>

                  <div style={{ background: '#FFFFFF', padding: '0.5rem', borderRadius: '8px', border: '1px solid #FCD34D', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: '#92400E', fontWeight: 600 }}>TEMP/ENV</div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#B45309' }}>26.4°C</div>
                    <div style={{ fontSize: '0.58rem', color: '#65A30D', fontFamily: 'var(--font-mono)' }}>BME280 OK</div>
                  </div>

                  <div style={{ background: '#FFFFFF', padding: '0.5rem', borderRadius: '8px', border: '1px solid #DDD6FE', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: '#6D28D9', fontWeight: 600 }}>CONTROLLER</div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#7C3AED' }}>ESP32-S3</div>
                    <div style={{ fontSize: '0.58rem', color: '#059669', fontFamily: 'var(--font-mono)' }}>BLE ACTIVE</div>
                  </div>
                </div>

              </div>

              {/* Progress Stepper through Testing Pipeline */}
              <div style={{ marginTop: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#4B6E76' }}>
                    STAGE 0{animStage + 1}/05: {stageLabels[animStage].title}
                  </span>
                  <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: stageLabels[animStage].color, fontWeight: 700 }}>
                    {stageLabels[animStage].desc}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.35rem' }}>
                  {stageLabels.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setAnimStage(idx)}
                      style={{
                        height: '6px',
                        borderRadius: '3px',
                        border: 'none',
                        background: animStage >= idx ? s.color : '#E2E8F0',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      title={s.title}
                    />
                  ))}
                </div>
              </div>

              {/* SCIENTIFIC FIELD RESULT PANEL (Docked cleanly below stepper with zero overlap) */}
              <div 
                style={{
                  marginTop: '1.25rem',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F3FBF8 100%)',
                  borderRadius: '14px',
                  padding: '1rem 1.25rem',
                  border: '1.5px solid rgba(0, 201, 167, 0.4)',
                  boxShadow: '0 4px 16px rgba(18, 60, 69, 0.06)',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#123C45', fontWeight: 800 }}>
                      AquaSense FIELD TEST RESULT
                    </span>
                    <span 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '999px',
                        background: '#ECFDF5',
                        color: '#059669',
                        fontSize: '0.62rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700
                      }}
                    >
                      ● TEST VALID
                    </span>
                  </div>

                  <span className="simulated-pill" style={{ fontSize: '0.58rem' }}>
                    SIMULATED DEMO DATA
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.45rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#4B6E76', fontWeight: 700 }}>FRC ESTIMATE:</span>
                    <span style={{ fontSize: '1.85rem', fontWeight: 800, color: '#087F8C', lineHeight: 1 }}>0.42</span>
                    <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: '#087F8C', fontWeight: 700 }}>ppm</span>
                  </div>
                  <span style={{ fontSize: '0.68rem', color: '#059669', fontWeight: 700 }}>
                    Nominal Potable Target
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', borderTop: '1px solid rgba(18, 60, 69, 0.08)', paddingTop: '0.5rem', fontSize: '0.68rem', fontFamily: 'var(--font-mono)' }}>
                  <div>
                    <span style={{ color: '#7E9FA7', display: 'block', fontSize: '0.6rem' }}>CONFIDENCE</span>
                    <strong style={{ color: '#059669' }}>94%</strong>
                  </div>
                  <div>
                    <span style={{ color: '#7E9FA7', display: 'block', fontSize: '0.6rem' }}>WATER SOURCE</span>
                    <strong style={{ color: '#123C45' }}>WS-014</strong>
                  </div>
                  <div>
                    <span style={{ color: '#7E9FA7', display: 'block', fontSize: '0.6rem' }}>LOT PASSPORT</span>
                    <strong style={{ color: '#8B5CF6' }}>AS26-001</strong>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
