import Link from "next/link";

export const metadata = {
  title: "About CFA | America's Agricultural Finance Leader",
  description: "Discover how CFA has powered agricultural growth for over 80 years with innovative financing solutions.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Financial Services for Successful Agriculture</h1>
          <p>
            The Cooperative Finance Association partners with agricultural cooperatives and agribusinesses 
            to deliver customized input financing solutions. With over 80 years of industry experience, 
            we streamline credit access for growers and support stronger rural economies.
          </p>
          <div className="hero-buttons">
            <Link href="/membership" className="btn btn-primary">Become a Member</Link>
            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Mission & History Cards */}
      <section className="section bg-[#F7F7F2]">
        <div className="container">
          <div className="grid grid-2">
            <div className="card" style={{ margin: 'var(--space-md)' }}>
              <h3>Mission</h3>
              <p>
                The mission of CFA is to strengthen agriculture by providing reliable, flexible financing 
                solutions to cooperatives and their farmer-members. We are committed to supporting rural 
                communities through strategic partnerships, expert financial services, and innovative programs 
                that empower growers and agribusinesses to thrive.
              </p>
            </div>
            <div className="card" style={{ margin: 'var(--space-md)' }}>
              <h3>History</h3>
              <p>
                Founded in 1943, CFA has a rich history of supporting American agriculture. What began as 
                a cooperative effort to improve credit access for farmers has grown into a trusted financial 
                partner for agribusinesses nationwide, with over 80 years of experience in delivering 
                dependable input financing solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section" style={{ background: 'var(--neutral-50)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>Our Journey</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-xl)' }}>
            {[
              { year: '1943', label: 'Founded' },
              { year: '1980s', label: 'Input Finance Expansion' },
              { year: '2022', label: 'Field Finance Launch' },
              { year: '2025', label: '$4B in Commitments' }
            ].map((milestone) => (
              <div key={milestone.year} style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: 80, 
                  height: 80, 
                  borderRadius: '50%', 
                  background: 'var(--color-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto var(--space-md)',
                  color: 'var(--neutral-0)',
                  fontSize: '1.5rem',
                  fontWeight: 700
                }}>
                  {milestone.year}
                </div>
                <p style={{ margin: 0, fontWeight: 500 }}>{milestone.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#F7F7F2]">
        <div className="container " style={{ textAlign: 'center' }}>
          <h2>Ready to Partner with CFA?</h2>
          <p style={{ fontSize: '1.125rem', maxWidth: 600, margin: '0 auto var(--space-2xl)' }}>
            Join hundreds of agricultural cooperatives who trust CFA for their financing needs.
          </p>
          <Link href="/membership" className="btn btn-primary">Join CFA Today</Link>
        </div>
      </section>
    </>
  );
}
