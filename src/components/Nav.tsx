"use client"

/* eslint-disable arrow-body-style */
import React from 'react' 
import Image from 'next/image'
import { useTheme } from "next-themes";


type Props = {}



const nav = () => {

    const { theme, setTheme } = useTheme()

    function handleClick(){
        setTheme('light')
        console.log(theme)
    }

  return (
    <div className='absolute w-[100vw] bg-transparent flex flex-row justify-end'>
        <button className='w-[15px] m-3 h-[15px] bg-black' onClick={handleClick}>
            {/* <Image src= /> */}
        </button>
    </div>
  )
}

export default nav