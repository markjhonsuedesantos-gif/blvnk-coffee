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
      
      <div className="flex flex-col items-center text-center max-w-xl space-y-4">
        {/* Hero-Sized Logo */}
        <div className="w-[320px] sm:w-[520px] h-auto flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="BLVNK Coffee Logo"
            width={800}
            height={300}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Prominent Tagline */}
        <div className="pt-2">
          <p className="text-2xl sm:text-3xl text-black font-medium italic tracking-wide font-[family-name:var(--font-nunito)]">
            Roastery &amp; Slowbar
          </p>
        </div>

        {/* Corrected & Spacious Coming Soon Pill */}
        <div className="pt-8">
          <span className="inline-block px-10 py-4 border-2 border-black rounded-full text-base sm:text-lg tracking-[0.3em] uppercase text-black font-bold font-mono bg-transparent leading-none">
            COMING SOON
          </span>
        </div>
      </div>
    </main>
  );
}