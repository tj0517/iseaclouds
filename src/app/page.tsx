import { Poppins } from "next/font/google";
import ClientHome, { fadeUp, fadeLeft, scaleUpDelay } from "./ClientHome";
import type { Metadata } from "next";


const poppins = Poppins({ subsets: ["latin"], weight: ["200", "400", "500", "700"], variable: "--font-poppins" });

export const metadata = {
  title: "Sea Clouds",
  description: "Grow in offshore wind with our Sea Clouds courses",
}

export default function Home() {
  const stats = [
    { number: 25, label: "Years of experience" },
    { number: 50, label: "Large-scale Projects" },
    { number: 550, label: "Offshore Days Annually" },
    { number: 1000, label: "Engineering hours" },
  ];

  const items = [
    {
        title: "Offshore\nEngineering",
        text: "Sea Clouds brings together a team of seasoned professionals with deep offshore industry expertise, delivering efficient and effective offshore technical advisory and engineering solutions tailored to the needs of Oil & Gas and Wind Farm projects.",
    },
    {
        title: "Flexible\nService",
        text: "The company provides a range of services that include both remote and on-site assistance, allowing for immediate and adaptable responses to client needs.",
    },
    {
        title: "Quality\nSafety",
        text: "Sea Clouds prioritizes quality, safety, and sustainability in all operations, ensuring projects are executed with the highest standards of integrity and efficiency.",
    },
    {
        title: "Long-term\nCollaboration",
        text: "The company offers a combination of frame agreements for long-term collaboration and ad-hoc cooperation for specific projects, catering to diverse client requirements.",
    },
];


  return (
    <div className={`${poppins.className} bg-amber-50`}>
      <ClientHome stats={stats} items={items}  />
    </div>
  );
}
