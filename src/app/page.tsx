import Image from "next/image";
import Link from "next/link";
import Fauze from '../assets/byfauze.svg'
import Emoji from '../assets/myemoji2.png'

const Page = () => {
  return (
    <>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                    <a
                        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                        href="https://github.com/devfauze"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        <Image
                        src={Fauze}
                        alt="byfauze logo"
                        className="dark:invert hover: hover:scale-110 duration-200"
                        width={115}
                        height={25}
                        priority
                        />
                    </a>
                </div>
            </div>

            <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-emerald-200 after:via-green-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-green-700 before:dark:opacity-10 after:dark:from-emerald-900 after:dark:via-[#01ffb3] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <Image
                    className="relative right-14 dark:drop-shadow-[0_0_0.3rem_#ffffff20] max-sm:right-"
                    src={Emoji}
                    alt="Fauze Emoji"
                    width={425}
                    height={37}
                    priority
                />
            </div>

            <div className="mb-32 grid text-center gap-1 lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
                <Link 
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-green-700 hover:dark:bg-neutral-800/30"
                    href={'/about'}
                    rel="noopener noreferrer">
                        <h2 className="mb-3 text-2xl font-semibold hover:border-green-700">
                        about me{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ">
                        -&gt;
                        </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        find out more about me 
                        </p>
                </Link>

                <Link 
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-green-700 hover:dark:bg-neutral-800/30"
                    href={'/projects'}
                    rel="noopener noreferrer">
                        <h2 className="mb-3 text-2xl font-semibold hover:border-green-700">
                        projects{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ">
                        -&gt;
                        </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        things Ive been building 
                        </p>
                </Link>

                <Link 
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-green-700 hover:dark:bg-neutral-800/30"
                    href={'/skills'}
                    rel="noopener noreferrer">
                        <h2 className="mb-3 text-2xl font-semibold hover:border-green-700">
                        my skills{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none ">
                        -&gt;
                        </span>
                        </h2>
                        <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        to the best of my abilities
                        </p>
                </Link>
            </div>
        </main>
    </>
  );
}

export default Page