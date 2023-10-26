import React from "react";
import {FaHtml5,FaCss3Alt,FaReact,FaBootstrap,FaNodeJs,FaGithub,} from "react-icons/fa";
import { BiLogoTailwindCss, BiLogoMongodb, BiLogoGit } from "react-icons/bi";
import { SiExpress, SiVercel } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
const SkillData = [
    {
        Title : "FRONTEND",
        skill : [
            {
                Name : "HTML",
                Icon :<FaHtml5 className="text-3xl  md:text-4xl" /> ,
            },
            {
                Name : "CSS",
                Icon :<FaCss3Alt className="text-3xl  md:text-4xl" />,
            },
            {
                Name : "REACT JS",
                Icon :<FaReact className="text-3xl  md:text-4xl" /> ,
            },
            {
                Name : "JavaScript",
                Icon :<IoLogoJavascript className="text-3xl  md:text-4xl" /> ,
            },
            {
                Name : "BOOTSTRAP",
                Icon :<FaBootstrap className="text-3xl  md:text-4xl" /> ,
            },
            {
                Name : "TAILWIND",
                Icon :<BiLogoTailwindCss className="text-3xl  md:text-4xl" /> ,
            },
        ]
    },
    {
        Title : "BACKEND",
        skill : [
            {
                Name : "NODE JS",
                Icon :<FaNodeJs className="text-3xl  md:text-4xl" /> ,
            },
            {
                Name : "EXPRESS JS",
                Icon :<SiExpress className="text-3xl  md:text-4xl" /> ,
            },
            {
                Name : "MONGODB",
                Icon :<BiLogoMongodb className="text-3xl  md:text-4xl" /> ,
            },
        ]
    },
    {
        Title : "OTHER",
        skill : [
            {
                Name : "GIT",
                Icon :<BiLogoGit className="text-3xl  md:text-4xl" /> ,
            },
            {
                Name : "GITHUB",
                Icon :<FaGithub className="text-3xl  md:text-4xl" /> ,
            },
            {
                Name : "VERCEL",
                Icon :<SiVercel className="text-3xl  md:text-4xl" /> ,
            },
        ]
    },
]

export default SkillData