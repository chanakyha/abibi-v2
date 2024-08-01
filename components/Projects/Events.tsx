"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Video from "next-video";

interface ProjectContentComponentProps {
  currentProject: Project;
}
const ProjectContentComponent = ({
  currentProject,
}: ProjectContentComponentProps) => {
  return (
    <div className="min-h-screen w-screen bg-[#131313] text-white">
      <div className="w-full h-[30rem] flex justify-center items-center relative flex-col">
        <Image
          alt="top-bg"
          src={currentProject.thumbnailImage!}
          width={1920}
          height={1080}
          className="h-[30rem] object-cover object-center w-full"
        />
        <p className="absolute top-1/2 text-white text-4xl lg:text-6xl font-big-shoulder text-center font-bold tracking-wider uppercase">
          {currentProject.title}
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto p-4 md:p-16 space-y-16">
        <Tabs
          defaultValue={currentProject.assets?.photos ? "photos" : "videos"}
          className="w-full"
        >
          <TabsList className="bg-transparent mb-8">
            {currentProject.assets?.photos && (
              <TabsTrigger
                className="text-6xl"
                type="button"
                asChild
                value="photos"
              >
                <p className="text-white cursor-pointer text-center md:text-left font-big-shoulder font-bold tracking-wider uppercase">
                  Pictures
                </p>
              </TabsTrigger>
            )}
            {currentProject.assets?.videos && (
              <TabsTrigger
                className="text-6xl"
                type="button"
                asChild
                value="videos"
              >
                <p className="text-white cursor-pointer text-center md:text-left font-big-shoulder font-bold tracking-wider uppercase">
                  Videos
                </p>
              </TabsTrigger>
            )}
          </TabsList>
          <TabsContent className="columns-3xs space-y-3" value="photos">
            {currentProject.assets?.photos?.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image}
                  alt={index.toString()}
                  width={1920}
                  height={1080}
                  loading="eager"
                  priority={true}
                  className="w-full"
                />
              );
            })}
          </TabsContent>
          <TabsContent className="columns-3xs space-y-3" value="videos">
            {currentProject.assets?.videos?.map((video, index) => {
              return <Video key={index} src={video} />;
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProjectContentComponent;
