import { Ubuntu_Mono } from "next/font/google";
import Image from "next/image";
import { ubuntuMono } from "@/app/layout";

const About = () => {
  return (
    <>
      <div className={`${ubuntuMono.className} p-16`}>
        <div className="bg-[#282C34] flex p-16 rounded-md justify-center items-center">
          <Image
            src="/celeste.jfif"
            alt="Celeste"
            width={300}
            height={200}
            className="rounded-full w-auto h-auto max-w-[300px] max-h-[300px] mx-auto"
          />
          <div className="text-xl mx-16">
            <p className="text-[#F15BE2] font-extrabold text-2xl my-2">
              var
              <span className="text-[#3AA5D2]"> sobre</span>
              <span className="text-[#74D977]"> =</span>
            </p>
            <p className="text-[#D0FCAF]">
              "Sou a Celeste, estudante de Análise e Desenvolvimento de
              Sistemas, e sempre fui movida pela curiosidade e vontade de
              aprender. Descobri na tecnologia uma forma de criar, resolver
              problemas e transformar ideias em algo concreto. Atualmente, estou
              desenvolvendo projetos próprios e expandindo meus conhecimentos
              para crescer profissionalmente. Meu objetivo é ganhar experiência
              na área e, no futuro, construir uma carreira internacional. Fora
              da tecnologia, adoro explorar novos temas, aprender coisas
              diferentes e me desafiar constantemente. Acredito que evolução vem
              do esforço contínuo e de sair da zona de conforto. Se quiser bater
              um papo, é só chamar!"
            </p>
            <p className="text-[#B6B6B6] my-2">
              //aq eu penso depois no q eu coloco
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
