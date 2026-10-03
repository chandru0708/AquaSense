import React from 'react';
import { Droplets, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        background: '#123C45', // Dark Teal contrast footer as specified
        color: '#E0F8FC',
        padding: '4.5rem 0 2.5rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          
          {/* Col 1: Project Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00B8D9 0%, #00C9A7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <Droplets size={20} />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                AquaSense
              </span>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#94C6D0', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              "Measure Precisely. Monitor Continuously. Protect Every Water Source."
            </p>

            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#7AE7C7' }}>
              SMART INDIA HACKATHON 2026 • PS 26253
            </div>
          </div>

          {/* Col 2: Problem Statement Details */}
          <div>
            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#00C9A7', marginBottom: '0.85rem', textTransform: 'uppercase' }}>
              OFFICIAL PROBLEM STATEMENT
            </div>
            <p style={{ fontSize: '0.82rem', color: '#B2DCE4', lineHeight: 1.6 }}>
              Development of Strip-Based Water Quality Test Kits for Assessment of Free Residual Chlorine (FRC) with Sensitivity up to 0.1 ppm for Field-Level Applications
            </p>
            <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#7DD3FC' }}>
              Domain: Water Quality / Drinking Water Safety / Rural Water Monitoring
            </div>
          </div>

          {/* Col 3: Core Technology Stack */}
          <div>
            <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#FFD166', marginBottom: '0.85rem', textTransform: 'uppercase' }}>
              INSTRUMENTATION &amp; COMPUTE
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem', color: '#B2DCE4' }}>
              <li>• Multi-Zone FRC Reaction Strip (0.1 ppm target)</li>
              <li>• Enclosed Optical Chamber (5000K LED + Diffuser)</li>
              <li>• ESP32-S3 BLE Microcontroller + TCS34725</li>
              <li>• Edge Computer Vision &amp; Polynomial Inference</li>
              <li>• Offline-First SQLite / IndexedDB Storage</li>
              <li>• Source QR Code GIS Integration</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Mandatory Scientific Disclaimer */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.12)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: '#7E9FA7'
          }}
        >
          <div>
            <span style={{ color: '#FFB86B', fontWeight: 800 }}>PROTOTYPE CONCEPT</span> — LABORATORY VALIDATION REQUIRED. SIMULATED DEMONSTRATION DATA.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '6px',
              padding: '0.4rem 0.85rem',
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            <ArrowUp size={14} />
            BACK TO TOP
          </button>
        </div>

      </div>
    </footer>
  );
}
