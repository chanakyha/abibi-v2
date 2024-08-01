import Image from "next/image";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const AboutAbibi = () => {
  return (
    <div className="bg-[#131313]">
      <div className="p-4 md:p-16 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        <Image
          priority={true}
          alt="abibi-photo"
          src={"/assets/images/about/abibi-photo.png"}
          width={1920}
          height={1080}
          className="lg:h-[30rem] h-fit lg:w-fit"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h1 className="text-red-600 tracking-tighter font-light font-big-shoulder text-8xl uppercase">
              About
            </h1>
            <h1 className="font-bold text-red-600 font-big-shoulder text-8xl uppercase">
              ABIBI
            </h1>
          </div>
          <TextGenerateEffect
            words="Hello, my name is Abibi, and I enjoy working with creative and passionate individuals. I first began taking pictures when I was young with the camera on my Nokia phone. Today, with the establishment of my own media organisation, I can provide you countless shooting opportunities and total fulfilment. Welcome to my universe of creativity, where I hope to unite artists of all ages and inclinations to produce and curate mind blowing masterpieces"
            className="text-justify font-medium font-arimo text-white text-lg"
          />
          <TextGenerateEffect
            words="My aim is to bring together artists of diverse backgrounds and interests to craft awe-inspiring works of art. But that's not all—my love for music has led me to establish a record label, where both artists and listeners can rediscover their passion for music anew. Welcome to a universe where creativity knows no bounds, and where the magic of art and music intertwine to create unforgettable experiences."
            className="text-justify font-medium font-arimo text-white text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutAbibi;
