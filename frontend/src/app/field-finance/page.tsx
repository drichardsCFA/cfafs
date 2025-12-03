import Link from "next/link";

export default function FieldFinancePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Field Finance Solutions</h1>
          <p>*** CFA's cutting-edge loan origination platform, has been a game-changer for agricultural retailers and producers. By streamlining the financing process and offering unparalleled flexibility, Field Finance empowers users to access tailored solutions that align with their operational needs. The SOC 2 Type 2 certification further enhances Field Finance by providing clients with the assurance that their data is protected by industry-leading security measures.</p>
          <div className="hero-buttons">
            <a href="#demo" className="btn btn-primary">Request Demo</a>
            <a href="#support" className="btn btn-secondary">Get Support</a>
          </div>
        </div>
      </section>
      <section id="demo" className="section" style={{ background: 'var(--color-bg-alt)', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2>Request a Demo</h2>
          <p>Lorem ipsum dolor sit amet. See how Field Finance can transform your operations.</p>
          <Link href="/contact" className="btn btn-primary">Schedule Demo</Link>
        </div>
      </section>
      <section id="support" className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2>Support & Resources</h2>
          <p>Lorem ipsum dolor sit amet. Get help from our expert support team.</p>
          <Link href="/contact" className="btn btn-outline">Contact Support</Link>
        </div>
      </section>
    </>
  );
}
