import { FaPhone, FaEnvelope, FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between lg:w-[70%] mt-5 pt-5 bg-white text-black border-t border-black">
  <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start mb-4 md:mb-0">
    <h1 className="text-xl">VOLKAN GÜMÜŞ</h1>
  </div>
  <div className="w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
    <nav className="flex flex-wrap justify-center gap-4 text-gray-800">
      <a className="cursor-pointer" href="#">Main Page</a>
      <a className="cursor-pointer" href="#">Portfolia</a>
      <a className="cursor-pointer" href="#">Expertise</a>
      <a className="cursor-pointer" href="#">Contact</a>
    </nav>
  </div>
  <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end">
    <div className="flex space-x-5">
      <FaYoutube   className="cursor-pointer text-xl hover:text-red-600  hover:scale-150 transition-all duration-300" />
      <FaTwitter   className="cursor-pointer text-xl hover:text-blue-500 hover:scale-150 transition-all duration-300" />
      <FaFacebook  className="cursor-pointer text-xl hover:text-blue-600 hover:scale-150 transition-all duration-300" />
      <FaInstagram className="cursor-pointer text-xl hover:text-pink-500 hover:scale-150 transition-all duration-300" />
    </div>
  </div>
</footer>

  );
}