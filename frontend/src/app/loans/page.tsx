import Link from "next/link";

export const metadata = {
  title: "Loan Products | CFA",
  description: "Flexible loan products designed for agricultural cooperatives and retailers.",
};

export default function LoansPage() {
  const products = [
    {
      title: "Seasonal Operating Loans",
      description: "These commercial loans are revolving lines of credit available to finance the seasonal increases in supply inventory, grain inventory, hedging activities, receivables, and operating expenses. Commercial loans are typically secured and may have either variable or fixed interest rates. Operating loans usually mature within 12 months.",
      features: ["Flexible repayment schedules", "Competitive interest rates", "Quick approval process", "No prepayment penalties"],
      icon: "/images/cloud.svg",
      alt: "Operating Loan Icon"
    },
    {
      title: "Equipment Financing",
      description: "Equipment  Loans may be either revolving or non-revolving, are typically secured with assets of the cooperative, and may have either variable or fixed interest rates. The repayment period will be matched to the useful life of the assets financed and to the cash flow to be generated",
      features: ["Up to 7-year terms", "Fixed and variable rates", "New and used equipment", "90% financing available"],
      icon: "/images/truck.svg",
      alt: "Equipment Financing Icon"
    },
    {
      title: "Working Capital Lines",
      description: "These loans are single-purpose loans to member cooperatives that have a borrowing relationship with another lender. The loans are used to provide deferred terms and fund 100% of inventory purchases.",
      features: ["Member cooperative selects the invoices to be financed", "CFA makes the payments to the suppliers", "The loan is due in full once a year", "Member cooperative chooses which month of the year you prefer to pay off the loan"],
      icon: "/images/briefcase.svg",
      alt: "Working Capital Icon"
    },
    {
      title: "Commercial Real Estate",
      description: "Term Loans may be either revolving or non-revolving, are typically secured with assets of the cooperative, and may have either variable or fixed interest rates. The repayment period will be matched to the useful life of the assets financed and to the cash flow to be generated.",
      features: ["Flexible Terms", "Competitive LTV ratios", "Construction financing", "Refinancing options"],
      icon: "/images/contact-location.svg",
      alt: "Commercial Real Estate Icon"
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <h1>Flexible Loan Products for Agriculture</h1>
            <p>
              CFA offers a comprehensive array of financial products and services that are carefully engineered to fulfill customer needs and satisfy the overall demands of the marketplace. In this regard, particular emphasis is accorded to delivering the types of products and services that exceed expectations and out-perform competitive offerings.
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">Apply Now</Link>
              <Link href="/field-finance#demo" className="btn btn-secondary">Request a Demo</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>Our Loan Products</h2>
          <div className="grid grid-cols-2">
            {products.map((product) => (
              <div key={product.title} className="card">
                <img
                  src={product.icon}
                  alt={product.alt}
                  className="mb-4"
                  style={{ width: 54, height: 54, objectFit: 'contain', background: "#e5f6f5", borderRadius: 12 }}
                />
                <h3>{product.title}</h3>
                <p style={{ marginBottom: 'var(--space-md)' }}>{product.description}</p>
                <h4 style={{ fontSize: '1rem', marginBottom: 'var(--space-xs)' }}>Key Features:</h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 'var(--space-med)' }}>
                  {product.features.map((feature) => (
                    <li key={feature} style={{ marginBottom: 'var(--space-1)', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent)' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[#F7F7F2]">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2>Competitive Interest Rates</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: 'var(--space-md)' }}>
            ***CFA offers a comprehensive array of financial products and services that are carefully engineered to fulfill customer needs and satisfy the overall demands of the marketplace. In this regard, particular emphasis is accorded to delivering the types of products and services that exceed expectations and out-perform competitive offerings.
          </p>
          <h3>Current Rates</h3>
          <p>Simpli-Fi by CFA Field Finance Rate:  8.00% Variable</p>
          <p>Interest Rate for CFA Input Finance Loans Booked for the 2024, 2025and 2026 Crop Years. </p>

          <p>CFA Input Advantage Rate:  10.00% Variable</p>
          <p>Interest Rate for CFA Input Finance Loans Booked Prior to the 2024 Crop Year.</p>
          <p>CFA Base Rate for Commercial Loans:   7.75% Variable</p>
          <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
