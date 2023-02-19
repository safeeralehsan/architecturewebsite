import { easeIn, motion } from "framer-motion"; 
import Link from "next/link";

export default function ComingSoon(){
    const numberOfComingSoonRows: number = 50;
    const numberOfComingSoonColumns: number = 10;
    return(
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }} 
                className="relative z-0 bg-black h-screen w-screen overflow-clip"
            >
                <img 
                    src='/images/testbackground2.jpg'
                    className='absolute z-10 w-full h-full object-cover' 
                />
                <div className='absolute z-20 w-full h-screen bg-black opacity-50' />
                <div className="absolute z-50 w-full h-full flex justify-center items-center">
                    <Link href="/">
                        <motion.img 
                            src='/images/wedesignlogo.png'
                            className='cursor-pointer h-48 bg-black rounded-3xl border-black border-[50px]'
                            whileTap={{ scale: 0.9 }}
                        />
                    </Link>
                </div>
                <div className="absolute z-30 w-full h-full flex justify-start items-center">
                    <motion.span
                        initial = {{ x: 0 }} 
                        animate = {{ x: -5000 }}
                        transition = {{ duration: 8, repeat: Infinity, ease: "linear"}} 
                        className="absolute font-bold text-[600px] text-white whitespace-nowrap font-serif">
                            COMING SOON
                    </motion.span>
                    <motion.span
                        initial = {{ x: 5000 }} 
                        animate = {{ x: 0 }}
                        transition = {{ duration: 8, repeat: Infinity, ease: "linear"}} 
                        className="absolute font-bold text-[600px] text-white whitespace-nowrap font-serif">
                            COMING SOON
                    </motion.span>
                </div>
            </motion.div>
        </>
    )
}