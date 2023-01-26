import React from 'react';
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import GitHub from "../assets/github.png";


const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#107c91] text-gray-400">
        {/*container*/}
        <div classname="max-w-[1000px] mx-auto py-4 flex flex-col justify-center px-8 h-full">
            <div className="sm:text-center pl-8">
                <p className="text-4xl py-2 font-bold inline border-b-4 border-purple-500">Skills</p>
                <p className="py-4">These are the technologies I have worked with</p>
            </div>
            {/*container for all skills icons*/}
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 px-16 sm:px-32 md:px-52 ">
                <div className="shadow-md hover:scale-110 duration-500 bg-[#0a4e5c] rounded-md ">
                    <a href="https://en.wikipedia.org/wiki/HTML5">
                    <img src={HTML} alt="html icon"
                    className="w-20 mx-auto pt-6" 
                     />
                    </a>
                    <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500 bg-[#0a4e5c] rounded-md">
                <a href="https://en.wikipedia.org/wiki/CSS">
                    <img src={CSS} alt="html icon"
                    className="w-20 mx-auto pt-6" />
                    </a>
                    <p className="my-4">CSS</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500 bg-[#0a4e5c] rounded-md">
                <a href="https://www.javascript.com/">
                    <img src={JavaScript} alt="html icon"
                    className="w-20 mx-auto pt-6" />
                    </a>
                    <p className="my-4">JavaScript</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500 bg-[#0a4e5c] rounded-md">
                <a href="https://reactjs.org/">
                    <img src={ReactImg} alt="html icon"
                    className="w-20 mx-auto pt-6" />
                    </a>
                    <p className="my-4">React</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500 bg-[#0a4e5c] rounded-md">
                <a href="https://tailwindcss.com/">
                    <img src={Tailwind} alt="html icon"
                    className="w-20 mx-auto pt-6" />
                    </a>
                    <p className="my-4">Tailwind</p>
                </div>
                <div className="shadow-md hover:scale-110 duration-500 bg-[#0a4e5c] rounded-md">
                <a href="https://github.com/">
                    <img src={GitHub} alt="html icon"
                    className="w-20 mx-auto pt-6" />
                    </a>
                    <p className="my-4">GitHub</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;