"use client"
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiArrowCircleLeft } from "react-icons/tfi";



const CollapsibleSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <Transition
        show={isOpen}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed inset-y-0 left-0 z-50 w-64 bg-neutral-900 shadow-xl">
          <div id='container' className="flex flex-col w-100%">
            <div id='collapse' className='flex flex-row justify-end pr-2 sm:pr-4 pt-10 sm:pt10'>
            <button
          onClick={() => setIsOpen(!isOpen)}
        ><TfiArrowCircleLeft />

        </button>
            </div>
          </div>
        </div>
      </Transition>

      {/* Main content */}
      <div className='flex flex-row w-[100vw] justify-center align-end bg-neutral-800'>
      <div className="flex-1 p-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
        >
         <RxHamburgerMenu />

        </button>
        {/* Main content goes here */}
      </div>
      </div>
    </div>
  );
};

export default CollapsibleSidebar;