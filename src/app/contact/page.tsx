import { Poppins } from "next/font/google";
import ClientContact from "./ClientContact";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400","500","700"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "Sea Clouds - Contact",
  description: "Reach out to Sea Clouds for expert offshore engineering solutions in the Oil & Gas and Wind Farm sectors. Contact us today to discuss your project needs.",
}

export default function Home() {
  return (
    <div className={`${poppins.className}`}>
      <ClientContact />
    </div>
  );
}
