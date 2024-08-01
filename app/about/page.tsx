"use client";

import AboutAbibi from "@/components/About/About-Abibi";
import Divisions from "@/components/About/Divisions";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect } from "react";

const AboutUsPage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="min-h-screen w-screen bg-[#131313]">
      <div className="w-full h-[30rem] flex justify-center items-center relative">
        <Image
          priority={true}
          alt="top-bg"
          src={"/assets/images/about/top-bg.jpg"}
          width={1920}
          height={1080}
          className="h-[30rem] object-cover oject-center w-full"
        />

        <p className="absolute top-1/2 text-white text-7xl font-big-shoulder font-bold tracking-wider uppercase">
          About US
        </p>
      </div>
      <AboutAbibi />
      <Divisions />
      <div className="max-w-screen-2xl p-4 md:p-16 mx-auto flex flex-col items-center gap-4">
        <TypewriterEffectSmooth
          className="text-center  text-[#505050] font-big-shoulder font-bold"
          words={[
            { text: "Get", className: "text-[#505050] text-4xl lg:text-8xl" },
            { text: "in", className: "text-[#505050] text-4xl lg:text-8xl" },
            { text: "touch", className: "text-[#505050] text-4xl lg:text-8xl" },
            { text: "with", className: "text-[#505050] text-4xl lg:text-8xl" },
            {
              text: "Us",
              className: "text-red-600 text-4xl lg:text-8xl animate-pulse",
            },
          ]}
        />
        <button className="red-button w-fit">Contact Us</button>
      </div>
    </div>
  );
};

export default AboutUsPage;
