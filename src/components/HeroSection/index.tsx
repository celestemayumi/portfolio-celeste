import Image from "next/image";
import { ubuntuMono } from "@/app/layout";
import { inter } from "@/app/layout";
import { montserrat } from "@/app/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "../../icons/icons";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <main className="flex justify-evenly items-center min-h-[400px]">
        <div className="">
          <p
            className={`${montserrat.className} text-3xl text-black font-light`}
          >
            Olá! Sou a
          </p>
          <h1
            className={`${inter.className} mb-4 text-6xl font-extrabold text-black`}
          >
            Celeste Tanaka
          </h1>
          <p
            className={`${ubuntuMono.className} mb-4 text-4xl font-extrabold text-[#0074F8]`}
          >
            Software Engineer
          </p>
          <div className="flex">
            <Link href="https://github.com/celestemayumi" passHref>
              <FontAwesomeIcon
                icon={faGithub}
                className="text-black w-12 mx-2"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/celestetanaka/" passHref>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-black w-12 mx-2"
              />
            </Link>
          </div>
        </div>
        <Image src="/me.png" height={300} width={300} alt="Memoji Celeste" />
      </main>
    </>
  );
};

export default HeroSection;
