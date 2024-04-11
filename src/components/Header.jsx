import React from 'react'

const Header = () => {
  return (
    <div className='bg-black'>
      <div className='flex justify-between w-[80%] mx-auto item-center p-3 '>
        <div className=''>
            <img src="https://real-estate-web.pages.dev/logo.png" alt="Logo" className='w-[100px]'/>
        </div>
        <div className='text-white flex gap-6 items-center text-s'>
          <p>Residencies</p>
          <p>Our Value</p>
          <p>Contact Us</p>
          <p>Get Started</p>
          <button className='bhau'>Submit</button>
        </div>
    </div>
    </div>
  )
}

export default Header

