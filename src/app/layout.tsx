import type { Metadata } from "next";
import ClientStyles from "./ClientStyles";

export const metadata: Metadata = {
  title: "Dallas Acquisition Society | North Texas M&A Community",
  description: "The Dallas Acquisition Society is North Texas's community for lower middle market acquisition entrepreneurs, independent sponsors, and the professionals who support them. Monthly meetings, third Thursday.",
  keywords: "ETA Dallas, acquisition entrepreneur Dallas, search fund Dallas, buy a business Dallas, Dallas M&A networking, North Texas acquisition group, independent sponsor Dallas, entrepreneurship through acquisition Texas",
  openGraph: {
    title: "Dallas Acquisition Society",
    description: "North Texas's community for lower middle market acquisition entrepreneurs. Monthly meetings, third Thursday.",
    url: "https://dallasacquisitionsociety.com",
    siteName: "Dallas Acquisition Society",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@DallasAcqSoc",
    title: "Dallas Acquisition Society",
    description: "North Texas's community for lower middle market acquisition entrepreneurs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Dallas Acquisition Society",
              url: "https://dallasacquisitionsociety.com",
              description: "North Texas community for lower middle market acquisition entrepreneurs",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dallas",
                addressRegion: "TX",
                addressCountry: "US",
              },
              sameAs: [
                "https://linkedin.com/company/dallas-acquisition-society",
                "https://twitter.com/DallasAcqSoc",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F6F2] text-[#1C1C1E] antialiased">
        <ClientStyles />
        {children}
      </body>
    </html>
  );
}
