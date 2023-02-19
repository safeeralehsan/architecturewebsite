import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WavyText from "./wavytext";
import { GrFacebookOption, GrInstagram } from 'react-icons/gr'
import Link from 'next/link';
import Image from 'next/image';

type Props = {
    isLoading : boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HeroSection({ isLoading, setIsLoading } : Props) {
    
    return(
        <>
            <div className='relative h-screen'>
                <Image
                    src='/images/testbackground2.jpg'
                    alt='Cafe Dolce'
                    fill
                    onLoadingComplete={(e) => { setTimeout(() => setIsLoading(false), 1500) }}
                    className='absolute z-0 object-cover'
                />
                <div className='absolute z-10 w-full h-full bg-black opacity-50' />
                <div className='absolute z-20 flex h-4/5 items-center'>
                    <div className={`ml-60 p-10 ${isLoading ? 'hidden' : ''}`}>
                        <WavyText text="Cafe Dolce" lowerLetterByPixels={60} tailwindclasses={'font-serif text-white text-7xl font-semibold my-3 opacity'} />
                        <Link href="/comingsoon">
                            <span className='text-white font-semibold hover:text-gray-300 transition-colors cursor-pointer ml-2 mt-10'>View Project</span>
                        </Link>
                    </div>
                </div>
                <div className='absolute bottom-0 z-30 ml-16 mb-8 flex flex-row'>
                    {/* <motion.span
                        whileTap = {{ scale: 0.8 }}
                    >
                    <span> */}
                        <a href='https://www.facebook.com/wedesignstudiobd/' target="_blank" rel="noreferrer">
                            <GrFacebookOption className='text-white hover:text-gray-300 transition-colors cursor-pointer mr-8' />
                        </a>
                        <a href='https://www.instagram.com/we.design.bd/' target="_blank" rel="noreferrer">
                            <GrInstagram className='text-white hover:text-gray-300 transition-colors cursor-pointer mr-8' />
                        </a>
                </div>
          </div>
        </>
    )
}