import Image from "next/image";
import { MapPin, Clock, ExternalLink } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
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

  const googleMapsUrl = "https://share.google/QcOXAdyPI4n0QzA44";

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-neutral-200 selection:bg-neutral-800 selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0D0D0D]/80 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-32 h-10 flex items-center">
              <Image
                src="/logo.png"
                alt="BLVNK Coffee Logo"
                width={160}
                height={50}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-neutral-500 border-l border-neutral-800 pl-3">
              Est. 2024 • Lingayen, Pangasinan
            </span>
          </div>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-wider bg-neutral-100 text-neutral-900 px-4 py-2 rounded font-medium hover:bg-neutral-300 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5" />
            Find Us
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24 border-b border-neutral-800/60">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">
              Roastery &amp; Slow Bar
            </span>
            <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight">
              BLVNK COFFEE
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              At Blvnk Coffee, we serve more than just coffee. We brew experiences. From freshly roasted, high-quality coffee to a welcoming atmosphere, we are dedicated to crafting every cup with purpose.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#menu"
                className="bg-white text-black px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition-colors"
              >
                View Menu
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-700 text-neutral-300 px-6 py-3 text-xs uppercase tracking-widest hover:border-neutral-500 transition-colors flex items-center gap-2"
              >
                Visit Shop <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative aspect-[4/3] bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/hero-shop.jpg"
              alt="BLVNK Coffee Shop Interior"
              fill
              className="object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP */}
      <section className="border-b border-neutral-800 bg-neutral-950/50">
        <div className="max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-neutral-400 font-mono">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-neutral-200 shrink-0 mt-0.5" />
            <div>
              <p className="text-neutral-200 font-semibold mb-0.5">LOCATION</p>
              <p>Maramba Blvd, Lingayen, Pangasinan</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-neutral-200 shrink-0 mt-0.5" />
            <div>
              <p className="text-neutral-200 font-semibold mb-0.5">OPERATING HOURS</p>
              <p>Weekdays: 11:00 AM – 11:00 PM</p>
              <p>Weekends: 7:00 AM – 12:00 MN</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
            <div>
              <p className="text-neutral-200 font-semibold mb-0.5">SERVICE TYPE</p>
              <p>Dine-In &amp; Take Away Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP & JOURNEY SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-20 border-b border-neutral-800/60">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">
            Craftsmanship &amp; Sourcing
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-white tracking-wide">
            OUR JOURNEY &amp; PHILOSOPHY
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Our Journey */}
          <div className="bg-neutral-900/50 border border-neutral-800 p-6 space-y-4">
            <div className="relative aspect-video bg-neutral-900 border border-neutral-800 overflow-hidden mb-4">
              <Image
                src="/journey.jpg"
                alt="BLVNK Coffee Cart to Shop Journey"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">01 / The Evolution</span>
            <h3 className="text-lg font-medium text-white">From Table to Flagship</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              BLVNK Coffee started in 2024 with a single popup table, evolving into a dedicated mobile coffee cart, and opening our official storefront in February 2026.
            </p>
          </div>

          {/* Card 2: Flair Manual Espresso */}
          <div className="bg-neutral-900/50 border border-neutral-800 p-6 space-y-4">
            <div className="relative aspect-video bg-neutral-900 border border-neutral-800 overflow-hidden mb-4">
              <Image
                src="/flair-espresso.jpg"
                alt="Flair Manual Espresso Extraction"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">02 / Precision Extraction</span>
            <h3 className="text-lg font-medium text-white">Flair Manual Espresso</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              We pull every shot using Flair Manual Espresso makers. Hand-lever extraction grants precise pressure profiling, unlocking rich crema and complex taste profiles in every shot.
            </p>
          </div>

          {/* Card 3: Green Beans & Local Roasting */}
          <div className="bg-neutral-900/50 border border-neutral-800 p-6 space-y-4">
            <div className="relative aspect-video bg-neutral-900 border border-neutral-800 overflow-hidden mb-4">
              <Image
                src="/green-beans.jpg"
                alt="Single-Origin Green Beans and Roaster"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">03 / Sourcing &amp; Roasting</span>
            <h3 className="text-lg font-medium text-white">Locally Roasted Green Beans</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              All roasting is performed locally here in Lingayen. We carefully select specialty green beans focusing on single-origin transparency and optimal roast profiles.
            </p>
          </div>
        </div>
      </section>

      {/* DIGITAL MENU SECTION */}
      <section id="menu" className="max-w-6xl mx-auto px-4 py-20 border-b border-neutral-800/60">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">
            Dine In or Take Away
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            OFFICIAL MENU
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Classic Espresso Bar */}
          <div className="space-y-6">
            <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-widest border-b border-neutral-800 pb-2">
              CLASSIC ESPRESSO
            </h3>
            <div className="space-y-4 text-xs">
              {[
                { name: "Americano", desc: "Espresso + Filtered Water", price: "₱120" },
                { name: "Cafe Latte", desc: "Espresso + Milk", price: "₱140 – ₱160" },
                { name: "Cappuccino", desc: "Espresso, Cocoa + Foamy Milk", price: "₱150" },
                { name: "Spanish Latte", desc: "Espresso, Condensed Milk + Milk", price: "₱150 – ₱170" },
                { name: "Caramel Macchiato", desc: "Espresso, Caramel + Milk", price: "₱150 – ₱170" },
                { name: "Salted Caramel", desc: "Espresso, Salted Caramel + Milk", price: "₱150 – ₱170" },
                { name: "Mocha / Peppermint Mocha", desc: "Espresso, Chocolate + Milk", price: "₱150 – ₱170" },
                { name: "Vanilla", desc: "Espresso, Vanilla Syrup + Milk", price: "₱150 – ₱170" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start border-b border-neutral-900 pb-2">
                  <div>
                    <p className="text-white font-medium text-sm">{item.name}</p>
                    <p className="text-neutral-500">{item.desc}</p>
                  </div>
                  <span className="font-mono text-neutral-300">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Signatures */}
          <div className="space-y-6">
            <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-widest border-b border-neutral-800 pb-2">
              SIGNATURE DRINKS
            </h3>
            <div className="space-y-4 text-xs">
              {[
                { name: "Agkapadya", desc: "Shaken Espresso, Brown Sugar, Cinnamon + Oat Milk", price: "₱200 – ₱220" },
                { name: "Biscoffee", desc: "Espresso, Biscoff Spread + Oat Milk", price: "₱200 – ₱220" },
                { name: "No. 58", desc: "Strong Coffee: 2 Shot Espresso, White Choco, Whipped Cream", price: "₱200 – ₱220" },
                { name: "Pistachio Latte", desc: "Espresso, Pistachio Syrup, Whipped Cream + Milk", price: "₱200 – ₱220" },
                { name: "Dirty Matcha", desc: "Espresso, Matcha, Condensed Milk + Milk", price: "₱180 – ₱200" },
                { name: "Charcoal Latte", desc: "Espresso, Activated Charcoal, Condensed Milk + Milk", price: "₱180 – ₱200" },
                { name: "Blvnkpink Coffee", desc: "Espresso, Chocolate, Strawberry + Milk", price: "₱180 – ₱200" },
                { name: "Ube Pandan Latte", desc: "Espresso, Ube, Coconut Syrup + Milk", price: "₱180 – ₱200" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start border-b border-neutral-900 pb-2">
                  <div>
                    <p className="text-white font-medium text-sm">{item.name}</p>
                    <p className="text-neutral-500">{item.desc}</p>
                  </div>
                  <span className="font-mono text-neutral-300">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phin Filter Strong Coffee */}
          <div className="space-y-6">
            <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-widest border-b border-neutral-800 pb-2">
              PHIN FILTER BASED (STRONG COFFEE)
            </h3>
            <div className="space-y-4 text-xs">
              {[
                { name: "Vietnamese", desc: "Phin-Filter Coffee + Condensed Milk", price: "₱130 – ₱150" },
                { name: "Ube Vietnamese", desc: "Phin-Filter Coffee + Ube", price: "₱150 – ₱180" },
                { name: "Coconut Vietnamese", desc: "Phin-Filter Coffee, Condensed + Coconut Syrup", price: "₱150 – ₱180" },
                { name: "Cafe De Olla", desc: "Traditional Mexican Coffee", price: "₱130 – ₱150" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start border-b border-neutral-900 pb-2">
                  <div>
                    <p className="text-white font-medium text-sm">{item.name}</p>
                    <p className="text-neutral-500">{item.desc}</p>
                  </div>
                  <span className="font-mono text-neutral-300">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Coffee & Customizations */}
          <div className="space-y-6">
            <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-widest border-b border-neutral-800 pb-2">
              NON-COFFEE &amp; ADD-ONS
            </h3>
            <div className="space-y-4 text-xs">
              {[
                { name: "BLVNK Matcha", desc: "Matcha + Milk", price: "₱140 – ₱160" },
                { name: "Choco Milk / Milky Ube", desc: "Chocolate or Ube + Milk", price: "₱120 – ₱140" },
                { name: "Upgrade to Oat Milk", desc: "Milk Swap", price: "+ ₱30" },
                { name: "Extra Espresso Shot", desc: "Add Shot", price: "+ ₱50" },
                { name: "Extra Sauce / Syrup", desc: "Flavors", price: "+ ₱5 / ₱10" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-start border-b border-neutral-900 pb-2">
                  <div>
                    <p className="text-white font-medium text-sm">{item.name}</p>
                    <p className="text-neutral-500">{item.desc}</p>
                  </div>
                  <span className="font-mono text-neutral-300">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-4 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-500 border-t border-neutral-900">
        <div>
          <p className="text-neutral-300 font-medium">BLVNK COFFEE ROASTERY &amp; SLOWBAR</p>
          <p>© {new Date().getFullYear()} All rights reserved. Maramba Blvd, Lingayen, Pangasinan.</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/blvnkcoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> 
            Instagram
          </a>
          <a
            href="https://www.facebook.com/blvnkcoffee"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> 
            Facebook
          </a>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <MapPin className="w-4 h-4" /> Google Maps
          </a>
        </div>
      </footer>
    </main>
  );
}