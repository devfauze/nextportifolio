import Image from "next/image"
import GoBack from '../../assets/goback.svg'
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiBulma } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";

const Skills = () => {
    return(
        <>
            <main className="flex flex-col h-screen items-center justify-between p-24">
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                        <a
                            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                            href="/"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={GoBack}
                                alt="GoBack logo"
                                className="dark:invert hover: hover:scale-110 duration-200"
                                width={100}
                                height={25}
                                priority
                            />
                        </a>

                    </div>
                </div>

                <div className="flex flex-col h-full place-content-center text-center">
                    <div className="flex flex-wrap justify-center p-5 gap-4">
                        <a>
                        <RiJavascriptFill className="h-14 w-14 hover:text-yellow-200 hover:scale-125 duration-200" />
                        </a>
                        <a>
                        <BiLogoTypescript className="h-14 w-14 hover:text-blue-400 hover:scale-125 duration-200" />
                        </a>
                        <a>
                        <FaNode className="h-14 w-14 hover:text-green-600 hover:scale-125 duration-200" />
                        </a>
                        <a>
                        <FaReact className="h-14 w-14 hover:text-cyan-400 hover:scale-125 duration-200" />
                        </a>
                        <a>
                        <SiTailwindcss className="h-14 w-14 hover:text-cyan-300 hover:scale-125 duration-200" />
                        </a>
                        <a>
                        <FaBootstrap className="h-14 w-14 hover:text-purple-700 hover:scale-125 duration-200" />
                        </a>
                        <a>
                        <FaFigma className="h-14 w-14 hover:text-rose-400 hover:scale-125 duration-200" />
                        </a>
                        <a>
                        <DiMongodb className="h-14 w-14 hover:text-green-500 hover:scale-125 duration-200" />
                        </a>
                        <a>
                        <SiMysql className="h-14 w-14 hover:text-blue-500 hover:scale-125 duration-200" />
                        </a>
                        <a>
                        <SiPostgresql className="h-14 w-14 hover:text-blue-500 hover:scale-125 duration-200" />
                        </a>
                        <a>
                        <FaDocker className="h-14 w-14 hover:text-blue-500 hover:scale-125 duration-200" />
                        </a>
                        <a>
                        <SiPrisma className="h-14 w-14 hover:text-purple-900 hover:scale-125 duration-200" />
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 text-sm">
                        <a className="hover:text-yellow-200 hover:scale-125 duration-200">javascript</a>
                        {' | '}
                        <a className="hover:text-blue-400 hover:scale-125 duration-200">typescript</a>
                        {' | '}
                        <a className="hover:text-green-600 hover:scale-125 duration-200">node</a>
                        {' | '}
                        <a className="hover:text-cyan-400 hover:scale-125 duration-200">react</a>
                        {' | '}
                        <a className="hover:text-cyan-300 hover:scale-125 duration-200">tailwindcss</a>
                        {' | '}
                        <a className="hover:text-purple-700 hover:scale-125 duration-200">bootstrap</a>
                        {' | '}
                        <a className="hover:text-rose-400 hover:scale-125 duration-200">figma</a>
                        {' | '}
                        <a className="hover:text-green-500 hover:scale-125 duration-200">mongodb</a>
                        {' | '}
                        <a className="hover:text-blue-500 hover:scale-125 duration-200">mysql</a>
                        {' | '}
                        <a className="hover:text-blue-500 hover:scale-125 duration-200">postgres</a>
                        {' | '}
                        <a className="hover:text-blue-500 hover:scale-125 duration-200">docker</a>
                        {' | '}
                        <a className="hover:text-purple-900 hover:scale-125 duration-200">prisma</a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Skills