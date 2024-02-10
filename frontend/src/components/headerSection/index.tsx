import Image from "next/image";
import NavBar from "../navbar";
import PromptCreater from "../promptCreater";

export default function HeaderSection() {
  return (
    <div className="bg-black">
      <section className="relative px-4 md:px-0 lg:px-10 xl:px-14  h-60 md:h-80 lg:h-96 xl:h-[450px] max-w-screen-xl mx-auto">
        <NavBar />
        <PromptCreater />
        <div className="absolute z-10 md:left-8 lg:left-14 xl:left-20 top-[110px] w-10 h-10  md:w-20 md:h-20 opacity-60">
          <Image
            src={"/Assests/homeAssests/bgHeader.png"}
            alt="bgimage"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="absolute z-10 left-16 md:left-32 lg:left-48 xl:left-60 top-[97px] w-16 h-16 md:w-28 md:h-28 opacity-60">
          <Image
            src={"/Assests/homeAssests/bgHeader.png"}
            alt="bgimage"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="absolute z-10 left-36 top-20 md:left-60 lg:left-[350px]  xl:left-[430px] lg:top-[95px] w-24 h-24 md:w-52 md:h-52 opacity-60">
          <Image
            src={"/Assests/homeAssests/bgHeader.png"}
            alt="bgimage"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="absolute z-10 right-0 xl:right-3 top-[150px] md:top-[110px] md:w-[400px] w-[150px] h-[150px] md:h-[400px] lg:w-[600px] lg:h-[600px] opacity-60">
          <Image
            src={"/Assests/homeAssests/bgHeader.png"}
            alt="bgimage"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </section>
    </div>
  );
}
