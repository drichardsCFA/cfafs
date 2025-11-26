export const metadata = {
  title: "Board of Directors | CFAFS",
  description:
    "Meet the CFAFS Board: experienced leaders driving our vision for cooperative agricultural finance and community empowerment.",
};

export default function BoardMembersPage() {
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
      name: "Jeff Liggett",
      title: "Member",
      bio: "ADD BIO HERE!!!!",
      photo: "/images/board/jeff_liggett.jpg",
    },
  ];
  return (
    <main className="bg-[#F7F7F2] min-h-screen">
      <section className="max-w-5xl mx-auto py-8 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4" style={{ color: "#4F7942", fontFamily: "Montserrat,Arial,sans-serif" }}>
          Our Board of Directors
        </h1>
        <p className="text-[#495464] text-center max-w-3xl mx-auto mb-10" style={{ fontFamily:"Lato,Arial,sans-serif" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Meet the experienced leadership behind CFAFS.
        </p>

        {/* Filter/Sort Controls Placeholder */}
        <div className="flex flex-wrap justify-end items-center gap-4 mb-8">
          <span className="text-sm text-[#807879]">[Filter/Sort: Coming Soon]</span>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
          {members.map((member) => (
            <div
              key={member.name}
              className="relative bg-white border rounded-2xl overflow-hidden shadow-sm flex flex-col items-center p-7 pt-9 group hover:shadow-lg transition-all duration-200"
              tabIndex={0}
              aria-label={`${member.name}, ${member.title}`}
            >
              <div className="w-28 h-28 mb-4 rounded-full border-4 border-[#FFC857] overflow-hidden shadow-sm group-hover:border-[#4F7942] transition-all">
                <img
                  src={member.photo}
                  alt={`${member.name} portrait`}
                  className="object-cover w-full h-full"
                  style={{ background: "#e9eaea" }}
                />
              </div>
              <div className="text-lg font-bold mb-1" style={{ color:"#4F7942", fontFamily:"Montserrat,Arial,sans-serif" }}>{member.name}</div>
              <div className="text-sm text-[#5CA4EA] font-semibold mb-3">{member.title}</div>
              <p className="text-[#495464] text-sm leading-relaxed max-w-[220px]" style={{ fontFamily:"Lato,Arial,sans-serif" }}>
                {member.bio}
              </p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-90 bg-[#F7F7F2] flex flex-col items-center justify-center transition-all rounded-2xl pointer-events-none p-8">
                <span className="text-[16px] font-bold text-[#4F7942] mb-2" style={{ fontFamily:"Montserrat,Arial,sans-serif" }}>{member.name}</span>
                <span className="text-sm italic text-[#5CA4EA] mb-2">{member.title}</span>
                <span className="text-[#495464] text-sm">{member.bio}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
