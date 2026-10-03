import React from 'react';
import { 
  Network, 
  Droplet, 
  User, 
  Layers, 
  Scan, 
  Smartphone, 
  Cpu, 
  Database, 
  CloudUpload, 
  LayoutDashboard,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function CompleteSystemView() {
  const systemFlow = [
    { label: "WATER SOURCE", sub: "Grab sample", icon: Droplet, color: "#3AAED8" },
    { label: "FIELD WORKER", sub: "ASHA / Jal Sahi", icon: User, color: "#B7E36A" },
    { label: "AQUASENSE STRIP", sub: "0.1 ppm target", icon: Layers, color: "#FF7A6B" },
    { label: "OPTICAL READER", sub: "TCS34725 chamber", icon: Scan, color: "#00B8D9" },
    { label: "SMARTPHONE", sub: "BLE acquisition", icon: Smartphone, color: "#A78BFA" },
    { label: "AI ANALYSIS", sub: "Deterministic CV", icon: Cpu, color: "#8B5CF6" },
    { label: "LOCAL RECORD", sub: "Encrypted SQLite", icon: Database, color: "#F59E0B" },
    { label: "CLOUD SYNC", sub: "Queue & uplink", icon: CloudUpload, color: "#00C9A7" },
    { label: "STATE DASHBOARD", sub: "JJM GIS surveillance", icon: LayoutDashboard, color: "#087F8C" }
  ];

  return (
    <section 
      id="system-overview" 
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
              background: '#E0F8FC', 
              color: '#0088A3', 
              border: '1px solid #BAEEF8' 
            }}
          >
            <Sparkles size={14} color="#00B8D9" />
            SECTION 19 • COMPLETE ARCHITECTURE
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            COMPLETE SYSTEM VIEW
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Unified view of the multi-disciplinary AquaSense system bridging chemistry, optics, mobile computing, and national infrastructure.
          </p>
        </div>

        {/* Full Flow Interactive Graphic */}
        <div 
          className="sci-card"
          style={{
            padding: '2.5rem',
            background: '#FFFFFF',
            border: '2px solid rgba(0, 184, 217, 0.25)',
            boxShadow: '0 16px 45px rgba(0, 184, 217, 0.08)'
          }}
        >
          {/* Top Domain Category Badges */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <span style={{ padding: '0.35rem 0.85rem', borderRadius: '8px', background: '#E0F8FC', color: '#007C92', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
              FIELD DEVICE
            </span>
            <span style={{ padding: '0.35rem 0.85rem', borderRadius: '8px', background: '#E0FAF5', color: '#047857', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
              OPTICAL ENGINE
            </span>
            <span style={{ padding: '0.35rem 0.85rem', borderRadius: '8px', background: '#EDE9FE', color: '#6D28D9', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
              AI ENGINE
            </span>
            <span style={{ padding: '0.35rem 0.85rem', borderRadius: '8px', background: '#FEF3C7', color: '#B45309', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
              OFFLINE DATABASE
            </span>
            <span style={{ padding: '0.35rem 0.85rem', borderRadius: '8px', background: '#E6F4F6', color: '#087F8C', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 800 }}>
              SOURCE INTELLIGENCE
            </span>
          </div>

          {/* Stepper Flow Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))', gap: '0.65rem' }}>
            {systemFlow.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1.5px solid #E2E8F0',
                    borderTop: `4px solid ${node.color}`,
                    padding: '1rem 0.5rem',
                    textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                  }}
                >
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: `${node.color}15`,
                      color: node.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.5rem auto'
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: node.color, fontWeight: 800 }}>
                    0{idx + 1}
                  </span>

                  <h3 style={{ fontSize: '0.72rem', fontWeight: 800, color: '#123C45', margin: '2px 0', lineHeight: 1.2 }}>
                    {node.label}
                  </h3>

                  <span style={{ fontSize: '0.62rem', color: '#64748B' }}>
                    {node.sub}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
