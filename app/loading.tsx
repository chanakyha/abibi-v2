import Image from "next/image";

const LoadingComponent = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <Image
        src={"/assets/images/abibi-logo.png"}
        alt="abibi-logo"
        width={1920}
        height={1080}
        className="w-96 h-96 animate-ping"
      />
    </div>
  );
};

export default LoadingComponent;
