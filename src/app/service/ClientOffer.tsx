"use client";

import Image from "next/image";
import Footer from "../components/footer";
import Menu from "../components/menu";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const playfair = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  variable: "--font-poppins",
});

const offers = [
  {
    image: "offer2.jpg",
    title: "Operations Support",
    description: [
      "Operational Readiness of marine activities ",
      "Coordination of offshore vessels and assets ",
      "Anchor Handling Coordination ",
      "Technical and HSE advisory",
      "Emergency Response and Contingency Plans",
      "Interface with Marine Warranty Surveyor (MWS), CLIENT and CONTRACTORs",
      "QC and revies survey results",
      "Provision of Offshore Client Representatives"
    ],
  },
  {
    image: "offer1.jpg",
    title: "Mobilization Support",
    description: [
      "Provision of execution  procedures (Marine, Survey, ROV, Installation)",
      "Mobilization and Deck Layout Plan",
      "Seafastening Plan and Loads calculations",
      "Structural Analysis and Load Calculations",
      "ROV & Survey Equipment Interfacing Plan",
      "Vessel, ROV and Lifting Certifications Records",
      "Risk Assessment and Health, Safety, Environment (HSE) Support"
    ],
  },
  {
    image: "offer3.jpg",
    title: "Engineering Support",
    description: [
      "Geotechnical and Geophysical Data Review",
      "Data Analysis Report and ALARPs",
      "Cable route design (Basic and Micro-routing)",
      "Cable Burial Risk Assessment",
      "Installation Planning and Engineering",
      "Installation Analysis (S-lay pipeline lay, Spools lifting)",
      "ROV and Vessel Requirements and Specifications",
      "Operational, Inspection and Maintenance Planning Support"
    ],
  },
  {
    image: "gis.jpg",
    title: "GIS & Field...",
    description: [
      "Project Documentation (GIS GDBS Structure, Up-to-date status)",
      "Management of GIS GDBS structure and data flow",
      "Updating GIS GDBS through all project phases",
      "GIS and Spatial Analysis Support",
      "Field Layout and Subsea infrastructure Design",
      "Data Management, QC and Integration",
      "Survey, Mapping and Geospatial Data Support"
    ],
  },
  {
    image: "offer5.jpg",
    title: "Spool Metrologies",
    description: [
      "Planning and optimizing offshore schedule",
      "Preparatory work and methodology",
      "Support offshore operations and calculations",
      "Provision of final results and metrology charts",
      "Assistance to spool design team"
    ],
  },
];

export default function ClientOffer() {
  return (
    <div className="bg-amber-50 text-black overflow-x-hidden">
      <Menu />

       <div className="w-full px-[5%] sm:px-[7.5%] max-w-[1500px] mx-auto flex flex-col lg:flex-row bg-amber-50 pt-10 pb-10  gap-y-8 lg:gap-y-0">
        <h2 className="text-cyan-900 w-full lg:w-1/3 underline text-2xl lg:text-4xl">
          Our Offer
        </h2>
        <div className="text-black w-full lg:w-2/3 text-[14px] sm:text-base xl:text-[18px] mt-4 lg:mt-30 xl:mt-36">
          Sea Clouds provides comprehensive technical advisory services in the preparation, execution, and management of offshore projects — including marine operations, survey, ROV, and post-installation activities — both from the Operator’s and the Contractor’s perspective. 
        </div>
      </div>


      {offers.map((offer, index) => {
  const isEven = index % 2 === 0;
  let bgEven=isEven;
  if(index===4)
  {
bgEven=!isEven;
  }

  return (
    <div
      key={index}
      className={`
        w-full md:w-[80%] mx-auto lg:mx-0 lg:w-full 
        flex flex-col lg:flex-row 
         ${bgEven ? "bg-gray-400" : "bg-amber-50"} 
        ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
      `}
    >
      {/* Obraz */}
      <div className="w-full lg:w-[55%] aspect-video lg:h-[500px] 2xl:h-[550px] relative">
        <Image
          src={`/offer/${offer.image}`}
          alt={offer.title}
          priority={index === 0}
          fill
          className={`object-cover ${
            isEven ? "object-right" : "object-center lg:object-right"
          }`}
        />
      </div>

      {/* Tekst */}
      <motion.div
        className={`
          w-[90%] mx-auto md:mx-0 md:w-full lg:w-[45%]
          flex flex-col md:flex-row justify-between lg:justify-normal lg:flex-col
           lg:pl-12 xl:pl-16 2xl:pl-24 
          pt-5 lg:pt-12
        `}
        initial={{ opacity: 0, x: isEven ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3
          className={`${playfair.className} text-cyan-900  
          md:w-1/3 lg:w-full text-4xl lg:text-3xl xl:text-4xl 
          font-light text-center md:text-left mt-10 md:mt-0 underline`}
        >
          {offer.title}
        </h3>

        <motion.ul
          className="list-none md:list-disc md:pl-6 space-y-1 mt-10 md:mt-20 lg:mt-10 italic 
          text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-xl mb-10 lg:mb-0 
          text-center md:text-left mx-auto md:mx-0 w-[90%] md:w-1/2 lg:w-[95%] pb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {offer.description.map((item, i) => (
            <motion.li
              key={i}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
})}


      <Footer />
    </div>
  );
}
