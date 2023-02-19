import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';

export default function NavigationBar() {
    const { scrollY } = useScroll();
    const [ navbarBackgroundColor, setNavbarBackgroundColor ] = useState('bg-transparent');

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const scrolledDownFromTop: boolean = (navbarBackgroundColor.includes('bg-transparent')) && (latest > 0)
        const scrolledBackToTop: boolean = (navbarBackgroundColor.includes('bg-black')) && (latest === 0) 

        if(scrolledDownFromTop){
            setNavbarBackgroundColor('bg-black transition duration-500')
        }

        if(scrolledBackToTop){
            setNavbarBackgroundColor('bg-transparent transition duration-500')
        }
    })

    return(
        <>
            <motion.div 
                className={`fixed w-screen z-40 h-24 flex justify-between items-center ${navbarBackgroundColor}`}
                style={{ }}
            >
                <span>
                    <motion.img 
                        src='/images/wedesignlogo.png'
                        className='w-20 ml-16 cursor-pointer'
                        whileTap={{ scale: 0.9 }}
                    />
                </span>
                <span className='mr-24'>
                    <Link href="../comingsoon">
                        <span className='mr-14 text-white hover:text-gray-300 font-bold md:text-sm text-xs cursor-pointer transition-colors'>Projects</span>
                    </Link>
                    <Link href="../comingsoon">
                        <span className='mr-14 text-white hover:text-gray-300 font-bold md:text-sm text-xs cursor-pointer transition-colors'>About</span>
                    </Link>
                    <Link href="../comingsoon">
                        <span className='mr-14 text-white hover:text-gray-300 font-bold md:text-sm text-xs cursor-pointer transition-colors'>Media</span>
                    </Link>
                    <Link href="../comingsoon">
                        <span className='mr-14 text-white hover:text-gray-300 font-bold md:text-sm text-xs cursor-pointer transition-colors'>Blog</span>
                    </Link>
                    <Link href="../comingsoon">
                        <span className='mr-14 text-white hover:text-gray-300 font-bold md:text-sm text-xs cursor-pointer transition-colors'>Careers</span>
                    </Link>
                    <Link href="../comingsoon">
                        <span className='mr-14 text-white hover:text-gray-300 font-bold md:text-sm text-xs cursor-pointer transition-colors'>Contact</span>
                    </Link>
                </span>
            </motion.div>
        </>
    )
}