"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Newsletter",
    link: "/news",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <motion.div className="absolute top-0 z-50  w-screen">
      <motion.div
        style={{
          width: "5rem",
          height: "5rem",
          display: "flex",
          alignItems: "center",
        }}
        animate={{
          width: "100%",
          justifyContent: "space-between",
          transition: {
            delay: 1,
          },
        }}
        className="px-10 bg-black/10 backdrop-blur-sm border-b border-white/20 shadow-2xl  mx-auto "
      >
        <Link href={"/"}>
          <Image
            priority={true}
            src={"/assets/images/abibi-logo.png"}
            alt="abibi-logo"
            width={1920}
            height={1080}
            className="w-32 h-32 cursor-pointer hover:scale-105 duration-300 active:scale-95"
          />
        </Link>

        <motion.div
          style={{
            display: "none",
          }}
          animate={{
            display: "flex",
            transition: {
              delay: 1.5,
            },
          }}
          className="flex  items-center justify-between"
        >
          <Sheet>
            <SheetTrigger>
              <MenuIcon className="icon text-white lg:hidden" />
            </SheetTrigger>
            <SheetContent className="bg-gray-800 border-0">
              <SheetHeader>
                <SheetTitle className="text-red-500 underline underline-offset-4 font-bold uppercase text-2xl tracking-wider">
                  Contents
                </SheetTitle>
                <div className="flex flex-col gap-2">
                  {navItems.map((navItem, index) => {
                    return (
                      <p
                        className="text-lg text-white tracking-wide font-medium"
                        key={index}
                      >
                        {navItem.name}
                      </p>
                    );
                  })}
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>

          <div className="gap-10 hidden lg:inline-flex">
            {navItems.map((navItem, index) => {
              return (
                <Link
                  key={index}
                  className="navButton group"
                  href={navItem.link}
                >
                  {navItem.name}
                  <div className="cursor-pointer bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-500" />
                </Link>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
