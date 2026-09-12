import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
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
  Store,
  Sun,
  Umbrella,
  X,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/6285800288414?text=Halo%20Batika%2C%20saya%20tertarik%20dengan%20Payung%20Batik%20Handmade%20Jumbo%20Anti%20UV.%20Boleh%20info%20lebih%20lanjut%3F";

const variantWhatsappUrl = (name: string, diameter: string, price: string) =>
  `https://wa.me/6285800288414?text=${encodeURIComponent(
    `Halo Batika, saya tertarik dengan ${name} Batika diameter ${diameter} dengan harga ${price}. Mohon info motif yang ready stock atau estimasi pre-order.`,
  )}`;

const LOGO = "/payung/batika-logo.webp";

const gallery = [
  { src: "/payung/payung-01.webp", label: "Nila Peksi", tone: "Indigo & soga" },
  { src: "/payung/payung-02.webp", label: "Sekar Hijau", tone: "Hijau & perunggu" },
  { src: "/payung/payung-04.webp", label: "Kupu Malam", tone: "Hitam multikolor" },
  { src: "/payung/payung-05.webp", label: "Sekar Maroon", tone: "Maroon & merah muda" },
  { src: "/payung/payung-06.webp", label: "Kembang Alas", tone: "Hijau & emas" },
  { src: "/payung/payung-14.webp", label: "Peksi Langit", tone: "Biru muda & merah" },
];

const navItems = [
  { label: "Produk", href: "#produk", id: "nav-produk-link" },
  { label: "Cara Pesan", href: "#preorder", id: "nav-cara-pesan-link" },
  { label: "Cerita Kami", href: "#cerita", id: "nav-cerita-link" },
  { label: "Kontak", href: "#kontak", id: "nav-kontak-link" },
];

const heroFeatures = [
  { label: "Batik tulis", icon: Sparkles, id: "batik-tulis" },
  { label: "Anti UV", icon: Sun, id: "anti-uv" },
  { label: "Anti air & badai", icon: ShieldCheck, id: "anti-air-badai" },
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
          <Eyebrow testId="hero-eyebrow">Kriya Batik Yogyakarta · Sejak 2018</Eyebrow>
          <h1 data-testid="hero-headline">
            Payung Batik Tulis Eksklusif,
            <em> Anti UV & Tahan Badai</em>
          </h1>
          <p className="hero-subheadline" data-testid="hero-subheadline">
            Empat pilihan ukuran dari reguler lipat hingga payung golf—anti air, tidak luntur, dan dibuat oleh pembatik Yogyakarta untuk gaya harian maupun hadiah penuh makna.
          </p>
          <div className="hero-badges" data-testid="hero-feature-badges">
            {heroFeatures.map(({ label, icon: Icon, id }) => (
              <span key={id} data-testid={`hero-badge-${id}`}>
                <Icon size={14} aria-hidden="true" /> {label}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <WhatsAppCta testId="hero-whatsapp-button">Pesan via WhatsApp</WhatsAppCta>
            <a href="#produk" className="secondary-link" data-testid="hero-detail-link">
              Lihat detail produk <ArrowRight size={16} />
            </a>
          </div>
          <p className="hero-note" data-testid="hero-preorder-note">
            <Clock3 size={15} aria-hidden="true" /> Ready stock tergantung motif · PO ± 2 minggu
          </p>
        </div>
        <div className="hero-product" data-reveal data-testid="hero-product-visual">
          <div className="hero-orbit" aria-hidden="true" />
          <span className="hero-edition" data-testid="hero-edition-label">01 · Nila Peksi</span>
          <img src="/payung/payung-01.webp" alt="Payung Batik Handmade Jumbo motif indigo dan soga dalam posisi terbuka" fetchPriority="high" data-testid="hero-product-image" />
          <div className="hero-size-note" data-testid="hero-size-note">
            <strong>4</strong><span>pilihan<br />ukuran</span>
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
              <div data-testid="feature-anti-badai"><dt><ShieldCheck size={18} /> Anti badai</dt><dd>Konstruksi payung dirancang lebih siap menghadapi terpaan angin.</dd></div>
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
          <img src="https://images.unsplash.com/photo-1586319826907-1ff4aadbaddc?auto=format&fit=crop&w=1100&q=82" alt="Perajin batik bekerja dengan teliti" loading="lazy" data-testid="story-image" />
          <span className="story-year" data-testid="story-year">Est. 2018 · Yogyakarta</span>
          <small className="story-photo-note" data-testid="story-photo-note">Ilustrasi suasana membatik</small>
        </div>
        <div className="story-content" data-reveal>
          <Eyebrow testId="story-eyebrow">Our history</Eyebrow>
          <h2 data-testid="story-heading">Cerita Batika</h2>
          <p className="story-lead" data-testid="story-lead">Warisan tidak cukup hanya disimpan. Ia perlu dipakai, dicintai, dan dibawa ke masa depan.</p>
          <p data-testid="story-description">Batika didirikan pada 2018 dengan menggabungkan batik dan kerajinan kulit untuk menghadirkan apresiasi budaya Indonesia yang elegan dan modern. Dari Yogyakarta, kami terus mengeksplorasi cara baru agar batik hadir lebih dekat dalam keseharian.</p>
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
            <div><Eyebrow testId="proof-eyebrow">Suara pelanggan</Eyebrow><h2 data-testid="proof-heading">Kisah yang akan hadir di sini.</h2></div>
            <p data-testid="proof-description">Ruang ini disiapkan untuk pengalaman nyata pelanggan Batika setelah testimoni terverifikasi tersedia.</p>
          </div>
          <div className="testimonial-grid">
            {["Pengalaman menerima produk", "Detail motif & kualitas", "Pengalaman proses pre-order"].map((title, index) => (
              <article key={title} className="testimonial-placeholder" data-reveal data-testid={`testimonial-placeholder-${index + 1}`}>
                <span data-testid={`testimonial-label-${index + 1}`}>Placeholder testimoni</span>
                <h3 data-testid={`testimonial-title-${index + 1}`}>{title}</h3>
                <p data-testid={`testimonial-copy-${index + 1}`}>Testimoni pelanggan asli akan ditampilkan setelah mendapat persetujuan publikasi.</p>
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