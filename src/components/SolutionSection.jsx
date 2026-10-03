import React, { useState } from 'react';
import { 
  Droplet, 
  Layers, 
  Scan, 
  Smartphone, 
  CheckCircle, 
  Database, 
  CloudUpload,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function SolutionSection() {
  const [activeStage, setActiveStage] = useState(2); // default optical measurement

  const solutionStages = [
    {
      step: "01",
      name: "SAMPLE",
      summary: "Collect water sample",
      detail: "Field worker draws 15 mL sample directly from tap, standpost, or storage tank into a standardized test tube.",
      tech: "Direct grab sample • No hazardous liquid reagents • Simple field protocol",
      icon: Droplet,
      color: "#00B8D9",
      bg: "#E0F8FC",
      badge: "PHYSICAL INTERACTION"
    },
    {
      step: "02",
      name: "REACT",
      summary: "Immerse AquaSense FRC strip",
      detail: "Immerse the multi-zone chemical strip for 2 seconds. The FRC reaction pad begins color development targeting 0.1 ppm sensitivity.",
      tech: "Dry reagent chemistry • Reaction time standardization • Dual verification zones",
      icon: Layers,
      color: "#FFB86B",
      bg: "#FFF5EB",
      badge: "BIO-CHEMICAL REACTION"
    },
    {
      step: "03",
      name: "OPTICALLY MEASURE",
      summary: "Controlled illumination + optical sensing",
      detail: "Insert strip into the light-tight reader chamber. Regulated 5000K LED illuminates the pads while TCS34725 records calibrated 16-bit RGBC spectral values.",
      tech: "TCS34725 sensor • BH1750 ambient reference • BME280 temperature compensation",
      icon: Scan,
      color: "#00C9A7",
      bg: "#E0FAF5",
      badge: "OPTICAL INSTRUMENTATION"
    },
    {
      step: "04",
      name: "ANALYZE",
      summary: "Smartphone image processing / lightweight model",
      detail: "Data streams via BLE to worker's phone. Computer vision or optical sensor readings normalize against the on-strip reference tile.",
      tech: "Lightweight ML inference • Non-cloud dependent • Chromatic aberration correction",
      icon: Smartphone,
      color: "#8B5CF6",
      bg: "#EDE9FE",
      badge: "EDGE INTELLIGENCE"
    },
    {
      step: "05",
      name: "VALIDATE",
      summary: "Control zone + optical reference + quality checks",
      detail: "Before presenting a number, the algorithm verifies that the control pad reacted properly, lighting was stable, and reaction timing was within tolerance.",
      tech: "8-point automated sanity check • Anti-false positive guardrail • Clear QA flags",
      icon: CheckCircle,
      color: "#10B981",
      bg: "#ECFDF5",
      badge: "QUALITY ASSURANCE"
    },
    {
      step: "06",
      name: "RECORD",
      summary: "Store result with source ID and timestamp",
      detail: "The quantified FRC value, confidence level, GPS coordinates, water source QR ID, worker ID, and strip lot ID are committed to local phone storage.",
      tech: "Local encrypted SQLite / IndexedDB • Tamper-evident record • Zero loss guarantee",
      icon: Database,
      color: "#F59E0B",
      bg: "#FEF3C7",
      badge: "LOCAL PERSISTENCE"
    },
    {
      step: "07",
      name: "SYNC",
      summary: "Upload when connectivity becomes available",
      detail: "When the worker enters mobile network range or reaches the panchayat Wi-Fi node, queued readings automatically synchronize to the state water dashboard.",
      tech: "Conflict-free replication • Bandwidth-efficient JSON payloads • Automatic retry",
      icon: CloudUpload,
      color: "#087F8C",
      bg: "#E6F4F6",
      badge: "DISTRIBUTED SYNC"
    }
  ];

  return (
    <section 
      id="solution" 
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
              background: '#E0FAF5', 
              color: '#087F8C', 
              border: '1px solid rgba(0, 201, 167, 0.35)' 
            }}
          >
            <Sparkles size={14} color="#00C9A7" />
            SECTION 02 • THE SOLUTION
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            INTRODUCING AQUASENSE
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A low-cost FRC strip transformed into a connected field intelligence system.
          </p>
        </div>

        {/* 7-Stage Workflow Interactive Carousel / Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))', gap: '0.85rem', marginBottom: '3rem' }}>
          {solutionStages.map((stage, idx) => {
            const isCurrent = activeStage === idx;
            const Icon = stage.icon;
            return (
              <div
                key={idx}
                onClick={() => setActiveStage(idx)}
                style={{
                  background: isCurrent ? '#FFFFFF' : 'rgba(255, 255, 255, 0.75)',
                  border: isCurrent ? `2.5px solid ${stage.color}` : '1px solid rgba(18, 60, 69, 0.08)',
                  borderRadius: '16px',
                  padding: '1.25rem 0.85rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  boxShadow: isCurrent ? `0 10px 24px ${stage.color}25` : 'var(--shadow-sm)',
                  transform: isCurrent ? 'translateY(-6px)' : 'none',
                  transition: 'all 0.28s ease',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: stage.bg,
                    color: stage.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 0.75rem auto'
                  }}
                >
                  <Icon size={20} />
                </div>

                <div 
                  style={{ 
                    fontSize: '0.62rem', 
                    fontFamily: 'var(--font-mono)', 
                    fontWeight: 800, 
                    color: stage.color,
                    marginBottom: '0.2rem'
                  }}
                >
                  STAGE {stage.step}
                </div>

                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#123C45', lineHeight: 1.25 }}>
                  {stage.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Active Stage Showcase Card */}
        {(() => {
          const current = solutionStages[activeStage];
          const CurrentIcon = current.icon;
          return (
            <div 
              className="sci-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                border: `2px solid ${current.color}`,
                boxShadow: `0 18px 45px ${current.color}18`,
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div 
                      style={{
                        padding: '0.45rem 0.85rem',
                        borderRadius: '8px',
                        background: current.bg,
                        color: current.color,
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 800,
                        fontSize: '0.85rem'
                      }}
                    >
                      STAGE {current.step} OF 07
                    </div>
                    <span 
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        color: '#64748B',
                        textTransform: 'uppercase'
                      }}
                    >
                      {current.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#123C45', marginBottom: '0.85rem' }}>
                    {current.name}: {current.summary}
                  </h3>

                  <p style={{ fontSize: '1.05rem', color: '#335560', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {current.detail}
                  </p>

                  <div 
                    style={{
                      background: current.bg,
                      borderRadius: '12px',
                      padding: '1rem 1.25rem',
                      border: `1px solid ${current.color}35`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: current.color }} />
                    <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: '#123C45', fontWeight: 600 }}>
                      <strong>System Implementation:</strong> {current.tech}
                    </span>
                  </div>
                </div>

                <div 
                  style={{
                    background: `linear-gradient(145deg, ${current.bg} 0%, #FFFFFF 100%)`,
                    borderRadius: '20px',
                    border: '1.5px solid rgba(18, 60, 69, 0.08)',
                    padding: '2.5rem',
                    textAlign: 'center',
                    boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <div 
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '24px',
                      background: current.color,
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem auto',
                      boxShadow: `0 12px 28px ${current.color}45`
                    }}
                  >
                    <CurrentIcon size={40} />
                  </div>

                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#123C45', marginBottom: '0.4rem' }}>
                    {current.name} VERIFICATION
                  </div>

                  <div style={{ fontSize: '0.82rem', color: '#64748B', maxWidth: '320px', margin: '0 auto 1.25rem auto' }}>
                    Seamless integration between biological chemistry, embedded optics, and mobile software.
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                    <button
                      onClick={() => setActiveStage((activeStage - 1 + 7) % 7)}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        background: '#FFFFFF',
                        cursor: 'pointer',
                        fontSize: '0.78rem',
                        fontWeight: 700
                      }}
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={() => setActiveStage((activeStage + 1) % 7)}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '8px',
                        border: 'none',
                        background: current.color,
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        fontSize: '0.78rem',
                        fontWeight: 700
                      }}
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
