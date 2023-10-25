import React from 'react';
import { FaLaptop, FaLaptopCode } from 'react-icons/fa';
const KnowledgeData = [
    {
        Title : 'WEB DEVELOPMENT',
        Description : "As a self-taught web developer, I've mastered HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js. I excel in dynamic, interactive, and responsive websites, ensuring superb user experiences. I'm committed to staying current with web development trends, delivering cutting-edge solutions.",
        Icon : <FaLaptopCode className="bg-black p-2 rounded-full cursor-pointer text-white w-[4rem] md:w-[4rem] lg:w-auto text-5xl md:text-5xl" />
    },
    {
        Title : 'WEB DESIGNING',
        Description : "Proficient in HTML and CSS, I craft precise structural foundations and stylish elements. With React.js, I seamlessly create dynamic, interactive components. I utilize UI frameworks like Bootstrap and Tailwind CSS for efficient design and responsive layouts, bringing captivating user interfaces to life.",
        Icon : <FaLaptop className="bg-black p-2 rounded-full cursor-pointer text-white w-[4rem] md:w-[4rem] lg:w-auto text-5xl md:text-5xl" />
    },
]

export default KnowledgeData