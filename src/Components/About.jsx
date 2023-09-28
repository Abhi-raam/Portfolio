import React from "react";
import imageAbout from "../assets/image1.png";
import imageAbout2 from "../assets/image2.png";
import CV from "../assets/Abhiram.pdf"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faWhatsapp,
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function About() {
  return (
    <div className="sm:flex justify-evenly p-3 pt-5 items-center mb-12 mt-12">
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-3 sm:max-w-5xl">
        <div className=" font-semibold text-2xl sm:text-5xl">
          <h1 className="">
            ABOUT<span className="text-yellow-400 ml-2">ME</span>
          </h1>
        </div>
        <div className="">
          <div>
            <h1 className="font-semibold text-center text-3xl">
              Hello! I'm Abhiram
            </h1>
            <h1 className="pt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h1>
          </div>
          <div className="pt-6">
            <div className="space-x-6 flex justify-center">
              <a href="https://www.instagram.com/rai__chu__/">
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-yellow-500 transition delay-75 duration-150 ease-in-out hover:bg-black sm:text-2xl text-xl rounded-full bg-yellow-400 p-[1rem] sm:p-[1rem]"
                  icon={faInstagram}
                />
              </a>
              <a href="https://www.facebook.com/abhiram.suresh.52">
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-yellow-500 transition delay-75 duration-150 ease-in-out hover:bg-black sm:text-2xl text-xl rounded-full bg-yellow-400 p-[1rem] sm:p-[1rem]"
                  icon={faFacebook}
                />
              </a>
              {/* <a href="">
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-yellow-500 transition delay-75 duration-150 ease-in-out hover:bg-black sm:text-2xl text-xl rounded-full bg-yellow-400 p-[1rem] sm:p-[1rem]"
                  icon={faWhatsapp}
                />
              </a> */}
              <a href="https://www.linkedin.com/in/abhiram-suresh/">
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-yellow-500 transition delay-75 duration-150 ease-in-out hover:bg-black sm:text-2xl text-xl rounded-full bg-yellow-400 p-[1rem] sm:p-[1rem]"
                  icon={faLinkedinIn}
                />
              </a>
              <a href="https://github.com/Abhi-raam">
                <FontAwesomeIcon
                  className="cursor-pointer hover:text-yellow-500 transition delay-75 duration-150 ease-in-out hover:bg-black sm:text-2xl text-xl rounded-full bg-yellow-400 p-[1rem] sm:p-[1rem]"
                  icon={faGithub}
                />
              </a>
            </div>
          </div>
        </div>
        <div className=" text-center  z-10 h-full flex flex-col justify-end">
          <img
            className="h-[20rem] w-[100rem] drop-shadow-[35px_0_35px_rgba(0,0,0,0.3)] self-end"
            src={imageAbout2}
            alt=""
          />
          <div className="flex items-center justify-center">
            <div className="p-2">
              <a href={CV} target="__blank">
                <button className="bg-yellow-400 hover:text-yellow-400 hover:bg-black font-semibold p-2 rounded-full w-52 md:w-44 lg:w-80">
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
