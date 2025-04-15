'use client';

import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Repo {
    name: string;
    html_url: string;
    description: string | null;
    stargazers_count: string;
    forks_count:string;
}

interface User {
  avatar_url: string;
  login: string;
  created_at: string;
}
export default function Portfolio() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");

    const [githubInfo, setGithubInfo] = useState<User | null>(null);


    

    useEffect(() => {
        fetch("https://api.github.com/users/Kaytiue7/repos")
            .then(res => res.json())
            .then((data: Repo[]) => setRepos(data))
            .catch(err => console.error("GitHub verisi alınamadı:", err));
    }, []);


    useEffect(() => {
      fetch("https://api.github.com/users/Kaytiue7")
        .then(res => res.json())
        .then((data: User) => setGithubInfo(data))
        .catch(err => console.error("GitHub verisi alınamadı:", err));
    }, []);
    

    const handlePrev = () => {
        setDirection("left");
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? repos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) => (prevIndex === repos.length - 1 ? 0 : prevIndex + 1));
    };

    const currentRepo = repos[currentIndex];

    const variants = {
        enter: (direction: "left" | "right") => ({
            x: direction === "left" ? -300 : 300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: (direction: "left" | "right") => ({
            x: direction === "left" ? 300 : -300,
            opacity: 0,
            transition: { duration: 0.5 }
        })
    };
    return (
        <div className="text-black w-full mx-auto flex flex-col justify-start md:px-8 items-center gap-8 md:min-h-[100lvh] p-4">
            <div className="flex flex-col justify-start w-full gap-4 md:gap-0">
                <h1 className="text-5xl md:text-8xl font-bold self-center">Portfolio</h1>
                {githubInfo && (
                  <div className="flex items-center space-x-4">
                    <img
                      src={githubInfo.avatar_url}
                      alt="GitHub Profil Resmi"
                      className="md:w-20 md:h-20 w-14 h-14 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg md:text-2xl font-semibold text-left">{githubInfo.login}</h3>
                      <p className="text-gray-400 text-sm md:text-lg text-left">
                        Katılma tarihi: {new Date(githubInfo.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                )}

            </div>
            

            {repos.length > 0 && ( 
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={currentRepo.name}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className=" w-full self-center justify-center items-center flex flex-row"
                    >
                        <div className="flex flex-col md:max-w-2/5 rounded-lg border border-black shadow-xl shadow-black p-4 gap-6">
                          <div className="flex justify-between w-full h-full">
                              <a href={currentRepo.html_url} className="md:px-3">
                                  <FaGithub className="text-black text-6xl cursor-pointer opacity-0 absolute md:opacity-100 md:relative " />
                              </a>
                              
                              <img
                                src={`https://raw.githubusercontent.com/Kaytiue7/${currentRepo.name}/main/img.png`}
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '/github-logo.png';
                                }}
                                className="flex md:w-2/3 md:h-2/3 md:rounded-4xl rounded-2xl shadow-lg shadow-black aspect-square" loading="lazy"
                                alt={`${currentRepo.name} preview`}
                              />

                              <div className="md:px-3">
                                  <FaGithub className="text-black text-6xl cursor-pointer opacity-0 absolute md:relative" />
                              </div>
                          </div>
      
                          <div className="flex flex-row justify-between items-center md:w-full md:h-full">
                            <div>
                              <button 
                                className={"bg-gray-900 text-white p-4 md:p-6 rounded-full aspect-square cursor-pointer"}
                                onClick={handlePrev}
                              >
                                <FaArrowLeft className="md:text-2xl text-xl"/>
                              </button>
                            </div>
      
                            <div className="flex flex-col items-center justify-center w-full h-full px-4 md:px-8">
                                <h1 className="text-4xl md:text-7xl font-bold text-center">{currentRepo.name}</h1>  
                                
                                {currentRepo.description && (
                                  <p className="text-sm md:text-2xl mt-3 text-center">{currentRepo.description}</p>
                                )}

                              <div className="flex gap-4 text-yellow-500 mt-3 w-full justify-evenly">
                                <div className="flex items-center gap-1">
                                  <FaStar className="text-2xl" />
                                  <span className="text-xl">{currentRepo.stargazers_count}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <FaCodeBranch className="text-2xl" />
                                  <span className="text-xl">{currentRepo.forks_count}</span>
                                </div>
                              </div>
                            </div>
                              
      
                            <div>
                              <button
                                    className="bg-gray-900 text-white p-4 md:p-6 rounded-full aspect-square cursor-pointer"
                                    onClick={handleNext}
                                >
                                    <FaArrowRight className="md:text-2xl text-xl" />
                                </button>
                            </div>
                          </div>
                        </div>
                    </motion.div>
                  </AnimatePresence>

            )}
              
              
              
            

              {repos.length === 0 && <p>Yükleniyor veya repo bulunamadı...</p>}
        </div>
    );
}
