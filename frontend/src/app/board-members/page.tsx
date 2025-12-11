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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const executives = [
  {
    name: "Ross Johnson",
    title: "President",
    shortBio: "Chief Executive Officer",
    fullBio: "Long bio full of sentences and interesting things. Technology and keeping us compliant and spam free.",
    photo: "/images/board-placeholder.jpg",
  },
]

const members = [
  {
    name: "Danny Posch",
    title: "Chair",
    bio: "Danny Posch has served on the CFA Board since 2012 and is Executive Vice President and CFO of Mid Kansas Cooperative Association. A CPA and longtime cooperative finance leader, he previously worked for Lindburg Vogel Chartered auditing cooperatives and credit unions. He is active in several professional organizations supporting cooperative financial practices.",
    photo: "/images/board/danny_posch.jpg",
  },
  {
    name: "Jeremy Wilhelm",
    title: "Vice-Chair",
    bio: "Jeremy Wilhelm has served on the CFA Board since becoming CEO of Frontier Cooperative in 2017. He brings extensive experience from prior leadership roles at Western Milling and in agricultural finance at Farm Credit Services of America and U.S. Bank. He also serves on multiple Nebraska industry and foundation boards.",
    photo: "/images/board/jeremy_wilhelm.jpg",
  },
  {
    name: "Tim Burress",
    title: "Secretary",
    bio: "Tim Burress has served on the CFA Board since 2012 and is the Chief Executive Officer of River Valley Cooperative. He previously spent eight years as River Valley’s CFO and two decades in finance leadership roles at Deere & Company. He also serves on the board of Associated Benefits Corporation.",
    photo: "/images/board/tim_burress.jpg",
  },
  {
    name: "Gary Brandt",
    title: "Treasurer",
    bio: "Gary Brandt has served on the CFA Board since 2021 and is the Chief Executive Officer of Cooperative Producers, Inc. He has held a wide range of leadership roles in the cooperative system, including operations, energy, and transportation oversight. He also partners in a family farming operation and previously led regional cooperative service groups.",
    photo: "/images/board/gary_brandt.jpg",
  },
  {
    name: "Jeff Krejdl",
    title: "Member",
    bio: "Jeff Krejdl has served on the CFA Board since 2022 and is President and CEO of Ag Valley Cooperative. He previously spent two decades in cooperative finance and operations, including serving as Ag Valley’s CFO before becoming CEO. He is active in the Nebraska cooperative community and participates in national professional organizations.",
    photo: "/images/board/jeff_krejdl.jpg",
  },
  {
    name: "Joanna McClendon",
    title: "Member",
    bio: "Joanna McClendon has served on the CFA Board since 2021 and is Manager of Coop Financial Solutions for Tennessee Farmers Cooperative. She has more than 20 years of experience in cooperative accounting, credit, and financial services, including leading CFS’s recent expansion. She is active in the National Society of Accountants for Cooperatives and other credit industry organizations.",
    photo: "/images/board/joanna_mcclendon.jpg",
  },
  {
    name: "Mark Orr",
    title: "Member",
    bio: "Mark Orr has served on the CFA Board since 2025 and is the Chief Executive Officer of GROWMARK, Inc., where he leads an agricultural cooperative serving the U.S. and Canada across wholesale distribution, ag retail, energy, grain, and financial services. He brings more than 36 years of experience in cooperative leadership across finance, supply chain, and member services. He also serves on multiple national industry boards supporting cooperative advancement and agricultural education.",
    photo: "/images/placeholder.png",
  },
  {
    name: "Jeff Liggett",
    title: "Advising Member",
    bio: "ADD BIO HERE!!!!",
    photo: "/images/board/jeff_liggett.jpg",
  },
];



export default function BoardMemberPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  console.log(executives[0].name);
  
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
            <h1>Meet Our Board of Directors</h1>
            <p style={{ fontSize: '1.125rem', maxWidth: 700, margin: '0 auto' }}>
              The board of directors is committed to provided insight and guidance to advance CFA's market position and provide value by representing our members.
            </p>
          </div>
        </div>
      </section>

      {/* Executives Grid */}

      <section className="section bg-[#F7F7F2]">
        <div className="container">
          <div className="grid grid-cols-2">
            {members.map((member, idx) => (
              <div key={member.name} className="card" style={{ textAlign: 'left', margin: 'var(--space-xs)' }}>
                <div className="grid grid-cols-3">
                  <img
                    src={member.photo}
                    alt={`${member.name} portrait`}
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
                  <div style={{ textAlign: 'left'}}>
                    <h3 className='card-title'style={{ marginBottom: 'var(--space-xs)' }}>{member.name}</h3>
                    <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: 'var(--space-sm)', marginTop: '10px' }}>
                      {member.title}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right'}}>
                    <Dialog>
                      <form>
                        <DialogTrigger asChild>
                          <Button className="btn btn-primary" variant="outline">View Bio</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[625px]">
                          <DialogHeader>
                              <img
                                src={member.photo}
                                alt={`${member.name} portrait`}
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
                            <DialogTitle style={{ textAlign: 'center'}}>{member.name}</DialogTitle>
                            <DialogDescription style={{ textAlign: 'left'}}>
                              {member.bio}
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </form>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>

  );
}
