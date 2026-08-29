import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsBanner } from './components/MetricsBanner';
import { CoreSkills } from './components/CoreSkills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResearchPaperModal } from './components/ResearchPaperModal';
import { Printer, FileCode, Check, Copy } from 'lucide-react';

export default function App() {
  const [isPaperModalOpen, setIsPaperModalOpen] = useState(false);

  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-600/10 selection:text-blue-700">
      {/* Sticky Header */}
      <Header onPrintPdf={handlePrintPdf} />

      {/* Main Single Page Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Section 01: Hero & About */}
        <Hero onPrintPdf={handlePrintPdf} />

        {/* Highlight Metrics */}
        <MetricsBanner />

        {/* Section 02: Core Skills & Certifications */}
        <CoreSkills />

        {/* Section 03: Projects (Problem - Solution - Impact) */}
        <Projects onOpenResearchPaper={() => setIsPaperModalOpen(true)} />

        {/* Section 04: Experience & Coaching */}
        <Experience />

        {/* Section 05: Contact & Job Proposal */}
        <Contact onPrintPdf={handlePrintPdf} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal: Research Paper / Technical Report */}
      <ResearchPaperModal
        isOpen={isPaperModalOpen}
        onClose={() => setIsPaperModalOpen(false)}
      />
    </div>
  );
}
