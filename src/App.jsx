import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import InnovationSection from './components/InnovationSection';
import StripTechnology from './components/StripTechnology';
import OpticalReader from './components/OpticalReader';
import TechnicalArchitecture from './components/TechnicalArchitecture';
import FieldWorkflow from './components/FieldWorkflow';
import AIEngine from './components/AIEngine';
import TestValidation from './components/TestValidation';
import SourceIntelligence from './components/SourceIntelligence';
import OfflineMonitoring from './components/OfflineMonitoring';
import BatchCalibration from './components/BatchCalibration';
import PrototypeSection from './components/PrototypeSection';
import LiveDemo from './components/LiveDemo';
import Challenges from './components/Challenges';
import ValidationRoadmap from './components/ValidationRoadmap';
import Scalability from './components/Scalability';
import Impact from './components/Impact';
import CompleteSystemView from './components/CompleteSystemView';
import FinalVision from './components/FinalVision';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="aquasense-app">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <InnovationSection />
        <StripTechnology />
        <OpticalReader />
        <TechnicalArchitecture />
        <FieldWorkflow />
        <AIEngine />
        <TestValidation />
        <SourceIntelligence />
        <OfflineMonitoring />
        <BatchCalibration />
        <PrototypeSection />
        <LiveDemo />
        <Challenges />
        <ValidationRoadmap />
        <Scalability />
        <Impact />
        <CompleteSystemView />
        <FinalVision />
      </main>
      <Footer />
    </div>
  );
}
