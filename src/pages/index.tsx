import { useState, useRef, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Loading from '@/components/loading';



export default function Home() {
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },3000)
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
        <div className='absolute w-screen h-screen overflow-y-hidden'>
          <img 
            src='/images/testbackground.jpg'
            className='absolute z-10 w-screen object-cover -translate-y-16' 
          />
          <img 
            src='/images/wedesignlogo.png'
            className='absolute z-10 w-20 mt-8 ml-16' 
          />
        </div>
      }
    </>
  )
}
