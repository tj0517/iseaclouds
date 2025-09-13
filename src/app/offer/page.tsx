import { Poppins } from "next/font/google";
import ClientOffer from "./ClientOffer";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400","500","700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Seaclouds - Offer",
  description: "Opis podstrony oferta dla SEO",
  icons: {
    icon: "/logo.png",
  },
};

export default function Home() {
  return (
    <> 

    <div className={`${poppins.className}`}>
      <ClientOffer />
    </div>
    </>
  );
}
