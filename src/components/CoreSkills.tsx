import React from 'react';
import { SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import { Cpu, Server, Wrench, Award, CheckCircle2 } from 'lucide-react';

export const CoreSkills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Cpu className="w-5 h-5 text-blue-600" />;
      case 1:
        return <Server className="w-5 h-5 text-indigo-600" />;
      case 2:
        return <Wrench className="w-5 h-5 text-emerald-600" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
            02. Core Skills & Tech Stack
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            보유 기술 스택 및 자격 역량
          </h2>
          <p className="text-sm text-slate-600">
            데이터 전처리·AI 모델 최적화 및 워크플로우 자동화를 뒷받침하는 핵심 기술 스택입니다.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              id={`skill-cat-${idx}`}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between print-card"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{cat.title}</h3>
                    <span className="text-[10px] text-slate-400 font-mono">Domain {idx + 1}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-100/80 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900">{skill.name}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        {skill.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Box */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs print-card">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-amber-500" />
            <h3 className="text-base font-bold text-slate-900">공인 자격 사항 (Certifications)</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                id={`cert-item-${cert.name.split(' ')[0]}`}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/70"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-slate-900">{cert.name}</span>
                      <span className="block text-xs text-slate-500">{cert.organization}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0">
                    {cert.date}
                  </span>
                </div>
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-2">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

