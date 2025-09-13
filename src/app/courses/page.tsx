import { Poppins } from "next/font/google";
import ClientCourses from "./ClientCourses";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200","400","500","700"],
  variable: "--font-poppins"
});

export const metadata = {
  title: "Sea Clouds - Courses",
  description: "Grow in offshore wind with our Sea Clouds courses",
  icons: {
    icon: "/logo.png",
  },
  other: {
    // dodatkowe tagi do <head>
    preloadHero: `<link rel="preload" as="image" href="/courses/courses_bg1.jpg" />`,
  },
}


export default function Home() {
  return (
    <div className={`${poppins.className}`}>
      <ClientCourses />
    </div>
  );
}
