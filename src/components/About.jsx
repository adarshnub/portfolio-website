import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#107c91] text-gray-700">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full px-4 grid grid-cols gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-purple-500">About</p>
                </div>
                <div>About description</div>
            </div>
        </div>
    </div>
  )
}

export default About;