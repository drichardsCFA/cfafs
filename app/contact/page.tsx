// app/contact/page.tsx
import { Section, PageTitle } from "../components/Section";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section with Image */}
      <Section className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/fieldtablet.jpg"
            alt="Farmer with tablet in field"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-emerald-50">
            Reach out to discuss membership, financing programs, or partnership opportunities.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-xs text-slate-700">
            <div>
              <p className="font-semibold text-slate-900 mb-1">Phone</p>
              <p>816-214-4200</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-1">Email</p>
              <p>accountservices@cfafs.com</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-1">Physical Address</p>
              <p>The Cooperative Finance Association</p>
              <p>11500 North Ambassador Drive, Suite 300</p>
              <p>Kansas City, MO 64153</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-1">General Mail and Correspondence</p>
              <p>The Cooperative Finance Association</p>
              <p>PO Box 901532</p>
              <p>Kansas City, MO 64190-1532</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-1">Payment Address</p>
              <p>The Cooperative Finance Association</p>
              <p>PO Box 842702, 6th Floor Lockbox</p>
              <p>Kansas City, MO 64184-2702</p>
            </div>
          </div>
          <form 
            action="mailto:accountservices@cfafs.com" 
            method="POST" 
            encType="text/plain"
            className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-2">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-800 mb-2">
                  Organization
                </label>
                <input
                  name="organization"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="Cooperative or business"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-800 mb-2">
                How can we help?
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                placeholder="Share a bit about your financing needs, membership interest, or questions."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
