import Link from "next/link";

export default function CareersPage() {
  const jobs = [
    { title: "Senior Loan Officer", location: "Kansas City, MO", type: "Full-time" },
    { title: "Financial Analyst", location: "Remote", type: "Full-time" },
    { title: "Customer Success Manager", location: "Kansas City, MO", type: "Full-time" }
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>The Cooperative Finance Association (CFA) is a member-owned cooperative that provides innovative financial solutions to agricultural cooperatives and agribusinesses. We leverage cutting-edge financial technology and data-driven insights to support the success of our members and stakeholders. Our commitment to technology-driven solutions ensures that we stay at the forefront of financial services innovation while maintaining strong cooperative values.</p>
        </div>
      </section>
      <section className="section">
        <div className="container-narrow">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}>Open Positions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            {jobs.map((job) => (
              <div key={job.title} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                <div>
                  <h3 style={{ marginBottom: 'var(--space-1)' }}>{job.title}</h3>
                  <p>{job.location} • {job.type}</p>
                </div>
                <Link href="/contact" className="btn btn-primary">Apply Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[#F7F7F2]" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <h2>Why Work With Us</h2>
          <p>CFA offers a package of compensation and benefits programs that support our efforts to attract, reward and retain qualified individuals. This package includes financial security (base pay + incentive pay structure, 401k matching contributions and retirement plan), paid time off, health benefits, community involvement, health & wellness and professional development</p>
          <Link href="/contact" className="btn btn-primary">Learn More</Link>
        </div>
      </section>
    </>
  );
}