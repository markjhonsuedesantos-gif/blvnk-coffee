import Image from "next/image";

export default function Home() {
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CoffeeShop",
    "name": "BLVNK Coffee",
    "alternateName": "BLVNK Coffee Roastery & Slowbar",
    "url": "https://blvnk-coffee.vercel.app",
    "logo": "https://blvnk-coffee.vercel.app/logo.png",
    "description": "BLVNK Coffee is a specialty coffee roastery and slowbar dedicated to single-origin pour-overs and hand-crafted espresso drinks.",
    "sameAs": [
      "https://instagram.com/blvnkcoffee",
      "https://tiktok.com/@blvnk_coffee",
      "https://www.facebook.com/blvnkcoffee"
    ],
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

        {/* Tagline */}
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

        {/* Social Media Icons (Fixed Equal Dimensions) */}
        <div className="pt-8 flex items-center justify-center gap-8 text-neutral-800">
          {/* Instagram */}
          <a
            href="https://instagram.com/blvnkcoffee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Image
              src="/ig.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com/@blvnk_coffee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Image
              src="/tiktok.svg"
              alt="TikTok"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/blvnkcoffee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Image
              src="/fb.svg"
              alt="Facebook"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </a>
        </div>
      </div>
    </main>
  );
}