import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import { siteUrl, siteName, siteTagline } from "@/lib/site";
import { Analytics } from "@/components/layout/Analytics";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

const description =
  "One platform for every Housing Association workflow — connected directly to your residents.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — ${siteTagline}`,
    template: `%s — ${siteName}`,
  },
  description,
  openGraph: {
    title: `${siteName} — ${siteTagline}`,
    description,
    url: siteUrl,
    siteName,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — ${siteTagline}`,
    description,
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={poppins.variable}>
      <body>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
