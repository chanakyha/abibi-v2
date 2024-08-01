"use client";

import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const OurBraches = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 md:p-16 my-16">
      <div className="font-bevan text-3xl md:text-8xl text-gray-100 italic md:text-left -space-y-1 flex flex-col items-center md:items-start">
        <p className="text-red-600 text-2xl md:text-5xl">Our</p>
        <p>Brands</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center md:place-items-start my-4 gap-4">
        <Card
          title="ABIBI FILMS"
          icon={
            <Image
              priority={true}
              src={"/assets/images/home/branches/abibi-films.png"}
              alt="image"
              width={1920}
              height={1080}
            />
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-500/10"
            colors={[[255, 0, 0]]}
          />
        </Card>
        <Card
          title="ABIBI RECORDS"
          icon={
            <Image
              priority={true}
              src={"/assets/images/home/branches/abibi-logo.png"}
              alt="image"
              width={1920}
              height={1080}
            />
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-500/10"
            colors={[[255, 0, 0]]}
          />
        </Card>
        <Card
          title="ABIBI STUDIOS"
          icon={
            <Image
              priority={true}
              src={"/assets/images/home/branches/abibi-records.png"}
              alt="image"
              width={1920}
              height={1080}
            />
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red-500/10"
            colors={[[255, 0, 0]]}
          />
        </Card>
      </div>
    </div>
  );
};

export default OurBraches;

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group/canvas-card flex items-center justify-center border-white/[0.2] shadow-xl shadow-white/5  max-w-sm w-full p-4 relative h-[30rem]"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-2 ease-in-out transition-all duration-800 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <div className="text-white w-full h-full opacity-0  group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 flex-col items-center justify-center">
          <div className="flex items-center justify-center flex-col gap-2">
            <p className="text-4xl font-big-shoulder tracking-wider">{title}</p>
            <button className="red-button flex items-center gap-2">
              Know more <ArrowUpRight className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
