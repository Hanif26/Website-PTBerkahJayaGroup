export interface BusinessUnit {
  id: string;
  name: string;
  tagline: string;
  description: string;
  capacity: string;
  focusArea: string[];
  image: string;
}

export interface CatalogItem {
  id: string;
  code: string;
  name: string;
  category: 'sapi' | 'unggas' | 'domba-kambing' | 'pakan' | 'kemitraan';
  categoryLabel: string;
  shortDesc: string;
  description: string;
  specs: { label: string; value: string }[];
  availability: 'Tersedia' | 'Pre-Order Musiman' | 'Kemitraan Terbuka';
  minOrder: string;
  unit: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface Advantage {
  number: string;
  title: string;
  description: string;
  proof: string;
}

export const COMPANY_INFO = {
  name: "PT BerkahJayaGroup",
  legalName: "PT Berkah Jaya Group Agribisnis",
  industry: "Peternakan & Agribisnis Terpadu",
  established: "2018",
  tagline: "Keunggulan Peternakan Terpadu, Berkelanjutan, dan Terpercaya",
  heroHeadline: "Pilar Ketahanan Pangan Melalui Agribisnis Peternakan Terintegrasi",
  heroDescription:
    "PT BerkahJayaGroup mengelola ekosistem peternakan modern di Indonesia, mencakup pembibitan sapi, budidaya unggas, peternakan domba dan kambing, formulasi pakan bermutu, serta program kemitraan berkelanjutan dengan peternak lokal.",
  address: "Kawasan Agroindustri Terpadu, Jl. Raya Subang - Kalijati Km. 14, Jawa Barat, Indonesia",
  branchAddress: "Kantor Perwakilan: Sentra Bisnis Agro, Jakarta Selatan 12950",
  email: "kontak@berkahjayagroup.co.id",
  salesEmail: "kemitraan@berkahjayagroup.co.id",
  phone: "+62 21 829 4410",
  whatsapp: "+62 812 8899 7650",
  operatingHours: "Senin – Jumat: 08.00 – 17.00 WIB | Sabtu: 08.00 – 13.00 WIB",
};

export const METRICS = [
  { value: "4", label: "Divisi Usaha Terintegrasi", detail: "Sapi, Unggas, Ruminansia Kecil, Pakan" },
  { value: "15.000+", label: "Kapasitas Ternak Tahunan", detail: "Populasi aktif ternak per siklus" },
  { value: "100%", label: "Protokol Biosekuriti Terstandar", detail: "Karantina & pengawasan veteriner" },
  { value: "120+", label: "Mitra Peternak Binaan", detail: "Jejaring kemitraan plasma terverifikasi" },
];

export const ABOUT_DATA = {
  profile:
    "PT BerkahJayaGroup berdiri dengan komitmen menjadi garda terdepan industri peternakan nasional. Berawal dari sentra pemeliharaan sapi pedaging, kami kini berkembang menjadi holding agribisnis peternakan terpadu yang memadukan teknologi pemeliharaan ramah lingkungan, standar nutrisi pakan presisi, biosekuriti ketat, dan kesejahteraan hewan (animal welfare).",
  vision:
    "Menjadi perusahaan agribisnis peternakan terintegrasi terkemuka di Indonesia yang diakui atas keunggulan kualitas, kepatuhan biosekuriti, dan kontribusi nyata terhadap kemandirian pangan nasional.",
  missions: [
    "Menghasilkan bibit dan produk ternak sehat berkualitas prima melalui seleksi genetik yang bertanggung jawab.",
    "Menerapkan biosekuriti ketat serta prinsip animal welfare pada seluruh fasilitas pemeliharaan.",
    "Mengembangkan formulasi pakan bernutrisi tinggi dan ramah lingkungan dari bahan baku teruji.",
    "Membangun kemitraan mutualistis yang meningkatkan taraf hidup peternak lokal dan memperkuat rantai pasok nasional.",
  ],
  values: [
    {
      title: "Integritas & Keterbukaan",
      description: "Menjunjung transparansi dalam setiap transaksi bisnis, pengujian mutu, dan laporan kemitraan usaha.",
    },
    {
      title: "Biosekuriti & Higienitas",
      description: "Menerapkan standar sanitasi dan karantina ketat untuk menjamin kesehatan hewan dan keamanan pangan konsumen.",
    },
    {
      title: "Kemitraan Berkelanjutan",
      description: "Tumbuh bersama peternak lokal lewat pendampingan teknis, transfer ilmu, dan kepastian serapan pasar.",
    },
    {
      title: "Kesejahteraan Hewan",
      description: "Memastikan lingkungan kandang luas, asupan pakan seimbang, dan penanganan bebas stres sesuai kaidah veteriner.",
    },
  ],
};

export const BUSINESS_UNITS: BusinessUnit[] = [
  {
    id: "sapi",
    name: "Peternakan Sapi Pedaging & Perah",
    tagline: "Penggemukan Sapi & Produksi Susu Segar Berkualitas",
    description:
      "Unit usaha yang berfokus pada penggemukan sapi pedaging (feedlot) varietas unggul seperti Brahman Cross, Limousin, dan Simental, serta pemeliharaan sapi perah Friesian Holstein dengan sistem kandang modern berventilasi optimal.",
    capacity: "Kapasitas kandang 4.500 ekor / siklus",
    focusArea: ["Sapi Bakalan & Penggemukan", "Sapi Siap Potong RPH", "Susu Segar Harian", "Bibit Sapi Indukan"],
    image: "/src/assets/images/cattle_farming_unit_1791787800507.jpg",
  },
  {
    id: "unggas",
    name: "Peternakan Unggas Terpadu",
    tagline: "Budidaya Broiler & Layer dengan Sistem Closed-House",
    description:
      "Pengelolaan ayam pedaging (broiler) dan petelur (layer) berstandar biosekuriti tinggi. Menggunakan teknologi closed-house otomatis untuk kontrol suhu, kelembapan, dan sanitasi berkala guna menjamin rasio konversi pakan (FCR) prima.",
    capacity: "Kapasitas 80.000 ekor / rotasi",
    focusArea: ["Ayam Broiler Karkas & Hidup", "Telur Segar Terpilih", "Day Old Chick (DOC) Unggul", "Manajemen Closed-House"],
    image: "/src/assets/images/poultry_farming_unit_1791787813436.jpg",
  },
  {
    id: "domba-kambing",
    name: "Peternakan Domba & Kambing Unggulan",
    tagline: "Pusat Pembibitan & Penggemukan Ruminansia Kecil",
    description:
      "Fasilitas pembiakan domba Dorper, Texel, Garut, dan kambing Boer maupun Peranakan Etawa. Dikelola dengan sistem panggung bersih untuk kebutuhan pasokan qurban, aqiqah, dan bibit indukan produktif.",
    capacity: "Kapasitas 3.000 ekor / tahun",
    focusArea: ["Domba & Kambing Qurban Terseleksi", "Paket Aqiqah Bergaransi Sehat", "Bibit Pejantan & Betina Induk", "Susu Kambing Segar"],
    image: "/src/assets/images/sheep_goat_farming_unit_1791787825575.jpg",
  },
  {
    id: "pakan",
    name: "Pakan Ternak & Nutrisi Agrikultur",
    tagline: "Formulasi Konsentrat dan Silase Bernutrisi Presisi",
    description:
      "Fasilitas pengolahan konsentrat pakan bernutrisi tinggi dan fermentasi silase hijauan berkualitas tinggi (jagung & rumput odot). Diuji di laboratorium nutrisi internal untuk memastikan rasio protein dan serat kasar yang seimbang.",
    capacity: "Produksi 150 ton / bulan",
    focusArea: ["Konsentrat Penggemukan Ruminansia", "Silase Hijauan Fermentasi", "Mineral & Premix Ternak", "Konsultasi Ransum Pakan"],
    image: "/src/assets/images/feed_production_unit_1791787837678.jpg",
  },
];

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: "cat-sapi-01",
    code: "BKG-BEEF-BX",
    name: "Sapi Potong Brahman Cross (BX)",
    category: "sapi",
    categoryLabel: "Sapi",
    shortDesc: "Sapi pedaging bakalan & siap potong dengan persentase karkas tinggi.",
    description:
      "Sapi Brahman Cross pilihan dengan masa penggemukan teratur 90-120 hari. Bebas penyakit mulut dan kuku (PMK), telah divaksinasi lengkap dengan riwayat medis tercatat.",
    specs: [
      { label: "Kisaran Bobot", value: "450 kg – 650 kg" },
      { label: "Estimasi Karkas", value: "50% – 54%" },
      { label: "Status Kesehatan", value: "SKKH Resmi & Bebas PMK/LSD" },
      { label: "Sistem Pakan", value: "Konsentrat Berimbang & Hijauan Terpilih" },
    ],
    availability: "Tersedia",
    minOrder: "5 Ekor",
    unit: "Ekor / Timbang Hidup",
  },
  {
    id: "cat-sapi-02",
    code: "BKG-BEEF-LIM",
    name: "Sapi Simental & Limousin Super",
    category: "sapi",
    categoryLabel: "Sapi",
    shortDesc: "Koleksi sapi berbobot besar untuk kebutuhan industri daging & qurban premium.",
    description:
      "Sapi pejantan berotot padat hasil persilangan unggul dengan struktur tulang kokoh dan konformasi daging ideal. Cocok untuk kebutuhan hari raya kurban maupun pemotongan komersial bermutu tinggi.",
    specs: [
      { label: "Kisaran Bobot", value: "700 kg – 1.050 kg" },
      { label: "Performa Daging", value: "Serat Halus & Marbling Alami" },
      { label: "Riwayat Perawatan", value: "Pemeriksaan Dokter Hewan Mingguan" },
      { label: "Ketersediaan", value: "Ready Farm & Stok Khusus Qurban" },
    ],
    availability: "Tersedia",
    minOrder: "1 Ekor",
    unit: "Ekor",
  },
  {
    id: "cat-domba-01",
    code: "BKG-SHP-DORPER",
    name: "Domba Silangan Dorper & Texel",
    category: "domba-kambing",
    categoryLabel: "Domba & Kambing",
    shortDesc: "Domba pedaging cepat tumbuh dengan kualitas karkas tebal dan lembut.",
    description:
      "Domba hasil pembiakan selektif dengan pertumbuhan bobot harian tinggi. Cocok untuk program penggemukan mandiri, pasokan restoran aqiqah, maupun stok qurban.",
    specs: [
      { label: "Kisaran Bobot", value: "35 kg – 65 kg" },
      { label: "Tingkat Karkas", value: "48% – 52%" },
      { label: "Usia", value: "8 – 18 Bulan" },
      { label: "Karakter Daging", value: "Rendah Lemak & Minim Bau Prengus" },
    ],
    availability: "Tersedia",
    minOrder: "10 Ekor",
    unit: "Ekor",
  },
  {
    id: "cat-kambing-01",
    code: "BKG-GOAT-PE",
    name: "Kambing Peranakan Etawa (PE) & Jawa Randu",
    category: "domba-kambing",
    categoryLabel: "Domba & Kambing",
    shortDesc: "Kambing dwi-guna penghasil daging prima dan susu segar bernutrisi.",
    description:
      "Bibit dan bakalan kambing PE terpilih dengan postur tegap, telinga menjuntai khas, dan daya tahan lingkungan yang sangat baik untuk iklim tropis Indonesia.",
    specs: [
      { label: "Kisaran Bobot", value: "30 kg – 55 kg" },
      { label: "Tujuan Usaha", value: "Penggemukan Daging / Bibit Pembibitan" },
      { label: "Status Sanitasi", value: "Kandang Panggung Higienis" },
      { label: "Legalitas", value: "Surat Jalan & Sertifikat Sehat Dokter Hewan" },
    ],
    availability: "Tersedia",
    minOrder: "10 Ekor",
    unit: "Ekor",
  },
  {
    id: "cat-unggas-01",
    code: "BKG-PLT-BROILER",
    name: "Ayam Broiler Hidup & Karkas Dingin",
    category: "unggas",
    categoryLabel: "Unggas",
    shortDesc: "Ayam ras pedaging budidaya closed-house bebas residu antibiotik terlarang.",
    description:
      "Ayam broiler panen terjadwal dengan sistem rantai dingin higienis. Memiliki daging kenyal alami, kadar air stabil, dan dipotong sesuai syariat Islam (Sertifikasi Halal).",
    specs: [
      { label: "Rata-rata Bobot", value: "1.4 kg – 2.2 kg / ekor" },
      { label: "FCR (Konversi Pakan)", value: "1.45 – 1.55" },
      { label: "Bentuk Suplai", value: "Ayam Hidup Panen atau Karkas Segar Dingin (Chilled)" },
      { label: "Kapasitas Pasokan", value: "Hingga 5.000 ekor / hari" },
    ],
    availability: "Tersedia",
    minOrder: "500 Ekor / 500 kg",
    unit: "Kg / Ekor",
  },
  {
    id: "cat-unggas-02",
    code: "BKG-PLT-EGGS",
    name: "Telur Ayam Segar Grade A",
    category: "unggas",
    categoryLabel: "Unggas",
    shortDesc: "Telur segar harian berkulit bersih dan kokoh dari ayam layer terpilih.",
    description:
      "Telur konsumsi hasil pemeliharaan ayam petelur dengan pakan kaya omega dan mineral alami. Disortir secara otomatis tanpa pencucian kimiawi untuk menjaga ketahanan kutikula cangkang.",
    specs: [
      { label: "Ukuran / Berat", value: "60 – 65 gram / butir (Rata-rata 16 butir/kg)" },
      { label: "Kuning Telur", value: "Warna Oranye Pekat & Kantung Udara Kecil" },
      { label: "Kemasan", value: "Tray Karton 30 Butir / Peti Kayu 10–15 kg" },
      { label: "Rotasi Panen", value: "Pengiriman Maksimal 24 Jam Pasca Panen" },
    ],
    availability: "Tersedia",
    minOrder: "150 kg (10 Peti)",
    unit: "Kg / Peti",
  },
  {
    id: "cat-pakan-01",
    code: "BKG-FEED-CONC",
    name: "Konsentrat Penggemukan Sapi 'Berkah Pro-14'",
    category: "pakan",
    categoryLabel: "Pakan Ternak",
    shortDesc: "Pakan konsentrat fermentasi tinggi protein untuk percepatan laju pertumbuhan harian.",
    description:
      "Formulasi pakan padat nutrisi dari bungkil kedelai, jagung giling, dedak pilihan, dan premix mineral esensial. Meningkatkan pertambahan bobot harian (ADG) sapi 1.1 – 1.5 kg per hari.",
    specs: [
      { label: "Kandungan Protein Kasar", value: "Minimal 14.5% – 16.0%" },
      { label: "Total Digestible Nutrients (TDN)", value: "70% – 72%" },
      { label: "Kadar Air", value: "Maksimal 12%" },
      { label: "Kemasan", value: "Karung Woven 50 kg" },
    ],
    availability: "Tersedia",
    minOrder: "1 Ton (20 Karung)",
    unit: "Ton / Sak",
  },
  {
    id: "cat-pakan-02",
    code: "BKG-FEED-SILAGE",
    name: "Silase Hijauan Jagung & Odot Fermentasi",
    category: "pakan",
    categoryLabel: "Pakan Ternak",
    shortDesc: "Pakan serat awetan anaerobik untuk cadangan pakan bernutrisi sepanjang tahun.",
    description:
      "Solusi pakan hijauan tahan simpan hingga 6 bulan dengan aroma harum khas fermentasi asam laktat yang sangat disukai ternak ruminansia. Mengurangi ketergantungan ngarit di musim kemarau.",
    specs: [
      { label: "Bahan Baku", value: "Batang & Tongkol Jagung Muda + Rumput Odot" },
      { label: "Kadar Air", value: "55% – 60%" },
      { label: "Kemasan", value: "Plastik Silase Kedap Udara 40 kg & 500 kg Jumbo Bag" },
      { label: "Ketahanan Simpan", value: "6 – 8 Bulan (Kondisi Tertutup Rapat)" },
    ],
    availability: "Tersedia",
    minOrder: "2 Ton",
    unit: "Ton",
  },
  {
    id: "cat-mitra-01",
    code: "BKG-PARTNER-INT",
    name: "Program Kemitraan Peternak Plasma (Inti-Plasma)",
    category: "kemitraan",
    categoryLabel: "Kemitraan Usaha",
    shortDesc: "Skema kemitraan budidaya terintegrasi dengan jaminan suplai bibit, pakan, dan serapan panen.",
    description:
      "Program pendampingan komprehensif bagi peternak individu maupun kelompok ternak. PT BerkahJayaGroup menyediakan bibit (DOC/bakalan), standar pakan, monitoring kesehatan veteriner berkala, serta kontrak pembelian hasil panen yang adil dan transparan.",
    specs: [
      { label: "Komoditas Kemitraan", value: "Ayam Broiler Closed House, Sapi Penggemukan, Domba" },
      { label: "Dukungan Teknis", value: "Pelatihan SOP, Kunjungan Dokter Hewan Rutin, Akses Lab" },
      { label: "Jaminan Pasar", value: "Perjanjian Beli Balik (Offtaker Agreement) Resmi" },
      { label: "Persyaratan Mitra", value: "Lahan / Kandang Sesuai Syarat & Komitmen Standar" },
    ],
    availability: "Kemitraan Terbuka",
    minOrder: "1 Kelompok / Unit Kandang",
    unit: "Kontrak Kemitraan",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Seleksi Genetik & Bibit Unggul",
    subtitle: "Fondasi Kualitas dari Titik Awal",
    description:
      "Setiap bibit sapi, unggas, maupun domba melewati proses kurasi ketat berdasarkan silsilah, struktur anatomi, dan histori kesehatan. Kami hanya menerima bibit berlisensi dengan daya tahan tinggi terhadap iklim tropis.",
    highlights: ["Sertifikat kesehatan resmi", "Uji adaptasi lingkungan", "Pencatatan silsilah indukan"],
  },
  {
    number: "02",
    title: "Formulasi Nutrisi & Pakan Terstandar",
    subtitle: "Ransum Presisi untuk Pertumbuhan Sehat",
    description:
      "Kebutuhan nutrisi diatur secara presisi berdasarkan usia dan fase pertumbuhan ternak. Formulasi konsentrat dan hijauan diracik dari bahan alami tanpa menggunakan pemacu hormon sintetis berbahaya.",
    highlights: ["Uji kadar nutrisi rutin di lab", "Kombinasi hijauan segar & konsentrat", "Bebas bahan kimia berbahaya"],
  },
  {
    number: "03",
    title: "Pengawasan Biosekuriti & Kesehatan Hewan",
    subtitle: "Perlindungan Menyeluruh Terhadap Patogen",
    description:
      "Penerapan sanitasi gerbang masuk, desinfeksi kendaraan, isolasi karantina, dan jadwal vaksinasi rutin dipantau langsung oleh dokter hewan berlisensi. Prinsip animal welfare dijaga agar ternak bebas stres.",
    highlights: ["Zona biosekuriti berlapis", "Kunjungan medik veteriner berkala", "Manajemen limbah ramah lingkungan"],
  },
  {
    number: "04",
    title: "Rantai Pasok & Distribusi Tepat Waktu",
    subtitle: "Menjaga Kesegaran Hingga ke Tangan Konsumen",
    description:
      "Distribusi ternak hidup maupun produk hewani dilakukan menggunakan armada berizin dengan ventilasi khusus atau kendaraan berpendingin (cold chain) untuk menjaga higienitas dan mutu hingga titik serah terima.",
    highlights: ["Armada logistik berstandar", "Pemantauan rute dan waktu kirim", "Proses pemotongan halal & higienis"],
  },
];

export const ADVANTAGES: Advantage[] = [
  {
    number: "01",
    title: "Biosekuriti Terakreditasi & Pengawasan Medik",
    description:
      "Fasilitas kandang dan laboratorium didukung tim paramedis veteriner berdedikasi yang melakukan pengawasan kesehatan dan karantina setiap hari.",
    proof: "Terdokumentasi dalam kartu rekam medik ternak resmi dan uji laboratorium berkala.",
  },
  {
    number: "02",
    title: "Ekosistem Terintegrasi Hulu ke Hilir",
    description:
      "Mulai dari pembibitan, produksi pakan mandiri, penggemukan, hingga penanganan pasca panen dikelola dalam satu manajemen yang efisien dan terkontrol.",
    proof: "Menekan risiko fluktuasi pasokan dan menjaga kestabilan mutu di setiap musim.",
  },
  {
    number: "03",
    title: "Kemitraan Inklusif & Komitmen Peternak Lokal",
    description:
      "Bukan sekadar peternakan korporat, kami membina lebih dari 120 peternak plasma dengan sistem bagi hasil yang adil dan pendampingan lapangan berkelanjutan.",
    proof: "Telah bermitra aktif di 4 kabupaten di Jawa Barat dengan jaminan serapan pasar.",
  },
  {
    number: "04",
    title: "Higienitas, Ketertelusuran & Sertifikasi Halal",
    description:
      "Seluruh alur penanganan hewan dan pemotongan mengikuti syariat Islam serta kaidah sanitasi pangan hewani nasional yang dapat ditelusuri riwayatnya.",
    proof: "Setiap batch ternak memiliki nomor ketertelusuran asal kandang dan tanggal panen.",
  },
];

export const FAQS = [
  {
    q: "Bagaimana cara melakukan pemesanan ternak sapi atau unggas untuk kebutuhan B2B?",
    a: "Anda dapat menghubungi tim pemasaran kami melalui formulir kontak di website ini atau melalui WhatsApp resmi. Kami akan menyusun penawaran resmi, spesifikasi bobot yang tersedia, jadwal penimbangan, dan jadwal pengiriman.",
  },
  {
    q: "Apakah PT BerkahJayaGroup melayani pembelian eceran atau hanya partai besar?",
    a: "Untuk kebutuhan sapi dan domba qurban/aqiqah, kami melayani pemesanan per ekor. Untuk pasokan ayam broiler, telur, dan pakan konsentrat, kami menetapkan batas minimum order sesuai kategori yang tertera pada katalog produk.",
  },
  {
    q: "Bagaimana mekanisme program kemitraan plasma untuk peternak lokal?",
    a: "Calon mitra dapat mendaftar dengan melampirkan informasi lokasi lahan dan kapasitas kandang yang dimiliki. Tim teknis kami akan melakukan survei kelayakan biosekuriti sebelum penandatanganan kontrak kerja sama inti-plasma.",
  },
  {
    q: "Apakah hewan ternak dilengkapi dokumen kesehatan resmi?",
    a: "Ya. Seluruh ternak yang dikirimkan selalu disertai Surat Keterangan Kesehatan Hewan (SKKH) dari dinas peternakan setempat, sertifikat vaksinasi, dan surat jalan pengangkutan resmi.",
  },
];
