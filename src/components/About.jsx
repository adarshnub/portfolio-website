import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#107c91] text-gray-700">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full  grid grid-cols gap-8">
                <div className="sm:text-center pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-purple-500">About</p>
                </div>
                <div></div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-bold">
                <p>Hi, I'm Adarsh, nice to meet you. Please take a look around.</p>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id metus id odio suscipit lacinia. Morbi nisl sapien, luctus sagittis dignissim dapibus, posuere in orci. Fusce eget aliquam magna. Quisque faucibus urna dui, ac fermentum nibh auctor quis. Vestibulum interdum neque nunc, a ullamcorper ipsum pellentesque quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis faucibus ligula sit amet felis posuere sollicitudin. Fusce non metus convallis, hendrerit turpis in, tristique sem. Curabitur sit amet ullamcorper ligula. Donec sed interdum ipsum, quis tempus felis. Integer malesuada vitae est non pulvinar. </p>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About;