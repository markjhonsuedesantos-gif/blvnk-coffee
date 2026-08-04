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
      
      <div className="flex flex-col items-center text-center max-w-md space-y-2">
        {/* Logo */}
        <div className="relative w-64 h-24 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="BLVNK Coffee Logo"
            width={300}
            height={100}
            priority
            className="object-contain"
          />
        </div>

        {/* Brand Tagline (closer to logo) */}
        <div>
          <p className="text-lg sm:text-xl text-neutral-800 font-light italic tracking-wider font-[family-name:var(--font-nunito)]">
            Roastery &amp; Slowbar
          </p>
        </div>

        {/* Coming Soon Badge (spaced out border) */}
        <div className="pt-6">
          <span className="inline-block px-7 py-2.5 border border-black rounded-full text-xs sm:text-sm tracking-[0.25em] uppercase text-black font-mono bg-transparent">
            Coming Soon
          </span>
        </div>
      </div>
    </main>
  );
}