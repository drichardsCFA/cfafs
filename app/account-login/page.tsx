// app/account-login/page.tsx
import Link from "next/link";
import { Section, PageTitle } from "../components/Section";

export default function AccountLoginPage() {
  return (
    <>
      <Section>
        <PageTitle
          eyebrow="Account Access"
          title="Account Login"
        />
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl space-y-8">
          {/* Notice */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-900">
              Notice
            </div>
            <p className="text-sm leading-relaxed text-slate-700">
              If you have not logged into the CFA online portal since May 1, 2023, 
              your previous login information will no longer work and you will need 
              to contact us at{" "}
              <a href="mailto:accountservices@cfafs.com" className="font-semibold text-emerald-800 hover:underline">
                accountservices@cfafs.com
              </a>
              , or by calling{" "}
              <a href="tel:877-835-5232" className="font-semibold text-emerald-800 hover:underline">
                877-835-5232
              </a>
              , and use extension 8 for a new login. This process is required as 
              CFA has moved its online platform.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              Thank you for your interest in using CFA for your financing needs and 
              we look forward to working with you in the future.
            </p>
          </div>

          {/* Login Options */}
          <div>
            <p className="mb-4 text-sm text-slate-600">
              Please select the appropriate option based on your access level.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="https://grower.cfafs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center rounded-xl border-2 border-emerald-800 bg-emerald-900 p-8 text-center shadow-sm transition hover:bg-emerald-800 hover:shadow-md"
              >
                <div className="text-lg font-semibold text-white">
                  I am a grower
                </div>
                <div className="mt-2 text-xs text-emerald-100">
                  Access grower portal
                </div>
              </a>
              <a
                href="https://dealer.cfafs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center rounded-xl border-2 border-emerald-800 bg-emerald-900 p-8 text-center shadow-sm transition hover:bg-emerald-800 hover:shadow-md"
              >
                <div className="text-lg font-semibold text-white">
                  I am a dealer
                </div>
                <div className="mt-2 text-xs text-emerald-100">
                  Access dealer portal
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
