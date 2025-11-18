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
    image: "offer1.webp",
    title: "Operations Support",
    description: [
      "Vessel DP Stability and Operational Manuals",
      "ROV Specifications and Documentation",
      "Installation and Construction Methodology",
      "Engineering Analysis and Calculations",
      "Health, Safety, and Environmental (HSE) Documentation",
      "Project Execution Plan and Schedule",
      "Inspection and QC Documentation",
      "Survey and Positioning Documentation",
      "Underwater Spool Metrologies",
      "Provision of Offshore Client Representatives",
    ],
  },
  {
    image: "offer2.jpg",
    title: "Tenders Support",
    description: [
      "Technical Documentation and Engineering evaluations",
      "Materials and Equipment Lists",
      "Scheduling and Timeline Development",
      "Development of methodologies",
      "Risk Assessment and Mitigation Plans",
      "Cost Estimation and Budgeting",
      "Supplier Identification and Qualification",
      "Health, Safety, and Environmental (HSE) Planning",
    ],
  },
  {
    image: "offer3.jpg",
    title: "Vessels Mobilizations",
    description: [
      "DP and Marine Suitability Survey",
      "Mobilization and Deck Layout Plan",
      "Vessel Stability Plan",
      "Structural Analysis and Load Calculations",
      "ROV Launch and Recovery Procedures",
      "ROV & Survey Equipment Interfacing Plan",
      "Health, Safety, and Environmental (HSE) Documentation",
      "Vessel, ROV and Lifting Certifications Records",
      "Seafastening Plan and Report",
      "Emergency Response and Contingency Plans",
    ],
  },
  {
    image: "offer4.jpg",
    title: "Enginnering Support",
    description: [
      "Geotechnical and Geophysical Data Review and GAP Analysis",
      "Cable route design (Basic and Micro-routing)",
      "Cable Burial Risk Assessment",
      "Installation Planning and Engineering",
      "Installation Analysis (S-lay pipeline lay, Spools lifting)",
      "Inspection, Monitoring, and Quality Assurance",
      "Risk Assessment and Health, Safety, Environment (HSE) Support",
      "Operational Readiness and Handover Support",
      "ROV and Vessel Requirements and Specifications",
    ],
  },
  {
    image: "offer5.jpg",
    title: "GIS & Field Data Management",
    description: [
      "Project Documentation (GIS GDBS Structure, Up-to-date status)",
      "Management of GIS GDBS structure and data flow",
      "Updating GIS GDBS through all project phases",
      "GIS and Spatial Analysis Support",
      "Field Layout and Subsea infrastructure Design",
      "Data Management, QC and Integration",
      "Survey, Mapping and Geospatial Data Support",
      "Compliance and Reporting Data Delivery",
      "Operational, Inspection and Maintenance Planning Support",
    ],
  },
  {
    image: "offer6.jpg",
    title: "Audits & Inspections",
    description: [
      "Vessel inspections (IMCA eCMID) and Project Audits (QHSE)",
      "QHSE and Project Execution Plan",
      "DP and Marine Suitability Surveys",
      "DP System or Client-Specific Audits",
      "Classification and Certification Audits",
      "Health, Safety, and Environmental (HSE) Audits",
      "Technical and Equipment Inspections",
      "Operational and Maintenance Audits",
      "Communication and Navigation Systems Check",
      "Documentation and Certification Verification",
    ],
  },
];

export default function ClientOffer() {
  return (
    <div className="bg-amber-50 text-black overflow-x-hidden">
      <Menu />

      {/* Hero */}
      <motion.div
        className="w-full flex flex-row bg-amber-50 pt-10 px-[10%] pb-10"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2
          className={`${playfair.className} text-cyan-900 w-full text-3xl sm:text-5xl xl:text-6xl font-bold mr-10 sm:mr-0`}
        >
          Our<br/> Offer
        </h2>
        <motion.div
          className="text-black mt-32  sm:mt-36 lg:mt-48 text-[14px] sm:text-[16px]   lg:text-[18px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sea Clouds provides comprehensive technical advisory services in the
          preparation, execution, and management of offshore projects — both
          from the Operator’s and the Contractor’s perspective.
        </motion.div>
      </motion.div>

      {offers.map((offer, index) => {
  const isEven = index % 2 === 0;

  return (
    <div
      key={index}
      className={`
        w-full md:w-[80%] mx-auto lg:mx-0 lg:w-full 
        flex flex-col lg:flex-row 
        ${isEven ? "lg:bg-gray-400" : "bg-amber-50 lg:flex-row-reverse"}
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
          font-thin text-center md:text-left mt-10 md:mt-0 underline`}
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
