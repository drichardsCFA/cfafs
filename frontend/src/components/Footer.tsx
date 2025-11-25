import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/executive-leadership-team">Executive Team</Link></li>
              <li><Link href="/board-members">Board of Directors</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><Link href="/loans">Loan Products</Link></li>
              <li><Link href="/field-finance">Field Finance</Link></li>
              <li><Link href="/field-finance#demo">Request a Demo</Link></li>
              <li><Link href="/field-finance#support">Support</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/news">Press & News</Link></li>
              <li><Link href="/about#partners">Partners</Link></li>
              <li><Link href="/soc-ii">SOC 2 & Certifications</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/eula">EULA</Link></li>
              <li><Link href="/ccpa">CCPA</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            <span className="footer-tagline">Serving Agricultural Finance Since 1943</span>
            <br />
            &copy; {currentYear} Cooperative Finance Association, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

