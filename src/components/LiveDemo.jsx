import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  QrCode, 
  Droplet, 
  Layers, 
  Scan, 
  ShieldCheck, 
  Cpu, 
  Database, 
  CloudUpload,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function LiveDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0); // 0 to 8
  const [demoComplete, setDemoComplete] = useState(false);

  const demoSteps = [
    { title: "SOURCE IDENTIFIED", desc: "QR tag read: VILLAGE-WS-014 (GPS Locked)", icon: QrCode, color: "#00B8D9" },
    { title: "SAMPLE COLLECTED", desc: "15 mL direct grab sample from community tap", icon: Droplet, color: "#3AAED8" },
    { title: "STRIP REACTION", desc: "FRC indicator pad develops pale yellow → orange", icon: Layers, color: "#FFB86B" },
    { title: "OPTICAL SCAN", desc: "5000K LED active; TCS34725 records 16-bit counts", icon: Scan, color: "#00C9A7" },
    { title: "IMAGE VALIDATION", desc: "Control zone active & reference tile normalized", icon: ShieldCheck, color: "#10B981" },
    { title: "AI ANALYSIS", desc: "Polynomial calibration curve applied at 26.4°C", icon: Cpu, color: "#8B5CF6" },
    { title: "RESULT STORED", desc: "Committed to offline encrypted SQLite record", icon: Database, color: "#F59E0B" },
    { title: "SYNC READY", desc: "Queued for automatic Jal Jeevan Mission dashboard uplink", icon: CloudUpload, color: "#087F8C" }
  ];

  const handleRunDemo = () => {
    setIsRunning(true);
    setDemoComplete(false);
    setCurrentStep(1);

    let step = 1;
    const interval = setInterval(() => {
      step++;
      if (step > 8) {
        clearInterval(interval);
        setIsRunning(false);
        setDemoComplete(true);
      } else {
        setCurrentStep(step);
      }
    }, 750);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setDemoComplete(false);
  };

  return (
    <section 
      id="live-demo" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #F0FBFD 0%, #FFFFFF 50%, #F5FBFB 100%)',
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
            <Sparkles size={14} color="#00B8D9" />
            SECTION 14 • INTERACTIVE DEMONSTRATOR
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            LIVE FIELD TEST
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Simulate a full end-to-end water quality assessment lifecycle from physical tap sampling to verified result storage.
          </p>
        </div>

        {/* Live Test Console Enclosure */}
        <div 
          className="sci-card"
          style={{
            padding: '2.5rem',
            background: '#FFFFFF',
            border: '2px solid rgba(0, 184, 217, 0.35)',
            boxShadow: '0 20px 50px rgba(0, 184, 217, 0.12)'
          }}
        >
          {/* Controls Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span className={`telemetry-dot ${demoComplete ? 'online' : isRunning ? 'warning' : 'online'}`} />
              <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#123C45' }}>
                {isRunning ? `EXECUTING STAGE 0${currentStep}/08...` : demoComplete ? 'TEST CYCLE COMPLETE' : 'READY TO COMMENCE TEST'}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={handleRunDemo}
                disabled={isRunning}
                className="btn-primary"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
              >
                <Play size={16} fill="#FFFFFF" />
                {isRunning ? 'RUNNING TEST...' : 'RUN LIVE TEST'}
              </button>

              <button
                onClick={handleReset}
                disabled={isRunning}
                className="btn-secondary"
                style={{ padding: '0.65rem 1.1rem', fontSize: '0.85rem' }}
              >
                <RotateCcw size={15} />
                RESET DEMO
              </button>
            </div>
          </div>

          {/* 8-Step Interactive Progress Stepper */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {demoSteps.map((step, idx) => {
              const stepNum = idx + 1;
              const isPast = currentStep > stepNum || demoComplete;
              const isCurrent = currentStep === stepNum;
              const Icon = step.icon;

              return (
                <div
                  key={idx}
                  style={{
                    background: isCurrent ? `${step.color}15` : isPast ? '#F8FAFC' : '#FFFFFF',
                    border: isCurrent ? `2.5px solid ${step.color}` : isPast ? `1.5px solid ${step.color}50` : '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '1rem 0.65rem',
                    textAlign: 'center',
                    transition: 'all 0.25s ease',
                    boxShadow: isCurrent ? `0 6px 18px ${step.color}25` : 'none',
                    transform: isCurrent ? 'scale(1.05)' : 'none'
                  }}
                >
                  <div 
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: isPast || isCurrent ? step.color : '#E2E8F0',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.5rem auto'
                    }}
                  >
                    <Icon size={16} />
                  </div>

                  <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: isPast || isCurrent ? step.color : '#94A3B8', display: 'block' }}>
                    0{stepNum}
                  </span>

                  <h3 style={{ fontSize: '0.72rem', fontWeight: 800, color: '#123C45', lineHeight: 1.25, marginTop: '2px' }}>
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Final Result Card Display (Only after test completion or initial state) */}
          <div 
            style={{
              background: 'linear-gradient(145deg, #F8FAFC 0%, #EFFDF9 100%)',
              borderRadius: '20px',
              border: '2px solid #A7F3D0',
              padding: '2rem',
              boxShadow: '0 8px 30px rgba(16, 185, 129, 0.08)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={20} color="#059669" />
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#059669' }}>
                  CERTIFIED TEST RECORD GENERATED
                </span>
              </div>
              <span className="simulated-pill">SIMULATED DEMONSTRATION DATA</span>
            </div>

            {/* Results Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
              
              <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '12px', border: '1px solid #CBD5E1', textAlign: 'center' }}>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>FREE RESIDUAL CHLORINE</span>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#087F8C', lineHeight: 1.1 }}>
                  0.42 <span style={{ fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>ppm</span>
                </div>
                <span style={{ fontSize: '0.65rem', color: '#059669', fontWeight: 700 }}>Optimal Protection Limit</span>
              </div>

              <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '12px', border: '1px solid #CBD5E1', textAlign: 'center' }}>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>TEST INTEGRITY</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#059669', lineHeight: 1.3 }}>
                  ● VALID
                </div>
                <span style={{ fontSize: '0.65rem', color: '#64748B' }}>Control zone reactive</span>
              </div>

              <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '12px', border: '1px solid #CBD5E1', textAlign: 'center' }}>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>CONFIDENCE</span>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#7C3AED', lineHeight: 1.1 }}>
                  94%
                </div>
                <span style={{ fontSize: '0.65rem', color: '#64748B' }}>R² Curve Correlation</span>
              </div>

              <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '12px', border: '1px solid #CBD5E1', textAlign: 'center' }}>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>SOURCE &amp; BATCH</span>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#123C45', marginTop: '0.35rem' }}>
                  WS-014
                </div>
                <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#8B5CF6' }}>
                  BATCH: AS26-001
                </div>
              </div>

            </div>

            <div style={{ fontSize: '0.75rem', color: '#4B6E76', textAlign: 'center', fontStyle: 'italic' }}>
              Notice: This is a demonstration state machine. No real biological reagent or physical chlorine measurement is implied.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
