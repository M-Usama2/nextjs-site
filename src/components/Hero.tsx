import Image from 'next/image'
import './Banner.css'
import cursorImage from '../assets/images/cursor.png'
import messageImage from '../assets/images/message.png'

const Hero = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#000] via-[#200D42] via-[#4F21A1_34%] via-[#A46EDB_65%] to-[#A46EDB_82%] py-[72px] sm:py-24 relative overflow-clip">
      <div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560Eb)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]'></div>
      <div className="container relative">
        <div className='flex items-center justify-center'>
          <a href="#" className='inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30'>
            <span className='bg-gradient-to-r from-[#F87AFF] via-[#FB93D0] via-[#FFDD99] via-[#C3F0B2] to-[#2FD8FE] text-transparent bg-clip-text [-webkit-background-clip:text]'>Version 2.0 is here </span>
            <span className='inline-flex items-center gap-1'>
              <span>Read More</span>
            </span>
          </a>
        </div>
        <div className='flex justify-center mt-8'>
          <div className='inline-flex relative'>
            <h1 className='text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex'>One Task <br /> at a Time</h1>
            <Image src={cursorImage} height="200" width="200" alt="" className='absolute right-[476px] top-[108px] hidden sm:inline'  />
            <Image src={messageImage} height="200" width="200" alt="" className='absolute top-[56px] left-[498px] hidden sm:inline' />
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='text-center text-xl mt-8 max-w-md'>
            Celebrate the joy of accomplishment with an app designed to track progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className='flex justify-center mt-8'>
          <button className='bg-white text-black py-3 px-5 rounded-lg text-md'>Get for free</button>
        </div>
      </div>
    </div>
  )
}

export default Hero