import React from 'react';
import imageHome from '../assets/home.jpg'
import imageHome1 from '../assets/home2.jpg'
import imageMob from '../assets/home1.jpg'
import Lottie from "lottie-react";
import amination from '../assets/animation.json'
import bg from '../assets/bg.jpeg'

function Home() {
    const myStyle={
        backgroundImage: 
 "url('https://i.pinimg.com/564x/06/a5/e5/06a5e5ae113f8ae8b6b0b8e35c01dcec.jpg')",
        // height:'100vh',
        // marginTop:'-70px',
        // fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        // removed min-h-screen 
        <div id='home' className='pt-16  grid grid-cols-1 md:grid-cols-2 min-h-screen md:min-h-0 ' style={myStyle}>
            <div className='flex justify-center md:justify-start '>
                <img className='rounded-full md:rounded-full pb-5 p-9 h-80 w-80 brightness-[0.8]  md:w-auto  lg:h-[100vh]' src={imageMob} alt="" />
            </div>
            <div className=' items-center justify-center flex flex-col lg:h-[100vh]'>
                <div className=''>
                    <h1 className='lg:text-5xl text-center md:text-end text-xl text-yellow-400 font-semibold'>HELLO!</h1>
                    <h1 className='lg:text-5xl text-xl font-semibold text-black'>MY NAME IS ABHIRAM</h1>
                    <h1 className="md:text-xl text-center text-black">Web Developer</h1>
                </div>
            </div>
        </div>
    )
}

export default Home