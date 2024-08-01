import {
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-black/60 text-white border-t border-white/20">
      <div className="p-4 md:p-16 xl:max-w-screen-xl xl:mx-auto">
        <div className="flex flex-col items-center text-center gap-8 md:flex-row md:justify-between lg:items-start lg:gap-8">
          <div className="flex w-64 md:h-24 flex-col items-center gap-1 lg:items-start">
            <Image
              priority={true}
              src={"/assets/images/abibi-logo.png"}
              alt="abibi-logo"
              width={1920}
              height={1080}
              className="w-96 h-auto object-cover object-center md:relative md:bottom-10"
            />
          </div>
          <div className="flex flex-col gap-4 text-nav md:hidden lg:inline-flex lg:flex-row lg:flex-1 lg:justify-center  lg:text-left lg:gap-8">
            <div className="lg:gap-1 lg:text-sm lg:flex lg:flex-col">
              <h1 className="font-bold text-white">Products</h1>
              <p className="hover:underline cursor-pointer">Conference</p>
              <p className="hover:underline cursor-pointer">Pricing</p>
              <p className="hover:underline cursor-pointer">Solution</p>
            </div>
            <div className="lg:gap-1 lg:text-sm lg:flex lg:flex-col">
              <h1 className="font-bold text-white">Company</h1>
              <p className="hover:underline cursor-pointer">About</p>
              <p className="hover:underline cursor-pointer">Contact</p>
              <p className="hover:underline cursor-pointer">Careers</p>
              <p className="hover:underline cursor-pointer">Blog</p>
            </div>
            <div className="lg:gap-1 lg:text-sm lg:flex lg:flex-col">
              <h1 className="font-bold text-white">Support</h1>
              <p className="hover:underline cursor-pointer">Contact Us</p>
              <p className="hover:underline cursor-pointer">Support Policy</p>
              <p className="hover:underline cursor-pointer">Talk to Sales</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:w-1/3">
            <h1 className="font-bold">Subscribe to our newsletter.</h1>
            <p className="text-nav text-sm">
              Want to stay up to date with news and updates about our product?
              Subscribe.
            </p>
            <div className="flex items-center justify-between w-full p-4 border gap-2 rounded-md shadow-sm">
              <input
                type="text"
                placeholder="email@provider.com"
                className="bg-transparent flex-1 outline-none text-sm"
              />
              <ArrowRight />
            </div>
            <p className="text-xs text-nav">
              By subscribing to our newsletter you agree to our privacy policy
              and will get commercial communication.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-gray-300/20" />
      <div className="py-4 flex flex-col gap-4 md:flex-row md:justify-between xl:max-w-screen-xl xl:mx-auto ">
        <div className="text-nav flex flex-col items-center text-center md:text-left md:flex-row md:gap-4">
          <p className="text-sm">
            © 2024 Lemniscate Entertainments Private Limited
          </p>
          •
          <div className="flex flex-col md:flex-row md:gap-3">
            <p className="text-sm hover:underline cursor-pointer">
              Privacy policy
            </p>
            <p className="text-sm hover:underline cursor-pointer">
              Terms of Service
            </p>
            <p className="text-sm hover:underline cursor-pointer">
              Cookie Settings
            </p>
          </div>
        </div>
        <div className=" text-nav justify-center flex gap-3 items-center">
          <TwitterIcon className="w-5 h-5 cursor-pointer hover:scale-105 duration-200 transition-all ease-out" />
          <FacebookIcon className="w-5 h-5 cursor-pointer hover:scale-105 duration-200 transition-all ease-out" />
          <InstagramIcon className="w-5 h-5 cursor-pointer hover:scale-105 duration-200 transition-all ease-out" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
