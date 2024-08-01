import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="min-h-screen w-screen bg-[#131313]">
      <div className="w-full h-[30rem] flex justify-center items-center relative">
        <Image
          priority={true}
          alt="top-bg"
          src={"/assets/images/contact/contact-bg.jpg"}
          width={1920}
          height={1080}
          className="h-[30rem] object-cover object-top w-full"
        />

        <p className="absolute drop-shadow-2xl top-1/2 text-white text-7xl font-big-shoulder font-bold tracking-wider uppercase">
          Contact
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto p-4 md:p-16">
        <p className="text-center text-[#515151] text-xl font-arimo italic">
          Got questions or need assistance? Reach out to us anytime via email at
          reach@abibi.in or call us at +91 75501 25453. We&apos;re here to help
          and look forward to connecting with you!
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
