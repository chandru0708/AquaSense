import React from 'react';
import { 
  AlertTriangle, 
  TrendingDown, 
  EyeOff, 
  Layers, 
  Timer, 
  CloudSun, 
  CheckSquare2,
  ShieldAlert
} from 'lucide-react';

export default function Challenges() {
  const challengeCards = [
    {
      num: "01",
      title: "0.1 PPM SENSITIVITY",
      description: "Achieving reliable low-level response requires careful chemistry development and validation to separate genuine chlorine trace from baseline chromophore noise.",
      icon: TrendingDown,
      color: "#FF7A6B",
      mitigation: "Enhanced dye binding matrix + 16-bit high-gain optical sensor"
    },
    {
      num: "02",
      title: "COLOR INTERPRETATION",
      description: "Color response varies with illumination, camera sensor spectral sensitivity, and optical geometry between different phone models.",
      icon: EyeOff,
      color: "#FF9B6A",
      mitigation: "Light-tight optical chamber + on-strip white balance reference tile"
    },
    {
      num: "03",
      title: "STRIP BATCH VARIATION",
      description: "Manufacturing consistency and reagent deposition tolerances vary between printing runs, necessitating calibration controls.",
      icon: Layers,
      color: "#FFB86B",
      mitigation: "Digital batch QR passports with lot-specific polynomial curves"
    },
    {
      num: "04",
      title: "REACTION TIMING",
      description: "Reaction kinetics continue post-wetting; reading too early causes under-reading, while delayed reading leads to oxidative degradation.",
      icon: Timer,
      color: "#F59E0B",
      mitigation: "Hardware shutter lockout with automated 25-second countdown"
    },
    {
      num: "05",
      title: "FIELD ENVIRONMENT",
      description: "Extreme ambient temperatures (5°C to 45°C), humidity, dust ingress, and harsh field handling can affect testing repeatability.",
      icon: CloudSun,
      color: "#D97706",
      mitigation: "BME280 temperature compensation curve + IP54 gasket seals"
    },
    {
      num: "06",
      title: "LARGE-SCALE VALIDATION",
      description: "Performance requires rigorous comparison against standard DPD spectrophotometric reference methods across real-world diverse water samples.",
      icon: CheckSquare2,
      color: "#DC2626",
      mitigation: "Collaborative testing pipeline with accredited NABL water testing labs"
    }
  ];

  return (
    <section 
      id="challenges" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF8 50%, #FFF9F5 100%)',
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
            <ShieldAlert size={14} color="#EA580C" />
            SECTION 15 • TECHNICAL RIGOR
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            ENGINEERING CHALLENGES
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Transparent acknowledgement of physical, optical, and chemical constraints—and the explicit engineering counter-measures designed into AquaSense.
          </p>
        </div>

        {/* 6 Engineering Challenge Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {challengeCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="sci-card"
                style={{
                  padding: '2rem',
                  background: '#FFFFFF',
                  borderTop: `4px solid ${card.color}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: `${card.color}15`,
                      color: card.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <span style={{ fontSize: '1.15rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#CBD5E1' }}>
                    {card.num}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#123C45', marginBottom: '0.65rem' }}>
                  {card.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#4B6E76', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {card.description}
                </p>

                <div 
                  style={{
                    background: `${card.color}10`,
                    padding: '0.65rem 0.85rem',
                    borderRadius: '8px',
                    border: `1px solid ${card.color}30`,
                    fontSize: '0.75rem',
                    color: '#123C45',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  <strong style={{ color: card.color }}>AquaSense Mitigation:</strong> {card.mitigation}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
