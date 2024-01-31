import React, {useEffect} from 'react'
import profile from '../assets/profilepic.png'
import {FaGithub, FaLinkedin, FaWhatsapp} from 'react-icons/fa6'
import { HiOutlineMail } from "react-icons/hi";
import AOS from 'aos'
import 'aos/dist/aos.css';

const Contact = () => {
    const WhatsAppLink = ()=>{
    const number='+254798605270'
    const message="hey there solomon!"
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  }
  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
  }, []);
  return (
    <div name='contact' className=' h-full font-mono  text-gray-600 dark:text-white p-2'>
        <div className='flex flex-col items-center justify-center p-4 pt-10 '>
<div className=' w-full md:pl-40'>
    <h1 className='text-4xl text-start md:text-5xl font-extrabold border-b md:w-[600px] font-roboto pb-4 '>Contact</h1>
    </div>
    {/**image */}
    
        <div className='flex  gap-4 pt-4 max-w-4xl  '>
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='border-b  '>
                <div  className='md:w-[250px] md:h-[300px]  w-[150px] h-[150px] rounded-t-full  '>
            <img className='w-full h-full object-cover rounded-t-full'  src={profile} alt="profile" />
            
        </div>
            </div>
            <div className='md:text-xl'>
                <p><span className='text-amber-300'>Bonjour again!</span><br/><br/>
                I'd love to hear from you, You can reach me through:
                </p>
                <div className='flex  justify-center items-center md:pt-4 text-gray-600 dark:text-gray-300 gap-4 md:gap-8'>
                <a href="mailto:gachuresolomon64@gmail.com/" target='blank'><HiOutlineMail size={30}/></a>
                <a href="https://www.linkedin.com/in/solomon-gachure-64a167183/" target='blank'><FaLinkedin size={30}/></a>
                 <a href="https://github.com/Solomon-Gachure" target='blank'><FaGithub size={30}/></a>
                <FaWhatsapp size={30} className='cursor-pointer' target='_blank' onClick={WhatsAppLink}/>
            </div>
            </div>
            
        </div>
    
        </div>
        </div>
  )
}

export default Contact