import Link from "next/link";

export const metadata = {
  title: "Become a Member | Cooperative Finance Association (CFAFS)",
  description:
    "Learn how to join CFAFS, access exclusive finance solutions, and strengthen your agribusiness with the power of membership.",
};
export default function MembershipPage() {
    const benefits = [
        {
      title: "Products and Services",
      description: "Members have full access to CFA’s wide range of financial products and services, including commercial agribusiness loans and input finance loans. Additionally, our member cooperatives can offer dedicated financing options to their customers.",
      icon: "/images/cog.svg",
      alt: "Products and Services Icon"
    },
    {
      title: "Patronage",
      description: "CFA conducts the majority of its business on a patronage basis. A substantial portion of our annual earnings are returned to our members as a patronage refund. The patronage refund consists of both cash and Class B Common Stock.",
      icon: "/images/money.svg",
      alt: "Expert Support Icon"      
    },
    {
      title: "Customer Service",
      description: "We provide your team with loan lifecycle support and training. Despite utilizing an all-electronic delivery model, CFA recognizes and adapts to its unique and traditional membership by communicating with members however they prefer.",
      icon: "/images/benefit-icon3.svg",
      alt: "Customer Service Icon"
    },
    {
      title: "Technological Innovation",
      description: "We put security and improving our product offerings as a top priority. By constantly reassessing our offerings and processes, we are able to reengineer our products and services to remain competitive in today's financial market. All of this is done with providing our memberss the highest quality offerings in a timely, convenient, and affordable manner.",
      icon: "/images/lightbulb.svg",
      alt: "Technological Innovations Icon"
    },
  ]
  return (
    <main className="min-h-screen">
      <section className="section mx-auto text-center py-10 px-4 hero">
        <div className="container">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
              CFAFS Membership
            </h1>
            <p className="mt-6 mb-8 text-xl text-[#495464]" style={{ fontFamily: "Lato, Arial, sans-serif" }}>
              The Cooperative Finance Association (CFA) is the nation's leading cooperatively owned provider of crop input finance products in the country. CFA has provided reliable financial products and services to the agricultural industry since 1943. Working exclusively with agricultural cooperatives for over 80 years gives us a superior understanding of the operational issues and financing requirements of your customers. Learn more about what CFA can provide your cooperative.              </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary" style={{ textAlign: 'center' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section id="benefits" className="section bg-[#F7F7F2]">
        <div className="container">
          <div className="max-w-5xl mx-auto px-4 py-3 pb-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  {["CFA provides the best possible market rates through our many strategic business partnerships. CFA stays on the cutting edge of the market using technical insights and market agility.", "With over 80 years in the industry and 50 years partnering with CoBank, CFA can provide the stability and trust you are looking for in a lending partner. Our commmitment to financial success, security, and customer service is unmatched in the industry.", "CFA delivers tailored financing options designed to empower rural communities and advance cooperative principles. Our cooperative exists to serve the needs of agricultural producers and the cooperatives that are the beneficial owners of CFA. We strive to make a positive impact within our member’s communities, strengthening rural America."][n-1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Membership Works: Steps */}
      <section className="section py-12 px-4">
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
          <div style={{ textAlign: 'center' }}>
            <h2 className="text-2xl font-bold mb-8 text-[#4F7942]" style={{fontFamily:"Montserrat,Arial,sans-serif"}}>
              Membership Benefits
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card">
                <img
                  src={benefit.icon}
                  alt={benefit.alt}
                  className="mb-4"
                  style={{ width: 54, height: 54, objectFit: 'contain', background: "#e5f6f5", borderRadius: 12 }}
                />
                <h3>{benefit.title}</h3>
                <p style={{ marginBottom: 'var(--space-md)' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
          {/*
            <div style={{ textAlign: 'center' }}>
              <h3>
                Products and Services
              </h3>
              <p>
                Members have full access to CFA’s wide range of financial products and services, including commercial agribusiness loans and input finance loans. Additionally, our member cooperatives can offer dedicated financing options to their customers.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Patronage</h3>
              <p>
                CFA conducts the majority of its business on a patronage basis. A substantial portion of our annual earnings are returned to our members as a patronage refund. The patronage refund consists of both cash and Class B Common Stock.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>
                Customer Service
              </h3>
              <p>
                We provide your team with loan lifecycle support and training. Despite utilizing an all-electronic delivery model, CFA recognizes and adapts to its unique and traditional membership by communicating with members however they prefer.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Technological Innovation</h3>
              <p>
                We put security and improving our product offerings as a top priority. By constantly reassessing our offerings and processes, we are able to reengineer our products and services to remain competitive in today's financial market. All of this is done with providing our memberss the highest quality offerings in a timely, convenient, and affordable manner.
              </p>
            </div>
          </div>
          */}
          <div style={{ textAlign: 'center', marginTop: 'var(--space-md)' }}>
            <Link href="/contact" className="btn btn-primary" style={{ textAlign: 'center' }}>
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
