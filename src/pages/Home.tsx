import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Clock3,
  Droplets,
  Facebook,
  Gift,
  HandHeart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Palette,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Sun,
  Umbrella,
  Globe,
  X,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/6285800288414?text=Halo%20Batika%2C%20saya%20tertarik%20dengan%20Payung%20Batik%20Handmade%20Jumbo%20Anti%20UV.%20Boleh%20info%20lebih%20lanjut%3F";

const variantWhatsappUrl = (name: string, diameter: string, price: string) =>
  `https://wa.me/6285800288414?text=${encodeURIComponent(
    `Halo Batika, saya tertarik dengan ${name} Batika diameter ${diameter} dengan harga ${price}. Mohon info motif yang ready stock atau estimasi pre-order.`,
  )}`;

const motifWhatsappUrl = (name: string, fileName: string) =>
  `https://wa.me/6285800288414?text=${encodeURIComponent(
    `Halo Batika, saya tertarik memesan Payung Batik motif "${name}" (${fileName}). Mohon info ketersediaan ready stock dan pilihan ukurannya.`,
  )}`;

const LOGO = "/payung/batika-logo.webp";

export interface BestSellerMotif {
  id: string;
  name: string;
  fileName: string;
  src: string;
  number: string;
  tone: string;
  description: string;
}

const bestSellerMotifs: BestSellerMotif[] = [
  {
    id: "sekarjagad-grudo",
    name: "Sekarjagad Grudo",
    fileName: "Sekarjagad Grudo.jpeg",
    src: "/payung/Sekarjagad Grudo.jpeg",
    number: "01",
    tone: "Indigo, Soga & Putih",
    description: "Harmoni sayap Garuda (Grudo) berwibawa berpadu ceplok dan parang pada kanopi biru indigo khas Kraton.",
  },
  {
    id: "tiga-negeri-peksi",
    name: "Tiga Negeri Peksi",
    fileName: "Tiga Negeri Peksi.jpeg",
    src: "/payung/Tiga Negeri Peksi.jpeg",
    number: "02",
    tone: "Merah Soga, Biru & Pink",
    description: "Akulturasi klasik tiga pesona dengan dasar merah soga, burung peksi biru-pink, dan ornamen bunga mekar.",
  },
  {
    id: "sekar-jagad",
    name: "Sekar Jagad",
    fileName: "Sekar Jagad.jpeg",
    src: "/payung/Sekar Jagad.jpeg",
    number: "03",
    tone: "Soga Hitam & Cokelat Klasik",
    description: "Keindahan ragam motif nusantara dalam petak truntum, parang, dan ceplok klasik penuh filosofi luhur.",
  },
  {
    id: "titari-larasati",
    name: "Titari Larasati",
    fileName: "Titari Larasati.jpeg",
    src: "/payung/Titari Larasati.jpeg",
    number: "04",
    tone: "Lilac Lembut & Marun",
    description: "Nuansa lilac pastel anggun berhias kupu-kupu merah marun serta motif bunga yang memancar indah.",
  },
  {
    id: "peksi-tiga-negeri",
    name: "Peksi Tiga Negeri",
    fileName: "Peksi Tiga Negeri.jpeg",
    src: "/payung/Peksi Tiga Negeri.jpeg",
    number: "05",
    tone: "Biru Pekat & Toska",
    description: "Gagahnya burung peksi merak biru dan aksen flora toska di atas kanopi biru tua yang megah berkarakter.",
  },
];

const gallery = [
  { src: "/payung/Sekarjagad Grudo.jpeg", label: "Sekarjagad Grudo", tone: "Indigo, Soga & Putih (Best Seller #01)", fileName: "Sekarjagad Grudo.jpeg" },
  { src: "/payung/Tiga Negeri Peksi.jpeg", label: "Tiga Negeri Peksi", tone: "Merah Soga & Biru (Best Seller #02)", fileName: "Tiga Negeri Peksi.jpeg" },
  { src: "/payung/Sekar Jagad.jpeg", label: "Sekar Jagad", tone: "Soga Hitam Tradisional (Best Seller #03)", fileName: "Sekar Jagad.jpeg" },
  { src: "/payung/Titari Larasati.jpeg", label: "Titari Larasati", tone: "Lilac Lembut & Marun (Best Seller #04)", fileName: "Titari Larasati.jpeg" },
  { src: "/payung/Peksi Tiga Negeri.jpeg", label: "Peksi Tiga Negeri", tone: "Biru Pekat & Toska (Best Seller #05)", fileName: "Peksi Tiga Negeri.jpeg" },
  { src: "/payung/payung-02.webp", label: "Sekar Hijau", tone: "Hijau & Perunggu", fileName: "payung-02.webp" },
];

const navItems = [
  { label: "Produk", href: "#produk", id: "nav-produk-link" },
  { label: "Cara Pesan", href: "#preorder", id: "nav-cara-pesan-link" },
  { label: "Cerita Kami", href: "#cerita", id: "nav-cerita-link" },
  { label: "Kontak", href: "#kontak", id: "nav-kontak-link" },
];

const heroFeatures = [
  { label: "Batik tulis asli", icon: Sparkles, id: "batik-tulis" },
  { label: "Anti air & anti UV", icon: Sun, id: "anti-air-uv" },
  { label: "Rangka kokoh angin kencang", icon: ShieldCheck, id: "rangka-kokoh" },
  { label: "4 pilihan ukuran", icon: Ruler, id: "empat-ukuran" },
];

const productVariants = [
  { id: "reguler-lipat", number: "01", name: "Reguler Lipat", diameter: "±98 cm", price: "Rp400.000–Rp450.000", description: "Ringkas untuk dibawa sehari-hari dengan bukaan yang tetap nyaman untuk satu orang." },
  { id: "jumbo-lipat", number: "02", name: "Jumbo Lipat", diameter: "±105 cm", price: "Rp500.000–Rp550.000", description: "Lebih lega namun tetap praktis dilipat—seimbang antara perlindungan dan portabilitas." },
  { id: "payung-panjang", number: "03", name: "Payung Panjang", diameter: "±115 cm", price: "Rp550.000–Rp600.000", description: "Siluet klasik dengan bentang lebar untuk tampilan yang anggun dan perlindungan ekstra." },
  { id: "payung-golf", number: "04", name: "Payung Golf", diameter: "±120 cm", price: "Rp700.000", description: "Ukuran paling luas untuk kebutuhan outdoor, hadiah premium, atau perlindungan maksimal." },
];

const faqs = [
  {
    question: "Berapa lama proses pengerjaan payung?",
    answer:
      "Jika motif atau ukuran pilihan sedang tidak ready stock, estimasi proses pre-order adalah sekitar 2 minggu. Tim Batika akan mengonfirmasi ketersediaan dan estimasi terbaru melalui WhatsApp sebelum pesanan diproses.",
  },
  {
    question: "Apakah bisa memilih atau custom motif?",
    answer:
      "Pilihan motif mengikuti kain batik dan batch yang tersedia. Untuk permintaan motif khusus, silakan konsultasikan melalui WhatsApp agar tim Batika dapat mengecek kemungkinan dan antrean pengerjaannya.",
  },
  {
    question: "Bagaimana cara pembayarannya?",
    answer:
      "Metode dan tahapan pembayaran akan diinformasikan langsung oleh admin Batika melalui WhatsApp agar sesuai dengan pesanan dan batch pre-order Anda.",
  },
  {
    question: "Apakah bisa COD atau dikirim ke luar kota?",
    answer:
      "Pengiriman luar kota dapat dikonsultasikan dengan tim Batika. Untuk ketersediaan COD dan biaya kirim ke alamat Anda, silakan konfirmasi langsung melalui WhatsApp.",
  },
  {
    question: "Apakah motif setiap payung persis sama?",
    answer:
      "Karena memakai kain batik dan dikerjakan secara handmade, penempatan detail motif dapat berbeda pada setiap payung. Perbedaan kecil ini membuat setiap karya terasa lebih personal.",
  },
];

interface CustomerTestimonial {
  id: string;
  name: string;
  location: string;
  flag: string;
  category: "international" | "domestic";
  avatarInitials: string;
  avatarBg: string;
  headline: string;
  quote: string;
  tag: string;
  verifiedLabel: string;
  contextNote: string;
}

const customerTestimonials: CustomerTestimonial[] = [
  {
    id: "novi-booij",
    name: "Cs Novi Booij",
    location: "Belanda",
    flag: "🇳🇱",
    category: "international",
    avatarInitials: "NB",
    avatarBg: "#2b4c3f",
    headline: "Membawa kehangatan Yogyakarta ke Belanda lewat payung batik.",
    quote:
      "Hari ini aku membawa sedikit kehangatan Yogyakarta ke Belanda — lewat payung batik indah buatan kalian. Payung ini bukan hanya pelindung dari hujan, tetapi juga membawa cerita: tentang tradisi yang dijaga agar tidak punah, tentang tangan-tangan terampil para perempuan, ibu-ibu, dan para mbah yang berkarya dengan penuh cinta. Foto ini adalah Guusje, model kecilku di sini...",
    tag: "Tradisi & Nilai Budaya",
    verifiedLabel: "Verified Buyer · Belanda",
    contextNote: "Dipakai langsung di Belanda sebagai simbol kebanggaan kriya batik nusantara.",
  },
  {
    id: "maureen",
    name: "Cs Maureen",
    location: "Kanada",
    flag: "🇨🇦",
    category: "international",
    avatarInitials: "MR",
    avatarBg: "#8c271e",
    headline: "Payung mendarat di Kanada, langsung dipakai saat cuaca gerimis!",
    quote:
      "Akhirnya payung yg aq pesan udah nyampe ke Canada 😋🥰 Keren lohhh, suka banget 😍 Sukses selalu yahhh 🙏",
    tag: "Koleksi Internasional",
    verifiedLabel: "Verified Buyer · Kanada",
    contextNote: "Diterima dalam kondisi prima dan langsung menemani jalan kaki di Kanada.",
  },
  {
    id: "keke",
    name: "Cs Keke",
    location: "Qatar",
    flag: "🇶🇦",
    category: "international",
    avatarInitials: "KK",
    avatarBg: "#5c2034",
    headline: "Tiba selamat di Qatar dan tampil di booth acara sekolah Indonesia.",
    quote:
      "Halo, payung batik, lanyard dan card holder sudah tiba dg selamat di Qatar. Hari ini sudah dipakai untuk acara di sekolah. Terima kasih, payungnya cantik 🤩❤️",
    tag: "Acara Budaya di Qatar",
    verifiedLabel: "Verified Buyer · Qatar",
    contextNote: "Menghias stan budaya Indonesia di Qatar dan memikat perhatian pengunjung.",
  },
  {
    id: "ara-fani",
    name: "Cs Ara Fani",
    location: "Bandung & Australia",
    flag: "🇦🇺",
    category: "international",
    avatarInitials: "AF",
    avatarBg: "#3a506b",
    headline: "Pelayanan 10/10 dan repeat order titipan penerbangan ke Australia.",
    quote:
      "Pelayanan batika 10/10 banget bangeeett!!! Kemaren tante aku ngasih payung-payung nya buat temen-temen nya dan pada sukaa wkwk. Jadi ini yg belom dapet pada mau beli juga, dia mau nitip temen nya yg besok malem flight ke aussie. Bisa Paxel sehari lg ga ya kak kayak kmrn? Tapi kali ini ke Bandungg.",
    tag: "Pelayanan 10/10 & Repeat Order",
    verifiedLabel: "Repeat Buyer · Oleh-oleh Aussie",
    contextNote: "Disukai teman-teman hingga pesan kilat untuk dibawa terbang ke Australia.",
  },
  {
    id: "silmi-binta",
    name: "Cs Silmi Binta",
    location: "Yordania",
    flag: "🇯🇴",
    category: "international",
    avatarInitials: "SB",
    avatarBg: "#40534c",
    headline: "Sampai selamat ke Jordan, produk bagus & sebanding dengan harga.",
    quote:
      "Assalamualaikum. Tasnya/paket sudah sampai dengan selamat ke Jordan kak. Terimakasih banyak atas pelayanan baiknya 😊 Produknya bagus, sebanding dengan harga. Recommended to buy. Sukses terus untuk Batika kak ☺️",
    tag: "Recommended to Buy",
    verifiedLabel: "Verified Buyer · Yordania",
    contextNote: "Pengiriman antarbenua tiba dalam kondisi rapi dengan kemasan yang aman.",
  },
  {
    id: "nani-hassan",
    name: "Cs Nani Hassan",
    location: "Indonesia",
    flag: "🇮🇩",
    category: "domestic",
    avatarInitials: "NH",
    avatarBg: "#6b4f3b",
    headline: "Kagum dengan kemasan Air Column Bags, payung cantik tanpa masalah.",
    quote:
      "Payungnya cantik banget, semuanya gak ada masalah. Paketnya juga proper banget, baru pertama kali ini saya beli dari seller Indonesia dan kemasannya pakai air column bags. Terima kasih banyak Mas, sukses terus buat usahanya yaaak... semoga payung batika bisa mendunia, amin 🙏",
    tag: "Proteksi Air Column Bags",
    verifiedLabel: "Verified Buyer · Kemasan Proper",
    contextNote: "Perlindungan maksimal menjaga konstruksi payung tetap kokoh dan mulus.",
  },
  {
    id: "maya-noorita",
    name: "Bunda Maya Noorita",
    location: "Indonesia",
    flag: "🇮🇩",
    category: "domestic",
    avatarInitials: "MN",
    avatarBg: "#8d5b4c",
    headline: "One set busana & payung sampai, motifnya cakeeep banget!",
    quote:
      "One set dan celana cumi2 nya juga sudah sampai, terima kasih banyak 🙏🙏 Payung nya sudah sampai, cakeeeppp 😍😍 terima kasih, Batika 🥰",
    tag: "Koleksi Busana & Payung",
    verifiedLabel: "Verified Buyer · Koleksi Lengkap",
    contextNote: "Sentuhan motif batik tulis yang harmonis untuk dikenakan bersama busana.",
  },
  {
    id: "alya-dean-putri",
    name: "Cs Alya Dean Putri",
    location: "Indonesia",
    flag: "🇮🇩",
    category: "domestic",
    avatarInitials: "AD",
    avatarBg: "#8a4f7d",
    headline: "Payung sampai dengan cantik, sangat sesuai dengan ekspektasi.",
    quote:
      "Halo kak payungnya udah sampe, cantik bgt sesuai ekspektasiku hehe semoga lancar terus orderannya yaa.",
    tag: "Sesuai Ekspektasi",
    verifiedLabel: "Verified Buyer · Motif Cerah",
    contextNote: "Kualitas kain batik tulis dan ketelitian jahitan yang memuaskan.",
  },
  {
    id: "hildanya-fitra",
    name: "Bunda Hildanya Fitranti",
    location: "Indonesia",
    flag: "🇮🇩",
    category: "domestic",
    avatarInitials: "HF",
    avatarBg: "#4e6e58",
    headline: "Paket sampai di rumah dengan selamat, siap repeat order lagi.",
    quote:
      "Alhamdulillah paket payung sdh sampai rumah. Payungnya cantik sekali... ❤️. Next time order lg insyaAllah.., terima kasih.. 🙏",
    tag: "Pelanggan Setia",
    verifiedLabel: "Verified Buyer · Siap Repeat Order",
    contextNote: "Ulasan penuh kehangatan dari pelanggan setia yang siap memesan kembali.",
  },
];

function useRevealOnScroll() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function BatikPattern({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`batik-pattern ${className}`} />;
}

function Eyebrow({ children, testId }: { children: ReactNode; testId: string }) {
  return (
    <p className="eyebrow" data-testid={testId}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

function WhatsAppCta({
  children,
  testId,
  kind = "primary",
  href = WHATSAPP_URL,
}: {
  children: ReactNode;
  testId: string;
  kind?: "primary" | "light" | "outline";
  href?: string;
}) {
  return (
    <a
      className={`whatsapp-cta whatsapp-cta-${kind}`}
      href={href}
      target="_blank"
      rel="noreferrer"
      data-testid={testId}
    >
      <MessageCircle size={19} strokeWidth={2.1} aria-hidden="true" />
      <span>{children}</span>
      <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMotifIndex, setActiveMotifIndex] = useState(0);
  const [testimonialFilter, setTestimonialFilter] = useState<"all" | "international" | "domestic">("all");
  const activeMotif = bestSellerMotifs[activeMotifIndex];

  const nextMotif = () => {
    setActiveMotifIndex((prev) => (prev + 1) % bestSellerMotifs.length);
  };

  const prevMotif = () => {
    setActiveMotifIndex((prev) => (prev - 1 + bestSellerMotifs.length) % bestSellerMotifs.length);
  };

  const filteredTestimonials = customerTestimonials.filter((item) => {
    if (testimonialFilter === "all") return true;
    return item.category === testimonialFilter;
  });

  useRevealOnScroll();

  return (
    <main className="umbrella-site">
      <header className="topbar" data-testid="navbar">
        <div className="topbar-inner">
          <a href="#beranda" className="brand-link" data-testid="navbar-logo-link" aria-label="Batika, kembali ke beranda">
            <img src={LOGO} alt="Batika" data-testid="navbar-logo-image" />
          </a>
          <nav className="desktop-menu" aria-label="Navigasi utama" data-testid="desktop-navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} data-testid={item.id}>{item.label}</a>
            ))}
          </nav>
          <WhatsAppCta testId="navbar-whatsapp-button">Pesan Sekarang</WhatsAppCta>
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            data-testid="mobile-menu-button"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-menu-panel" aria-label="Navigasi mobile" data-testid="mobile-navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} data-testid={`mobile-${item.id}`}>
                <span>{item.label}</span><ArrowRight size={16} />
              </a>
            ))}
            <WhatsAppCta testId="mobile-navbar-whatsapp-button">Pesan via WhatsApp</WhatsAppCta>
          </nav>
        )}
      </header>

      <section id="beranda" className="umbrella-hero" data-testid="hero-section">
        <BatikPattern className="hero-pattern-one" />
        <div className="hero-content" data-reveal>
          <Eyebrow testId="hero-eyebrow">Kriya Batik Yogyakarta · Gerakan Pembatik Muda</Eyebrow>
          <h1 data-testid="hero-headline">
            Payung Batik Tulis Eksklusif,
            <em> Gerakan Regenerasi Pembatik Muda</em>
          </h1>
          <p className="hero-subheadline" data-testid="hero-subheadline">
            Perlindungan maksimal anti air &amp; anti UV yang nyaman dipakai saat hujan maupun panas terik. Dibalut rangka kokoh untuk angin kencang, setiap kanopi ditulis tangan langsung oleh generasi penerus pelestari batik nusantara.
          </p>
          <div className="hero-badges" data-testid="hero-feature-badges">
            {heroFeatures.map(({ label, icon: Icon, id }) => (
              <span key={id} data-testid={`hero-badge-${id}`}>
                <Icon size={14} aria-hidden="true" /> {label}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <WhatsAppCta
              testId="hero-whatsapp-button"
              href={motifWhatsappUrl(activeMotif.name, activeMotif.fileName)}
            >
              Pesan Motif {activeMotif.name} via WhatsApp
            </WhatsAppCta>
            <a href="#produk" className="secondary-link" data-testid="hero-detail-link">
              Lihat detail produk <ArrowRight size={16} />
            </a>
          </div>
          <p className="hero-note" data-testid="hero-preorder-note">
            <Clock3 size={15} aria-hidden="true" /> Ready stock tergantung motif · PO ± 2 minggu
          </p>
        </div>
        <div className="hero-product" data-reveal data-testid="hero-product-visual">
          <div className="hero-product-top">
            <span className="hero-bestseller-badge" data-testid="hero-bestseller-badge">
              <Sparkles size={13} /> 5 Motif Best Seller
            </span>
            <span className="hero-edition" data-testid="hero-edition-label">
              {activeMotif.number}/05 · {activeMotif.name}
            </span>
          </div>

          <div className="hero-image-stage">
            <div className="hero-orbit" aria-hidden="true" />
            <button
              type="button"
              className="hero-nav-arrow hero-nav-prev"
              onClick={prevMotif}
              aria-label="Motif sebelumnya"
              data-testid="hero-nav-prev"
            >
              <ChevronLeft size={20} />
            </button>
            <img
              key={activeMotif.id}
              src={activeMotif.src}
              alt={`Payung Batik Tulis Motif ${activeMotif.name} (${activeMotif.fileName})`}
              fetchPriority="high"
              data-testid="hero-product-image"
              className="hero-umbrella-img"
              referrerPolicy="no-referrer"
            />
            <button
              type="button"
              className="hero-nav-arrow hero-nav-next"
              onClick={nextMotif}
              aria-label="Motif berikutnya"
              data-testid="hero-nav-next"
            >
              <ChevronRight size={20} />
            </button>
            <div className="hero-size-note" data-testid="hero-size-note">
              <strong>4</strong><span>pilihan<br />ukuran</span>
            </div>
          </div>

          <div className="hero-motif-card" data-testid="hero-active-motif-card">
            <div className="hero-motif-card-header">
              <div>
                <div className="hero-motif-title-row">
                  <h3 className="hero-motif-title" data-testid="hero-active-motif-name">
                    {activeMotif.name}
                  </h3>
                  <span className="hero-filename-pill" data-testid="hero-active-motif-file">
                    {activeMotif.fileName}
                  </span>
                </div>
                <p className="hero-motif-description">{activeMotif.description}</p>
              </div>
              <span className="hero-motif-tone-badge">{activeMotif.tone}</span>
            </div>

            <div
              className="hero-motif-selector"
              role="tablist"
              aria-label="5 Motif Best Seller"
              data-testid="hero-motif-selector"
            >
              {bestSellerMotifs.map((motif, index) => {
                const isActive = index === activeMotifIndex;
                return (
                  <button
                    key={motif.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`hero-motif-thumb ${isActive ? "active" : ""}`}
                    onClick={() => setActiveMotifIndex(index)}
                    data-testid={`hero-motif-thumbnail-${motif.id}`}
                  >
                    <div className="hero-thumb-img-wrapper">
                      <img
                        src={motif.src}
                        alt={motif.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      {isActive && <span className="hero-thumb-active-dot" />}
                    </div>
                    <span className="hero-thumb-name">{motif.name}</span>
                    <span className="hero-thumb-filename">{motif.fileName}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="trust-ribbon" aria-label="Keunggulan utama" data-testid="trust-ribbon">
        <span data-testid="trust-ribbon-handmade">Handmade Yogyakarta</span>
        <i aria-hidden="true">✦</i>
        <span data-testid="trust-ribbon-waterproof">Waterproof Premium</span>
        <i aria-hidden="true">✦</i>
        <span data-testid="trust-ribbon-uv">Perlindungan Anti UV</span>
        <i aria-hidden="true">✦</i>
        <span data-testid="trust-ribbon-preorder">Ready Stock & PO ± 2 Minggu</span>
      </section>

      <section className="problem-section section-shell" data-testid="problem-solution-section">
        <div className="problem-heading" data-reveal>
          <Eyebrow testId="problem-eyebrow">Lebih dari sekadar pelindung cuaca</Eyebrow>
          <h2 data-testid="problem-heading">Payung biasa melindungi.<br /><em>Batika bercerita.</em></h2>
          <p data-testid="problem-description">Tiga detail yang membuat payung ini layak menemani lebih banyak perjalanan.</p>
        </div>
        <div className="solution-grid">
          <article data-reveal className="solution-card" data-testid="solution-card-waterproof">
            <span className="solution-number" data-testid="solution-number-waterproof">01</span>
            <Droplets size={27} aria-hidden="true" />
            <p className="problem-copy" data-testid="problem-copy-waterproof">Payung biasa mudah bocor saat hujan deras.</p>
            <h3 data-testid="solution-title-waterproof">Waterproof premium</h3>
            <p data-testid="solution-copy-waterproof">Kain pilihan membantu air meluncur turun, menjaga Anda tetap nyaman saat hujan datang.</p>
          </article>
          <article data-reveal className="solution-card featured" data-testid="solution-card-uv">
            <span className="solution-number" data-testid="solution-number-uv">02</span>
            <ShieldCheck size={27} aria-hidden="true" />
            <p className="problem-copy" data-testid="problem-copy-uv">Panas siang membuat perjalanan kurang nyaman.</p>
            <h3 data-testid="solution-title-uv">Lapisan anti UV</h3>
            <p data-testid="solution-copy-uv">Memberi perlindungan tambahan dari paparan sinar matahari dalam aktivitas harian.</p>
          </article>
          <article data-reveal className="solution-card" data-testid="solution-card-pattern">
            <span className="solution-number" data-testid="solution-number-pattern">03</span>
            <Palette size={27} aria-hidden="true" />
            <p className="problem-copy" data-testid="problem-copy-pattern">Payung pasaran mudah terlihat sama.</p>
            <h3 data-testid="solution-title-pattern">Motif penuh karakter</h3>
            <p data-testid="solution-copy-pattern">Ragam batik yang ekspresif membuat payung Anda terasa personal dan berkelas.</p>
          </article>
        </div>
      </section>

      <section className="variant-section section-shell" data-testid="product-variant-section">
        <div className="variant-header" data-reveal>
          <div>
            <Eyebrow testId="variant-eyebrow">Pilih sesuai kebutuhan Anda</Eyebrow>
            <h2 data-testid="variant-heading">Empat Ukuran Payung Batika</h2>
          </div>
          <p data-testid="variant-description">Ready stock mengikuti ketersediaan motif. Jika varian pilihan Anda habis, pesanan dapat masuk antrean PO sekitar 2 minggu.</p>
        </div>
        <div className="variant-grid" data-testid="product-variant-grid">
          {productVariants.map((variant) => (
            <article className="variant-card" key={variant.id} data-reveal data-testid={`variant-card-${variant.id}`}>
              <div className="variant-card-top">
                <span data-testid={`variant-number-${variant.id}`}>{variant.number}</span>
                <Umbrella size={21} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 data-testid={`variant-name-${variant.id}`}>{variant.name}</h3>
              <div className="variant-diameter" data-testid={`variant-diameter-${variant.id}`}><Ruler size={15} /> Diameter {variant.diameter}</div>
              <strong className="variant-price" data-testid={`variant-price-${variant.id}`}>{variant.price}</strong>
              <small className="variant-bulk-note" data-testid={`variant-bulk-note-${variant.id}`}>Tersedia harga khusus untuk pemesanan partai besar</small>
              <p data-testid={`variant-description-${variant.id}`}>{variant.description}</p>
              <span className="variant-stock" data-testid={`variant-stock-${variant.id}`}><CircleCheck size={13} /> Ready stock motif tertentu · PO ±2 minggu</span>
              <WhatsAppCta testId={`variant-whatsapp-button-${variant.id}`} kind="outline" href={variantWhatsappUrl(variant.name, variant.diameter, variant.price)}>
                Tanya Varian Ini
              </WhatsAppCta>
            </article>
          ))}
        </div>
      </section>

      <section id="produk" className="spec-section" data-testid="product-specification-section">
        <BatikPattern className="spec-pattern" />
        <div className="section-shell spec-inner">
          <div className="spec-gallery" data-reveal>
            <div className="spec-main-image">
              <img src="/payung/payung-02.webp" alt="Payung batik jumbo warna hijau dengan motif burung dan bunga" loading="lazy" data-testid="spec-main-image" />
              <span data-testid="spec-image-caption">Detail motif · Sekar Hijau</span>
            </div>
            <div className="spec-mini-image">
              <img src="/payung/payung-05.webp" alt="Payung batik jumbo motif maroon" loading="lazy" data-testid="spec-secondary-image" />
            </div>
          </div>
          <div className="spec-copy" data-reveal>
            <Eyebrow testId="spec-eyebrow">Detail yang dibuat untuk diandalkan</Eyebrow>
            <h2 data-testid="spec-heading">Lima Fitur dalam Setiap Karya</h2>
            <p data-testid="spec-description">Perpaduan proses batik tradisional dan kebutuhan perlindungan masa kini.</p>
            <dl className="spec-list" data-testid="spec-list">
              <div data-testid="feature-batik-tulis"><dt><Palette size={18} /> Batik tulis</dt><dd>Motif dikerjakan dengan teknik batik tulis yang kaya karakter.</dd></div>
              <div data-testid="feature-anti-uv"><dt><Sun size={18} /> Anti UV</dt><dd>Memberi perlindungan tambahan dari paparan sinar matahari.</dd></div>
              <div data-testid="feature-anti-air"><dt><Droplets size={18} /> Anti air</dt><dd>Material tahan air untuk menemani aktivitas saat hujan.</dd></div>
              <div data-testid="feature-rangka-kokoh"><dt><ShieldCheck size={18} /> Rangka kokoh</dt><dd>Konstruksi kokoh yang stabil dan andal saat menghadapi angin kencang.</dd></div>
              <div data-testid="feature-tidak-luntur"><dt><BadgeCheck size={18} /> Tidak luntur</dt><dd>Warna batik diproses agar tetap indah dan tidak mudah luntur.</dd></div>
            </dl>
            <WhatsAppCta testId="spec-whatsapp-button">Tanyakan Ketersediaan Motif</WhatsAppCta>
          </div>
        </div>
      </section>

      <section className="gallery-section section-shell" data-testid="gallery-section">
        <div className="gallery-heading" data-reveal>
          <div>
            <Eyebrow testId="gallery-eyebrow">Ragam motif</Eyebrow>
            <h2 data-testid="gallery-heading">Satu bentuk, banyak cerita.</h2>
          </div>
          <p data-testid="gallery-description">Motif tersedia mengikuti pilihan kain dan batch produksi. Tanyakan varian terbaru kepada admin.</p>
        </div>
        <div className="gallery-grid" data-testid="gallery-grid">
          {gallery.map((item, index) => (
            <figure key={item.src} className={`gallery-item gallery-item-${index + 1}`} data-reveal data-testid={`gallery-item-${index + 1}`}>
              <img src={item.src} alt={`Payung Batika motif ${item.label} dengan nuansa ${item.tone}`} loading="lazy" data-testid={`gallery-image-${index + 1}`} />
              <figcaption data-testid={`gallery-caption-${index + 1}`}>
                <span>{item.label}</span><small>{item.tone}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="preorder" className="preorder-section" data-testid="preorder-section">
        <div className="section-shell preorder-inner">
          <div className="preorder-intro" data-reveal>
            <span className="preorder-badge" data-testid="preorder-badge"><Clock3 size={16} /> Ready Stock & Pre-Order</span>
            <Eyebrow testId="preorder-eyebrow">Sistem Pemesanan yang Transparan</Eyebrow>
            <h2 data-testid="preorder-heading">Pilih motif ready,<br />atau kami buatkan.</h2>
            <p data-testid="preorder-description">Ready stock tersedia tergantung motif. Jika motif atau ukuran pilihan Anda sedang habis, payung akan masuk antrean pre-order dan dikerjakan khusus oleh perajin Batika.</p>
            <div className="preorder-estimate" data-testid="preorder-estimate"><strong>± 2 minggu</strong><span>estimasi pengerjaan untuk pesanan pre-order</span></div>
          </div>
          <div className="preorder-card" data-reveal data-testid="preorder-process-card">
            <h3 data-testid="preorder-process-heading">Dari pesan hingga sampai</h3>
            <ol data-testid="preorder-steps">
              <li data-testid="preorder-step-1"><span>01</span><div><strong>Hubungi Batika</strong><p>Konsultasikan motif dan detail pesanan via WhatsApp.</p></div></li>
              <li data-testid="preorder-step-2"><span>02</span><div><strong>Cek ready stock</strong><p>Admin mengecek ukuran dan motif yang tersedia saat itu.</p></div></li>
              <li data-testid="preorder-step-3"><span>03</span><div><strong>Ready dikirim / masuk PO</strong><p>Produk ready dapat diproses; jika habis, masuk antrean handmade ±2 minggu.</p></div></li>
              <li data-testid="preorder-step-4"><span>04</span><div><strong>Dikirim untuk Anda</strong><p>Pesanan diperiksa dan dikirim setelah selesai.</p></div></li>
            </ol>
            <WhatsAppCta testId="preorder-whatsapp-button">Pesan Sekarang & Masuk Antrian</WhatsAppCta>
          </div>
        </div>
      </section>

      <section id="cerita" className="story-section section-shell" data-testid="story-section">
        <div className="story-photo" data-reveal>
          <img
            src="/payung/Foto mbatik.jpeg"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.triedFallback) {
                target.dataset.triedFallback = "1";
                target.src = "/payung/foto-mbatik.jpg";
              }
            }}
            alt="Proses membatik payung Batika dengan canting"
            loading="lazy"
            referrerPolicy="no-referrer"
            data-testid="story-image"
          />
          <span className="story-year" data-testid="story-year">Est. 2018 · Yogyakarta</span>
          <small className="story-photo-note" data-testid="story-photo-note">Proses canting payung batik Batika</small>
        </div>
        <div className="story-content" data-reveal>
          <Eyebrow testId="story-eyebrow">Our history</Eyebrow>
          <h2 data-testid="story-heading">Cerita Batika</h2>
          <p className="story-lead" data-testid="story-lead">Warisan tidak cukup hanya disimpan. Ia perlu dipakai, dicintai, dan dibawa ke masa depan.</p>
          <p data-testid="story-description">Batika didirikan pada 2018 dengan menggabungkan batik dan inovasi untuk menghadirkan apresiasi budaya Indonesia yang elegan dan modern. Dari Yogyakarta, kami terus mengeksplorasi cara baru agar batik hadir lebih dekat dalam keseharian.</p>
          <div className="story-signature" data-testid="story-signature"><span aria-hidden="true" /> Karya lokal, rasa global</div>
        </div>
      </section>

      <section className="values-section section-shell" data-testid="values-section">
        <div className="values-header" data-reveal>
          <Eyebrow testId="values-eyebrow">Our value</Eyebrow>
          <h2 data-testid="values-heading">Nilai yang Kami Pegang</h2>
          <p data-testid="values-description">Di balik setiap karya, ada tangan, waktu, dan masa depan yang kami jaga.</p>
        </div>
        <div className="values-grid">
          <article data-reveal data-testid="value-card-local"><HandHeart size={25} /><span data-testid="value-index-local">01</span><h3 data-testid="value-title-local">Kolaborasi Lokal</h3><p data-testid="value-copy-local">Berkolaborasi dengan pengrajin lokal Yogyakarta untuk menghasilkan karya batik berkualitas yang mampu bersaing di pasar internasional.</p></article>
          <article data-reveal data-testid="value-card-handmade"><BadgeCheck size={25} /><span data-testid="value-index-handmade">02</span><h3 data-testid="value-title-handmade">Handmade</h3><p data-testid="value-copy-handmade">Setiap produk dibuat secara handmade dengan ketelitian dan kehati-hatian untuk memberikan kualitas terbaik.</p></article>
          <article data-reveal data-testid="value-card-regeneration"><Sparkles size={25} /><span data-testid="value-index-regeneration">03</span><h3 data-testid="value-title-regeneration">Regenerasi Pembatik Muda</h3><p data-testid="value-copy-regeneration">Berkomitmen menjadi penggerak regenerasi pembatik muda agar warisan batik tetap hidup di generasi berikutnya.</p></article>
        </div>
      </section>

      <section className="proof-section" data-testid="social-proof-section">
        <div className="section-shell">
          <div className="proof-header" data-reveal>
            <div>
              <Eyebrow testId="proof-eyebrow">Suara Pelanggan · Testimoni Nyata</Eyebrow>
              <h2 data-testid="proof-heading">Dipercaya di Tanah Air, Menembus Mancanegara.</h2>
            </div>
            <p data-testid="proof-description">
              Cerita nyata dari sahabat Batika di Yogyakarta dan Bandung, hingga yang membawa payung batik ke Belanda, Kanada, Qatar, Yordania, dan Australia.
            </p>
          </div>

          <div className="proof-filter-bar" data-testid="testimonial-filters">
            <button
              type="button"
              className={`proof-filter-btn ${testimonialFilter === "all" ? "active" : ""}`}
              onClick={() => setTestimonialFilter("all")}
              data-testid="filter-all-btn"
            >
              Semua Kisah <span className="proof-filter-count">{customerTestimonials.length}</span>
            </button>
            <button
              type="button"
              className={`proof-filter-btn ${testimonialFilter === "international" ? "active" : ""}`}
              onClick={() => setTestimonialFilter("international")}
              data-testid="filter-international-btn"
            >
              <Globe size={12} /> Mancanegara <span className="proof-filter-count">5 Negara</span>
            </button>
            <button
              type="button"
              className={`proof-filter-btn ${testimonialFilter === "domestic" ? "active" : ""}`}
              onClick={() => setTestimonialFilter("domestic")}
              data-testid="filter-domestic-btn"
            >
              <ShieldCheck size={12} /> Dalam Negeri &amp; Kualitas <span className="proof-filter-count">4</span>
            </button>
          </div>

          <div className="testimonial-grid" data-testid="testimonial-grid">
            {filteredTestimonials.map((item) => (
              <article
                key={item.id}
                className="testimonial-card"
                data-reveal
                data-testid={`testimonial-card-${item.id}`}
              >
                <div>
                  <div className="testimonial-card-top">
                    <div className="testimonial-author-group">
                      <div
                        className="testimonial-avatar"
                        style={{ backgroundColor: item.avatarBg }}
                        aria-hidden="true"
                      >
                        {item.avatarInitials}
                      </div>
                      <div className="testimonial-meta">
                        <h4 className="testimonial-author-name">{item.name}</h4>
                        <span className="testimonial-location-badge">
                          <span>{item.flag}</span> {item.location}
                        </span>
                      </div>
                    </div>
                    <div className="testimonial-stars" aria-label="Rating 5 bintang">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <h3 className="testimonial-headline">{item.headline}</h3>

                  <div className="testimonial-quote-box">
                    <p className="testimonial-quote-text">"{item.quote}"</p>
                  </div>

                  <p className="testimonial-context-note">{item.contextNote}</p>
                </div>

                <div className="testimonial-card-footer">
                  <span className="testimonial-tag">{item.tag}</span>
                  <span className="testimonial-verified-badge" title={item.verifiedLabel}>
                    <BadgeCheck size={13} /> Chat Terverifikasi
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="social-proof-links" data-testid="official-channel-links">
            <a href="https://www.instagram.com/batika_bag/" target="_blank" rel="noreferrer" data-testid="instagram-link"><Instagram size={20} /><span><strong>Instagram</strong>@batika_bag</span><ArrowRight size={16} /></a>
            <a href="https://www.tiktok.com/@batikabag" target="_blank" rel="noreferrer" data-testid="tiktok-link"><Music2 size={20} /><span><strong>TikTok</strong>@batikabag</span><ArrowRight size={16} /></a>
            <a href="https://web.facebook.com/BatikaBag/" target="_blank" rel="noreferrer" data-testid="facebook-link"><Facebook size={20} /><span><strong>Facebook</strong>BatikaBag</span><ArrowRight size={16} /></a>
            <a href="https://www.tokopedia.com/batikaindonesia" target="_blank" rel="noreferrer" data-testid="tokopedia-link"><Store size={20} /><span><strong>Tokopedia</strong>batikaindonesia</span><ArrowRight size={16} /></a>
            <a href="https://shopee.co.id/batikabag" target="_blank" rel="noreferrer" data-testid="shopee-link"><Gift size={20} /><span><strong>Shopee</strong>batikabag</span><ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section section-shell" data-testid="faq-section">
        <div className="faq-intro" data-reveal>
          <Eyebrow testId="faq-eyebrow">Sebelum memesan</Eyebrow>
          <h2 data-testid="faq-heading">Pertanyaan yang sering ditanyakan</h2>
          <p data-testid="faq-description">Belum menemukan jawaban? Tim Batika siap membantu melalui WhatsApp.</p>
          <WhatsAppCta testId="faq-whatsapp-button" kind="outline">Tanya Admin Batika</WhatsAppCta>
        </div>
        <div className="faq-list" data-testid="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} data-testid={`faq-item-${index + 1}`}>
              <summary data-testid={`faq-question-${index + 1}`}><span>{faq.question}</span><ChevronDown size={19} aria-hidden="true" /></summary>
              <p data-testid={`faq-answer-${index + 1}`}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta" data-testid="final-cta-section">
        <BatikPattern className="final-pattern" />
        <div className="final-cta-inner" data-reveal>
          <span className="final-kicker" data-testid="final-cta-kicker">Ready stock motif tertentu · PO ±2 minggu</span>
          <h2 data-testid="final-cta-heading">Miliki Payung Batik Eksklusif Anda Sekarang</h2>
          <p data-testid="final-cta-description">Tanyakan motif yang ready stock atau pesan hari ini untuk masuk antrean pengerjaan. Tim kami akan membantu memilih ukuran yang paling sesuai.</p>
          <WhatsAppCta testId="final-whatsapp-button" kind="light">Chat Kami di WhatsApp</WhatsAppCta>
        </div>
      </section>

      <footer id="kontak" className="footer" data-testid="footer">
        <div className="section-shell footer-main">
          <div className="footer-brand" data-testid="footer-brand">
            <img src={LOGO} alt="Batika" loading="lazy" data-testid="footer-logo-image" />
            <p data-testid="footer-brand-description">Kriya batik handmade dari Yogyakarta—membawa warisan menjadi bagian dari hari ini.</p>
          </div>
          <div className="footer-contact" data-testid="footer-contact">
            <h2 data-testid="footer-contact-heading">Hubungi Kami</h2>
            <a href="https://maps.app.goo.gl/MxkztRoyuiWoDqhRA" target="_blank" rel="noreferrer" data-testid="footer-address-link"><MapPin size={17} /> <span>Jl. Matraman No. 4-24, Nanggulan, Maguwoharjo, Depok, Sleman</span></a>
            <a href="mailto:batikabagindonesia@gmail.com" data-testid="footer-email-link"><Mail size={17} /> <span>batikabagindonesia@gmail.com</span></a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" data-testid="footer-phone-link"><Phone size={17} /> <span>+62 858-0028-8414</span></a>
          </div>
          <div className="footer-menu" data-testid="footer-menu">
            <h2 data-testid="footer-menu-heading">Jelajahi</h2>
            <a href="#produk" data-testid="footer-produk-link">Produk</a>
            <a href="#preorder" data-testid="footer-preorder-link">Cara Pesan</a>
            <a href="#cerita" data-testid="footer-cerita-link">Cerita Kami</a>
            <a href="#faq" data-testid="footer-faq-link">FAQ</a>
          </div>
        </div>
        <div className="footer-bottom section-shell">
          <span data-testid="footer-copyright">© 2026 Batika Indonesia. All rights reserved.</span>
          <div data-testid="footer-social-links">
            <a href="https://www.instagram.com/batika_bag/" target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="footer-instagram-link"><Instagram size={17} /></a>
            <a href="https://www.tiktok.com/@batikabag" target="_blank" rel="noreferrer" aria-label="TikTok" data-testid="footer-tiktok-link"><Music2 size={17} /></a>
            <a href="https://web.facebook.com/BatikaBag/" target="_blank" rel="noreferrer" aria-label="Facebook" data-testid="footer-facebook-link"><Facebook size={17} /></a>
          </div>
        </div>
      </footer>

      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Pesan Payung Batik via WhatsApp" data-testid="floating-whatsapp-button">
        <MessageCircle size={21} fill="currentColor" aria-hidden="true" /><span>Pesan via WhatsApp</span>
      </a>
    </main>
  );
}