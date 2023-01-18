import React,{useState} from 'react'
import { image } from './assets/images';
import {ChevronRightIcon, ChevronLeftIcon} from '@heroicons/react/24/outline';
const App = () => {
   const [currentIndex, setcurrentIndex] = useState(0);
  return (
    <div className='group w-full h-screen max-w-[1400px] relative m-auto py-16 px-14 '>
      <div className=' w-full h-full rounded-2xl relative bg-center bg-cover duration-500 '
      style={{backgroundImage: `url(${image[currentIndex].url})`}}></div>
      <div className='hidden group-hover:block absolute top-[50%]  -translate-x-0 translate-y-[-50%] bg-transparent  m-1' onClick={()=>{
        currentIndex===0 ? setcurrentIndex(0): setcurrentIndex((prevState)=>prevState-1)
      }}>
        <ChevronLeftIcon className='h-7 w-7   rounded-full hover: animate-pulse cursor-pointer text-white'/>
      </div>
      <div  className='hidden group-hover:block absolute top-[50%]  translate-x-0 translate-y-[-50%] bg-transparent  m-1 right-14' onClick={()=>{
        currentIndex===image.length-1 ? setcurrentIndex(0): setcurrentIndex((prevState)=>prevState+1)
      }}>
        <ChevronRightIcon className='h-7 w-7   rounded-full hover: animate-pulse cursor-pointer text-white'/>
      </div>
      <div className='flex top-4 justify-center py-2 gap-2'>
      {image.map((_,index)=>(
        <div className={`w-2 h-2 cursor-pointer rounded-full ${currentIndex===index ? 'bg-sky-500' : 'bg-slate-500'} `} onClick={()=>{setcurrentIndex(index)}}></div>
      ))}
      </div>
    </div>
  )
}

export default App
