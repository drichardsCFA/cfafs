"use client";

import React, { useState } from "react";

const executives = [
  {
    name: "Keith Becker",
    title: "Sr. Vice President",
    shortBio: "Chief Credit Officer",
    fullBio: "Keith Becker serves as Sr. Vice President and Chief Credit Officer at The Cooperative Finance Association, where he has worked diligently since January 2019 to strengthen the credit department. His focus on fostering talent, improving operations, and prioritizing customer service reflects his commitment to supporting the organization’s mission. \\nWith a career rooted in agricultural finance, Keith has held roles such as Credit Manager at AGRILAND FS, where he applied thoughtful risk management strategies across multiple locations. As an Agri-Finance Specialist, he worked hard to grow the portfolio he managed, building strong customer relationships along the way. \\nEarlier positions at GROWMARK, Inc., and CoBank allowed Keith to contribute to regional growth and operational improvements while managing significant agribusiness portfolios. His early experiences at Martinsburg Bank and Trust and FCS Financial deepened his appreciation for cooperatives and agricultural finance, shaping his dedication to serving the industry. \\n Keith remains committed to supporting agricultural enterprises through steady leadership and a focus on sustainable growth, striving to make a meaningful impact in the field of agricultural finance.",
    photo: "/images/elt/keith_becker.jpg",
  },
  {
    name: "Kathy Berg",
    title: "Sr. Vice President",
    shortBio: "Chief Administration & Human Resources Officer",
    fullBio: "Kathy was appointed Senior Vice President – Chief Human Resources and Administration Officer in 2025. She leads the company’s human resources, administration, and organizational development functions, driving strategic initiatives that foster a high-performance culture and support long-term business growth. \\n\\nWith over 20 years of experience in human resources, Kathy brings deep expertise in talent management, leadership development, employee engagement, and operational excellence. Her career has been defined by a commitment to building inclusive workplaces, aligning people strategies with business goals, and empowering teams to thrive.",
    photo: "/images/elt/kathy_berg.jpg",
  },
  {
    name: "Joe Funk",
    title: "Sr. Vice President",
    shortBio: "Chief Program Lending Officer",
    fullBio: "In his role at CFA as Senior Vice President & Chief Program Lending Officer, Joe has a focus on empowering CFA’s dealer network through impactful grower programs and integrations with leading crop protection, fertilizer and seed manufacturers & distributors. He oversees the development of these programs and their delivery to the CFA network. \\n\\nPrior to joining CFA, Joe spent 14 years with CHS Inc. and their lending subsidiary CHS Capital. His experience includes an extensive background in agricultural credit, lending and business development with a primary focus on leading grower financing programs. During his time at CHS, Joe directed a lending team covering cooperatives and other agronomy retailers spanning a national footprint. \\n\\nJoe is a graduate of the University of Minnesota – Carlson School of Management, and resides in the Twin Cities with his wife Sarah",
    photo: "/images/elt/joe_funk.jpg",
  },
  {
    name: "Jordan Nussbaum",
    title: "Sr. Vice President***",
    shortBio: "Chief No Biography***",
    fullBio: "Long bio full of sentences and interesting things. Technology and keeping us compliant and spam free.",
    photo: "/images/elt/jordan_nussbaum.jpg",
  },
  {
    name: "Doug Richards",
    title: "Sr. Vice President",
    shortBio: "Chief Operating Officer & Chief Technology Officer",
    fullBio: "Doug Richards serves as Chief Operating Officer & Chief Technology Officer at the Cooperative Finance Association (CFA), leading software, product and IP development, advanced AI and, Operations for America’s multi-billion-dollar leader in ag input finance. Under his leadership, CFA scaled from $525M to $4.3B in 2025, modernized origination systems, and achieved SOC 2 certification while driving innovation throughout the industry. \\nDoug and CFA have been featured in press releases for SOC 2 certification, the CFA-AgVend partnership, and technology acceleration, including outlets like Yahoo Finance, PRNewswire, Conga, and Bushel Powered.",
    photo: "/images/elt/doug_richards.png",
  },
];

console.log(executives.map((exec, idx) => (exec.fullBio)));

export default function ExecutiveLeadershipTeamPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ background: 'var(--color-bg-alt)', textAlign: 'center' }}>
        <div className="container">
          <h1>Executive Leadership Team</h1>
          <p style={{ fontSize: '1.125rem', maxWidth: 700, margin: '0 auto' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Meet the experienced leaders 
            guiding CFA's mission to serve agricultural finance nationwide.
          </p>
        </div>
      </section>

      {/* Executives Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {executives.map((exec, idx) => (
              <div key={exec.name} className="card" style={{ textAlign: 'center' }}>
                <img
                  src={exec.photo}
                  alt={`${exec.name} portrait`}
                  style={{
                    width: 120,
                    height: 120,
                    objectFit: 'cover',
                    borderRadius: '50%',
                    margin: '0 auto var(--space-3)',
                    border: '4px solid var(--color-accent)',
                    background: '#e9ecef'
                  }}
                />
                <h3 style={{ marginBottom: 'var(--space-1)' }}>{exec.name}</h3>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  {exec.title}
                </p>
                <p style={{ fontSize: '0.95rem', marginBottom: 'var(--space-2)' }}>
                  {exec.shortBio} {console.log(exec.fullBio)}
                </p>
                <button
                  className="btn btn-outline"
                  style={{ fontSize: '0.875rem', padding: 'var(--space-1) var(--space-3)' }}
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                >
                  {openIdx === idx ? "Hide Bio" : "Learn More"}
                </button>
                {openIdx === idx && (
                  <div style={{ marginTop: 'var(--space-3)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--gray-200)', textAlign: 'left' }}>
                    <p style={{ fontSize: '0.9rem' }}>{exec.fullBio} {console.log(exec.fullBio)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
