import React, { useState } from 'react';
import { 
  Network, 
  Smartphone, 
  MapPin, 
  LayoutDashboard, 
  ArrowDown, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  Users,
  Building2,
  ShieldCheck
} from 'lucide-react';

export default function Scalability() {
  const [activeTier, setActiveTier] = useState(2); // Tier 0, 1, 2

  const tiers = [
    {
      level: "LEVEL 01",
      name: "INDIVIDUAL TEST",
      subtitle: "Strip + Optical Reader + Phone App",
      color: "#00B8D9",
      bg: "#E0F8FC",
      badge: "POINT OF MEASUREMENT",
      desc: "Instant biochemical colorimetric measurement targeting 0.1 ppm sensitivity, self-verified by on-device edge algorithms in 30 seconds.",
      features: ["Single sample vial", "TCS34725 optical chamber", "Offline mobile computation", "Encrypted record generation"]
    },
    {
      level: "LEVEL 02",
      name: "WATER SOURCE INTELLIGENCE",
      subtitle: "Multiple Tests + Source History + QR ID",
      color: "#00C9A7",
      bg: "#E0FAF5",
      badge: "HABITATION NODE",
      desc: "Aggregates longitudinal chlorine residual data for an individual public standpost, overhead tank, or school cistern across weeks and months.",
      features: ["Unique physical QR tag", "Longitudinal depletion curve", "Automated re-chlorination triggers", "Worker accountability audit"]
    },
    {
      level: "LEVEL 03",
      name: "COMMUNITY & DISTRICT SURVEILLANCE",
      subtitle: "District Central Dashboard + Jal Jeevan Mission Integration",
      color: "#087F8C",
      bg: "#E6F4F6",
      badge: "DISTRICT / STATE NETWORK",
      desc: "District water engineers view real-time compliance across hundreds of villages, pinpointing contamination clusters before disease outbreaks emerge.",
      features: ["State-wide GIS heatmap", "Automated SMS alerts to operators", "Predictive chlorine degradation modeling", "Supply chain strip inventory management"]
    }
  ];

  return (
    <section 
      id="scalability" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F0FAF7 50%, #FFFFFF 100%)',
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
            <Network size={14} color="#00C9A7" />
            SECTION 17 • SCALABILITY ARCHITECTURE
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            FROM ONE TEST TO A WATER-QUALITY NETWORK
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A modular 3-tier architecture capable of scaling from a single rural frontline worker to nationwide Jal Jeevan Mission surveillance.
          </p>
        </div>

        {/* 3 Tier Architecture Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          {tiers.map((tier, idx) => {
            const isSelected = activeTier === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveTier(idx)}
                className="sci-card"
                style={{
                  padding: '2.25rem',
                  background: '#FFFFFF',
                  borderTop: `5px solid ${tier.color}`,
                  cursor: 'pointer',
                  transform: isSelected ? 'translateY(-6px)' : 'none',
                  boxShadow: isSelected ? `0 16px 40px ${tier.color}30` : 'var(--shadow-md)',
                  transition: 'all 0.28s ease',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: tier.color,
                      background: tier.bg,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '4px'
                    }}
                  >
                    {tier.level}
                  </span>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>
                    {tier.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#123C45', marginBottom: '0.35rem' }}>
                  {tier.name}
                </h3>

                <div style={{ fontSize: '0.78rem', color: tier.color, fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '1rem' }}>
                  {tier.subtitle}
                </div>

                <p style={{ fontSize: '0.88rem', color: '#4B6E76', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {tier.desc}
                </p>

                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#1E293B', display: 'block', marginBottom: '0.5rem' }}>
                    KEY CAPABILITIES:
                  </span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ fontSize: '0.78rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: tier.color }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Network Interconnect Banner */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #E0FAF5 0%, #E0F8FC 100%)',
            borderRadius: '16px',
            border: '1.5px solid rgba(0, 184, 217, 0.3)',
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Building2 size={32} color="#087F8C" />
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#123C45' }}>
                ALIGNED WITH HAR GHAR JAL MONITORING MANDATE
              </div>
              <div style={{ fontSize: '0.8rem', color: '#4B6E76' }}>
                Seamless data export to National Jal Jeevan Mission Integrated Management Information System (JJMIS).
              </div>
            </div>
          </div>

          <span className="simulated-pill" style={{ background: '#FFFFFF' }}>
            STANDARDIZED API PAYLOADS (REST / MQTT)
          </span>
        </div>

      </div>
    </section>
  );
}
