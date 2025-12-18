// app/page.tsx
import Link from "next/link";
import { Section } from "./components/Section";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Section className="hero-section relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-800 text-white">
        {/* Animated background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-40 animate-slide-grid"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: '80px 80px'
            }}
          />
          {/* Pulsing orbs */}
          <div className="absolute inset-0 opacity-50 animate-pulse-slow">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl" />
            <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-emerald-300/10 rounded-full blur-2xl" />
          </div>
        </div>
        <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Cooperative input finance
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Agricultural finance for cooperatives and their growers.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-emerald-100 md:text-base">
              The Cooperative Finance Association provides input finance and
              commercial lending programs built specifically for agricultural
              cooperatives, retailers, and producers across the United States.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-emerald-900 shadow-sm hover:bg-emerald-50"
              >
                View financing solutions
              </Link>
              <Link
                href="/leadership"
                className="inline-flex items-center justify-center rounded-full border border-emerald-300/70 px-4 py-2 text-sm font-medium text-emerald-50 hover:bg-emerald-800/40"
              >
                Meet our leadership
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            {/* Hero image without overlay text */}
            <div className="rounded-2xl bg-emerald-950/30 p-5 shadow-lg shadow-emerald-950/30">
              <div className="h-48 rounded-xl bg-cover bg-center md:h-64"
                   style={{ backgroundImage: "url('/images/harvest.png')" }} />
            </div>
            
            {/* Stats card with tagline */}
            <div className="rounded-2xl bg-emerald-950/30 p-5 shadow-lg shadow-emerald-950/30">
              <div className="mb-4 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-200">
                  Rooted in agriculture since 1943
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-4 text-xs text-emerald-100 md:grid-cols-4">
                <div>
                  <dt className="font-semibold text-emerald-50">Years in ag finance</dt>
                  <dd className="mt-1 text-lg font-semibold text-white">80+</dd>
                </div>
                <div>
                  <dt className="font-semibold text-emerald-50">Member cooperatives</dt>
                  <dd className="mt-1 text-lg font-semibold text-white">200+</dd>
                </div>
                <div>
                  <dt className="font-semibold text-emerald-50">Portfolio</dt>
                  <dd className="mt-1 text-lg font-semibold text-white">$5B+</dd>
                </div>
                <div>
                  <dt className="font-semibold text-emerald-50">States served</dt>
                  <dd className="mt-1 text-lg font-semibold text-white">Nationwide</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* What we do */}
      <Section>
        <div className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Built for the cooperative system.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              CFA finances seasonal crop inputs, working capital, equipment, and
              real estate through programs tailored to agricultural
              cooperatives and the producers they serve.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Input Finance",
                body: "Flexible, customizable crop input financing that helps retailers deepen grower relationships while managing risk.",
                href: "/solutions#input-finance",
              },
              {
                title: "Commercial & Cooperative Loans",
                body: "Working capital, equipment, and real estate financing designed around cooperative balance sheets and cash flow.",
                href: "/solutions#commercial-loans",
              },
              {
                title: "Membership & Patronage",
                body: "Member ownership, patronage dividends, and long-term alignment with the cooperative network.",
                href: "/membership",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-5 text-left shadow-sm transition hover:-translate-y-[2px] hover:border-emerald-200 hover:bg-white hover:shadow-md"
              >
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {card.body}
                  </p>
                </div>
                <span className="mt-4 text-xs font-semibold text-emerald-800">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Cooperative & ag grounding */}
      <Section className="bg-gradient-to-b from-white via-emerald-50 to-emerald-900">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Cooperative by design. Focused on producers.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              CFA is owned by agricultural cooperatives and retailers and
              exists to strengthen rural communities. Our programs are built to
              support local agronomy, grain, and energy businesses while giving
              growers access to competitive, reliable credit.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-slate-700">
              <li>• Alignment with member cooperatives and their producers.</li>
              <li>• Programs structured around seasonal cash flows and crop timing.</li>
              <li>• Deep experience in agricultural risk and collateral.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-emerald-950/40 p-5">
            <div className="relative h-48 rounded-xl bg-cover bg-center md:h-56 overflow-hidden"
                 style={{ backgroundImage: "url('/images/centerpivotsunset.png')" }}>
              {/* Dark overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-slate-900">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Ready to talk about your financing needs?
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Connect with CFA to explore input finance and commercial lending
              options for your cooperative or agricultural business.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
          >
            Contact CFA
          </Link>
        </div>
      </Section>
    </>
  );
}
