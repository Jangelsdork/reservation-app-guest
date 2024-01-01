// "use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
// import { useState } from "react";
import { RxHamburgerMenu, RxInfoCircled } from "react-icons/rx";
import { columns } from "./columns";
import { DataTable } from "./dataTable";

async function getData(): Promise<[]> {
  const response = await fetch("http://localhost:3000/api/getUpcomingBookings", {
    cache: "no-store",
  });
  const returnedData = await response.json();
  console.log(returnedData);
  return returnedData.bookings.map((x) => ({
    date: x.booking_date,
    firstName: x.guest.first_name,
    bookingTime: x.start_time,
    numberOfGuests: x.party_size,
    prefer_outdoors: false,
  }));
}

export default async function Index() {
  // const [isOpen, setIsOpen] = useState<boolean>(true);
  const data = await getData();
  return (
    <div className="absolute delay-300 w-100% flex min-h-screen bg-gray-200">
      {/* <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      {/* Main content */}
      <div className="flex flex-row w-[100vw] justify-center align-end bg-neutral-800">
        <div className="flex-1 p-8">
          {/* <button onClick={() => setIsOpen(!isOpen)}> */}
          <RxHamburgerMenu />
          {/* </button> */}
          <div className="w-[80vw]">{/* <Calendar className=''/> */}</div>
          {/* Main content goes here */}
          <div className="pl-64">
            <div className="container mx-auto py-10">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
