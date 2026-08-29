import React from 'react';
import { KEY_METRICS } from '../data/portfolioData';
import { Trophy, Zap, ShieldCheck, FileCheck } from 'lucide-react';

export const MetricsBanner: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'award':
        return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'custom-trainer':
        return <Zap className="w-5 h-5 text-blue-600" />;
      case 'workflow-automation':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'credentials':
        return <FileCheck className="w-5 h-5 text-indigo-600" />;
      default:
        return <Trophy className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {KEY_METRICS.map((metric) => (
            <div
              key={metric.id}
              id={`metric-card-${metric.id}`}
              className={`p-4 sm:p-5 rounded-2xl bg-white border transition-all duration-200 print-card ${
                metric.highlight
                  ? 'border-blue-200/80 shadow-xs ring-1 ring-blue-500/10'
                  : 'border-slate-200/80 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                  {getIcon(metric.id)}
                </div>
                {metric.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono">
                    {metric.badge}
                  </span>
                )}
              </div>

              <div className="mt-2 space-y-1">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-mono">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-700">
                  {metric.label}
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {metric.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
