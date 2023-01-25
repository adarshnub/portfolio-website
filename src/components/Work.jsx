import React from 'react'

const Work = () => {
  return (
    <div name="work"
        className="w-full md:h-screen text-gray-400 bg-[#107c91]">
        {/*main container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-purple-500'>Works</p>
            <p className='py-8'>Check out some of my recent works</p>
        </div>

         {/*works icons grid-container*/}
         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/*div for specific work card*/}
            <div className='shadow-lg group container rounded-md flex justify-center items-center mx-aut content-div'>
                {/*hover effects of cards*/}
                <div>
                    <span></span>
                    <div>
                        <a href="/">
                            <button></button>
                        </a>
                        <a href="/">
                            <button></button>
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