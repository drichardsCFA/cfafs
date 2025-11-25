export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container-narrow">
          <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
          <p style={{ textAlign: 'center', fontSize: '1.125rem', marginBottom: 'var(--space-6)' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. We're here to help answer your questions.
          </p>
          
          <div className="card" style={{ maxWidth: 600, margin: '0 auto' }}>
            <form>
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <label style={{ display: 'block', marginBottom: 'var(--space-1)', fontWeight: 600 }}>Name *</label>
                <input type="text" required style={{ width: '100%', padding: 'var(--space-2)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <label style={{ display: 'block', marginBottom: 'var(--space-1)', fontWeight: 600 }}>Email *</label>
                <input type="email" required style={{ width: '100%', padding: 'var(--space-2)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <label style={{ display: 'block', marginBottom: 'var(--space-1)', fontWeight: 600 }}>Organization</label>
                <input type="text" style={{ width: '100%', padding: 'var(--space-2)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)' }} />
              </div>
              <div style={{ marginBottom: 'var(--space-4)' }}>
                <label style={{ display: 'block', marginBottom: 'var(--space-1)', fontWeight: 600 }}>Message *</label>
                <textarea required rows={5} style={{ width: '100%', padding: 'var(--space-2)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-sm)', fontFamily: 'inherit' }} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
          </div>

          <div style={{ marginTop: 'var(--space-8)', textAlign: 'center' }}>
            <h2>Office Location</h2>
            <p>
              <strong>Cooperative Finance Association, Inc.</strong><br />
              Kansas City, MO<br />
              Phone: 1-800-XXX-XXXX<br />
              Email: <a href="mailto:info@cfafs.com">info@cfafs.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
