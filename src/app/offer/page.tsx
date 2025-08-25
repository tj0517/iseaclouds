import Image from "next/image";
import Footer from "../footer";
import Menu from "../menu";
import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google';
import { Poppins } from 'next/font/google'

const playfair = Poppins({
  subsets: ['latin'],
  weight: ['200','400', '500', '700'], // wybierz wagi, które potrzebujesz
  variable: '--font-poppins', // CSS variable do Tailwinda
})

  const offers = [
    {
      image: 'offer1.jpg',
      title: 'Operations Support',
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
      "Provision of Offshore Client Representatives"
    ]
    },
    {
      image: 'offer2.jpg',
      title: 'Tenders Support',
      description: ["Technical Documentation and Engineering evaluations",
      "Materials and Equipment Lists",
      "Scheduling and Timeline Development",
      "Development of methodologies",
      "Risk Assessment and Mitigation Plans",
      "Cost Estimation and Budgeting",
      "Supplier Identification and Qualification",
      "Health, Safety, and Environmental (HSE) Planning"]
    },
    {
      image: 'offer3.jpg',
      title: 'Vessels Mobilizations',
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
        "Emergency Response and Contingency Plans"
      ]
    },
    {
      image: 'offer4.jpg',
      title: 'Enginnering Support',
      description: [
        "Geotechnical and Geophysical Data Review and GAP Analysis",
        "Cable route design (Basic and Micro-routing)",
        "Cable Burial Risk Assessment",
        "Installation Planning and Engineering",
        "Installation Analysis (S-lay pipeline lay, Spools lifting)",
        "Inspection, Monitoring, and Quality Assurance",
        "Risk Assessment and Health, Safety, Environment (HSE) Support",
        "Operational Readiness and Handover Support",
        "ROV and Vessel Requirements and Specifications"
      ]
    },
    {
        image: 'offer5.jpg',
        title: 'GIS & Field Data Management',
        description: [
            "Project Documentation (GIS GDBS Structure, Up-to-date status)",
            "Management of GIS GDBS structure and data flow",
            "Updating GIS GDBS through all project phases",
            "GIS and Spatial Analysis Support",
            "Field Layout and Subsea infrastructure Design",
            "Data Management, QC and Integration",
            "Survey, Mapping and Geospatial Data Support",
            "Compliance and Reporting Data Delivery",
            "Operational, Inspection and Maintenance Planning Support"
          ]
      },
      {
        image: 'offer6.jpg',
        title: 'Audits & Inspections',
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
            "Documentation and Certification Verification"
          ]
      }
  ]
  


export default function Home() {
    return (
        <div className="bg-amber-50">
<Menu></Menu>
<div className="w-full flex flex-row bg-amber-50 pt-10 px-[10%] pb-10">
<h2 className={`${playfair.className} text-blue-800 w-full text-3xl sm:text-5xl xl:text-6xl font-bold mr-10 sm:mr-0`}>
Our Offer
</h2>
<div className="text-black mt-20 text-xs  xl:text-[18px]">Sea Clouds provides comprehensive technical advisory services in the preparation, execution, and management of offshore projects — both from the Operator’s and the Contractor’s perspective.</div>
</div>
{offers.map((offer, index) =>
  index % 2 === 0 ? (
    <div key={index}>
      {/* Pierwszy element z pary */}
      <div className="w-full flex flex-col md:flex-row md:bg-gray-400">
        <div className="w-full md:w-[60%] h-[60vh] relative">
          <Image
            src={`/offer/${offer.image}`}
            alt={offer.title}
            fill
            className="object-cover object-right"
          />
        </div>
        <div className="w-full md:w-[45%] flex flex-col sm:flex-row md:flex-col lg:w-[40%] sm:pl-5 lg:pl-16 pt-5 lg:pt-12">
          <h2
            className={`${playfair.className} text-blue-800 w-full sm:w-[50%] md:w-full text-4xl sm:ext-2xl lg:text-3xl xl:text-4xl font-bold text-center sm:text-left mt-10 sm:mt-0`}
          >
            {offer.title}
          </h2>
          <ul className="list-none sm:list-disc pl-6 space-y-1 mt-10 sm:mt-20 md:mt-5 lg:mt-10 italic xl:text-[16px] text-[13px] mb-10 md:mb-0 text-center sm:text-left ">
            {offer.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Drugi element z pary */}
      {offers[index + 1] && (
        <div className="w-full flex flex-col md:flex-row bg-amber-50">
          {/* ⬅️ na mobile obrazek zawsze pierwszy */}
          <div className="w-full md:w-[60%] h-[60vh] relative order-1 md:order-2">
            <Image
              src={`/offer/${offers[index + 1].image}`}
              alt={offers[index + 1].title}
              fill
              className="object-cover object-right"
            />
          </div>
          <div className="w-full md:w-[45%] flex flex-col sm:flex-row md:flex-col lg:w-[40%] sm:pl-5 lg:pl-16 pt-5 lg:pt-12 order-2 md:order-1">
            <h2
              className={`${playfair.className} text-blue-800 w-full sm:w-[50%] md:w-full text-4xl sm:ext-2xl lg:text-3xl xl:text-4xl font-bold text-center sm:text-left mt-10 sm:mt-0`}
            >
              {offers[index + 1].title}
            </h2>
            <ul className="list-none sm:list-disc pl-6 space-y-1 mt-10 sm:mt-20 md:mt-5 lg:mt-10 italic xl:text-[16px] text-[13px] mb-10 md:mb-0 text-center sm:text-left ">
              {offers[index + 1].description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  ) : null
)}

<Footer></Footer>
        </div>
    );}