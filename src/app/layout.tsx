import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Qanna Holding GmbH | Unternehmerische Vielfalt",
    template: "%s | Qanna Holding",
  },
  description:
    "Qanna Holding GmbH - Unternehmerische Vielfalt unter einem Dach. Wertvoll Dienstleistungen, Qanna GmbH, Eckstein GmbH und AI Effizienz GmbH.",
  keywords: [
    "Qanna Holding",
    "Holding Gesellschaft",
    "Unternehmensgruppe",
    "Entrümpelung",
    "Unternehmensberatung",
    "KI-Beratung",
    "Schadstoffsanierung",
  ],
  authors: [{ name: "Qanna Holding GmbH" }],
  creator: "Qanna Holding GmbH",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://qanna-holding.de",
    siteName: "Qanna Holding",
    title: "Qanna Holding GmbH | Unternehmerische Vielfalt",
    description:
      "Unternehmerische Vielfalt unter einem Dach - Wertvoll, Qanna, Eckstein, AI Effizienz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qanna Holding GmbH",
    description: "Unternehmerische Vielfalt unter einem Dach",
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
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
