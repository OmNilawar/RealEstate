import React from 'react'
const Home = () => {
  return (
    <div className='bg-black text-white w-full p-[20px]'>
      <div className='w-[70%] mx-auto flex justify-between'>
        <div className='w-[40%] flex flex-col justify-evenly'>
          
            <p className='font-bold text-4xl'>
            Discover <br/>Most Suitable Property
            </p>

            <p className='text-[grey] text-xs'>
            Find a variety of properties that suit you very easilty Forget all difficulties in finding a residence for you
            </p>

            <div className='bg-white w-full flex gap-3 items-center 
            p-1 rounded-[5px] border border-[grey] border-[2px]'>
              <input type="text"  className='text-black w-[70%] h-[25px] p-4 focus:outline-none placeholder-grey-500' placeholder='Search by city/country...'/>
              <button className='bhau'>Search</button>
            </div>
            
            

            <div className='flex justify-between text-2xl'>
              <div className='flex flex-col items-center gap-1'>
                <p className='item-center'>9,000 <span className='text-[orange]'>+</span></p>
                <p className='text-xs text-[grey]'>Premium Product</p>
              </div>

              <div className='flex flex-col items-center gap-1'>
                <p className='item-center'>9,000 <span className='text-[orange]'>+</span></p>
                <p className='text-xs text-[grey]'>Premium Product</p>
              </div>

              <div className='flex flex-col items-center gap-1'>
                <p className='item-center'>9,000 <span className='text-[orange]'>+</span></p>
                <p className='text-xs text-[grey]'>Premium Product</p>
              </div>
            </div>

        </div>
        <div>
            <img src="https://real-estate-web.pages.dev/hero-image.png" alt="Homepage Img" className='w-[350px] h-[410px] rounded-t-[200px] border border-[#3d3c3c] border-[5px]'/>
        </div>
      </div>
    </div>
  )
}

export default Home
