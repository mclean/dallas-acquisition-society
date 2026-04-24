import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Dallas Acquisition Society",
  description: "Learn about the Dallas Acquisition Society — who we are, why we exist, and what happens at our monthly meetings.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-[#0A1628] text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#C17D3C] text-xs font-semibold uppercase tracking-widest mb-3">
              About
            </p>
            <h1
              className="text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Built by operators, for operators.
            </h1>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <h2
                className="text-2xl font-bold text-[#0A1628] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Why DAS exists
              </h2>
              <p className="text-[#1C1C1E] leading-relaxed mb-4">
                The lower middle market acquisition world is surprisingly tight-knit nationally,
                but locally fragmented. Houston has ETA Circle. Charlotte and Atlanta have their groups.
                Dallas — the third-largest metro in Texas and one of the most active M&A markets
                in the country — had nothing.
              </p>
              <p className="text-[#1C1C1E] leading-relaxed mb-4">
                The Dallas Acquisition Society was created to change that. Monthly in-person gatherings
                where the people actually doing deals can share what&apos;s working, what isn&apos;t,
                and who they&apos;re looking to meet.
              </p>
              <p className="text-[#1C1C1E] leading-relaxed">
                Programming is controlled by the community. Sponsors keep the lights on;
                they don&apos;t control who speaks or what gets discussed. That&apos;s not a small thing —
                it&apos;s the difference between a useful room and a pitch session.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-bold text-[#0A1628] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What ETA is
              </h2>
              <p className="text-[#1C1C1E] leading-relaxed mb-4">
                Entrepreneurship Through Acquisition (ETA) is the practice of buying an existing
                small business rather than starting one from scratch. The thesis: an established
                business with a proven model, existing customers, and a team in place is a better
                bet than a blank-sheet startup for most aspiring operators.
              </p>
              <p className="text-[#1C1C1E] leading-relaxed mb-4">
                ETA takes several forms. Traditional search funds — where a single searcher raises
                capital, spends 1-2 years finding a deal, then acquires and operates. Self-funded
                search — where the acquirer uses their own capital and SBA financing, keeping more
                equity. Independent sponsors — who identify deals and bring in capital partners
                deal by deal without a committed fund.
              </p>
              <p className="text-[#1C1C1E] leading-relaxed">
                All of these paths land in the same room at DAS. So do the service providers —
                the SBA lenders, M&A attorneys, QoE accountants, and buy-side advisors — who
                make deals happen.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-bold text-[#0A1628] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What happens at meetings
              </h2>
              <div className="bg-[#F8F6F2] border border-[#E5E2DC] rounded-xl p-6">
                <div className="space-y-4">
                  {[
                    { time: "6:00 PM", label: "Doors open", desc: "Networking — the main event. Come early." },
                    { time: "6:30 PM", label: "Welcome remarks", desc: "Brief update from the organizer. What's happening in the DFW deal market." },
                    { time: "6:35 PM", label: "Speaker or panel", desc: "20-30 minutes on a topic the community wants covered. Real content, not a pitch." },
                    { time: "7:05 PM", label: "Open Q&A", desc: "Audience drives this. Where the best insights usually surface." },
                    { time: "7:30 PM", label: "Open networking", desc: "Until the venue closes." },
                  ].map((item) => (
                    <div key={item.time} className="flex gap-4">
                      <div className="text-[#C17D3C] text-sm font-semibold w-16 flex-shrink-0 pt-0.5">
                        {item.time}
                      </div>
                      <div>
                        <p className="font-medium text-[#0A1628] text-sm">{item.label}</p>
                        <p className="text-[#6B6B6B] text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2
                className="text-2xl font-bold text-[#0A1628] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Who organizes DAS
              </h2>
              <div className="flex gap-5 items-start">
                <div className="w-16 h-16 bg-[#0A1628] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  MC
                </div>
                <div>
                  <p className="font-bold text-[#0A1628] text-lg">McLean Coble</p>
                  <p className="text-[#C17D3C] text-sm font-medium">Independent Sponsor · CGO Capital</p>
                  <p className="text-[#6B6B6B] text-sm mt-2 leading-relaxed">
                    McLean Coble is a Dallas-based independent sponsor focused on lower middle market
                    healthcare and business services acquisitions. He founded DAS because he wanted
                    the room to exist — and it didn&apos;t.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="/events"
                className="bg-[#0A1628] text-white font-medium px-6 py-3 rounded hover:bg-[#C17D3C] transition-colors text-center"
              >
                See Upcoming Events
              </Link>
              <Link
                href="/membership"
                className="border border-[#0A1628] text-[#0A1628] font-medium px-6 py-3 rounded hover:bg-[#0A1628] hover:text-white transition-colors text-center"
              >
                Join Free
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
