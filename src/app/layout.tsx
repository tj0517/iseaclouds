// src/app/layout.tsx (server)
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";



const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "500", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Seaclouds",
  description: "Opis strony",
  icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-amber-50`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
