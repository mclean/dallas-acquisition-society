export interface DASEvent {
  id: string;
  title: string;
  date: string; // ISO format
  time: string;
  venue: string;
  address: string;
  description: string;
  speaker?: {
    name: string;
    title: string;
    topic: string;
  };
  lumaUrl?: string;
  status: "upcoming" | "past";
}

export const events: DASEvent[] = [
  {
    id: "june-2026",
    title: "DAS Launch Event",
    date: "2026-06-18",
    time: "6:00 PM CDT",
    venue: "TBD — Dallas, TX",
    address: "Dallas, TX",
    description:
      "The inaugural Dallas Acquisition Society gathering. Come meet North Texas's growing community of acquisition entrepreneurs, independent sponsors, and the professionals who support them. No pitch decks. No vendor tables. Just people who buy businesses.",
    speaker: {
      name: "McLean Coble",
      title: "Independent Sponsor, CGO Capital",
      topic: "Why North Texas Needs a Real ETA Community",
    },
    lumaUrl: "https://lu.ma/dallas-acquisition-society",
    status: "upcoming",
  },
  {
    id: "july-2026",
    title: "DAS — July Meeting",
    date: "2026-07-17",
    time: "6:00 PM CDT",
    venue: "TBD — Dallas, TX",
    address: "Dallas, TX",
    description:
      "Monthly gathering for North Texas acquisition entrepreneurs and M&A professionals. Speaker and topic announced two weeks prior.",
    status: "upcoming",
  },
  {
    id: "august-2026",
    title: "DAS — August Meeting",
    date: "2026-08-21",
    time: "6:00 PM CDT",
    venue: "TBD — Dallas, TX",
    address: "Dallas, TX",
    description:
      "Monthly gathering for North Texas acquisition entrepreneurs and M&A professionals.",
    status: "upcoming",
  },
];

export function getUpcomingEvents(): DASEvent[] {
  const now = new Date();
  return events
    .filter((e) => new Date(e.date) >= now || e.status === "upcoming")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getPastEvents(): DASEvent[] {
  const now = new Date();
  return events
    .filter((e) => new Date(e.date) < now && e.status === "past")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
