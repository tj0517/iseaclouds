"use client";

import Image from "next/image";
import Footer from "../components/footer";
import Menu from "../components/menu";
import { Poppins } from "next/font/google";
import { useState } from "react";

const playfair = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  variable: "--font-poppins",
});

const faqs = [
  {
    question: "What services does Sea Clouds provide?",
    answer: "Sea Clouds delivers a comprehensive suite of integrated engineering services for the Offshore Oil & Gas and Wind Farm sectors. Our expertise includes mobilization and offshore operations support in specialized services of Survey and Seabed Intervention, Offshore Construction, Marine Operations, QHSE (Quality, Health, Safety, and Environment), and ROV (Remotely Operated Vehicle) activities.",
  },
  {
    question: "How does Sea Clouds ensure flexibility?",
    answer: "We offer both remote and on-site support, tailored to meet the evolving demands of offshore projects. Our service model encompasses frame agreements for long-term partnerships and flexible, ad-hoc collaboration for specific, urgent projects.",
  },
  {
    question: "How does Sea Clouds deliver efficiency?",
    answer: "All services are delivered based on a detailed Cost-Time-Resource (CTR) assessment, presented to the client for review and approval, ensuring transparency and alignment with project objectives."
  },
  {
    question: "What is the expertise of the team?",
    answer: "Our dedicated team comprises seasoned professionals with extensive experience in the offshore industry, bringing a wealth of knowledge in engineering, project management, and safety compliance to deliver innovative solutions tailored to the unique challenges of each project."
  },
  {
    question: "What commitment does Sea Clouds?",
    answer: "At Sea Clouds, our commitment to quality, safety, and sustainability is at the forefront of our operations. We strive to execute projects with the highest standards of integrity and efficiency while building lasting partnerships with our clients.",
  },
];

export default function ClientContact() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`${playfair.className}`}>
      <Menu />

      {/* Background image */}
      <div className="w-full xl:h-[50vh] h-[50vh] relative">
        <Image
          src="/contact/contact_bg.jpg"
          alt="contact background"
          priority={true}
          fill
          className="object-cover object-top"
        />
        <div className="top-[30%] text-center w-full absolute text-white text-7xl font-bold">
          Contact us
          <div className="w-[15%] ml-auto mr-auto h-[15px] bg-cyan-900 rounded-full mt-7"></div>
        </div>
      </div>

      <div className="w-full xl:px-10 bg-amber-50 py-16 flex flex-col">
        <div className="text-cyan-900 xl:text-6xl text-5xl font-bold md:ml-[11%] ml-[8%]">
          Get in touch
        </div>

        <div className="w-[90%] ml-auto mr-auto flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          {/* Formularz */}
          <form className="w-full md:w-[45%] mx-auto p-6 space-y-4">
            <div className="xl:text-2xl text-xl font-bold text-black">Send a message</div>
            <div className="flex flex-col md:flex-row md:justify-between mt-6 gap-4 md:gap-0">
              <input
                type="text"
                placeholder="name"
                className="w-full md:w-[45%] text-black font-normal border-b-2 py-1.5 border-b-black text-xl focus:outline-none placeholder:text-black placeholder:text-xl"
              />
              <input
                type="email"
                placeholder="mail"
                className="w-full md:w-[45%] text-black font-normal border-b-2 border-b-black focus:outline-none placeholder:text-black placeholder:text-xl"
              />
            </div>

            <div className="mt-10">
              <textarea
                rows={5}
                placeholder="message"
                className="w-full text-black font-normal border-2 px-1.5 py-1.5 border-black text-xl focus:outline-none placeholder:text-black placeholder:text-xl resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="xl:w-[20%] xl:ml-[80%] w-[40%] bg-black hover:bg-cyan-900 text-white py-2 px-4 md:ml-[60%]  transition duration-200 text-xl font-bold"
            >
              Send
            </button>
          </form>

          {/* Mapka */}
          <div className="w-full md:w-[45%] h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2324.3261147804737!2d18.607646377024473!3d54.36888827260357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd748fc55ad289%3A0x68285da2d45be550!2sDo%20Studzienki%2063%2C%2080-227%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1755259178668!5m2!1spl!2spl"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="bg-amber-50 px-[7.55%] pb-30 flex flex-col text-black">
        <div className="text-5xl font-bold text-center mb-20 mt-20">
          Frequently asked questions
        </div>
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div key={index} className="border-b border-b-black rounded-t-[8px] overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold focus:outline-none transition-colors duration-300"
              >
                <span className="text-[20px] font-light">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`hover:cursor-pointer w-6 h-6 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {isActive && (
                <div className="px-6 pb-6 text-[18px] font-normal transition-opacity duration-300 mt-5">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}
