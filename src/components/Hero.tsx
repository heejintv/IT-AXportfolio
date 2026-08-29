import React, { useState } from 'react';
import { ArrowDown, Check, Copy, Sparkles, ShieldCheck, Database, Award, Printer } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onPrintPdf: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPrintPdf }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="pt-24 sm:pt-32 pb-12 sm:pb-16 relative">
      {/* Print-only document header */}
      <div className="print-header-banner">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{PERSONAL_INFO.name} ({PERSONAL_INFO.nameEn})</h1>
            <p className="text-sm font-semibold text-blue-700 mt-1">{PERSONAL_INFO.role}</p>
            <p className="text-xs text-slate-700 mt-1 font-semibold">{PERSONAL_INFO.headline}</p>
            <p className="text-xs text-slate-600 mt-0.5">{PERSONAL_INFO.subHeadline}</p>
          </div>
          <div className="text-right text-xs text-slate-500">
            <p>이메일: {PERSONAL_INFO.contact.email}</p>
            <p>지역: {PERSONAL_INFO.contact.location}</p>
            <p>자격: SQLD, ADsP 취득</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-left">
        {/* Role & Target Pill */}
        <div className="no-print inline-flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            AI · 업무 자동화(AX) 엔지니어
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
            현업 시스템 ⟷ 신기술(AI·자동화) 가교
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
            Target: 채용 담당자 & IT/AX 기술 면접관
          </span>
        </div>

        {/* Main Title & Candidate Name */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            단순 반복을 넘어, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              데이터 정합성을 보장하는 AX 솔루션
            </span>
            을 구축합니다.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl pt-2">
            안녕하세요, <strong className="font-semibold text-slate-900">{PERSONAL_INFO.name}</strong>입니다. <br />
            시스템 로직에 대한 깊은 이해와 AI·Python 구현력을 바탕으로 오류 없이 안정적인 기업 업무 자동화 파이프라인을 설계합니다.
          </p>
        </div>

        {/* Highlight Callout Box */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs print-card">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                AX 핵심 포지셔닝
                <span className="text-[11px] font-normal px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-mono">
                  Bridging AI & Systems
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                연구실 수준의 AI에 머무르지 않고, <strong className="text-blue-700 font-semibold">현업 시스템과 신기술(AI·자동화)을 가장 빠르게 연결</strong>하여 현업 부서의 실질적인 업무 효율성을 극대화합니다.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-500">
                <span className="inline-flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-200">
                  <Sparkles className="w-3 h-3 text-blue-600" /> AI & Python 파이프라인
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-200">
                  <Database className="w-3 h-3 text-slate-600" /> 시스템 로직 이해 & 데이터 정합성
                </span>
                <span className="inline-flex items-center gap-1 bg-slate-50 px-2 py-1 rounded border border-slate-200">
                  <Award className="w-3 h-3 text-amber-600" /> SQLD · ADsP 공인 자격
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons (Screen only) */}
        <div className="mt-8 flex flex-wrap items-center gap-3 no-print">
          <a
            href="#projects"
            id="hero-view-projects-btn"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-xs transition-all active:scale-98"
          >
            <span>프로젝트 & 성과 살펴보기</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            id="hero-copy-email-btn"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium transition-all shadow-xs active:scale-98 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">이메일 주소 복사됨!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>이메일 복사 ({PERSONAL_INFO.contact.email})</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onPrintPdf}
            id="hero-print-pdf-btn"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-all shadow-xs active:scale-98 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>PDF 저장 / 인쇄</span>
          </button>
        </div>
      </div>
    </section>
  );
};

