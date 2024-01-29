import React, { useState }  from 'react'
import logo from '../assets/picha.png'
import { FaLightbulb } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from 'react-scroll';

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
    <div className={`font-mono w-full  ${lightmode? 'bg-white text-black': 'bg-stone-950  text-white'}`}>
        <div className='flex fixed w-full justify-between md:justify-center gap-20 md:gap-64 items-center p-4 z-50 bg-opacity-60 backdrop-blur-lg backdrop-filter:blur(8px) bg-clip-padding'>
            {/**logo */}
            <Link activeClass="active" to="about"  smooth={true} offset={50} duration={500} >
                        <div className=' h-[30px] rounded-full w-[30px] cursor-pointer'>
<img className='w-full h-full rounded-full'
 src={logo}
  alt="Solomon." />
            </div>
                    </Link>
            
            {/**links to various pages */}
            <div>
                <ul className='hidden md:flex items-center gap-4 font-semibold text-2xl'>
                    <Link activeClass="active" to="about"  smooth={true} offset={50} duration={500} >
                        <li className='cursor-pointer'>About</li>
                    </Link>
                    <Link activeClass="active" to="projects"  smooth={true} offset={50} duration={500} >
                        <li className='cursor-pointer'>Project</li>
                    </Link>
                    <Link activeClass="active" to="skills"  smooth={true} offset={50} duration={500} >
                        <li className='cursor-pointer'>Skills</li>
                    </Link>
                    
                    <Link activeClass="active" to="contact"  smooth={true} offset={50} duration={500} >
                        <li className='cursor-pointer'>Contact</li>
                    </Link>
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
                  <Link onClick={handleClick} activeClass="active" to="about"  smooth={true} offset={50} duration={500} >
                        About
                    </Link>
                    <Link onClick={handleClick} activeClass="active" to="projects"  smooth={true} offset={50} duration={500} >
                        Project
                    </Link>
                    <Link onClick={handleClick} activeClass="active" to="skills"  smooth={true} offset={50} duration={500} >
                        Skills
                    </Link>
                    
                    <Link onClick={handleClick} activeClass="active" to="contact"  smooth={true} offset={50} duration={500} >
                        Contact
                    </Link>
                </ul>
            </div>
      </div>
    }
    </div>
  )
}

export default Navbar