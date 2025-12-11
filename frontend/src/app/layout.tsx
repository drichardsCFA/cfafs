import "./globals.css";
import Link from "next/link";
import ChatbotLauncher from "../components/ChatbotLauncher";
import Footer from "../components/Footer";
import NavToggle from "../components/NavToggle";
import DropdownMenu from "../components/DropdownMenu";

export const metadata = {
  title: {
    default: "CFAFS - Central Finance and Assistance Society",
    template: "%s | CFAFS",
  },
  description: "The Central Finance and Assistance Society empowers members and communities through reliable, transparent financial solutions and education. Explore our loan offerings, member services, and knowledge resources.",
  keywords: ["finance", "loans", "financial assistance", "credit union", "members", "financial education"],
  authors: [{ name: "CFAFS Team" }],
  creator: "Central Finance and Assistance Society",
  publisher: "CFAFS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cfafs.com",
    title: "CFAFS - Central Finance and Assistance Society",
    description: "Empowering members and communities through reliable, transparent financial solutions and education.",
    siteName: "CFAFS",
  },
  twitter: {
    card: "summary_large_image",
    title: "CFAFS - Central Finance and Assistance Society",
    description: "Empowering members and communities through reliable, transparent financial solutions and education.",
    creator: "@cfafs",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        <header className="site-header">
          <nav className="primary-nav" role="navigation" aria-label="Main Navigation">
            <div className="nav-container">
              <div className="nav-logo">
                <Link href="/" aria-label="Home">
                  <div className="nav-logo-bg">
                    <img src="/images/green_badge.png" alt="CFA Logo" style={{ height: 80 }} />
                  </div>
                </Link>
              </div>
              <NavToggle />
              <div id="primary-menu" className="nav-menu">
                <ul>
                  <DropdownMenu label="Home" href="/">
                    <li><Link href="/executive-leadership-team">CFA Executive Team</Link></li>
                    <li><Link href="/board-members">CFA Board of Directors</Link></li>
                    <li><Link href="/membership">CFA Membership</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                  </DropdownMenu>
                  <DropdownMenu label="Products" href="/products">
                    <li><Link href="/loans">Loan Products</Link></li>
                    <li><Link href="/field-finance">Field Finance</Link></li>
                    <li><Link href="/field-finance#demo">Request a Demo</Link></li>
                    <li><Link href="/field-finance#support">Support</Link></li>
                  </DropdownMenu>
                  <li><Link href="/careers">Careers</Link></li>
                  <DropdownMenu label="News" href="/news">
                    <li><Link href="/news#press">Press</Link></li>
                    {/* REMOVING*** <li><Link href="/news#partners">Partners</Link></li> */}
                    <li><Link href="/soc-ii">SOC 2 & Certifications</Link></li>
                  </DropdownMenu>
                  <li><Link href="/account-login" className="login-btn">Account Login</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <ChatbotLauncher />
        <Footer />
      </body>
    </html>
  );
}
