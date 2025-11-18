import { Poppins } from "next/font/google";
import ClientHome, { fadeUp, fadeLeft, scaleUpDelay } from "./ClientHome";
import { FaCalendarAlt, FaBuilding, FaShip, FaClock } from "react-icons/fa";
import type { Metadata } from "next";


export const metadata = {
  title: "Sea Clouds",
  description: "Sea Clouds delivers expert offshore engineering solutions and technical advisory for Oil & Gas and Wind Farm projects, emphasizing safety and innovation.",
}

export default function Home() {
  const stats =  [
  { number: 25, label: "Years of experience", icon: <FaCalendarAlt />,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { number: 50, label: "Large-scale Projects", icon: <FaBuilding />,description:"Lorem ipsum dolor sit amet, consecteturconsectetur adipiscing elit " },
  { number: 550, label: "Offshore Days Annually", icon: <FaShip />,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
  { number: 1000, label: "Engineering hours", icon: <FaClock />,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
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
    <div>
      <ClientHome stats={stats} items={items}  />
    </div>
  );
}
