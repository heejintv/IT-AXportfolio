import React from 'react';
import { X, FileText, Download, Award, CheckCircle, Brain, Layers, BarChart3, Printer } from 'lucide-react';

interface ResearchPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchPaperModal: React.FC<ResearchPaperModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrintDocument = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs modal-overlay animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="research-paper-modal-content"
        className="bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-blue-600">Research Paper & Technical Report</span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                뇌종양 의료 영상 분할을 위한 3D nnU-Net 및 2D U-Net 하이브리드 앙상블 기법 연구
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-slate-100/80 text-xs font-mono">
            <div>
              <span className="text-slate-500">연구 참여: </span>
              <strong className="text-slate-900">정희진 (Custom Trainer & 데이터 증강 주도)</strong>
            </div>
            <div>
              <span className="text-slate-500">발표: </span>
              <strong className="text-slate-900">2025 캡스톤디자인 경진대회</strong>
            </div>
            <div>
              <span className="text-slate-500">수상: </span>
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">금상 수상</span>
            </div>
          </div>

          {/* Abstract */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500">Abstract (요약)</h4>
            <p className="text-slate-700 leading-relaxed bg-blue-50/50 p-3.5 rounded-xl border border-blue-100">
              본 연구에서는 다기관 3D MRI 뇌종양 데이터셋에 대해 발생하는 데이터 불균형 및 미세 종양 구조 손실 문제를 해결하기 위해,
              <strong>맞춤형 손실함수를 제어하는 Custom Trainer</strong>와 <strong>특화 데이터 증강(Data Augmentation) 파이프라인</strong>을 구축하였다.
              이를 기반으로 팀 앙상블 파이프라인(3D nnU-Net 공간 맥락 + 2D U-Net 미세 경계 결합)에 연계하여,
              초기 기준 모델 대비 <strong>Dice Score 0.8926 (+39.2% 향상)</strong>을 기록하며 2025 캡스톤디자인 경진대회 금상을 수상하였다.
            </p>
          </div>

          {/* Architecture Comparison Table */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500">Architecture & Performance Metrics</h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 font-semibold text-slate-700">
                  <tr>
                    <th className="p-2.5">파이프라인 모델 / 기법</th>
                    <th className="p-2.5">특징 및 구현 역할</th>
                    <th className="p-2.5">Dice Score</th>
                    <th className="p-2.5">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2.5 font-medium">단일 Baseline (2D)</td>
                    <td className="p-2.5 text-slate-500">기본 슬라이스 모델 (초기 기준)</td>
                    <td className="p-2.5 font-mono text-slate-600">0.6410</td>
                    <td className="p-2.5 text-slate-400">초기 기준치</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-medium">Custom Trainer + 증강</td>
                    <td className="p-2.5 text-blue-700 font-semibold">특화 손실함수 및 증강 파이프라인 [정희진 주도]</td>
                    <td className="p-2.5 font-mono text-slate-700 font-bold">0.8240</td>
                    <td className="p-2.5 text-blue-600 font-semibold">단일 성능 극대화</td>
                  </tr>
                  <tr className="bg-blue-50/60 font-semibold text-blue-900">
                    <td className="p-2.5 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      팀 3D+2D 앙상블 파이프라인
                    </td>
                    <td className="p-2.5 text-blue-800">커스텀 모델 기반 볼륨 맥락 + 슬라이스 앙상블 [팀 협업]</td>
                    <td className="p-2.5 font-mono text-blue-700 font-bold">0.8926</td>
                    <td className="p-2.5 text-emerald-700 font-bold">+39.2% 향상 (금상)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Innovations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900 text-xs">
                <Brain className="w-4 h-4 text-blue-600" />
                <span>Custom Trainer & 손실함수 최적화</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                의료 영상의 극심한 클래스 불균형을 극복하기 위해 복합 손실함수(Dice + Cross Entropy) 가중치를 조절하는 커스텀 트레이너를 직접 구현하여 안정적 수렴 유도.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-slate-900 text-xs">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>데이터 증강 & 원격 학습 파이프라인</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                노이즈 주입 및 회전/스케일링 등 특화 증강 기법을 적용하고, 리눅스 원격 환경에서 GPU 학습 중단을 방지하는 체크포인트 자동 복구 파이프라인 구축.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            * 캡스톤디자인 제출 및 심사 승인 완료된 공식 연구 요약본입니다.
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrintDocument}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>보고서 인쇄 / PDF 저장</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-100 transition-colors"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
