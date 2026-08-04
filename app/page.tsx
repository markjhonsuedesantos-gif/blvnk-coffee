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
      
      <div className="flex flex-col items-center text-center max-w-lg space-y-4">
        {/* Larger Logo Container */}
        <div className="relative w-80 h-36 flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="BLVNK Coffee Logo"
            width={400}
            height={180}
            priority
            className="object-contain"
          />
        </div>

        {/* Larger Brand Tagline */}
        <div>
          <p className="text-2xl sm:text-3xl text-neutral-800 font-light italic tracking-wider font-[family-name:var(--font-nunito)]">
            Roastery &amp; Slowbar
          </p>
        </div>

        {/* Spacious Coming Soon Badge */}
        <div className="pt-6">
          <span className="inline-block px-10 py-3.5 border border-black rounded-full text-sm sm:text-base tracking-[0.3em] uppercase text-black font-mono bg-transparent">
            Coming Soon
          </span>
        </div>
      </div>
    </main>
  );
}