import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Printer, MapPin, Sparkles } from 'lucide-react';

interface ContactProps {
  onPrintPdf: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onPrintPdf }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
            05. Contact & Portfolio Information
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            개발자 정보
          </h2>
          <p className="text-sm text-slate-600">
            엔지니어링 기술 포트폴리오를 검토해 주셔서 감사합니다.
          </p>
        </div>

        {/* Minimal Clean Card (No Form) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs print-card space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-blue-600">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ENGINEER PROFILE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {PERSONAL_INFO.name} <span className="text-sm font-normal text-slate-400 font-mono">({PERSONAL_INFO.nameEn})</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                {PERSONAL_INFO.role}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="font-mono font-medium select-all">{PERSONAL_INFO.contact.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{PERSONAL_INFO.contact.location}</span>
                </div>
              </div>
            </div>

            {/* Actions (Screen only) */}
            <div className="no-print flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handleCopyEmail}
                id="contact-copy-email-btn"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-xl text-xs font-bold transition-all shadow-2xs active:scale-98 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>이메일 주소 복사 완료!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-blue-600" />
                    <span>이메일 복사</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onPrintPdf}
                id="contact-print-pdf-btn"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-98"
              >
                <Printer className="w-4 h-4 text-blue-400" />
                <span>PDF 인쇄 / 저장 (A4)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

