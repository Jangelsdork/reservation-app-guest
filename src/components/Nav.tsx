"use client";

/* eslint-disable arrow-body-style */
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Props = {};

const nav = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  function handleClick() {
    setTheme("light");
    console.log(theme);
  }
  function handleClick2() {
    setTheme("dark");
    console.log(theme);
  }


  if (!mounted) {
    return null
  }

  function  Icon(){
    if(theme==="light"){
      return(
        <div className="m-3 cursor-pointer	" onClick={handleClick2} >
        <Image  src="/moon.svg" alt="dark icon" width={20} height={20}/>
        </div>
      )
    }
      return(
        <div className="m-3 cursor-pointer	" onClick={handleClick}>
        <Image src="/sun.svg" alt="light icon" width={20} height={20}/>
        </div>
      )
  }

  return (
    <div className="absolute w-[100vw] bg-transparent flex flex-row justify-end">
      <Icon />
      {/* <button className="w-[15px] m-3 h-[15px] dark:bg-black light:bg-yellow-400" onClick={handleClick2}>
      </button>
      <button className="w-[15px] m-3 h-[15px] bg-white" onClick={handleClick}>
      </button> */}
    </div>
  );
};

export default nav;
