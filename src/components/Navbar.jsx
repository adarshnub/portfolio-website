import React ,{useState} from 'react';
//import logo from "../assets/logo.png";
import logo from "../assets/icon7.gif";
import {FaBars ,FaTimes ,FaGithub ,FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import { BsFillPersonLinesFill} from "react-icons/bs";




const Navbar = () => {
    const [nav ,setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }

  return (
    <div className="fixed w-full h-[80px] text-gray-300 flex justify-between items-center px-4 bg-[#0a4e5c]">
        <div className="pt-4">
            <img src={logo} alt="logo " className="w-[70px] mb-4" />
        </div>

        {/*menu*/}
        
            <ul className="hidden md:flex text-purple-500">
                <li><a href="#_" class="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#0a192f] rounded-3xl group">
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#0a192f]"></span>
                    <span class="relative">Home</span>
                    </a>
                </li>
                <li>
                <a href="#_" class="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#0a192f] rounded-3xl group">
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#0a192f]"></span>
                    <span class="relative">About</span>
                    </a>
                </li>
                <li>
                <a href="#_" class="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#0a192f] rounded-3xl group">
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#0a192f]"></span>
                    <span class="relative">Skills</span>
                    </a>
                </li>
                <li>
                <a href="#_" class="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#0a192f] rounded-3xl group">
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#0a192f]"></span>
                    <span class="relative">Works</span>
                    </a>
                </li>
                <li>
                <a href="#_" class="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#0a192f] rounded-3xl group">
                    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#0a192f]"></span>
                    <span class="relative">Contact</span>
                    </a>
                </li>
            </ul>
        

        {/*hamburger icon*/}
        <div onClick={handleClick} className="md:hidden z-50 cursor-pointer">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobile menu*/}
        <ul className={!nav ? "hidden" : "absolute  top-0 left-0 w-full h-screen z-20 bg-[#0a192f] flex flex-col justify-center items-center lg:hidden"}>
                <li className="py-6 text-4xl hover:font-bold hover:text-purple-500">Home</li>
                <li className="py-6 text-4xl hover:font-bold hover:text-purple-500">About</li>
                <li className="py-6 text-4xl hover:font-bold hover:text-purple-500">Skills</li>
                <li className="py-6 text-4xl hover:font-bold hover:text-purple-500">Works</li>
                <li className="py-6 text-4xl hover:font-bold hover:text-purple-500">Contact</li>
        </ul>


        {/*social icons*/}
        <div className="hidden md:flex flex-col fixed top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                    <a className="flex justify-between items-center w-full text-gray-300 font-semibold" 
                    href="https://www.linkedin.com/in/adarsh-viswam-95161016b">
                        Linkedin <FaLinkedin size={30} /> 
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
                    <a className="flex justify-between items-center w-full text-gray-300 font-semibold" 
                    href="https://github.com/adarshnub">
                        Github <FaGithub size={30} /> 
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-300">
                    <a className="flex justify-between items-center w-full text-white font-semibold" 
                    href="/">
                        Email <HiOutlineMail size={30} /> 
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-300">
                    <a className="flex justify-between items-center w-full text-white font-semibold" 
                    href="/">
                        Resume <BsFillPersonLinesFill size={30}  /> 
                    </a>
                </li>
            </ul>
        </div>

    </div>
  );
}

export default Navbar;