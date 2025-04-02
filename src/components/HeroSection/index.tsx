import Image from "next/image";
import { ubuntuMono } from "@/app/layout";
import { inter } from "@/app/layout";
import { montserrat } from "@/app/layout";

const HeroSection = () => {
  return (
    <>
      <main className="flex justify-evenly items-center min-h-[400px]">
        <div className="">
          <p className={`${montserrat.className} text-3xl text-black font-light`}>Olá! Sou a</p>
          <h1 className={`${inter.className} mb-4 text-6xl font-extrabold text-black`}>
            Celeste Tanaka
          </h1>
          <p className={`${ubuntuMono.className} mb-4 text-4xl font-extrabold text-[#0074F8]`}>Software Engineer</p>
        </div>
        <Image 
        src="/me.png" 
        height={300} 
        width={300} 
        alt="Memoji Celeste" />
      </main>
    </>
  );
};

export default HeroSection;
