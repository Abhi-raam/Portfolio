import React from 'react'
import ProjectCards from './ProjectCards'
import ProjectDatas from '../Data/ProjectData';
function Project() {
    return (
        <div id='project' className=' pt-10'>
            <div>
                <h1 className='text-center text-black font-semibold text-2xl md:text-4xl pt-5'>PROJECTS</h1>
            </div>
            {/* <div className='grid justify-self-center'>
                <div className=" bg-gray-100 max-w-[42rem] border 
             border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  hover:bg-gray-300 transiton rounded-lg ">
                    <div className="px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full  ">
                        <h3 className="text-2xl font-semibold "> title</h3>
                        <p className="mt-2  text-gray-700 ">
                            description
                        </p>
                        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase  text-white rounded-full">
                                tag
                            </li>
                        </ul>
                    </div>

                    <img
                        src={project1}
                        // alt={title}   group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3 
                        className="absolute  hidden  sm:block top-9 -right-[18rem] w-[36.25rem] rounded-t-lg shadow-2xl  hover:-translate-x-3 hover:scale-[1.04] hover:-translate-y-3 hover:-rotate-2 transition"
                    />
                </div>
            </div> */}
            <div className='grid grid-cols-1 2xl:grid-cols-2  gap-6 pb-7 mt-10 p-5 mx-0 md:mx-9'>
            {ProjectDatas.map((project, index) => (
             <div key={index} className='justify-self-auto md:justify-self-center'>
                <ProjectCards project={project}/>
             </div>
            ))}
            </div>
        </div>
    )
}

export default Project