import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaMessage } from "react-icons/fa6";
const Contact = () => {
  return (
    <div>
      <div className='w-[80%] mx-auto flex justify-between p-[10px]'>
        {/* info */}
        <div className='flex flex-col gap-[30px] w-[45%]'>
            <div className='flex-col gap-[20px]'>
                <p className='font-semibold text-[orange] text-xl'>Our Contact Us</p>
                <h1 className='font-bold text-blue-900 text-2xl'>Easy to Contact Us</h1>
                <p className='text-[grey] text-xs'>We always ready to help by providijng the best services for you.<br/>
                We beleive a good blace to live can make your life better</p>
            </div>
            <div>
            <div className='flex flex-col gap-[15px] '>
                {/* first two cards */}
                <div className='flex justify-evenly'>
                    {/* first */}
                    <div className='w-[45%] p-[10px] border rounded-[5px] flex flex-col gap-[10px] transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg'>
                        <div className='flex gap-5'>
                            <div className='h-[30px] w-[30px] bg-[#eeeeff] flex items-center justify-center rounded-[5px] '>
                            <FaPhoneAlt />
                            </div>
                            <p className='font-semibold'>Call</p>
                        </div>
                        <button className='h-[30px] w-[100%] bg-[#eeeeff] text-xs font-semibold rounded-[5px] text-[blue] transition duration-500 ease-in-out transform hover:cursor-pointer hover:scale-90'>Call Now</button>
                    </div>
                    {/* second */}
                    <div className='w-[45%] p-[10px] border rounded-[5px] flex flex-col gap-[10px]
                    transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg'>
                        <div className='flex gap-5'>
                            <div className='h-[30px] w-[30px] bg-[#eeeeff] flex items-center justify-center rounded-[5px] '>
                            <AiFillMessage />
                            </div>
                            <p className='font-semibold'>Chat</p>
                        </div>
                        <button className='h-[30px] w-[100%] bg-[#eeeeff] text-xs font-semibold rounded-[5px] text-[blue] transition duration-500 ease-in-out transform hover:cursor-pointer hover:scale-90'>Call Now</button>
                    </div>
                </div>
                {/* last two cards */}
                <div>
                <div className='flex justify-evenly'>
                    {/* third */}
                    <div className='w-[45%] p-[10px] border rounded-[5px] flex flex-col gap-[10px]
                    transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg'>
                        <div className='flex gap-5'>
                            <div className='h-[30px] w-[30px] bg-[#eeeeff] flex items-center justify-center rounded-[5px] '>
                            <AiFillMessage />
                            </div>
                            <p className='font-semibold'>Mail</p>
                        </div>
                        <button className='h-[30px] w-[100%] bg-[#eeeeff] text-xs font-semibold rounded-[5px] text-[blue] transition duration-500 ease-in-out transform hover:cursor-pointer hover:scale-90'>Call Now</button>
                    </div>
                    {/* forth */}
                    <div className='w-[45%] p-[10px] border rounded-[5px] flex flex-col gap-[10px]
                    transition duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg'>
                        <div className='flex gap-5'>
                            <div className='h-[30px] w-[30px] bg-[#eeeeff] flex items-center justify-center rounded-[5px] '>
                            <FaMessage />
                            </div>
                            <p className='font-semibold'>Message</p>
                        </div>
                        <button className='h-[30px] w-[100%] bg-[#eeeeff] text-xs font-semibold rounded-[5px] text-[blue] transition duration-500 ease-in-out transform hover:cursor-pointer hover:scale-90'>Call Now</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* image */}
        <div>   
            <img src="https://full-stack-real-estate-youtube-sooty.vercel.app/contact.jpg" alt="contact img" className='w-[350px] h-[410px] rounded-t-[200px] '/>
        </div>
      </div>
    </div>
  )
}

export default Contact
