import { Poppins } from "next/font/google";
import ClientContact from "./ClientContact";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400","500","700"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "Sea Clouds - Contact",
  description: "Grow in offshore wind with our Sea Clouds courses",
  icons: {
    icon: "/logo.png",
  },
  other: {
    // dodatkowe tagi do <head>
    preloadHero: `<link rel="preload" as="image" href="/contact/contact_bg.jpg" />`,
  },
}

export default function Home() {
  return (
    <div className={`${poppins.className}`}>
      <ClientContact />
    </div>
  );
}
