import React from "react";
import { FaLaptopCode, FaLaptop } from "react-icons/fa";

function Knowledge() {
  return (
    <div className="bg-yellow-500 text-center p-3 pb-4">
      <h1 className="font-semibold text-2xl md:text-4xl">KNOWLEDGE</h1>
      <div className="grid md:flex md:space-y-0 space-y-6 justify-around ">
        <div className="space-y-6">
          <div className="flex space-x-4 ">
            <FaLaptopCode className="bg-black p-2 rounded-full cursor-pointer text-white  text-4xl md:text-5xl" />
            <div className="text-start">
              <h1 className="font-semibold text-md md:text-2xl">
                WEB DEVELOPMENT
              </h1>
              <h1 className="max-w-md text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 space-y-6">
          <div className="flex space-x-4 ">
            <FaLaptop className="bg-black p-2 rounded-full cursor-pointer text-white  text-4xl md:text-5xl" />
            <div className="text-start">
              <h1 className="font-semibold text-md md:text-2xl">
                WEB DESIGNING
              </h1>
              <h1 className="max-w-md text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
