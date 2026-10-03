import React, { useState } from 'react';
import { 
  AlertTriangle, 
  EyeOff, 
  CloudSun, 
  FileX, 
  WifiOff, 
  TrendingDown, 
  ArrowRight,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';

export default function ProblemSection() {
  const [selectedFlow, setSelectedFlow] = useState(3); // default highlight FIELD TEST

  const pipelineSteps = [
    { title: "WATER SOURCE", desc: "Surface or groundwater intake", color: "#3AAED8" },
    { title: "CHLORINATION", desc: "Disinfection dosing at treatment works", color: "#00C9A7" },
    { title: "DISTRIBUTION", desc: "Pipes, tankers, community cisterns", color: "#FFD166" },
    { title: "FIELD TEST", desc: "Critical point where FRC must be confirmed", color: "#FF7A6B", critical: true },
    { title: "RECORD", desc: "Capture of concentration & location metadata", color: "#FFB86B" },
    { title: "ACTION", desc: "Re-chlorination alert or safety clearance", color: "#087F8C" }
  ];

  const problemCards = [
    {
      num: "01",
      title: "LOW-LEVEL SENSITIVITY",
      description: "Field testing needs sufficient sensitivity to identify low FRC levels down to 0.1 ppm to detect early chlorine depletion before microbial regrowth occurs.",
      icon: TrendingDown,
      color: "#FF7A6B",
      badge: "SENSITIVITY GAP"
    },
    {
      num: "02",
      title: "MANUAL INTERPRETATION",
      description: "Visual colour matching on comparator cards is inherently subjective and heavily influenced by individual eyesight, ambient shadow, and worker fatigue.",
      icon: EyeOff,
      color: "#FF9B6A",
      badge: "SUBJECTIVE BIAS"
    },
    {
      num: "03",
      title: "FIELD CONDITIONS",
      description: "Temperature fluctuations, high ambient sunlight, improper strip dipping intervals, and humid handling significantly distort manual color development.",
      icon: CloudSun,
      color: "#FFB86B",
      badge: "ENVIRONMENTAL DRIFT"
    },
    {
      num: "04",
      title: "LIMITED DIGITAL TRACEABILITY",
      description: "Paper logbooks and manual entries often lack geolocated timestamps, test verification evidence, and continuous source-level historical tracking.",
      icon: FileX,
      color: "#F59E0B",
      badge: "DATA ISOLATION"
    },
    {
      num: "05",
      title: "CONNECTIVITY CONSTRAINTS",
      description: "Remote rural monitoring locations frequently experience intermittent or absent cellular network coverage, breaking cloud-dependent testing apps.",
      icon: WifiOff,
      color: "#D97706",
      badge: "OFFLINE REALITY"
    },
    {
      num: "06",
      title: "SCALABILITY & COST",
      description: "Bulky laboratory spectrophotometers cannot scale to hundreds of thousands of rural habitations; a practical solution must remain low-cost and ultra-portable.",
      icon: AlertTriangle,
      color: "#E11D48",
      badge: "COST CONSTRAINT"
    }
  ];

  return (
    <section 
      id="problem" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF7F5 50%, #FFF3F0 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div 
            className="section-label"
            style={{ 
              background: '#FFF0EE', 
              color: '#C2410C', 
              border: '1px solid #FFCDD2' 
            }}
          >
            <ShieldAlert size={14} />
            SECTION 01 • THE PROBLEM
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            THE INVISIBLE RISK
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Drinking-water safety depends not only on chlorination, but also on knowing whether adequate Free Residual Chlorine remains at the point of monitoring.
          </p>
        </div>

        {/* Animated Water Lifecycle Chain */}
        <div 
          style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1.5px solid rgba(255, 122, 107, 0.25)',
            boxShadow: '0 8px 30px rgba(255, 122, 107, 0.08)',
            padding: '2rem 1.5rem',
            marginBottom: '4rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#C2410C' }}>
              WATER SAFETY VERIFICATION CHAIN
            </span>
            <span className="simulated-pill">CLICK STAGES TO INSPECT CRITICAL VULNERABILITY</span>
          </div>

          {/* Flow Stepper */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', position: 'relative' }}>
            {pipelineSteps.map((step, idx) => {
              const isSelected = selectedFlow === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedFlow(idx)}
                  style={{
                    background: isSelected ? '#FFF8F6' : '#FFFFFF',
                    border: isSelected ? `2px solid ${step.color}` : '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '1rem 0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? `0 6px 20px ${step.color}30` : 'none',
                    transform: isSelected ? 'translateY(-3px)' : 'none',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span 
                      style={{ 
                        fontSize: '0.65rem', 
                        fontFamily: 'var(--font-mono)', 
                        fontWeight: 800, 
                        color: step.color 
                      }}
                    >
                      STEP 0{idx + 1}
                    </span>
                    {step.critical && (
                      <span style={{ fontSize: '0.6rem', background: '#FEE2E2', color: '#DC2626', padding: '0.1rem 0.35rem', borderRadius: '4px', fontWeight: 700 }}>
                        CRITICAL
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#123C45', marginBottom: '0.35rem' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '0.72rem', color: '#64748B', lineHeight: 1.4 }}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Explanatory callout for selected step */}
          <div 
            style={{
              marginTop: '1.25rem',
              padding: '0.85rem 1.25rem',
              borderRadius: '10px',
              background: '#FFF5F3',
              border: '1px solid #FED7AA',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
          >
            <HelpCircle size={18} color="#EA580C" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.82rem', color: '#7C2D12' }}>
              <strong>Insight:</strong> Without an objective, sensitive reading at the <strong>{pipelineSteps[selectedFlow].title}</strong> stage, residual chlorine degradation goes unnoticed, exposing rural consumers to undetected pathogens.
            </span>
          </div>
        </div>

        {/* Six Problem Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {problemCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={idx} 
                className="sci-card"
                style={{
                  padding: '2rem',
                  borderTop: `4px solid ${card.color}`,
                  background: '#FFFFFF'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: `${card.color}18`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: card.color
                    }}
                  >
                    <IconComponent size={24} />
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#CBD5E1', display: 'block' }}>
                      {card.num}
                    </span>
                    <span 
                      style={{
                        fontSize: '0.62rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        color: card.color,
                        background: `${card.color}15`,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '4px'
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#123C45', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                  {card.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#4B6E76', lineHeight: 1.65 }}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
