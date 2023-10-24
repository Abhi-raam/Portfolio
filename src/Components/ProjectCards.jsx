import React from 'react'

function ProjectCards({ project }) {
    const { Title, Description, Tag,Image } = { ...project }
    return (
        <div className="group card card-side overflow-hidden cursor-pointer sm:h-[20rem] bg-slate-300 w-auto md:w-[40rem] justify-self-center shadow-xl">
            <div className='bg-slate-500'>
                <img src={Image} className='absolute  hidden w-[35rem] md:w-[33rem]  sm:block top-9 -right-[10rem]  rounded-t-lg shadow-2xl  group-hover:-translate-x-3 group-hover:scale-[1.04] group-hover:-translate-y-3 group-hover:-rotate-2 transition' alt="" />
                {/* <img src={Image} className='absolute  hidden  sm:block top-9 -right-[18rem] w-[36.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-[18rem] group-hover:-translate-x-3 group-hover:scale-[1.04] group-hover:-translate-y-3 group-hover:-rotate-2 transition group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3' alt="" /> */}
            </div>
            <div className="card-body">
                <h2 className="card-title">{Title}</h2>
                <p className='max-w-xs md:max-w-[15rem]'>{Description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto max-w-sm sm:max-w-[10rem] md:max-w-[15rem]'>
                    {Tag.map((tag, index) => (
                        <li key={index} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase  text-white rounded-full'>{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProjectCards

