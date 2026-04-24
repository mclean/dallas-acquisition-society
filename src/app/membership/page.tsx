import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import NewsletterSignup from "@/components/NewsletterSignup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership | Dallas Acquisition Society",
  description: "Free membership to the Dallas Acquisition Society. Join North Texas's community for acquisition entrepreneurs, independent sponsors, and M&A professionals.",
};

const included = [
  "Monthly event invitations — third Thursday, Dallas, TX",
  "The DAS Brief — monthly newsletter on LMM deal market and community updates",
  "Member directory access (added Q3 2026)",
  "Access to DAS private deal discussions (added Q4 2026)",
  "That's it. Free. No dues. No pitch to upsell you.",
];

export default function MembershipPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-[#0A1628] text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#C17D3C] text-xs font-semibold uppercase tracking-widest mb-3">
              Membership
            </p>
            <h1
              className="text-4xl font-bold mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Free. Always.
            </h1>
            <p className="text-gray-300 max-w-xl">
              No dues. No application. Just show up and be useful to the room.
            </p>
          </div>
        </section>

        {/* Signup */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-2xl font-bold text-[#0A1628] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Join the Society
              </h2>
              <NewsletterSignup variant="default" />
            </div>

            <div>
              <h3
                className="font-bold text-[#0A1628] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What&apos;s included
              </h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-[#1C1C1E]">
                    <span className="text-[#C17D3C] font-bold flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-16 px-6 bg-white border-y border-[#E5E2DC]">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl font-bold text-[#0A1628] mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Who belongs here
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Independent Sponsors",
                  desc: "You find, structure, and close LMM deals. You bring capital in on a deal-by-deal basis.",
                },
                {
                  title: "Self-Funded Searchers",
                  desc: "You're acquiring your first business with your own capital and SBA financing.",
                },
                {
                  title: "Traditional Searchers",
                  desc: "You raised a search fund and are running a systematic acquisition process.",
                },
                {
                  title: "M&A Attorneys",
                  desc: "You do deal counsel, LOI drafting, and purchase agreements for LMM transactions.",
                },
                {
                  title: "SBA Lenders",
                  desc: "You finance acquisitions — regional banks, non-bank lenders, SBA 7(a) specialists.",
                },
                {
                  title: "QoE & Tax Advisors",
                  desc: "You run quality of earnings, tax structuring, or financial due diligence on deals.",
                },
                {
                  title: "Capital Providers",
                  desc: "Family offices, LPs, and investors backing operators in the lower middle market.",
                },
                {
                  title: "Business Brokers",
                  desc: "You represent sellers and connect them with qualified buyers.",
                },
                {
                  title: "Post-Acquisition Operators",
                  desc: "You closed the deal. Now you're running the business and have lessons to share.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-[#E5E2DC] rounded-xl p-5 bg-[#F8F6F2]"
                >
                  <p
                    className="font-bold text-[#0A1628] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
