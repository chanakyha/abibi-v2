"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";
const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const images = [
    {
      img: "/assets/images/home/hero/hero-1.jpg",
      name: "Kulasekarapatinam",
    },
    {
      img: "/assets/images/home/hero/hero-2.jpg",
      name: "United States of America Tour",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="">
      <div className="absolute z-50 top-1/3 md:top-1/4 md:left-[0vw] lg:top-[0vh]">
        <Image
          priority={true}
          alt="abibi-font"
          src={"/assets/images/abibi-logo.png"}
          width={1920}
          height={1080}
          className="md:w-[52vw] "
        />
      </div>
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <Image
                priority={true}
                className="object-start object-cover h-screen w-screen"
                alt={`Hero Image - ${index + 1}`}
                src={image.img}
                width={1920}
                height={1080}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="absolute text-white/40 uppercase text-center w-full md:w-fit md:text-lg font-extrabold tracking-wide text-xs bottom-0 pb-1 md:pb-0 md:bottom-1 right-0 md:right-5">
        {images[current].name}
      </p>
    </div>
  );
};

export default Hero;
