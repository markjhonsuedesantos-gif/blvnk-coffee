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
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 selection:bg-white selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="flex flex-col items-center text-center max-w-md space-y-6">
        {/* Logo */}
        <div className="relative w-64 h-32 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="BLVNK Coffee Logo"
            width={300}
            height={150}
            priority
            className="object-contain"
          />
        </div>

        {/* Brand Tagline */}
        <div className="space-y-2">
          <p className="text-xl sm:text-2xl text-neutral-300 font-light tracking-widest font-[family-name:var(--font-nunito)]">
            Roastery &amp; Slowbar
          </p>
        </div>

        {/* Coming Soon Badge */}
        <div className="pt-2">
          <span className="inline-block px-5 py-2 border border-neutral-800 rounded-full text-xs sm:text-sm tracking-[0.3em] uppercase text-neutral-400 font-mono bg-neutral-950">
            Coming Soon
          </span>
        </div>
      </div>
    </main>
  );
}