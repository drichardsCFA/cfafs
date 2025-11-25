import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>America's Largest Input Financer for Agriculture</h1>
          <p>
            Empowering agricultural cooperatives and retailers since 1943 with flexible financial solutions, 
            competitive rates, and unwavering commitment to your success.
          </p>
          <div className="hero-buttons">
            <Link href="/membership" className="btn btn-primary">Become a Member</Link>
            <Link href="/loans" className="btn btn-secondary">Explore Products</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>Financial Solutions Built for Agriculture</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Flexible Loan Products</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tailored financial products 
                designed specifically for the agricultural industry's unique seasonal needs.
              </p>
              <Link href="/loans" style={{ fontWeight: 600 }}>Learn More →</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Competitive Rates</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Access industry-leading 
                interest rates and flexible terms that work for your business.
              </p>
              <Link href="/loans" style={{ fontWeight: 600 }}>View Rates →</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Member Benefits</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enjoy patronage dividends, 
                expert support, and ownership in a cooperative that prioritizes your success.
              </p>
              <Link href="/membership" style={{ fontWeight: 600 }}>Join Today →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <h2>Trusted by Agricultural Leaders Nationwide</h2>
          <p style={{ maxWidth: 700, margin: '0 auto var(--space-5)', textAlign: 'center' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Over 80 years of proven reliability, 
            security, and partnership with agricultural cooperatives across the nation.
          </p>
          <div className="trust-badges">
            <div className="trust-badge">
              <div className="badge-icon">🔒</div>
              <h4>SOC 2 Certified</h4>
              <p>Enterprise security</p>
            </div>
            <div className="trust-badge">
              <div className="badge-icon">⭐</div>
              <h4>80+ Years</h4>
              <p>Industry experience</p>
            </div>
            <div className="trust-badge">
              <div className="badge-icon">🌾</div>
              <h4>$100M+</h4>
              <p>Loans originated</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2>Ready to Get Started?</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: 'var(--space-5)' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join hundreds of agricultural 
            cooperatives who trust us for their financing needs.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            <Link href="/field-finance#demo" className="btn btn-outline">Request a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
