
import { Geist, Geist_Mono } from "next/font/google";
import PageTransition from "./PageTransition";
import "./globals.css";
import TrackingComponent from "@/components/TrackingProgress"
import CookieConsent from "./components/Cookie_Consent";
import ChangesMade from "./components/ChangesMade";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Befikr - Experience Freedom",
  description: "Befikr is a seamless, stress-free platform designed to bring ease and convenience to your life.",
  keywords: "Befikr, stress-free, seamless experience, convenience, ease",
  author: "Opera Garcia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <TrackingComponent />
        <PageTransition>{children}</PageTransition> {/* Handles slide-in */}
        <CookieConsent /> {/* Handles cookie consent */}
        <ChangesMade /> {/* displays changes made */}
      </body>
    </html>
  );
}
