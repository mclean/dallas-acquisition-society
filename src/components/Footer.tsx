import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <p
              className="text-white font-bold text-lg mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Dallas Acquisition Society
            </p>
            <p className="text-sm leading-relaxed max-w-xs">
              North Texas&apos;s community for lower middle market acquisition entrepreneurs,
              independent sponsors, and the professionals who support them.
            </p>
            <p className="text-xs mt-4 text-[#C17D3C]">
              Third Thursday of every month · Dallas, TX
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Navigate</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/events" className="hover:text-[#C17D3C] transition-colors">Events</Link>
              <Link href="/about" className="hover:text-[#C17D3C] transition-colors">About</Link>
              <Link href="/membership" className="hover:text-[#C17D3C] transition-colors">Membership</Link>
              <Link href="/sponsors" className="hover:text-[#C17D3C] transition-colors">Sponsors</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Connect</p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://linkedin.com/company/dallas-acquisition-society"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C17D3C] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/DallasAcqSoc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C17D3C] transition-colors"
              >
                Twitter / X
              </a>
              <a href="mailto:hello@dallasacquisitionsociety.com" className="hover:text-[#C17D3C] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>© {new Date().getFullYear()} Dallas Acquisition Society. An initiative of CGO Capital LLC.</p>
          <p>
            Built by{" "}
            <a
              href="#"
              className="text-[#C17D3C] hover:underline"
            >
              McLean The Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
