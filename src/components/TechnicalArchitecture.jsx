import React, { useState } from 'react';
import { 
  Network, 
  Droplet, 
  Layers, 
  Scan, 
  Cpu, 
  Radio, 
  Smartphone, 
  Database, 
  CloudUpload, 
  LayoutDashboard, 
  CheckCircle2, 
  Sparkles,
  Sliders,
  X,
  FileCode2,
  Info
} from 'lucide-react';

export default function TechnicalArchitecture() {
  const [selectedNode, setSelectedNode] = useState(null);

  const architectureNodes = [
    {
      id: "sample",
      label: "WATER SAMPLE",
      category: "Field Substrate",
      color: "#00B8D9",
      bg: "#E0F8FC",
      icon: Droplet,
      description: "Direct grab sample collected by rural technician or community volunteer in sterile calibrated vial.",
      techSpecs: "Sample volume: 10-15 mL, Temperature range: 5°C - 45°C, Turbidity tolerance up to 10 NTU."
    },
    {
      id: "strip",
      label: "FRC STRIP",
      category: "Chemical Interface",
      color: "#FFB86B",
      bg: "#FFF5EB",
      icon: Layers,
      description: "Multi-zone strip impregnated with dry FRC indicator chemistry, control zone, and optical white balance tile.",
      techSpecs: "Sensitivity target: 0.10 ppm, Reaction time: 20-30s, Shelf life: 24 months in sealed foil pouch."
    },
    {
      id: "chamber",
      label: "OPTICAL CHAMBER",
      category: "Enclosed Rig",
      color: "#087F8C",
      bg: "#E6F4F6",
      icon: Scan,
      description: "Light-tight chamber with PTFE diffuser, isolating the strip from sun glare and wind currents.",
      techSpecs: "Constant-current 5000K LED, matte-black optical shroud, 3D printed ABS/PETG housing."
    },
    {
      id: "sensor",
      label: "TCS34725 RGBC",
      category: "Spectral Sensing",
      color: "#00C9A7",
      bg: "#E0FAF5",
      icon: Cpu,
      description: "16-bit colorimeter capturing Red, Green, Blue, and Clear channel values simultaneously.",
      techSpecs: "I2C bus @ 400kHz, IR blocking filter, integrated ADC, 3.8M:1 dynamic range."
    },
    {
      id: "esp32",
      label: "ESP32-S3 CONTROLLER",
      category: "Embedded Node",
      color: "#8B5CF6",
      bg: "#EDE9FE",
      icon: Radio,
      description: "Acquires telemetry from TCS34725, BH1750, and BME280; broadcasts structured packet via BLE 5.0.",
      techSpecs: "Dual Xtensa cores @ 240MHz, BLE GATT server, power-saving deep sleep between measurements."
    },
    {
      id: "phone",
      label: "SMARTPHONE APP",
      category: "Worker Terminal",
      color: "#A78BFA",
      bg: "#F5F3FF",
      icon: Smartphone,
      description: "Progressive Web App (PWA) / Android app receiving BLE telemetry and processing camera frames.",
      techSpecs: "Offline-first PWA, IndexedDB local storage, camera autofocus & ROI auto-alignment."
    },
    {
      id: "cv-model",
      label: "ML / CV ENGINE",
      category: "Edge Inference",
      color: "#3AAED8",
      bg: "#EBF7FC",
      icon: Sparkles,
      description: "Normalizes raw sensor/image data against reference tile and applies batch-calibrated polynomial response curve.",
      techSpecs: "Sub-50ms execution on low-cost quad-core mobile processors. Zero cloud round-trip required."
    },
    {
      id: "quality",
      label: "QUALITY ENGINE",
      category: "Verification Guardrail",
      color: "#10B981",
      bg: "#ECFDF5",
      icon: CheckCircle2,
      description: "Executes 8-point automated sanity verification (control pad reaction, exposure, timing, batch expiry).",
      techSpecs: "Outputs test status (VALID / ATTENTION / INVALID) alongside numerical confidence percentage."
    },
    {
      id: "database",
      label: "LOCAL DATABASE",
      category: "Persistence",
      color: "#F59E0B",
      bg: "#FEF3C7",
      icon: Database,
      description: "Encrypted SQLite / IndexedDB storing test result, geostamp, QR source ID, and batch passport locally.",
      techSpecs: "AES-256 local encryption, conflict-free append log, zero data loss during network outages."
    },
    {
      id: "cloud",
      label: "CLOUD SYNC",
      category: "Transport",
      color: "#FF7A6B",
      bg: "#FFF0EE",
      icon: CloudUpload,
      description: "Asynchronous HTTPS/MQTT sync engine automatically dispatching queued packets when connection restores.",
      techSpecs: "GZIP compressed JSON payloads, automatic exponential backoff, transactional batching."
    },
    {
      id: "dashboard",
      label: "STATE DASHBOARD",
      category: "Central Surveillance",
      color: "#123C45",
      bg: "#E2E8F0",
      icon: LayoutDashboard,
      description: "Web GIS dashboard for Jal Jeevan Mission engineers displaying district-wide chlorine residual trends.",
      techSpecs: "Real-time GIS map, automated low-chlorine alert dispatch, historical audit reports."
    }
  ];

  const sideInputs = [
    { name: "BATCH CALIBRATION", code: "CAL-014", color: "#8B5CF6" },
    { name: "TEMPERATURE INPUT", code: "26.4°C BME280", color: "#F59E0B" },
    { name: "AMBIENT LIGHT REF", code: "BH1750 LUX", color: "#00C9A7" },
    { name: "QR SOURCE ID", code: "WS-014 GPS", color: "#00B8D9" }
  ];

  return (
    <section 
      id="architecture" 
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
              background: '#EDE9FE', 
              color: '#6D28D9', 
              border: '1px solid #DDD6FE' 
            }}
          >
            <Network size={14} color="#8B5CF6" />
            SECTION 06 • TECHNICAL ARCHITECTURE
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            HOW AQUASENSE WORKS
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Interactive end-to-end data pipeline from physical water grab sample to state-wide rural surveillance dashboard.
          </p>
        </div>

        {/* Engineering Architecture Canvas */}
        <div 
          className="sci-card"
          style={{
            padding: '2.5rem 1.5rem',
            background: '#FFFFFF',
            border: '1.5px solid rgba(0, 184, 217, 0.25)',
            boxShadow: '0 16px 45px rgba(18, 60, 69, 0.08)',
            marginBottom: '2rem',
            position: 'relative'
          }}
        >
          {/* Top Canvas Toolbar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#087F8C' }}>
              DISTRIBUTED SYSTEM TOPOLOGY
            </span>
            <span className="simulated-pill">CLICK ANY NODE TO INSPECT ENGINEERING SPECIFICATION</span>
          </div>

          {/* Side Inputs Strip (Environmental & Contextual Auxiliaries) */}
          <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#64748B', marginBottom: '0.5rem', textAlign: 'center' }}>
              AUXILIARY SENSORY &amp; CALIBRATION INPUTS (FED INTO ANALYSIS LAYER)
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              {sideInputs.map((input, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#FFFFFF',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '8px',
                    border: `1.5px solid ${input.color}50`,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: input.color }} />
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#123C45' }}>
                    {input.name}:
                  </span>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: input.color, fontWeight: 800 }}>
                    {input.code}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Architecture Flow Nodes */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', position: 'relative' }}>
            {architectureNodes.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = selectedNode?.id === node.id;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  style={{
                    background: isSelected ? node.bg : '#FFFFFF',
                    border: isSelected ? `2.5px solid ${node.color}` : '1.5px solid rgba(18, 60, 69, 0.1)',
                    borderRadius: '14px',
                    padding: '1.25rem 1rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: isSelected ? `0 8px 24px ${node.color}35` : '0 2px 8px rgba(0,0,0,0.03)',
                    transform: isSelected ? 'translateY(-4px)' : 'none',
                    textAlign: 'center'
                  }}
                >
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: node.bg,
                      color: node.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.75rem auto',
                      boxShadow: `0 4px 12px ${node.color}20`
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: node.color, marginBottom: '0.2rem' }}>
                    STEP 0{idx + 1}
                  </div>

                  <h3 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#123C45', marginBottom: '0.25rem', lineHeight: 1.25 }}>
                    {node.label}
                  </h3>

                  <span style={{ fontSize: '0.62rem', color: '#64748B', display: 'block' }}>
                    {node.category}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Node Detail Drawer / Inspection Modal */}
          {selectedNode && (
            <div 
              style={{
                marginTop: '2rem',
                background: selectedNode.bg,
                border: `2px solid ${selectedNode.color}`,
                borderRadius: '16px',
                padding: '1.75rem',
                position: 'relative',
                animation: 'pulseGlow 0.4s ease'
              }}
            >
              <button
                onClick={() => setSelectedNode(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#FFFFFF',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={16} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span 
                  style={{
                    background: selectedNode.color,
                    color: '#FFFFFF',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700
                  }}
                >
                  {selectedNode.category}
                </span>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#123C45' }}>
                  {selectedNode.label}
                </h4>
              </div>

              <p style={{ fontSize: '0.92rem', color: '#334E58', lineHeight: 1.6, marginBottom: '1rem' }}>
                {selectedNode.description}
              </p>

              <div style={{ background: '#FFFFFF', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.06)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#123C45' }}>
                <strong>Technical Specifications:</strong> {selectedNode.techSpecs}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
