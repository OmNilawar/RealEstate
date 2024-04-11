import React from 'react'
import { useState } from 'react'
import { MdOutlineExpandMore } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { BsFileBarGraph } from "react-icons/bs";

const Values = () => {
    const[first,setfirst] = useState(false);
    const[second,setsecond] = useState(false);
    const[third,setthird] = useState(false);

    const change1 = () => {
      setfirst(true);
      setsecond(false);
      setthird(false);
    }

    const change2 = () => {
      setfirst(false);
      setsecond(true);
      setthird(false);
    }

    const change3 = () => {
      setfirst(false);
      setsecond(false);
      setthird(true);
    }
  return (
    <div className=''>
      <div className='w-[80%] mx-auto flex gap-[100px]'>
        <div>
            <img src="https://full-stack-real-estate-youtube-sooty.vercel.app/value.png" alt="curve 2" className='w-[350px] h-[410px] rounded-t-[200px] border border-[#e3dede] border-[5px]'/>
        </div>
        
        <div className='w-[50%] flex flex-col gap-[30px]'>
            <div className='flex-col gap-[20px]'>
              <p className='font-semibold text-[orange] text-xl'>Our Value</p>
              <h1 className='font-bold text-blue-900 text-2xl'>Value We Give to You</h1>
              <p className='text-[grey] text-xs'>We always ready to help by providijng the best services for you.<br/>
              We beleive a good blace to live can make your life better</p>
            </div>

            <div className='flex flex-col gap-[10px] '>
                {/* first card */}
                <div className={`border p-4 rounded-md flex flex-col gap-[25px] hover:cursor-pointer ${first ? 'shadow-2xl' : ''}`} onClick={change1}>
                  <div className='flex flex-row justify-between
                  items-center'>
                    
                    <div className='h-[30px] w-[30px] bg-[lightblue] flex items-center justify-center rounded-[5px]'>
                      <LuShieldCheck />
                    </div>

                  <p className='font-bold text-blue-900 text-s'>Best interest rates on the market</p>

                  <div className='h-[30px] w-[30px] bg-[lightblue] flex items-center justify-center rounded-[5px]'>
                    <MdOutlineExpandMore />
                  </div>
                  
                  </div>

                  {/* part 2 */}
                  {first ? <div className='text-[grey] text-xs'>
                    <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
                  </div> : null}
                </div>


                  {/* second Card */}
                  <div className={`border p-4 rounded-md flex flex-col gap-[25px] hover:cursor-pointer
                  ${second ? 'shadow-2xl' : ''}`} onClick={change2}>
                  <div className='flex flex-row justify-between
                  items-center'>
                    
                    <div className='h-[30px] w-[30px] bg-[lightblue] flex items-center justify-center rounded-[5px]'>
                    <RxCrossCircled />
                    </div>

                  <p className='font-bold text-blue-900 text-s'>Prevent Unstable Prices</p>

                  <div className='h-[30px] w-[30px] bg-[lightblue] flex items-center justify-center rounded-[5px]'>
                    <MdOutlineExpandMore />
                  </div>
                  
                  </div>

                  {/* part 2 */}
                  {second ? <div className='text-[grey] text-xs'>
                    <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
                  </div> : null}
                </div>

                {/* third card */}
                <div className={`border p-4 rounded-md flex flex-col gap-[25px] hover:cursor-pointer
                ${third ? 'shadow-2xl' : ''}`} onClick={change3}>
                  <div className='flex flex-row justify-between
                  items-center'>
                    
                    <div className='h-[30px] w-[30px] bg-[lightblue] flex items-center justify-center rounded-[5px]'>
                    <BsFileBarGraph />

                    </div>

                  <p className='font-bold text-blue-900 text-s'>Best Prices on the market</p>

                  <div className='h-[30px] w-[30px] bg-[lightblue] flex items-center justify-center rounded-[5px]'>
                    <MdOutlineExpandMore />
                  </div>
                  
                  </div>


                  {/* part 2 */}
                  {third ? <div className='text-[grey] text-xs'>
                    <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
                  </div> : null}
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
  
}

export default Values
