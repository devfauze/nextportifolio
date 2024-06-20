'use client'
import Image from "next/image"
import GoBack from '../../assets/goback.svg'
import { ReactTyped } from "react-typed"


const About = () => {
    return(
    <>
        <main className="flex flex-col items-center justify-between p-24">
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

            <div className="flex flex-col my-24 p-10 text-center">
                <h1 className="font-bold text-3xl text-green-400">
                    hello everyone
                </h1>
                <p>my name is fauze</p>
                <p>im a fullstack developer</p>

                <div className="mt-10">
                    <p className='font-extralight text-xl'>i like to {" "}
                    <ReactTyped 
                    className="text-green-400 text-2xl font-medium"
                        strings={['coding solutions', 'solve some problems', 'help in projects']}
                        typeSpeed={115}
                        backSpeed={115}
                        loop
                    />
                    </p>
                    <p className="mt-20 text-3xl max-sm:text-xl">
                        im looking to {" "} 
                        <ReactTyped
                        className="text-green-400"
                        strings={["collaborate", 'develop cool stuff', 'grow together']}
                        typeSpeed={115}
                        backSpeed={115}
                        loop
                        />
                        with development teams and companies
                    </p>
                </div>
            </div>
        </main>
    </>
    )
}

export default About