import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";


export default function Portfolio () {
    return (
        <div className="text-black w-full mx-auto flex flex-col justify-between md:px-8 items-center gap-8 md:h-[90lvh] p-4">
            <div>
                <h1 className="text-5xl md:text-8xl font-bold py-6">Portfolio</h1>
            </div>

            <div className="flex w-full h-full p-4 justify-center">
                <div className="flex flex-col-reverse aspect-auto md:aspect-square md:w-auto md:h-full h-auto rounded-lg p-8 border border-black shadow-xl shadow-black">
                    <div className="flex flex-row justify-between items-center md:w-full md:h-full pt-6">
                        <div>
                          <button 
                            className={"bg-gray-900 text-white p-4 md:p-6 rounded-full aspect-square cursor-pointer"}
                          >
                            <FaArrowLeft className="md:text-2xl text-xl"/>
                          </button>
                        </div>

                        <div className="flex flex-col items-center justify-center w-full h-full px-4">
                            <h1 className="text-4xl md:text-8xl font-bold">DEXTER</h1>  
                            <p className="text-sm md:text-2xl mt-2">tonigh is the night</p>
                        </div>
                        

                        <div>
                          <button 
                            className={"bg-gray-900 text-white p-4 md:p-6 rounded-full aspect-square cursor-pointer"}
                          >
                            <FaArrowRight className="md:text-2xl text-xl"/>
                          </button>
                        </div>

                        
                        
                    </div>

                    <div className="flex justify-between w-full h-full">
                        <div>
                            <FaGithub className="text-black text-6xl cursor-pointer opacity-0 absolute md:opacity-100 md:relative" />
                        </div>
                        
                        <img src='/dex.jpg' className="flex aspect-square self-center justify-center rounded-4xl shadow-lg shadow-black"></img>
                        
                        <div>
                            <FaGithub className="text-black text-6xl cursor-pointer opacity-0 absolute md:relative" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};