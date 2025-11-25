import Link from "next/link";

export default function NewsPage() {
  const articles = [
    { title: "CFA Announces Record Year for Agricultural Lending", date: "October 2025", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Record growth in partnership with cooperatives nationwide." },
    { title: "New Digital Platform Streamlines Loan Applications", date: "September 2025", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Field Finance 2.0 launched with enhanced features." },
    { title: "CFA Achieves SOC 2 Type II Certification", date: "August 2025", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Demonstrating our commitment to data security and compliance." }
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Press & News</h1>
          <p>Latest updates from CFA and the agricultural finance industry.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {articles.map((article) => (
              <div key={article.title} className="card">
                <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)', marginBottom: 'var(--space-1)' }}>{article.date}</p>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <Link href="/contact" style={{ fontWeight: 600 }}>Read More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
