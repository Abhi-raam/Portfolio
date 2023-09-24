import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
function About() {
    return (
        <div className='sm:flex justify-evenly items-center h-[100vh]'>
            <div className='grid grid-cols-1 gap-9 sm:grid-cols-3 sm:max-w-5xl'>
                <div className=' font-semibold text-2xl sm:text-5xl'>
                    <h1 className=''>ABOUT<span className='text-yellow-400 ml-2'>ME</span></h1>
                </div>
                <div className=''>
                    <div>
                        <h1 className='font-semibold text-3xl'>Hello! I'm Abhiram Suresh</h1>
                        <h1 className='pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.</h1>
                    </div>
                    <div className='pt-6'>
                        <div className='space-x-6 flex justify-center'>
                            <FontAwesomeIcon className='cursor-pointer hover:text-yellow-500 transition delay-75 duration-150 ease-in-out hover:bg-black sm:text-2xl text-xl rounded-full bg-yellow-400 p-[1rem] sm:p-[1rem]' icon={faFacebook} />
                            <FontAwesomeIcon className='cursor-pointer hover:text-yellow-500 transition delay-75 duration-150 ease-in-out hover:bg-black sm:text-2xl text-xl rounded-full bg-yellow-400 p-[1rem] sm:p-[1rem]' icon={faXTwitter} />
                            <FontAwesomeIcon className='cursor-pointer hover:text-yellow-500 transition delay-75 duration-150 ease-in-out hover:bg-black sm:text-2xl text-xl rounded-full bg-yellow-400 p-[1rem] sm:p-[1rem]' icon={faLinkedinIn} />
                            <FontAwesomeIcon className='cursor-pointer hover:text-yellow-500 transition delay-75 duration-150 ease-in-out hover:bg-black sm:text-2xl text-xl rounded-full bg-yellow-400 p-[1rem] sm:p-[1rem]' icon={faGithub} />
                        </div>
                    </div>
                </div>
                <div className=''>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    <h1 className='text-xl md:text-3xl lg:text-5xl'>Hello world</h1>
                    <h1 className='text-2xl md:text-6xl'>Hello world</h1>
                </div>
            </div>
        </div>
    )
}

export default About;
