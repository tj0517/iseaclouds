// src/app/layout.tsx (server)
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";

// 1. Zaktualizowałem wagi, żeby pasowały do klas Tailwind (font-light = 300)
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700"], 
  variable: "--font-poppins" 
});

// Adres domeny do pełnych ścieżek URL (wymagane dla obrazków w social media)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.seaclouds.eu";

export const metadata: Metadata = {
  // 2. Dodajemy metadataBase, żeby Next.js wiedział jak tworzyć pełne linki
  metadataBase: new URL(baseUrl),

  title: "Offshore Engineering & Technical Advisory | Sea Clouds",
  description: "Expert Offshore Engineering Services & Technical Advisory. We provide comprehensive Offshore Wind Farm Support, marine operations & vessel mobilization.",
  
  icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" },

  // 3. To sprawi, że link będzie ładny na LinkedIn/Facebooku
  openGraph: {
    title: "Offshore Engineering & Technical Advisory | Sea Clouds",
    description: "Expert support for Offshore Wind Farms & Oil/Gas projects. Marine operations, survey, ROV & vessel mobilization.",
    url: baseUrl,
    siteName: "Sea Clouds",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/offer/offer3.jpg", // Zdjęcie, które wyświetli się przy linku (użyłem tego z Hero)
        width: 1200,
        height: 630,
        alt: "Sea Clouds Offshore Engineering",
      },
    ],
  },
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