// app/resources/page.tsx
import Link from "next/link";
import { Section } from "../components/Section";

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Careers at CFA
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-emerald-50">
            Join a team that's transforming agricultural finance through innovation, technology, and cooperative values.
          </p>
        </div>
      </Section>

      {/* About CFA */}
      <Section>
        <div className="max-w-4xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            About CFA
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            The Cooperative Finance Association (CFA) is a member-owned cooperative that provides innovative financial solutions to agricultural cooperatives and agribusinesses. We leverage cutting-edge financial technology and data-driven insights to support the success of our members and stakeholders. Our commitment to technology-driven solutions ensures that we stay at the forefront of financial services innovation while maintaining strong cooperative values.
          </p>
        </div>
      </Section>

      {/* Why CFA */}
      <Section className="bg-slate-50">
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Why Work at CFA?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We're building the future of agricultural finance. Join us and make an impact on rural communities nationwide.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-10 w-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Innovation-Driven",
                body: "Work with cutting-edge fintech, AI, and data analytics transforming agricultural finance.",
              },
              {
                icon: (
                  <svg className="h-10 w-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Cooperative Values",
                body: "Be part of a member-owned organization dedicated to serving agricultural communities.",
              },
              {
                icon: (
                  <svg className="h-10 w-10 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                title: "Growth & Impact",
                body: "Join one of the fastest-growing companies in ag finance, scaling from $525M to $4.3B.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center rounded-xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
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

      {/* Benefits */}
      <Section>
        <div className="space-y-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Compensation & Benefits
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              CFA offers a comprehensive package of compensation and benefits programs designed to attract, reward, and retain qualified individuals.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Financial Security",
                items: [
                  "Competitive base pay",
                  "Performance incentive structure",
                  "401(k) matching contributions",
                  "Retirement plan",
                ],
              },
              {
                title: "Health & Wellness",
                items: [
                  "Comprehensive health benefits",
                  "Wellness programs",
                  "Work-life balance initiatives",
                ],
              },
              {
                title: "Time Off",
                items: [
                  "Paid time off",
                  "Paid holidays",
                  "Flexible scheduling options",
                ],
              },
              {
                title: "Professional Development",
                items: [
                  "Training programs",
                  "Career advancement opportunities",
                  "Continuing education support",
                ],
              },
              {
                title: "Community Involvement",
                items: [
                  "Volunteer opportunities",
                  "Community engagement programs",
                  "Support for local initiatives",
                ],
              },
              {
                title: "Modern Workplace",
                items: [
                  "Collaborative environment",
                  "Latest technology tools",
                  "Innovation-focused culture",
                ],
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6"
              >
                <h3 className="text-base font-semibold text-emerald-900">
                  {benefit.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {benefit.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <svg className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-slate-900 to-emerald-950">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Ready to Join Our Team?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            We're always looking for talented individuals who share our passion for innovation and cooperative values.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-emerald-500 transition-colors"
          >
            Get in Touch
          </Link>
          <p className="mt-6 text-sm text-slate-400">
            Contact us to learn about current opportunities
          </p>
        </div>
      </Section>
    </>
  );
}
