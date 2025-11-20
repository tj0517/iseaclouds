import { Poppins } from "next/font/google";
import ClientOffer from "./ClientOffer";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400","500","700"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "Sea Clouds - Offer",
  description: "Explore Sea Clouds’ specialized services in offshore engineering, GIS & field data management, audits & inspections, and vessel mobilizations. Delivering excellence in project execution and operational support.",
}

export default function Home() {
  return (
    <> 

    <div className={`${poppins.className}`}>
      <ClientOffer />
    </div>
    </>
  );
}
