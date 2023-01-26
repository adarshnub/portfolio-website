import React from 'react';
//import {HiArrowNarrowRight} from "react-icons/hi";



const Home = () => {
  return ( 
    <div name='home' className="w-full h-screen bg-[#107c91]">

       
        
        {/*container*/}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pl-24 ">
            <p className="text-red-400">Hi, my name is</p>
            <div class="typewriter">
            <h1 className="text-4xl sm:text-7xl text-gray-400 font-bold">V Adarsh</h1>
            </div>
            <h2 className="text-4xl sm:text-6xl text-gray-700 font-bold py-4">I'm a Frontend developer</h2>
            <p className="text-gray-700 py-4 max-w-[700px]">I'm a Frontend developer specializing in building and constantly
                designing exceptional React websites. Currently, i'm focused on
                building responsive react applications and learning scalable api creation and handling tools.
            </p>
            <div className="">
                <a href="/" className="relative inline-flex items-center  justify-center p-4 px-6 py-3 overflow-hidden font-bold text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
<span className="font-bold absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease font-bold">View Works</span>
<span className="relative invisible font-bold">View Works</span>
</a>
            </div>
        </div>
    </div>
  );
}

export default Home;