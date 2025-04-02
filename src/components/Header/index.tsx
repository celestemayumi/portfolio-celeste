import Image from "next/image";
import Link from "next/link"
import { ubuntuMono } from "@/app/layout";


const Header = ()=>{
    return(
        <>
        <div className="flex justify-between items-center p-3 backdrop-blur-sm fixed w-full z-10">
            <Image
            src="/cat.png"
            width={70}
            height={70}
            alt="gato preto"
            className="m-2"
            />
            <nav>
                <ul className={`${ubuntuMono.className} flex text-black font-extrabold text-xl`}>
                    <li className="mx-5 hover:text-[#0074F8] transition duration-250">
                        <Link href="#about">&lt;sobre/&gt;</Link>
                    </li>
                    <li className="mx-5 hover:text-[#0074F8] transition duration-250">
                        <Link href="#about">&lt;stack/&gt;</Link>
                    </li>
                    <li className="mx-5 hover:text-[#0074F8] transition duration-250">
                        <Link href="#about">&lt;projetos/&gt;</Link>
                    </li>
                    <li className="mx-5 hover:text-[#0074F8] transition duration-250">
                        <Link href="#about">&lt;contato/&gt;</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
};

export default Header;