"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

const images = [
  "/assets/images/home/about-us/about-us-1.jpg",
  "/assets/images/home/about-us/about-us-2.jpg",
  "/assets/images/home/about-us/about-us-2.jpg",
  "/assets/images/home/about-us/about-us-3.jpg",
  "/assets/images/home/about-us/about-us-3.jpg",
  "/assets/images/home/about-us/about-us-3.jpg",
  "/assets/images/home/about-us/about-us-3.jpg",
  "/assets/images/home/about-us/about-us-3.jpg",
];

const OurTeam = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [1, 0], [-2000, 0]);

  const x2 = useTransform(scrollYProgress, [1, 0], [-1000, 0]);
  return (
    <div className="w-full bg-[#212120]">
      <div className="p-4 md:p-16 max-w-screen-2xl flex flex-col items-center md:items-start mx-auto space-y-8 md:py-24">
        <div className="font-bevan text-3xl md:text-8xl text-gray-100 italic md:text-left -space-y-1">
          <p className="text-5xl text-red-600">Our</p>
          <p>Artists</p>
        </div>
        <div className="flex flex-col items-center md:flex-row flex-wrap justify-center w-full lg:justify-between gap-4">
          <div className="relative flex items-center justify-center">
            <DirectionAwareHover
              imageUrl={"/assets/images/home/artist/artist-1.jpg"}
            >
              <p className="font-bold text-xl">Artist 1 Name</p>
              <p className="font-normal text-sm">Position</p>
            </DirectionAwareHover>
          </div>
          <div className="relative  flex items-center justify-center">
            <DirectionAwareHover
              imageUrl={"/assets/images/home/artist/artist-2.jpg"}
            >
              <p className="font-bold text-xl">Artist 2 Name</p>
              <p className="font-normal text-sm">Position</p>
            </DirectionAwareHover>
          </div>
          <div className="relative  flex items-center justify-center">
            <DirectionAwareHover
              imageUrl={"/assets/images/home/artist/artist-.jpg"}
            >
              <p className="font-bold text-xl">Artist 3 Name</p>
              <p className="font-normal text-sm">Position</p>
            </DirectionAwareHover>
          </div>

          {/* <button className="red-button flex items-center gap-3">
            Read More <ArrowUpRight className="icon" />
          </button> */}
        </div>
      </div>

      <div ref={imageContainerRef} className="overflow-x-hidden">
        <motion.div
          style={{
            x: x,
          }}
          className="flex relative -right-[2rem]"
        >
          {images.map((image, index) => {
            return (
              <Image
                priority={true}
                alt={`About Image ${index + 1}`}
                key={index}
                src={image}
                width={1920}
                height={1080}
                className="object-cover w-full object-top h-72"
              />
            );
          })}
        </motion.div>
        <motion.div
          style={{
            x: x2,
          }}
          className="flex relative -right-[20rem]"
        >
          {images.map((image, index) => {
            return (
              <Image
                priority={true}
                alt={`About Image ${index + 1}`}
                key={index}
                src={image}
                width={1920}
                height={1080}
                className="object-cover object-top w-full h-72"
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;
