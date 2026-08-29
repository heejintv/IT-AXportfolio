import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { 
  FileText, 
  Sparkles, 
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Server
} from 'lucide-react';

interface ProjectsProps {
  onOpenResearchPaper: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenResearchPaper }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'AI' | 'Automation'>('All');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'AI') return proj.category.includes('AI');
    if (selectedFilter === 'Automation') return proj.category.includes('자동화') || proj.category.includes('워크플로우');
    return true;
  });

  return (
    <section id="projects" className="py-12 sm:py-16 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
              03. Core Projects & Engineering Cases
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              실전 프로젝트 및 구현 사례
            </h2>
            <p className="text-sm text-slate-600">
              AI 모델 커스텀 최적화와 워크플로우 자동화 설계를 통해 도출한 핵심 구현 로직과 AX 연계 역량입니다.
            </p>
          </div>

          {/* Filter Pills (Screen Only) */}
          <div className="no-print flex items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl border border-slate-200 shrink-0">
            <button
              onClick={() => setSelectedFilter('All')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'All'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              전체 ({PROJECTS.length})
            </button>
            <button
              onClick={() => setSelectedFilter('AI')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'AI'
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              AI & 데이터 최적화
            </button>
            <button
              onClick={() => setSelectedFilter('Automation')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === 'Automation'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              프로세스 & 자동화
            </button>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs print-card print-avoid-break space-y-6"
            >
              {/* Top Meta & Badges */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-100 pb-5">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                      CASE #{String(index + 1).padStart(2, '0')} · {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {project.title}
                  </h3>
                  {project.serviceOverview && (
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      💡 <strong>서비스 개요:</strong> {project.serviceOverview}
                    </p>
                  )}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 shrink-0">
                  {project.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200/80 shadow-2xs font-mono"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" /> 기술 스택:
                </span>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100/80 text-slate-800 border border-slate-200/60 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Core Implementations List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  담당 역할 및 핵심 구현 로직
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {project.coreImplementations.map((impl, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/70 space-y-1"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold text-xs shrink-0 mt-0.5">•</span>
                        <div className="space-y-0.5">
                          {impl.category && (
                            <span className="inline-block text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 mr-1.5">
                              [{impl.category}]
                            </span>
                          )}
                          <span className="text-xs sm:text-sm font-bold text-slate-900">
                            {impl.title}
                          </span>
                          {impl.description && (
                            <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
                              {impl.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AX Linkage Box */}
              <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
                <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-blue-400 flex items-center gap-2">
                    <span>AX 연계 강점 (Practical AX Value)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.axLinkage}
                  </p>
                </div>
              </div>

              {/* Project Card Bottom Action Button */}
              {project.paperDownloadAvailable && (
                <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                    <span>2025 캡스톤디자인 경진대회 금상 수상 연구 보고서 및 요약본 열람 가능</span>
                  </div>

                  <a
                    href="#"
                    id="btn-download-research-paper"
                    onClick={(e) => {
                      e.preventDefault();
                      onOpenResearchPaper();
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-98"
                  >
                    <FileText className="w-4 h-4 text-blue-600" />
                    <span>📄 연구 보고서/논문 다운로드 & 요약 열람</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-500" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

