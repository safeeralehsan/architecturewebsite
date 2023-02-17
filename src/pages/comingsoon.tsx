import { easeIn, motion } from "framer-motion"; 

export default function ComingSoon(){
    const numberOfComingSoonRows: number = 30;
    const numberOfComingSoonColumns: number = 6;
    return(
        <>
            <div className="relative z-0 bg-black h-screen w-screen overflow-clip">
                <img 
                    src='/images/testbackground2.jpg'
                    className='absolute z-10 w-full h-full object-cover' 
                />
                <div className='absolute z-20 w-full h-screen bg-black opacity-50' />
                <div className="absolute z-50 w-full h-full flex justify-center items-center">
                    <motion.img 
                        src='/images/wedesignlogo.png'
                        className='cursor-pointer w-1/5 bg-black border-[80px] rounded-3xl border-black'
                        whileTap={{ scale: 0.9 }}
                    />
                </div>
                {
                    [...Array(numberOfComingSoonRows)].map(() => {
                        return(
                            <div className="relative z-30 w-full h-8">
                                {[...Array(numberOfComingSoonRows)].map((e, i) => {
                                    return (
                                        <motion.span
                                            initial = {{ x: -255 + (255*i) }}
                                            animate = {{ x: 0 + (255*i) }}
                                            transition = {{ 
                                                duration: 5,
                                                repeat: Infinity
                                            }} 
                                            className="absolute top-0 w-full p-0 m-0 text-white font-bold text-4xl flex justify-start"
                                        >
                                            COMING SOON
                                        </motion.span>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            
            </div>
        </>
    )
}