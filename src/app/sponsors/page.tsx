import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors | Dallas Acquisition Society",
  description: "Sponsor the Dallas Acquisition Society and put your firm in front of North Texas's most active lower middle market acquisition community.",
};

const tiers = [
  {
    name: "Founding Partner",
    price: "$7,500 / year",
    highlight: true,
    tagline: "The name at the top of the room.",
    benefits: [
      "Logo on all event materials and the DAS website (home page)",
      "One exclusive speaking slot per year (you choose the topic)",
      "VIP reception access at each event",
      "Co-branded event opportunity (your space, your branding, DAS audience)",
      "Top placement in all member communications",
      "Founding Partner badge in the DAS member directory",
      "Social shoutout at every event + in every newsletter",
    ],
    cta: "Inquire",
  },
  {
    name: "Community Sponsor",
    price: "$2,000 / year",
    highlight: false,
    tagline: "Present at every meeting, all year.",
    benefits: [
      "Logo on the DAS website (sponsors page)",
      "Logo on event materials",
      "Social media acknowledgment at each event",
      "One co-branded email to member list per year",
      "Name mentioned from the stage at each event",
    ],
    cta: "Inquire",
  },
  {
    name: "Event Sponsor",
    price: "$600 / event",
    highlight: false,
    tagline: "Your firm covers the room, literally.",
    benefits: [
      "Cover food and beverages for one event",
      "Logo on that event's materials and RSVP page",
      "Verbal recognition from the stage",
      "Social shoutout for that event",
    ],
    cta: "Inquire",
  },
];

export default function SponsorsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-[#0A1628] text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#C17D3C] text-xs font-semibold uppercase tracking-widest mb-3">
              Sponsors
            </p>
            <h1
              className="text-4xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Put your firm in the right room.
            </h1>
            <p className="text-gray-300 max-w-2xl">
              DAS sponsors reach North Texas&apos;s most active community of acquisition entrepreneurs,
              M&A professionals, and capital providers. No trade show booths. No vendor tables.
              Just authentic presence in a community that knows what it wants.
            </p>
          </div>
        </section>

        {/* Sponsor tiers */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`border rounded-xl overflow-hidden flex flex-col ${
                    tier.highlight
                      ? "border-[#C17D3C] shadow-lg"
                      : "border-[#E5E2DC]"
                  } bg-white`}
                >
                  {tier.highlight && (
                    <div className="bg-[#C17D3C] text-white text-center text-xs font-semibold py-2 tracking-widest uppercase">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <p
                      className="font-bold text-[#0A1628] text-xl mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {tier.name}
                    </p>
                    <p className="text-[#C17D3C] font-semibold text-lg mb-2">{tier.price}</p>
                    <p className="text-[#6B6B6B] text-sm mb-5 italic">{tier.tagline}</p>

                    <ul className="space-y-2.5 flex-1 mb-6">
                      {tier.benefits.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-[#1C1C1E]">
                          <span className="text-[#C17D3C] font-bold flex-shrink-0 mt-0.5">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="mailto:hello@dallasacquisitionsociety.com?subject=Sponsorship Inquiry"
                      className={`block text-center font-medium px-5 py-3 rounded transition-colors ${
                        tier.highlight
                          ? "bg-[#C17D3C] text-white hover:bg-[#D4913E]"
                          : "border border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white"
                      }`}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-14 px-6 bg-[#F8F6F2] border-y border-[#E5E2DC]">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-2xl font-bold text-[#0A1628] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How sponsorship works at DAS
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: "Sponsors fund the room. Not the programming.",
                  desc: "Sponsors help cover event costs. Speakers are chosen by the community based on relevance, not dollars. The one exception: Founding Partners get a single speaking slot per year — and they still have to deliver a talk worth the room's time.",
                },
                {
                  title: "Your logo doesn't follow people home.",
                  desc: "DAS doesn't sell member contact lists or allow unsolicited sponsor outreach to members. You get presence and credibility at events and in our communications — not a lead extraction opportunity.",
                },
                {
                  title: "The audience knows the difference.",
                  desc: "DAS members are sophisticated. They're doing deals or supporting deals. A sponsor who shows up consistently, adds value to the conversation, and doesn't try to make every event about themselves earns a lot of goodwill. That's the play.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-[#C17D3C] pl-5">
                  <p className="font-bold text-[#0A1628] mb-1">{item.title}</p>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-6 bg-[#0A1628] text-white text-center">
          <div className="max-w-xl mx-auto">
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to sponsor?
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Email us and we&apos;ll get back to you within 48 hours.
            </p>
            <a
              href="mailto:hello@dallasacquisitionsociety.com?subject=DAS Sponsorship Inquiry"
              className="inline-block bg-[#C17D3C] text-white font-medium px-8 py-3 rounded hover:bg-[#D4913E] transition-colors"
            >
              hello@dallasacquisitionsociety.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
