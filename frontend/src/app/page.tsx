import HeaderSection from "@/components/headerSection";
import HeroSection from "@/components/heroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-black">
        <HeaderSection />
        <HeroSection />
      </div>
    </main>
  );
}
