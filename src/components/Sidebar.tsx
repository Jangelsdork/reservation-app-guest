"use client"
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { FaCalendar } from "react-icons/fa";
import { BsCalendar, BsPeople, BsShop } from "react-icons/bs";


import Avvvatars from 'avvvatars-react'




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
        <div className="fixed inset-y-0 left-0 z-50 w-64 bg-neutral-900 shadow-xl pl-2 pr-2">
          <div id='container' className="flex flex-col w-100%">
            <div id='collapse_icon' className='flex flex-row justify-end pr-2 sm:pr-4 pt-10'>
            <button
          onClick={() => setIsOpen(!isOpen)}
        ><TfiArrowCircleLeft />

        </button>
            </div>
            <div id='user_block' className='p-4 flex flex-row items-center border-b border-neutral-500'>
              <div id='avatar'> <Avvvatars value="JM" /> </div> {/*to do: get avatar url, load avatar (or, change avvvatars value) */}
              <div className='flex flex-col pl-4'>
              <h1 className='text-whitete xt-xl font-bold '>Jack Mangelsdorf</h1> {/*to do: get user name*/}
              <h2 className='text-xs '>Super User</h2> {/*to do: get role*/}
              </div>
            </div>
            <div id='menu' className=' flex flex-col h-[50vh] gap-8 pt-10'>
              <div className='flex flex-row  items-center gap-4 pl-8'><BsCalendar /> Bookings</div>
              <div className='flex flex-row  items-center gap-4 pl-8'><BsShop />
 Manage venue</div>
              <div className='flex flex-row  items-center gap-4 pl-8'><BsPeople /> Manage People</div>
          
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