import Link from "next/link";

export default function FieldFinancePage() {
  return (
    <>
      <section className="section hero">
        <div className="container">
          <h1>Field Finance Solutions</h1>
          <p>CFA's cutting-edge loan origination platform, has been a game-changer for agricultural retailers and producers. By streamlining the financing process and offering unparalleled flexibility, Field Finance empowers users to access tailored solutions that align with their operational needs. Request a demo today to learn more about our input financing products.</p>
          <div className="hero-buttons">
            <a href="#demo" className="btn btn-primary">Request Demo</a>
          </div>
        </div>
      </section>
      <section id="demo" className="section bg-[#F7F7F2]" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <h2>Request a Demo</h2>
          <p>
            Have our expert team give you a tour of our solutions. We have flexible options that can meet the needs of any agricultural portfolio. See how we can improve your input financing options.
          </p>
          <Link href="/contact" className="btn btn-primary">Schedule Demo</Link>
        </div>
      </section>
      <section className="section bg-[#F7F7F2]" style={{ background: 'var(--color-bg-alt)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 className="text-2xl font-bold mb-8 text-[#4F7942]" style={{fontFamily:"Montserrat,Arial,sans-serif"}}>
              Features and Benefits
            </h2>
          </div>
          <div className="grid grid-cols-2">
            <div style={{ textAlign: 'center' }}>
              <h3>
                Convenient
              </h3>
              <p>
                Easy to apply. Fast approval process. Simple loan documentation.              
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Expert Support</h3>
              <p>
                CFA provides ongoing marketing support and training to your staff.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>
                Comprehensive
              </h3>
              <p>
                Finance all agricultural production needs under one loan with CFA.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Cost-Effective</h3>
              <p>
                All of the advantages of a captive financing company without the cost of operation or capitalization. 
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>
                Competitive Advantage
              </h3>
              <p>
                Make your offering very desirable to the customer with easily customizable loan programs and interest subsidy matching.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3>Flexible</h3>
              <p>
                Competitive interest rate options and loan maturities to match your marketing needs. 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="support" className="section bg-[#F7F7F2]">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2>Support & Resources</h2>
          <p>
            Already a member? We are available with to help with any needs utilizing our products. Contact us for assistance from our expert support team.
          </p>
          <Link href="/contact" className="btn btn-primary">Contact Support</Link>
        </div>
      </section>
    </>
  );
}
