"use client"

import React from 'react'
import Sidebar from '@/components/Sidebar'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";




type Props = {}

const Index = (props: Props) => {

  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
 
    <div className="absolute delay-300 w-100% flex h-screen bg-gray-200">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Main content */}
      <div className='flex flex-row w-[100vw] justify-center align-end bg-neutral-800'>
        <div className="flex-1 p-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxHamburgerMenu />

          </button>
          <div className='w-[80vw]'>
            {/* <Calendar className=''/> */}
          </div>
          {/* Main content goes here */}
        </div>
      </div>
    </div>
  )
}

export default Index