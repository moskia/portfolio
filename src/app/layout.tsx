import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My personal portfolio and creative space.",
};

// The root layout wraps every page in the app.
// Navbar and Footer appear on all routes automatically.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen flex-col bg-white text-neutral-900 antialiased">
        <Navbar />
        {/* main grows to fill remaining height, pushing Footer to the bottom */}
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
