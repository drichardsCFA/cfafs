"use client";

import React, { useState } from "react";

const executives = [
  {
    name: "Alice Johnson",
    title: "Chief Executive Officer",
    shortBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullBio: "Alice Johnson has led CFAFS since 2018. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna ac nulla accumsan dictum nec et nunc. Vivamus at risus sit amet est porttitor rhoncus.",
    photo: "/images/executive-placeholder.jpg",
  },
  {
    name: "Brad Lin",
    title: "Chief Financial Officer",
    shortBio: "Pellentesque facilisis mi at mattis accumsan.",
    fullBio: "Brad Lin manages all financial operations and compliance at CFAFS. Pellentesque facilisis mi at mattis accumsan. Nunc tincidunt, leo at ultricies tincidunt, velit nibh dictum erat, sed mattis arcu.",
    photo: "/images/executive-placeholder.jpg",
  },
  {
    name: "Sonia Patel",
    title: "Chief Operations Officer",
    shortBio: "Sed consectetur augue eget dictum cursus.",
    fullBio: "Sonia oversees all core processes and member onboarding. Sed consectetur augue eget dictum cursus. Maecenas cursus, est vel laoreet commodo, massa urna vehicula magna, sed suscipit turpis lorem non ex.",
    photo: "/images/executive-placeholder.jpg",
  },
];

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
                  {exec.shortBio}
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
                    <p style={{ fontSize: '0.9rem' }}>{exec.fullBio}</p>
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
