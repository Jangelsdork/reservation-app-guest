"use client"
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const CollapsibleSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-neutral-900">
      {/* Sidebar */}
      
        <div className="fixed inset-y-0 left-0 z-50 w-56 bg-neutral-700">
          <div className="p-4">
            <h1 className="text-xl font-bold">Sidebar</h1>
            {/* Sidebar content goes here */}
          </div>
        </div>

      {/* Main content */}
      <div className='flex flex-row w-[100vw] justify-center align-end'>
      <div className="flex-1 p-8">
        {/* Main content goes here */}
      </div>
      </div>
    </div>
  );
};

export default CollapsibleSidebar;