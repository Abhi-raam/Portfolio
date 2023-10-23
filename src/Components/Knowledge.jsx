import React from "react";
import { FaLaptopCode, FaLaptop } from "react-icons/fa";

function Knowledge() {
  return (
    // removed mt-5
    <div id="knowledge" className="bg-yellow-500  pt-14 text-center p-3 pb-4">
      <h1 className="font-semibold text-2xl md:text-4xl">KNOWLEDGE</h1>
      <div className="grid mt-5 md:flex md:space-y-0 space-y-6 justify-center gap-16 ">
        <div className="space-y-6">
          <div className="flex space-x-4 p-6 cursor-pointer shadow-xl hover:-translate-y-2 transition ease-in-out duration-200 hover:shadow-2xl">
            <FaLaptopCode className="bg-black p-2 rounded-full cursor-pointer text-white w-[4rem] md:w-[4rem] lg:w-auto text-5xl md:text-5xl" />
            <div className="text-start">
              <h1 className="font-semibold text-md md:text-2xl md:text-center text-start">
                WEB DEVELOPMENT
              </h1>
              <h1 className="max-w-md text-sm tracking-widest font-semibold pt-4">
              As a self-taught web developer, I've mastered HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js. 
              I excel in dynamic, interactive, and responsive websites, ensuring superb user experiences. I'm committed to 
              staying current with web development trends, delivering cutting-edge solutions.
              </h1>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex space-x-4 p-6 cursor-pointer shadow-xl hover:-translate-y-2  transition ease-in-out duration-200 hover:shadow-2xl ">
            <FaLaptop className="bg-black p-2 rounded-full cursor-pointer text-white  w-[4rem] md:w-[4rem] lg:w-auto text-5xl md:text-5xl" />
            <div className="text-start">
              <h1 className="font-semibold text-md md:text-2xl md:text-center text-start">
                WEB DESIGNING
              </h1>
              <h1 className="max-w-md text-sm tracking-widest font-semibold pt-4">
              Proficient in HTML and CSS, I craft precise structural foundations and stylish elements. With React.js, 
              I seamlessly create dynamic, interactive components. I utilize UI frameworks like Bootstrap and Tailwind CSS 
              for efficient design and responsive layouts, bringing captivating user interfaces to life.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
