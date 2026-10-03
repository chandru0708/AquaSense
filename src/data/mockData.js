// AquaSense Scientific & Field Simulation Data
// Designed for PS 26253 — Smart India Hackathon 2026

export const SYSTEM_INFO = {
  name: "AquaSense",
  tagline: "Measure Precisely. Monitor Continuously. Protect Every Water Source.",
  problemStatement: "PS 26253 — Development of Strip-Based Water Quality Test Kits for Assessment of Free Residual Chlorine (FRC) with Sensitivity up to 0.1 ppm for Field-Level Applications",
  domain: "Water Quality / Drinking Water Safety / Rural Water Monitoring",
  status: "ONLINE",
  batchId: "AS26-001",
  calibrationId: "CAL-014",
  expiryDate: "12/2027",
  targetSensitivity: "0.10 ppm FRC",
  disclaimer: "SIMULATED DEMONSTRATION DATA — PROTOTYPE CONCEPT REQUIRES LABORATORY & FIELD VALIDATION"
};

export const COLOR_STORY = {
  aqua: "#00B8D9",
  turquoise: "#00C9A7",
  deepTeal: "#087F8C",
  mint: "#7AE7C7",
  waterBlue: "#3AAED8",
  skyBlue: "#7DD3FC",
  lime: "#B7E36A",
  sunYellow: "#FFD166",
  coral: "#FF7A6B",
  orange: "#FFB86B",
  lavender: "#A78BFA",
  purple: "#8B5CF6",
  darkTeal: "#123C45"
};

export const FRC_CONCENTRATION_LEVELS = [
  { ppm: 0.00, hex: "#FDF8E4", label: "0.00 ppm", status: "Depleted / Inadequate", note: "Immediate re-chlorination alert" },
  { ppm: 0.05, hex: "#FCF0C8", label: "0.05 ppm", status: "Sub-Target Trace", note: "Below target protective limit" },
  { ppm: 0.10, hex: "#FDE68A", label: "0.10 ppm", status: "Minimum Target", note: "Target field sensitivity threshold" },
  { ppm: 0.15, hex: "#FCD34D", label: "0.15 ppm", status: "Marginal Safe", note: "Adequate for direct post-treatment" },
  { ppm: 0.20, hex: "#FBBF24", label: "0.20 ppm", status: "Standard Target (WHO/BIS)", note: "Optimal distribution minimum" },
  { ppm: 0.50, hex: "#F59E0B", label: "0.50 ppm", status: "Robust Disinfection", note: "Safe for high-risk networks" },
  { ppm: 1.00, hex: "#FB923C", label: "1.00 ppm", status: "High Protection", note: "Acceptable post-dosing" },
  { ppm: 2.00, hex: "#FF7A6B", label: "2.00 ppm", status: "Elevated Chlorine", note: "Upper field operational guide" }
];

export const WATER_SOURCES = [
  {
    id: "WS-014",
    name: "North Village Community Tap #04",
    type: "Public Standpost",
    lat: "19.0760",
    lng: "72.8777",
    currentFrc: 0.42,
    status: "VALID",
    statusLevel: "optimal", // optimal, warning, danger
    lastTested: "14 mins ago",
    testCount: 148,
    confidence: "94%",
    workerId: "FW-802 (Ananya S.)",
    trend: [0.38, 0.40, 0.43, 0.39, 0.42],
    history: [
      { date: "Oct 03, 15:45", frc: 0.42, quality: "VALID", conf: 94 },
      { date: "Oct 02, 11:20", frc: 0.39, quality: "VALID", conf: 95 },
      { date: "Oct 01, 16:10", frc: 0.43, quality: "VALID", conf: 92 },
      { date: "Sep 30, 09:30", frc: 0.40, quality: "VALID", conf: 93 },
      { date: "Sep 29, 14:00", frc: 0.38, quality: "VALID", conf: 96 }
    ]
  },
  {
    id: "WS-007",
    name: "Primary Health Centre Storage Tank",
    type: "Overhead Reservoir",
    lat: "19.0820",
    lng: "72.8830",
    currentFrc: 0.55,
    status: "VALID",
    statusLevel: "optimal",
    lastTested: "1 hour ago",
    testCount: 230,
    confidence: "96%",
    workerId: "FW-411 (Ramesh P.)",
    trend: [0.52, 0.54, 0.53, 0.56, 0.55],
    history: [
      { date: "Oct 03, 14:15", frc: 0.55, quality: "VALID", conf: 96 },
      { date: "Oct 02, 10:00", frc: 0.56, quality: "VALID", conf: 97 }
    ]
  },
  {
    id: "WS-022",
    name: "Anganwadi School Drinking Cistern",
    type: "School Cistern",
    lat: "19.0680",
    lng: "72.8710",
    currentFrc: 0.12,
    status: "ATTENTION",
    statusLevel: "warning",
    lastTested: "3 hours ago",
    testCount: 92,
    confidence: "89%",
    workerId: "FW-802 (Ananya S.)",
    trend: [0.28, 0.22, 0.18, 0.14, 0.12],
    history: [
      { date: "Oct 03, 12:40", frc: 0.12, quality: "ATTENTION", conf: 89 },
      { date: "Oct 02, 08:50", frc: 0.14, quality: "VALID", conf: 91 }
    ]
  },
  {
    id: "WS-031",
    name: "East Ward Terminal Pipeline Node",
    type: "Distribution Tail-end",
    lat: "19.0910",
    lng: "72.8650",
    currentFrc: 0.04,
    status: "INSPECTION TRIGGERED",
    statusLevel: "danger",
    lastTested: "45 mins ago",
    testCount: 312,
    confidence: "91%",
    workerId: "FW-109 (Vikram M.)",
    trend: [0.18, 0.12, 0.08, 0.05, 0.04],
    history: [
      { date: "Oct 03, 15:10", frc: 0.04, quality: "CRITICAL", conf: 91 },
      { date: "Oct 02, 16:30", frc: 0.05, quality: "CRITICAL", conf: 90 }
    ]
  },
  {
    id: "WS-045",
    name: "Zila Parishad Borewell Water Station",
    type: "Solar Mini-Piped Scheme",
    lat: "19.0610",
    lng: "72.8920",
    currentFrc: 0.28,
    status: "VALID",
    statusLevel: "optimal",
    lastTested: "4 hours ago",
    testCount: 165,
    confidence: "93%",
    workerId: "FW-411 (Ramesh P.)",
    trend: [0.25, 0.27, 0.26, 0.29, 0.28],
    history: [
      { date: "Oct 03, 11:30", frc: 0.28, quality: "VALID", conf: 93 }
    ]
  }
];

export const HARDWARE_COMPONENTS = [
  {
    id: "esp32",
    name: "ESP32-S3",
    color: "#8B5CF6", // Purple
    category: "Microcontroller / Edge Compute",
    spec: "Dual-core Xtensa LX7, 240MHz, BLE 5.0 + Wi-Fi",
    role: "BLE-enabled controller for optical reader coordination, shutter synchronization, and ambient sensor bus acquisition.",
    pinout: "I2C (SDA: GPIO 8, SCL: GPIO 9), ADC1, BLE GATT server"
  },
  {
    id: "tcs34725",
    name: "TCS34725 Color Sensor",
    color: "#00B8D9", // Aqua
    category: "Optical Sensor",
    spec: "Red, Green, Blue, and Clear (RGBC) light sensing with IR blocking filter",
    role: "High-sensitivity colorimetry sensor reading RGB and Clear spectral responses from the FRC reaction pad and optical reference.",
    pinout: "I2C address 0x29, 16-bit ADC output"
  },
  {
    id: "bh1750",
    name: "BH1750 Ambient Sensor",
    color: "#3AAED8", // Water Blue
    category: "Photometric Reference",
    spec: "1 to 65535 lux range, standard eye spectral sensitivity",
    role: "Continuous ambient illumination reference to ensure stray light rejection and light-trap seal integrity within the chamber.",
    pinout: "I2C address 0x23, 1-lux resolution"
  },
  {
    id: "bme280",
    name: "BME280 Environmental Sensor",
    color: "#00C9A7", // Turquoise / Green
    category: "Environment Input",
    spec: "Temperature ±0.5°C, Relative Humidity ±3%",
    role: "Temperature and humidity compensation input for temperature-dependent chemical reaction rate correction curves.",
    pinout: "I2C address 0x76, low-power telemetry"
  },
  {
    id: "led",
    name: "Calibrated 5000K LED",
    color: "#FFD166", // Sun Yellow
    category: "Controlled Emitter",
    spec: "High CRI (Ra > 95), stabilized constant-current driver",
    role: "Provides repeatable, spectral-stable illumination without chromatic drift across varying field battery voltages.",
    pinout: "Constant current PWM / 20mA regulated"
  },
  {
    id: "diffuser",
    name: "Lambertian Optical Diffuser",
    color: "#7DD3FC", // Sky Blue
    category: "Optical Conditioning",
    spec: "Engineered PTFE diffusion disk",
    role: "Eliminates specular hotspots and guarantees uniform spatial irradiance across the multi-zone strip surface.",
    pinout: "Mechanical optical baffle"
  },
  {
    id: "chamber",
    name: "Light-Tight Optical Chamber",
    color: "#087F8C", // Deep Teal
    category: "Chamber Enclosure",
    spec: "Matte-black internal shroud, 3D printed ABS/PETG with magnetic latch",
    role: "Controlled illumination environment and fixed strip mechanical positioning slot with repeatable focal distance.",
    pinout: "Mechanical latch with micro-switch detection"
  },
  {
    id: "strip",
    name: "AquaSense Multi-Zone Strip",
    color: "#FF7A6B", // Coral
    category: "Chemical Interface",
    spec: "Sample zone, FRC reaction pad, control pad, optical reference tile",
    role: "Targeting sensitivity down to 0.1 ppm with self-checking control pad and baseline normalization pad.",
    pinout: "Passive bio-chemical test substrate"
  },
  {
    id: "battery",
    name: "18650 LiFePO4 / Li-ion Battery",
    color: "#FFB86B", // Orange
    category: "Power Subsystem",
    spec: "3.7V 2500mAh, integrated TP4056 charge & protection board",
    role: "Field-rugged portable power supporting over 1,200 continuous optical readings per recharge.",
    pinout: "USB-C recharge port + 3.3V LDO regulator"
  },
  {
    id: "phone",
    name: "Field Worker Smartphone",
    color: "#A78BFA", // Lavender
    category: "Computation & Interface",
    spec: "Android / Progressive Web App (PWA) with BLE 5.0",
    role: "Image processing, computer vision zone localization, result display, and offline SQLite field recording.",
    pinout: "BLE GATT client + camera API"
  },
  {
    id: "qr",
    name: "Source QR & Batch Matrix",
    color: "#B7E36A", // Lime
    category: "Digital Identification",
    spec: "High-contrast QR code tag on public water source & strip foil pouch",
    role: "Instantly links GPS, water-source ID, and lot-specific batch calibration profile to each individual test.",
    pinout: "Passive optical 2D barcode"
  }
];
