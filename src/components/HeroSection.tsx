import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { COMPANY_INFO, METRICS } from '../data/companyData';

interface HeroSectionProps {
  onExploreCatalog: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCatalog,
  onContactClick,
}) => {
  return (
    <section id="beranda" className="relative bg-[#FFFFFF] border-b border-[#D4D4D4] pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Trust Kicker & Regional Facility */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D4D4D4]/60 text-xs text-[#737373]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#111111] uppercase tracking-wider">Holding Peternakan Nasional</span>
            <span aria-hidden="true">·</span>
            <span>Didirikan {COMPANY_INFO.established}</span>
            <span aria-hidden="true">·</span>
            <span className="hidden sm:inline">Standar Biosekuriti & Animal Welfare</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#404040]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Sentra Peternakan Subang & Jawa Barat</span>
          </div>
        </div>

        {/* Hero Title & Value Proposition Grid */}
        <div className="pt-8 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.08] [text-wrap:balance]">
              {COMPANY_INFO.heroHeadline}
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <p className="text-base sm:text-lg text-[#404040] leading-relaxed">
              {COMPANY_INFO.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={onExploreCatalog}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#262626] transition-all whitespace-nowrap"
              >
                <span>Lihat Katalog Produk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-transparent hover:bg-[#F5F5F5] border border-[#111111] transition-all whitespace-nowrap"
              >
                <span>Hubungi Penjualan B2B</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cinematic 16:9 Hero Visual Anchor */}
        <div className="relative mt-2 overflow-hidden border border-[#D4D4D4] bg-[#262626] group">
          <div className="aspect-[16/9] w-full max-h-[580px] overflow-hidden">
            <img
              src="/src/assets/images/hero_livestock_facility_1791787786550.jpg"
              alt="Sentra Peternakan PT BerkahJayaGroup di Jawa Barat"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              loading="eager"
            />
          </div>

          {/* Editorial Overlay Caption */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-[#FFFFFF]">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-widest text-[#D4D4D4] font-semibold">
                Fasilitas Agrikultur & Padang Penggemukan
              </p>
              <p className="text-sm text-[#F5F5F5] mt-0.5">
                Pemeliharaan komprehensif mengintegrasikan bibit unggul, pakan ransum presisi, serta pengawasan kesehatan berkala.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D4D4D4] shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#FFFFFF]" />
              <span>Sertifikasi Higienitas & SKKH Terbit</span>
            </div>
          </div>
        </div>

        {/* Quantitative Rigor Strip (4 Key Metrics) */}
        <div className="mt-10 pt-10 border-t border-[#D4D4D4] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {METRICS.map((metric, index) => (
            <div key={index} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#111111] tabular-nums tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-[#262626]">
                {metric.label}
              </div>
              <div className="text-xs text-[#737373]">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
