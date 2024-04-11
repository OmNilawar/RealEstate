import React from 'react'

const Projects = () => {
  return (
    <div>
      <div className='w-[80%] mx-auto p-5 flex flex-col gap-3 '>
        <div>
            <p className='font-semibold text-[orange] text-xl'>Best Choices</p>
            <p className='font-bold text-blue-900 text-2xl'>Popular Residencies</p>
        </div>
        
        <div className='flex justify-between flex-wrap'>
            <div className='w-[22%] rounded-md p-3 flex flex-col items-center transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#dfc9ee] '>
                <div className='flex flex-col gap-2'>
                    <img src="https://real-estate-web.pages.dev/r1.png" alt="photo1" className='w-[180px]'/>   
                    <p className='text-[grey] font-semibold'><span className='text-[orange]'>$</span>47,043</p>  
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-blue-900 font-bold text-xl'>Aliva Priva Jardin</p>
                    <p className='text-xs text-[grey]'>domkhel wasti,shivaji cho,wagholi 412207</p>
                </div>
            </div>

            <div className='w-[22%] rounded-md p-3 flex flex-col items-center transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#f2eaf7] '>
                <div className='flex flex-col gap-2'>
                    <img src="https://real-estate-web.pages.dev/r2.png" alt="photo1" className='w-[180px]'/>   
                    <p className='text-[grey] font-semibold'><span className='text-[orange]'>$</span>47,043</p>  
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-blue-900 font-bold text-xl'>Aliva Priva Jardin</p>
                    <p className='text-xs text-[grey]'>domkhel wasti,shivaji cho,wagholi 412207</p>
                </div>
            </div>

            <div className='w-[22%] rounded-md p-3 flex flex-col items-center transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#dfc9ee] '>
                <div className='flex flex-col gap-2'>
                    <img src="https://real-estate-web.pages.dev/r3.png" alt="photo1" className='w-[180px]'/>   
                    <p className='text-[grey] font-semibold'><span className='text-[orange]'>$</span>47,043</p>  
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-blue-900 font-bold text-xl'>Aliva Priva Jardin</p>
                    <p className='text-xs text-[grey]'>domkhel wasti,shivaji cho,wagholi 412207</p>
                </div>
            </div>

            <div className='w-[22%] rounded-md p-3 flex flex-col items-center transition duration-500 ease-in-out transform hover:scale-105 hover:bg-[#dfc9ee] '>
                <div className='flex flex-col gap-2'>
                    <img src="https://real-estate-web.pages.dev/r1.png" alt="photo1" className='w-[180px]'/>   
                    <p className='text-[grey] font-semibold'><span className='text-[orange]'>$</span>47,043</p>  
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-blue-900 font-bold text-xl'>Aliva Priva Jardin</p>
                    <p className='text-xs text-[grey]'>domkhel wasti,shivaji cho,wagholi 412207</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
