export default function CareersPage() {
  // Placeholder jobs and benefits
  const jobs = [
    {
      title: "Loan Officer",
      location: "Remote / Midwest",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique.",
    },
    {
      title: "Member Success Representative",
      location: "Hybrid - Central Office",
      desc: "Praesent sit amet rutrum lorem. Quisque nec urna massa. Etiam sagittis augue nec arcu.",
    },
    {
      title: "Software Engineer",
      location: "Remote (U.S.)",
      desc: "Aliquam id mi eget tortor dignissim bibendum. Nulla facilisi. Integer bibendum feugiat dapibus.",
    },
  ];
  const benefits = [
    { icon: "/images/benefit-icon1.svg", label: "Health & Wellness", desc: "Comprehensive plans & wellness perks" },
    { icon: "/images/benefit-icon2.svg", label: "401k & Pension", desc: "Retirement savings with employer match" },
    { icon: "/images/benefit-icon3.svg", label: "Growth & Learning", desc: "Ongoing training and upskilling" },
  ];
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5" style={{ color: "#4F7942", fontFamily:"Montserrat,Arial,sans-serif" }}>
          CFAFS Careers
        </h1>
        <p className="text-lg text-[#495464] mb-6 max-w-xl mx-auto" style={{ fontFamily:"Lato,Arial,sans-serif" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join a mission-driven financial organization dedicated to supporting rural and agribusiness growth.
        </p>
        <a href="#positions" className="cta-btn text-lg shadow-md">
          See Openings
        </a>
      </section>

      {/* Job List Feed as Cards */}
      <section id="positions" className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-6">
        {jobs.map((job) => (
          <div key={job.title} className="bg-white border rounded-2xl px-7 py-7 shadow-sm flex flex-col mb-2 min-h-[155px] hover:shadow-lg transition-all">
            <div className="mb-2 text-[1.25rem] font-bold text-[#4F7942]" style={{ fontFamily: "Montserrat,Arial,sans-serif" }}>
              {job.title}
            </div>
            <div className="text-xs text-[#5CA4EA] font-semibold mb-2">{job.location}</div>
            <p className="text-sm text-[#495464] mb-4" style={{ fontFamily: "Lato,Arial,sans-serif" }}>{job.desc}</p>
            <a
              href="#"
              className="inline-block mt-auto px-6 py-2 rounded bg-[#FFC857] text-[#4F7942] font-semibold text-sm hover:bg-[#5CA4EA] hover:text-[#495464] transition"
              style={{ fontFamily: "Montserrat,Arial,sans-serif" }}
              tabIndex={0}
              aria-disabled="true"
              role="button"
            >
              Apply (Placeholder)
            </a>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-7">
        {benefits.map((b) => (
          <div key={b.label} className="bg-white border rounded-xl px-6 py-7 flex flex-col items-center text-center shadow hover:shadow-md transition-all min-h-[140px]">
            <img src={b.icon} alt={b.label} className="mb-3" style={{width:46, height:46, background:"#f7f7f2",borderRadius:12}} />
            <div className="text-base font-bold mb-2" style={{color:"#4F7942",fontFamily:"Montserrat,Arial,sans-serif"}}>{b.label}</div>
            <div className="text-xs text-[#495464]">{b.desc}</div>
          </div>
        ))}
      </section>

      {/* Apply/CTA Section */}
      <section className="flex justify-center py-12">
        <a href="/account-login" className="cta-btn text-lg shadow-lg px-11 py-4">
          Submit Your Application
        </a>
      </section>
    </main>
  );
}
