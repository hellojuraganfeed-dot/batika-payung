import { useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Facebook,
  Globe2,
  Handshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Phone,
  Scissors,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ASSETS = {
  hero:
    "https://customer-assets-lqy194kg.emergentagent.net/job_6bed0943-17d5-452f-912e-2c35378d24d9/artifacts/hf88muwl_hero%20img%20Batika.webp",
  bag:
    "https://customer-assets-lqy194kg.emergentagent.net/job_6bed0943-17d5-452f-912e-2c35378d24d9/artifacts/m8f4b9nf_Tas%20Batika.webp",
  umbrella:
    "https://customer-assets-lqy194kg.emergentagent.net/job_6bed0943-17d5-452f-912e-2c35378d24d9/artifacts/ky8gassb_Payung%20Batik%20Handmade%20Reguler.webp",
  greenUmbrella:
    "https://customer-assets-lqy194kg.emergentagent.net/job_6bed0943-17d5-452f-912e-2c35378d24d9/artifacts/su0tpnzj_Payung%20Batik%20Handmade%20Reguler%20-%20hijau.webp",
  logo:
    "https://customer-assets-lqy194kg.emergentagent.net/job_6bed0943-17d5-452f-912e-2c35378d24d9/artifacts/6o9j49z6_Logo%20Batika.jpg",
  artisan:
    "https://images.unsplash.com/photo-1586319826907-1ff4aadbaddc?auto=format&fit=crop&w=1200&q=85",
};

const WHATSAPP_NUMBER = "6285800288414";

const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const navItems = [
  { label: "Koleksi", href: "#koleksi", testId: "nav-link-koleksi" },
  { label: "Cerita Kami", href: "#cerita", testId: "nav-link-cerita" },
  { label: "Nilai", href: "#nilai", testId: "nav-link-nilai" },
  { label: "Kontak", href: "#kontak", testId: "nav-link-kontak" },
];

type Product = {
  id: string;
  number: string;
  category: string;
  name: string;
  line: string;
  description: string;
  motif: string;
  image: string;
  align?: string;
};

const products: Product[] = [
  {
    id: "tas-selempang",
    number: "01",
    category: "Tas Selempang",
    name: "Siluet yang menemani langkah",
    line: "Ringkas, anggun, nyaman untuk aktivitas harian.",
    description:
      "Struktur yang praktis dengan strap kulit fleksibel dan aksen batik yang membuat setiap perjalanan terasa personal.",
    motif: "Aksen Parang · Kulit soga",
    image: ASSETS.bag,
    align: "object-[50%_56%]",
  },
  {
    id: "tote-bag",
    number: "02",
    category: "Tote Bag",
    name: "Ruang luas, karakter kuat",
    line: "Kapasitas maksimal dengan struktur kokoh.",
    description:
      "Teman kerja dan bepergian yang lapang, dengan permainan kain batik sebagai pusat perhatian.",
    motif: "Kawung geometris · Handle kulit",
    image: ASSETS.hero,
    align: "object-[60%_48%]",
  },
  {
    id: "handbag",
    number: "03",
    category: "Handbag",
    name: "Warisan dalam siluet modern",
    line: "Pernyataan kemewahan budaya yang abadi.",
    description:
      "Untuk momen spesial, jamuan, atau hadiah berkelas yang ingin membawa sepotong Yogyakarta lebih jauh.",
    motif: "Batik klasik · Hardware kuningan",
    image: ASSETS.greenUmbrella,
    align: "object-[52%_52%]",
  },
  {
    id: "clutch",
    number: "04",
    category: "Clutch",
    name: "Kecil, namun tak terlupakan",
    line: "Detail ramping untuk momen berharga.",
    description:
      "Genggaman mungil yang merayakan detail: tekstur kain, garis jahit, dan warna yang dipilih dengan penuh rasa.",
    motif: "Nitik & Truntum · Finishing presisi",
    image: ASSETS.umbrella,
    align: "object-[50%_54%]",
  },
];

function SectionLabel({ children, testId }: { children: ReactNode; testId: string }) {
  return (
    <p data-testid={testId} className="eyebrow">
      {children}
    </p>
  );
}

function MotifMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`motif-mark ${className}`}
      viewBox="0 0 180 180"
      fill="none"
    >
      <circle cx="90" cy="90" r="34" />
      <circle cx="38" cy="90" r="34" />
      <circle cx="142" cy="90" r="34" />
      <circle cx="90" cy="38" r="34" />
      <circle cx="90" cy="142" r="34" />
    </svg>
  );
}

function WhatsAppButton({
  href,
  children,
  testId,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: ReactNode;
  testId: string;
  variant?: "dark" | "green" | "light";
  className?: string;
}) {
  const variants = {
    dark: "wa-button wa-button-dark",
    green: "wa-button wa-button-green",
    light: "wa-button wa-button-light",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-testid={testId}
      className={`${variants[variant]} ${className}`}
    >
      <MessageCircle size={17} strokeWidth={2.2} aria-hidden="true" />
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Tas Selempang");
  const [selectedMotif, setSelectedMotif] = useState("Kawung");
  const [selectedColor, setSelectedColor] = useState("Soga Brown");

  const inquiryMessage = `Halo Batika Indonesia, saya tertarik dengan ${selectedCategory} motif ${selectedMotif} dalam warna kulit ${selectedColor}. Boleh info ketersediaan, detail, dan harganya?`;

  return (
    <main className="site-shell">
      <header className="site-nav" data-testid="site-navigation">
        <div className="nav-inner">
          <a href="#top" className="brand-lockup" data-testid="brand-logo-link">
            <span className="brand-mark">B</span>
            <span className="brand-wordmark">Batika</span>
            <span className="brand-origin">Indonesia</span>
          </a>

          <nav className="desktop-nav" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} data-testid={item.testId}>
                {item.label}
              </a>
            ))}
          </nav>

          <WhatsAppButton
            href={whatsappUrl(
              "Halo Batika Indonesia, saya tertarik dengan koleksi tas batik eksklusif Anda. Boleh info katalog lengkap dan harganya?",
            )}
            testId="nav-cta-whatsapp-button"
            variant="dark"
            className="nav-cta"
          >
            Tanya via WhatsApp
          </WhatsAppButton>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            data-testid="mobile-menu-toggle-button"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu" data-testid="mobile-navigation-menu">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-testid={`mobile-${item.testId}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <ChevronRight size={16} />
              </a>
            ))}
            <WhatsAppButton
              href={whatsappUrl("Halo Batika Indonesia, saya ingin melihat koleksi tas batik eksklusif.")}
              testId="mobile-nav-cta-whatsapp-button"
              variant="green"
            >
              Mulai percakapan
            </WhatsAppButton>
          </div>
        )}
      </header>

      <section id="top" className="hero-section" data-testid="hero-section">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-copy">
          <SectionLabel testId="hero-eyebrow">Pusat Tas Batik Eksklusif · Est. 2018</SectionLabel>
          <h1 data-testid="hero-headline">
            Warisan yang
            <span> dibawa maju.</span>
          </h1>
          <p className="hero-description" data-testid="hero-description">
            Tas batik handmade dari Yogyakarta, tempat motif klasik Nusantara bertemu
            dengan siluet modern dan kulit pilihan.
          </p>
          <div className="hero-actions">
            <WhatsAppButton
              href={whatsappUrl(
                "Halo Batika Indonesia, saya tertarik memesan tas batik eksklusif. Mohon info ketersediaan varian saat ini.",
              )}
              testId="hero-primary-whatsapp-button"
              variant="green"
            >
              Konsultasi & Pesan
            </WhatsAppButton>
            <a href="#koleksi" className="text-link" data-testid="hero-explore-collection-button">
              Jelajahi koleksi <ArrowDown size={16} />
            </a>
          </div>
          <div className="hero-proof" data-testid="hero-proof-points">
            <div>
              <strong data-testid="hero-proof-handmade">100%</strong>
              <span data-testid="hero-proof-handmade-label">proses handmade</span>
            </div>
            <div>
              <strong data-testid="hero-proof-year">2018</strong>
              <span data-testid="hero-proof-year-label">berkarya di Yogya</span>
            </div>
            <div>
              <strong data-testid="hero-proof-artisan">Muda</strong>
              <span data-testid="hero-proof-artisan-label">regenerasi perajin</span>
            </div>
          </div>
        </div>
        <div className="hero-visual" data-testid="hero-visual">
          <div className="hero-image-wrap">
            <img src={ASSETS.hero} alt="Koleksi tas batik Batika dalam berbagai siluet" data-testid="hero-product-image" />
            <div className="hero-image-wash" />
            <div className="hero-stamp" data-testid="hero-stamp">
              <MotifMark />
              <span>dibuat dengan rasa</span>
            </div>
          </div>
          <p className="hero-caption" data-testid="hero-image-caption">
            <span>Yogyakarta, Indonesia</span>
            <span>—</span>
            <span>Kerajinan yang punya cerita</span>
          </p>
        </div>
      </section>

      <div className="marquee-band" aria-hidden="true">
        <div className="marquee-track">
          <span>BATIK · KULIT · CERITA</span><i>✳</i><span>DIBUAT DI YOGYAKARTA</span><i>✳</i>
          <span>BATIK · KULIT · CERITA</span><i>✳</i><span>DIBUAT DI YOGYAKARTA</span><i>✳</i>
        </div>
      </div>

      <section id="koleksi" className="collection-section section-pad" data-testid="collection-section">
        <div className="section-intro collection-intro">
          <div>
            <SectionLabel testId="collection-eyebrow">Koleksi utama</SectionLabel>
            <h2 data-testid="collection-headline">
              Empat cara untuk
              <em> membawa cerita.</em>
            </h2>
          </div>
          <p data-testid="collection-description">
            Satu tas, satu karakter. Pilih siluet yang paling dekat dengan keseharianmu,
            lalu biarkan kami membantu menemukan motif yang terasa paling kamu.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article
              className={`product-card product-card-${index + 1}`}
              key={product.id}
              data-testid={`product-card-${product.id}`}
            >
              <div className="product-image-frame">
                <img
                  src={product.image}
                  alt={`${product.category} Batika dengan detail batik handmade`}
                  className={product.align}
                  data-testid={`product-image-${product.id}`}
                />
                <span className="product-number" data-testid={`product-number-${product.id}`}>
                  {product.number}
                </span>
                <span className="product-motif" data-testid={`product-motif-${product.id}`}>
                  {product.motif}
                </span>
              </div>
              <div className="product-copy">
                <p className="product-category" data-testid={`product-category-${product.id}`}>
                  {product.category}
                </p>
                <h3 data-testid={`product-name-${product.id}`}>{product.name}</h3>
                <p className="product-line" data-testid={`product-line-${product.id}`}>
                  {product.line}
                </p>
                <p className="product-description" data-testid={`product-description-${product.id}`}>
                  {product.description}
                </p>
                <div className="product-footer">
                  <span data-testid={`product-price-label-${product.id}`}>Tanya harga via WhatsApp</span>
                  <a
                    href={whatsappUrl(
                      `Halo Batika, saya tertarik dengan ${product.category} Batik. Boleh minta detail dan harganya?`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="product-cta"
                    data-testid={`product-cta-${product.id}`}
                  >
                    Tanya sekarang <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="cerita" className="story-section section-pad" data-testid="story-section">
        <div className="story-visual">
          <img src={ASSETS.artisan} alt="Perajin batik sedang bekerja dengan teliti" data-testid="story-artisan-image" />
          <div className="story-image-label" data-testid="story-image-label">
            <span>01</span>
            <span>Our History</span>
          </div>
        </div>
        <div className="story-copy">
          <SectionLabel testId="story-eyebrow">Our history</SectionLabel>
          <h2 data-testid="story-headline">
            Dari Yogyakarta,
            <em> untuk dunia.</em>
          </h2>
          <p data-testid="story-description">
            Batika didirikan pada 2018 dengan satu gagasan sederhana: memadukan batik
            dengan tas kulit untuk memberi apresiasi baru pada budaya Indonesia—elegan,
            modern, dan tetap berakar.
          </p>
          <p data-testid="story-description-secondary">
            Hari ini, setiap karya Batika lahir dari pertemuan antara tangan perajin lokal,
            pilihan material yang jujur, dan keinginan untuk membuat warisan terasa relevan
            dalam hidup sehari-hari.
          </p>
          <div className="story-signature" data-testid="story-signature">
            <span className="signature-line" />
            <span>Dibuat di Maguwoharjo, Yogyakarta</span>
          </div>
        </div>
      </section>

      <section id="nilai" className="values-section section-pad dark-section" data-testid="values-section">
        <div className="values-pattern" aria-hidden="true"><MotifMark /></div>
        <div className="section-intro values-intro">
          <div>
            <SectionLabel testId="values-eyebrow">Our value</SectionLabel>
            <h2 data-testid="values-headline">
              Bukan hanya tas.
              <em> Ada yang kita teruskan.</em>
            </h2>
          </div>
          <p data-testid="values-description">
            Batika Indonesia berkolaborasi dengan artisan lokal Yogyakarta untuk membuat tas
            batik berkualitas tinggi yang siap bersaing di pasar internasional.
          </p>
        </div>
        <div className="values-grid">
          <article className="value-card" data-testid="value-card-collaboration">
            <Handshake size={25} strokeWidth={1.5} aria-hidden="true" />
            <span className="value-index" data-testid="value-index-collaboration">01</span>
            <h3 data-testid="value-title-collaboration">Kolaborasi lokal</h3>
            <p data-testid="value-description-collaboration">
              Merayakan keahlian perajin Yogyakarta dan memberi ruang bagi tangan-tangan terbaik untuk tumbuh bersama.
            </p>
          </article>
          <article className="value-card value-card-accent" data-testid="value-card-regeneration">
            <Sparkles size={25} strokeWidth={1.5} aria-hidden="true" />
            <span className="value-index" data-testid="value-index-regeneration">02</span>
            <h3 data-testid="value-title-regeneration">Penggerak regenerasi pembatik muda</h3>
            <p data-testid="value-description-regeneration">
              Batik bukan sekadar masa lalu. Kami menjaga teknik canting tetap hidup di tangan generasi baru.
            </p>
          </article>
          <article className="value-card" data-testid="value-card-global">
            <Globe2 size={25} strokeWidth={1.5} aria-hidden="true" />
            <span className="value-index" data-testid="value-index-global">03</span>
            <h3 data-testid="value-title-global">Siap melangkah lebih jauh</h3>
            <p data-testid="value-description-global">
              Ketelitian handmade dan material pilihan untuk karya yang pantas dibawa ke panggung dunia.
            </p>
          </article>
        </div>
      </section>

      <section id="handmade" className="handmade-section section-pad" data-testid="handmade-section">
        <div className="handmade-heading">
          <SectionLabel testId="handmade-eyebrow">The handmade process</SectionLabel>
          <h2 data-testid="handmade-headline">
            Dibuat sepenuh hati,
            <em> satu demi satu.</em>
          </h2>
          <p data-testid="handmade-description">
            Produk Batika dibuat melalui proses handmade dengan care dan accuracy untuk memberi kualitas terbaik yang terasa di setiap detail.
          </p>
        </div>
        <div className="process-list">
          <div className="process-item" data-testid="process-step-fabric">
            <span>01</span><Scissors size={19} /><div><h3 data-testid="process-title-fabric">Kain pilihan</h3><p data-testid="process-description-fabric">Setiap lembar batik dipilih untuk menemukan perpaduan warna dan motif yang paling hidup.</p></div>
          </div>
          <div className="process-item" data-testid="process-step-cutting">
            <span>02</span><span className="process-dot" /><div><h3 data-testid="process-title-cutting">Pola & jahitan presisi</h3><p data-testid="process-description-cutting">Kulit dipotong, dirapikan, dan disatukan dengan ketelitian tangan manusia.</p></div>
          </div>
          <div className="process-item" data-testid="process-step-finishing">
            <span>03</span><Check size={19} /><div><h3 data-testid="process-title-finishing">Finishing dengan rasa</h3><p data-testid="process-description-finishing">Setiap hardware, lining, dan sudut diperiksa sebelum karya menemukan pemiliknya.</p></div>
          </div>
        </div>
      </section>

      <section className="inquiry-section section-pad" data-testid="inquiry-section">
        <div className="inquiry-intro">
          <SectionLabel testId="inquiry-eyebrow">Made for you</SectionLabel>
          <h2 data-testid="inquiry-headline">Mulai dari sebuah
            <em> percakapan.</em>
          </h2>
          <p data-testid="inquiry-description">Punya bayangan tas impianmu? Pilih preferensi dasar di bawah, kami bantu lanjutkan detailnya lewat WhatsApp.</p>
        </div>
        <div className="inquiry-card" data-testid="interactive-inquiry-box">
          <div className="inquiry-field">
            <label htmlFor="inquiry-category" data-testid="inquiry-category-label">Model tas</label>
            <select id="inquiry-category" value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)} data-testid="inquiry-category-select">
              <option>Tas Selempang</option><option>Tote Bag</option><option>Handbag</option><option>Clutch</option>
            </select>
          </div>
          <div className="inquiry-field">
            <label htmlFor="inquiry-motif" data-testid="inquiry-motif-label">Preferensi motif</label>
            <select id="inquiry-motif" value={selectedMotif} onChange={(event) => setSelectedMotif(event.target.value)} data-testid="inquiry-motif-select">
              <option>Kawung</option><option>Parang Rusak</option><option>Nitik / Truntum</option><option>Custom / konsultasi dulu</option>
            </select>
          </div>
          <div className="inquiry-field">
            <label htmlFor="inquiry-color" data-testid="inquiry-color-label">Warna kulit</label>
            <select id="inquiry-color" value={selectedColor} onChange={(event) => setSelectedColor(event.target.value)} data-testid="inquiry-color-select">
              <option>Soga Brown</option><option>Deep Black</option><option>Tan Karamel</option><option>Maroon Keraton</option>
            </select>
          </div>
          <div className="inquiry-result" data-testid="inquiry-message-preview">
            <span>Pesanmu akan dimulai dengan</span>
            <strong>“Halo Batika Indonesia, saya tertarik dengan {selectedCategory}...”</strong>
          </div>
          <WhatsAppButton href={whatsappUrl(inquiryMessage)} testId="inquiry-whatsapp-button" variant="green">
            Kirim preferensi saya
          </WhatsAppButton>
        </div>
      </section>

      <section id="kontak" className="contact-section section-pad dark-section" data-testid="contact-section">
        <div className="contact-topline">
          <SectionLabel testId="contact-eyebrow">Find your Batika</SectionLabel>
          <span className="contact-batik-label" data-testid="contact-location-label">Maguwoharjo · Yogyakarta</span>
        </div>
        <div className="contact-main">
          <div>
            <h2 data-testid="contact-headline">Mari bertemu dengan karya yang tepat.</h2>
            <p data-testid="contact-description">Datang ke butik, lihat koleksi yang tersedia, atau mulai dari chat kecil dengan tim kami.</p>
          </div>
          <WhatsAppButton href={whatsappUrl("Halo Batika Indonesia, saya ingin berkonsultasi tentang koleksi tas batik handmade.")} testId="contact-whatsapp-button" variant="light">
            Hubungi Batika
          </WhatsAppButton>
        </div>
        <div className="contact-details">
          <div className="contact-detail" data-testid="contact-address">
            <MapPin size={18} aria-hidden="true" /><div><span>Alamat butik</span><strong>Gg. Santan 1 No. 10c, Maguwoharjo, Depok, Sleman, Yogyakarta 55282</strong></div>
          </div>
          <div className="contact-detail" data-testid="contact-email">
            <Mail size={18} aria-hidden="true" /><div><span>Email</span><a href="mailto:butikbareng@gmail.com" data-testid="contact-email-link">butikbareng@gmail.com</a></div>
          </div>
          <div className="contact-detail" data-testid="contact-phone">
            <Phone size={18} aria-hidden="true" /><div><span>WhatsApp</span><a href={whatsappUrl("Halo Batika Indonesia, saya ingin bertanya tentang koleksi tas batik.")} target="_blank" rel="noreferrer" data-testid="contact-phone-link">0858-0028-8414</a></div>
          </div>
        </div>
        <div className="contact-footer-row">
          <div className="social-links" data-testid="social-links">
            <a href="https://www.instagram.com/batika_bag/" target="_blank" rel="noreferrer" data-testid="social-instagram-link"><Instagram size={17} /> @batika_bag</a>
            <a href="https://www.tiktok.com/@batikabag" target="_blank" rel="noreferrer" data-testid="social-tiktok-link"><Music2 size={17} /> @batikabag</a>
            <a href="https://web.facebook.com/BatikaBag/" target="_blank" rel="noreferrer" data-testid="social-facebook-link"><Facebook size={17} /> Batika Bag</a>
          </div>
          <div className="marketplace-links" data-testid="marketplace-links">
            <a href="https://www.tokopedia.com/batikaindonesia" target="_blank" rel="noreferrer" data-testid="tokopedia-link">Tokopedia <ArrowUpRight size={14} /></a>
            <a href="https://shopee.co.id/batikabag" target="_blank" rel="noreferrer" data-testid="shopee-link">Shopee <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer" data-testid="site-footer">
        <div className="footer-brand">
          <img src={ASSETS.logo} alt="Logo Batika Indonesia" data-testid="footer-logo-image" />
          <span data-testid="footer-tagline">Tas batik handmade dari Yogyakarta.</span>
        </div>
        <span data-testid="footer-copyright">© {new Date().getFullYear()} Batika Indonesia</span>
        <a href="#top" className="back-top" data-testid="back-to-top-link">Kembali ke atas <ArrowUpRight size={15} /></a>
      </footer>

      <a
        href={whatsappUrl("Halo Batika Indonesia, saya melihat website Anda dan ingin menanyakan tas batik handmade yang tersedia hari ini.")}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Chat WhatsApp dengan Batika Indonesia"
        data-testid="floating-whatsapp-button"
      >
        <MessageCircle size={20} fill="currentColor" aria-hidden="true" />
        <span>Chat WhatsApp</span>
      </a>
    </main>
  );
}