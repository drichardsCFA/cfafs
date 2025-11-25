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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Help us empower agricultural communities nationwide.</p>
        </div>
      </section>
      <section className="section">
        <div className="container-narrow">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>Open Positions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
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
      <section className="section" style={{ background: 'var(--color-bg-alt)', textAlign: 'center' }}>
        <div className="container-narrow">
          <h2>Why Work With Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Competitive benefits, meaningful work, and a supportive team culture.</p>
          <Link href="/contact" className="btn btn-outline">Learn More</Link>
        </div>
      </section>
    </>
  );
}
