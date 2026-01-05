import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FadeInWhenVisible, ScaleIn, SlideFromLeft } from "@/app/components/animations";

export default function Hero() {
    return (
        <div className="w-full flex flex-row h-[650px] md:h-[650px] lg:h-[700px] xl:h-[775px] 2xl:h-[800px]">
            <div className="w-full lg:w-[45%] 2xl:w-[55%] h-full relative">
                {/* 1. OBRAZEK (LCP) */}
                <Image
                    src="/offer/offer3.webp"
                    alt="Offshore Engineering Services vessel conducting marine operations for Wind Farm Support in the Baltic Sea"
                    priority={true}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    fetchPriority="high"
                    decoding="sync"
                />

                {/* Ciemna warstwa */}
                <div className="absolute inset-0 bg-black/70 lg:bg-transparent z-0 pointer-events-none"></div>

                {/* LOGO */}
                <div className="absolute top-2.5 lg:top-10 left-2.5 lg:left-10 z-10">
                    <Image
                        src="/logo.png"
                        alt="Sea Clouds - Offshore Engineering & Technical Advisory Company Logo"
                        width={150}
                        height={150}
                        priority
                        className="hidden lg:block md:w-32 md:h-32 lg:w-32 lg:h-32"
                    />
                </div>
            </div>

            <div className="lg:bg-gray-400 lg:w-[55%] w-full absolute lg:relative h-full">
                <div className="w-[80%] xl:w-[75%] 2xl:w-[60%] ml-[15%] xl:ml-[20%] mt-10 hidden lg:flex flex-row justify-between font-light text-lg md:text-[16px] xl:text-[17px] text-amber-50">
                    <div><Link className="hover:text-cyan-900" href="/">Home</Link></div>
                    <div><Link className="hover:text-cyan-900" href="/projects/baltica2-wind">Projects</Link></div>
                    <div><Link className="hover:text-cyan-900" href="/news">News</Link></div>
                    <div><Link className="hover:text-cyan-900" href="/about_us">About us</Link></div>
                    <div><Link className="hover:text-cyan-900" href="/service">Service</Link></div>
                    <div><Link className="hover:text-cyan-900" href="/contact">Contact us</Link></div>
                </div>

                <div className="ml-auto mr-auto lg:ml-[15%] xl:ml-[20%] w-[75%] sm:w-[60%] lg:w-full">
                    <SlideFromLeft>
                        <h1 className="w-full lg:w-[70%] text-center lg:text-left 2xl:w-[50%] mt-16 md:mt-24 lg:mt-10 !text-amber-50 lg:!text-cyan-900">
                            Navigating <span>Offshore Engineering</span> & Technical Advisory
                        </h1>
                    </SlideFromLeft>

                    <FadeInWhenVisible delay={0.2}>
                        <p className="lg:w-[70%] text-center lg:text-left mt-12 lg:mt-8 xl:mt-15 text-amber-50 2xl:w-[50%] !font-thin !text-xl">
                            Sea Clouds delivers integrated Offshore Engineering Services and Offshore Technical Advisory for Oil & Gas and Offshore Wind Farm projects, with a strong focus on quality, safety, and sustainability.
                        </p>
                    </FadeInWhenVisible>

                    <ScaleIn delay={0.5}>
                        <Link href="/service">
                            <div className="p-4 bg-cyan-900 text-white w-[40%] ml-[30%] lg:ml-0 mt-12 lg:mt-16 text-center hover:cursor-pointer hover:text-cyan-900 hover:bg-amber-50 font-bold">
                                Our Services
                            </div>
                        </Link>
                    </ScaleIn>

                    <FadeInWhenVisible delay={0.7}>
                        <div className="w-[30%] lg:w-[12.5%] ml-[35%] lg:ml-0 flex flex-row justify-between text-3xl lg:text-2xl xl:text-3xl text-white mt-[70px] lg:mt-[80px]">
                            <a href="https://www.instagram.com/seaclouds_offshore/" target="_blank" rel="noopener noreferrer" aria-label="Visit Sea Clouds Instagram profile"><FaInstagram /></a>
                            <a href="https://pl.linkedin.com/company/sea-clouds" target="_blank" rel="noopener noreferrer" aria-label="Visit Sea Clouds LinkedIn profile"><FaLinkedinIn /></a>
                        </div>
                    </FadeInWhenVisible>
                </div>
            </div>
        </div>
    );
}
