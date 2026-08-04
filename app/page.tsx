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
      
      <div className="flex flex-col items-center text-center w-full max-w-5xl space-y-8">
        {/* Massive Logo */}
        <div className="w-[80vw] max-w-[1000px] h-auto flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="BLVNK Coffee Logo"
            width={1200}
            height={450}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Massive Tagline */}
        <div>
          <p className="text-5xl sm:text-7xl md:text-8xl font-black italic tracking-tight text-black font-[family-name:var(--font-nunito)]">
            Roastery &amp; Slowbar
          </p>
        </div>
      </div>
    </main>
  );
}