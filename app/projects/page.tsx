import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = async () => {
  return (
    <div className="min-h-screen w-screen bg-[#131313]">
      <div className="w-full h-[30rem] flex justify-center items-center relative flex-col">
        <Image
          priority={true}
          alt="top-bg"
          src={"/assets/images/projects/projects-bg.jpg"}
          width={1920}
          height={1080}
          className="h-[30rem] object-cover object-center w-full"
        />

        <p className="absolute top-1/2 text-white text-7xl font-big-shoulder font-bold tracking-wider uppercase">
          SHOWCASES
        </p>
      </div>
      <div className="max-w-screen-2xl mx-auto md:py-16 p-4">
        <h1 className="my-8 text-4xl text-center md:text-left md:text-6xl lg:text-7xl font-big-shoulder tracking-wide font-medium text-white underline decoration-red-500 uppercase">
          OUR Projects
        </h1>

        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => {
            return (
              <Link
                href={`/projects/${project.id}`}
                key={index}
                className="flex flex-col w-96 h-96 hover:shadow-xl shadow-white/10 cursor-pointer hover:border border-white/20 p-2 hover:scale-105 ease-out active:scale-95 duration-500 group gap-2"
              >
                <Image
                  priority={true}
                  src={project.thumbnailImage!}
                  alt={project.id}
                  width={1920}
                  height={1080}
                  className="w-96 h-96 object-center object-cover"
                />
                <div className="flex items-center justify-between">
                  <p className="text-white text-2xl font-big-shoulder tracking-wide">
                    {project.title}
                  </p>
                  <ArrowUpRight className="icon text-white" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
