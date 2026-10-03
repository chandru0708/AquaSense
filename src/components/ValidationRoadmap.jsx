import React, { useState } from 'react';
import { 
  GitCommit, 
  FlaskConical, 
  Sliders, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Truck,
  ArrowRight,
  Info
} from 'lucide-react';

export default function ValidationRoadmap() {
  const [activePhase, setActivePhase] = useState(2);

  const roadmapStages = [
    {
      step: "01",
      domain: "LABORATORY PHASE",
      title: "CHEMISTRY REAGENT FORMULATION",
      color: "#FF7A6B",
      bg: "#FFF0EE",
      icon: FlaskConical,
      status: "ACTIVE EXPLORATION",
      deliverable: "Optimizing dry indicator stabilizer & binding matrix for rapid wetting."
    },
    {
      step: "02",
      domain: "LABORATORY PHASE",
      title: "0.1 PPM RESPONSE VALIDATION",
      color: "#F59E0B",
      bg: "#FEF3C7",
      icon: CheckCircle2,
      status: "CURRENT BENCHMARK",
      deliverable: "Titrating standard sodium hypochlorite dilutions to confirm 0.10 ppm limit of detection."
    },
    {
      step: "03",
      domain: "ENGINEERING PHASE",
      title: "OPTICAL READER CALIBRATION",
      color: "#00B8D9",
      bg: "#E0F8FC",
      icon: Sliders,
      status: "PROTOTYPE DESIGN",
      deliverable: "Integrating TCS34725 with 5000K LED current regulator and temperature compensation."
    },
    {
      step: "04",
      domain: "ENGINEERING PHASE",
      title: "MULTI-BATCH TESTING",
      color: "#8B5CF6",
      bg: "#EDE9FE",
      icon: Layers,
      status: "PLANNED NEXT",
      deliverable: "Fabricating 5 distinct manufacturing batches to validate digital QR curve passport model."
    },
    {
      step: "05",
      domain: "FIELD PHASE",
      title: "REFERENCE-METHOD COMPARISON",
      color: "#00C9A7",
      bg: "#E0FAF5",
      icon: Cpu,
      status: "PLANNED",
      deliverable: "Side-by-side split-sample testing against certified NABL benchtop DPD spectrophotometer."
    },
    {
      step: "06",
      domain: "FIELD PHASE",
      title: "VILLAGE FIELD PILOT",
      color: "#10B981",
      bg: "#ECFDF5",
      icon: Truck,
      status: "TARGET DEPLOYMENT",
      deliverable: "100-habitation field trial deployed with Jal Jeevan Mission field surveillance cadre."
    }
  ];

  return (
    <section 
      id="roadmap" 
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
              background: '#E0F8FC', 
              color: '#0088A3', 
              border: '1px solid #BAEEF8' 
            }}
          >
            <GitCommit size={14} color="#00B8D9" />
            SECTION 16 • VALIDATION ROADMAP
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            FROM PROTOTYPE TO VALIDATED FIELD DEVICE
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A phased translation methodology progressing from wet-bench chemical synthesis through embedded prototyping to rigorous field certification.
          </p>
        </div>

        {/* Phased Pipeline Tracker */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <span style={{ padding: '0.45rem 1.1rem', borderRadius: '8px', background: '#FFF0EE', color: '#C2410C', fontWeight: 800, fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
            LABORATORY PHASE (01 - 02)
          </span>
          <ArrowRight size={16} color="#94A3B8" />
          <span style={{ padding: '0.45rem 1.1rem', borderRadius: '8px', background: '#E0F8FC', color: '#007C92', fontWeight: 800, fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
            ENGINEERING PHASE (03 - 04)
          </span>
          <ArrowRight size={16} color="#94A3B8" />
          <span style={{ padding: '0.45rem 1.1rem', borderRadius: '8px', background: '#ECFDF5', color: '#047857', fontWeight: 800, fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
            FIELD PILOT PHASE (05 - 06)
          </span>
        </div>

        {/* 6 Roadmap Milestones Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {roadmapStages.map((stage, idx) => {
            const Icon = stage.icon;
            const isSelected = activePhase === idx;

            return (
              <div
                key={idx}
                onClick={() => setActivePhase(idx)}
                className="sci-card"
                style={{
                  padding: '1.75rem',
                  background: '#FFFFFF',
                  borderTop: `4px solid ${stage.color}`,
                  cursor: 'pointer',
                  transform: isSelected ? 'translateY(-4px)' : 'none',
                  boxShadow: isSelected ? `0 12px 28px ${stage.color}25` : 'var(--shadow-sm)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: stage.color }}>
                    MILESTONE {stage.step}
                  </span>
                  <span 
                    style={{
                      fontSize: '0.62rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      background: stage.bg,
                      color: stage.color,
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px'
                    }}
                  >
                    {stage.status}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.65rem' }}>
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: stage.bg,
                      color: stage.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#123C45', lineHeight: 1.25 }}>
                    {stage.title}
                  </h3>
                </div>

                <p style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.55 }}>
                  {stage.deliverable}
                </p>
              </div>
            );
          })}
        </div>

        {/* Scientific Integrity Disclaimer */}
        <div 
          style={{
            background: '#FFFBEB',
            borderRadius: '12px',
            padding: '1.25rem 1.5rem',
            border: '1px solid #FCD34D',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <Info size={22} color="#D97706" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: '0.82rem', color: '#92400E', lineHeight: 1.6 }}>
            <strong>Commitment to Truthful Science:</strong> AquaSense is an ongoing engineering and research submission for Smart India Hackathon 2026. Commercial claims of certification or definitive field accuracy are withheld pending formal third-party lab cross-validation.
          </span>
        </div>

      </div>
    </section>
  );
}
