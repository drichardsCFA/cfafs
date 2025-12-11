import Link from "next/link";

export const metadata = {
  title: "SOC II & Certifications | CFAFS",
  description: "Learn about CFAFS&apos;s SOC II compliance, certifications, and privacy practices.",
};

export default function SocIIPage() {
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      <section className="hero section">
        <div className="container">
          <div>
            <h1>Security and Certifications</h1>
            <p>
              "This accomplishment is a direct result of our team's hard work and shared vision. SOC 2 Type 2 compliance is not just about meeting a standard, it's about demonstrating our ongoing commitment to protecting our clients' data and ensuring operational integrity. This achievement reinforces our position as a trusted partner in agricultural financing."
            </p>
            <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: 'var(--space-sm)', marginTop: '10px' }}>
              Jordan Nussbaum - Chief Security Officer
            </p>
          </div>
        </div>
      </section>
      <section classname="">
        
      </section>
      <section className="max-w-4xl mx-auto text-center py-10 px-4">
        <div className="rounded-2xl bg-white border shadow-sm p-7 flex flex-col items-center hover:shadow-md transition-all min-h-[210px]">
          <h2 className="font-bold text-xl mb-2" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
            SOC 2 Type II Certified
          </h2>
          <p className="leading-relaxed text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
            The Cooperative Finance Association is proud to have achieved our SOC 2 Type II certification, demonstrating our ongoing commitment to the highest standards of security, availability, and data protection. This independent audit validates that our internal controls and processes are not only well-designed but also effectively operated over time—ensuring your data is handled with trust, transparency, and integrity.
          </p>
          <p className="leading-relaxed text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
            We are committed to maintaining this standard and will continue to pursue SOC 2 Type II certification on an annual basis.
          </p>
          <Link target="_blank" href="https://www.prnewswire.com/news-releases/cfa-achieves-soc-2-type-2-certification-cementing-leadership-in-agricultural-input-financing-302427129.html" className="btn btn-primary" style={{ textAlign: 'center' }}>
            Learn More
          </Link>
        </div>
        <div className="rounded-2xl bg-white border shadow-sm p-7 flex flex-col items-center hover:shadow-md transition-all min-h-[210px] mt-8">
          <h2 className="font-bold text-xl mb-2" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
            Privacy Practices
          </h2>
          <p className="leading-relaxed text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
            The successful completion of this certification reflects CFA's dedication to continuous improvement and collaboration. It highlights the organization's ability to adapt to evolving regulatory requirements while maintaining its focus on delivering exceptional value to clients.
          </p>
          <Link href="/privacy" className="btn btn-primary" style={{ textAlign: 'center' }}>
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
} 