import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { GraduationCap, Sparkles, MessageSquareHeart, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
            04. Experience & Coaching
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            협업 & 코칭 경험
          </h2>
          <p className="text-sm text-slate-600">
            학습자의 시선에서 병목을 진단하고 눈높이에 맞춘 지도를 통해 기술 진입장벽을 낮춘 실전 경험입니다.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              id={`experience-card-${exp.id}`}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs print-card print-avoid-break space-y-6"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-700 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {exp.title}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-mono shrink-0">
                  <MessageSquareHeart className="w-3.5 h-3.5" /> 상생형 코칭
                </span>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  핵심 활동 및 성과
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {exp.keyAchievements.map((ach, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 flex items-start gap-2.5"
                    >
                      <span className="text-emerald-600 font-bold text-xs shrink-0 mt-0.5">•</span>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {ach}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* AX Connection Note */}
              <div className="p-4 rounded-2xl bg-slate-900 text-white shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-blue-400 flex items-center gap-2">
                      <span>AX(업무 자동화) 연계 강점</span>
                      <span className="text-[10px] font-normal text-slate-300 font-mono px-1.5 py-0.2 bg-slate-800 rounded">
                        Empathy & Facilitation
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.axLinkage}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

