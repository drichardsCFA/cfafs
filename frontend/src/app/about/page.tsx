import Link from "next/link";

export const metadata = {
  title: "About CFA | America's Agricultural Finance Leader",
  description: "Discover how CFA has powered agricultural growth for over 80 years with innovative financing solutions.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero section">
        <div className="container">
          <div className="grid grid-cols-2 w-full gap-6 content-left">
            <div className="content-left">
              <img
                src="images/handshake.png"
                alt="About Us Marketing Photo"
                style={{
                  width: 600,
                  height: 600,
                  objectFit: 'cover',
                  borderRadius: '50%',
                  margin: '0 auto var(--space-md)',
                  border: '4px solid var(--color-accent)',
                  background: '#e9ecef'
                }}
              />
            </div>
            <div>
              <h1>Financial Services for Successful Agriculture</h1>
              <p>
                At CFA we provide a full range of financial products and services to agricultural cooperatives and their members. Through strategic partnership, agribusiness insights, and technological innovation our cooperative provides you with industry leading customer service and value. Put your trust in CFA, the market leader in agriculture input financing. 
              </p>
              <div className="hero-buttons">
                <Link href="/membership" className="btn btn-primary">Become a Member</Link>
                <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
              </div>
            </div>
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
                CFA exists to serve the needs of agricultural producers and the cooperatives that are the beneficial owners of CFA. Success in today’s competitive financial services marketplace demands knowing our customers intimately and providing the services and products needed in a timely, convenient, and affordable manner. We focus our ongoing support to the local cooperative network in a partnership to achieve mutual goals and further common interests. Consistent financial performance provides attractive ownership returns through patronage and ensures CFA's ability to realize its long-term potential. A key element of this endeavor is to maintain a competent, committed, and versatile team of employees who are valued and accorded the highest professional regard and recognition.
              </p>
            </div>
            <div className="card" style={{ margin: 'var(--space-md)' }}>
              <h3>History</h3>
              <p>
                CFA began in 1943 as a collective effort to improve credit access for local farmers, to promote rural development and to increase agricultural productivity.
              </p>
              <p>
                Operating with 80+ years of experience, CFA offers dependable input financing solutions. Since our inception, we’ve grown into a trusted financial partner for farmers and agribusinesses while transforming into the largest input finance provider in agriculture.
              </p>
              <p>
                Yet throughout our unprecedented growth, we remain committed to the principles of the federated cooperative system via capital access, strategic partnerships, technologic innovations, and exceptional customer service to support our member cooperatives.
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
            CFA provides solutions for the needs of any sized agricultural cooperative. Whether it be some of the oldest and well established to growing and specialized organizations, we have a variety of solutions for your needs. Learn more about becoming a member to learn what services and products we can provide to add value to your cooperative and its members.
          </p>
          <Link href="/membership" className="btn btn-primary">Join CFA Today</Link>
        </div>
      </section>
    </>
  );
}
