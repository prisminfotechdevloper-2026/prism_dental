import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sharedcomponents/Navbar";
import { Footer } from "@/components/sharedcomponents/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SmileCare Dental Clinic | Healthy Smile, Happy Life",
  description: "SmileCare Dental Clinic provides advanced, gentle and affordable dental care with modern 3D technology and expert specialist doctors.",
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#083258]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
