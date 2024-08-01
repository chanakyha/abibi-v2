"use client";

import AboutUs from "@/components/Home/AboutUs";
import Hero from "@/components/Home/Hero";
import { useEffect } from "react";
import Lenis from "lenis";
import AbibiRecords from "@/components/Home/AbibiRecords";
import OurTeam from "@/components/Home/OurTeam";
import OurBraches from "@/components/Home/OurBraches";

const HomePage = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurBraches />
      <AbibiRecords />
      <OurTeam />
    </div>
  );
};

export default HomePage;
