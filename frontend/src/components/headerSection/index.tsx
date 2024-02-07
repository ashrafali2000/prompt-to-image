import Image from "next/image";
import NavBar from "../navbar";
import PromptCreater from "../promptCreater";

export default function HeaderSection() {
  return (
    <section className="relative px-8 h-96 max-w-screen-xl mx-auto">
      <NavBar />
      <PromptCreater />
      <div className="absolute z-10 left-20 top-1/4 w-14 h-14 opacity-75">
        <Image
          src={"/Assests/homeAssests/bgHeader.png"}
          alt="bgimage"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
      <div className="absolute z-10 left-56 top-1/4 w-24 h-24 opacity-75">
        <Image
          src={"/Assests/homeAssests/bgHeader.png"}
          alt="bgimage"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
      <div className="absolute z-10 left-96 xl:left-[500px] xl:top-[100px] w-40 h-40 opacity-75">
        <Image
          src={"/Assests/homeAssests/bgHeader.png"}
          alt="bgimage"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
      <div className="absolute z-10 right-40 top-2/4 w-96 h-96 opacity-75">
        <Image
          src={"/Assests/homeAssests/bgHeader.png"}
          alt="bgimage"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
