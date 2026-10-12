import React from 'react';
import { Target, Compass, Award, Shield, Users, Leaf, ArrowRight } from 'lucide-react';
import { ABOUT_DATA, COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const valueIcons = [Award, Shield, Users, Leaf];

  return (
    <section id="tentang-kami" className="py-20 lg:py-28 bg-[#F5F5F5] border-b border-[#D4D4D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs uppercase tracking-widest font-bold text-[#737373]">
            Profil & Landasan Perusahaan
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight [text-wrap:balance]">
            Membangun Kedaulatan Ternak Melalui Pengelolaan Berkelanjutan
          </h2>
          <p className="text-base sm:text-lg text-[#404040] leading-relaxed pt-2">
            {ABOUT_DATA.profile}
          </p>
        </div>

        {/* Vision & Mission Split Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Vision Block */}
          <div className="lg:col-span-5 bg-[#FFFFFF] p-8 sm:p-10 border border-[#D4D4D4] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#111111] text-[#FFFFFF] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                  Visi Perusahaan
                </h3>
              </div>
              <p className="text-base text-[#404040] leading-relaxed italic border-t border-[#D4D4D4]/70 pt-4">
                "{ABOUT_DATA.vision}"
              </p>
            </div>
            
            <div className="pt-8 text-xs text-[#737373]">
              Target Jangka Panjang: Standar Agribisnis Terpercaya 2030
            </div>
          </div>

          {/* Mission Block */}
          <div className="lg:col-span-7 bg-[#FFFFFF] p-8 sm:p-10 border border-[#D4D4D4] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#111111] text-[#FFFFFF] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                  Misi Strategis
                </h3>
              </div>
              
              <div className="divide-y divide-[#D4D4D4]/70 border-t border-[#D4D4D4]/70 pt-2">
                {ABOUT_DATA.missions.map((mission, idx) => (
                  <div key={idx} className="py-3.5 flex items-start gap-4">
                    <span className="text-xs font-mono font-bold text-[#737373] pt-0.5 tabular-nums">
                      0{idx + 1}.
                    </span>
                    <p className="text-sm sm:text-base text-[#262626] leading-relaxed">
                      {mission}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 text-xs text-[#737373] flex items-center justify-between border-t border-[#D4D4D4]/70">
              <span>Berlaku untuk seluruh anak usaha dan sentra budidaya</span>
              <span className="font-semibold text-[#111111]">ISO & GAP Compliant</span>
            </div>
          </div>
        </div>

        {/* Corporate Values Grid */}
        <div className="space-y-6">
          <div className="border-b border-[#D4D4D4] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#737373]">
                Prinsip Fundamental
              </span>
              <h3 className="text-2xl font-bold text-[#111111] tracking-tight">
                Empat Nilai Utama PT BerkahJayaGroup
              </h3>
            </div>
            <p className="text-xs text-[#737373] max-w-sm">
              Menjadi pedoman operasional seluruh tenaga medis veteriner, teknisi pakan, dan manajemen lapangan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.values.map((val, idx) => {
              const IconComp = valueIcons[idx] || Award;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] p-6 border border-[#D4D4D4] flex flex-col justify-between hover:border-[#111111] transition-colors"
                >
                  <div className="space-y-3">
                    <div className="w-8 h-8 bg-[#F5F5F5] border border-[#D4D4D4] flex items-center justify-center text-[#111111]">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-lg font-bold text-[#111111]">
                      {val.title}
                    </h4>
                    <p className="text-sm text-[#404040] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-[#D4D4D4]/60 text-xs font-mono text-[#737373] tabular-nums mt-4">
                    NILAI INTI 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
