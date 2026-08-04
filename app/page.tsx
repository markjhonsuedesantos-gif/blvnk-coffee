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
      
      <div className="flex flex-col items-center text-center w-full max-w-3xl space-y-5">
        {/* Slightly larger logo width to match the tagline weight */}
        <div className="w-[520px] sm:w-[680px] h-auto flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="BLVNK Coffee Logo"
            width={700}
            height={250}
            priority
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Tagline text maintained at optimal proportions */}
        <div>
          <p 
            style={{
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              letterSpacing: "0.15em",
              lineHeight: "1.2"
            }}
            className="font-light italic text-black font-[family-name:var(--font-nunito)]"
          >
            Roastery &amp; Slowbar
          </p>
        </div>
      </div>
    </main>
  );
}