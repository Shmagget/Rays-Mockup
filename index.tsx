import { createFileRoute } from "@tanstack/react-router";
import mofoBurger from "@/assets/mofo-burger.jpg";
import draftBeer from "@/assets/draft-beer.jpg";
import historyBooth from "@/assets/history-booth.jpg";
import historyNeon from "@/assets/history-neon.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ray's Place — Kent, Ohio | Est. 1937" },
      {
        name: "description",
        content:
          "Three floors of history, one legendary MOFO burger, and the coldest beer in Kent. Ray's Place has been Kent, Ohio's gathering tradition since 1937.",
      },
      { property: "og:title", content: "Ray's Place — Kent, Ohio | Est. 1937" },
      {
        property: "og:description",
        content: "The legendary MOFO burger, 64 rotating drafts, and 88 years of Kent history.",
      },
    ],
  }),
  component: HomePage,
});

const NAV = [
  { label: "The Menu", href: "#menu" },
  { label: "Drafts", href: "#drafts" },
  { label: "Stories", href: "#stories" },
  { label: "Awards", href: "#awards" },
  { label: "Location", href: "#location" },
];

const AWARDS = [
  "Best Burger 2023",
  "Top 50 College Bars in USA",
  "Kent History Landmark",
  "Best Draft Selection",
  "Featured on Food Network",
  "88 Years on Franklin Ave",
];

function HomePage() {
  return (
    <div className="min-h-screen bg-rays-bg text-rays-ink selection:bg-rays-red selection:text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b-4 border-rays-ink bg-rays-bg/95 px-6 py-4 backdrop-blur-sm">
        <a href="#" className="font-display text-2xl uppercase tracking-tighter text-rays-red animate-rays-flicker">
          Ray's
        </a>
        <div className="hidden gap-8 font-mono text-[11px] uppercase tracking-widest md:flex">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="transition-colors hover:text-rays-red">
              {n.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="cursor-pointer bg-rays-ink px-4 py-1.5 font-display text-sm uppercase tracking-wider text-rays-bg transition-colors hover:bg-rays-red">
            Order Now
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger
              aria-label="Open menu"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center border-2 border-rays-ink bg-rays-bg text-rays-ink transition-colors hover:bg-rays-ink hover:text-rays-bg focus:outline-none"
            >
              <Menu className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={12}
              className="w-64 rounded-none border-4 border-rays-ink bg-rays-bg p-0 text-rays-ink"
            >
              <DropdownMenuLabel className="border-b-2 border-rays-ink bg-rays-red px-4 py-3 font-display text-base uppercase tracking-wider text-white">
                Find Your Way
              </DropdownMenuLabel>
              {NAV.map((n) => (
                <DropdownMenuItem
                  key={n.label}
                  asChild
                  className="rounded-none px-4 py-3 font-mono text-[11px] uppercase tracking-widest focus:bg-rays-ink focus:text-rays-bg"
                >
                  <a href={n.href}>{n.label}</a>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator className="my-0 h-0.5 bg-rays-ink" />
              <div className="space-y-1 bg-rays-ink px-4 py-4 text-rays-bg">
                <div className="font-display text-lg uppercase text-rays-gold">Ray's Place</div>
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-80">
                  135 Franklin Ave<br />
                  Kent, OH 44240<br />
                  (330) 673-2233
                </div>
                <div className="mt-2 border-t border-white/20 pt-2 font-mono text-[10px] uppercase tracking-widest opacity-70">
                  Mon–Sat 11a–11p<br />
                  Sun 12p–10p
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative border-b-4 border-rays-ink">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="flex flex-col justify-center border-r-0 border-b-4 border-rays-ink bg-rays-red p-8 text-white lg:col-span-7 lg:border-r-4 lg:border-b-0 lg:p-16">
            <div className="animate-rays-slide">
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.4em] opacity-80">
                Kent, Ohio • Est. 1937
              </div>
              <h1 className="mb-8 font-display text-[18vw] uppercase leading-[0.85] tracking-tighter lg:text-[12vw]">
                The<br />Legend<br />Returns
              </h1>
              <p className="max-w-[40ch] text-lg font-medium leading-relaxed opacity-90">
                Three floors of history, one legendary burger, and the coldest beer in the county. Welcome home to Ray's.
              </p>
            </div>
          </div>
          <div className="relative bg-rays-gold lg:col-span-5">
            <img
              src={mofoBurger}
              alt="The legendary MOFO double cheeseburger"
              width={896}
              height={1152}
              className="h-full min-h-[420px] w-full object-cover mix-blend-multiply contrast-125 grayscale"
            />
            <div className="absolute bottom-8 right-8 w-48 rotate-3 bg-rays-ink p-6 text-rays-bg shadow-2xl">
              <div className="mb-1 font-display text-3xl leading-none">SINCE '37</div>
              <div className="font-mono text-[10px] uppercase tracking-tight opacity-70">
                Always open. Always Ray's.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Ticker */}
      <div id="awards" className="overflow-hidden whitespace-nowrap border-b-4 border-rays-ink bg-rays-ink py-3 text-white">
        <div className="flex w-max animate-rays-marquee gap-12 px-4 font-mono text-[10px] uppercase tracking-[0.3em]">
          {[...AWARDS, ...AWARDS].map((a, i) => (
            <span key={i}>★ {a}</span>
          ))}
        </div>
      </div>

      {/* Menu */}
      <section id="menu" className="grid grid-cols-1 items-start gap-16 bg-rays-surface p-8 lg:grid-cols-2 lg:p-24">
        <div className="animate-rays-slide [animation-delay:200ms]">
          <h2 className="mb-8 inline-block border-b-8 border-rays-red pr-4 font-display text-5xl uppercase lg:text-6xl">
            The Main Event
          </h2>
          <div className="space-y-12">
            {[
              { name: "The MOFO Burger", price: "$14.50", desc: "The local icon. Half-pound of proprietary blend beef, double cheese, secret sauce, and a mountain of fries." },
              { name: "Ray's Famous Wings", price: "$12.00", desc: "Jumbo wings tossed in our house-made spicy garlic or gold mustard sauce." },
              { name: "Smokehouse Mac", price: "$11.00", desc: "Cavatappi, four-cheese béchamel, smoked brisket, crisp panko crust." },
            ].map((item) => (
              <div key={item.name} className="group cursor-default">
                <div className="mb-2 flex items-end justify-between gap-4">
                  <h3 className="font-display text-2xl uppercase transition-colors group-hover:text-rays-red lg:text-3xl">
                    {item.name}
                  </h3>
                  <span className="font-mono text-xl">{item.price}</span>
                </div>
                <p className="leading-relaxed text-rays-ink/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 animate-rays-slide [animation-delay:400ms]">
          <div className="aspect-square border-4 border-rays-ink bg-white p-2">
            <img src={draftBeer} alt="Cold draft beer on the bar" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div id="drafts" className="bg-rays-ink p-8 text-rays-bg">
            <h4 className="mb-2 font-display text-xl uppercase text-rays-gold">On Tap Today</h4>
            <p className="mb-4 text-sm opacity-80">
              64 rotating handles featuring the best of Ohio craft and the domestic classics that built this town.
            </p>
            <button className="cursor-pointer border border-rays-bg/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all hover:bg-rays-bg hover:text-rays-ink">
              View Live Tap List
            </button>
          </div>
        </div>
      </section>

      {/* Memory Lane */}
      <section id="stories" className="overflow-hidden border-t-4 border-rays-ink bg-white">
        <div className="flex flex-col lg:flex-row">
          <div className="border-b-4 border-rays-ink p-8 lg:w-1/3 lg:border-b-0 lg:border-r-4 lg:p-12">
            <h2 className="mb-6 font-display text-5xl uppercase leading-none">Memory<br />Lane</h2>
            <p className="mb-6 text-sm italic leading-relaxed">
              "I met my wife at Ray's in '74. We still come back every year for the same booth and a pitcher of cold gold."
            </p>
            <div className="font-mono text-[10px] uppercase tracking-widest">— Michael R., Class of '76</div>
            <a href="#" className="mt-8 inline-block border-b-2 border-rays-red pb-1 font-mono text-[11px] uppercase tracking-widest hover:text-rays-red">
              Read 88 Years of History →
            </a>
          </div>
          <div className="flex lg:w-2/3">
            <div className="flex-1 border-r-4 border-rays-ink">
              <img src={historyBooth} alt="Students laughing in a Ray's Place booth, circa 1970s" width={768} height={768} loading="lazy" className="h-full w-full object-cover grayscale transition-opacity hover:opacity-100 opacity-60" />
            </div>
            <div className="flex-1">
              <img src={historyNeon} alt="Vintage Ray's neon bar sign at night" width={768} height={768} loading="lazy" className="h-full w-full object-cover grayscale transition-opacity hover:opacity-100 opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="location" className="bg-rays-ink p-8 text-rays-bg lg:p-16">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="mb-6 font-display text-4xl uppercase text-rays-red">Ray's Place</div>
            <address className="font-mono text-sm not-italic leading-loose opacity-60">
              135 Franklin Avenue<br />
              Kent, Ohio 44240<br />
              (330) 673-2233
            </address>
          </div>
          <div className="space-y-2">
            <div className="mb-4 font-display text-xl uppercase">Kitchen Hours</div>
            <div className="flex justify-between border-b border-white/10 pb-1 font-mono text-[11px] uppercase">
              <span>Mon — Sat</span><span>11am — 11pm</span>
            </div>
            <div className="flex justify-between font-mono text-[11px] uppercase">
              <span>Sunday</span><span>12pm — 10pm</span>
            </div>
          </div>
          <div className="flex flex-col items-stretch md:items-end">
            <div className="mb-4 w-full bg-rays-red p-4 text-center font-display text-2xl uppercase tracking-wider text-white">
              See You At Ray's
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest opacity-40">
              © 1937 — 2026 Historic Franklin Ave.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
