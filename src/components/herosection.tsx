import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WavyText from "./wavytext";
import { GrFacebookOption, GrInstagram } from 'react-icons/gr'
import Link from 'next/link';
import Image from 'next/image';
import { featuredProjects } from '@/utils/featuredProjects';

type Props = {
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export default function HeroSection({ isLoading, setIsLoading }: Props) {
    const [featuredProjectToDisplay, setFeaturedProjectToDisplay] = useState<keyof featuredProjects>(1);
    const featuredProjectName = featuredProjects[featuredProjectToDisplay].name;
    const featuredProjectImage = featuredProjects[featuredProjectToDisplay].image;

    return (
        <>
            <div className='relative h-screen'>
                <Image
                    src={featuredProjectImage}
                    alt={featuredProjectName}
                    fill
                    onLoadingComplete={(e) => {
                        if (isLoading) (
                            setTimeout(() => setIsLoading(false), 1500)
                        )
                    }}
                    className='absolute z-0 object-cover'
                />
                <motion.div
                    key={Math.random()}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 0.5 }}
                    className='absolute z-10 w-full h-full bg-black'
                />
                <div className='absolute z-20 flex h-4/5 items-center'>
                    <div className={`ml-60 p-10 ${isLoading ? 'hidden' : ''}`}>
                        <WavyText
                            key={Math.random()}
                            text={featuredProjectName}
                            lowerLetterByPixels={60}
                            tailwindclasses={'font-serif text-white text-7xl font-semibold my-3 opacity'} />
                        <Link href="/comingsoon">
                            <span className='text-white font-semibold hover:text-gray-300 transition-colors cursor-pointer ml-2 mt-10'>View Project</span>
                        </Link>
                    </div>
                </div>
                <div className='absolute bottom-0 z-30 ml-16 mb-8 flex flex-row'>
                    <a href='https://www.facebook.com/wedesignstudiobd/' target="_blank" rel="noreferrer">
                        <GrFacebookOption className='text-white hover:text-gray-300 transition-colors cursor-pointer mr-8' />
                    </a>
                    <a href='https://www.instagram.com/we.design.bd/' target="_blank" rel="noreferrer">
                        <GrInstagram className='text-white hover:text-gray-300 transition-colors cursor-pointer mr-8' />
                    </a>
                </div>
                <div className='absolute z-30 bottom-0 right-0 mr-10 mb-8'>
                    <span
                        className='inline-block mr-24 lg:mr-32  text-gray-300 hover:text-gray-400 text-xs cursor-pointer transition-colors'
                        onClick={() => setFeaturedProjectToDisplay(1)}
                    >
                        <p className="mb-2">01</p>
                        <p>{featuredProjects[1].name}</p>
                    </span>
                    <span
                        className='inline-block mr-24 lg:mr-32  text-gray-300 hover:text-gray-400 text-xs cursor-pointer transition-colors'
                        onClick={() => setFeaturedProjectToDisplay(2)}
                    >
                        <p className="mb-2">02</p>
                        <p>{featuredProjects[2].name}</p>
                    </span>
                    <span
                        className='inline-block mr-24 lg:mr-32  text-gray-300 hover:text-gray-400 text-xs cursor-pointer transition-colors'
                        onClick={() => setFeaturedProjectToDisplay(3)}
                    >
                        <p className="mb-2">03</p>
                        <p>{featuredProjects[3].name}</p>
                    </span>
                </div>
            </div>
        </>
    )
}