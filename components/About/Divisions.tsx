import { cn } from "@/lib/utils";
import Image from "next/image";

const Divisions = () => {
  return (
    <div className="relative top-0">
      <Subdivisions
        image="/assets/images/about/abibi-flims.png"
        title="ABIBI FLIMS"
        titleClassName="text-[#00F0FF]"
        className="bg-[#0B70AA]"
        content="Hello, my name is Abibi, and I enjoy working with creative and passionate individuals. I first began taking pictures when I was young with the camera on my Nokia phone. Today, with the establishment of my own media organisation, I can provide you countless shooting opportunities and total fulfilment. Welcome to my universe of creativity, where I hope to unite artists of all ages and inclinations to produce and curate mind blowing masterpieces /n My aim is to bring together artists of diverse backgrounds and interests to craft awe-inspiring works of art. But that's not all—my love for music has led me to establish a record label, where both artists and listeners can rediscover their passion for music anew. Welcome to a universe where creativity knows no bounds, and where the magic of art and music intertwine to create unforgettable experiences."
      />
      <Subdivisions
        image="/assets/images/about/records.png"
        title="ABIBI Records"
        titleClassName="text-[#EE8264]"
        className="bg-[#9E4931]"
        content="At Abibi India, we believe in the power of music to connect hearts and transcend cultural barriers. Our mission is to cultivate a global community of artists who share our passion for creativity and innovation. Whether you're a pop sensation, a classical virtuoso, or an avant-garde experimentalist, we welcome you with open arms. Our journey transcends boundaries as we dive into the deep seas of music, exploring diverse genres, languages, and experimental sounds. /n Let's explore the depths of music together and chart a course for new horizons."
      />
    </div>
  );
};

export default Divisions;

interface SubDivisionProps {
  className?: string;
  image: string;
  title: string;
  content: string;
  titleClassName: string;
}

const Subdivisions = ({
  className,
  image,
  title,
  content,
  titleClassName,
}: SubDivisionProps) => {
  console.log(content.split("/n"));
  return (
    <div className={cn(className, "w-screen")}>
      <div className="max-w-screen-2xl mx-auto p-4 md:p-16 flex flex-col md:flex-row-reverse items-center justify-between">
        <Image
          priority={true}
          className="w-96"
          alt="logo"
          src={image}
          width={1920}
          height={1080}
        />
        <div className="max-w-3xl flex flex-col gap-4">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <h1
              className={cn(
                titleClassName,
                "tracking-tighter font-light font-big-shoulder text-6xl  lg:text-8xl uppercase"
              )}
            >
              {title.split(" ")[0]}
            </h1>
            <h1
              className={cn(
                titleClassName,
                "font-medium font-big-shoulder text-6xl lg:text-8xl uppercase"
              )}
            >
              {title.split(" ")[1]}
            </h1>
          </div>
          {content.split("/n").map((para, index) => {
            return (
              <p
                key={index}
                className="text-white font-medium font-arimo text-justify"
              >
                {para}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
