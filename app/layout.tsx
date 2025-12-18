// app/layout.tsx
"use client";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Loan Products" },
  { href: "/membership", label: "Membership" },
  { 
    href: "/leadership",
    label: "Leadership",
    dropdown: [
      { href: "/leadership#executive-team", label: "Executive Team" },
      { href: "/leadership#board-of-directors", label: "Board of Directors" },
    ]
  },
  { href: "/resources", label: "Careers" },
  { href: "/news", label: "News" },
  { href: "/account-login", label: "Account Login" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [leadershipDropdownOpen, setLeadershipDropdownOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Cooperative Finance Association</title>
        <meta name="description" content="Cooperative input finance and lending for agricultural cooperatives and their growers." />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="h-9 w-9 rounded bg-emerald-800 relative overflow-hidden flex items-center justify-center">
                  <Image 
                    src="/images/green_badge.png" 
                    alt="CFA Logo" 
                    width={32} 
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold tracking-wide text-emerald-900">
                    Cooperative Finance Association
                  </div>
                  <div className="text-xs text-slate-500">
                    Serving agriculture since 1943
                  </div>
                </div>
              </Link>
              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
                {navItems.map((item, idx) => (
                  item.dropdown ? (
                    <div 
                      key={item.label} 
                      className="relative z-50"
                      onMouseEnter={() => setLeadershipDropdownOpen(true)}
                      onMouseLeave={() => setLeadershipDropdownOpen(false)}
                    >
                      <Link
                        href={item.href}
                        className="hover:text-emerald-800 flex items-center gap-1 py-2"
                      >
                        {item.label}
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      {leadershipDropdownOpen && (
                        <div className="absolute left-0 top-full pt-2">
                          <div className="w-56 rounded-lg border border-slate-200 bg-white py-2 shadow-lg">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="hover:text-emerald-800"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-slate-700"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            {mobileMenuOpen && (
              <nav className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
                {navItems.map((item) => (
                  item.dropdown ? (
                    <div key={item.label}>
                      <div className="py-2 text-sm font-medium text-slate-900">{item.label}</div>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-2 pl-4 text-sm text-slate-700 hover:text-emerald-800"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm font-medium text-slate-700 hover:text-emerald-800"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </nav>
            )}
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
              <div>
                © {new Date().getFullYear()} Cooperative Finance Association, Inc.
              </div>
              <div className="flex flex-wrap gap-4">
                <span>11500 N Ambassador Dr, Suite 300, Kansas City, MO 64153</span>
                <span>816-214-4200</span>
                <span>accountservices@cfafs.com</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

