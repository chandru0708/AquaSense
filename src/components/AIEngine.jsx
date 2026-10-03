import React, { useState } from 'react';
import { 
  Cpu, 
  Camera, 
  Crop, 
  Layers, 
  Maximize2, 
  Sliders, 
  CheckCircle2, 
  FileCheck, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function AIEngine() {
  const [pipelineState, setPipelineState] = useState('complete'); // 'processing', 'complete'
  const [activeStageIdx, setActiveStageIdx] = useState(6);

  const cvStages = [
    { title: "CAPTURE", icon: Camera, color: "#00B8D9", desc: "Raw camera frame or sensor RGBC payload ingestion" },
    { title: "STRIP DETECTION", icon: Crop, color: "#3AAED8", desc: "Edge-based bounding box extraction of strip outline" },
    { title: "ZONE LOCALIZATION", icon: Maximize2, color: "#8B5CF6", desc: "Spatial isolation of reaction, control & reference pads" },
    { title: "COLOR EXTRACTION", icon: Layers, color: "#A78BFA", desc: "RGB and CIELAB color space chromaticity extraction" },
    { title: "REFERENCE NORMALIZATION", icon: Sliders, color: "#00C9A7", desc: "White-tile ratio compensation for lens & light variance" },
    { title: "TEMP / LIGHT COMPENSATION", icon: Zap, color: "#F59E0B", desc: "BME280 temperature Arrhenius reaction curve adjustment" },
    { title: "MODEL INFERENCE", icon: Cpu, color: "#8B5CF6", desc: "Lightweight polynomial regression to FRC concentration" },
    { title: "FRC ESTIMATE", icon: Sparkles, color: "#059669", desc: "Quantitative prediction in parts per million (0.42 ppm)" },
    { title: "CONFIDENCE & DECISION", icon: CheckCircle2, color: "#10B981", desc: "Multi-parameter quality score (94%) & VALID verdict" }
  ];

  const handleRunInference = () => {
    setPipelineState('processing');
    setActiveStageIdx(0);
    const interval = setInterval(() => {
      setActiveStageIdx(prev => {
        if (prev >= cvStages.length - 1) {
          clearInterval(interval);
          setPipelineState('complete');
          return cvStages.length - 1;
        }
        return prev + 1;
      });
    }, 300);
  };

  return (
    <section 
      id="ai" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F3FF 50%, #FAF8FF 100%)',
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
            <Cpu size={14} color="#8B5CF6" />
            SECTION 08 • COMPUTER VISION &amp; ML
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            EDGE-ASSISTED INTELLIGENCE
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            AquaSense uses lightweight image processing and machine-learning techniques to reduce dependence on subjective visual colour interpretation.
          </p>
        </div>

        {/* 2-Column: Pipeline Diagram & Live Inference Telemetry Panel */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
          
          {/* LEFT: Animated CV Pipeline Stages */}
          <div 
            className="sci-card"
            style={{
              padding: '2rem',
              background: '#FFFFFF',
              border: '1.5px solid #DDD6FE',
              boxShadow: '0 16px 40px rgba(139, 92, 246, 0.1)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#6D28D9' }}>
                LIGHTWEIGHT INFERENCE PIPELINE
              </span>
              <button
                onClick={handleRunInference}
                disabled={pipelineState === 'processing'}
                style={{
                  background: pipelineState === 'processing' ? '#E2E8F0' : '#8B5CF6',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  cursor: pipelineState === 'processing' ? 'not-allowed' : 'pointer'
                }}
              >
                {pipelineState === 'processing' ? 'PROCESSING...' : 'TRIGGER INFERENCE'}
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {cvStages.map((stage, idx) => {
                const isCurrent = activeStageIdx === idx;
                const isPast = activeStageIdx > idx;
                const Icon = stage.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStageIdx(idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.55rem 0.85rem',
                      borderRadius: '8px',
                      background: isCurrent ? `${stage.color}15` : isPast ? '#F8FAFC' : '#FFFFFF',
                      border: isCurrent ? `2px solid ${stage.color}` : '1px solid #E2E8F0',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <div 
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        background: isCurrent ? stage.color : isPast ? '#94A3B8' : '#E2E8F0',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.65rem',
                        fontWeight: 700
                      }}
                    >
                      <Icon size={13} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: isCurrent ? stage.color : '#1E293B' }}>
                          0{idx + 1} {stage.title}
                        </span>
                        {isPast && <CheckCircle2 size={12} color="#10B981" />}
                      </div>
                      <div style={{ fontSize: '0.65rem', color: '#64748B' }}>
                        {stage.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Live Simulated AI Panel */}
          <div 
            className="sci-card"
            style={{
              padding: '2.5rem',
              background: 'linear-gradient(145deg, #FFFFFF 0%, #FAF8FF 100%)',
              border: '2px solid rgba(139, 92, 246, 0.3)',
              boxShadow: '0 20px 45px rgba(139, 92, 246, 0.12)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span className="badge" style={{ background: '#EDE9FE', color: '#6D28D9', border: '1px solid #DDD6FE' }}>
                EDGE INFERENCE OUTPUT
              </span>
              <span className="simulated-pill">SIMULATED DEMONSTRATION DATA</span>
            </div>

            {/* Big FRC Estimate Number Display */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1.5px solid #DDD6FE',
                padding: '1.5rem',
                textAlign: 'center',
                marginBottom: '1.5rem',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.08)'
              }}
            >
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#6D28D9', fontWeight: 700, marginBottom: '0.25rem' }}>
                ESTIMATED FREE RESIDUAL CHLORINE
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.4rem' }}>
                <span style={{ fontSize: '3.2rem', fontWeight: 800, color: '#123C45', lineHeight: 1 }}>
                  0.42
                </span>
                <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#00B8D9' }}>
                  ppm
                </span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700, marginTop: '0.35rem' }}>
                Complies with BIS 10500 Potable Standards (0.2 - 1.0 ppm)
              </div>
            </div>

            {/* Inference Telemetry Table */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#F8FAFC', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>MODEL CONFIDENCE</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#7C3AED' }}>94%</div>
                <div style={{ fontSize: '0.62rem', color: '#10B981' }}>High statistical certitude</div>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>TEST QUALITY</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#059669' }}>VALID</div>
                <div style={{ fontSize: '0.62rem', color: '#059669' }}>Control zone reactive</div>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>REFERENCE TILE</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0891B2' }}>MATCHED</div>
                <div style={{ fontSize: '0.62rem', color: '#64748B' }}>Chromatic delta &lt; 1.2%</div>
              </div>

              <div style={{ background: '#F8FAFC', padding: '0.75rem 1rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>DECISION VERDICT</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#123C45' }}>COMMIT</div>
                <div style={{ fontSize: '0.62rem', color: '#123C45' }}>Record stored to SQLite</div>
              </div>
            </div>

            <div style={{ fontSize: '0.78rem', color: '#4B6E76', lineHeight: 1.5, background: '#EDE9FE', padding: '0.85rem', borderRadius: '8px' }}>
              <strong>Zero Hallucination:</strong> Deterministic polynomial regression constrained to physical biochemical calibration curves ensures no generative hallucinations.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
