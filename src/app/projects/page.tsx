'use client'

import Image from "next/image"
import GoBack from '../../assets/goback.svg'
import { GetServerSideProps } from "next";
import { getGitHubRepos } from "./fetchProfile/fetch-github";
import { useEffect, useState } from "react";

interface Repository {
    id: number;
    name: string;
    html_url: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
}


const ProjectPage: React.FC = () => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchRepos = async () => {
        const fetchedRepos = await getGitHubRepos('devfauze');
        setRepos(fetchedRepos);
        setLoading(false);
    };

        fetchRepos();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return(
        <>
            <main className="flex flex-col items-center justify-between p-24 w-screen max-[425px]:w-auto">
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
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">Meus Projetos</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {repos.map((repo) => (
                        <div key={repo.id} className="border max-[425px]:w-auto p-4 rounded-lg shadow-md overflow-hidden hover:border-gray-300 hover:bg-gray-100 hover:dark:border-green-700 hover:dark:bg-neutral-800/30">
                            <h2 className="text-xl font-semibold">{repo.name}</h2>
                            <p>{repo.description}</p>
                            <p className="text-sm text-gray-600">{repo.language}</p>
                            <div className="flex justify-between items-center mt-2">
                            <a href={repo.html_url} className="text-green-400 hover:underline">
                                Ver no GitHub
                            </a>
                            <div className="flex space-x-4">
                                <span>⭐ {repo.stargazers_count}</span>
                                <span>🍴 {repo.forks_count}</span>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProjectPage