import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import Chatbot from "@/components/Chatbot";
import { getUpcomingEvents, formatEventDate } from "@/lib/events";

export default function HomePage() {
  const upcomingEvents = getUpcomingEvents().slice(0, 3);

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-[#0A1628] text-white py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#C17D3C] text-xs font-semibold uppercase tracking-widest mb-4">
              North Texas · Third Thursday Monthly
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Where North Texas&apos;s{" "}
              <em className="not-italic text-[#C17D3C]">acquisition entrepreneurs</em>{" "}
              come together.
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed">
              The Dallas Acquisition Society is a monthly gathering for independent sponsors,
              self-funded searchers, and the attorneys, lenders, and advisors who support
              lower middle market deals in DFW. No pitch decks. No vendor tables. Just operators.
            </p>
            <div className="max-w-xl">
              <NewsletterSignup variant="hero" />
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-[#C17D3C] text-white py-5 px-6">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-8 justify-center md:justify-between text-sm font-medium">
            <span>📍 Dallas, TX</span>
            <span>📅 Third Thursday Monthly</span>
            <span>🎯 Free Membership</span>
            <span>🤝 Independent Sponsors · Search Funds · M&A Advisors</span>
          </div>
        </section>

        {/* What is DAS */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C17D3C] text-xs font-semibold uppercase tracking-widest mb-3">
                About the Society
              </p>
              <h2
                className="text-3xl font-bold text-[#0A1628] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dallas needed this. Now it exists.
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed mb-4">
                Houston has ETA Circle. Charlotte has their group. Atlanta launched theirs this year.
                Dallas — the third-largest metro in Texas and a major M&A market — had nothing.
              </p>
              <p className="text-[#6B6B6B] leading-relaxed mb-6">
                DAS fills that gap. Monthly in-person events where people who buy businesses share
                what&apos;s actually working — deal sourcing, SBA structures, integration lessons,
                and capital stack decisions that don&apos;t get discussed on panels.
              </p>
              <Link
                href="/about"
                className="text-[#0A1628] font-medium text-sm border-b border-[#C17D3C] pb-0.5 hover:text-[#C17D3C] transition-colors"
              >
                Learn more about DAS →
              </Link>
            </div>
            <div className="bg-[#0A1628] rounded-xl p-8 text-white">
              <p
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Who shows up
              </p>
              <div className="space-y-4">
                {[
                  { label: "Independent Sponsors", desc: "Sourcing, structuring, and closing LMM deals" },
                  { label: "Self-Funded Searchers", desc: "First-time acquirers running their own process" },
                  { label: "M&A Attorneys & CPAs", desc: "Deal counsel, QoE, and tax structuring" },
                  { label: "SBA Lenders", desc: "Regional banks and non-bank lenders financing acquisitions" },
                  { label: "Capital Providers", desc: "Family offices and LPs backing operators" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C17D3C] mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 px-6 bg-white border-y border-[#E5E2DC]">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-[#C17D3C] text-xs font-semibold uppercase tracking-widest mb-2">
                  Events
                </p>
                <h2
                  className="text-3xl font-bold text-[#0A1628]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Upcoming Meetings
                </h2>
              </div>
              <Link
                href="/events"
                className="text-sm text-[#6B6B6B] hover:text-[#C17D3C] transition-colors hidden md:block"
              >
                View all events →
              </Link>
            </div>

            <div className="grid gap-4">
              {upcomingEvents.map((event, i) => (
                <div
                  key={event.id}
                  className={`border rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 ${
                    i === 0
                      ? "border-[#C17D3C] bg-[#C17D3C]/5"
                      : "border-[#E5E2DC] bg-white"
                  }`}
                >
                  <div className="flex-1">
                    {i === 0 && (
                      <span className="inline-block bg-[#C17D3C] text-white text-xs font-semibold px-2 py-0.5 rounded mb-2">
                        Next Event
                      </span>
                    )}
                    <h3
                      className="font-bold text-[#0A1628] text-lg"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {event.title}
                    </h3>
                    <p className="text-[#6B6B6B] text-sm mt-1">
                      {formatEventDate(event.date)} · {event.time}
                    </p>
                    {event.speaker && (
                      <p className="text-sm text-[#0A1628] mt-2">
                        Speaker: <span className="font-medium">{event.speaker.name}</span>
                        {" — "}{event.speaker.topic}
                      </p>
                    )}
                  </div>
                  {event.lumaUrl && (
                    <a
                      href={event.lumaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0A1628] text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-[#C17D3C] transition-colors whitespace-nowrap text-center"
                    >
                      RSVP
                    </a>
                  )}
                </div>
              ))}
            </div>

            <Link
              href="/events"
              className="block mt-6 text-sm text-[#6B6B6B] hover:text-[#C17D3C] transition-colors md:hidden text-center"
            >
              View all events →
            </Link>
          </div>
        </section>

        {/* The DAS Brief / Newsletter */}
        <section className="py-20 px-6 bg-[#0A1628] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#C17D3C] text-xs font-semibold uppercase tracking-widest mb-3">
              The DAS Brief
            </p>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Monthly intelligence on the DFW deal market.
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Event recaps, deal market commentary, member spotlights, and one resource worth your time.
              One email per month. Free forever.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterSignup variant="hero" />
            </div>
          </div>
        </section>

        {/* Sponsor CTA */}
        <section className="py-16 px-6 bg-[#F8F6F2] border-b border-[#E5E2DC]">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <h3
                className="text-2xl font-bold text-[#0A1628] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Interested in sponsoring DAS?
              </h3>
              <p className="text-[#6B6B6B] text-sm max-w-md">
                Put your firm in front of North Texas&apos;s most active acquisition community.
                Event Sponsors, Community Sponsors, and Founding Partners available.
              </p>
            </div>
            <Link
              href="/sponsors"
              className="bg-[#0A1628] text-white font-medium px-6 py-3 rounded hover:bg-[#C17D3C] transition-colors whitespace-nowrap"
            >
              Sponsorship Info →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
