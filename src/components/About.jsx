import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#107c91] text-gray-700">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full  grid grid-cols gap-8">
                <div className="sm:text-center pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300">About</p>
                </div>
                <div></div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-bold">
                <p>Hi, I'm Adarsh, nice to meet you. Please take a look around.</p>
              </div>
              <div>
                <p>As a frontend developer with a strong background in HTML, CSS, JavaScript, React, and Tailwind and actively learning backend tools like MongoDB-Mongoose-express-Apollo-GraphQL based scalable API creating and handling, I have a proven track record of creating visually stunning and intuitive web applications. My experience with these technologies allows me to build responsive, mobile-friendly designs and implement dynamic user interactions. I am always looking for new ways to improve the user experience and stay up-to-date with the latest web development trends. I am a highly motivated and results-driven developer who is committed to delivering high-quality projects on time and within budget. </p>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About;