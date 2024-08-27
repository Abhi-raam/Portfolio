import React from "react";
import SkillData from '../Data/SkillsData';


function Skills() {
  return (
    <div id="skills" className="bg-slate-900 pt-16 items-center p-3 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 text-center ">
        <div data-aos="fade-right" data-aos-duration="1000" className="">
          <h1 className="font-semibold text-2xl text-slate-200 sm:text-5xl">
            MY <span className="text-yellow-400">SKILLS</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 space-y-4 col-span-2 pt-5">
          {SkillData.map((SkillData, index) => (
            <div key={index} data-aos="fade-up" data-aos-duration="1000" className="text-slate-200">
              <div >
                <h1 className=" text-start text-xl md:text-2xl lg:text-2xl font-semibold uppercase">{SkillData.Title}</h1>
              </div>
              <div  className="grid grid-cols-3 mt-3 md:grid-cols-3 gap-3 ">
                {SkillData.skill.map((skillDetails,index)=>(
                  <div key={index} className=" flex flex-col pt-4 items-center justify-center space-y-2 col-span-1 md:col-span-2 lg:col-span-1">
                  <h1 className="text-base md:text-xl uppercase">{skillDetails.Name}</h1>
                  {skillDetails.Icon}
                </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
