export const metadata = {
  title: "Become a Member | Cooperative Finance Association (CFAFS)",
  description:
    "Learn how to join CFAFS, access exclusive finance solutions, and strengthen your agribusiness with the power of membership.",
};
export default function MembershipPage() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--neutral-50)'}}>
      <section className=" max-w-4xl mx-auto text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          CFAFS Membership
        </h1>
        <p className="mt-6 mb-8 text-xl text-[#495464]" style={{ fontFamily: "Lato, Arial, sans-serif" }}>
          ***The Cooperative Finance Association (CFA) is the nation's leading cooperatively owned provider of crop input finance products in the country. CFA has provided reliable financial products and services to the agricultural industry since 1943. Working exclusively with agricultural cooperatives for over 80 years gives us a superior understanding of the operational issues and financing requirements of your customers. CFA offers a full range of financial products and services to agricultural cooperatives and their customers. Our membership-based services include operating and term loans, single-purpose inventory financing, point-of-sale production agriculture financing, and more.
        </p>
        <a
          href="#benefits"
          className="cta-btn text-lg shadow-md"
        >
          View Benefits
        </a>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="max-w-5xl mx-auto px-4 py-3 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="rounded-2xl bg-white border shadow-sm p-7 flex flex-col items-center hover:shadow-md transition-all min-h-[210px]"
          >
            <img
              src={`/images/benefit-icon${n}.svg`}
              alt={`Benefit icon ${n}`}
              className="mb-4"
              style={{ width: 54, height: 54, objectFit: 'contain', background: "#e5f6f5", borderRadius: 12 }}
            />
            <h2 className="font-bold text-xl mb-2" style={{ color: "#5CA4EA", fontFamily: "Montserrat,Arial,sans-serif" }}>
              {["Exclusive Rates", "Trusted Guidance", "Community Support"][n - 1]}
            </h2>
            <p className="leading-relaxed text-[#495464]" style={{ fontFamily: "Lato,Arial,sans-serif" }}>
              {["***CFA provides the best possible market rates through our many strategic business partnerships. CFA stays on the cutting edge of the market using technical insights and market agility.", "***With over 80 years in the industry and 50 years partnering with CoBank, CFA can provide the stability and trust you are looking for in a lending partner. Our commmitment to financial success, security, and customer service is unmatched in the industry.", "***CFA delivers tailored financing options designed to empower rural communities and advance cooperative principles. Our cooperative exists to serve the needs of agricultural producers and the cooperatives that are the beneficial owners of CFA. We strive to make a positive impact within our member’s communities, strengthening rural America."][n-1]}
            </p>
          </div>
        ))}
      </section>

      {/* How Membership Works: Steps */}
      <section className="bg-[#F7F7F2] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-[#4F7942]" style={{fontFamily:"Montserrat,Arial,sans-serif"}}>
            How Membership Works
          </h2>
          <ol className="relative border-l-2 border-[#4F7942]/60 pl-7 space-y-8">
            <li>
              <span className="absolute -left-[1.40em] flex items-center justify-center w-8 h-8 bg-[#FFC857] rounded-full font-extrabold text-[#4F7942] shadow-md">1</span>
              <span className="font-semibold text-[#4F7942] block mb-2" style={{fontFamily:"Montserrat,Arial,sans-serif"}}>Get A Demo</span>
              <span className="text-[#495464]">Let one of our representatives show you what CFA can provide for your cooperative and members.</span>
            </li>
            <li>
              <span className="absolute -left-[1.40em] flex items-center justify-center w-8 h-8 bg-[#5CA4EA] rounded-full font-extrabold text-[#495464] shadow-md">2</span>
              <span className="font-semibold text-[#5CA4EA] block mb-2" style={{fontFamily:"Montserrat,Arial,sans-serif"}}>Apply Online</span>
              <span className="text-[#495464]">Eligibility is limited to agricultural cooperatives with a Class A Common Stock purchase of $2,000.</span>
            </li>
            <li>
              <span className="absolute -left-[1.40em] flex items-center justify-center w-8 h-8 bg-[#4F7942] rounded-full font-extrabold text-[#FFC857] shadow-md">3</span>
              <span className="font-semibold text-[#4F7942] block mb-2" style={{fontFamily:"Montserrat,Arial,sans-serif"}}>Enjoy Benefits</span>
              <span className="text-[#495464]">Enjoy access to CFA's wide range of financial products and services. A substantial portion of our earnings are also returned to our members as a patronage refund.</span>
            </li>
          </ol>
        </div>
      </section>

      <section className="section bg-[#F7F7F2]">
        <div className="container">
          <div className="grid grid-cols-2">
            <div style={{ textAlign: 'center' }}>
              <h3>
                Mission
              </h3>
              <p>
                Founded in 1943, CFA has a rich history of supporting American agriculture.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>History</h3>
              <p>
                Founded in 1943, CFA has a rich history of supporting American agriculture.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>
                Mission
              </h3>
              <p>
                Founded in 1943, CFA has a rich history of supporting American agriculture.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>History</h3>
              <p>
                Founded in 1943, CFA has a rich history of supporting American agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="flex justify-center py-12">
        <a href="/account-login" className="cta-btn text-lg shadow-lg px-11 py-4">
          Sign Up / Member Login
        </a>
      </section>
    </main>
  );
}
