import { Poppins } from "next/font/google";
import ClientOffer from "./ClientOffer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400","500","700"],
  variable: "--font-poppins"
});

export default function Home() {
  return (
    <div className={`${poppins.className}`}>
      <ClientOffer />
    </div>
  );
}
