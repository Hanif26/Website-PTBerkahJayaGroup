import React from 'react';
import { ShieldCheck, CheckCircle2, Building, Quote } from 'lucide-react';
import { ADVANTAGES } from '../data/companyData';

export const AdvantagesSection: React.FC = () => {
  return (
    <section id="keunggulan" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D4D4D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737373]">
            Standar Kepercayaan Bisnis
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
            Keunggulan Kompetitif Terverifikasi
          </h2>
          <p className="text-base text-[#404040] leading-relaxed">
            Fondasi operasional yang kami bangun bertumpu pada disiplin veteriner, kepastian serapan pasar, dan kepatuhan regulasi pangan hewani.
          </p>
        </div>

        {/* 4 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ADVANTAGES.map((adv) => (
            <div
              key={adv.number}
              className="bg-[#F5F5F5] border border-[#D4D4D4] p-8 flex flex-col justify-between hover:border-[#111111] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#D4D4D4] pb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#737373]">
                    KEUNGGULAN 0{adv.number}
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#111111]" />
                </div>
                <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                  {adv.title}
                </h3>
                <p className="text-sm sm:text-base text-[#404040] leading-relaxed">
                  {adv.description}
                </p>
              </div>

              {/* Claim-to-Proof Adjacency */}
              <div className="mt-6 pt-4 border-t border-[#D4D4D4] text-xs text-[#262626] bg-[#FFFFFF] p-3.5 border border-[#D4D4D4]/50">
                <span className="font-bold text-[#111111] block mb-1">Bukti Penerapan Lapangan:</span>
                <span className="text-[#404040]">{adv.proof}</span>
              </div>
            </div>
          ))}
        </div>

        {/* B2B Partner Proof Statement */}
        <div className="bg-[#111111] text-[#FFFFFF] p-8 sm:p-12 border border-[#111111]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4D4D4]">
                <Quote className="w-4 h-4 text-[#FFFFFF]" />
                <span>Testimoni Kemitraan Agribisnis</span>
              </div>
              <p className="text-base sm:text-lg text-[#F5F5F5] font-normal leading-relaxed italic">
                "Kerja sama kami dengan PT BerkahJayaGroup dalam pengadaan konsentrat pakan dan pasokan sapi bakalan telah berjalan selama lebih dari 3 tahun. Konsistensi mutu karkas, ketepatan jadwal pengiriman, dan kelengkapan sertifikat kesehatan hewannya sangat membantu kestabilan operasional rumah potong kami."
              </p>
              <div className="text-xs text-[#D4D4D4] pt-2">
                <span className="font-bold text-[#FFFFFF] block text-sm">H. Rahmat Hidayat</span>
                <span>Pengelola Sentra Distribusi Daging & RPH Mitra Mandiri, Jawa Barat</span>
              </div>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#404040] pt-6 lg:pt-0 lg:pl-8 space-y-3">
              <div className="text-xs uppercase tracking-wider text-[#D4D4D4] font-semibold">
                Jaminan Kemitraan Resmi
              </div>
              <div className="space-y-2 text-xs text-[#D4D4D4]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFFFFF]" />
                  <span>Legalitas Badan Usaha PT Terdaftar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFFFFF]" />
                  <span>Perjanjian Kerjasama (MoU) Transparan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFFFFF]" />
                  <span>Dukungan Tim Teknis Medik Veteriner</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
