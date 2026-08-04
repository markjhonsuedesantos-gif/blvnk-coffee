export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CoffeeShop",
    "name": "BLVNK Coffee: Roastery and Slowbar",
    "description": "Specialty coffee roastery and slowbar offering single-origin pour-overs and artisanal espresso.",
    "priceRange": "$$"
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-amber-500">
          BLVNK Coffee
        </h1>
        <p className="text-xl text-neutral-400 mt-2 font-light tracking-wide">
          Roastery & Slowbar
        </p>
      </header>
    </main>
  );
}