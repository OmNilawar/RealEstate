import React from 'react'

const Subscribe = () => {
  return (
    <div>
      <div className='border w-[80%] mx-auto bg-[#4161df] flex justify-center p-[2%] rounded-[10px] border border-[#5a73d7] border-[5px]'>
            <div className='flex flex-col gap-5 items-center'>
                <p className='font-bold text-white text-2xl'>Get started with Homyz</p>
                <p className='text-xs text-[#b1bef0]'>Subscribe and find super attractive price quotes from us.<br/>
                    Find your residence soon</p>
                <button className='text-xs text-white bg-[#5a73d7] h-[30px] w-[100px] rounded-[7px] border border-white border-[1px] transition duration-500 ease-in-out transform hover:scale-110'>Get Started</button>
            </div>
      </div>
    </div>
  )
}

export default Subscribe
