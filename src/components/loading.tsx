import { useState, useRef, useEffect } from 'react';



export default function Loading({ bgColor = "white" }) {
  const [letterToDisplay, setLetterToDisplay] = useState('W');
  const letterToDisplayIndex = useRef(0);

  const wordToLoopThrough = 'WEDESIGN';
  const lettersToLoopThrough = wordToLoopThrough.split('');

  useEffect(() => {
    setTimeout(() => {
      const isLastLetter = letterToDisplayIndex.current === lettersToLoopThrough.length - 1 ? true : false;

      if (isLastLetter) {
        letterToDisplayIndex.current = 0;
      } else {
        letterToDisplayIndex.current += 1;
      }
      setLetterToDisplay(lettersToLoopThrough[letterToDisplayIndex.current]);
    }, 150)
  }, [letterToDisplay])



  return (
    <>
      <div className={`absolute z-60 h-full w-full flex flex-row justify-center items-center ${bgColor === 'black' ? 'bg-black' : ''}`}>
        <p className={`absolute z-60 text-[150px] font-mono font-extrabold ${bgColor === 'black' ? 'text-gray-500 opacity-50' : 'text-gray-100'}`}>
          {letterToDisplay}
        </p>
        <p className={`absolute z-70 text-7xl font-mono font-extrabold ${bgColor === 'black' ? 'text-white' : ''}`}>
          {letterToDisplay}
        </p>
      </div>
    </>
  )
}
