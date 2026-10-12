import React from 'react';
import { X, Printer, Download, CheckCircle2, Shield, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO, ABOUT_DATA, BUSINESS_UNITS, METRICS } from '../data/companyData';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#111111]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div
        className="relative bg-[#FFFFFF] border border-[#D4D4D4] max-w-3xl w-full p-6 sm:p-10 shadow-2xl space-y-8 my-8 print:border-none print:shadow-none print:p-0 print:m-0"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between gap-4 border-b border-[#D4D4D4] pb-4 print:hidden">
          <div className="text-xs font-mono uppercase tracking-wider text-[#737373]">
            DOKUMEN RESMI PROFIL KORPORAT
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#111111] text-[#FFFFFF] hover:bg-[#262626] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / Cetak PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#737373] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors"
              aria-label="Tutup dokumen profil"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Document Header */}
        <div className="border-b-2 border-[#111111] pb-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-[#111111] text-[#FFFFFF] flex items-center justify-center font-bold text-base tracking-widest">
                BJG
              </span>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#111111]">
                  {COMPANY_INFO.legalName}
                </h2>
                <div className="text-xs text-[#737373]">
                  {COMPANY_INFO.industry} · Berdiri Sejak {COMPANY_INFO.established}
                </div>
              </div>
            </div>
            <div className="text-right hidden sm:block text-xs text-[#737373]">
              <div>Klasifikasi Usaha: B2B Agribisnis</div>
              <div>Status: Terdaftar Resmi</div>
            </div>
          </div>
          <p className="text-sm text-[#404040] pt-2 italic">
            "{COMPANY_INFO.tagline}"
          </p>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3 text-sm">
          <h3 className="text-xs uppercase font-bold tracking-wider text-[#111111] border-b border-[#D4D4D4] pb-1">
            1. Ringkasan Eksekutif
          </h3>
          <p className="text-[#262626] leading-relaxed">
            {ABOUT_DATA.profile}
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="space-y-3 text-sm">
          <h3 className="text-xs uppercase font-bold tracking-wider text-[#111111] border-b border-[#D4D4D4] pb-1">
            2. Visi & Misi Strategis
          </h3>
          <div className="p-3 bg-[#F5F5F5] border border-[#D4D4D4] text-xs">
            <strong>Visi:</strong> "{ABOUT_DATA.vision}"
          </div>
          <div className="space-y-1.5 pt-1 text-xs text-[#404040]">
            {ABOUT_DATA.missions.map((m, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="font-bold text-[#111111]">0{idx + 1}.</span>
                <span>{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Business Units & Operational Capacities */}
        <div className="space-y-3 text-sm">
          <h3 className="text-xs uppercase font-bold tracking-wider text-[#111111] border-b border-[#D4D4D4] pb-1">
            3. Unit Usaha & Kapasitas Operasional
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {BUSINESS_UNITS.map((unit) => (
              <div key={unit.id} className="p-3 border border-[#D4D4D4] bg-[#FFFFFF] space-y-1">
                <div className="font-bold text-[#111111]">{unit.name}</div>
                <div className="text-[#737373]">{unit.capacity}</div>
                <div className="text-[11px] text-[#404040]">
                  Fokus: {unit.focusArea.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="space-y-3 text-sm">
          <h3 className="text-xs uppercase font-bold tracking-wider text-[#111111] border-b border-[#D4D4D4] pb-1">
            4. Indikator Skala Operasi
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {METRICS.map((m, idx) => (
              <div key={idx} className="p-3 border border-[#D4D4D4] bg-[#F5F5F5]">
                <div className="text-xl font-bold text-[#111111]">{m.value}</div>
                <div className="text-[11px] font-semibold text-[#404040]">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Address & Verification */}
        <div className="border-t border-[#D4D4D4] pt-4 text-xs space-y-2 text-[#404040]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="font-bold text-[#111111]">Sentra Peternakan Utama:</div>
              <div>{COMPANY_INFO.address}</div>
            </div>
            <div>
              <div className="font-bold text-[#111111]">Kontak Resmi Penawaran:</div>
              <div>Telp: {COMPANY_INFO.phone} | WA: {COMPANY_INFO.whatsapp}</div>
              <div>Email: {COMPANY_INFO.salesEmail}</div>
            </div>
          </div>
          <div className="text-[10px] text-[#737373] pt-2 text-center border-t border-[#F5F5F5]">
            Dokumen profil resmi PT BerkahJayaGroup — Disusun untuk keperluan evaluasi tender, kemitraan plasma, dan calon pembeli B2B.
          </div>
        </div>

        {/* Modal Footer (Hidden on print) */}
        <div className="border-t border-[#D4D4D4] pt-4 flex justify-end gap-3 print:hidden">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider border border-[#D4D4D4] hover:bg-[#F5F5F5] transition-colors"
          >
            Tutup Dokumen
          </button>
          <button
            type="button"
            onClick={handlePrint}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#111111] text-[#FFFFFF] hover:bg-[#262626] transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak Halaman Ini</span>
          </button>
        </div>
      </div>
    </div>
  );
};
