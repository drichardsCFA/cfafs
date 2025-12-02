"use client";

import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const executives = [
  {
    name: "Ross H Johnson",
    title: "President",
    shortBio: "Chief Executive Officer",
    fullBio: "Long bio full of sentences and interesting things. Technology and keeping us compliant and spam free.",
    photo: "/images/board-placeholder.jpg",
  },
  {
    name: "Keith Becker",
    title: "Sr. Vice President",
    shortBio: "Chief Credit Officer",
    fullBio: [
      "Keith Becker serves as Sr. Vice President and Chief Credit Officer at The Cooperative Finance Association, where he has worked diligently since January 2019 to strengthen the credit department. His focus on fostering talent, improving operations, and prioritizing customer service reflects his commitment to supporting the organization's mission.",
      "With a career rooted in agricultural finance, Keith has held roles such as Credit Manager at AGRILAND FS, where he applied thoughtful risk management strategies across multiple locations. As an Agri-Finance Specialist, he worked hard to grow the portfolio he managed, building strong customer relationships along the way.",
      "Earlier positions at GROWMARK, Inc., and CoBank allowed Keith to contribute to regional growth and operational improvements while managing significant agribusiness portfolios. His early experiences at Martinsburg Bank and Trust and FCS Financial deepened his appreciation for cooperatives and agricultural finance, shaping his dedication to serving the industry.",
      "Keith remains committed to supporting agricultural enterprises through steady leadership and a focus on sustainable growth, striving to make a meaningful impact in the field of agricultural finance."
    ],
    photo: "/images/elt/keith_becker.jpg",
  },
  {
    name: "Kathy Berg",
    title: "Sr. Vice President",
    shortBio: "Chief Administration & Human Resources Officer",
    fullBio: [
      "Kathy was appointed Senior Vice President – Chief Human Resources and Administration Officer in 2025. She leads the company's human resources, administration, and organizational development functions, driving strategic initiatives that foster a high-performance culture and support long-term business growth.",
      "With over 20 years of experience in human resources, Kathy brings deep expertise in talent management, leadership development, employee engagement, and operational excellence. Her career has been defined by a commitment to building inclusive workplaces, aligning people strategies with business goals, and empowering teams to thrive."
    ],
    photo: "/images/elt/kathy_berg.jpg",
  },
  {
    name: "Joe Funk",
    title: "Sr. Vice President",
    shortBio: "Chief Program Lending Officer",
    fullBio: [
      "In his role at CFA as Senior Vice President & Chief Program Lending Officer, Joe has a focus on empowering CFA's dealer network through impactful grower programs and integrations with leading crop protection, fertilizer and seed manufacturers & distributors. He oversees the development of these programs and their delivery to the CFA network.",
      "Prior to joining CFA, Joe spent 14 years with CHS Inc. and their lending subsidiary CHS Capital. His experience includes an extensive background in agricultural credit, lending and business development with a primary focus on leading grower financing programs. During his time at CHS, Joe directed a lending team covering cooperatives and other agronomy retailers spanning a national footprint.",
      "Joe is a graduate of the University of Minnesota – Carlson School of Management, and resides in the Twin Cities with his wife Sarah"
    ],
    photo: "/images/elt/joe_funk.jpg",
  },
  {
    name: "Stephen Hoeffer",
    title: "Sr. Vice President",
    shortBio: "Chief Financial Officer",
    fullBio: "Long bio full of sentences and interesting things. Technology and keeping us compliant and spam free.",
    photo: "/images/board-placeholder.jpg",
  },
  {
    name: "Justin Morris",
    title: "Sr. Vice President",
    shortBio: "Chief Marketplace Officer",
    fullBio: "Long bio full of sentences and interesting things. Technology and keeping us compliant and spam free.",
    photo: "/images/board-placeholder.jpg",
  },
  {
    name: "Jordan Nussbaum",
    title: "Sr. Vice President",
    shortBio: "Chief Security Officer",
    fullBio: "Long bio full of sentences and interesting things. Technology and keeping us compliant and spam free.",
    photo: "/images/elt/jordan_nussbaum.jpg",
  },
  {
    name: "Doug Richards",
    title: "Sr. Vice President",
    shortBio: "Chief Operating Officer & Chief Technology Officer",
    fullBio: [
      "Doug Richards serves as Chief Operating Officer & Chief Technology Officer at the Cooperative Finance Association (CFA), leading software, product and IP development, advanced AI and, Operations for America's multi-billion-dollar leader in ag input finance. Under his leadership, CFA scaled from $525M to $4.3B in 2025, modernized origination systems, and achieved SOC 2 certification while driving innovation throughout the industry.",
      "Doug and CFA have been featured in press releases for SOC 2 certification, the CFA-AgVend partnership, and technology acceleration, including outlets like Yahoo Finance, PRNewswire, Conga, and Bushel Powered."
    ],
    photo: "/images/elt/doug_richards.png",
  },
];

export default function ExecutiveLeadershipTeamPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  
  const renderBio = (bio: string | string[]) => {
    if (Array.isArray(bio)) {
      return bio.map((paragraph, idx) => (
        <p key={idx} style={{ fontSize: '0.9rem', marginBottom: idx < bio.length - 1 ? '1rem' : 0 }}>
          {paragraph}
        </p>
      ));
    }
    return <p style={{ fontSize: '0.9rem' }}>{bio}</p>;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ background: 'var(--neutral-50)', textAlign: 'center' }}>
        <div className="container">
          <h1>Executive Leadership Team</h1>
          <p style={{ fontSize: '1.125rem', maxWidth: 700, margin: '0 auto' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Meet the experienced leaders 
            guiding CFA's mission to serve agricultural finance nationwide.
          </p>
        </div>
      </section>

      {/* Executives Grid */}
      <section className="section bg-[#F7F7F2]">
        <div className="container">
          <div className="grid grid-3">
            {executives.map((exec, idx) => (
              <div key={exec.name} className="card" style={{ textAlign: 'center', margin: 'var(--space-xs)' }}>
                <img
                  src={exec.photo}
                  alt={`${exec.name} portrait`}
                  style={{
                    width: 120,
                    height: 120,
                    objectFit: 'cover',
                    borderRadius: '50%',
                    margin: '0 auto var(--space-md)',
                    border: '4px solid var(--color-accent)',
                    background: '#e9ecef'
                  }}
                />
                <h3 className='card-title'style={{ marginBottom: 'var(--space-xs)' }}>{exec.name}</h3>
                <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: 'var(--space-sm)', marginTop: '10px' }}>
                  {exec.title}
                </p>
                <p style={{ fontSize: '0.95rem', marginBottom: 'var(--space-sm)' }}>
                  {exec.shortBio}
                </p>
                <button
                  className="btn btn-outline"
                  style={{ fontSize: '0.875rem', padding: 'var(--space-xs) var(--space-md) var(--space-xs) var(--space-md)' }}
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                >
                  {openIdx === idx ? "Hide Bio" : "Learn More"}
                </button>
                {openIdx === idx && (
                  <div style={{ marginTop: 'var(--space-md)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--gray-200)', textAlign: 'left' }}>
                    <ScrollArea className="h-[400px] w-full">
                      {renderBio(exec.fullBio)}
                      <ScrollBar orientation="vertical" />
                    </ScrollArea>
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


{/*
<button data-modal-target="default-modal" data-modal-toggle="default-modal" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
  Toggle modal
</button>

<!-- Main modal -->
<div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
            <!-- Modal header -->
            <div class="flex items-center justify-between border-b border-default pb-4 md:pb-5">
                <h3 class="text-lg font-medium text-heading">
                    Terms of Service
                </h3>
                <button type="button" class="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="space-y-4 md:space-y-6 py-4 md:py-6">
                <p class="leading-relaxed text-body">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="leading-relaxed text-body">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
                <button data-modal-hide="default-modal" type="button" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">I accept</button>
                <button data-modal-hide="default-modal" type="button" class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Decline</button>
            </div>
        </div>
    </div>
</div>
*/}

{/* don't forget to change class to class name and wrap html in <> </> */}