"use client";

import { useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "@/lib/photos-gallery";
import Image from "next/image";
import Lenis from "lenis";

export default function GalleryPage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const [index, setIndex] = useState(-1);

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center">
      <div className="">
        <div className="w-full h-[30rem] flex justify-center items-center relative mb-20">
          <Image
            priority={true}
            alt="top-bg"
            src={"/assets/images/about/top-bg.jpg"}
            width={1920}
            height={1080}
            className="h-[30rem] object-cover oject-center"
          />

          <p className="absolute top-1/2 text-white text-7xl font-big-shoulder font-bold tracking-wider uppercase">
            Gallery
          </p>
        </div>
        <div className="max-w-screen-2xl mx-auto p-4 md:p-16">
          <PhotoAlbum
            photos={photos}
            layout="masonry"
            renderPhoto={(img) => {
              return (
                <Image
                  src={img.imageProps.src}
                  alt={img.imageProps.alt}
                  onClick={() => setIndex(Number(img.imageProps.alt))}
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="border-2 my-4 border-white/20 cursor-pointer shadow-xl hover:scale-105 hover:shadow-yellow-600/10 duration-300 ease-out"
                />
              );
            }}
          />

          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </div>
    </div>
  );
}
