import { useState } from 'react';
import { motion } from 'framer-motion';
import WavyText from "./wavytext";
import { GrFacebookOption, GrInstagram } from 'react-icons/gr'

export default function HeroSection() {
    return(
        <>
            <div className='h-screen'>
                <div className='absolute z-10 w-full h-screen bg-black opacity-50' />
                <img 
                src='/images/testbackground2.jpg'
                className='absolute z-0 w-screen h-screen object-cover' 
                />
                <div className='absolute z-20 flex h-4/5 items-center'>
                    <div className='ml-60 p-10'>
                        <WavyText text="Cafe Dolce" tailwindclasses='font-serif text-white text-7xl font-semibold my-3 opacity' />
                        <span className='text-white font-semibold hover:text-gray-300 transition-colors cursor-pointer ml-2 mt-10'>View Project</span>
                    </div>
                </div>
                <div className='absolute bottom-0 z-30 ml-16 mb-8 flex flex-row'>
                    {/* <motion.span
                        whileTap = {{ scale: 0.8 }}
                    >
                    <span> */}
                        <a href='https://www.facebook.com/wedesignstudiobd/' target="_blank">
                            <GrFacebookOption className='text-white hover:text-gray-300 transition-colors cursor-pointer mr-8' />
                        </a>
                        <a href='https://www.instagram.com/we.design.bd/' target="_blank">
                            <GrInstagram className='text-white hover:text-gray-300 transition-colors cursor-pointer mr-8' />
                        </a>
                </div>
          </div>
        </>
    )
}