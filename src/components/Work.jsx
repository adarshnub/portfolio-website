import React from 'react';
import workImg from "../assets/workImg.jpeg";
import WorkImg1 from "../assets/WorkImg1.png";
import WorkImg2 from "../assets/WorkImg2.png";
import WorkImg3 from "../assets/WorkImg3.png";
import WorkImg4 from "../assets/WorkImg4.png";
import WorkImg5 from "../assets/WorkImg5.png";
//import Index from './Carousel';

const Work = () => {
  return (
    <div name="works"
        className="w-full md:h-screen text-gray-400 bg-[#107c91] mt-8">
        {/*main container*/}
        <div className='max-w-[1000px] mx-auto px-4 py-1 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300'>Works</p>
            <p className='py-4'>Check out some of my recent works</p>
        </div>
        
         {/*works icons grid-container*/}
         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
            {/*div for specific grid item card*/}
            <div style={{backgroundImage:`url(${WorkImg3})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>
                {/*hover effects of cards*/}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        AI_image_generator
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-300'>Demo</button>
                        </a>
                        <a href="https://github.com/adarshnub/ai-image-generator">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-300'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage:`url(${WorkImg2})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>
                {/*hover effects of cards*/}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Portfolio Website
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://adarshnub.github.io/portfolio-website/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-300'>Demo</button>
                        </a>
                        <a href="https://github.com/adarshnub/portfolio-website">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-300'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage:`url(${WorkImg4})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>
                {/*hover effects of cards*/}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        React Website
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://adarshnub.github.io/growth-cx-project/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-300'>Demo</button>
                        </a>
                        <a href="https://github.com/adarshnub/growth-cx-project/tree/master">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-300'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage:`url(${WorkImg1})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>
                {/*hover effects of cards*/}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Book_my_show-clone
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://clipchamp.com/watch/tnQ1NGFXWF2">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-300'>Demo</button>
                        </a>
                        <a href="https://github.com/adarshnub/bookmyshow">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-300'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage:`url(${WorkImg5})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>
                {/*hover effects of cards*/}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Responsive HTML CSS Website
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://adarshnub.github.io/catagram-website/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-300'>Demo</button>
                        </a>
                        <a href="https://github.com/adarshnub/catagram-website">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-300'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div style={{backgroundImage:`url(${workImg})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto hover:scale-105 duration-300 content-div'>
                {/*hover effects of cards*/}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        create_graphql_api
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/adarshnub/create-graphql-api">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-300'>Demo</button>
                        </a>
                        <a href="https://github.com/adarshnub/create-graphql-api">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-105 duration-300'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            </div>
            
        </div>
    </div>
  )
}

export default Work;