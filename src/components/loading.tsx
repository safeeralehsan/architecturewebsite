import { useState, useRef, useEffect } from 'react';



export default function Loading() {
  const [ letterToDisplay, setLetterToDisplay ] = useState('W');
  const letterToDisplayIndex = useRef(0);

  const wordToLoopThrough = 'WEDESIGN';
  const lettersToLoopThrough = wordToLoopThrough.split('');

  useEffect(() => {
    setTimeout(() => {
      const isLastLetter = letterToDisplayIndex.current === lettersToLoopThrough.length - 1 ? true : false;
      if(isLastLetter){
        letterToDisplayIndex.current = 0;
      } else {
        letterToDisplayIndex.current += 1;
      }
      setLetterToDisplay(lettersToLoopThrough[letterToDisplayIndex.current]);
    },150)
  }, [letterToDisplay])



  return (
    <>
      <div className='w-screen h-screen flex flex-row justify-center items-center'>
        <p className='absolute z-0 text-[150px] font-mono font-extrabold text-gray-100'>
          {letterToDisplay}
        </p>
        <p className='absolute z-10 text-7xl font-mono font-extrabold'>
          {letterToDisplay}
        </p> 
      </div>    
    </>
  )
}
