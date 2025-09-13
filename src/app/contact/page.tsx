import { Poppins } from "next/font/google";
import ClientContact from "./ClientContact";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400","500","700"],
  variable: "--font-poppins"
});

export default function Home() {
  return (
    <div className={`${poppins.className}`}>
      <ClientContact />
    </div>
  );
}
