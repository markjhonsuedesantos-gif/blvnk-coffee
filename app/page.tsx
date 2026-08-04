import Image from "next/image";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CoffeeShop",
    "name": "BLVNK Coffee: Roastery and Slowbar",
    "description": "Specialty coffee roastery and slowbar offering single-origin pour-overs and artisanal espresso.",
    "priceRange": "$$"
  };

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-6 selection:bg-black selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="flex flex-col items-center text-center w-full max-w-xl space-y-3">
        {/* Logo Container */}
        <div className="w-[85vw] max-w-[480px] h-auto flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="BLVNK Coffee Logo"
            width={600}
            height={220}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Tagline Matched to Logo Width */}
        <div className="w-full">
          <p 
            style={{
              fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
              letterSpacing: "0.18em",
              lineHeight: "1.2"
            }}
            className="font-light italic text-black font-[family-name:var(--font-nunito)]"
          >
            Roastery &amp; Slowbar
          </p>
        </div>

        {/* Social Media Links */}
        <div className="pt-8 flex items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-mono tracking-widest uppercase text-neutral-600">
          <a
            href="https://instagram.com/blvnkcoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Instagram
          </a>
          <span>•</span>
          <a
            href="https://tiktok.com/@blvnk_coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            TikTok
          </a>
          <span>•</span>
          <a
            href="https://www.facebook.com/blvnkcoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </main>
  );
}