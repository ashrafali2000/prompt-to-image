import HeaderSection from "@/components/headerSection";
import HeroSection from "@/components/heroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-gray-800">
        <HeaderSection />
        <HeroSection />
      </div>
    </main>
  );
}
