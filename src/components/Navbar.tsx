import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenProfileDoc?: () => void;
  onNavigateToCatalog?: () => void;
  onNavigateToContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenProfileDoc,
  onNavigateToCatalog,
  onNavigateToContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Kami', href: '#tentang-kami' },
    { label: 'Bidang Usaha', href: '#bidang-usaha' },
    { label: 'Produk & Layanan', href: '#produk-layanan' },
    { label: 'Operasional', href: '#operasional' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#D4D4D4] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element in display face, no subtext pill) */}
          <a
            href="#beranda"
            className="flex items-center gap-3 text-xl font-bold tracking-tight text-[#111111] hover:text-[#262626] transition-colors whitespace-nowrap shrink-0"
          >
            <span className="w-8 h-8 rounded-none bg-[#111111] text-[#FFFFFF] flex items-center justify-center font-bold text-sm tracking-widest">
              BJG
            </span>
            <span>{COMPANY_INFO.name}</span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#404040]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-[#111111] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#111111]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onOpenProfileDoc && (
              <button
                type="button"
                onClick={onOpenProfileDoc}
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#404040] hover:text-[#111111] border border-[#D4D4D4] hover:border-[#111111] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Ringkasan Perusahaan</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                if (onNavigateToContact) {
                  onNavigateToContact();
                } else {
                  handleLinkClick('#kontak');
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#262626] transition-all whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] hover:bg-[#F5F5F5] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D4D4D4] bg-[#FFFFFF] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-medium text-[#262626] hover:text-[#111111] py-1 border-b border-[#F5F5F5] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              {onOpenProfileDoc && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenProfileDoc();
                  }}
                  className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider border border-[#D4D4D4] text-[#262626] hover:bg-[#F5F5F5] transition-colors"
                >
                  Lihat Profil Singkat (PDF/Print)
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateToContact) {
                    onNavigateToContact();
                  } else {
                    handleLinkClick('#kontak');
                  }
                }}
                className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider bg-[#111111] text-[#FFFFFF] hover:bg-[#262626] transition-colors flex items-center justify-center gap-2"
              >
                <span>Konsultasi & Penawaran</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
