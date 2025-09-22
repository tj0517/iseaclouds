import { Poppins } from "next/font/google";
import ClientNews from "./ClientNews";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400","500","700"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "Sea Clouds - News",
  description: "Discover articles on offshore engineering services, including offshore wind farm engineering, marine construction, ROV operations, seabed interventions, and offshore project management. Stay informed about the latest trends and innovations in the offshore industry.",
}

export default function Home() {
  return (
    <div className={`${poppins.className} bg-amber-50`}>
      <ClientNews />
    </div>
  );
}
