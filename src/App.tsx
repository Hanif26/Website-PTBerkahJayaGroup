/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { BusinessUnitsSection } from './components/BusinessUnitsSection';
import { CatalogSection } from './components/CatalogSection';
import { ProcessSection } from './components/ProcessSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { CatalogItem } from './data/companyData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<CatalogItem | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectBusinessCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    scrollToSection('produk-layanan');
  };

  const handleRequestQuote = (item: CatalogItem) => {
    setSelectedProductForQuote(item);
    scrollToSection('kontak');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#111111] flex flex-col font-sans selection:bg-[#111111] selection:text-[#FFFFFF]">
      {/* Responsive Navbar conforming to 3-Zone contract */}
      <Navbar
        onOpenProfileDoc={() => setIsProfileModalOpen(true)}
        onNavigateToCatalog={() => scrollToSection('produk-layanan')}
        onNavigateToContact={() => scrollToSection('kontak')}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreCatalog={() => scrollToSection('produk-layanan')}
          onContactClick={() => scrollToSection('kontak')}
        />

        {/* 2. About Us Section */}
        <AboutSection
          onLearnMore={() => setIsProfileModalOpen(true)}
        />

        {/* 3. Business Units Section */}
        <BusinessUnitsSection
          onSelectCategory={handleSelectBusinessCategory}
        />

        {/* 4. Products & Services (Catalog) Section */}
        <CatalogSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onRequestQuoteForProduct={handleRequestQuote}
        />

        {/* 5. Our Operational Process Section */}
        <ProcessSection />

        {/* 6. Company Advantages & Proof Section */}
        <AdvantagesSection />

        {/* 7. Contact & RFQ Form Section */}
        <ContactSection
          selectedProduct={selectedProductForQuote}
        />
      </main>

      {/* 8. Modern Corporate Footer */}
      <Footer
        onOpenProfileDoc={() => setIsProfileModalOpen(true)}
      />

      {/* Printable / Viewable Company Profile Document Modal */}
      <CompanyProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </div>
  );
}
