import React from 'react'
import ProjectCards from './ProjectCards'
import ProjectDatas from '../Data/ProjectData';
function Project() {
    return (
        <div id='project' className=' pt-10 bg-gray-900'>
            <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center justify-center relative">
                <h1 className='text-center text-slate-100 font-semibold text-5xl md:text-8xl brightness-[0.2] pt-5 tracking-widest md:tracking-[.5rem]'>PROJECTS</h1>
                <h1 className='text-center text-yellow-500 font-semibold text-2xl md:text-4xl pt-5 absolute left-1/2 transform -translate-x-1/2 tracking-wider'>PROJECTS</h1>
            </div>
            <div  className='grid grid-cols-1 2xl:grid-cols-2  gap-6 pb-7 mt-10 p-5 mx-0 md:mx-9'>
                {ProjectDatas.map((project, index) => (
                    <div key={index} data-aos="fade-up" data-aos-duration="1000" className='justify-self-auto md:justify-self-center'>
                        <ProjectCards project={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project