import Link from "next/link";

export const metadata = {
  title: "Loan Products | CFA",
  description: "Flexible loan products designed for agricultural cooperatives and retailers.",
};

export default function LoansPage() {
  const products = [
    {
      title: "Seasonal Operating Loans",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Finance your seasonal inventory needs with flexible terms that align with your crop cycle.",
      features: ["Flexible repayment schedules", "Competitive interest rates", "Quick approval process", "No prepayment penalties"],
      icon: "🌱"
    },
    {
      title: "Equipment Financing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Invest in the equipment you need to grow your business with manageable payment terms.",
      features: ["Up to 7-year terms", "Fixed and variable rates", "New and used equipment", "90% financing available"],
      icon: "🚜"
    },
    {
      title: "Working Capital Lines",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Access flexible credit lines to manage cash flow and seize opportunities as they arise.",
      features: ["Revolving credit", "Draw as needed", "Interest only on used portion", "Annual renewal"],
      icon: "💼"
    },
    {
      title: "Commercial Real Estate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Finance facility expansions, new locations, or property improvements with long-term solutions.",
      features: ["Up to 20-year amortization", "Competitive LTV ratios", "Construction financing", "Refinancing options"],
      icon: "🏢"
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Flexible Loan Products for Agriculture</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tailored financing solutions 
            designed specifically for agricultural cooperatives and retailers nationwide.
          </p>
          <div className="hero-buttons">
            <Link href="/contact" className="btn btn-primary">Apply Now</Link>
            <Link href="/field-finance#demo" className="btn btn-secondary">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>Our Loan Products</h2>
          <div className="grid grid-2">
            {products.map((product) => (
              <div key={product.title} className="card">
                <div className="feature-icon" style={{ margin: '0 0 var(--space-3) 0' }}>
                  {product.icon}
                </div>
                <h3>{product.title}</h3>
                <p style={{ marginBottom: 'var(--space-3)' }}>{product.description}</p>
                <h4 style={{ fontSize: '1rem', marginBottom: 'var(--space-2)' }}>Key Features:</h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 'var(--space-3)' }}>
                  {product.features.map((feature) => (
                    <li key={feature} style={{ marginBottom: 'var(--space-1)', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2>Competitive Interest Rates</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: 'var(--space-5)' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We offer some of the most competitive 
            rates in agricultural finance. Contact us today for a personalized quote.
          </p>
          <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
