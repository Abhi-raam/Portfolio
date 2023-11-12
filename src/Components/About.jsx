import React from "react";
import imageAbout2 from "../assets/image2.png";
import CV from "../assets/Abhiram.pdf"
import {AboutData , Links} from '../Data/AboutData'

function About() {
  return (
    <div id="about" className=" sm:flex justify-evenly p-3 pt-16 items-center   bg-slate-900">
      <div className="grid  gap-9 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:max-w-5xl">
        <div data-aos="fade-up" data-aos-duration="1000"data-aos-delay="300"  className="  font-semibold text-2xl sm:text-5xl">
          <h1 className="text-slate-200 text-center md:text-start">ABOUT<span className="text-yellow-400 ml-2">ME</span>
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="col-span-1 lg:col-span-2 ">
          {AboutData.map((about, index) => (
            <div key={index} className="text-slate-200">
              <h1 className="font-semibold text-center text-3xl">{about.Title}</h1>
              <h1 className="pt-3">{about.Description}</h1>
            </div>
          ))}
          <div className="pt-6">
            <div className="space-x-6 flex justify-center">
              {Links.map((links,index)=>(
                <a key={index} href={links.Link}>{links.Icon}</a>
                ))}
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className=" text-center  z-10 h-full flex flex-col justify-end">
          <img
            className=" w-auto h-80 brightness-90 drop-shadow-[35px_0_35px_rgba(0,0,0,0.3)] self-center"
            src={imageAbout2}
            alt=""/>
          <div className="flex items-center justify-center">
            <div className="p-2">
              <a href={CV} target="__blank">
                <button className="bg-yellow-400 transition ease-in-out duration-300 hover:text-yellow-400 hover:bg-black font-semibold p-2 rounded-full w-52 md:w-44 lg:w-80">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
