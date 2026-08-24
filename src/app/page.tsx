import { getProjects } from "@/sanity/lib/getProject";
import { client } from "@/sanity/lib/client";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import Menu from "./components/menu";
import Footer from "./components/footer";
import { FaCalendarAlt, FaBuilding, FaShip, FaClock } from "react-icons/fa";

export const metadata = {
  title: "Offshore Engineering & Technical Advisory | Sea Clouds",
  description: "Expert Offshore Engineering Services & Technical Advisory. We provide comprehensive Offshore Wind Farm Support, marine operations & vessel mobilization.",
}

export default async function Home() {
  const stats = [
    { number: 25, label: "Years of experience", icon: <FaCalendarAlt />, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { number: 50, label: "Large-scale Projects", icon: <FaBuilding />, description: "Lorem ipsum dolor sit amet, consecteturconsectetur adipiscing elit " },
    { number: 550, label: "Offshore Days Annually", icon: <FaShip />, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" },
    { number: 1000, label: "Engineering hours", icon: <FaClock />, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const items = [
    {
      title: "Offshore\nEngineering",
      text: "Sea Clouds delivers efficient marine solutions and expert consultancy, tailored specifically to the needs of Oil & Gas and Wind Farm projects.",
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

  const allProjects = await getProjects();

  if (allProjects.length === 0) {
    return <div>Project not found</div>;
  }

  const featuredProjects = allProjects.slice(0, 3).map((p) => ({
    title: p.title,
    industry: p.industry,
    slug: p.slug,
    location: p.location,
    date: p.year,
    photo: p.photo,
  }));

  let latestArticles: { title: string; slug: string; date?: string; photo?: string }[] = [];
  try {
    latestArticles = await client.fetch(`
      *[_type == 'article'] | order(date desc)[0...3]{
        title,
        "slug": slug.current,
        date,
        "photo": photo.asset->url
      }
    `);
  } catch (error) {
    console.error("Failed to fetch articles for home page:", error);
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization', // lub 'ProfessionalService'
    name: 'Sea Clouds',
    url: 'https://www.seaclouds.eu',
    logo: 'https://www.seaclouds.eu/logo.png',
    description: 'Expert Offshore Engineering Services & Technical Advisory. Comprehensive Offshore Wind Farm Support and marine operations.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gdańsk',
      addressCountry: 'PL'
    },
    sameAs: [
      "https://www.linkedin.com/company/sea-clouds" // Warto dodać prawdziwy link
    ]
  };

  return (
    <div className="overflow-x-hidden text-stone-600">
      <div className="block lg:hidden"><Menu /></div>
      <main>
        <Hero />
        <MainContent stats={stats} items={items} projects={featuredProjects} articles={latestArticles} />
      </main>
      <Footer />
    </div>
  );
}