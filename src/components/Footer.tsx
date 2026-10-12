import React from 'react';
import { ArrowUp, MapPin, Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onOpenProfileDoc?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenProfileDoc }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#FFFFFF] pt-16 pb-12 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#262626]">
          
          {/* Brand & Corporate Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 bg-[#FFFFFF] text-[#111111] flex items-center justify-center font-bold text-sm tracking-widest">
                BJG
              </span>
              <span className="text-xl font-bold tracking-tight text-[#FFFFFF]">
                {COMPANY_INFO.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed max-w-sm">
              Holding agribisnis peternakan modern di Indonesia. Berkomitmen menghadirkan produk hewani higienis, pakan bermutu presisi, dan kemitraan inklusif bagi ketahanan pangan bangsa.
            </p>

            <div className="pt-2 text-xs text-[#737373] space-y-1">
              <div>Badan Hukum: {COMPANY_INFO.legalName}</div>
              <div>NIB & Izin Usaha Peternakan Terdaftar Republik Indonesia</div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs uppercase font-bold tracking-wider text-[#FFFFFF]">
              Navigasi Halaman
            </div>
            <ul className="space-y-2 text-xs text-[#D4D4D4]">
              <li>
                <a href="#beranda" className="hover:text-[#FFFFFF] transition-colors">
                  Beranda Utama
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-[#FFFFFF] transition-colors">
                  Tentang Kami & Landasan Mutu
                </a>
              </li>
              <li>
                <a href="#bidang-usaha" className="hover:text-[#FFFFFF] transition-colors">
                  Empat Bidang Usaha
                </a>
              </li>
              <li>
                <a href="#produk-layanan" className="hover:text-[#FFFFFF] transition-colors">
                  Katalog Komoditas & Pakan
                </a>
              </li>
              <li>
                <a href="#operasional" className="hover:text-[#FFFFFF] transition-colors">
                  Alur Operasional & Biosekuriti
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-[#FFFFFF] transition-colors">
                  Keunggulan Kompetitif
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#FFFFFF] transition-colors">
                  Kontak & Permintaan Penawaran
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Address & Quick Help */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase font-bold tracking-wider text-[#FFFFFF]">
              Alamat Sentra Peternakan
            </div>
            <div className="space-y-2.5 text-xs text-[#D4D4D4] leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFFFFF] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFFFFF] shrink-0" />
                <span>{COMPANY_INFO.phone} | {COMPANY_INFO.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFFFFF] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>

            {onOpenProfileDoc && (
              <div className="pt-3">
                <button
                  type="button"
                  onClick={onOpenProfileDoc}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FFFFFF] border border-[#404040] hover:border-[#FFFFFF] transition-colors"
                >
                  Buka Ringkasan Profil (Print)
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373]">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. Hak cipta dilindungi undang-undang.
          </div>

          <div className="flex items-center gap-6">
            <span>Standar Agribisnis Terpadu Indonesia</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#D4D4D4] hover:text-[#FFFFFF] transition-colors"
              aria-label="Kembali ke atas"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
