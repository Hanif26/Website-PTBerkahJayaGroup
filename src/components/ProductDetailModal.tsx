import React from 'react';
import { X, CheckCircle2, ArrowRight, Shield, Calendar, PackageCheck } from 'lucide-react';
import { CatalogItem } from '../data/companyData';

interface ProductDetailModalProps {
  item: CatalogItem | null;
  onClose: () => void;
  onRequestQuote: (item: CatalogItem) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  onRequestQuote,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#111111]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div
        className="relative bg-[#FFFFFF] border border-[#D4D4D4] max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#D4D4D4] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
              <span>KODE: {item.code}</span>
              <span aria-hidden="true">·</span>
              <span className="uppercase font-semibold text-[#111111]">{item.categoryLabel}</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111111] tracking-tight mt-1">
              {item.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#737373] hover:text-[#111111] hover:bg-[#F5F5F5] transition-colors"
            aria-label="Tutup detail modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h4 className="text-xs uppercase font-bold tracking-wider text-[#737373]">
            Deskripsi Komoditas
          </h4>
          <p className="text-sm sm:text-base text-[#262626] leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Specifications Table */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase font-bold tracking-wider text-[#737373]">
            Lembar Spesifikasi Teknis
          </h4>
          <div className="border border-[#D4D4D4] divide-y divide-[#D4D4D4] text-xs sm:text-sm">
            {item.specs.map((spec, i) => (
              <div key={i} className="grid grid-cols-12 p-3 bg-[#FFFFFF] odd:bg-[#F5F5F5]/40">
                <div className="col-span-5 font-semibold text-[#404040]">
                  {spec.label}
                </div>
                <div className="col-span-7 text-[#111111] font-medium">
                  {spec.value}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-12 p-3 bg-[#FFFFFF]">
              <div className="col-span-5 font-semibold text-[#404040]">
                Minimum Pemesanan
              </div>
              <div className="col-span-7 text-[#111111] font-medium">
                {item.minOrder} ({item.unit})
              </div>
            </div>
            <div className="grid grid-cols-12 p-3 bg-[#FFFFFF]">
              <div className="col-span-5 font-semibold text-[#404040]">
                Status Ketersediaan
              </div>
              <div className="col-span-7 text-[#111111] font-medium">
                {item.availability}
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="p-4 bg-[#F5F5F5] border border-[#D4D4D4] flex items-center gap-3 text-xs text-[#404040]">
          <Shield className="w-5 h-5 text-[#111111] shrink-0" />
          <span>
            Dilengkapi surat jalan dinas, rekam medik veteriner, dan sertifikasi jaminan sanitasi resmi dari PT BerkahJayaGroup.
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2 border-t border-[#D4D4D4]">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#404040] hover:text-[#111111] border border-[#D4D4D4] hover:border-[#111111] transition-colors"
          >
            Tutup
          </button>
          <button
            type="button"
            onClick={() => {
              onRequestQuote(item);
              onClose();
            }}
            className="w-full sm:flex-1 py-3 px-5 text-xs font-bold uppercase tracking-wider bg-[#111111] hover:bg-[#262626] text-[#FFFFFF] transition-colors flex items-center justify-center gap-2"
          >
            <span>Minta Penawaran Harga ({item.name.slice(0, 24)}...)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
