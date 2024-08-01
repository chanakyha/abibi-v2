import { newsletters } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";

const NewsPage = () => {
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
          NEWSLETTER
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto md:py-16 p-4">
        <h1 className="my-8 text-4xl text-center md:text-left md:text-6xl lg:text-7xl font-big-shoulder tracking-wide font-medium text-white underline decoration-red-500">
          NEWSROOM
        </h1>

        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
          {newsletters.map((newsletter, index) => {
            return (
              <Link
                href={`/news/${newsletter.id}`}
                key={index}
                className="flex flex-col cursor-pointer hover:scale-105 ease-out active:scale-95 duration-300 group gap-2 max-w-96 border border-white/20 p-2 shadow-xl shadow-white/5"
              >
                <Image
                  priority={true}
                  src={newsletter.thumnailPic}
                  alt={newsletter.id}
                  width={1920}
                  height={1080}
                  className="w-96 h-96 object-center object-cover"
                />
                <p className="line-clamp-4 italic  max-w-96 text-justify text-white/20 font-arimo font-medium">
                  {newsletter.postDate}
                </p>
                <p className="line-clamp-4 text-sm max-w-96 text-justify text-white font-arimo font-medium">
                  {newsletter.paragraph}
                </p>
                <button className="red-button group-hover:bg-red-800">
                  Read More
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
