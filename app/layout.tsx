import type { Metadata } from "next";
import { Cinzel, Inter, Geist } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./components/providers/SmoothScrollProvider";
import { inter, playfair, spaceGrotesk, unica } from "./lib/fonts";
import Footer from "./components/layout/footer";
import Announcement from "./components/Announcement";

import HeadTop from "./components/layout/HeadTop";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const headingFont = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Nowhere Isle",
  description: "Gaming Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "dark",
        inter.variable,
        playfair.variable,
        spaceGrotesk.variable,
        unica.variable,
        headingFont.variable,
        bodyFont.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="antialiased pt-">
        <Announcement />
        <HeadTop />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Footer />
      </body>
    </html>
  );
}
