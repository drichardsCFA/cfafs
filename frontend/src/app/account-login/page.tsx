export const metadata = {
  title: "Member Login | Cooperative Finance Association",
  description:
    "Access your CFAFS account for secure loan management, member resources, and digital input financing tools.",
};



import Link from "next/link";

export default function AccountLoginPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <h1>Account Login</h1>
          </div>
        </div>
      </section>

      <section className="section bg-[#F7F7F2]">
        <div className="container-narrow" style={{ textAlign: 'center' }}>            
          <div className="card" style={{ margin: 'var(--space-md)' }}>

            <div style={{ marginBottom: 'var(--space-md)' }}>
              <p>Notice: If you have not logged into the CFA online portal since May 1, 2023, your previous login information will no longer work and you will need to contact us at accountservices@cfafs.com, or by calling 877-835-5232, and use extension 8 for a new login. This process is required as CFA has moved its online platform.</p>
              <p>Thank you for your interest in using CFA for your financing needs and we look forward to working with you in the future.</p>
            </div>
            <div style={{textAlign: 'center', margin:'var(--space-md)' }}>
              <Link href="https://grower.cfafs.com/" className="btn btn-primary" style={{textAlign: 'center', margin:'var(--space-md)' }}>I am a Grower</Link>
              <Link href="https://dealer.cfafs.com/" className="btn btn-primary" style={{textAlign: 'center', margin:'var(--space-md)' }}>I am a Dealer</Link>
            </div>
            <div>
              <small>Please select the appropriate option based on your access level.</small>
            </div>
          </div>
        </div>
      </section>
    </>  
  );
}