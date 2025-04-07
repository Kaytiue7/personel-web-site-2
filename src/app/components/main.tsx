import { PiXLogo } from "react-icons/pi";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaSpotify, FaDiscord } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi"

export default function Main(){
    return (
        <div className="text-black w-full mx-auto flex flex-col-reverse md:flex-row md:justify-evenly md:px-8 items-center gap-8 h-[90lvh]">
                <div className="self-center md:mb-[10lvh]">
                  <div className="self-center">
                    <h1 className="text-4xl font-semibold md:text-8xl">
                      <span className="text-primary-blue">Hi,</span> I’m Volkan
                    </h1>
        
                    <p className="mt-4 text-lg md:text-2xl">
                      I’m a developer with a passion for creating modern, high-performance applications.
                      Currently, I’m an intern at Regedit, where I work on exciting projects and enhance my skills in
                       Java, JavaScript, Python, and modern web & mobile technologies.
                    </p>
        
                    <p className="mt-4">
                      I specialize in:
                      
                    </p>
                  </div>
         
                  <div className="mt-6 flex gap-4 md:mt-20 flex-wrap justify-center md:justify-start "> 
                    <a
                      href="https://github.com/Kaytiue7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black p-3 rounded-lg hover:bg-black transition duration-300 group"
                    >
                      <FaGithub size={38} className="text-black group-hover:text-white transition duration-300 flex" />
                    </a>
        
                    <a
                      href="https://tr.linkedin.com/in/volkan-g%C3%BCm%C3%BC%C5%9F-987617304?trk=people-guest_people_search-card"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black p-3 rounded-lg hover:bg-black transition duration-300 group"
                    >
                      <FaLinkedin size={38} className="text-black group-hover:text-white transition duration-300" />
                    </a>
        
                    <a
                      href="mailto:vlkngms7@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black p-3 rounded-lg hover:bg-black transition duration-300 group"
                    >
                      <BiLogoGmail size={38} className="text-black group-hover:text-white transition duration-300" />
                    </a>
        
                    <a
                      href="https://discordapp.com/users/kaytiue"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black p-3 rounded-lg hover:bg-black transition duration-300 group"
                    >
                      <FaDiscord size={38} className="text-black group-hover:text-white transition duration-300" />
                    </a>
        
                    <a
                      href="https://api.whatsapp.com/send?phone=905510728013"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black p-3 rounded-lg hover:bg-black transition duration-300 group"
                    >
                      <FaWhatsapp size={38} className="text-black group-hover:text-white transition duration-300" />
                    </a>
        
                    <a
                      href="https://x.com/kaytiue/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black p-3 rounded-lg hover:bg-black transition duration-300 group"
                    >
                      <PiXLogo size={38} className="text-black group-hover:text-white transition duration-300" />
                    </a>
        
                    <a
                      href="https://www.instagram.com/vlkn.gms7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black p-3 rounded-lg hover:bg-black transition duration-300 group"
                    >
                      <FaInstagram size={38} className="text-black group-hover:text-white transition duration-300" />
                    </a>
        
                    <a
                      href="https://open.spotify.com/user/l63ofdumsz5ltmqgtev155zep/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-black p-3 rounded-lg hover:bg-black transition duration-300 group"
                    >
                      <FaSpotify size={38} className="text-black group-hover:text-white transition duration-300" />
                    </a>
                  </div>
        
                </div>
        
                <img
                  src="https://avatars.githubusercontent.com/u/167249804?v=4"
                  alt="Profile"
                  className="w-64 h-64 md:w-96 md:h-96 self-center object-cover rounded-full p-2 aspect-square md:mb-[20lvh]"
        
                />
              </div>
    );
};