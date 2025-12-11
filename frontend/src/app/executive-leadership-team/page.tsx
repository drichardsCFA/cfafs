"use client";

import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const executives = [
  {
    name: "Ross Johnson",
    title: "President",
    shortBio: "Chief Executive Officer",
    fullBio: "Ross serves as President and CEO of The Cooperative Finance Association, a position he assumed on January 1, 2018.  He has nearly 40 years of experience in the financial services industry,  having held executive positions in the Farm Credit System, as well as commercial banking and mortgage banking industries.  Ross grew up on a family farm and still maintains active farming interests..",
    photo: "/images/ross_johnson.jpg",
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
  {
    name: "Justin Morris",
    title: "Sr. Vice President",
    shortBio: "Chief Marketplace Officer",
    fullBio: "Long bio full of sentences and interesting things. Technology and keeping us compliant and spam free.",
    photo: "/images/justin_morris.png",
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
    name: "Stephen Hoefer",
    title: "Sr. Vice President",
    shortBio: "Chief Financial Officer",
    fullBio: [
      "Stephen Hoefer – Senior Vice President/Chief Financial Officer - Stephen Hoefer serves as Senior Vice President & Chief Financial Officer at The Cooperative Finance Association (CFA), overseeing the organization’s financial strategy, accounting operations, capital management, and enterprise risk oversight. He plays a key role in supporting CFA’s mission by strengthening financial reporting, enhancing operational efficiency, and ensuring a sound financial foundation for long-term organizational growth.",
      "Stephen joined CFA in 2022 after building extensive experience across public accounting, financial services, and private equity. He began his career with PricewaterhouseCoopers (PwC) in the Financial Services Assurance Practice, specializing in clients within the Banking & Capital Markets and Asset Management sectors. Over six years at PwC, he advanced to Assurance Manager, developing deep technical expertise in financial governance, internal controls, and complex audit engagements.",
      "Prior to CFA, Stephen spent six years as a Fund Controller at Platform Ventures, where he oversaw accounting, reporting, and operational processes for private equity real estate funds investing in real estate and related assets.",
      "Stephen holds a Master of Science in Accounting from Boston College’s Carroll School of Management and a Bachelor of Science in Business Administration with an emphasis in Accounting from Rockhurst University’s Helzberg School of Management. He brings a strong analytical approach, a commitment to operational clarity, and a focus on advancing CFA’s mission of providing dependable financial solutions to agricultural cooperatives nationwide.",
    ],
    photo: "/images/stephen_hoefer.png",
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
    name: "Jordan Nussbaum",
    title: "Sr. Vice President",
    shortBio: "Chief Security Officer",
    fullBio: "Long bio full of sentences and interesting things. Technology and keeping us compliant and spam free.",
    photo: "/images/elt/jordan_nussbaum.jpg",
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

      <section className="section hero" style={{textAlign: 'center' }}>
        <div className="container">
          <div>
            <h1>Executive Leadership Team</h1>
            <p style={{ fontSize: '1.125rem', maxWidth: 700, margin: '0 auto' }}>
              Our leadership team is driven to be a customer-focused, market-driven, profitable, financial services cooperative by providing innovative input financing services designed to empower rural communities and advance cooperative principles.
            </p>
          </div>
        </div>
      </section>

      {/* Executives Grid */}
      <section className="section bg-[#F7F7F2]">
        <div className="container">
          <div className="grid grid-3">
            {executives.map((exec, idx) => (
              <div key={exec.name} className="card grid" style={{ textAlign: 'center', margin: 'var(--space-xs)' }}>
                <div className="grid items-start">
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
                  {/*<p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: 'var(--space-sm)', marginTop: '10px' }}>{exec.title}</p> */}
                  <p style={{ fontSize: '0.95rem', marginBottom: 'var(--space-sm)' }}>
                    {exec.shortBio}
                  </p>
                </div>
                <div className='grid items-end' style={{ textAlign: 'center'}}>
                  <Dialog>
                    <form>
                      <DialogTrigger asChild>
                        <Button className="btn-primary btn" variant="outline">View Bio</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[750px]">
                        <DialogHeader>
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
                          <DialogTitle style={{ textAlign: 'center'}}>{exec.name}</DialogTitle>
                          <DialogDescription style={{ textAlign: 'left'}}>
                            {exec.fullBio}
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </form>
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
