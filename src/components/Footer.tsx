import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Terminal, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-slate-200 bg-white text-slate-500 text-xs no-print">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center font-mono text-xs font-bold">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-semibold text-slate-800">
              {PERSONAL_INFO.name} ({PERSONAL_INFO.nameEn})
            </span>
            <span className="text-slate-400 ml-1.5">
              · AX & Backend Engineer Portfolio
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Jung Hee-jin. All rights reserved.
          </span>
          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            type="button"
            className="flex items-center gap-1 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors text-xs font-medium cursor-pointer"
            title="맨 위로 이동"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
