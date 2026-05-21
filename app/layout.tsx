import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ModalProvider } from "@/context/ModalContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap" });

export const metadata: Metadata = {
  title: "RP Design & Construction | New Jersey",
  description:
    "Diseño y construcción de espacios exteriores en Nueva Jersey. Driveways, walkways, patios, retaining walls, hardscape design y más.",
  keywords: ["construction", "design", "New Jersey", "driveways", "patios", "retaining walls", "hardscape"],
  openGraph: {
    title: "RP Design & Construction",
    description: "Design + Build Solutions in New Jersey",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">
        <LanguageProvider>
          <ModalProvider>
            {children}
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
