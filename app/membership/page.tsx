// app/membership/page.tsx
import { Section, PageTitle } from "../components/Section";
import Link from "next/link";

export default function MembershipPage() {
  return (
    <>
      {/* Hero with background image */}
      <Section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 to-emerald-800">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/tractorfamily.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Membership
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-emerald-50">
            As a co-op, CFA is committed to the long-term financial success of our members. From flexible loans to hands-on support, we provide reliable products that exceed expectations. Additionally, we give our members the opportunity to offer custom Production Ag Loans to their member-owners in order to support their need for additional funding for their farming enterprises.
          </p>
        </div>
      </Section>

      {/* Eligibility and Membership Details */}
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Eligibility
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                CFA membership is exclusive to agricultural cooperatives. To become a member, one must purchase a Class A Common Stock share for $2,000.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                Base Capital Plan
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                CFA has established a Base Capital Plan for the purpose of obtaining the equity capital needed for its business. A minimal stock investment of $2,000 is required for most financial commitments.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-emerald-950/40 p-5">
            <div 
              className="h-full min-h-[400px] rounded-xl bg-cover bg-center"
              style={{ backgroundImage: "url('/images/handshake.png')" }}
            />
          </div>
        </div>
      </Section>

      {/* Patronage - Featured Section */}
      <Section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Patronage
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            CFA conducts the majority of its business on a patronage basis. A substantial portion of our annual earnings are returned to our members as a patronage refund. The patronage refund consists of both cash and Class B Common Stock.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3">
            <svg className="h-6 w-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-lg font-semibold text-white">Member-Owned, Member-Focused</span>
          </div>
        </div>
      </Section>

      {/* Products and Services */}
      <Section>
        <div className="space-y-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Products and Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Members have full access to CFA's wide range of financial products and services, including commercial agribusiness loans and input finance loans. Additionally, our member cooperatives can offer dedicated financing options to their customers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-8 w-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Commercial Loans",
                body: "Operating loans, term loans, and specialty lending products tailored to cooperative operations.",
              },
              {
                icon: (
                  <svg className="h-8 w-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Input Finance",
                body: "Simpli-Fi and other production ag financing programs for your grower members.",
              },
              {
                icon: (
                  <svg className="h-8 w-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Dedicated Support",
                body: "Regional portfolio managers and expert guidance for your cooperative's unique needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-slate-900">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Interested in Applying for CFA Membership?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Get in touch with one of our regional portfolio managers.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-500 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </Section>
    </>
  );
}
