import React, { useState } from 'react';
import { 
  MapPin, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  QrCode, 
  Layers, 
  Activity,
  UserCheck
} from 'lucide-react';
import { WATER_SOURCES } from '../data/mockData';

export default function SourceIntelligence() {
  const [selectedSource, setSelectedSource] = useState(WATER_SOURCES[0]);

  const getNodeColor = (statusLevel) => {
    switch (statusLevel) {
      case 'optimal': return { color: '#059669', bg: '#D1FAE5', border: '#A7F3D0' };
      case 'warning': return { color: '#D97706', bg: '#FEF3C7', border: '#FDE68A' };
      case 'danger': return { color: '#DC2626', bg: '#FEE2E2', border: '#FECACA' };
      default: return { color: '#00B8D9', bg: '#E0F8FC', border: '#BAEEF8' };
    }
  };

  return (
    <section 
      id="monitoring" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 50%, #F5FBFB 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div 
            className="section-label"
            style={{ 
              background: '#D1FAE5', 
              color: '#047857', 
              border: '1px solid #A7F3D0' 
            }}
          >
            <MapPin size={14} color="#059669" />
            SECTION 10 • SOURCE SURVEILLANCE
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            FROM A TEST RESULT TO A WATER-SOURCE HISTORY
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Transforming isolated strip readings into continuous longitudinal chlorination histories for each public standpost, cistern, and village borehole.
          </p>
        </div>

        {/* 2-Column: Left Light Environmental GIS Map, Right Source Telemetry Dossier */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', alignItems: 'stretch' }}>
          
          {/* LEFT: Light Environmental GIS Map Representation */}
          <div 
            className="sci-card"
            style={{
              padding: '2rem',
              background: '#FFFFFF',
              border: '1.5px solid rgba(0, 201, 167, 0.3)',
              boxShadow: '0 16px 40px rgba(0, 201, 167, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#047857' }}>
                  DISTRICT HYDROLOGICAL MAP (GRAM PANCHAYAT SECTOR)
                </span>
                <span className="simulated-pill">SIMULATED MONITORING DATA</span>
              </div>

              {/* Light GIS Map Graphic Canvas */}
              <div 
                style={{
                  background: 'linear-gradient(135deg, #ECFDF5 0%, #E0F2FE 50%, #F0FDF4 100%)',
                  borderRadius: '16px',
                  border: '1.5px solid #A7F3D0',
                  height: '320px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.04)'
                }}
              >
                {/* Simulated River / Stream Path */}
                <svg viewBox="0 0 400 320" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                  <path 
                    d="M-20,180 C80,120 180,240 260,160 C320,100 360,140 420,80" 
                    fill="none" 
                    stroke="#7DD3FC" 
                    strokeWidth="24" 
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <path 
                    d="M-20,180 C80,120 180,240 260,160 C320,100 360,140 420,80" 
                    fill="none" 
                    stroke="#00B8D9" 
                    strokeWidth="6" 
                    strokeDasharray="4 6"
                    opacity="0.8"
                  />
                </svg>

                {/* Interactive Map Nodes for 5 Water Sources */}
                {WATER_SOURCES.map((source, idx) => {
                  const nodeTheme = getNodeColor(source.statusLevel);
                  const isSelected = selectedSource.id === source.id;
                  
                  // Coordinate positions on pseudo map
                  const positions = [
                    { top: '35%', left: '25%' },
                    { top: '18%', left: '68%' },
                    { top: '65%', left: '30%' },
                    { top: '75%', left: '78%' },
                    { top: '48%', left: '55%' }
                  ];

                  return (
                    <div
                      key={source.id}
                      onClick={() => setSelectedSource(source)}
                      style={{
                        position: 'absolute',
                        top: positions[idx].top,
                        left: positions[idx].left,
                        transform: 'translate(-50%, -50%)',
                        cursor: 'pointer',
                        zIndex: isSelected ? 10 : 2,
                        textAlign: 'center',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      {/* Pulsing Pin Marker */}
                      <div 
                        style={{
                          width: isSelected ? '42px' : '34px',
                          height: isSelected ? '42px' : '34px',
                          borderRadius: '50%',
                          background: nodeTheme.bg,
                          border: `2.5px solid ${nodeTheme.color}`,
                          color: nodeTheme.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 4px 14px ${nodeTheme.color}60`,
                          margin: '0 auto',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <MapPin size={isSelected ? 20 : 16} />
                      </div>

                      {/* Small Label below pin */}
                      <div 
                        style={{
                          marginTop: '4px',
                          background: '#FFFFFF',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          border: `1px solid ${nodeTheme.border}`,
                          fontSize: '0.62rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 800,
                          color: '#123C45',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {source.id} ({source.currentFrc} ppm)
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map Legend */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.25rem', fontSize: '0.72rem', fontFamily: 'var(--font-mono)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#059669' }} />
                <span>NORMAL (&gt;0.20 ppm)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#D97706' }} />
                <span>ATTENTION (&lt;0.20 ppm)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#DC2626' }} />
                <span>INSPECTION (&lt;0.10 ppm)</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Source Telemetry Dossier */}
          {(() => {
            const theme = getNodeColor(selectedSource.statusLevel);
            return (
              <div 
                className="sci-card"
                style={{
                  padding: '2.5rem',
                  background: '#FFFFFF',
                  border: `2px solid ${theme.border}`,
                  boxShadow: `0 16px 45px ${theme.color}15`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  {/* Source Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div>
                      <span 
                        style={{
                          background: theme.bg,
                          color: theme.color,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 800
                        }}
                      >
                        ● {selectedSource.status}
                      </span>
                      <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#123C45', marginTop: '0.4rem' }}>
                        {selectedSource.id}: {selectedSource.name}
                      </h3>
                      <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                        Type: {selectedSource.type} • GPS: {selectedSource.lat}°N, {selectedSource.lng}°E
                      </div>
                    </div>
                  </div>

                  {/* Primary KPI Blocks */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem', marginBottom: '1.5rem' }}>
                    <div style={{ background: '#F8FAFC', padding: '0.75rem', borderRadius: '10px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>LATEST FRC</div>
                      <div style={{ fontSize: '1.45rem', fontWeight: 800, color: theme.color }}>
                        {selectedSource.currentFrc} <span style={{ fontSize: '0.75rem' }}>ppm</span>
                      </div>
                    </div>

                    <div style={{ background: '#F8FAFC', padding: '0.75rem', borderRadius: '10px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>CONFIDENCE</div>
                      <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#123C45' }}>
                        {selectedSource.confidence}
                      </div>
                    </div>

                    <div style={{ background: '#F8FAFC', padding: '0.75rem', borderRadius: '10px', border: '1px solid #E2E8F0', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>TEST COUNT</div>
                      <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#087F8C' }}>
                        {selectedSource.testCount}
                      </div>
                    </div>
                  </div>

                  {/* Trend Graph Visual */}
                  <div style={{ background: '#F8FAFC', padding: '1rem 1.25rem', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#123C45' }}>
                        5-DAY CHLORINE RESIDUAL TRAJECTORY
                      </span>
                      <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#64748B' }}>
                        Tested {selectedSource.lastTested}
                      </span>
                    </div>

                    {/* Bar visualization of trend points */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', height: '80px', gap: '1rem', padding: '0.5rem 0' }}>
                      {selectedSource.trend.map((val, i) => {
                        const heightPct = Math.min(Math.max((val / 0.6) * 100, 15), 100);
                        return (
                          <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                            <div 
                              style={{
                                height: `${heightPct}%`,
                                background: val >= 0.20 ? '#00C9A7' : val >= 0.10 ? '#F59E0B' : '#FF7A6B',
                                borderRadius: '4px 4px 0 0',
                                transition: 'height 0.4s ease'
                              }}
                            />
                            <span style={{ fontSize: '0.62rem', fontFamily: 'var(--font-mono)', color: '#64748B', display: 'block', marginTop: '4px' }}>
                              {val}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Worker & Batch Metadata */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#4B6E76' }}>
                    <div><strong>ASSIGNED WORKER:</strong> {selectedSource.workerId}</div>
                    <div><strong>BATCH:</strong> AS26-001</div>
                  </div>
                </div>

                <div className="simulated-pill" style={{ marginTop: '1.25rem' }}>
                  AUTOMATED LOGBOOK • PREVENTS FRAUDULENT REMOTE REPORTING
                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
}
