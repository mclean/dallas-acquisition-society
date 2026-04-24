import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { events, getUpcomingEvents, getPastEvents, formatEventDate } from "@/lib/events";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Dallas Acquisition Society",
  description: "Upcoming and past Dallas Acquisition Society events. Third Thursday monthly in Dallas, TX.",
};

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-[#0A1628] text-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#C17D3C] text-xs font-semibold uppercase tracking-widest mb-3">
              Events
            </p>
            <h1
              className="text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Monthly Meetings
            </h1>
            <p className="text-gray-300 mt-3 max-w-xl">
              Third Thursday of every month, 6:00 PM. Dallas, TX. RSVP required — space is limited.
            </p>
          </div>
        </section>

        {/* Upcoming */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl font-bold text-[#0A1628] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Upcoming Events
            </h2>

            {upcoming.length === 0 ? (
              <p className="text-[#6B6B6B]">No events scheduled yet. Check back soon.</p>
            ) : (
              <div className="space-y-6">
                {upcoming.map((event, i) => (
                  <div
                    key={event.id}
                    className={`border rounded-xl overflow-hidden ${
                      i === 0 ? "border-[#C17D3C]" : "border-[#E5E2DC]"
                    } bg-white`}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap items-start gap-3 mb-4">
                        {i === 0 && (
                          <span className="bg-[#C17D3C] text-white text-xs font-semibold px-2.5 py-1 rounded">
                            Next Event
                          </span>
                        )}
                        <span className="bg-[#F8F6F2] text-[#0A1628] text-xs font-medium px-2.5 py-1 rounded border border-[#E5E2DC]">
                          {event.time}
                        </span>
                      </div>

                      <h3
                        className="text-2xl font-bold text-[#0A1628] mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {event.title}
                      </h3>
                      <p className="text-[#C17D3C] text-sm font-medium mb-3">
                        📅 {formatEventDate(event.date)}
                      </p>
                      <p className="text-[#6B6B6B] mb-3 text-sm">📍 {event.venue}</p>
                      <p className="text-[#1C1C1E] leading-relaxed mb-5">{event.description}</p>

                      {event.speaker && (
                        <div className="bg-[#F8F6F2] rounded-lg p-4 mb-5 border border-[#E5E2DC]">
                          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-1">
                            Featured Speaker
                          </p>
                          <p className="font-bold text-[#0A1628]">{event.speaker.name}</p>
                          <p className="text-sm text-[#6B6B6B]">{event.speaker.title}</p>
                          <p className="text-sm text-[#1C1C1E] mt-2">
                            Topic: <em>{event.speaker.topic}</em>
                          </p>
                        </div>
                      )}

                      {event.lumaUrl ? (
                        <a
                          href={event.lumaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-[#0A1628] text-white font-medium px-6 py-3 rounded hover:bg-[#C17D3C] transition-colors"
                        >
                          RSVP on Luma →
                        </a>
                      ) : (
                        <p className="text-sm text-[#6B6B6B] italic">
                          RSVP link coming soon — join the newsletter to be notified.
                        </p>
                      )}
                    </div>

                    {/* Schema.org event data */}
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                          "@context": "https://schema.org",
                          "@type": "Event",
                          name: event.title,
                          startDate: `${event.date}T18:00:00-05:00`,
                          endDate: `${event.date}T21:00:00-05:00`,
                          eventStatus: "https://schema.org/EventScheduled",
                          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                          location: {
                            "@type": "Place",
                            name: event.venue,
                            address: {
                              "@type": "PostalAddress",
                              addressLocality: "Dallas",
                              addressRegion: "TX",
                              addressCountry: "US",
                            },
                          },
                          organizer: {
                            "@type": "Organization",
                            name: "Dallas Acquisition Society",
                            url: "https://dallasacquisitionsociety.com",
                          },
                          description: event.description,
                          isAccessibleForFree: true,
                          url: event.lumaUrl ?? "https://dallasacquisitionsociety.com/events",
                        }),
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Past events */}
        {past.length > 0 && (
          <section className="py-12 px-6 bg-white border-t border-[#E5E2DC]">
            <div className="max-w-4xl mx-auto">
              <h2
                className="text-2xl font-bold text-[#0A1628] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Past Events
              </h2>
              <div className="space-y-4">
                {past.map((event) => (
                  <div
                    key={event.id}
                    className="border border-[#E5E2DC] rounded-lg p-5 bg-[#F8F6F2] flex justify-between items-center"
                  >
                    <div>
                      <p className="font-bold text-[#0A1628]">{event.title}</p>
                      <p className="text-sm text-[#6B6B6B] mt-0.5">{formatEventDate(event.date)}</p>
                    </div>
                    <span className="text-xs text-[#6B6B6B] bg-white border border-[#E5E2DC] px-2.5 py-1 rounded">
                      Past
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-14 px-6 bg-[#0A1628] text-white">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-[#C17D3C] text-xs font-semibold uppercase tracking-widest mb-3">
              Never Miss an Event
            </p>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get event invites by email.
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Free membership includes event notifications and The DAS Brief monthly newsletter.
            </p>
            <Link
              href="/membership"
              className="bg-[#C17D3C] text-white font-medium px-6 py-3 rounded hover:bg-[#D4913E] transition-colors"
            >
              Join Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}
