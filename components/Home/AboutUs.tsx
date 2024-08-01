"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";

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

const content = {
  aboutAbibi: `Welcome to the world of Abibi India, a dynamic brand registered
            under Lemniscate Entertainments Private Limited, dedicated to
            shaping the future of entertainment.At Abibi India, we are a
            multifaceted brand with a keen focus on film production and music
            curation. Our film division, Abibi Films, is committed to delivering
            captivating cinematic experiences that resonate with audiences
            worldwide. From thought-provoking narratives to visually stunning
            spectacles, we strive to push the boundaries of storytelling through
            our innovative approach to filmmaking.In addition to our film
            endeavours, Abibi India proudly presents Abibi Records, our record
            label dedicated to nurturing talent and promoting exceptional music
            across genres and languages. With a commitment to diversity and
            innovation, Abibi Records serves as a platform for emerging and
            established artists alike, offering a space for creative expression
            and collaboration. Our multi-genre and multilingual approach ensures
            that we remain at the forefront of the evolving music landscape,
            catering to the tastes of audiences around the globe.Nestled in the
            vibrant heart of Chennai, Abibi India reaches beyond borders,
            collaborating with India and international vendors for media support
            and consultancy. Our strategic partnerships and global network
            enable us to leverage diverse perspectives and resources, empowering
            us to create impactful content and amplify our reach.Join us as we
            embark on an exciting journey of creativity and exploration. Whether
            you&apos;re a filmmaker, musician, or enthusiast of innovative
            entertainment, Abibi India welcomes you to be a part of our
            ever-evolving story.Experience the future of entertainment with
            Abibi India.`,
  aboutLemins: `Welcome to Lemniscate Entertainments Private Limited, a pioneering
            company established in 2017 in the vibrant city of Chennai, India.
            Dedicated to innovation and revolutionising the art industry,
            Lemniscate Entertainments has been at the forefront of shaping the
            future of entertainment.Driven by a passion for creativity and a
            commitment to excellence, we have continually pushed boundaries and
            redefined industry standards. With a focus on fostering talent,
            exploring new avenues, and embracing cutting-edge technologies, we
            have consistently strived to elevate the artistic landscape.Building
            on our legacy of innovation, we are proud to introduce our latest
            venture: Abibi India. As the newest addition to our portfolio, Abibi
            India is poised to transform the way art is created, curated, and
            connected on a global scale. With a vision to bridge cultures,
            transcend boundaries, and celebrate diversity, Abibi India serves as
            a platform for artists to showcase their talent, collaborate with
            peers, and engage with audiences worldwide.At Lemniscate
            Entertainments and Abibi India, we believe in the power of art to
            inspire, unite, and provoke change. Through our unwavering
            dedication to innovation and our steadfast commitment to artistic
            integrity, we strive to create meaningful experiences that resonate
            with hearts and minds around the world.Join us on this exhilarating
            journey as we continue to push the boundaries of creativity,
            reimagine the possibilities, and shape the future of entertainment
            together. Welcome to Lemniscate Entertainments. Welcome to Abibi
            India.`,
};

const AboutUs = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [1, 0], [2000, 0]);

  const x2 = useTransform(scrollYProgress, [1, 0], [1000, 0]);

  return (
    <div className="h-full font-arimo " id="about">
      <div className="mx-auto max-w-screen-2xl my-16 p-4 md:p-16 space-y-16">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex items-center justify-between flex-col gap-4">
            <p className="text-5xl font-bold text-white font-big-shoulder">
              ABOUT US
            </p>

            {/* <Link href={"/about"}>
              <button className="red-button flex items-center gap-3">
                Read More <ArrowUpRight className="icon" />
              </button>
            </Link> */}
            <Modal>
              <ModalTrigger className="red-button text-white font-arimo rounded-none w-full flex justify-center group/modal-btn">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 flex items-center gap-1">
                  Know more <ArrowUpRight className="icon" />
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                  ABIBI
                </div>
              </ModalTrigger>
              <ModalBody className="bg-neutral-900">
                <ModalFooter className="flex items-center justify-center bg-neutral-800">
                  <h4 className="text-2xl md:text-4xl font-big-shoulder underline decoration-red-600 decoration-4 text-neutral-100 font-bold text-center my-2">
                    ABOUT ABIBI
                  </h4>
                </ModalFooter>
                <ModalContent className="overflow-y-auto">
                  <div className="flex justify-center items-center">
                    <p className="text-justify text-sm md:text-lg text-white font-bold">
                      {content.aboutAbibi}
                    </p>
                  </div>
                </ModalContent>
              </ModalBody>
            </Modal>
          </div>
          <p className="text-sm line-clamp-6 md:line-clamp-5 lg:max-w-2xl xl:max-w-[68rem] 2xl:max-w-6xl text-justify md:text-xl text-white font-medium">
            {content.aboutAbibi}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-4">
          <div className="flex items-start flex-col gap-4">
            <Image
              priority={true}
              alt="lemin-logo"
              src={"/assets/images/lemin.jpg"}
              width={1920}
              height={1080}
              className="rounded-lg w-42 h-36 object-cover object-center"
            />
          </div>
          <p className="text-sm line-clamp-6 md:line-clamp-5 lg:max-w-2xl xl:max-w-[68rem] 2xl:max-w-6xl text-justify md:text-xl text-white font-medium">
            {content.aboutLemins}
          </p>
        </div>
      </div>

      <div ref={imageContainerRef} className="overflow-x-hidden">
        <motion.div
          style={{
            x: x,
          }}
          className="flex relative -left-[96rem]"
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
          className="flex relative -left-[96rem]"
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

export default AboutUs;
