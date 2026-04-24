"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/membership", label: "Membership" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-[#0A1628] text-white">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col leading-none">
            <span
              className="text-[#C17D3C] font-bold tracking-widest text-xs uppercase"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Dallas
            </span>
            <span
              className="text-white font-bold text-lg tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Acquisition Society
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-[#C17D3C] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/membership"
            className="bg-[#C17D3C] text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-[#D4913E] transition-colors duration-200"
          >
            Join Free
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0A1628]">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#C17D3C] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/membership"
              className="bg-[#C17D3C] text-white text-sm font-medium px-5 py-2.5 rounded text-center hover:bg-[#D4913E] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Join Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
