import React, { useState } from 'react';
import { 
  Box, 
  Cpu, 
  Eye, 
  Sun, 
  Thermometer, 
  BatteryCharging, 
  Smartphone, 
  QrCode, 
  Layers, 
  ShieldCheck, 
  Radio, 
  Sliders,
  Sparkles
} from 'lucide-react';
import { HARDWARE_COMPONENTS } from '../data/mockData';

export default function PrototypeSection() {
  const [selectedComponent, setSelectedComponent] = useState(HARDWARE_COMPONENTS[0]);

  return (
    <section 
      id="prototype" 
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
              background: '#E0FAF5', 
              color: '#087F8C', 
              border: '1px solid rgba(0, 201, 167, 0.35)' 
            }}
          >
            <Box size={14} color="#00C9A7" />
            SECTION 13 • PHYSICAL PROTOTYPE
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            OUR PROTOTYPE
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A field-hardened, low-cost optical and computational instrumentation stack engineered for rural water surveillance.
          </p>
        </div>

        {/* 2-Column: Blueprint Hardware Exploded View & Component Inspector */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', alignItems: 'stretch' }}>
          
          {/* LEFT: Blueprint Callout Visualization */}
          <div 
            className="sci-card"
            style={{
              padding: '2rem',
              background: 'linear-gradient(145deg, #FFFFFF 0%, #F0F9FA 100%)',
              border: '2px solid rgba(0, 184, 217, 0.25)',
              boxShadow: '0 20px 45px rgba(0, 184, 217, 0.1)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#087F8C' }}>
                HARDWARE BLUEPRINT &amp; SUBASSEMBLY
              </span>
              <span className="simulated-pill">HOVER / CLICK CALLOUTS</span>
            </div>

            {/* Exploded Callout Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {HARDWARE_COMPONENTS.map((item) => {
                const isSelected = selectedComponent.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedComponent(item)}
                    style={{
                      background: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.8)',
                      border: isSelected ? `2.5px solid ${item.color}` : '1px solid #CBD5E1',
                      borderRadius: '10px',
                      padding: '0.65rem 0.75rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? `0 4px 14px ${item.color}35` : 'none',
                      transform: isSelected ? 'scale(1.03)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color }} />
                      <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#123C45' }}>
                        {item.name.split(' ')[0]}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.62rem', color: '#64748B', display: 'block' }}>
                      {item.category.split('/')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Central Schematic Cutaway Graphic */}
            <div 
              style={{
                background: '#FFFFFF',
                borderRadius: '14px',
                border: '1.5px dashed rgba(0, 184, 217, 0.4)',
                padding: '1.5rem',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#087F8C', fontWeight: 800, marginBottom: '0.5rem' }}>
                INTEGRATED FIELD HOUSING [EXPLODED SCHEMATIC]
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ padding: '0.35rem 0.75rem', borderRadius: '6px', background: '#FFFBEB', color: '#92400E', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', border: '1px solid #FCD34D' }}>
                  Top: 5000K LED + Diffuser
                </span>
                <span style={{ padding: '0.35rem 0.75rem', borderRadius: '6px', background: '#FFF0EE', color: '#C2410C', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', border: '1px solid #FECACA' }}>
                  Center: FRC Strip Tray
                </span>
                <span style={{ padding: '0.35rem 0.75rem', borderRadius: '6px', background: '#E0F8FC', color: '#007C92', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', border: '1px solid #BAEEF8' }}>
                  Base: TCS34725 + ESP32-S3
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT: Component Inspection Dossier */}
          <div 
            className="sci-card"
            style={{
              padding: '2.5rem',
              background: '#FFFFFF',
              border: `2px solid ${selectedComponent.color}`,
              boxShadow: `0 16px 45px ${selectedComponent.color}18`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Badge & Category */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <span 
                  style={{
                    background: `${selectedComponent.color}18`,
                    color: selectedComponent.color,
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800
                  }}
                >
                  {selectedComponent.category}
                </span>
              </div>

              {/* Hardware Name */}
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#123C45', marginBottom: '0.75rem' }}>
                {selectedComponent.name}
              </h3>

              {/* Specification */}
              <div style={{ background: '#F8FAFC', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #E2E8F0', marginBottom: '1.25rem', fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: '#1E293B' }}>
                <strong>Technical Spec:</strong> {selectedComponent.spec}
              </div>

              {/* Role in AquaSense */}
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#64748B', display: 'block', marginBottom: '0.35rem' }}>
                  ROLE IN SYSTEM ARCHITECTURE:
                </span>
                <p style={{ fontSize: '0.95rem', color: '#335560', lineHeight: 1.65 }}>
                  {selectedComponent.role}
                </p>
              </div>

              {/* Pinout / Electrical Interface */}
              <div style={{ background: `${selectedComponent.color}10`, padding: '0.75rem 1rem', borderRadius: '8px', border: `1px solid ${selectedComponent.color}35`, fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#123C45' }}>
                <strong>Interface / Bus:</strong> {selectedComponent.pinout}
              </div>
            </div>

            <div className="simulated-pill" style={{ marginTop: '1.5rem' }}>
              LOW-COST COTS HARDWARE • DESIGNED FOR SCALABLE MANUFACTURING
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
