import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokale SEO voor MKB | Meer Klanten via Google",
  description:
    "Professionele lokale SEO voor Nederlandse MKB-bedrijven. Vaste prijs, meetbare resultaten. Vanaf €349/maand. Gratis SEO-scan aanvragen.",
  keywords:
    "lokale SEO, SEO MKB, SEO bureau Nederland, Google vindbaarheid, lokale zoekmachine optimalisatie",
  openGraph: {
    title: "Lokale SEO voor MKB | Meer Klanten via Google",
    description:
      "Professionele lokale SEO voor Nederlandse MKB-bedrijven. Vaste prijs, meetbare resultaten.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
