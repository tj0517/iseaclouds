import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
// Upewnij się, że ścieżka do SmoothScroll jest poprawna
import SmoothScroll from "./SmoothScroll"; 

// 1. Konfiguracja czcionki (Twoja poprawna wersja)
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700"], 
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  adjustFontFallback: false 
});

// 2. Definicja adresu bazowego (dla obrazków OG i sitemap)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
  ? process.env.NEXT_PUBLIC_BASE_URL 
  : "https://www.seaclouds.eu";

// 3. Główny obiekt Metadata
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  
  // Tytuł z szablonem (pozwala podstronom mieć np. "Kontakt | Sea Clouds")
  title: {
    default: "Offshore Engineering & Technical Advisory | Sea Clouds",
    template: "%s | Sea Clouds",
  },
  
  description: "Expert Offshore Engineering Services & Technical Advisory. We provide comprehensive Offshore Wind Farm Support, marine operations & vessel mobilization.",
  
  // Słowa kluczowe (Google ich nie używa do rankingu, ale inne wyszukiwarki tak)
  keywords: [
    "Offshore Engineering", 
    "Technical Advisory", 
    "Wind Farm Support", 
    "Marine Operations", 
    "Vessel Mobilization",
    "Sea Clouds"
  ],

  // Ikony
  icons: { 
    icon: "/logo.png", 
    shortcut: "/logo.png", 
    apple: "/logo.png" 
  },

  // Konfiguracja Robotów (BARDZO WAŻNE)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL - mówi Google, że to jest "oryginał" strony
  alternates: {
    canonical: "./",
  },

  // Open Graph (Facebook, LinkedIn, Discord)
  openGraph: {
    title: "Offshore Engineering & Technical Advisory | Sea Clouds",
    description: "Expert Offshore Engineering Services & Technical Advisory.",
    url: baseUrl,
    siteName: "Sea Clouds",
    images: [
      {
        url: "/logo.png", // Upewnij się, że masz taki plik w folderze public
        width: 1200,
        height: 630,
        alt: "Sea Clouds Offshore Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Ustawienie języka na angielski (zgodnie z treścią strony)
    <html lang="en" className={poppins.variable}>
      <body className="antialiased bg-amber-50 font-sans">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}