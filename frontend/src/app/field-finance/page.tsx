import Link from "next/link";

export default function FieldFinancePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Field Finance Solutions</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Streamline your field operations with our comprehensive finance management platform.</p>
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
