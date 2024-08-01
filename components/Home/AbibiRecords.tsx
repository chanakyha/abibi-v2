import { TextGenerateEffect } from "../ui/text-generate-effect";

const AbibiRecords = () => {
  return (
    <div className="bg-[url('/assets/images/home/abibi-records/abibi-record-bg.png')]">
      <div className="bg-red-800/10 w-full h-full">
        <div className="max-w-screen-2xl mx-auto p-4 md:p-16 flex flex-col gap-4">
          <div className="font-bevan text-3xl md:text-8xl text-[#FFF2C5] italic text-center md:text-left -space-y-3">
            <p>ABIBI</p>
            <p>RECORDS</p>
          </div>
          <TextGenerateEffect
            words="At Abibi India, we believe in the power of music to connect hearts
            and transcend cultural barriers. Our mission is to cultivate a
            global community of artists who share our passion for creativity and
            innovation. Whether you're a pop sensation, a classical
            virtuoso, or an avant-garde experimentalist, we welcome you with
            open arms. Our journey transcends boundaries as we dive into the
            deep seas of music, exploring diverse genres, languages, and
            experimental sounds.  hello"
            className="md:text-justify text-center font-big-shoulder tracking-wide text-white text-xl"
          />
          <TextGenerateEffect
            words="Let's explore the depths of music together and chart a course
            for new horizons."
            className="md:text-justify text-center font-big-shoulder tracking-wide text-white text-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AbibiRecords;
