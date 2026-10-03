# AquaSense — Field Water Intelligence

### Smart India Hackathon 2026 — PS 26253
**Problem Statement:** *Development of Strip-Based Water Quality Test Kits for Assessment of Free Residual Chlorine (FRC) with Sensitivity up to 0.1 ppm for Field-Level Applications*

**Domain:** Water Quality / Drinking Water Safety / Rural Water Monitoring  
**Tagline:** *"Measure Precisely. Monitor Continuously. Protect Every Water Source."*

---

## 🌊 Overview

AquaSense is a field-ready strip-based Free Residual Chlorine monitoring system designed around:
1. **0.1 ppm Target Sensitivity:** Bio-chemical test strip chemistry calibrated for low-level residual chlorine assessment.
2. **Controlled Optical Measurement:** Enclosed light-tight chamber with a regulated 5000K LED, PTFE diffuser, and TCS34725 16-bit RGBC colorimetry sensor.
3. **Edge Computer Vision & ML:** On-device deterministic polynomial inference and on-strip white-reference tile normalization (zero dependency on generative AI or continuous internet).
4. **Offline-First Persistence:** Encrypted local SQLite/IndexedDB queue for intermittent rural connectivity.
5. **Source-Level Surveillance:** QR-code water-source passports linking GPS, timestamp, batch profile, and residual chlorine curves to district surveillance dashboards.

---

## 🎨 Visual Identity

- **Light-First Scientific Design:** 75% light, fresh water surfaces with vibrant multi-color engineering accents (Aqua, Turquoise, Deep Teal, Mint, Sky Blue, Lime, Sun Yellow, Coral, Orange, Lavender, Purple) and 25% contrast dark teal.
- **Accurate Chemistry Storytelling:** FRC indicator pad transitions from *pale yellow $\to$ yellow $\to$ orange $\to$ coral* (avoiding generic blue indicator tropes).

---

## 🛠️ Hardware & Sensory Stack

| Subsystem | Component | Specifications | Role |
|---|---|---|---|
| **Microcontroller** | ESP32-S3 | Dual Xtensa 240MHz, BLE 5.0 | Coordinates optical sensors, regulates LED current, broadcasts BLE GATT packets |
| **Colorimetry Sensor** | TCS34725 | 16-bit RGBC with IR filter | High-sensitivity color extraction from reaction and reference zones |
| **Photometric Sensor** | BH1750 | 1 to 65535 lux range | Verifies ambient light seal integrity within optical chamber |
| **Environmental Sensor** | BME280 | Temperature & Relative Humidity | Temperature compensation for chemical reaction rate curves |
| **Illumination** | Calibrated 5000K LED | High CRI (Ra > 95) | Regulated constant-current emitter eliminating battery voltage drift |
| **Optical Conditioning** | PTFE Diffuser | Lambertian diffusion disk | Eliminates specular hotspots across test strip pads |
| **Strip Substrate** | Multi-Zone FRC Strip | Zones A (Reaction), B (Control), C (Ref) | Standardized dry indicator test medium targeting 0.10 ppm FRC |
| **Power** | 18650 Li-ion | 3.7V 2500mAh with TP4056 | Supports >1,200 continuous field tests per recharge |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/chandru0708/AquaSense.git
cd AquaSense

# Install dependencies
npm install

# Run locally in development mode
npm run dev

# Build production bundle
npm run build
```

---

## 📋 Scientific Disclaimer

> **Prototype Concept — Laboratory Validation Required.**  
> AquaSense is an ongoing engineering and scientific submission for Smart India Hackathon 2026. Demonstration values, test curves, and map records are simulated for functional demonstration purposes.
