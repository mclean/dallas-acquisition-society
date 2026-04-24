// Email subscription endpoint
// Stores email to a local JSON file (MVP) and optionally syncs to Beehiiv.
// To enable Beehiiv: set BEEHIIV_API_KEY and BEEHIIV_PUBLICATION_ID in .env.local

import { writeFile, readFile } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";

const SUBSCRIBERS_FILE = join(process.cwd(), "data", "subscribers.json");

interface Subscriber {
  email: string;
  subscribedAt: string;
  source: string;
}

async function readSubscribers(): Promise<Subscriber[]> {
  try {
    if (!existsSync(SUBSCRIBERS_FILE)) return [];
    const data = await readFile(SUBSCRIBERS_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveSubscribers(subscribers: Subscriber[]): Promise<void> {
  const dir = join(process.cwd(), "data");
  const { mkdir } = await import("fs/promises");
  await mkdir(dir, { recursive: true });
  await writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2));
}

async function addToBeehiiv(email: string): Promise<void> {
  const apiKey = process.env.BEEHIIV_API_KEY;
  const pubId = process.env.BEEHIIV_PUBLICATION_ID;
  if (!apiKey || !pubId) return;

  const res = await fetch(`https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email,
      reactivate_existing: false,
      send_welcome_email: true,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.warn("[beehiiv] subscription failed:", res.status, text);
  }
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return Response.json({ error: "Invalid email address." }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Save locally
    const subscribers = await readSubscribers();
    const alreadyExists = subscribers.some((s) => s.email === normalizedEmail);

    if (!alreadyExists) {
      subscribers.push({
        email: normalizedEmail,
        subscribedAt: new Date().toISOString(),
        source: "website",
      });
      await saveSubscribers(subscribers);
    }

    // Sync to Beehiiv if configured
    try {
      await addToBeehiiv(normalizedEmail);
    } catch (err) {
      console.warn("[beehiiv] sync failed:", err);
      // Don't fail the request if Beehiiv is down
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("[subscribe error]", err);
    return Response.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
