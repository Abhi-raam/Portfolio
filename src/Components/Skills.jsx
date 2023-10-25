import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoMongodb, BiLogoGit } from "react-icons/bi";
import { SiExpress, SiVercel } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function Skills() {
  return (
    <div id="skills" className="bg-slate-900 pt-16 items-center p-3 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 text-center ">
        <div className="">
          <h1 className="font-semibold text-2xl text-slate-200 sm:text-5xl">
            MY <span className="text-yellow-400">SKILLS</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 space-y-4 col-span-2 pt-5">
          <div className=" text-slate-200">
            <div>
              <h1 className=" text-start text-xl md:text-2xl lg:text-2xl font-semibold">
                FRONTEND
              </h1>
            </div>
            <div className="grid grid-cols-3 mt-3 md:grid-cols-5 lg:grid-cols-6 space-y-3">
              <div className=" flex flex-col items-center justify-center">
                <h1 className="text-base md:text-xl  ">HTML</h1>
                <FaHtml5 className="text-3xl  md:text-4xl" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h1 className="text-base md:text-xl  ">CSS</h1>
                <FaCss3Alt className="text-3xl  md:text-4xl" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h1 className="text-base md:text-xl  ">REACT JS</h1>
                <FaReact className="text-3xl  md:text-4xl" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h1 className="text-base md:text-xl  ">JavaScript</h1>
                <IoLogoJavascript className="text-3xl  md:text-4xl" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h1 className="text-base md:text-xl ">BOOTSTRAP</h1>
                <FaBootstrap className="text-3xl  md:text-4xl" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h1 className="text-base md:text-xl  ">TAILWIND</h1>
                <BiLogoTailwindCss className="text-3xl  md:text-4xl" />
              </div>
            </div>
          </div>
          <div className="text-slate-200">
            <div>
              <h1 className=" text-start text-xl md:text-2xl lg:text-2xl font-semibold">
                BACKEND
              </h1>
            </div>
            <div className="grid grid-cols-3 mt-3 md:grid-cols-6 space-y-3">
              <div className=" flex flex-col  items-center justify-center">
                <h1 className="text-base md:text-xl">NODE JS</h1>
                <FaNodeJs className="text-3xl  md:text-4xl" />
              </div>
              <div className=" flex flex-col items-center justify-center col-span-1 md:col-span-2">
                <h1 className="text-base md:text-xl">EXPRESS JS</h1>
                <SiExpress className="text-3xl  md:text-4xl" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h1 className="text-base md:text-xl">MONGODB</h1>
                <BiLogoMongodb className="text-3xl  md:text-4xl" />
              </div>
            </div>
          </div>
          <div className="text-slate-200">
            <div>
              <h1 className=" text-start text-xl md:text-2xl lg:text-2xl font-semibold">
                OTHER
              </h1>
            </div>
            <div className="grid grid-cols-3 mt-3 md:grid-cols-6 space-y-3">
              <div className=" flex flex-col items-center justify-center">
                <h1 className="text-base md:text-xl">GIT</h1>
                <BiLogoGit className="text-3xl  md:text-4xl" />
              </div>
              <div className=" flex flex-col items-center justify-center col-span-1 md:col-span-2">
                <h1 className="text-base md:text-xl">GITHUB</h1>
                <FaGithub className="text-3xl  md:text-4xl" />
              </div>
              <div className=" flex flex-col items-center justify-center">
                <h1 className="text-base md:text-xl">VERCEL</h1>
                <SiVercel className="text-3xl  md:text-4xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
