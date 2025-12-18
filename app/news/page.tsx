import { Section } from '../components/Section'
import Image from 'next/image'

// Press releases data - easily add new releases here
const pressReleases = [
  {
    title: "CFA Surpasses $3.5 Billion in Commitments",
    date: "2024",
    excerpt: "Cooperative Finance Association reaches a major milestone, demonstrating continued growth and commitment to serving agricultural producers.",
    link: "/press/(CFA) Surpasses $3.5 Billion in Commitments- Justin.docx"
  },
  {
    title: "CFA and Bushel Announce Strategic Partnership",
    date: "2024",
    excerpt: "New partnership brings together agricultural finance and digital grain management to better serve farmers.",
    link: "/press/CFA Bushel Partnership NR.pdf"
  },
  {
    title: "CFA Achieves SOC 2 Type II Certification",
    date: "2024",
    excerpt: "Demonstrating our commitment to data security and operational excellence for our members.",
    link: "/press/SOC PR.docx"
  }
]

// Partners data
const partners = [
  {
    name: "AgVend",
    description: "Leading agricultural equipment and input management platform",
    website: "https://www.agvend.com",
    logo: "/images/partners/agvend.svg"
  },
  {
    name: "Bushel",
    description: "Digital grain management and commerce platform",
    website: "https://www.bushelpowered.com",
    logo: "/images/partners/bushel.svg"
  }
]

export default function NewsPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="relative bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">News & Partners</h1>
          <p className="text-xl text-emerald-50">
            Stay updated with the latest news from CFA and learn about our strategic partnerships 
            that help us better serve the agricultural community.
          </p>
        </div>
      </Section>

      {/* Press Releases Section */}
      <Section>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Read our latest press releases and company announcements.
        </p>
        
        <div className="space-y-6">
          {pressReleases.map((release, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-[280px]">
                  <div className="text-sm text-emerald-700 font-semibold mb-2">
                    {release.date}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {release.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {release.excerpt}
                  </p>
                </div>
                <a
                  href={release.link}
                  download
                  className="bg-emerald-700 text-white px-6 py-3 rounded-lg hover:bg-emerald-800 transition-colors whitespace-nowrap font-semibold"
                >
                  Read Full Release
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Partners Section */}
      <Section className="bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          We collaborate with industry-leading companies to provide comprehensive solutions 
          for agricultural producers.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-200 group"
            >
              <div className="relative h-48 bg-gray-100">
                <Image 
                  src={partner.logo} 
                  alt={`${partner.name} website preview`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {partner.description}
                </p>
                <span className="text-emerald-700 font-semibold inline-flex items-center gap-2">
                  Visit Website
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl text-emerald-50 mb-8">
            Want to receive our latest news and updates? Contact us to join our mailing list.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-emerald-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </Section>
    </main>
  )
}
