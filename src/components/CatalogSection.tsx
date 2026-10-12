import React, { useState, useMemo } from 'react';
import { Search, ArrowRight, FileText, Check, AlertCircle } from 'lucide-react';
import { CATALOG_ITEMS, CatalogItem } from '../data/companyData';
import { ProductDetailModal } from './ProductDetailModal';

interface CatalogSectionProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onRequestQuoteForProduct: (item: CatalogItem) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onRequestQuoteForProduct,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [detailModalItem, setDetailModalItem] = useState<CatalogItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Komoditas' },
    { id: 'sapi', label: 'Sapi' },
    { id: 'domba-kambing', label: 'Domba & Kambing' },
    { id: 'unggas', label: 'Unggas' },
    { id: 'pakan', label: 'Pakan Ternak' },
    { id: 'kemitraan', label: 'Kemitraan Usaha' },
  ];

  const filteredItems = useMemo(() => {
    return CATALOG_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="produk-layanan" className="py-20 lg:py-28 bg-[#F5F5F5] border-b border-[#D4D4D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737373]">
            Katalog Produk & Kemitraan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
            Pasokan Ternak & Pakan Berkualitas Terstandar
          </h2>
          <p className="text-base text-[#404040] leading-relaxed">
            Data spesifikasi komoditas ternak hidup, karkas, pakan terformulasi, dan program kemitraan resmi PT BerkahJayaGroup.
          </p>
        </div>

        {/* Filter Bar & Search Container */}
        <div className="bg-[#FFFFFF] border border-[#D4D4D4] p-4 sm:p-5 mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Segmented Filter Control (Functional interactive buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 border ${
                    isActive
                      ? 'bg-[#111111] text-[#FFFFFF] border-[#111111]'
                      : 'bg-[#FFFFFF] text-[#404040] border-transparent hover:border-[#D4D4D4] hover:text-[#111111]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] lg:w-72">
            <Search className="w-4 h-4 text-[#737373] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari komoditas atau kode..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#F5F5F5] border border-[#D4D4D4] text-[#111111] placeholder-[#737373] focus:outline-none focus:border-[#111111] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#737373] hover:text-[#111111]"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Catalog Items Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFFFFF] border border-[#D4D4D4] p-6 flex flex-col justify-between hover:border-[#111111] transition-all group"
              >
                <div className="space-y-4">
                  
                  {/* Clean unboxed metadata with separators (NO static pills) */}
                  <div className="flex items-center justify-between text-xs text-[#737373] font-mono border-b border-[#D4D4D4]/60 pb-3">
                    <span className="font-semibold text-[#111111]">{item.code}</span>
                    <div className="flex items-center gap-1.5">
                      <span>{item.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#262626]">{item.availability}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#111111] tracking-tight group-hover:text-[#262626] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#404040] mt-2 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Specification Key Snippets */}
                  <div className="pt-2 space-y-2 text-xs">
                    {item.specs.slice(0, 2).map((sp, idx) => (
                      <div key={idx} className="flex items-baseline justify-between py-1 border-b border-[#F5F5F5]">
                        <span className="text-[#737373]">{sp.label}:</span>
                        <span className="font-medium text-[#111111] text-right">{sp.value}</span>
                      </div>
                    ))}
                    <div className="flex items-baseline justify-between py-1">
                      <span className="text-[#737373]">Min. Order:</span>
                      <span className="font-semibold text-[#111111]">{item.minOrder}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-6 mt-4 border-t border-[#D4D4D4] flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setDetailModalItem(item)}
                    className="flex-1 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#111111] bg-[#F5F5F5] hover:bg-[#D4D4D4] transition-colors text-center"
                  >
                    Detail Teknis
                  </button>
                  <button
                    type="button"
                    onClick={() => onRequestQuoteForProduct(item)}
                    className="flex-1 py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#262626] transition-colors text-center flex items-center justify-center gap-1"
                  >
                    <span>Penawaran</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#FFFFFF] border border-[#D4D4D4] p-12 text-center max-w-lg mx-auto space-y-3">
            <AlertCircle className="w-8 h-8 text-[#737373] mx-auto" />
            <h3 className="text-lg font-bold text-[#111111]">Tidak Ada Komoditas Ditemukan</h3>
            <p className="text-sm text-[#404040]">
              Silakan atur ulang kata kunci pencarian atau pilih kategori lain.
            </p>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('all');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#111111] text-[#FFFFFF]"
            >
              Tampilkan Semua
            </button>
          </div>
        )}

        {/* Modal for item detail */}
        <ProductDetailModal
          item={detailModalItem}
          onClose={() => setDetailModalItem(null)}
          onRequestQuote={onRequestQuoteForProduct}
        />

      </div>
    </section>
  );
};
