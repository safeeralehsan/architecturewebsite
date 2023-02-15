import { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion';
import Loading from '@/components/loading';
import NavigationBar from '@/components/navigationBar';
import WavyText from '@/components/wavytext';
import HeroSection from '@/components/herosection';



export default function Home() {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },2000)
  },[])

  return (
    <>
      <Head>
        <title>WeDesign Studio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? 
        <Loading /> :
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <NavigationBar />
          <HeroSection />
          <div className='flex justify-center items-center h-screen'>
            <div className='absolute z-20 overflow-y-hidden'>
              <motion.p
                className='text-[250px] text-gray-100 font-semibold font-sans text-center tracking-[0.5em]'
                initial = {{ y: 180 }}
                whileInView = {{ y: 0 }}
                viewport = {{ once: true}}
                transition={{
                  type: "spring",
                  bounce: 0.1,
                  duration: 2,
                  delay: 0.5,
                }}
              >
                About
              </motion.p>
            </div>
          </div>
        </motion.div>
      }
    </>
  )
}
