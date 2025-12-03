export const metadata = {
  title: "SOC II & Certifications | CFAFS",
  description: "Learn about CFAFS&apos;s SOC II compliance, certifications, and privacy practices.",
};

export default function SocIIPage() {
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      <section className="max-w-4xl mx-auto text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          SOC II & Certifications
        </h1>
        <p className="mt-6 mb-8 text-xl text-[#495464]" style={{ fontFamily: "Lato, Arial, sans-serif" }}>
          ***Our belief is that technology is a vital tool for nearly every business to maintain an efficient workflow. The Cooperative Finance Association is embracing and utilizing technology to deliver its products and services completely electronically, streamlining the process for its members as it serves as a reliable lender for the agricultural industry. With that belief, security is our highest priority.
        </p>
        <div className="rounded-2xl bg-white border shadow-sm p-7 flex flex-col items-center hover:shadow-md transition-all min-h-[210px]">
          <h2 className="font-bold text-xl mb-2" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
            Why SOC II Matters
          </h2>
          <p className="leading-relaxed text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
            ***Currently, CFA is undertaking a technology platform update, which will prioritize the security of its customers while making the application easier to navigate on all devices. The association also modernized its signature collection process—now allowing co-op customers to obtain customer signatures electronically. With this transition, our members can be assured of the security of our platform after achieving this certification in early 2025.
          </p>
        </div>
        <div className="rounded-2xl bg-white border shadow-sm p-7 flex flex-col items-center hover:shadow-md transition-all min-h-[210px] mt-8">
          <h2 className="font-bold text-xl mb-2" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
            Privacy Practices
          </h2>
          <p className="leading-relaxed text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
            ***SOC 2 Type II Certified: The Cooperative Finance Association is proud to have achieved our SOC 2 Type II certification, demonstrating our ongoing commitment to the highest standards of security, availability, and data protection. This independent audit validates that our internal controls and processes are not only well-designed but also effectively operated over time—ensuring your data is handled with trust, transparency, and integrity. We are committed to maintaining this standard and will continue to pursue SOC 2 Type II certification on an annual basis.
          </p>
        </div>
      </section>
    </main>
  );
} 