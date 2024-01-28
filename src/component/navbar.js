import React, { useState }  from 'react'
import logo from '../assets/picha.png'
import { FaLightbulb } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const [lightmode, setLightmode]=useState(false)
  const [menu, setMenu]=useState(false)
  const handleMenu=()=>{
      setMenu(!menu)
    }
    const handleClose=()=>{
      setMenu(false)
    }
    const handleClick=()=>{
      handleClose()
    }
    
    const switchLight=()=>{
      setLightmode(!lightmode)
    }
  
  return (
    <div className='font-mono'>
        <div className='flex justify-between md:justify-center gap-20 md:gap-64 items-center p-2 z-50 bg-opacity-60 backdrop-blur-lg backdrop-filter:blur(8px) bg-clip-padding'>
            {/**logo */}
            <div className='border h-[30px] rounded-full w-[30px]'>
<img className='w-full h-full rounded-full'
 src={logo}
  alt="Solomon." />
            </div>
            {/**links to various pages */}
            <div>
                <ul className='hidden md:flex items-center gap-4 text-2xl'>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Projects</li>
                    <li className='cursor-pointer'>Skills</li>
                    <li className='cursor-pointer'>Contact</li>
                    <FaLightbulb onClick={switchLight} size={25} className='cursor-pointer' />
                </ul>
            </div>
            {/**lightmode logo */}
            <div className='flex items-center md:hidden gap-2'>
            <FaLightbulb onClick={switchLight} size={25} className='flex md:hidden cursor-pointer' />
            <MdMenu onClick={handleMenu} size={25} className='flex md:hidden' />
            </div>
        </div>
        {
      menu &&
      <div className='w-full h-screen'>
        <div className='h-screen w-full '>
                
                  <ul className='flex flex-col top-0 pt-16 p-8 text-4xl text-gray-300 bg-transparent/40 fixed z-50 inset-0 ease-in-out h-full w-full backdrop-blur-lg backdrop-filter:blur(8px) gap-4 transition duration-100'>
                  <div className=' ml-auto'>
                    <MdClose onClick={handleClose} className='cursor-pointer z-50 font-bold animate-bounce' size={35}/>
                  </div>
                  <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Projects</li>
                    <li className='cursor-pointer'>Skills</li>
                    <li className='cursor-pointer'>Contact</li>
                </ul>
            </div>
      </div>
    }
    </div>
  )
}

export default Navbar