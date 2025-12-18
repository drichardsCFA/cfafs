// app/leadership/page.tsx
import { Section, PageTitle } from "../components/Section";
import Image from "next/image";

export default function LeadershipPage() {
  return (
    <>
      <Section>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Executive Team and Board of Directors
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 max-w-4xl">
            CFA's leadership brings decades of experience in agricultural finance, cooperative management, and rural economic development. Our Executive Leadership Team guides daily operations and strategic initiatives, while our Board of Directors—elected by member cooperatives—ensures alignment with member needs and accountability to the cooperative network. Together, they combine deep expertise in agricultural finance and lending, cooperative operations, risk management, and rural economic development to serve the needs of agricultural cooperatives and producers nationwide.
          </p>
        </div>
      </Section>

      {/* Executive Leadership Team */}
      <Section id="executive-team">
        <div className="space-y-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
            Executive Leadership Team
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Ross Johnson",
                title: "President & Chief Executive Officer",
                image: "/images/ross_johnson.jpg",
                bio: "Ross serves as President and CEO of CFA, a position he assumed in January 2018. With nearly 40 years of experience in financial services, he has held executive positions in the Farm Credit System, commercial banking, and mortgage banking. Ross grew up on a family farm and maintains active farming interests, bringing firsthand agricultural perspective to his leadership role.",
              },
              {
                name: "Doug Richards",
                title: "Chief Operating Officer & Chief Technology Officer",
                image: "/images/elt/doug_richards.png",
                bio: "Doug leads software, product development, advanced AI, and operations for CFA. Under his leadership, CFA developed Field Finance, the leading loan origination software in agriculture, modernized core systems, and achieved SOC 2 certification. His work has been featured in Yahoo Finance, PRNewswire, and other major outlets for driving innovation throughout the agricultural finance industry.",
              },
              {
                name: "Justin Morris",
                title: "Chief Marketplace Officer",
                image: "/images/justin_morris.png",
                bio: "Justin leads CFA's business development and go-to-market strategies as the organization has grown into a $6 billion+ cooperatively owned financial institution. Under his leadership, his team of Business Development Directors has driven CFA's transformational growth from $950 million to $4 billion in annual originations, making CFA the fastest-growing input finance provider in the nation through seamless financing solutions for agribusiness retailers and growers.",
              },
              {
                name: "Stephen Hoefer",
                title: "Senior Vice President & Chief Financial Officer",
                image: "/images/stephen_hoeffer.png",
                bio: "Stephen oversees CFA's financial strategy, accounting operations, capital management, and enterprise risk. He joined CFA in 2022 after extensive experience in public accounting with PwC and six years as Fund Controller at Platform Ventures. Stephen holds an MS in Accounting from Boston College and a BS in Business Administration from Rockhurst University.",
              },
              {
                name: "Keith Becker",
                title: "Senior Vice President & Chief Credit Officer",
                image: "/images/elt/keith_becker.jpg",
                bio: "Keith has strengthened CFA's credit department since joining in January 2019, focusing on talent development, operational improvements, and customer service. His career in agricultural finance includes roles at AGRILAND FS, GROWMARK Inc., and CoBank. Keith's commitment to supporting agricultural enterprises through steady leadership reflects his dedication to sustainable growth in agricultural finance.",
              },
              {
                name: "Joe Funk",
                title: "Senior Vice President & Chief Program Lending Officer",
                image: "/images/elt/joe_funk.jpg",
                bio: "Joe empowers CFA's dealer network through impactful grower programs and integrations with leading crop protection, fertilizer, and seed manufacturers. Prior to CFA, he spent 14 years with CHS Inc. and CHS Capital, directing a national lending team covering cooperatives and agronomy retailers. Joe graduated from the University of Minnesota's Carlson School of Management.",
              },
              {
                name: "Kathy Berg",
                title: "Senior Vice President, Chief Administration & Human Resources Officer",
                image: "/images/elt/kathy_berg.jpg",
                bio: "Kathy leads CFA's human resources, administration, and organizational development functions, driving strategic initiatives that foster a high-performance culture. With over 20 years of HR experience, she brings deep expertise in talent management, leadership development, and employee engagement, focusing on building inclusive workplaces and aligning people strategies with business goals.",
              },
              {
                name: "Jordan Nussbaum",
                title: "Chief Security Officer",
                image: "/images/elt/jordan_nussbaum.jpg",
                bio: "Jordan leads CFA's information security, technology infrastructure, and system modernization initiatives. He has transformed CFA's technical operations from legacy systems into stable, modernized platforms that support the organization's rapid growth. Jordan builds high-performing teams and combines strategic vision with technical expertise to enhance efficiency, productivity, and security across CFA's operations.",
              },
            ].map((person) => (
              <div
                key={person.name}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {person.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-emerald-800">
                  {person.title}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Board of Directors */}
      <Section id="board-of-directors" className="bg-slate-50">
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Board of Directors
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              CFA's Board of Directors represents member cooperatives and brings
              deep expertise in agricultural operations, cooperative governance,
              and financial oversight.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Danny Posch",
                role: "Board Chairman",
                organization: "Mid Kansas Cooperative Association",
                title: "Executive Vice President and CFO",
                image: "/images/board/danny_posch.jpg",
                bio: "Danny Posch has served on the CFA Board since 2012 and is Executive Vice President and CFO of Mid Kansas Cooperative Association. A CPA and longtime cooperative finance leader, he previously worked for Lindburg Vogel Chartered auditing cooperatives and credit unions. He is active in several professional organizations supporting cooperative financial practices.",
              },
              {
                name: "Jeremy Wilhelm",
                role: "Board Vice-Chairman",
                organization: "Frontier Cooperative",
                title: "Chief Executive Officer",
                image: "/images/board/jeremy_wilhelm.jpg",
                bio: "Jeremy Wilhelm has served on the CFA Board since becoming CEO of Frontier Cooperative in 2017. He brings extensive experience from prior leadership roles at Western Milling and in agricultural finance at Farm Credit Services of America and U.S. Bank. He also serves on multiple Nebraska industry and foundation boards.",
              },
              {
                name: "Tim Burress",
                role: "Board Secretary",
                organization: "River Valley Cooperative",
                title: "Chief Executive Officer",
                image: "/images/board/tim_burress.jpg",
                bio: "Tim Burress has served on the CFA Board since 2012 and is the Chief Executive Officer of River Valley Cooperative. He previously spent eight years as River Valley's CFO and two decades in finance leadership roles at Deere & Company. He also serves on the board of Associated Benefits Corporation.",
              },
              {
                name: "Gary Brandt",
                role: "Board Treasurer",
                organization: "Cooperative Producers, Inc.",
                title: "Chief Executive Officer",
                image: "/images/board/gary_brandt.jpg",
                bio: "Gary Brandt has served on the CFA Board since 2021 and is the Chief Executive Officer of Cooperative Producers, Inc. He has held a wide range of leadership roles in the cooperative system, including operations, energy, and transportation oversight. He also partners in a family farming operation and previously led regional cooperative service groups.",
              },
              {
                name: "Jeff Krejdl",
                role: "Board Member",
                organization: "Ag Valley Cooperative",
                title: "President and CEO",
                image: "/images/board/jeff_krejdl.jpg",
                bio: "Jeff Krejdl has served on the CFA Board since 2022 and is President and CEO of Ag Valley Cooperative. He previously spent two decades in cooperative finance and operations, including serving as Ag Valley's CFO before becoming CEO. He is active in the Nebraska cooperative community and participates in national professional organizations.",
              },
              {
                name: "Joanna McClendon",
                role: "Board Member",
                organization: "Tennessee Farmers Cooperative",
                title: "Manager of Coop Financial Solutions",
                image: "/images/board/joanna_mcclendon.jpg",
                bio: "Joanna McClendon has served on the CFA Board since 2021 and is Manager of Coop Financial Solutions for Tennessee Farmers Cooperative. She has more than 20 years of experience in cooperative accounting, credit, and financial services, including leading CFS's recent expansion. She is active in the National Society of Accountants for Cooperatives and other credit industry organizations.",
              },
              {
                name: "Mark Orr",
                role: "Board Member",
                organization: "GROWMARK, Inc.",
                title: "Chief Executive Officer",
                image: "/images/board/mark_orr.jpg",
                bio: "Mark Orr has served on the CFA Board since 2025 and is the Chief Executive Officer of GROWMARK, Inc., where he leads an agricultural cooperative serving the U.S. and Canada across wholesale distribution, ag retail, energy, grain, and financial services. He brings more than 36 years of experience in cooperative leadership across finance, supply chain, and member services. He also serves on multiple national industry boards supporting cooperative advancement and agricultural education.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 p-5">
                  <div className="relative flex-shrink-0">
                    <div className="h-20 w-20 rounded-full overflow-hidden bg-slate-100">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-emerald-800 mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      {member.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {member.organization}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5">
                  <p className="text-xs leading-relaxed text-slate-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

    </>
  );
}
