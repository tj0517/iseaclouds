import { Poppins } from "next/font/google";
import ClientCourses from "./ClientCourses";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400","500","700"],
  variable: "--font-poppins"
});

export default function Home() {
  return (
    <div className={`${poppins.className}`}>
      <ClientCourses />
    </div>
  );
}
