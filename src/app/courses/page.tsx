import { Poppins } from "next/font/google";
import ClientCourses from "./ClientCourses";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400","500","700"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "Sea Clouds - Courses",
  description: "SeaClouds Offshore Courses: Project Surveyor & Survey Technician Training Advance your career with specialized offshore certification courses for Project Surveyors and Survey Technicians. Gain the skills required for oil & gas and wind farm projects.",
}


export default function Home() {
  return (
    <div className={`${poppins.className}`}>
      <ClientCourses />
    </div>
  );
}
