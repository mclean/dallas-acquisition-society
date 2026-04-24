"use client";

import { useState } from "react";

export default function NewsletterSignup({
  variant = "default",
}: {
  variant?: "default" | "compact" | "hero";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Something went wrong. Try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`${
          variant === "hero" ? "text-white" : "text-[#1C1C1E]"
        } text-center py-2`}
      >
        <p className="font-medium">You&apos;re in.</p>
        <p className="text-sm opacity-75 mt-1">
          We&apos;ll send you event invites and The DAS Brief monthly.
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-3 py-2 text-sm border border-[#E5E2DC] rounded bg-white text-[#1C1C1E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C17D3C]"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#C17D3C] text-white text-sm font-medium px-4 py-2 rounded hover:bg-[#D4913E] transition-colors disabled:opacity-60"
        >
          {status === "loading" ? "..." : "Join"}
        </button>
        {errorMsg && <p className="text-red-500 text-xs mt-1">{errorMsg}</p>}
      </form>
    );
  }

  return (
    <div
      className={`${
        variant === "hero" ? "text-white" : "text-[#1C1C1E]"
      }`}
    >
      {variant !== "hero" && (
        <p className="text-sm text-[#6B6B6B] mb-3">
          Get event invites and The DAS Brief — our monthly newsletter on lower middle market deals and the DFW acquisition scene.
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={`flex-1 px-4 py-3 rounded text-[#1C1C1E] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C17D3C] ${
            variant === "hero"
              ? "bg-white/10 border border-white/20 text-white placeholder-white/50 focus:bg-white/15"
              : "bg-white border border-[#E5E2DC]"
          }`}
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#C17D3C] text-white font-medium px-6 py-3 rounded hover:bg-[#D4913E] transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {status === "loading" ? "Joining..." : "Join the Society"}
        </button>
      </form>
      {errorMsg && <p className="text-red-400 text-sm mt-2">{errorMsg}</p>}
      <p
        className={`text-xs mt-2 ${
          variant === "hero" ? "text-white/50" : "text-[#6B6B6B]"
        }`}
      >
        Free membership. One email per month. No spam.
      </p>
    </div>
  );
}
