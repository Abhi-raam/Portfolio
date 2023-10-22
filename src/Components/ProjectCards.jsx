import React from 'react'
import project1 from '../assets/project-1.png'

function ProjectCards({ project }) {
    const { Title, Description, Tag } = { ...project }
    return (
        <div className="card card-side overflow-hidden  sm:h-[20rem] bg-slate-300 w-auto md:w-[40rem] justify-self-center shadow-xl">
            <div className='bg-slate-500'>
                <img src={project1} className='absolute  hidden w-[35rem] md:w-[33rem]  sm:block top-9 -right-[10rem]  rounded-t-lg shadow-2xl  hover:-translate-x-3 hover:scale-[1.04] hover:-translate-y-3 hover:-rotate-2 transition' alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{Title}</h2>
                <p className='max-w-xs md:max-w-[15rem]'>{Description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto max-w-sm md:max-w-[15rem]'>
                    {Tag.map((tag, index) => (
                        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase  text-white rounded-full'>{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectCards