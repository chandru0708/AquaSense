import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  QrCode, 
  Droplet, 
  Layers, 
  Timer, 
  Scan, 
  CheckCircle, 
  Calculator, 
  Database, 
  CloudUpload,
  Smartphone,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function FieldWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      step: "01",
      title: "IDENTIFY SOURCE",
      desc: "Scan QR code mounted on community tap stand or select source ID.",
      color: "#00B8D9",
      screenTitle: "SCANNING SOURCE QR",
      screenContent: "QR Tag Detected: WS-014\nType: Public Standpost\nLocation: Gram Panchayat #4",
      icon: QrCode
    },
    {
      step: "02",
      title: "COLLECT SAMPLE",
      desc: "Draw 15 mL water sample into calibrated test vial directly from tap.",
      color: "#3AAED8",
      screenTitle: "SAMPLE VOLUME CONFIRMED",
      screenContent: "Fill mark reached: 15 mL\nTemp sensor active: 26.4°C\nReady for strip immersion",
      icon: Droplet
    },
    {
      step: "03",
      title: "INSERT STRIP",
      desc: "Dip AquaSense strip for 2 seconds and seat into optical chamber guide.",
      color: "#FFB86B",
      screenTitle: "STRIP INSERTED",
      screenContent: "Chamber micro-switch: CLOSED\nStrip alignment: LOCKED\nBatch verified: AS26-001",
      icon: Layers
    },
    {
      step: "04",
      title: "START TIMER",
      desc: "Standardized 25-second biochemical incubation countdown starts.",
      color: "#F59E0B",
      screenTitle: "REACTION INCUBATION",
      screenContent: "Incubation countdown: 00:18s\nThermal rate compensation applied\nDo not open chamber lid",
      icon: Timer
    },
    {
      step: "05",
      title: "OPTICAL SCAN",
      desc: "LED pulses at 5000K; TCS34725 records multi-channel spectral response.",
      color: "#00C9A7",
      screenTitle: "SPECTRAL ACQUISITION",
      screenContent: "TCS34725 reading pads...\nClear channel: 840 counts\nColorimetry matrix generated",
      icon: Scan
    },
    {
      step: "06",
      title: "VALIDATE",
      desc: "Automated sanity check tests control zone, illumination, and exposure.",
      color: "#10B981",
      screenTitle: "QUALITY CHECKS PASS",
      screenContent: "Control Pad: ACTIVE (OK)\nWhite Reference: MATCHED\nLighting Stability: 99.8%",
      icon: CheckCircle
    },
    {
      step: "07",
      title: "CALCULATE",
      desc: "Lightweight polynomial inference model computes Free Residual Chlorine ppm.",
      color: "#8B5CF6",
      screenTitle: "FRC COMPUTED",
      screenContent: "Estimated FRC: 0.42 ppm\nConfidence: 94%\nStatus: POTABLE / COMPLIANT",
      icon: Calculator
    },
    {
      step: "08",
      title: "STORE",
      desc: "Test result stored immediately in local SQLite encrypted database.",
      color: "#FF7A6B",
      screenTitle: "PERSISTED LOCALLY",
      screenContent: "Record #1042 committed\nZero connectivity needed\nGPS coordinates embedded",
      icon: Database
    },
    {
      step: "09",
      title: "SYNC",
      desc: "Synchronizes automatically to state water dashboard when in cell range.",
      color: "#087F8C",
      screenTitle: "CLOUD SYNCHRONIZED",
      screenContent: "Cellular signal acquired (4G)\nUplink to Jal Jeevan Portal: OK\nPanchayat alert: NONE NEEDED",
      icon: CloudUpload
    }
  ];

  return (
    <section 
      id="workflow" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #F8FCFC 0%, #FFFFFF 50%, #F5FBFB 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div 
            className="section-label"
            style={{ 
              background: '#E0FAF5', 
              color: '#047857', 
              border: '1px solid #A7F3D0' 
            }}
          >
            <ClipboardCheck size={14} color="#00C9A7" />
            SECTION 07 • FIELD WORKFLOW
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            FROM WATER SOURCE TO VERIFIED RECORD
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A disciplined 9-step field protocol designed for frontline ASHA and Jal Sahi workers to eliminate human error.
          </p>
        </div>

        {/* 2-Column: Left 9-Step List, Right Smartphone Screen Visualizer */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          {/* LEFT: 9-Step List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {workflowSteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '0.85rem 1.1rem',
                    borderRadius: '12px',
                    background: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                    border: isSelected ? `2px solid ${step.color}` : '1px solid rgba(18, 60, 69, 0.08)',
                    boxShadow: isSelected ? `0 6px 18px ${step.color}25` : 'none',
                    cursor: 'pointer',
                    transform: isSelected ? 'translateX(6px)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: `${step.color}15`,
                      color: step.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: step.color }}>
                        STEP {step.step}
                      </span>
                      <h3 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#123C45' }}>
                        {step.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: '0.74rem', color: '#64748B', lineHeight: 1.35 }}>
                      {step.desc}
                    </p>
                  </div>

                  <ChevronRight size={16} color={isSelected ? step.color : '#CBD5E1'} />
                </div>
              );
            })}
          </div>

          {/* RIGHT: Smartphone Simulator */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div 
              style={{
                width: '100%',
                maxWidth: '340px',
                background: '#FFFFFF',
                borderRadius: '36px',
                border: '8px solid #1E293B',
                boxShadow: '0 25px 60px rgba(18, 60, 69, 0.18)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Phone Speaker Notch */}
              <div style={{ background: '#1E293B', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '60px', height: '4px', borderRadius: '2px', background: '#475569' }} />
              </div>

              {/* Phone Screen Header */}
              <div style={{ background: 'linear-gradient(135deg, #00B8D9 0%, #00C9A7 100%)', padding: '1rem', color: '#FFFFFF' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', fontFamily: 'var(--font-mono)', marginBottom: '0.35rem' }}>
                  <span>AquaSense Field App</span>
                  <span>STEP 0{activeStep + 1}/09</span>
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800 }}>
                  {workflowSteps[activeStep].title}
                </div>
              </div>

              {/* Screen Body */}
              <div style={{ padding: '1.5rem', background: '#F8FAFC', minHeight: '300px' }}>
                <div 
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    border: `1.5px solid ${workflowSteps[activeStep].color}`,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                    marginBottom: '1rem'
                  }}
                >
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: workflowSteps[activeStep].color, marginBottom: '0.5rem' }}>
                    {workflowSteps[activeStep].screenTitle}
                  </div>
                  <pre 
                    style={{ 
                      fontSize: '0.75rem', 
                      fontFamily: 'var(--font-mono)', 
                      color: '#1E293B', 
                      whiteSpace: 'pre-wrap', 
                      lineHeight: 1.6 
                    }}
                  >
                    {workflowSteps[activeStep].screenContent}
                  </pre>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button
                    onClick={() => setActiveStep((activeStep + 1) % 9)}
                    style={{
                      background: workflowSteps[activeStep].color,
                      color: '#FFFFFF',
                      border: 'none',
                      padding: '0.65rem 1.25rem',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      width: '100%'
                    }}
                  >
                    Simulate Next Step →
                  </button>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div style={{ height: '18px', background: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '90px', height: '3px', borderRadius: '2px', background: '#CBD5E1' }} />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
