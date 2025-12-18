// app/solutions/page.tsx
import { Section, PageTitle } from "../components/Section";

export default function SolutionsPage() {
  return (
    <div className="relative pb-96">
      {/* Wheat field background - scrolls with page */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[500px] pointer-events-none"
        style={{
          backgroundImage: "url('/images/wheatfield.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)',
        }}
      />
      
      <div className="relative z-10">
      <Section>
        <PageTitle
          eyebrow="Loan Products"
          title="Financing for agricultural cooperatives and producers"
          description="CFA provides input finance and commercial lending programs aligned with seasonal cash flows, cooperative balance sheets, and the needs of rural communities."
        />
      </Section>

      {/* Current Interest Rates */}
      <Section className="bg-emerald-50">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            Current Interest Rates
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-emerald-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-emerald-900">
                Simpli-Fi by CFA Field Finance Rate
              </h3>
              <div className="mt-3 text-3xl font-bold text-emerald-800">8.00%</div>
              <p className="mt-1 text-sm font-medium text-slate-600">Variable</p>
              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                Interest Rate for CFA Input Finance Loans Booked for the 2024, 2025 and 2026 Crop Years.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Interest Rate as of November 1, 2025.
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-emerald-900">
                CFA Input Advantage Rate
              </h3>
              <div className="mt-3 text-3xl font-bold text-emerald-800">10.00%</div>
              <p className="mt-1 text-sm font-medium text-slate-600">Variable</p>
              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                Interest Rate for CFA Input Finance Loans Booked Prior to the 2024 Crop Year.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Interest Rate as of November 1, 2025.
              </p>
            </div>
            <div className="rounded-xl border border-emerald-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-emerald-900">
                CFA Base Rate for Commercial Loans
              </h3>
              <div className="mt-3 text-3xl font-bold text-emerald-800">7.75%</div>
              <p className="mt-1 text-sm font-medium text-slate-600">Variable</p>
              <p className="mt-4 text-xs leading-relaxed text-slate-600">
                Base interest rate for commercial lending products.
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Interest rate as of November 1, 2025.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-600 italic text-center">
            All Rates are Variable and Subject to Change at any time
          </p>
        </div>
      </Section>

      {/* Input Finance / Field Finance */}
      <Section id="input-finance">
        <div className="space-y-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Simpli-Fi by CFA
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              This loan is designed to provide financing for your agronomy and related services purchased at your local cooperative. The loan can be up to $1,000,000 based on information submitted in the Simpli-Fi by CFA Loan Application. The loan is simple to use as the loan application and loan documentation are combined into one document.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              CFA's input financing programs, supported by the Field Finance platform, help retailers and cooperatives offer competitive, convenient credit for crop inputs while managing risk and improving cash flow. Producers gain predictable terms and simplified borrowing, while cooperatives retain and deepen relationships in their trade area.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Features & benefits
            </h3>
            <dl className="mt-4 grid grid-cols-1 gap-3 text-xs text-slate-700 md:grid-cols-2">
              <div>
                <dt className="font-semibold text-slate-900">Convenient</dt>
                <dd className="mt-1">
                  Easy to apply, fast decisioning, and straightforward
                  documentation for retailers and producers.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Expert support</dt>
                <dd className="mt-1">
                  CFA provides onboarding, marketing materials, and training for
                  cooperative staff.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Comprehensive</dt>
                <dd className="mt-1">
                  Finance seed, crop protection, fertilizer, and other
                  production needs under one relationship.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">
                  Cost-effective
                </dt>
                <dd className="mt-1">
                  Delivers the advantages of a captive finance program without
                  the capital or infrastructure burden.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">
                  Competitive advantage
                </dt>
                <dd className="mt-1">
                  Customizable loan programs, promotions, and interest options
                  that help cooperatives compete and grow.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Flexible</dt>
                <dd className="mt-1">
                  Rate and maturity structures that can be aligned with your
                  marketing strategies and local agronomy calendar.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      {/* Commercial & cooperative loans */}
      <Section id="commercial-loans" className="bg-slate-50">
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Commercial & Cooperative Lending
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              CFA offers a comprehensive suite of commercial lending products designed for agricultural cooperatives, tailored to seasonal cash flows, cooperative balance sheets, and long-term growth.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Operating Loans
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                These commercial loans are revolving lines of credit available to finance the seasonal increases in supply inventory, grain inventory, hedging activities, receivables, and operating expenses.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Commercial loans are typically secured and may have either variable or fixed interest rates. Operating loans usually mature within 12 months.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Term Loans
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                This commercial lending product is used to finance real estate, facilities, equipment, vehicles, or permanent levels of current assets.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Term Loans may be either revolving or non-revolving, are typically secured with assets of the cooperative, and may have either variable or fixed interest rates. The repayment period will be matched to the useful life of the assets financed and to the cash flow to be generated.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 md:col-span-2">
              <h3 className="text-xl font-semibold text-slate-900">
                Specialty Lending
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                These loans are single-purpose loans to member cooperatives that have a borrowing relationship with another lender. The loans are used to provide deferred terms and fund 100% of inventory purchases.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Our Premier Specialty Loan is our best deferred-terms tool for financing invoices. The loan is a perpetual line of convenience credit subject to annual review.
              </p>
              <div className="mt-4 rounded-lg bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-900 mb-3">How it works:</p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Member cooperative selects the invoices to be financed</li>
                  <li>• CFA makes the payments to the suppliers</li>
                  <li>• The loan is due in full once a year</li>
                  <li>• Member cooperative chooses which month of the year you prefer to pay off the loan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
      </div>
    </div>
  );
}
