import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RP Design & Construction | New Jersey",
  description:
    "Thoughtful Design. Quality Construction. Timeless Spaces. Driveways, walkways, patios, retaining walls and more in New Jersey.",
  keywords: [
    "construction",
    "design",
    "New Jersey",
    "driveways",
    "patios",
    "retaining walls",
    "hardscape",
    "outdoor design",
  ],
  openGraph: {
    title: "RP Design & Construction",
    description: "Design + Build Solutions in New Jersey",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
