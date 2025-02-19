import { Geist, Geist_Mono } from "next/font/google";
import PageTransition from "./PageTransition";
import PageFadeOut from "./global";
import "./globals.css";

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
  author: "Your Name",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageFadeOut /> {/* Handles fade-out before navigation */}
        <PageTransition>{children}</PageTransition> {/* Handles slide-in */}
      </body>
    </html>
  );
}
