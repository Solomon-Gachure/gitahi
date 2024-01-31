import React, { useEffect, useState } from 'react'
import { FaLightbulb } from 'react-icons/fa'
const Bulb = () => {
    const [theme, setTheme]= useState(localStorage.getItem("theme" || "light"));
    const element= document.documentElement;
    useEffect(()=>{
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");

        }
    }, [theme]);
    const changeTheme = ()=>{
        setTheme((prevTheme)=>(prevTheme === "light" ? "dark" : "light"))
    }
  return (
        <div>
        <FaLightbulb size={25} className={`flex cursor-pointer ${theme === "light" ? 'text-yellow-500' : ''}`} onClick={changeTheme} />
      </div>
  )
}

export default Bulb