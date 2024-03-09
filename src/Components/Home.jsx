import React from 'react';
import imageMob from '../assets/home1.jpg'
import imageMob1 from '../assets/Avatar1.png'
function Home() {
    const myStyle = {
        backgroundImage: `url(${imageMob1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    return (
        <div id='home' className=' min-h-screen ' style={myStyle} >
            <div className=' justify-center items-end lg:justify-start lg:items-center flex  h-[95vh]'>
                <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-sine" className='text-center xl:text-end'>
                    <h1 className='lg:text-4xl md:text-3xl text-2xl text-yellow-400 font-semibold tracking-[0.2em]'>HELLO!</h1>
                    <h1 className='lg:text-4xl  md:text-4xl text-2xl font-semibold text-slate-900 tracking-[0.2em]'>I'M ABHIRAM </h1>
                    <h1 className="md:text-2xl text-xl  font-semibold text-slate-900 tracking-[0.1em]">Web Developer</h1>
                </div>
            </div>
        </div>
    )
}

export default Home