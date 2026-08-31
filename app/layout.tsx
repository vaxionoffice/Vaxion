import type { Metadata } from "next";
import { ScrollEffects } from "@/components/scroll-effects";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vaxion.pro"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vaxion — Build from a clearer signal.",
    description: "The operating layer for founders turning intent into forward motion.",
    url: "https://vaxion.pro",
    siteName: "Vaxion",
    type: "website",
    images: [{ url: "/images/vaxion-hero.png", width: 1312, height: 817, alt: "A luminous Vaxion signal core and orbital network." }],
  },
  title: {
    default: "Vaxion — Build with a clearer signal",
    template: "%s — Vaxion",
  },
  description: "Vaxion is a founder operating layer for turning intent into forward motion.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><ScrollEffects />{children}</body>
    </html>
  );
}
