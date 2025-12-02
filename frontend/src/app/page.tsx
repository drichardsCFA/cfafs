"use client";

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
            <Link href="#membership" className="btn btn-primary">Become a Member</Link>
            <Link href="#products" className="btn btn-secondary">Explore Products</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="products" className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>Financial Solutions Built for Agriculture</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/icon-loans.svg" alt="" style={{ width: 32, height: 32, filter: 'brightness(0) invert(1)' }} />
              </div>
              <h3>Flexible Loan Products</h3>
              <p>
                Tailored financial products designed specifically for the agricultural industry's unique seasonal needs and cash flow cycles.
              </p>
              <Link href="#loan-products" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Learn More →</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/icon-rates.svg" alt="" style={{ width: 32, height: 32, filter: 'brightness(0) invert(1)' }} />
              </div>
              <h3>Competitive Rates</h3>
              <p>
                Access industry-leading interest rates and flexible terms that work for your business with transparent pricing.
              </p>
              <Link href="#loan-products" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>View Rates →</Link>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/images/icon-members.svg" alt="" style={{ width: 32, height: 32, filter: 'brightness(0) invert(1)' }} />
              </div>
              <h3>Member Benefits</h3>
              <p>
                Enjoy patronage dividends, expert support, and ownership in a cooperative that prioritizes your success.
              </p>
              <Link href="#membership" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Join Today →</Link>
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

      {/* Membership Section */}
      <section id="membership" className="section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>Become a CFA Member</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Member Benefits</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Competitive financing rates', 'Patronage dividends', 'Expert agricultural finance support', 'Flexible loan terms', 'Member ownership'].map((benefit) => (
                  <li key={benefit} style={{ marginBottom: 'var(--space-md)', paddingLeft: 'var(--space-lg)', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)', fontWeight: 700 }}>✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>How to Join</h3>
              <p>Membership is open to agricultural cooperatives and agribusinesses. Our team will guide you through a simple application process.</p>
              <Link href="#contact" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>Apply for Membership</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team Section */}
      <section id="executive-team" className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>Leadership Team</h2>
          <div className="grid grid-3">
            {['CEO', 'CFO', 'COO'].map((title) => (
              <div key={title} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'var(--neutral-200)', margin: '0 auto var(--space-lg)' }} />
                <h4>Executive Name</h4>
                <p style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{title}</p>
                <p style={{ fontSize: '0.9375rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leading CFA with decades of agricultural finance experience.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section id="board" className="section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>Board of Directors</h2>
          <div className="grid grid-3">
            {['Board Chair', 'Vice Chair', 'Secretary', 'Treasurer', 'Director', 'Director'].map((role, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--neutral-200)', margin: '0 auto var(--space-md)' }} />
                <h4>Director Name</h4>
                <p style={{ color: 'var(--color-primary)', fontWeight: 500, fontSize: '0.875rem' }}>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2>Get in Touch</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: 'var(--space-3xl)' }}>
            Ready to partner with CFA? Our team is here to answer your questions and help you get started.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            <Link href="/field-finance#demo" className="btn btn-secondary">Request a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
