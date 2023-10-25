import React from "react";
import { FaLaptopCode, FaLaptop } from "react-icons/fa";
import KnowledgeData from '../Data/KnowledgeData';

function Knowledge() {
  // const { Title, Description, Icon } = { ...KnowledgeData}
  // console.log(KnowledgeData.Title);
  return (
    // removed mt-5
    <div id="knowledge" className="bg-slate-900  pt-14 text-center p-3 pb-4">
      <div className="flex flex-col items-center justify-center relative">
        <h1 className='text-center text-slate-100 font-semibold text-5xl md:text-8xl brightness-[0.2] pt-5 tracking-widest md:tracking-[.5rem]'>KNOWLEDGE</h1>
        <h1 className='text-center text-yellow-500 font-semibold text-2xl md:text-4xl pt-5 absolute left-1/2 transform -translate-x-1/2 tracking-wider'>KNOWLEDGE</h1>
      </div>
      <div className="grid mt-5 md:flex md:space-y-0 space-y-6 justify-center gap-16 ">
        {KnowledgeData.map((knowledge, index) => (
          <div key={index} className="space-y-6 pt-9">
            <div className="flex space-x-4 p-6 cursor-pointer shadow-xl hover:-translate-y-2  transition ease-in-out duration-200 hover:shadow-2xl bg-slate-800 rounded-md">
              {/* <FaLaptop className="bg-black p-2 rounded-full cursor-pointer text-white  w-[4rem] md:w-[4rem] lg:w-auto text-5xl md:text-5xl" /> */}
              {knowledge.Icon}
              <div className="text-start">
                <h1 className="font-semibold text-md md:text-2xl md:text-center text-start text-slate-200">
                  {knowledge.Title}
                </h1>
                <p className="max-w-md text-sm tracking-widest font-semibold pt-4 text-slate-200">
                  {knowledge.Description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Knowledge;
