import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { BUSINESS_UNITS, BusinessUnit } from '../data/companyData';

interface BusinessUnitsSectionProps {
  onSelectCategory: (categoryId: string) => void;
}

export const BusinessUnitsSection: React.FC<BusinessUnitsSectionProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="bidang-usaha" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D4D4D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#D4D4D4] pb-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#737373]">
              Portofolio Agribisnis
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
              Empat Pilar Usaha Peternakan Modern
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#404040] max-w-md leading-relaxed">
            Menghubungkan rantai pasok hulu ke hilir untuk menjamin kepastian kualitas, keterlacakan, dan ketersediaan pasokan komersial.
          </p>
        </div>

        {/* Business Units Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {BUSINESS_UNITS.map((unit) => (
            <div
              key={unit.id}
              className="border border-[#D4D4D4] bg-[#FFFFFF] flex flex-col justify-between hover:border-[#111111] transition-all group"
            >
              {/* Media Container with Fallback */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#262626]">
                <img
                  src={unit.image}
                  alt={unit.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[#111111] text-[#FFFFFF] text-xs font-mono px-3 py-1 uppercase tracking-wider font-semibold">
                  {unit.capacity}
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                    {unit.tagline}
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111] tracking-tight">
                    {unit.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#404040] leading-relaxed">
                    {unit.description}
                  </p>
                </div>

                {/* Focus Areas (Clean Unboxed List) */}
                <div className="pt-4 border-t border-[#D4D4D4]">
                  <div className="text-xs font-semibold text-[#111111] uppercase tracking-wider mb-3">
                    Lini Fokus & Komoditas:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#262626]">
                    {unit.focusArea.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#111111]" aria-hidden="true"></span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(unit.id)}
                    className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#111111] bg-[#F5F5F5] hover:bg-[#111111] hover:text-[#FFFFFF] border border-[#D4D4D4] hover:border-[#111111] transition-all flex items-center justify-between"
                  >
                    <span>Katalog & Spesifikasi {unit.name.split(' ')[1]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
