import React from 'react';
import { CheckCircle2, ChevronRight, Dna, Utensils, ShieldAlert, Truck } from 'lucide-react';
import { PROCESS_STEPS } from '../data/companyData';

export const ProcessSection: React.FC = () => {
  const stepIcons = [Dna, Utensils, ShieldAlert, Truck];

  return (
    <section id="operasional" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D4D4D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737373]">
            Standardisasi Mutu Terintegrasi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
            Alur Operasional Peternakan & Jaminan Kualitas
          </h2>
          <p className="text-base text-[#404040] leading-relaxed">
            Setiap siklus pemeliharaan hewan ternak dijalankan dengan protokol terukur untuk memastikan higienitas, produktivitas, dan keamanan pangan dari hulu hingga hilir.
          </p>
        </div>

        {/* 4-Stage Operational Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const IconComp = stepIcons[idx] || CheckCircle2;
            return (
              <div
                key={step.number}
                className="bg-[#FFFFFF] border border-[#D4D4D4] p-6 sm:p-7 flex flex-col justify-between hover:border-[#111111] transition-all group"
              >
                <div className="space-y-4">
                  
                  {/* Human Editorial Numbering & Icon */}
                  <div className="flex items-center justify-between border-b border-[#D4D4D4] pb-4">
                    <span className="text-2xl font-extrabold text-[#111111] tabular-nums font-mono">
                      {step.number}.
                    </span>
                    <div className="w-9 h-9 bg-[#F5F5F5] border border-[#D4D4D4] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-[#FFFFFF] transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs uppercase font-bold tracking-wider text-[#737373]">
                      {step.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-[#111111] tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#404040] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-6 mt-6 border-t border-[#D4D4D4]/70 space-y-2">
                  <div className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
                    Poin Kunci:
                  </div>
                  {step.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#262626]">
                      <span className="w-1.5 h-1.5 bg-[#111111] mt-1 shrink-0" aria-hidden="true"></span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Quality Assurance Assurance Note */}
        <div className="mt-12 p-6 bg-[#F5F5F5] border border-[#D4D4D4] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#111111]">
              Inspeksi Mandiri & Keterbukaan Audit
            </h4>
            <p className="text-xs sm:text-sm text-[#404040]">
              Seluruh fasilitas kandang dan sentra produksi terbuka untuk survei teknis bagi mitra B2B berizin resmi dengan perjanjian temu terlebih dahulu.
            </p>
          </div>
          <a
            href="#kontak"
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#111111] bg-[#FFFFFF] hover:bg-[#111111] hover:text-[#FFFFFF] border border-[#111111] transition-all whitespace-nowrap shrink-0"
          >
            Jadwalkan Kunjungan Teknis
          </a>
        </div>

      </div>
    </section>
  );
};
