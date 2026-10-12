import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, AlertCircle, HelpCircle } from 'lucide-react';
import { COMPANY_INFO, FAQS, CatalogItem } from '../data/companyData';

interface ContactSectionProps {
  initialInquiry?: string;
  selectedProduct?: CatalogItem | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialInquiry,
  selectedProduct,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: selectedProduct ? selectedProduct.categoryLabel : 'Pengadaan Sapi',
    subject: selectedProduct ? `Permintaan Penawaran: ${selectedProduct.name}` : '',
    message: selectedProduct
      ? `Halo PT BerkahJayaGroup, saya ingin meminta informasi penawaran resmi dan jadwal ketersediaan untuk komoditas ${selectedProduct.name} (${selectedProduct.code}) dengan estimasi kebutuhan: ...`
      : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedRef, setSubmittedRef] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const categories = [
    'Pengadaan Sapi Potong / Indukan',
    'Pengadaan Unggas Broiler / Telur',
    'Pengadaan Domba & Kambing',
    'Pemesanan Pakan & Konsentrat',
    'Peluang Kemitraan Plasma / Agen',
    'Kunjungan Teknis & Konsultasi Lainnya',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format alamat email tidak valid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor telepon / WhatsApp wajib diisi';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Nomor telepon minimal 8 digit angka';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Pesan atau rincian kebutuhan minimal 10 karakter';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate B2B reference number
    const refCode = `BJG-REQ-${Date.now().toString().slice(-6)}`;
    setSubmittedRef(refCode);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: 'Pengadaan Sapi',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Halo PT BerkahJayaGroup, saya ${formData.name}. Saya telah mengisi formulir kontak/penawaran (Ref: ${submittedRef || 'Web Inquiry'}). Kebutuhan saya: ${formData.category}. Rincian: ${formData.message}`
    );
    return `https://wa.me/6281288997650?text=${text}`;
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#D4D4D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#737373]">
            Saluran Komunikasi Resmi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111111] leading-tight">
            Hubungi Kami & Ajukan Penawaran
          </h2>
          <p className="text-base text-[#404040] leading-relaxed">
            Tim agribisnis dan penjualan B2B kami siap melayani kebutuhan pengadaan hewan ternak, pakan konsentrat, serta konsultasi kemitraan usaha.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Operational Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-[#D4D4D4] bg-[#F5F5F5] p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-[#111111] tracking-tight border-b border-[#D4D4D4] pb-4">
                Informasi Kantor & Sentra Peternakan
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#111111]">Sentra Peternakan & Fasilitas Utama:</div>
                    <div className="text-[#404040] mt-0.5">{COMPANY_INFO.address}</div>
                    <div className="text-xs text-[#737373] mt-1">{COMPANY_INFO.branchAddress}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-[#D4D4D4]/60 pt-4">
                  <Phone className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#111111]">Telepon & WhatsApp Resmi:</div>
                    <div className="text-[#404040] mt-0.5">{COMPANY_INFO.phone} (Kantor Pusat)</div>
                    <div className="text-[#111111] font-medium">{COMPANY_INFO.whatsapp} (Respon Cepat B2B)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-[#D4D4D4]/60 pt-4">
                  <Mail className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#111111]">Surat Elektronik (Email):</div>
                    <div className="text-[#404040] mt-0.5">{COMPANY_INFO.email} (Umum & Administrasi)</div>
                    <div className="text-[#404040]">{COMPANY_INFO.salesEmail} (Penawaran & Kemitraan)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 border-t border-[#D4D4D4]/60 pt-4">
                  <Clock className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#111111]">Jam Operasional Layanan:</div>
                    <div className="text-[#404040] mt-0.5">{COMPANY_INFO.operatingHours}</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Link */}
              <div className="pt-2 border-t border-[#D4D4D4]">
                <a
                  href={`https://wa.me/6281288997650?text=${encodeURIComponent('Halo PT BerkahJayaGroup, saya ingin berkonsultasi mengenai kebutuhan peternakan.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#111111] hover:bg-[#262626] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat WhatsApp Langsung</span>
                </a>
              </div>
            </div>

            {/* Quick FAQ Dropdown */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#737373] flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                <span>Pertanyaan yang Sering Diajukan (FAQ)</span>
              </h4>
              <div className="border border-[#D4D4D4] divide-y divide-[#D4D4D4]">
                {FAQS.map((faq, idx) => (
                  <div key={idx} className="bg-[#FFFFFF]">
                    <button
                      type="button"
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full p-4 text-left text-xs sm:text-sm font-bold text-[#111111] hover:bg-[#F5F5F5] transition-colors flex items-center justify-between gap-3"
                    >
                      <span>{faq.q}</span>
                      <span className="text-base font-mono">{activeFaq === idx ? '−' : '+'}</span>
                    </button>
                    {activeFaq === idx && (
                      <div className="px-4 pb-4 text-xs text-[#404040] leading-relaxed border-t border-[#F5F5F5]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#D4D4D4] p-6 sm:p-10">
            {isSubmitted ? (
              <div className="space-y-6 py-6 animate-in fade-in duration-200">
                <div className="w-12 h-12 bg-[#111111] text-[#FFFFFF] flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-[#737373] uppercase tracking-wider">
                    NOMOR REFERENSI: {submittedRef}
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111]">
                    Permintaan Penawaran Berhasil Dikirim
                  </h3>
                  <p className="text-sm text-[#404040] leading-relaxed">
                    Terima kasih, <strong className="text-[#111111]">{formData.name}</strong>. Tim representatif PT BerkahJayaGroup akan meninjau rincian kebutuhan Anda dan menghubungi kembali via email (<span className="text-[#111111]">{formData.email}</span>) atau telepon (<span className="text-[#111111]">{formData.phone}</span>) dalam waktu maksimal 1x24 jam kerja.
                  </p>
                </div>

                <div className="p-4 bg-[#F5F5F5] border border-[#D4D4D4] space-y-2 text-xs">
                  <div className="font-bold text-[#111111]">Ringkasan Pengajuan:</div>
                  <div className="text-[#404040]">
                    Kategori: <strong className="text-[#111111]">{formData.category}</strong>
                  </div>
                  <div className="text-[#404040] line-clamp-3">
                    Rincian: "{formData.message}"
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider bg-[#111111] text-[#FFFFFF] hover:bg-[#262626] transition-colors"
                  >
                    <span>Teruskan ke WhatsApp Resmi</span>
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider border border-[#D4D4D4] text-[#111111] hover:bg-[#F5F5F5] transition-colors"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#111111] tracking-tight">
                    Formulir Permintaan Penawaran & Kemitraan
                  </h3>
                  <p className="text-xs text-[#737373] mt-1">
                    Isi formulir di bawah ini dengan lengkap untuk mendapatkan katalog harga resmi dan estimasi jadwal pasokan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
                      Nama Lengkap / Instansi <span className="text-[#111111]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Budi Santoso / CV Agro Mandiri"
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#FFFFFF] border ${
                        errors.name ? 'border-[#111111] ring-1 ring-[#111111]' : 'border-[#D4D4D4]'
                      } text-[#111111] placeholder-[#737373] focus:outline-none focus:border-[#111111] transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-xs text-[#111111] font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
                      Alamat Email Perusahaan / Pribadi <span className="text-[#111111]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@perusahaan.com"
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#FFFFFF] border ${
                        errors.email ? 'border-[#111111] ring-1 ring-[#111111]' : 'border-[#D4D4D4]'
                      } text-[#111111] placeholder-[#737373] focus:outline-none focus:border-[#111111] transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#111111] font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
                      Nomor WhatsApp / Telepon <span className="text-[#111111]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0812-XXXX-XXXX"
                      className={`w-full px-3.5 py-2.5 text-xs bg-[#FFFFFF] border ${
                        errors.phone ? 'border-[#111111] ring-1 ring-[#111111]' : 'border-[#D4D4D4]'
                      } text-[#111111] placeholder-[#737373] focus:outline-none focus:border-[#111111] transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-[#111111] font-medium flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Category */}
                  <div className="space-y-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
                      Kategori Kebutuhan
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FFFFFF] border border-[#D4D4D4] text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                    >
                      {categories.map((c, i) => (
                        <option key={i} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111111]">
                    Rincian Kebutuhan, Estimasi Volume & Alamat Pengiriman <span className="text-[#111111]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan estimasi jumlah ekor/tonase, jadwal penyerahan yang diharapkan, dan spesifikasi khusus jika ada..."
                    className={`w-full px-3.5 py-2.5 text-xs bg-[#FFFFFF] border ${
                      errors.message ? 'border-[#111111] ring-1 ring-[#111111]' : 'border-[#D4D4D4]'
                    } text-[#111111] placeholder-[#737373] focus:outline-none focus:border-[#111111] transition-colors`}
                  />
                  {errors.message && (
                    <p className="text-xs text-[#111111] font-medium flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-[#FFFFFF] bg-[#111111] hover:bg-[#262626] transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pengajuan Permintaan Penawaran</span>
                  </button>
                  <p className="text-[11px] text-[#737373] text-center mt-2">
                    Data Anda dilindungi dan hanya digunakan untuk keperluan verifikasi pengadaan PT BerkahJayaGroup.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
