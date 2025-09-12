import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Seaclouds",
  description: "Opis strony dla SEO",
  icons: {
    icon: "/logo.png",
  },
  other: {
    // Preload obrazka hero
    "link:preload": "/offer/offer3.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="preload" as="image" href="/offer/offer3.jpg" />
        <link rel="preload" as="image" href="/hero.webp" />
      </head>
      <body>{children}</body>
    </html>
  )
}
