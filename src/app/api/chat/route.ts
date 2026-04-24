import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `You are the Dallas Acquisition Society assistant. You help visitors learn about DAS and the lower middle market acquisition community in North Texas.

About DAS:
- Dallas Acquisition Society (DAS) is North Texas's community for lower middle market acquisition entrepreneurs, independent sponsors, and the professionals who support them.
- We meet monthly on the third Thursday, starting June 19, 2026 at 6:00 PM in Dallas, TX.
- Membership is free. No pitch decks. No vendor tables. Just operators.
- Founded by McLean Coble, an independent sponsor with CGO Capital.
- Website: dallasacquisitionsociety.com
- Email: hello@dallasacquisitionsociety.com
- Twitter: @DallasAcqSoc
- LinkedIn: linkedin.com/company/dallas-acquisition-society

About our events:
- Third Thursday monthly, 6:00 PM
- Format: Networking hour + one speaker or panel (30-45 min) + open discussion
- RSVP on Luma (link at dallasacquisitionsociety.com/events)
- First event: June 19, 2026 — DAS Launch Event

About membership:
- Free. Always.
- Sign up at dallasacquisitionsociety.com/membership
- Members receive monthly newsletter (The DAS Brief) and event invitations

About sponsorship:
- Founding Partner: $7,500/year — logo on all materials, exclusive speaking slot, VIP access
- Community Sponsor: $2,000/year — logo on site and event materials, social shoutouts
- Event Sponsor: $600/event — cover food and drinks, logo on event materials, verbal recognition
- Email hello@dallasacquisitionsociety.com for sponsorship inquiries

About ETA (Entrepreneurship Through Acquisition):
- ETA is the practice of acquiring an existing small business rather than starting one from scratch.
- Common paths: self-funded search, traditional search fund, independent sponsor model.
- DAS brings together people doing deals, people supporting deals (attorneys, CPAs, lenders), and people providing capital.
- Key resources: Acquiring Minds podcast, Searchfunder.com, HBR Guide to Buying a Small Business (Yudkoff & Ruback)

Keep responses concise and direct. If you don't know something, say so and suggest emailing hello@dallasacquisitionsociety.com.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response("Bad request", { status: 400 });
    }

    // Filter to only user/assistant messages and ensure valid format
    const filtered = messages
      .filter((m: { role: string; content: string }) => m.role === "user" || m.role === "assistant")
      .filter((m: { role: string; content: string }) => m.content?.trim())
      .slice(-20); // Max 20 messages for context

    if (filtered.length === 0 || filtered[filtered.length - 1].role !== "user") {
      return new Response("Bad request", { status: 400 });
    }

    const stream = await client.messages.stream({
      model: "claude-haiku-4-5",
      max_tokens: 500,
      system: SYSTEM_PROMPT,
      messages: filtered,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (
              chunk.type === "content_block_delta" &&
              chunk.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(chunk.delta.text));
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    console.error("[DAS chat error]", err);
    return new Response("Internal server error", { status: 500 });
  }
}
