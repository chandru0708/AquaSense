import React, { useState } from 'react';
import { 
  WifiOff, 
  Wifi, 
  Smartphone, 
  Database, 
  CloudUpload, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw,
  Clock,
  ShieldCheck
} from 'lucide-react';

export default function OfflineMonitoring() {
  const [isOnline, setIsOnline] = useState(false);
  const [queuedRecords, setQueuedRecords] = useState(3);
  const [syncing, setSyncing] = useState(false);

  const handleSimulateSync = () => {
    if (!isOnline) {
      setIsOnline(true);
    }
    setSyncing(true);
    setTimeout(() => {
      setQueuedRecords(0);
      setSyncing(false);
    }, 1500);
  };

  const handleAddOfflineRecord = () => {
    setQueuedRecords(prev => prev + 1);
  };

  return (
    <section 
      id="offline" 
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFDF5 50%, #F5FBFB 100%)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div 
            className="section-label"
            style={{ 
              background: '#FEF3C7', 
              color: '#B45309', 
              border: '1px solid #FDE68A' 
            }}
          >
            <WifiOff size={14} color="#D97706" />
            SECTION 11 • OFFLINE-FIRST ARCHITECTURE
          </div>

          <h2 className="section-title" style={{ color: '#123C45' }}>
            DESIGNED FOR THE FIELD — NOT THE CLOUD
          </h2>

          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            "The core test and recording workflow should remain usable without continuous internet connectivity."
          </p>
        </div>

        {/* Interactive Offline Simulation Container */}
        <div 
          className="sci-card"
          style={{
            padding: '2.5rem',
            background: '#FFFFFF',
            border: '1.5px solid rgba(245, 158, 11, 0.3)',
            boxShadow: '0 16px 45px rgba(245, 158, 11, 0.08)',
            marginBottom: '2rem'
          }}
        >
          {/* Top Bar: Connectivity Toggle Controls */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                onClick={() => setIsOnline(!isOnline)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '8px',
                  border: isOnline ? '1.5px solid #10B981' : '1.5px solid #F59E0B',
                  background: isOnline ? '#ECFDF5' : '#FFFBEB',
                  color: isOnline ? '#059669' : '#B45309',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
              >
                {isOnline ? <Wifi size={16} /> : <WifiOff size={16} />}
                STATUS: {isOnline ? 'CONNECTED (CELLULAR 4G)' : 'OFFLINE (NO CELL COVERAGE)'}
              </button>
            </div>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={handleAddOfflineRecord}
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '8px',
                  border: '1px solid #CBD5E1',
                  background: '#FFFFFF',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                + RECORD NEW TEST OFFLINE
              </button>

              <button
                onClick={handleSimulateSync}
                disabled={syncing || queuedRecords === 0}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: queuedRecords === 0 ? '#E2E8F0' : '#00B8D9',
                  color: queuedRecords === 0 ? '#94A3B8' : '#FFFFFF',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  cursor: queuedRecords === 0 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <RefreshCw size={14} className={syncing ? "animate-spin" : ""} />
                {syncing ? 'SYNCING QUEUE...' : `SYNC ${queuedRecords} PACKETS TO CLOUD`}
              </button>
            </div>
          </div>

          {/* 3-Tier Distributed Flow Visualization: Left Phone -> Center Local DB -> Right Cloud */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', alignItems: 'center', position: 'relative' }}>
            
            {/* 1. FIELD PHONE */}
            <div 
              style={{
                background: '#F8FAFC',
                borderRadius: '16px',
                border: '1.5px solid #E2E8F0',
                padding: '1.75rem',
                textAlign: 'center'
              }}
            >
              <div 
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: '#E0F8FC',
                  color: '#00B8D9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}
              >
                <Smartphone size={28} />
              </div>

              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#0088A3', marginBottom: '0.2rem' }}>
                TERMINAL 01
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#123C45', marginBottom: '0.5rem' }}>
                FIELD PHONE
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.5 }}>
                Local PWA processes TCS34725 BLE data, computes FRC ppm, and generates signed verification packet.
              </p>
            </div>

            {/* 2. LOCAL DATABASE (CENTER) */}
            <div 
              style={{
                background: queuedRecords > 0 ? '#FFFBEB' : '#ECFDF5',
                borderRadius: '16px',
                border: queuedRecords > 0 ? '2px solid #F59E0B' : '2px solid #10B981',
                padding: '1.75rem',
                textAlign: 'center',
                boxShadow: queuedRecords > 0 ? '0 8px 24px rgba(245, 158, 11, 0.15)' : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              <div 
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: queuedRecords > 0 ? '#FEF3C7' : '#D1FAE5',
                  color: queuedRecords > 0 ? '#D97706' : '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}
              >
                <Database size={28} />
              </div>

              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: queuedRecords > 0 ? '#B45309' : '#059669', marginBottom: '0.2rem' }}>
                ENCRYPTED STORAGE
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#123C45', marginBottom: '0.5rem' }}>
                LOCAL DATABASE
              </h3>

              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                  background: queuedRecords > 0 ? '#FDE68A' : '#A7F3D0',
                  color: queuedRecords > 0 ? '#92400E' : '#065F46',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 800,
                  marginBottom: '0.6rem'
                }}
              >
                {queuedRecords > 0 ? `${queuedRecords} DATA PACKETS QUEUED` : '0 QUEUED • SYNCHRONIZED'}
              </div>

              <p style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.5 }}>
                Zero reliance on cellular towers. SQLite append log ensures test persistence in deep rural valleys.
              </p>
            </div>

            {/* 3. CLOUD DASHBOARD */}
            <div 
              style={{
                background: '#F8FAFC',
                borderRadius: '16px',
                border: '1.5px solid #E2E8F0',
                padding: '1.75rem',
                textAlign: 'center'
              }}
            >
              <div 
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: '#ECFDF5',
                  color: '#059669',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}
              >
                <CloudUpload size={28} />
              </div>

              <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#059669', marginBottom: '0.2rem' }}>
                CENTRAL SURVEILLANCE
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#123C45', marginBottom: '0.5rem' }}>
                CLOUD DASHBOARD
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.5 }}>
                Receives idempotent sync batch when connection is restored, immediately updating district map trends.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
