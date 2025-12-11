import Link from "next/link";

export default function RatesPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <h1>Interest Rates</h1>
            <p>
              CFA offers a comprehensive array of financial products and services that are carefully engineered to fulfill customer needs and satisfy the overall demands of the marketplace. In this regard, particular emphasis is accorded to delivering the types of products and services that exceed expectations and out-perform competitive offerings.
            </p>
            <div className="hero-buttons">
                <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#F7F7F2]">
        <div className="container-narrow" style={{ textAlign: 'center' }}>            
          <div className="card" style={{ margin: 'var(--space-md)' }}>

            <h2>Current Rates</h2>
            <div style={{ marginBottom: 'var(--space-md)' }}>
              <h4>Simpli-Fi by CFA Field Finance Rate:  8.00% Variable</h4>
              <p>Interest Rate for CFA Input Finance Loans Booked for the 2024, 2025and 2026 Crop Years. </p>
            </div>
            <div style={{ marginBottom: 'var(--space-md)' }}>

              <h4>CFA Input Advantage Rate:  10.00% Variable</h4>
              <p>Interest Rate for CFA Input Finance Loans Booked Prior to the 2024 Crop Year.</p>
            </div>
            <div style={{ marginBottom: 'var(--space-md)' }}>
              <h4>CFA Base Rate for Commercial Loans:   7.75% Variable</h4>
            </div>
            <div style={{ marginBottom: 'var(--space-md)' }}>
              <small>All Rates are Variable and Subject to Change at any time</small>
            </div>
            <div style={{textAlign: 'center' }}>
              <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </>  
  );
}