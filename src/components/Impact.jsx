import React from 'react';
import { 
  HeartHandshake, 
  Coins, 
  Target, 
  Briefcase, 
  Eye, 
  WifiOff, 
  QrCode,
  Sparkles
} from 'lucide-react';

export default function Impact() {
  const benefitCards = [
    {
      title: "LOW-COST ARCHITECTURE",
      desc: "Designed around ubiquitous smartphone optics and mass-produced COTS sensor components to remain economical for massive rural deployment.",
      icon: Coins,
      color: "#00B8D9",
      bg: "#E0F8FC",
      badge: "AFFORDABLE HARDWARE"
    },
    {
      title: "0.1 PPM TARGET SENSITIVITY",
      desc: "Targeting sensitivity down to 0.1 ppm to detect early chlorine exhaustion long before water sources cross unsafe microbiological thresholds.",
      icon: Target,
      color: "#FF7A6B",
      bg: "#FFF0EE",
      badge: "EARLY WARNING"
    },
    {
      title: "ULTRA-PORTABLE FORM FACTOR",
      desc: "Compact optical chamber fits into an ASHA worker's handheld bag, powered by an internal Li-ion cell supporting over 1,200 continuous field tests.",
      icon: Briefcase,
      color: "#00C9A7",
      bg: "#E0FAF5",
      badge: "FIELD READY"
    },
    {
      title: "OBJECTIVE MEASUREMENT",
      desc: "Controlled chamber illumination and computational analysis eliminate user eyesight bias, daylight shadows, and inconsistent color card comparisons.",
      icon: Eye,
      color: "#8B5CF6",
      bg: "#EDE9FE",
      badge: "REDUCED BIAS"
    },
    {
      title: "OFFLINE-FIRST DESIGN",
      desc: "Zero dependency on cellular connectivity. Field workers can execute and verify tests anywhere, with automated sync triggering upon network re-entry.",
      icon: WifiOff,
      color: "#F59E0B",
      bg: "#FEF3C7",
      badge: "RURAL RESILIENT"
    },
    {
      title: "DIGITAL TRACEABILITY",
      desc: "Every record is immutably stamped with water-source QR ID, GPS coordinates, strip batch code, timestamp, and automated sanity check logs.",
      icon: QrCode,
      color: "#087F8C",
      bg: "#E6F4F6",
      badge: "VERIFIED AUDIT"
    }
  ];

  return (
    <section 
      id="impact" 
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
              background: 'linear-gradient(90deg, #E0F8FC 0%, #E0FAF5 100%)', 
              color: '#087F8C', 
              border: '1px solid rgba(0, 184, 217, 0.3)' 
            }}
          >
            <HeartHandshake size={14} color="#00B8D9" />
            SECTION 18 • SYSTEM VALUE
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            WHY AQUASENSE?
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Purpose-built engineering for the unique challenges of rural drinking water quality surveillance in India.
          </p>
        </div>

        {/* 6 Benefit Blocks */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {benefitCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="sci-card"
                style={{
                  padding: '2.25rem',
                  background: '#FFFFFF',
                  borderTop: `4px solid ${card.color}`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div 
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: card.bg,
                      color: card.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <span 
                    style={{
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 800,
                      color: card.color,
                      background: card.bg,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px'
                    }}
                  >
                    {card.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#123C45', marginBottom: '0.65rem' }}>
                  {card.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#4B6E76', lineHeight: 1.65 }}>
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
