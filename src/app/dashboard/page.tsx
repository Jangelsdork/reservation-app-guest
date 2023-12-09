"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { RxHamburgerMenu, RxInfoCircled } from "react-icons/rx";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {};

const Index = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="absolute delay-300 w-100% flex h-screen bg-gray-200">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* Main content */}
      <div className="flex flex-row w-[100vw] justify-center align-end bg-neutral-800">
        <div className="flex-1 p-8">
          <button onClick={() => setIsOpen(!isOpen)}>
            <RxHamburgerMenu />
          </button>
          <div className="w-[80vw]">{/* <Calendar className=''/> */}</div>
          {/* Main content goes here */}
          <div className="pl-64">
            <Table>
              <TableCaption>Bookings until 01 Feb 2024</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Date</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead className="text-right">Guests</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">01 Jan 2024</TableCell>
                  <TableCell>Hungry Jackson</TableCell>
                  <TableCell>19:00</TableCell>
                  <TableCell className="text-right">4</TableCell>
                  <TableCell><RxInfoCircled /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">01 Jan 2024</TableCell>
                  <TableCell>Thirsty Jillson</TableCell>
                  <TableCell>20:00</TableCell>
                  <TableCell className="text-right">7</TableCell>
                  <TableCell><RxInfoCircled /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
