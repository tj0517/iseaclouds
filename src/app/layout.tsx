// src/app/layout.tsx

import type { Metadata } from "next";
// 1. Importujemy czcionkę
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./SmoothScroll";

// 2. KONFIGURACJA CZCIONKI (TUTAJ JEST FIX)
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700"], 
  variable: "--font-poppins",
  // KLUCZOWE ZMIANY DLA LCP:
  display: "swap",  // <-- To mówi: "Pokaż tekst od razu, nie czekaj na pobranie pliku czcionki"
  preload: true,    // <-- To wymusza pobieranie czcionki priorytetowo
  adjustFontFallback: false // Czasem pomaga uniknąć przesunięć (CLS), opcjonalne
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.seaclouds.eu";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Offshore Engineering & Technical Advisory | Sea Clouds",
  description: "Expert Offshore Engineering Services & Technical Advisory. We provide comprehensive Offshore Wind Farm Support, marine operations & vessel mobilization.",
  icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" },
  openGraph: {
    // ... (Twoje ustawienia OG bez zmian) ...
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