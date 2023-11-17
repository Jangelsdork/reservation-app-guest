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

  return (
    <div className="absolute w-[100vw] bg-transparent flex flex-row justify-end">
      <button className="w-[15px] m-3 h-[15px] dark:bg-black light:bg-yellow-400" onClick={handleClick2}>
        {/* <Image src= /> */}
      </button>
      <button className="w-[15px] m-3 h-[15px] bg-white" onClick={handleClick}>
        {/* <Image src= /> */}
      </button>
    </div>
  );
};

export default nav;
